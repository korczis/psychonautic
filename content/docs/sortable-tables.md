+++
title = "Sortable Tables - Documentation"
description = "Complete documentation for sortable table components in Psychonautic"
date = 2026-01-30
weight = 5
draft = true

[extra]
lead = "Interactive, sortable tables with advanced features for data presentation"
+++

# Sortable Tables Documentation

Psychonautic poskytuje pokročilé komponenty pro interaktivní tabulky s podporou řazení, filtrování a exportu dat.

## Základní použití

### CSV Table Shortcode

Nejjednodušší způsob vytvoření tabulky je použití `csv_table` shortcode:

```
{{ csv_table(
    id="alkaloids",
    title="Alkaloids Comparison",
    csv_data="
název,typ,mechanismus,afinita,dávka,trvání
Psilocybin,Tryptamin,5-HT2A agonista,6.0,10-25 mg,4-6h
LSD,Ergolin,5-HT2A agonista,0.5,100-200 μg,8-12h
DMT,Tryptamin,5-HT2A agonista,2.0,30-50 mg,15-30min
Mescaline,Fenylethylamin,5-HT2A agonista,3.0,200-400 mg,10-12h
",
    searchable=true,
    exportable=true
) }}
```

### Sortable Table Shortcode

Pro pokročilejší kontrolu použijte přímo `sortable_table` shortcode s JSON daty:

```
{{ sortable_table(
    id="receptors",
    title="Serotonin Receptors",
    columns='["receptor", "typ", "funkce", "afinita"]',
    data='[
        {"receptor": "5-HT2A", "typ": "G-protein", "funkce": "Hallucinace", "afinita": "vysoká"},
        {"receptor": "5-HT2C", "typ": "G-protein", "funkce": "Nálada", "afinita": "střední"}
    ]',
    searchable=true,
    exportable=true,
    paginated=true,
    per_page=5
) }}
```

## Funkce

### 1. Multi-column Sorting
- Klikněte na záhlaví sloupce pro řazení
- Opětovné kliknutí změní směr řazení (vzestupně/sestupně)
- Vizuální indikátory směru řazení
- Podpora českého řazení s diakritikou

### 2. Global Search
- Vyhledávání ve všech sloupcích současně
- Ignoruje diakritiku pro lepší uživatelský zážitek
- Debounce pro optimalizaci výkonu
- Minimální délka dotazu: 2 znaky

### 3. Column Filtering
- Filtrování podle unikátních hodnot ve sloupcích
- Dropdown s automaticky generovanými možnostmi
- Kombinovatelné s globálním vyhledáváním

### 4. Pagination
- Volitelné stránkování pro velké datové sady
- Konfigurovatelný počet záznamů na stránku
- Navigace s čísly stran
- Informace o aktuální pozici

### 5. Export Functionality
- Export do CSV formátu
- Export do JSON formátu
- Exportuje pouze viditelná data po filtrování
- Respektuje skryté sloupce

### 6. Column Visibility Toggle
- Dynamické skrývání/zobrazování sloupců
- Checkbox rozhraní pro každý sloupec
- Zachování dat při skrytí sloupce

## Parametry

### CSV Table

| Parametr | Typ | Výchozí | Popis |
|----------|-----|---------|--------|
| `id` | string | auto | Unikátní identifikátor tabulky |
| `title` | string | - | Nadpis tabulky |
| `csv_data` | string | - | CSV data včetně hlavičky |
| `searchable` | bool | true | Povolit globální vyhledávání |
| `exportable` | bool | true | Povolit export funkcionalitu |
| `paginated` | bool | false | Povolit stránkování |
| `per_page` | int | 10 | Počet záznamů na stránku |

### Sortable Table

| Parametr | Typ | Výchozí | Popis |
|----------|-----|---------|--------|
| `id` | string | auto | Unikátní identifikátor tabulky |
| `title` | string | - | Nadpis tabulky |
| `columns` | JSON array | - | Seznam názvů sloupců |
| `data` | JSON array | - | Data jako pole objektů |
| `searchable` | bool | true | Povolit globální vyhledávání |
| `exportable` | bool | true | Povolit export funkcionalitu |
| `paginated` | bool | false | Povolit stránkování |
| `per_page` | int | 10 | Počet záznamů na stránku |
| `sortable_columns` | JSON array | všechny | Sloupce, které lze řadit |
| `filterable_columns` | JSON array | žádné | Sloupce s filtrováním |

## Automatické formátování

### Typy sloupců

Tabulky automaticky rozpoznávají a formátují následující typy dat:

#### Číselné hodnoty
- `afinita`, `ki` → přidání jednotky "nM" pokud chybí
- Formátování s českou lokalizací (čárka jako oddělovač)

#### Dávky
- `dávka`, `davka`, `dose` → zobrazení jako kód s jednotkami

#### Trvání
- `trvání`, `trvani`, `duration` → modrý badge

#### Typy/kategorie
- `typ`, `type`, `třída`, `class` → zelený badge

#### Mechanismus
- `mechanismus`, `mechanism` → žlutý kód

#### Potence
- `potence`, `potency` → barevně podle síly:
  - Velmi silná → červená
  - Silná → oranžová
  - Střední → žlutá
  - Slabá → zelená

#### Dostupnost
- `dostupnost`, `availability` → barevně podle vzácnosti:
  - Běžná → zelená
  - Vzácná → žlutá
  - Velmi vzácná → červená

#### Links
- Automatické rozpoznání HTTP/HTTPS odkazů
- Interní odkazy začínající "/"

## Responsive Design

### Mobile Optimization
- Horizontální scrollování na malých obrazovkách
- Optimalizované ovládání pro dotykové zařízení
- Skládání ovládacích prvků na úzkých obrazovkách
- Menší padding a font-size pro mobily

### Tablet Support
- Rozumné zobrazení na středních obrazovkách
- Zachování všech funkcí
- Optimalizovaná velikost touch targets

## Performance

### Optimalizace
- Debounced search (300ms)
- Lazy loading pro velké datové sady
- Efficient re-rendering pomocí Alpine.js
- Czech Collator pro rychlé řazení

### Memory Management
- Automatic cleanup při destroy
- Minimální DOM manipulace
- Optimalized change detection

## Styling

### Theme Integration
- Plná integrace s dark/light režimem
- Používá CSS proměnné pro konzistenci
- Flowbite komponenty pro UI prvky
- Tailwind utility classes

### Customization
- CSS custom properties pro easy override
- Modular komponenta struktura
- Extensible formátování funkcí

## Příklady praktického použití

### Alkaloids Table
```
{{ csv_table(
    id="alkaloids-comparison",
    title="Porovnání psychoaktivních alkaloidů",
    csv_data="
název,třída,receptor,afinita,dávka,trvání,potence
Psilocybin,Tryptamin,5-HT2A,6.0,15-30 mg,4-6h,střední
LSD,Ergolin,5-HT2A,0.5,100-200 μg,8-12h,velmi silná
DMT,Tryptamin,5-HT2A,2.0,30-50 mg,15-30min,silná
",
    searchable=true,
    exportable=true,
    filterable_columns='["třída", "potence"]'
) }}
```

### Mushrooms Potency Table
```
{{ csv_table(
    id="mushrooms-potency",
    title="Potence psilocybinových hub",
    csv_data="
druh,psilocybin,psilocin,potence,dostupnost,region
P. cubensis,0.5-1.0,0.1-0.5,střední,běžná,tropické
P. azurescens,1.5-2.0,0.4-0.8,velmi silná,vzácná,pacifik
P. semilanceata,0.8-1.2,0.2-0.6,silná,běžná,evropa
",
    paginated=true,
    per_page=10,
    filterable_columns='["potence", "dostupnost", "region"]'
) }}
```

### Brain Regions Explorer
```
{{ csv_table(
    id="brain-regions",
    title="Mozkové oblasti a psychedelické účinky",
    csv_data="
oblast,funkce,receptory,psychedelický_vliv
Prefrontální kůra,Exekutivní funkce,5-HT2A,Změny myšlení
Zadní singulární kůra,Sebeuvědomění,5-HT2A,Ego rozpuštění
Hippokampus,Paměť,5-HT1A/2A,Změny paměti
",
    searchable=true,
    exportable=true
) }}
```

## Best Practices

### Data Preparation
1. Konzistentní názvy sloupců
2. Standardní formát dat
3. Používání českých názvů pro automatické formátování
4. Validace dat před použitím

### Performance Tips
1. Použijte stránkování pro >50 záznamů
2. Omezte počet filterableColumns
3. Optimalizujte velikost dat
4. Použijte smysluplné ID pro caching

### Accessibility
1. Semantic HTML struktura
2. ARIA labels pro screen readers
3. Keyboard navigation support
4. High contrast compatible

---

*Pro více informací navštivte [GitHub repository](https://github.com/psychonautic/psychonautic) nebo [kontaktujte support](mailto:support@psychonautic.cz).*