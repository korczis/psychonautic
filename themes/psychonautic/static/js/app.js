// Psychonautic Theme - Alpine.js Application

function app() {
    return {
        darkMode: localStorage.getItem('darkMode') === 'true' ||
                  (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches),
        sidebarOpen: false,
        showBackToTop: false,

        init() {
            // Watch scroll for back to top button and reading progress
            window.addEventListener('scroll', () => {
                this.showBackToTop = window.scrollY > 300;
                this.updateReadingProgress();
            });

            // Close sidebar on escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.sidebarOpen = false;
                }
            });

            // Close sidebar on resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024) {
                    this.sidebarOpen = false;
                }
            });
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        updateReadingProgress() {
            const progress = this.$refs.progress;
            if (progress) {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                progress.style.width = `${percent}%`;
            }
        }
    };
}

// Search functionality
function search() {
    return {
        query: '',
        results: [],
        index: null,

        init() {
            // Index will be loaded when needed
        },

        async doSearch() {
            if (!this.query || this.query.length < 2) {
                this.results = [];
                return;
            }

            if (!this.index && typeof elasticlunr !== 'undefined') {
                this.index = elasticlunr.Index.load(window.searchIndex);
            }

            if (this.index) {
                const searchResults = this.index.search(this.query, {
                    fields: {
                        title: { boost: 2 },
                        body: { boost: 1 }
                    },
                    expand: true
                });

                this.results = searchResults.slice(0, 10).map(result => ({
                    ref: result.ref,
                    doc: this.index.documentStore.getDoc(result.ref)
                }));
            }
        }
    };
}

// Alpine collapse plugin (simple implementation)
document.addEventListener('alpine:init', () => {
    Alpine.directive('collapse', (el, { expression }, { effect, cleanup }) => {
        const defaultStyle = {
            overflow: 'hidden',
            height: '0px',
            paddingTop: '0px',
            paddingBottom: '0px',
            marginTop: '0px',
            marginBottom: '0px'
        };

        const showStyle = {
            overflow: 'visible',
            height: 'auto',
            paddingTop: '',
            paddingBottom: '',
            marginTop: '',
            marginBottom: ''
        };

        effect(() => {
            const show = Alpine.evaluate(el, el.getAttribute('x-show'));
            if (show) {
                Object.assign(el.style, showStyle);
            } else {
                Object.assign(el.style, defaultStyle);
            }
        });
    });
});
