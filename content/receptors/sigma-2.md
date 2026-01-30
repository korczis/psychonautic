+++
title = "Sigma-2 receptor"
description = "Sigma-2 receptor (TMEM97) - regulátor buněčné proliferace a potenciální cíl v onkologii"
weight = 13
insert_anchor_links = "right"

[taxonomies]
categories = ["receptory", "sigma", "TMEM97"]
tags = ["sigma-2", "TMEM97", "proliferace", "onkologie", "cholesterol", "neuroprotekce"]
+++

# Sigma-2 receptor (TMEM97) - Tajemný regulátor buněčného osudu

**Sigma-2 receptor** (S2R), molekulárně identifikovaný jako **TMEM97** (Transmembrane Protein 97), je intracelulární protein s klíčovou rolí v **buněčné proliferaci**, **apoptóze** a **cholesterolovém metabolismu**. Na rozdíl od [Sigma-1 receptoru](@/receptors/sigma-1.md) byl jeho molekulární charakter objasněn teprve nedávno (2017) a představuje slibný cíl pro **onkologickou** terapii a **neurodegenerativní** onemocnění.

---

## Základní charakteristika

### Identifikace TMEM97

| Vlastnost | Hodnota |
|-----------|---------|
| **Typ** | Transmembránový protein |
| **Molekulární identita** | TMEM97 |
| **Gen** | TMEM97 |
| **Chromozom** | 17q11.2 |
| **Délka** | 176 aminokyselin |
| **Transmembránové domény** | 4 |
| **Lokalizace** | ER, lyzozomy, endozomy |

### Historický kontext

```
Sigma-2 receptor - cesta k identifikaci
┌─────────────────────────────────────────────────────┐
│                                                     │
│   1990: Rozlišení S1R vs S2R                       │
│         (na základě vazebných vlastností)          │
│         - S1R: 25 kDa                              │
│         - S2R: 18-21.5 kDa                         │
│                                                     │
│   1990-2016: "Orphan receptor"                     │
│         - Známé ligandy, neznámá identita         │
│         - DTG, siramesine, PB28 vazba             │
│         - Asociace s rakovinou                     │
│                                                     │
│   2017: Molekulární identifikace                   │
│         (Alon et al., PNAS)                        │
│         - Fotoafinitní značení                     │
│         - Proteomická identifikace                 │
│         - S2R = TMEM97                             │
│                                                     │
│   2017-současnost: Funkční charakterizace          │
│         - Cholesterol trafficking                  │
│         - NPC1/PGRMC1 interakce                   │
│         - Terapeutický potenciál                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Struktura TMEM97

### Topologie

```
TMEM97 membránová topologie
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Cytoplazma                                        │
│        │                                            │
│   N-term                                           │
│        │                                            │
│   ═════╪═══════════════════════════════════════════│
│        │     TM1      TM2      TM3      TM4        │
│   ER   ├──────┬────────┬────────┬────────┤        │
│  lumen │      │        │        │        │        │
│        │      │        │        │        │        │
│   ═════╪══════╪════════╪════════╪════════╪════════│
│        │                                  │        │
│        │      ER lumen smyčky            │        │
│        │                                  │        │
│   ─────┴──────────────────────────────────┴─────   │
│                                            C-term  │
│   Cytoplazma                                        │
│                                                     │
│   - 4 transmembránové domény                       │
│   - N a C terminus v cytoplazmě                   │
│   - Interakce s NPC1 a PGRMC1                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Proteinové interakce

| Partner | Lokalizace | Funkce |
|---------|------------|--------|
| **NPC1** | Lyzozomální membrána | Cholesterol export |
| **PGRMC1** | ER, mitochondrie | Steroidní biosyntéza |
| **LDLR** | Plazmatická membrána | LDL uptake |
| **SREBP** | ER/Golgi | Lipidová homeostáza |

---

## Funkce

### Cholesterolová homeostáza

```
TMEM97/S2R v cholesterolovém metabolismu
┌─────────────────────────────────────────────────────┐
│                                                     │
│   LDL částice (extracelulárně)                     │
│              │                                      │
│              ↓ Endocytóza (LDLR)                   │
│              │                                      │
│   ┌──────────┴──────────┐                          │
│   │     ENDOZOM         │                          │
│   │          │          │                          │
│   │          ↓          │                          │
│   │     LYZOZOM         │                          │
│   │          │          │                          │
│   │     ┌────┴────┐     │                          │
│   │     │  NPC1   │←────┼─── TMEM97 interakce     │
│   │     └────┬────┘     │                          │
│   │          │          │                          │
│   │          ↓          │                          │
│   │   Cholesterol       │                          │
│   │   export            │                          │
│   └──────────┬──────────┘                          │
│              │                                      │
│              ↓                                      │
│   ER, plazmatická membrána, mitochondrie          │
│                                                     │
│   TMEM97 = modulátor NPC1 funkce                  │
│   ↓ TMEM97 = narušený cholesterol trafficking     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Niemann-Pick typu C (NPC) spojení

```
TMEM97-NPC1 interakce
┌─────────────────────────────────────────────────────┐
│                                                     │
│   NPC (Niemann-Pick type C) choroba               │
│   ─────────────────────────────────               │
│   - Mutace NPC1 nebo NPC2                         │
│   - Akumulace cholesterolu v lyzozomech           │
│   - Neurodegenerace                               │
│                                                     │
│   TMEM97 role:                                     │
│   - Reguluje NPC1 aktivitu                        │
│   - TMEM97 agonisté mohou ↑ NPC1 funkci          │
│   - Potenciální terapie NPC?                      │
│                                                     │
│   S2R ligandy:                                     │
│   - Některé zlepšují cholesterol trafficking      │
│   - Mechanismus přes TMEM97-NPC1 osu             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Buněčná proliferace a apoptóza

```
S2R/TMEM97 v buněčném osudu
┌─────────────────────────────────────────────────────┐
│                                                     │
│   PROLIFERUJÍCÍ BUŇKY                              │
│   (nádory, kmenové)                                │
│        │                                            │
│        ↓                                            │
│   ↑ TMEM97/S2R exprese                            │
│        │                                            │
│        │                                            │
│   S2R AGONISTA                   S2R AGONISTA      │
│   (nízká dávka)                  (vysoká dávka)    │
│        │                              │            │
│        ↓                              ↓            │
│   Mitogenní signály          Proapoptotické signály│
│        │                              │            │
│        ↓                              ↓            │
│   ↑ PROLIFERACE              ↑ APOPTÓZA           │
│                                                     │
│   Duální role S2R:                                 │
│   - Nízké koncentrace = proliferace               │
│   - Vysoké koncentrace = cytotoxicita             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Mechanismy cytotoxicity

| Mechanismus | Mediátory | Efekt |
|-------------|-----------|-------|
| **Ca²⁺ dysregulace** | ER stres | Apoptóza |
| **Kaspázy** | Kaspáza-3, -9 | Programovaná smrt |
| **Ceramid** | Sfingomyelináza | Proapoptotický signál |
| **Autofagie** | LC3, Beclin | Autofagická smrt |

---

## Farmakologie

### Agonisté

| Látka | Ki (nM) | Selektivita | Použití |
|-------|---------|-------------|---------|
| **DTG (1,3-di-o-tolylguanidine)** | 30-80 | S1R + S2R | Výzkum |
| **Siramesine** | 0.1-1 | S2R > S1R | Výzkum, onkologie |
| **PB28** | 1-5 | S2R selektivní | Výzkum |
| **RHM-1** | 5-15 | S2R selektivní | PET imaging |
| **SV119** | 10-30 | S2R selektivní | Onkologie |

### Antagonisté

| Látka | Ki (nM) | Použití |
|-------|---------|---------|
| **CM398** | 1-5 | Výzkum |
| **CM699** | 2-10 | Výzkum |
| **RHM-4** | 10-30 | Imaging |

### Radioligandy pro imaging

| Ligand | Typ | Aplikace |
|--------|-----|----------|
| **[18F]ISO-1** | PET | Nádorová detekce |
| **[11C]RHM-1** | PET | S2R occupancy |
| **[125I]RHM-4** | SPECT | Výzkum |

---

## Onkologické aplikace

### S2R jako biomarker

```
S2R exprese v nádorech
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Vysoká S2R exprese:                              │
│   ─────────────────────                            │
│   - Prsní karcinom                                 │
│   - Plicní karcinom                                │
│   - Ovariální karcinom                             │
│   - Pankreatický karcinom                          │
│   - Melanom                                         │
│   - Glioblastom                                    │
│                                                     │
│   Klinický význam:                                 │
│                                                     │
│   ↑ S2R = ↑ Proliferace                           │
│         = Horší prognóza                           │
│         = Potenciální terapeutický cíl            │
│                                                     │
│   PET imaging:                                      │
│   [18F]ISO-1 pro staging a monitoring             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Terapeutické strategie

```
S2R-cílená protinádorová terapie
┌─────────────────────────────────────────────────────┐
│                                                     │
│   1. PŘÍMÁ CYTOTOXICITA                            │
│      ───────────────────                           │
│      S2R agonisté (vysoké dávky)                   │
│              │                                      │
│              ↓                                      │
│      Proapoptotická signalizace                    │
│              │                                      │
│              ↓                                      │
│      Nádorová smrt                                 │
│                                                     │
│   2. DRUG DELIVERY                                 │
│      ─────────────                                 │
│      S2R ligandy konjugované s:                    │
│      - Chemoterapeutiky                            │
│      - Cytotoxiny                                  │
│      - Radioisotopy                                │
│              │                                      │
│              ↓                                      │
│      Cílená akumulace v nádoru                    │
│                                                     │
│   3. PDT (Fotodynamická terapie)                  │
│      ────────────────────────                      │
│      S2R-fotosenzitizátor konjugáty               │
│              │                                      │
│              ↓                                      │
│      Nádor-selektivní fotodamage                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Klinický vývoj

| Látka | Typ | Indikace | Status |
|-------|-----|----------|--------|
| **SV119** | Cytotoxický agonista | Solidní nádory | Preklinická |
| **SW43** | Agonista-konjugát | Pankreatický Ca | Preklinická |
| **[177Lu]DOTA-S2R** | Radioimunoterapie | Různé | Fáze I |

---

## Neurodegenerativní onemocnění

### Alzheimerova choroba

```
S2R/TMEM97 v Alzheimerově chorobě
┌─────────────────────────────────────────────────────┐
│                                                     │
│   TMEM97 a Abeta                                   │
│   ──────────────                                   │
│   - TMEM97 interaguje s Abeta oligomery           │
│   - Může modulovat Abeta internalizaci            │
│   - Role v Abeta-indukované toxicitě              │
│                                                     │
│   Cholesterolová hypotéza AD:                      │
│   ──────────────────────────                       │
│   - Cholesterol ovlivňuje APP processing          │
│   - TMEM97 reguluje cholesterol homeostázu        │
│   - Potenciální link: TMEM97 → cholesterol → AD   │
│                                                     │
│   Terapeutický potenciál:                          │
│   ───────────────────────                          │
│   - S2R ligandy jako neuroprotektiva              │
│   - CT1812 (Cognition Therapeutics)               │
│     - S2R antagonista                              │
│     - Fáze II pro AD                               │
│     - Blokuje Abeta toxicitu                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### CT1812 - Klinický vývoj

```
CT1812 v Alzheimerově chorobě
┌─────────────────────────────────────────────────────┐
│                                                     │
│   CT1812 (Cognition Therapeutics)                  │
│   ───────────────────────────────                  │
│   - S2R antagonista/modulátor                      │
│   - Orální podání                                  │
│   - Překračuje BBB                                 │
│                                                     │
│   Mechanismus:                                      │
│   ────────────                                     │
│   Abeta oligomery                                  │
│        │                                            │
│        ↓                                            │
│   Vazba na neuronální receptory                   │
│   (včetně TMEM97/S2R komplexu)                    │
│        │                                            │
│        ↓                                            │
│   Synaptická dysfunkce                            │
│                                                     │
│   CT1812:                                          │
│   - Blokuje Abeta-receptor interakci              │
│   - Chrání synapse                                 │
│   - ↑ Synaptická plasticita                       │
│                                                     │
│   Klinický status:                                 │
│   - Fáze I/II: Bezpečný, dobře tolerovaný        │
│   - Fáze II: SHINE studie (probíhá)               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## PGRMC1 interakce

### TMEM97-PGRMC1 komplex

```
TMEM97-PGRMC1 funkční interakce
┌─────────────────────────────────────────────────────┐
│                                                     │
│   PGRMC1 (Progesterone Receptor Membrane           │
│           Component 1)                              │
│   ───────────────────────────────────────────      │
│   - Heme-vazebný protein                           │
│   - Steroidní signalizace                          │
│   - Cytochrom P450 regulace                        │
│                                                     │
│   TMEM97-PGRMC1 interakce:                        │
│   ───────────────────────                          │
│        ┌─────────┐    ┌─────────┐                 │
│        │ TMEM97  │────│ PGRMC1  │                 │
│        └────┬────┘    └────┬────┘                 │
│             │              │                       │
│             └──────┬───────┘                       │
│                    │                               │
│                    ↓                               │
│   ┌────────────────────────────────────────┐      │
│   │                                        │      │
│   │   - LDL uptake a metabolism           │      │
│   │   - Steroidní biosyntéza              │      │
│   │   - Buněčná proliferace               │      │
│   │   - Apoptotická signalizace           │      │
│   │                                        │      │
│   └────────────────────────────────────────┘      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Srovnání Sigma-1 vs Sigma-2

| Vlastnost | Sigma-1 | **Sigma-2 (TMEM97)** |
|-----------|---------|----------------------|
| **Identifikace** | 1996 | 2017 |
| **Gen** | SIGMAR1 | TMEM97 |
| **Velikost** | 223 aa | 176 aa |
| **TM domény** | 1-2 | 4 |
| **Lokalizace** | MAM, ER | ER, lyzozomy |
| **Chaperon** | Ano | Ne (trafficking) |
| **Funkce** | Ca²⁺, neuroprotekce | Cholesterol, proliferace |
| **Nádory** | Nízká relevance | Vysoká exprese |
| **Terapie** | Neuroprotekce | Onkologie, AD |

---

## Současné výzkumné směry

### Oblasti aktivního výzkumu

| Oblast | Focus | Potenciál |
|--------|-------|-----------|
| **Onkologie** | S2R-cílená terapie | Vysoký |
| **Alzheimerova choroba** | CT1812, Abeta modulace | Střední-vysoký |
| **NPC choroba** | Cholesterol mobilizace | Střední |
| **Metabolický syndrom** | Lipidová homeostáza | Exploratorní |
| **Imaging** | PET biomarkery | Klinické použití |

### Nevyřešené otázky

```
Otevřené otázky S2R/TMEM97 výzkumu
┌─────────────────────────────────────────────────────┐
│                                                     │
│   1. Přesný mechanismus S2R ligandů?              │
│      - Jak ligand binding → buněčná odpověď       │
│      - Role PGRMC1 vs přímý efekt                 │
│                                                     │
│   2. Duální role v proliferaci vs smrti?          │
│      - Dávková závislost                           │
│      - Kontextová specificita                      │
│                                                     │
│   3. Fyziologická funkce TMEM97?                  │
│      - Endogenní ligandy?                          │
│      - KO myši fenotyp                            │
│                                                     │
│   4. Translační potenciál?                        │
│      - Bezpečnostní profil S2R modulátorů         │
│      - Selektivita v komplexním prostředí         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Reference

1. Alon, A. et al. (2017). *Identification of the gene that codes for the σ2 receptor*. PNAS.
2. Riad, A. et al. (2018). *The sigma-2 receptor/TMEM97, PGRMC1, and LDL receptor complex are responsible for the cellular uptake of Aβ42 and its protein aggregates*. Molecular Neurobiology.
3. Yang, K. et al. (2020). *The TMEM97/sigma-2 receptor is a target for AD therapeutics*. Alzheimer's & Dementia.
4. Zeng, C. et al. (2017). *Sigma-2 receptor ligands as potential imaging probes and therapeutics for solid tumors*. Mol Imaging Biol.
5. Nicholson, H. et al. (2016). *Sigma-2 receptors play a role in cellular metabolism: stimulation of glycolytic hallmarks by CM764 in human tumour cell lines*. Journal of Pharmacological Sciences.

---

Viz také:
- [Sigma-1 receptor](@/receptors/sigma-1.md) - Sesterský receptor
- [DMT](@/alkaloids/dmt.md) - Sigma ligand
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Psychedelický receptor
- [Glosář](@/glossary/_index.md) - Definice pojmů

<- Zpět na [Receptory](@/receptors/_index.md) | [TAAR1](@/receptors/taar1.md) ->
