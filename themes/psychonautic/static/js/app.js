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
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
                document.body.classList.remove('dark');
            }
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

// Advanced Table Component for Flowbite tables with sorting, filtering, and search
function advancedTable(initialData, columns, options = {}) {
    return {
        data: initialData || [],
        columns: columns || [],
        filteredData: [],
        searchTerm: '',
        sortColumn: '',
        sortDirection: 'asc',
        currentPage: 1,
        itemsPerPage: options.itemsPerPage || 10,
        showPagination: options.showPagination || false,

        init() {
            this.filteredData = [...this.data];
        },

        // Search functionality
        search() {
            if (!this.searchTerm.trim()) {
                this.filteredData = [...this.data];
            } else {
                const term = this.searchTerm.toLowerCase();
                this.filteredData = this.data.filter(item => {
                    return this.columns.some(col => {
                        const value = item[col.key];
                        if (typeof value === 'string') {
                            return value.toLowerCase().includes(term);
                        }
                        return false;
                    });
                });
            }
            this.currentPage = 1;
            this.applySort();
        },

        // Sort functionality
        sort(columnKey) {
            if (this.sortColumn === columnKey) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortColumn = columnKey;
                this.sortDirection = 'asc';
            }
            this.applySort();
        },

        applySort() {
            if (!this.sortColumn) return;

            this.filteredData.sort((a, b) => {
                const aVal = a[this.sortColumn];
                const bVal = b[this.sortColumn];

                // Handle different data types
                let comparison = 0;
                if (typeof aVal === 'number' && typeof bVal === 'number') {
                    comparison = aVal - bVal;
                } else {
                    // Convert to string for comparison, handle null/undefined
                    const aStr = (aVal || '').toString().toLowerCase();
                    const bStr = (bVal || '').toString().toLowerCase();
                    comparison = aStr.localeCompare(bStr, 'cs');
                }

                return this.sortDirection === 'asc' ? comparison : -comparison;
            });
        },

        // Pagination
        get paginatedData() {
            if (!this.showPagination) {
                return this.filteredData;
            }
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredData.slice(start, end);
        },

        get totalPages() {
            return Math.ceil(this.filteredData.length / this.itemsPerPage);
        },

        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },

        nextPage() {
            this.changePage(this.currentPage + 1);
        },

        prevPage() {
            this.changePage(this.currentPage - 1);
        },

        // Get sort icon for column
        getSortIcon(columnKey) {
            if (this.sortColumn !== columnKey) {
                return 'M7 7l3-3 3 3m0 6l-3 3-3-3'; // Default sort icon
            }
            return this.sortDirection === 'asc'
                ? 'M3 4l3 3 3-3M7 18V8' // Ascending arrow
                : 'M7 6v12M7 6l3 3M7 6L4 9'; // Descending arrow
        },

        // Export functionality
        exportToCSV(filename = 'data.csv') {
            const headers = this.columns.map(col => col.label || col.key).join(',');
            const rows = this.filteredData.map(item =>
                this.columns.map(col => {
                    let value = item[col.key] || '';
                    // Clean value for CSV (remove HTML, quotes)
                    value = value.toString().replace(/<[^>]*>/g, '').replace(/"/g, '""');
                    return `"${value}"`;
                }).join(',')
            );

            const csvContent = [headers, ...rows].join('\n');
            this.downloadFile(csvContent, filename, 'text/csv');
        },

        exportToJSON(filename = 'data.json') {
            const jsonContent = JSON.stringify(this.filteredData, null, 2);
            this.downloadFile(jsonContent, filename, 'application/json');
        },

        downloadFile(content, filename, mimeType) {
            const blob = new Blob([content], { type: mimeType });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        },

        // Filter by specific column value
        filterBy(columnKey, value) {
            if (!value) {
                this.filteredData = [...this.data];
            } else {
                this.filteredData = this.data.filter(item => {
                    const itemValue = item[columnKey];
                    return itemValue && itemValue.toString().toLowerCase().includes(value.toLowerCase());
                });
            }
            this.currentPage = 1;
            this.applySort();
        },

        // Get unique values for a column (for filter dropdowns)
        getUniqueValues(columnKey) {
            const values = [...new Set(this.data.map(item => item[columnKey]).filter(v => v))];
            return values.sort();
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

// Initialize Flowbite components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Flowbite components if the library is available
    if (typeof initFlowbite !== 'undefined') {
        initFlowbite();
    }

    // Enhanced table initialization
    const tables = document.querySelectorAll('.flowbite-table');
    tables.forEach(table => {
        // Add responsive table wrapper if not present
        if (!table.closest('.table-responsive')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }

        // Initialize sortable functionality
        if (table.classList.contains('table-sortable')) {
            const headers = table.querySelectorAll('thead th[data-sort]');
            headers.forEach(header => {
                header.style.cursor = 'pointer';
                header.addEventListener('click', () => {
                    const sortField = header.dataset.sort;
                    const event = new CustomEvent('table-sort', {
                        detail: { field: sortField },
                        bubbles: true
                    });
                    table.dispatchEvent(event);
                });
            });
        }

        // Add loading state functionality
        if (table.dataset.loadingTarget) {
            const loadingTarget = document.querySelector(table.dataset.loadingTarget);
            if (loadingTarget) {
                const observer = new MutationObserver(() => {
                    if (loadingTarget.classList.contains('loading')) {
                        table.classList.add('table-loading');
                    } else {
                        table.classList.remove('table-loading');
                    }
                });
                observer.observe(loadingTarget, {
                    attributes: true,
                    attributeFilter: ['class']
                });
            }
        }
    });

    // Initialize table search inputs
    const searchInputs = document.querySelectorAll('.table-search input');
    searchInputs.forEach(input => {
        let debounceTimer;
        input.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const tableId = input.dataset.table;
                if (tableId) {
                    const table = document.getElementById(tableId);
                    if (table) {
                        const event = new CustomEvent('table-search', {
                            detail: { query: e.target.value },
                            bubbles: true
                        });
                        table.dispatchEvent(event);
                    }
                }
            }, 300);
        });
    });

    // Initialize table filters
    const filterButtons = document.querySelectorAll('.table-filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tableId = button.dataset.table;
            const filterField = button.dataset.field;
            const filterValue = button.dataset.value;

            if (tableId) {
                const table = document.getElementById(tableId);
                if (table) {
                    // Toggle active state
                    button.classList.toggle('active');

                    const event = new CustomEvent('table-filter', {
                        detail: {
                            field: filterField,
                            value: button.classList.contains('active') ? filterValue : null
                        },
                        bubbles: true
                    });
                    table.dispatchEvent(event);
                }
            }
        });
    });
});
