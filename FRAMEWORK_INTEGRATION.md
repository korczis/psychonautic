# Framework Integration Documentation

## Overview

The Psychonautic documentation site now includes advanced JavaScript framework integration with:

- **Flowbite 2.2.1** - Advanced UI components and utilities
- **Alpine.js** - Reactive components and state management
- **Custom table components** - Enhanced data display with sorting, filtering, and search

## Integration Details

### Base Template Updates

The `/themes/psychonautic/templates/base.html` now includes:

1. **Flowbite CSS** loaded from CDN before main.css
2. **Flowbite JavaScript** loaded after content for component initialization
3. Proper loading order: CSS → Alpine.js → Flowbite JS → Custom scripts

### New CSS Classes

#### Advanced Table Styling
- `.flowbite-table` - Base table class with theme integration
- `.table-striped` - Striped row styling
- `.table-bordered` - Border styling
- `.table-compact` - Reduced padding
- `.table-responsive` - Responsive wrapper with horizontal scroll
- `.table-sortable` - Sortable column headers with hover effects

#### Table Components
- `.table-header` - Table controls section
- `.table-search` - Search input styling
- `.table-filters` - Filter button styling
- `.table-pagination` - Pagination controls
- `.table-badge` - Status badges with dark mode support

#### Interactive Features
- `.table-row-selectable` - Clickable row styling
- `.table-row-selected` - Selected state styling
- `.table-loading` - Loading state overlay

### JavaScript Functionality

#### Alpine.js Components

**advancedTable(initialData, columns, options)**
- Complete table management with sorting, filtering, pagination
- CSV/JSON export functionality
- Search across all columns
- Responsive design support

**app()**
- Extended with table event handling
- Dark mode compatibility
- Sidebar and navigation management

#### Flowbite Integration
- Automatic component initialization
- Event-driven table functionality
- Responsive behavior
- Dark mode synchronization

## Usage Examples

### Basic Advanced Table

```html
<div x-data="advancedTable(tableData, columns, { itemsPerPage: 15, showPagination: true })"
     class="sortable-table-container">

    <!-- Table Controls -->
    <div class="table-controls">
        <input type="search"
               x-model="searchTerm"
               @input="search()"
               placeholder="Hledat..."
               class="table-search">
        <button @click="exportToCSV()">Export CSV</button>
    </div>

    <!-- Table -->
    <div class="table-wrapper">
        <table class="flowbite-table table-sortable">
            <thead>
                <tr>
                    <th @click="sort('name')" :class="getSortClass('name')">
                        Název
                    </th>
                    <th @click="sort('category')" :class="getSortClass('category')">
                        Kategorie
                    </th>
                </tr>
            </thead>
            <tbody>
                <template x-for="item in paginatedData" :key="item.id">
                    <tr>
                        <td x-text="item.name"></td>
                        <td x-text="item.category"></td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

    <!-- Pagination -->
    <div x-show="showPagination" class="table-pagination">
        <span x-text="'Strana ' + currentPage + ' z ' + totalPages"></span>
        <div>
            <button @click="prevPage()" :disabled="currentPage === 1">←</button>
            <button @click="nextPage()" :disabled="currentPage === totalPages">→</button>
        </div>
    </div>
</div>
```

### Table with Filters

```html
<div class="table-filters">
    <button class="table-filter-btn"
            :class="{ 'active': filters.category === 'alkaloid' }"
            @click="filterBy('category', 'alkaloid')">
        Alkaloidy
    </button>
    <button class="table-filter-btn"
            :class="{ 'active': filters.category === 'tryptamin' }"
            @click="filterBy('category', 'tryptamin')">
        Tryptaminy
    </button>
</div>
```

### Responsive Table with Status Badges

```html
<div class="table-responsive">
    <table class="flowbite-table table-striped">
        <thead>
            <tr>
                <th>Látka</th>
                <th>Status</th>
                <th>Účinek</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Psilocybin</td>
                <td>
                    <span class="table-badge status-active">Aktivní</span>
                </td>
                <td>Psychedelický</td>
            </tr>
        </tbody>
    </table>
</div>
```

## Dark Mode Support

All new components automatically support dark mode through CSS variables:

- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- `--text-primary`, `--text-secondary`, `--text-tertiary`
- `--border-color`
- `--color-primary-*` scale

Dark mode is toggled via the existing Alpine.js `darkMode` state.

## Responsive Design

Tables automatically adapt to different screen sizes:

- **Desktop**: Full table with all features
- **Tablet** (768px): Reduced padding, stacked controls
- **Mobile** (640px): Compact layout, minimal padding

## Performance Considerations

1. **Lazy Loading**: Flowbite components initialize only when needed
2. **Debounced Search**: 300ms debounce on search inputs
3. **Virtual Pagination**: Large datasets split into pages
4. **CSS Variables**: Efficient theme switching
5. **Minimal Bundle**: Only necessary Flowbite components loaded

## Browser Support

- **Modern browsers**: Full functionality
- **IE11+**: Basic table functionality (degraded Alpine.js features)
- **Mobile browsers**: Full responsive support

## Integration Checklist

- ✅ Flowbite CSS loaded before main.css
- ✅ Alpine.js loaded with defer
- ✅ Flowbite JS loaded after content
- ✅ Event listeners for table interactions
- ✅ Dark mode synchronization
- ✅ Responsive design implementation
- ✅ Czech locale support
- ✅ Export functionality
- ✅ Search and filter capabilities

## Future Enhancements

Potential improvements for future versions:

1. **Virtual scrolling** for very large datasets
2. **Column reordering** with drag and drop
3. **Advanced filters** with date pickers and multi-select
4. **Real-time data** with WebSocket integration
5. **Accessibility** improvements with ARIA labels
6. **Print-friendly** table layouts

---

*Framework integration completed: 2026-01-30*