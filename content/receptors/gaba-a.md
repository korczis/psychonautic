+++
title = "GABA-A receptor"
description = "Hlavní inhibiční receptor CNS - cíl muscimolu, benzodiazepinů a alkoholu"
weight = 2
insert_anchor_links = "right"
+++

# GABA-A receptor - Strážce neuronální inhibice

**GABA-A receptor** je **ligandem řízený iontový kanál** propustný pro chloridové ionty (Cl⁻). Je **hlavním inhibičním receptorem** v centrálním nervovém systému savců a cílem mnoha farmakologicky významných látek včetně [muscimolu](@/alkaloids/muscimol.md), benzodiazepinů, barbiturátů a alkoholu.

---

## Základní charakteristika

### Klasifikace

| Vlastnost | Hodnota |
|-----------|---------|
| **Typ** | Ionotropní (ligandem řízený) |
| **Rodina** | Cys-loop receptory |
| **Ion** | Cl⁻ (chloridový) |
| **Struktura** | Pentamer |
| **Směr toku** | Influx Cl⁻ |
| **Efekt** | Inhibice (hyperpolarizace) |

### Podjednotky

| Třída | Podjednotky | Gen | Funkce |
|-------|-------------|-----|--------|
| **α (alfa)** | α1-6 | GABRA1-6 | Vazba GABA, sedace |
| **β (beta)** | β1-3 | GABRB1-3 | Vazba GABA, anestezie |
| **γ (gamma)** | γ1-3 | GABRG1-3 | BZ vazba, synaptické |
| **δ (delta)** | δ | GABRD | Extrasynaptické, tonické |
| **ε (epsilon)** | ε | GABRE | Neuroendokrinní |
| **π (pí)** | π | GABRP | Reprodukční tkáně |
| **θ (théta)** | θ | GABRQ | Limbické struktury |
| **ρ (ró)** | ρ1-3 | GABRR1-3 | Retina (GABA-C) |

---

## Struktura receptoru

### Architektura pentameru

```
         Pohled shora (extracelulární)

              α1
           ╱    ╲
         γ2      β2
          │      │
         β2──────α1

Nejčastější kombinace: α1β2γ2 (60% v mozku)
```

### Transmembránová topologie

```
                    Extracelulární
                         │
    N-terminus ──────────┼──────── GABA vazebné místo
         │               │              (α/β interface)
         │         ┌─────┴─────┐
         │    TM1  │    TM2    │  TM3
Membrána ├─────────┼───────────┼─────────┤
         │         │   PORE    │         │
         │         │   (Cl⁻)   │         │
         │    TM4  └───────────┘         │
         │               │               │
    C-terminus ──────────┼──────── Fosforylační místa
                    Intracelulární

TM2 = tvoří stěnu iontového kanálu
```

### Iontový pór

```
Uzavřený stav          Otevřený stav

    Cl⁻ ✗              Cl⁻ ✓
    │                    │
┌───┴───┐            ┌───┴───┐
│ █████ │            │       │
│ █████ │   GABA     │   ↓   │
│ █████ │ ────────→  │   ↓   │
│ █████ │            │   ↓   │
└───────┘            └───────┘
    │                    │
 Membrána             Membrána
    │                    │
  -70 mV     →        -85 mV
(klidový)         (hyperpolarizace)
```

---

## Vazebná místa

### Přehled vazebných míst

```
              ╔═══════════════════════════════════╗
              ║        GABA-A RECEPTOR            ║
              ╠═══════════════════════════════════╣
              ║                                   ║
   GABA ────→ ║  ┌─────┐      ┌─────┐            ║
  Muscimol   ║  │  α  │      │  β  │            ║
              ║  └──┬──┘      └──┬──┘            ║
              ║     │    GABA    │               ║
              ║     └────site────┘               ║
              ║                                   ║
   Benzodz ─→ ║  ┌─────┐      ┌─────┐            ║
              ║  │  α  │      │  γ  │            ║
              ║  └──┬──┘      └──┬──┘            ║
              ║     │     BZ     │               ║
              ║     └────site────┘               ║
              ║                                   ║
  Barbiturát→ ║       TM doména (β)              ║
   Alkohol ─→ ║                                   ║
              ║                                   ║
  Neurostero→ ║       TM doména (α/β)            ║
              ║                                   ║
              ╚═══════════════════════════════════╝
```

### Detailní charakteristika vazebných míst

| Místo | Lokalizace | Ligandy | Efekt |
|-------|------------|---------|-------|
| **GABA (orthosterické)** | α/β interface | GABA, [Muscimol](@/alkaloids/muscimol.md), Gaboxadol | Otevření kanálu |
| **Benzodiazepinové** | α/γ interface | Diazepam, Alprazolam | Potenciace GABA |
| **Barbiturátové** | β TM doména | Fenobarbital | Prodloužené otevření |
| **Neurosteroidové** | α/β TM | Alopregnanolone | Potenciace |
| **Etanolové** | Více míst | Alkohol | Potenciace |
| **Pikrotoxinové** | Pór kanálu | Pikrotoxin, TBPS | Blokáda kanálu |

---

## Farmakologie

### Agonisté (GABA site)

| Látka | Ki (nM) | Eficacia | Zdroj |
|-------|---------|----------|-------|
| **GABA** | 20-100 | Plná | Endogenní |
| [**Muscimol**](@/alkaloids/muscimol.md) | 5-10 | Plná | [Amanita muscaria](@/shrooms/amanita-muscaria.md) |
| **Gaboxadol (THIP)** | 100 | Plná (δ-selektivní) | Syntetický |
| **Isoguvacin** | 50 | Parciální | Syntetický |

### Pozitivní alosterické modulátory (PAM)

| Třída | Příklady | Mechanismus | Použití |
|-------|----------|-------------|---------|
| **Benzodiazepiny** | Diazepam, Alprazolam, Lorazepam | ↑ frekvence otevírání | Anxiolytika, hypnotika |
| **Barbituráty** | Fenobarbital, Pentobarbital | ↑ doba otevření | Antiepileptika, anestezie |
| **Z-léky** | Zolpidem, Zopiclon, Zaleplon | α1-selektivní | Hypnotika |
| **Neurosteroid** | Alopregnanolone, THDOC | ↑ GABA účinek | Endogenní, léčiva |
| **Alkohol** | Ethanol | Více míst | Rekreační |

### Antagonisté a inverzní agonisté

| Látka | Typ | Použití |
|-------|-----|---------|
| **Flumazenil** | BZ antagonista | Antidotum BZ |
| **Bikukulin** | GABA antagonista | Výzkum |
| **Gabazin (SR-95531)** | GABA antagonista | Výzkum |
| **DMCM** | BZ inverzní agonista | Výzkum |
| **Pikrotoxin** | Blokátor kanálu | Výzkum, konvulzant |

---

## Mechanismus účinku

### Normální GABAergní přenos

```
Presynaptický neuron
        │
        ↓ GABA uvolnění
┌───────────────────────────────┐
│     Synaptická štěrbina       │
└───────────────────────────────┘
        │
        ↓ GABA vazba
┌───────────────────────────────┐
│   GABA-A receptor (α1β2γ2)    │
│                               │
│   GABA + receptor → OTEVŘENÍ  │
│         ↓                     │
│   Cl⁻ influx do neuronu       │
│         ↓                     │
│   Hyperpolarizace (-70→-85mV) │
│         ↓                     │
│   INHIBICE výboje             │
└───────────────────────────────┘
```

### Modulace benzodiazepiny

```
Bez BZ              S BZ (Diazepam)

GABA ──→ Receptor   GABA + BZ ──→ Receptor
     │                        │
     ↓                        ↓
Otevření 1x         Otevření 3-5x častěji
     │                        │
     ↓                        ↓
10 pA proud         30-50 pA proud
     │                        │
     ↓                        ↓
Mírná inhibice      Silná inhibice
```

### Modulace barbituráty

```
Bez barbiturátu     S barbiturátem

GABA ──→ Receptor   GABA + barbiturát ──→ Receptor
     │                                │
     ↓                                ↓
Otevření 2 ms       Otevření 10-20 ms
     │                                │
     ↓                                ↓
Krátký proud        Prolongovaný proud
```

### Muscimol vs modulátory

| Vlastnost | Muscimol | Benzodiazepiny |
|-----------|----------|----------------|
| Vazebné místo | GABA site | BZ site |
| Mechanismus | Přímé otevření | Potenciace GABA |
| Účinek bez GABA | Ano | Ne |
| Maximální efekt | 100% aktivace | Max. ~200% GABA |
| Desenzitizace | Rychlá | Pomalá |

---

## Subtypová selektivita

### Funkční role α podjednotek

| Subtyp | Distribuce | Funkce | Selektivní ligand | Terapeutické cílení |
|--------|------------|--------|-------------------|---------------------|
| **α1** | Kortex, cerebellum | Sedace, amnézie | Zolpidem | Nespavost, [Amanita](@/shrooms/amanita-muscaria.md) efekty |
| **α2** | [Limbický systém](@/brain/amygdala.md) | **Anxiolýza** | TPA023 | **Úzkostné stavy** |
| **α3** | [Limbický systém](@/brain/amygdala.md) | Myorelaxace | TP003 | Spasticita |
| **α4** | [Thalamus](@/brain/thalamus.md), [hippocampus](@/brain/hippocampus.md) | **Tonická inhibice** | [Muscimol](@/alkaloids/muscimol.md) | Sedace, spánek |
| **α5** | [Hippocampus](@/brain/hippocampus.md) | Paměť, kognice | α5IA (inverzní) | Kognitivní enhancery |
| **α6** | Cerebellum | Motorická koordinace | Furosemid (blokátor) | Ataxie |

### Synaptické vs extrasynaptické receptory

| Typ | Kompozice | Lokalizace | Funkce |
|-----|-----------|------------|--------|
| **Synaptické** | α1/2/3βγ | Postsynaptická membrána | Fázická inhibice |
| **Extrasynaptické** | α4/6βδ | Perisynapticky | Tonická inhibice |

```
Synaptické (γ)           Extrasynaptické (δ)

  GABA pulse              Ambient GABA
     │                         │
     ↓                         ↓
┌─────────┐              ┌─────────┐
│ α1β2γ2  │              │ α4β3δ   │
└────┬────┘              └────┬────┘
     │                        │
     ↓                        ↓
Rychlá IPSC              Tonický proud
(10-50 ms)               (konstantní)
     │                        │
     ↓                        ↓
Časově přesná            Regulace excitability
inhibice
```

---

## Distribuce v mozku

### Regionální exprese

| Oblast | Hlavní subtypy | Funkce | Psychoaktivní cílení |
|--------|----------------|--------|---------------------|
| **[Prefrontální kortex](@/brain/prefrontal-cortex.md)** | α1β2γ2, α5β3γ2 | Kognice, vědomí | [Muscimol](@/alkaloids/muscimol.md) → kognitivní sedace |
| **[Hippocampus](@/brain/hippocampus.md)** | α1β2γ2, α5β3γ2 | Paměť | Amnestické účinky benzodiazepinů |
| **[Amygdala](@/brain/amygdala.md)** | α2β3γ2 | **Strach, úzkost** | **Anxiolytické efekty [muscimolu](@/alkaloids/muscimol.md)** |
| **[Thalamus](@/brain/thalamus.md)** | α4β2δ | Senzorické zpracování | Sedace, ztráta vědomí |
| **Cerebellum** | α6β2/3γ2, α1β2/3γ2 | Motorika | Ataxie při vysokých dávkách |
| **Striatum** | α1-5βγ | Motorika, odměna | Myorelaxace |
| **Mícha** | α2/3β3γ2 | Myorelaxace | Centrální myorelaxancia |

---

## Klinické aplikace

### Indikace GABAergních léčiv

| Indikace | Léčivo | Subtyp | Mechanismus | Alternativní látky |
|----------|--------|--------|-------------|-------------------|
| **Úzkost** | Benzodiazepiny | α2/3 | [Amygdala](@/brain/amygdala.md) inhibice | [Muscimol](@/alkaloids/muscimol.md) (tradiční) |
| **Nespavost** | Zolpidem | α1 | Kortikální sedace | [Amanita muscaria](@/shrooms/amanita-muscaria.md) (etnomedicína) |
| **Epilepsie** | Fenobarbital, Clobazam | Neselektivní | Antikonvulze | Vysoké dávky muscimolu |
| **Spasticita** | Baclofen ([GABA-B](@/receptors/gaba-b.md)) | - | Míšní inhibice | Centrální myorelaxancia |
| **Anestezie** | Propofol, Thiopental | Neselektivní | Globální inhibice | [Muscimol](@/alkaloids/muscimol.md) v etnoanestezii |
| **Abstinenční syndrom** | Diazepam | Neselektivní | Substituce | Cross-tolerance s alkohoem |

### Nežádoucí účinky

| Účinek | Subtyp | Prevence |
|--------|--------|----------|
| Sedace | α1 | α2/3 selektivní ligandy |
| Amnézie | α1, α5 | Nižší dávky |
| Ataxie | α1, α6 | α2/3 selektivní |
| Tolerance | Všechny | Intermitentní dávkování |
| Závislost | Všechny | Krátká léčba |
| Respirační deprese | β3 | Monitoring |

---

## Tolerance a závislost

### Mechanismy tolerance

```
Chronická expozice GABA-A agonistům/modulátorům
                    │
                    ↓
        ┌───────────────────────┐
        │ Receptor internalizace│
        │ (endocytóza)          │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │ Změny podjednotek     │
        │ (α4 ↑, α1 ↓)         │
        └───────────┬───────────┘
                    ↓
        ┌───────────────────────┐
        │ Kompenzační změny     │
        │ (glutamát ↑)          │
        └───────────┬───────────┘
                    ↓
              TOLERANCE
```

### Abstinenční syndrom

| Fáze | Čas | Příznaky |
|------|-----|----------|
| **Akutní** | 12-24 h | Úzkost, nespavost |
| **Vrchol** | 2-5 dní | Třes, křeče, delirium |
| **Protrahovaný** | Týdny-měsíce | Úzkost, dysthymie |

---

## Muscimol vs endogenní GABA

### Srovnání

| Vlastnost | GABA | [Muscimol](@/alkaloids/muscimol.md) |
|-----------|------|----------|
| Původ | Endogenní | [Amanita muscaria](@/shrooms/amanita-muscaria.md) |
| Afinita | Ki ~50 nM | Ki ~5 nM (10x vyšší) |
| Selektivita | Neselektivní | Preferuje některé subtypy |
| BBB prostupnost | Nízká | Vysoká |
| Metabolismus | Rychlý (GABA-T) | Pomalý |
| Psychoaktivita | Ne (periferní) | Ano (centrální) |

---

## Reference

1. Olsen, R.W. & Sieghart, W. (2008). *International Union of Pharmacology. LXX. Subtypes of γ-aminobutyric acidA receptors*. Pharmacological Reviews.
2. Sigel, E. & Steinmann, M.E. (2012). *Structure, function, and modulation of GABAA receptors*. JBC.
3. Möhler, H. (2012). *The GABA system in anxiety and depression and its therapeutic potential*. Neuropharmacology.
4. Rudolph, U. & Möhler, H. (2014). *GABAA receptor subtypes: Therapeutic potential in Down syndrome, affective disorders, schizophrenia, and autism*. Annual Review of Pharmacology and Toxicology.

---

## Detailni alostericka modulace a kinetika

GABA-A receptor je **paradigmatickym modelem alostericke modulace** -- viz sekce [Mechanismy ucinku](@/mechanisms/_index.md):

### Ionotropni kineticke parametry

| Parametr | GABA | [Muscimol](@/alkaloids/muscimol.md) | Jednotka |
|----------|------|----------|----------|
| **EC50** | 10-30 | 3-10 | uM |
| **Cas otevreni** | 1-3 | 3-8 | ms |
| **Cas deaktivace** | 20-50 | 50-150 | ms |
| **Desenzitizace** | 100-500 | 200-800 | ms |
| **Vodivost kanalu** | 25-30 | 25-30 | pS |
| **Selektivita Cl/Na** | >10:1 | >10:1 | - |

Podrobnosti: [Receptorova kinetika](@/mechanisms/receptor-binding.md) -- vazebna kinetika ionotropnich receptoru

### Mechanismus alostericke modulace

```
SROVNANI ORTOSTERICKE A ALOSTERICKE MODULACE

MUSCIMOL (ortostericke misto, alpha/beta interface):
    Muscimol -> GABA site -> Primy kanal opening
    Efekt: 100% aktivace BEZ GABA
    Bezpecnost: Nizka (predavkovani mozne)

BENZODIAZEPINY (alostericke misto, alpha/gamma interface):
    BZ -> BZ site -> Zvysena frekvence otevreni
    Efekt: Max. +200% GABA (vyzaduje GABA)
    Bezpecnost: Vysoka (ceiling efekt)

BARBITURÁTY (TM domena, beta podjednotka):
    Barbiturát -> TM site -> Prodlouzena doba otevreni
    Efekt: Muze otevrit kanal i bez GABA (vysoke davky)
    Bezpecnost: Nizka (respiracni deprese)
```

### Subtypova selektivita a terapeuticky design

| Subtyp | alpha podjednotka | Funkce | Idealní ligand |
|--------|-------------------|--------|----------------|
| **Anxiolyticke** | alpha2, alpha3 | Limbicka inhibice | alpha2/3-selektivni PAM |
| **Sedativni** | alpha1 | Kortikalni inhibice | alpha1-selektivni (zolpidem) |
| **Kognitivni** | alpha5 | Hippocampalni | alpha5-NAM (pro-kognitivni) |
| **Motoricke** | alpha6 | Cerebellum | Neselektivni |

Podrobnosti: [Alostericka modulace](@/mechanisms/allosteric-modulation.md) -- PAM/NAM, MWC model, subtypova selektivita, terapeuticky potencial

---

## Viz také

### GABA agonisté a modulátory
- [Muscimol](@/alkaloids/muscimol.md) - Přímý GABA-A agonista z [Amanity](@/shrooms/amanita-muscaria.md)
- [Amanita muscaria](@/shrooms/amanita-muscaria.md) - Tradiční sedativní houba
- [Amanita pantherina](@/shrooms/amanita-pantherina.md) - Podobné účinky jako A. muscaria
- [Amanita regalis](@/shrooms/amanita-regalis.md) - Další muscimol-obsahující druh
- [GABA](@/glossary/gaba.md) - Hlavní inhibiční neurotransmiter

### Cílové mozkové oblasti
- [Amygdala](@/brain/amygdala.md) - **Hlavní místo anxiolytických efektů**
- [Thalamus](@/brain/thalamus.md) - Sedace a ztráta vědomí
- [Hippocampus](@/brain/hippocampus.md) - Amnestické efekty
- [Prefrontální kortex](@/brain/prefrontal-cortex.md) - Kognitivní sedace
- [Locus coeruleus](@/brain/locus-coeruleus.md) - Modulace arousal

### Terapeutické a klinické souvislosti
- [Tolerance](@/glossary/tolerance.md) - Problematika závislosti
- [Opioidní withdrawal](@/glossary/opioid-withdrawal.md) - GABA modulátory v léčbě
- [Serotonin syndrom](@/conditions/serotonin-syndrome.md) - Interakce se sedativy

### GABA systém
- [GABA-B receptor](@/receptors/gaba-b.md) - Metabotropní GABA receptor
- [GABA](@/glossary/gaba.md) - Endogenní ligand

### Kontrastní systémy
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Excitační vs inhibiční
- [NMDA receptor](@/receptors/nmda.md) - Glutamátergní excitace
- [Glutamát](@/glossary/glutamate.md) - Hlavní excitační neurotransmiter

### Mechanismy účinku
- [Mechanismy účinku](@/mechanisms/_index.md) - Kompletní mechanismy
- [Alosterická modulace](@/mechanisms/allosteric-modulation.md) - GABA-A jako paradigmatický model
- [Receptorová kinetika](@/mechanisms/receptor-binding.md) - Ionotropní kinetika
- [Signální transdukce](@/mechanisms/signal-transduction.md) - Ionotropní signalizace

<- Zpet na [Receptory](@/receptors/_index.md) | [5-HT2A receptor](@/receptors/5-ht2a.md) ->
