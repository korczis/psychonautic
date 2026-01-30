+++
title = "Table Examples - Interactive Demonstrations"
description = "Live examples of sortable table components with different data types"
date = 2026-01-30
weight = 10
draft = true

[extra]
lead = "Interactive examples showcasing all table features and data type formatting"
+++

# Interactive Table Examples

Tato stránka demonstruje všechny funkce sortable table komponent s různými typy dat.

## 1. Alkaloid Comparison Table

Základní tabulka s všemi hlavními funkcemi:

{{ csv_table(
    id="alkaloids-demo",
    title="Porovnání psychoaktivních alkaloidů",
    csv_data="
název,třída,mechanismus,afinita,dávka,trvání,potence,dostupnost
Psilocybin,Tryptamin,5-HT2A agonista,6.0,15-30 mg,4-6h,střední,běžná
LSD,Ergolin,5-HT2A agonista,0.5,100-200 μg,8-12h,velmi silná,vzácná
DMT,Tryptamin,5-HT2A agonista,2.0,30-50 mg,15-30min,silná,běžná
Mescaline,Fenylethylamin,5-HT2A agonista,3.0,200-400 mg,10-12h,střední,velmi vzácná
2C-B,Fenylethylamin,5-HT2A agonista,4.0,15-25 mg,4-8h,střední,vzácná
MDMA,Fenylethylamin,SERT inhibitor,5.5,80-120 mg,3-5h,střední,běžná
Ketamine,Arylcyclohexylamin,NMDA antagonista,1200.0,50-100 mg,1-2h,střední,běžná
Salvinorin A,Diterpen,κ-opioid agonista,1.0,0.5-5 mg,5-30min,velmi silná,vzácná
",
    searchable=true,
    exportable=true,
    filterable_columns='["třída", "potence", "dostupnost"]'
) }}

## 2. Mushroom Potency Table

Tabulka s paginací a specializovaným formátováním:

{{ csv_table(
    id="mushrooms-demo",
    title="Potence psilocybinových hub (mg/g sušené hmoty)",
    csv_data="
druh,psilocybin,psilocin,baeocystin,celková_potence,dostupnost,region,sezona
Psilocybe cubensis,4-10,1-3,0.1-0.3,střední,běžná,celosvětově,celoroční
Psilocybe azurescens,15-18,4-8,0.3-0.5,velmi silná,vzácná,Pacifik,podzim
Psilocybe semilanceata,8-12,2-6,0.2-0.4,silná,běžná,Evropa,podzim
Psilocybe cyanescens,8-15,3-7,0.3-0.6,silná,vzácná,Evropa/Amerika,podzim
Psilocybe mexicana,2-6,0.5-2,0.1-0.2,slabá,velmi vzácná,Mexico,léto
Psilocybe bohemica,8-14,3-6,0.3-0.5,silná,vzácná,Střední Evropa,podzim
Psilocybe tampanensis,2-8,1-4,0.1-0.3,střední,vzácná,Florida,léto
Amanita muscaria,0,0,0,střední,běžná,celosvětově,podzim
Amanita pantherina,0,0,0,silná,vzácná,Evropa/Amerika,podzim
",
    paginated=true,
    per_page=5,
    filterable_columns='["celková_potence", "dostupnost", "region", "sezona"]'
) }}

## 3. Receptor Binding Table

Vědecká data s číselným formátováním:

{{ csv_table(
    id="receptors-demo",
    title="Vazební afinita psychedelik k serotoninových receptorům (Ki v nM)",
    csv_data="
látka,5-HT2A,5-HT2B,5-HT2C,5-HT1A,5-HT1B,selectivity,poznámka
LSD,2.3,4.9,9.9,1.5,4.6,nízká,Neselektivní agonista
Psilocin,6.0,N/A,8.9,>1000,N/A,vysoká,Preferuje 5-HT2A
DMT,8.9,N/A,14.2,>1000,N/A,vysoká,Krátké trvání
5-MeO-DMT,>1000,N/A,>1000,2.8,N/A,velmi vysoká,5-HT1A selektivní
Mescaline,1000,5000,3000,>10000,N/A,nízká,Slabá afinita
2C-B,20,15,40,>1000,N/A,střední,Vyvážený profil
DOI,0.7,2.3,4.0,>1000,N/A,vysoká,Vysoká afinita
25I-NBOMe,0.09,0.12,0.15,>1000,N/A,vysoká,Velmi vysoká afinita
",
    searchable=true,
    exportable=true,
    filterable_columns='["selectivity"]',
    sortable_columns='["látka", "5-HT2A", "5-HT2B", "5-HT2C", "selectivity"]'
) }}

## 4. Brain Regions Impact

Neurovědecká data s kategorickým formátováním:

{{ csv_table(
    id="brain-regions-demo",
    title="Vliv psychedelik na mozkové oblasti",
    csv_data="
oblast,funkce,receptory,psychedelický_vliv,intenzita,mechanismus
Prefrontální kůra,Exekutivní funkce,5-HT2A,Změny myšlení,vysoká,Snížená aktivita
Default Mode Network,Sebeuvědomění,5-HT2A,Ego rozpuštění,velmi vysoká,Deaktivace
Zadní singulární kůra,Introspekce,5-HT2A,Mystické zážitky,vysoká,Snížená konektivita
Hippokampus,Paměť,5-HT1A/2A,Změny paměti,střední,Modulace
Amygdala,Emoce/strach,5-HT2A,Redukce strachu,střední,Snížená reaktivita
Vizuální kůra,Zrakové vnímání,5-HT2A,Vizuální halucinace,vysoká,Zvýšená excitabilita
Thalamus,Smyslové filtrování,5-HT2A,Smyslové překrytí,střední,Redukce filtrace
Insula,Tělesné vnímání,5-HT2A,Změny propriocepce,střední,Modulace signálů
Cingulate cortex,Pozornost,5-HT2A,Změny pozornosti,vysoká,Dysregulace
",
    searchable=true,
    exportable=true,
    filterable_columns='["intenzita", "receptory"]'
) }}

## 5. Harm Reduction Data

Praktická data pro harm reduction:

{{ csv_table(
    id="harm-reduction-demo",
    title="Harm reduction guidelines pro psychedelika",
    csv_data="
látka,onset,peak,duration,redose,tolerance,tested_dose,risk_level
LSD,30-90min,2-4h,8-12h,nedoporučeno,okamžitě,100-200μg,nízké
Psilocybin,15-45min,1-3h,4-6h,nedoporučeno,okamžitě,15-30mg,velmi nízké
DMT,1-5min,5-10min,15-30min,možné,žádná,30-50mg,nízké
MDMA,30-60min,1-2h,3-5h,možné po 90min,týden,80-120mg,střední
2C-B,30-90min,2-3h,4-8h,nedoporučeno,den,15-25mg,střední
Ketamine,5-20min,30-60min,1-2h,možné po 45min,týden,50-100mg,střední
Mescaline,60-180min,4-6h,10-12h,nedoporučeno,okamžitě,200-400mg,nízké
5-MeO-DMT,1-5min,10-20min,30-60min,nedoporučeno,žádná,5-15mg,vysoké
",
    searchable=true,
    exportable=true,
    filterable_columns='["risk_level", "tolerance"]'
) }}

## 6. Simple JSON Example

Direct JSON usage for maximum control:

{{ sortable_table(
    id="simple-json-demo",
    title="Serotonin Receptor Subtypes",
    columns='["receptor", "lokalizace", "funkce", "ligandy", "typ"]',
    data='[
        {"receptor": "5-HT1A", "lokalizace": "Raphe nuclei", "funkce": "Inhibice serotoninu", "ligandy": "5-MeO-DMT", "typ": "GPCR"},
        {"receptor": "5-HT2A", "lokalizace": "Kortex", "funkce": "Halucinace", "ligandy": "LSD, Psilocin", "typ": "GPCR"},
        {"receptor": "5-HT2B", "lokalizace": "Srdce", "funkce": "Kardiotoxicita", "ligandy": "MDMA", "typ": "GPCR"},
        {"receptor": "5-HT2C", "lokalizace": "Choroid plexus", "funkce": "Nálada", "ligandy": "LSD, DOI", "typ": "GPCR"}
    ]',
    searchable=true,
    exportable=true,
    paginated=false,
    sortable_columns='["receptor", "lokalizace", "funkce"]',
    filterable_columns='["typ", "lokalizace"]'
) }}

## Feature Demonstrations

### Search Functionality
Zkuste vyhledat "LSD", "5-HT2A", nebo "střední" v kterékoliv tabulce výše.

### Sorting
- Klikněte na záhlaví libovolného sloupce pro řazení
- Opětovné kliknutí změní směr řazení
- Číselné hodnoty jsou řazeny numericky, text podle české lokalizace

### Filtering
- Použijte dropdown filtry pro omezení zobrazených dat
- Filtry lze kombinovat s globálním vyhledáváním
- Filtry se vzájemně ovlivňují

### Export
- Klikněte na "Export" a vyberte formát (CSV nebo JSON)
- Export respektuje aktuální filtrování a viditelnost sloupců

### Column Visibility
- Klikněte na "Sloupce" pro skrytí/zobrazení sloupců
- Užitečné pro fokus na specifická data nebo mobilní zobrazení

### Pagination
- Tabulka hub má povolené stránkování s 5 záznamy na stránku
- Navigace pomocí čísel stran nebo šipek

## Mobile Experience

Tabulky jsou plně responzivní:
- Horizontální scrollování na malých obrazovkách
- Optimalizované ovládací prvky pro dotyk
- Adaptivní velikosti pro různé zařízení

## Czech Language Support

Všechny komponenty podporují českou lokalizaci:
- Řazení s diakritikou
- České labels a messages
- Formátování čísel podle českých standardů
- Proper date/time formatting

---

*Tyto příklady demonstrují všechny dostupné funkce. Pro více informací navštivte [dokumentaci sortable tables](/docs/sortable-tables/).*