// Mermaid.js Initialization for Psychonautic Theme
// Handles: auto-detection of mermaid code blocks, dark/light theme sync,
// responsive scaling, PNG export fallback, and error handling.

(function() {
  'use strict';

  var MERMAID_CDN = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';
  var MERMAID_LOADED = false;
  var DIAGRAM_COUNTER = 0;

  // Theme configuration for light and dark modes
  var THEME_CONFIG = {
    light: {
      theme: 'default',
      themeVariables: {
        primaryColor: '#dcfce7',
        primaryTextColor: '#111827',
        primaryBorderColor: '#16a34a',
        secondaryColor: '#f0fdf4',
        secondaryTextColor: '#374151',
        secondaryBorderColor: '#86efac',
        tertiaryColor: '#f3f4f6',
        tertiaryTextColor: '#4b5563',
        tertiaryBorderColor: '#d1d5db',
        lineColor: '#6b7280',
        textColor: '#111827',
        mainBkg: '#dcfce7',
        nodeBorder: '#16a34a',
        clusterBkg: '#f0fdf4',
        clusterBorder: '#86efac',
        titleColor: '#111827',
        edgeLabelBackground: '#ffffff',
        nodeTextColor: '#111827'
      }
    },
    dark: {
      theme: 'dark',
      themeVariables: {
        primaryColor: '#166534',
        primaryTextColor: '#f1f5f9',
        primaryBorderColor: '#22c55e',
        secondaryColor: '#1e293b',
        secondaryTextColor: '#94a3b8',
        secondaryBorderColor: '#334155',
        tertiaryColor: '#334155',
        tertiaryTextColor: '#94a3b8',
        tertiaryBorderColor: '#475569',
        lineColor: '#94a3b8',
        textColor: '#f1f5f9',
        mainBkg: '#166534',
        nodeBorder: '#22c55e',
        clusterBkg: '#1e293b',
        clusterBorder: '#334155',
        titleColor: '#f1f5f9',
        edgeLabelBackground: '#0f172a',
        nodeTextColor: '#f1f5f9'
      }
    }
  };

  /**
   * Detect whether dark mode is currently active.
   */
  function isDarkMode() {
    return document.documentElement.classList.contains('dark');
  }

  /**
   * Get the Mermaid configuration for the current theme.
   */
  function getMermaidConfig(dark) {
    var themeConf = dark ? THEME_CONFIG.dark : THEME_CONFIG.light;
    return {
      startOnLoad: false,
      theme: themeConf.theme,
      themeVariables: themeConf.themeVariables,
      securityLevel: 'loose',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        padding: 15
      },
      sequence: {
        useMaxWidth: true,
        diagramMarginX: 30,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35
      },
      gantt: {
        useMaxWidth: true,
        barHeight: 20,
        barGap: 4,
        topPadding: 50,
        sidePadding: 75
      },
      pie: {
        useMaxWidth: true,
        textPosition: 0.75
      },
      stateDiagram: {
        useMaxWidth: true
      },
      er: {
        useMaxWidth: true
      }
    };
  }

  /**
   * Load Mermaid.js from CDN.
   * Returns a promise that resolves when the library is ready.
   */
  function loadMermaidLibrary() {
    return new Promise(function(resolve, reject) {
      if (MERMAID_LOADED && window.mermaid) {
        resolve(window.mermaid);
        return;
      }

      var script = document.createElement('script');
      script.src = MERMAID_CDN;
      script.async = true;
      script.onload = function() {
        MERMAID_LOADED = true;
        resolve(window.mermaid);
      };
      script.onerror = function() {
        console.warn('[Mermaid] Failed to load from CDN:', MERMAID_CDN);
        reject(new Error('Mermaid CDN load failed'));
      };
      document.head.appendChild(script);
    });
  }

  /**
   * Find all Mermaid diagram sources on the page.
   * Looks for:
   *   1. <pre><code class="language-mermaid"> blocks (standard markdown renderers)
   *   2. <pre><code data-lang="mermaid"> blocks (Zola static site generator)
   *   3. <div class="mermaid-source"> blocks (from shortcode)
   */
  function findMermaidSources() {
    var sources = [];
    var seen = new Set();

    // Pattern 1: Fenced code blocks with language-mermaid class
    var codeBlocks = document.querySelectorAll('pre > code.language-mermaid');
    for (var i = 0; i < codeBlocks.length; i++) {
      var el = codeBlocks[i].parentElement;
      seen.add(el);
      sources.push({
        type: 'codeblock',
        element: el,
        code: codeBlocks[i].textContent.trim()
      });
    }

    // Pattern 2: Zola-style data-lang attribute on code blocks
    var zolaBlocks = document.querySelectorAll('pre > code[data-lang="mermaid"]');
    for (var z = 0; z < zolaBlocks.length; z++) {
      var zolaEl = zolaBlocks[z].parentElement;
      if (!seen.has(zolaEl)) {
        seen.add(zolaEl);
        sources.push({
          type: 'codeblock',
          element: zolaEl,
          code: zolaBlocks[z].textContent.trim()
        });
      }
    }

    // Pattern 2: Explicit <div class="mermaid"> containers (from shortcode)
    var divBlocks = document.querySelectorAll('.mermaid-source');
    for (var j = 0; j < divBlocks.length; j++) {
      sources.push({
        type: 'shortcode',
        element: divBlocks[j],
        code: divBlocks[j].textContent.trim()
      });
    }

    return sources;
  }

  /**
   * Create a diagram container element with proper structure.
   */
  function createDiagramContainer(source, index) {
    var container = document.createElement('div');
    container.className = 'mermaid-diagram';
    container.setAttribute('data-diagram-index', index);

    // Render target
    var renderTarget = document.createElement('div');
    renderTarget.className = 'mermaid-diagram__render';
    renderTarget.id = 'mermaid-diagram-' + index;

    // Controls bar
    var controls = document.createElement('div');
    controls.className = 'mermaid-diagram__controls';

    // PNG export button
    var exportBtn = document.createElement('button');
    exportBtn.className = 'mermaid-diagram__export';
    exportBtn.title = 'Exportovat jako PNG';
    exportBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>PNG</span>';
    exportBtn.addEventListener('click', function() {
      exportDiagramAsPng(container, index);
    });

    // Fullscreen button
    var fullscreenBtn = document.createElement('button');
    fullscreenBtn.className = 'mermaid-diagram__fullscreen';
    fullscreenBtn.title = 'Celá obrazovka';
    fullscreenBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></svg>';
    fullscreenBtn.addEventListener('click', function() {
      toggleFullscreen(container);
    });

    controls.appendChild(exportBtn);
    controls.appendChild(fullscreenBtn);

    // Error fallback (hidden by default)
    var errorFallback = document.createElement('div');
    errorFallback.className = 'mermaid-diagram__error';
    errorFallback.style.display = 'none';

    container.appendChild(renderTarget);
    container.appendChild(controls);
    container.appendChild(errorFallback);

    return container;
  }

  /**
   * Render a single Mermaid diagram.
   */
  async function renderDiagram(mermaidLib, source, container) {
    var renderTarget = container.querySelector('.mermaid-diagram__render');
    var errorFallback = container.querySelector('.mermaid-diagram__error');
    var diagramId = renderTarget.id;

    try {
      var result = await mermaidLib.render(diagramId + '-svg', source.code);
      renderTarget.innerHTML = result.svg;

      // Make SVG responsive
      var svg = renderTarget.querySelector('svg');
      if (svg) {
        svg.removeAttribute('height');
        svg.style.maxWidth = '100%';
        svg.style.height = 'auto';
      }

      container.classList.add('mermaid-diagram--rendered');
    } catch (err) {
      console.warn('[Mermaid] Render error for diagram ' + diagramId + ':', err.message);
      container.classList.add('mermaid-diagram--error');
      errorFallback.style.display = 'block';
      errorFallback.innerHTML =
        '<div class="mermaid-diagram__error-header">Chyba vykresleni diagramu</div>' +
        '<pre class="mermaid-diagram__error-code">' + escapeHtml(source.code) + '</pre>' +
        '<div class="mermaid-diagram__error-message">' + escapeHtml(err.message || 'Neznama chyba') + '</div>';
      renderTarget.style.display = 'none';
    }
  }

  /**
   * Export a rendered diagram as PNG.
   */
  function exportDiagramAsPng(container, index) {
    var svg = container.querySelector('.mermaid-diagram__render svg');
    if (!svg) return;

    var svgData = new XMLSerializer().serializeToString(svg);
    var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(svgBlob);

    var img = new Image();
    img.onload = function() {
      var scale = 2; // 2x resolution for crisp export
      var canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth * scale;
      canvas.height = img.naturalHeight * scale;

      var ctx = canvas.getContext('2d');
      ctx.scale(scale, scale);

      // Fill background
      if (isDarkMode()) {
        ctx.fillStyle = '#0f172a';
      } else {
        ctx.fillStyle = '#ffffff';
      }
      ctx.fillRect(0, 0, img.naturalWidth, img.naturalHeight);

      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      canvas.toBlob(function(blob) {
        var link = document.createElement('a');
        link.download = 'diagram-' + (index + 1) + '.png';
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
      }, 'image/png');
    };
    img.src = url;
  }

  /**
   * Toggle fullscreen display for a diagram.
   */
  function toggleFullscreen(container) {
    if (container.classList.contains('mermaid-diagram--fullscreen')) {
      container.classList.remove('mermaid-diagram--fullscreen');
      document.body.style.overflow = '';
    } else {
      container.classList.add('mermaid-diagram--fullscreen');
      document.body.style.overflow = 'hidden';

      // Close on escape
      var closeHandler = function(e) {
        if (e.key === 'Escape') {
          container.classList.remove('mermaid-diagram--fullscreen');
          document.body.style.overflow = '';
          document.removeEventListener('keydown', closeHandler);
        }
      };
      document.addEventListener('keydown', closeHandler);
    }
  }

  /**
   * Escape HTML entities.
   */
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /**
   * Main initialization: find all diagrams, load Mermaid, render.
   */
  async function initMermaid() {
    var sources = findMermaidSources();
    if (sources.length === 0) return;

    // Replace source elements with diagram containers
    var renderQueue = [];
    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];
      var container = createDiagramContainer(source, DIAGRAM_COUNTER);
      DIAGRAM_COUNTER++;

      // Replace original element
      source.element.parentNode.replaceChild(container, source.element);

      renderQueue.push({ source: source, container: container });
    }

    // Load Mermaid library
    try {
      var mermaidLib = await loadMermaidLibrary();
      var config = getMermaidConfig(isDarkMode());
      mermaidLib.initialize(config);

      // Render all diagrams
      for (var j = 0; j < renderQueue.length; j++) {
        await renderDiagram(mermaidLib, renderQueue[j].source, renderQueue[j].container);
      }
    } catch (err) {
      console.error('[Mermaid] Initialization failed:', err);
      // Show raw code as fallback for all diagrams
      for (var k = 0; k < renderQueue.length; k++) {
        var errContainer = renderQueue[k].container;
        var errFallback = errContainer.querySelector('.mermaid-diagram__error');
        errFallback.style.display = 'block';
        errFallback.innerHTML =
          '<div class="mermaid-diagram__error-header">Knihovna diagramu se nenacetla</div>' +
          '<pre class="mermaid-diagram__error-code">' + escapeHtml(renderQueue[k].source.code) + '</pre>';
        errContainer.querySelector('.mermaid-diagram__render').style.display = 'none';
      }
    }
  }

  /**
   * Re-render all diagrams when theme changes (dark/light toggle).
   * Uses MutationObserver to watch for class changes on <html>.
   */
  function watchThemeChanges() {
    var lastDark = isDarkMode();
    var observer = new MutationObserver(function(mutations) {
      var currentDark = isDarkMode();
      if (currentDark !== lastDark) {
        lastDark = currentDark;
        reRenderAllDiagrams(currentDark);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  /**
   * Re-render all existing diagram containers with the new theme.
   */
  async function reRenderAllDiagrams(dark) {
    if (!window.mermaid) return;

    var containers = document.querySelectorAll('.mermaid-diagram--rendered');
    if (containers.length === 0) return;

    var config = getMermaidConfig(dark);
    window.mermaid.initialize(config);

    for (var i = 0; i < containers.length; i++) {
      var container = containers[i];
      var renderTarget = container.querySelector('.mermaid-diagram__render');
      var index = container.getAttribute('data-diagram-index');

      // We need the original source code; extract from rendered SVG's aria-label
      // or we store it as a data attribute
      var originalCode = container.getAttribute('data-mermaid-source');
      if (!originalCode) continue;

      try {
        var diagramId = 'mermaid-diagram-' + index + '-rerender-' + Date.now();
        var result = await window.mermaid.render(diagramId, originalCode);
        renderTarget.innerHTML = result.svg;

        var svg = renderTarget.querySelector('svg');
        if (svg) {
          svg.removeAttribute('height');
          svg.style.maxWidth = '100%';
          svg.style.height = 'auto';
        }
      } catch (err) {
        console.warn('[Mermaid] Re-render failed for diagram ' + index + ':', err.message);
      }
    }
  }

  /**
   * Modified renderDiagram that stores source code for re-rendering.
   */
  var _originalRenderDiagram = renderDiagram;
  renderDiagram = async function(mermaidLib, source, container) {
    container.setAttribute('data-mermaid-source', source.code);
    return _originalRenderDiagram(mermaidLib, source, container);
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMermaid();
      watchThemeChanges();
    });
  } else {
    initMermaid();
    watchThemeChanges();
  }

})();
