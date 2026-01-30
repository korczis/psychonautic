// Sortable Table Component for Psychonautic Theme
// Requires Alpine.js

function sortableTable(config) {
    return {
        // Configuration
        id: config.id,
        columns: config.columns || [],
        originalData: config.data || [],
        searchable: config.searchable !== false,
        exportable: config.exportable !== false,
        paginated: config.paginated === true,
        perPage: config.perPage || 10,
        sortableColumns: config.sortableColumns || config.columns,
        filterableColumns: config.filterableColumns || [],

        // State
        searchQuery: '',
        sortColumn: null,
        sortDirection: 'asc',
        currentPage: 1,
        columnFilters: {},
        visibleColumns: {},

        // Computed data
        filteredData: [],
        paginatedData: [],
        totalPages: 0,

        // Czech collator for proper sorting
        czechCollator: null,

        init() {
            // Initialize Czech collator for proper sorting
            this.czechCollator = new Intl.Collator('cs-CZ', {
                sensitivity: 'base',
                numeric: true,
                ignorePunctuation: true
            });

            // Initialize visible columns (all visible by default)
            this.columns.forEach(column => {
                this.visibleColumns[column] = true;
            });

            // Initialize column filters
            this.filterableColumns.forEach(column => {
                this.columnFilters[column] = '';
            });

            // Initial data processing
            this.filterData();
        },

        // Column display name formatting
        getColumnDisplayName(column) {
            // Convert snake_case to proper Czech title case
            return column
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase())
                .replace(/^(.)/, l => l.toUpperCase());
        },

        // Get unique values for column filtering
        getColumnOptions(column) {
            const values = [...new Set(this.originalData.map(row => row[column]))];
            return values
                .filter(value => value !== null && value !== undefined && value !== '')
                .sort((a, b) => this.czechCollator.compare(String(a), String(b)));
        },

        // Format cell values with proper Czech formatting
        formatCellValue(value, column) {
            if (value === null || value === undefined) {
                return '<span class="text-gray-400">—</span>';
            }

            const strValue = String(value);

            // Handle numeric values with Czech formatting
            if (!isNaN(value) && !isNaN(parseFloat(value))) {
                const num = parseFloat(value);
                if (num % 1 !== 0) {
                    return new Intl.NumberFormat('cs-CZ', {
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 2
                    }).format(num);
                } else {
                    return new Intl.NumberFormat('cs-CZ').format(num);
                }
            }

            // Handle special formatting for different column types
            switch (column.toLowerCase()) {
                case 'afinita':
                case 'ki':
                    return strValue.includes('nM') ? strValue : strValue + ' nM';

                case 'dávka':
                case 'davka':
                case 'dose':
                    return `<code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${strValue}</code>`;

                case 'trvání':
                case 'trvani':
                case 'duration':
                    return `<span class="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">${strValue}</span>`;

                case 'typ':
                case 'type':
                case 'třída':
                case 'trida':
                case 'class':
                    return `<span class="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300">${strValue}</span>`;

                case 'mechanismus':
                case 'mechanism':
                    return `<code class="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded">${strValue}</code>`;

                case 'potence':
                case 'potency':
                case 'síla':
                case 'sila':
                    const potencyClass = this.getPotencyClass(strValue);
                    return `<span class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${potencyClass}">${strValue}</span>`;

                case 'dostupnost':
                case 'availability':
                    const availabilityClass = this.getAvailabilityClass(strValue);
                    return `<span class="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${availabilityClass}">${strValue}</span>`;

                default:
                    // Detect and format links
                    if (strValue.includes('http://') || strValue.includes('https://')) {
                        return `<a href="${strValue}" target="_blank" class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300">${strValue}</a>`;
                    }

                    // Detect internal links (starting with /)
                    if (strValue.startsWith('/') && !strValue.includes(' ')) {
                        return `<a href="${strValue}" class="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300">${strValue}</a>`;
                    }

                    return strValue;
            }
        },

        // Helper for potency styling
        getPotencyClass(value) {
            const lower = value.toLowerCase();
            if (lower.includes('velmi silná') || lower.includes('very strong')) {
                return 'text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300';
            } else if (lower.includes('silná') || lower.includes('strong')) {
                return 'text-orange-800 bg-orange-100 dark:bg-orange-900 dark:text-orange-300';
            } else if (lower.includes('střední') || lower.includes('medium')) {
                return 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
            } else if (lower.includes('slabá') || lower.includes('weak')) {
                return 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300';
            }
            return 'text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-300';
        },

        // Helper for availability styling
        getAvailabilityClass(value) {
            const lower = value.toLowerCase();
            if (lower.includes('běžná') || lower.includes('common')) {
                return 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300';
            } else if (lower.includes('vzácná') || lower.includes('rare')) {
                return 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
            } else if (lower.includes('velmi vzácná') || lower.includes('very rare')) {
                return 'text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300';
            }
            return 'text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-300';
        },

        // Sorting functionality
        sortBy(column) {
            if (!this.sortableColumns.includes(column)) return;

            if (this.sortColumn === column) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortColumn = column;
                this.sortDirection = 'asc';
            }

            this.sortData();
            this.updatePagination();
        },

        sortData() {
            if (!this.sortColumn) return;

            this.filteredData.sort((a, b) => {
                let aVal = a[this.sortColumn];
                let bVal = b[this.sortColumn];

                // Handle null/undefined values
                if (aVal === null || aVal === undefined) aVal = '';
                if (bVal === null || bVal === undefined) bVal = '';

                // Convert to strings for comparison
                aVal = String(aVal);
                bVal = String(bVal);

                // Extract numeric values if present
                const aNum = this.extractNumber(aVal);
                const bNum = this.extractNumber(bVal);

                let comparison;

                // If both values are numeric, compare as numbers
                if (aNum !== null && bNum !== null) {
                    comparison = aNum - bNum;
                } else {
                    // Use Czech collator for string comparison
                    comparison = this.czechCollator.compare(aVal, bVal);
                }

                return this.sortDirection === 'asc' ? comparison : -comparison;
            });
        },

        // Extract number from string (handles units like "10 mg", "5.5 nM")
        extractNumber(str) {
            const match = str.match(/^(\d+(?:\.\d+)?)/);
            return match ? parseFloat(match[1]) : null;
        },

        // Filtering functionality
        filterData() {
            let filtered = this.originalData;

            // Apply global search
            if (this.searchQuery && this.searchQuery.length >= 2) {
                const query = this.searchQuery.toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics for search

                filtered = filtered.filter(row => {
                    return this.columns.some(column => {
                        const value = String(row[column] || '')
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '');
                        return value.includes(query);
                    });
                });
            }

            // Apply column filters
            Object.entries(this.columnFilters).forEach(([column, filterValue]) => {
                if (filterValue) {
                    filtered = filtered.filter(row => {
                        const value = String(row[column] || '');
                        return value === filterValue;
                    });
                }
            });

            this.filteredData = filtered;
            this.currentPage = 1; // Reset to first page
            this.sortData();
            this.updatePagination();
        },

        // Pagination functionality
        updatePagination() {
            if (!this.paginated) {
                this.paginatedData = this.filteredData;
                this.totalPages = 1;
                return;
            }

            this.totalPages = Math.ceil(this.filteredData.length / this.perPage);

            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            this.paginatedData = this.filteredData.slice(startIndex, endIndex);
        },

        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                this.updatePagination();
            }
        },

        getPageNumbers() {
            const pages = [];
            const maxPages = 5; // Show max 5 page numbers

            let start = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
            let end = Math.min(this.totalPages, start + maxPages - 1);

            if (end - start + 1 < maxPages) {
                start = Math.max(1, end - maxPages + 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            return pages;
        },

        // Export functionality
        exportData(format) {
            const visibleData = this.filteredData.map(row => {
                const visibleRow = {};
                this.columns.forEach(column => {
                    if (this.visibleColumns[column]) {
                        visibleRow[this.getColumnDisplayName(column)] = row[column];
                    }
                });
                return visibleRow;
            });

            if (format === 'csv') {
                this.exportCSV(visibleData);
            } else if (format === 'json') {
                this.exportJSON(visibleData);
            }
        },

        exportCSV(data) {
            if (data.length === 0) return;

            const headers = Object.keys(data[0]);
            const csvContent = [
                headers.join(','),
                ...data.map(row =>
                    headers.map(header => {
                        const value = String(row[header] || '');
                        // Escape quotes and wrap in quotes if contains comma or quote
                        if (value.includes(',') || value.includes('"') || value.includes('\n')) {
                            return '"' + value.replace(/"/g, '""') + '"';
                        }
                        return value;
                    }).join(',')
                )
            ].join('\n');

            this.downloadFile(csvContent, `${this.id}-data.csv`, 'text/csv');
        },

        exportJSON(data) {
            const jsonContent = JSON.stringify(data, null, 2);
            this.downloadFile(jsonContent, `${this.id}-data.json`, 'application/json');
        },

        downloadFile(content, filename, mimeType) {
            const blob = new Blob([content], { type: mimeType });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };
}

// Make the function globally available
window.sortableTable = sortableTable;