+++
title = "5-HT1A receptor"
description = "Serotoninový receptor 1A - anxiolytický autoreceptor a cíl antidepresiv"
weight = 4
insert_anchor_links = "right"

[taxonomies]
categories = ["receptory", "serotonin", "GPCR"]
tags = ["5-HT1A", "anxiolytika", "autoreceptor", "buspiron", "antidepresiva"]
+++

# 5-HT1A receptor - Strážce serotoninové rovnováhy

**5-HT1A receptor** (5-hydroxytryptamin receptor 1A) je **serotoninový receptor** patřící do rodiny G-protein spřažených receptorů (GPCR). Funguje jako **klíčový autoreceptor** regulující uvolňování serotoninu a jako **postsynaptický receptor** zprostředkovávající anxiolytické a antidepresivní účinky.

---

## Základní charakteristika

### Klasifikace

| Vlastnost | Hodnota |
|-----------|---------|
| **Rodina** | G-protein spřažené receptory (GPCR) |
| **Podrodina** | Serotoninové receptory (5-HT1) |
| **Gen** | HTR1A |
| **Chromozom** | 5q12.3 |
| **Délka** | 422 aminokyselin |
| **G-protein** | Gi/Go (inhibiční) |

### Struktura

```mermaid
flowchart TD
    node_Extracelulrnprostor["Extracelulární prostor"]
    node_Nterminusvazebnmsto["N-terminus  vazebné místo"]
    node_TM1TM7ortosterick["TM1    TM7       ortosterické"]
    node_MembrnaTM2TM3TM6TM5["Membrána   TM2     TM3     TM6     TM5"]
    node_TM4["TM4"]
    node_GiGo["Gi/Go"]
    node_Cterminuspalmitoylac["C-terminus  palmitoylace"]
    node_Intracelulrnprostor["Intracelulární prostor"]
    node_TMtransmembrnovdomna["TM = transmembránová doména celkem 7"]
    node_Tetintracelulrnsmyka["Třetí intracelulární smyčka - vazba G-proteinu"]

    node_Extracelulrnprostor --> node_Nterminusvazebnmsto
    node_Nterminusvazebnmsto --> node_TM1TM7ortosterick
    node_TM1TM7ortosterick --> node_MembrnaTM2TM3TM6TM5
    node_MembrnaTM2TM3TM6TM5 --> node_TM4
    node_TM4 --> node_GiGo
    node_GiGo --> node_Cterminuspalmitoylac
    node_Cterminuspalmitoylac --> node_Intracelulrnprostor
    node_Intracelulrnprostor --> node_TMtransmembrnovdomna
    node_TMtransmembrnovdomna --> node_Tetintracelulrnsmyka
```

<details>
<summary>ASCII verze diagramu</summary>

```
                    Extracelulární prostor
                           │
    N-terminus ───┬────────┼────────┬─── vazebné místo
                  │   TM1  │  TM7   │    (ortosterické)
         ┌────────┼────────┼────────┼────────┐
Membrána │  TM2   │  TM3   │  TM6   │  TM5   │
         └────────┼────────┼────────┼────────┘
                  │   TM4  │        │
                  │        │ Gi/Go  │
    C-terminus ───┴────────┴────────┴─── palmitoylace
                    Intracelulární prostor

TM = transmembránová doména (celkem 7)
Třetí intracelulární smyčka - vazba G-proteinu
```

</details>

---

## Duální funkce: Autoreceptor vs postsynaptický

### Somatodendritický autoreceptor (presynaptický)

```mermaid
flowchart TD
    node_Raphnucleiserotonine["Raphé nuclei serotoninergní neurony"]
    node_Tloneuronu["Tělo neuronu"]
    node_5HT1AAutoreceptor["5-HT1A    Autoreceptor"]
    node_presynap["presynap"]
    node_5HTuvolnn["5-HT uvolnění"]
    node_Negativnzptnvazba["Negativní zpětná vazba"]
    node_Inhibicefiringrate["Inhibice firing rate"]
    node_Snen["Snížení"]
    node_aktivity["aktivity"]
    node_Aktivaceautoreceptor["Aktivace autoreceptoru   uvolňování 5-HT"]

    node_Raphnucleiserotonine --> node_Tloneuronu
    node_Tloneuronu --> node_5HT1AAutoreceptor
    node_5HT1AAutoreceptor --> node_presynap
    node_presynap --> node_5HTuvolnn
    node_5HTuvolnn --> node_Negativnzptnvazba
    node_Negativnzptnvazba --> node_Inhibicefiringrate
    node_Inhibicefiringrate --> node_Snen
    node_Snen --> node_aktivity
    node_aktivity --> node_Aktivaceautoreceptor
```

<details>
<summary>ASCII verze diagramu</summary>

```
Raphé nuclei (serotoninergní neurony)
┌─────────────────────────────────────────────────┐
│                                                 │
│   Tělo neuronu                                  │
│        │                                        │
│   ┌────┴────┐                                   │
│   │ 5-HT1A  │ ← Autoreceptor                   │
│   │(presynap)│                                  │
│   └────┬────┘                                   │
│        │                                        │
│        ↓ 5-HT uvolnění                         │
│        │                                        │
│   ┌────┴────┐    Negativní zpětná vazba        │
│   │ ↓↓↓↓↓↓  │ ← Inhibice firing rate           │
│   │ Snížení │                                   │
│   │ aktivity│                                   │
│   └─────────┘                                   │
│                                                 │
└─────────────────────────────────────────────────┘

Aktivace autoreceptoru → ↓ uvolňování 5-HT
```

</details>

### Postsynaptický receptor

```mermaid
flowchart TD
    node_Limbicksystmhippocam["Limbický systém hippocampus, amygdala, kortex"]
    node_5HTzraphSynapticktrb["5-HT z raphé   Synaptická štěrbina"]
    node_5HT1A["5-HT1A"]
    node_postsynap["postsynap"]
    node_GiGoaktivace["Gi/Go aktivace"]
    node_Hyperpolarizace["Hyperpolarizace"]
    node_ANXIOLZA["ANXIOLÝZA"]

    node_Limbicksystmhippocam --> node_5HTzraphSynapticktrb
    node_5HTzraphSynapticktrb --> node_5HT1A
    node_5HT1A --> node_postsynap
    node_postsynap --> node_GiGoaktivace
    node_GiGoaktivace --> node_Hyperpolarizace
    node_Hyperpolarizace --> node_ANXIOLZA
```

<details>
<summary>ASCII verze diagramu</summary>

```
Limbický systém (hippocampus, amygdala, kortex)
┌─────────────────────────────────────────────────┐
│                                                 │
│   5-HT z raphé →  Synaptická štěrbina          │
│                          │                      │
│                          ↓                      │
│                   ┌──────┴──────┐               │
│                   │   5-HT1A    │               │
│                   │ (postsynap) │               │
│                   └──────┬──────┘               │
│                          │                      │
│                          ↓                      │
│                   Gi/Go aktivace                │
│                          │                      │
│                          ↓                      │
│                   Hyperpolarizace               │
│                          │                      │
│                          ↓                      │
│                   ANXIOLÝZA                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

</details>

---

## Distribuce v mozku

### Regionální exprese

| Oblast | Typ receptoru | Hustota | Funkce |
|--------|---------------|---------|--------|
| **Raphé nuclei** | Autoreceptor | Velmi vysoká | Regulace 5-HT uvolňování |
| **Hippocampus** | Postsynaptický | Velmi vysoká | Paměť, anxiolýza |
| **Amygdala** | Postsynaptický | Vysoká | Strach, úzkost |
| **Prefrontální kortex** | Postsynaptický | Vysoká | Kognice, nálada |
| **Entorhinal cortex** | Postsynaptický | Vysoká | Paměť |
| **Septum** | Postsynaptický | Střední | Emoce |
| **Hypothalamus** | Postsynaptický | Střední | Neuroendokrinní regulace |

### Buněčná lokalizace

| Typ neuronu | Lokalizace | Role |
|-------------|------------|------|
| **Serotoninergní (raphé)** | Soma, dendrity | Autoinhibice |
| **Pyramidové neurony** | Dendrity | Excitabilita |
| **GABAergní interneurony** | Postsynapticky | Modulace inhibice |
| **Astrocyty** | Glie | Neuromodulace |

---

## Signální dráhy

### Primární kaskáda (Gi/Go)

```mermaid
flowchart TD
    node_5HTAgonista["5-HT / Agonista"]
    node_5HT1Areceptor["5-HT1A receptor"]
    node_GiGoprotein["Gi/Go protein"]
    node_i["αi              βγ"]
    node_InhibiceACAktivaceGI["Inhibice AC     Aktivace GIRK"]
    node_cAMPKeflux["cAMP          K⁺ eflux"]
    node_PKAHyperpolarizace["PKA           Hyperpolarizace"]
    node_CREBexcitabilita["CREB           excitabilita"]
    node_GenovexpreseInhibice["Genová exprese  Inhibice neuronu"]

    node_5HTAgonista --> node_5HT1Areceptor
    node_5HT1Areceptor --> node_GiGoprotein
    node_GiGoprotein --> node_i
    node_i --> node_InhibiceACAktivaceGI
    node_InhibiceACAktivaceGI --> node_cAMPKeflux
    node_cAMPKeflux --> node_PKAHyperpolarizace
    node_PKAHyperpolarizace --> node_CREBexcitabilita
    node_CREBexcitabilita --> node_GenovexpreseInhibice
```

<details>
<summary>ASCII verze diagramu</summary>

```
5-HT / Agonista
        ↓
   5-HT1A receptor
        ↓
    Gi/Go protein
        ↓
┌───────┴───────┐
↓               ↓
αi              βγ
↓               ↓
Inhibice AC     Aktivace GIRK
↓               ↓
↓ cAMP          K⁺ eflux
↓               ↓
↓ PKA           Hyperpolarizace
↓               ↓
↓ CREB          ↓ excitabilita
↓               ↓
Genová exprese  Inhibice neuronu
```

</details>

### Sekundární dráhy

| Dráha | Mediátor | Efekt |
|-------|----------|-------|
| **GIRK kanály** | Gβγ | K⁺ proud, hyperpolarizace |
| **Ca²⁺ kanály** | Gαi | Inhibice Ca²⁺ influxu |
| **ERK/MAPK** | β-arrestin | Neuroplasticita |
| **Akt/GSK-3β** | PI3K | Neuroprotekce |

### GIRK (G-protein-gated Inwardly Rectifying K⁺) kanály

```mermaid
flowchart TD
    node_KlidovstavAktivovans["Klidový stav              Aktivovaný sta"]
    node_KK["K⁺                        K⁺"]
    node_GIRK5HT1AGIRK["GIRK       5-HT1A      GIRK"]
    node_zavenoteven["zavřený     otevřený"]
    node_klidovhyperpolarizac["klidový              hyperpolarizace"]

    node_KlidovstavAktivovans --> node_KK
    node_KK --> node_GIRK5HT1AGIRK
    node_GIRK5HT1AGIRK --> node_zavenoteven
    node_zavenoteven --> node_klidovhyperpolarizac
```

<details>
<summary>ASCII verze diagramu</summary>

```
Klidový stav              Aktivovaný stav

    K⁺                        K⁺
     ✗                         ↑
     │                         │
┌────┴────┐              ┌────┴────┐
│  GIRK   │    5-HT1A    │  GIRK   │
│ zavřený │ ──────────→  │ otevřený│
└─────────┘              └─────────┘
     │                         │
  -65 mV      →             -80 mV
(klidový)              (hyperpolarizace)
```

</details>

---

## Farmakologie

### Agonisté

| Látka | Typ | Ki (nM) | Použití |
|-------|-----|---------|---------|
| **Serotonin (5-HT)** | Plný agonista | 1-10 | Endogenní |
| **8-OH-DPAT** | Plný agonista | 0.5-2 | Výzkum |
| **Buspiron** | Parciální agonista | 20-40 | Anxiolytikum |
| **Gepiron** | Parciální agonista | 10-20 | Antidepresivum |
| **Tandospiron** | Parciální agonista | 15-30 | Anxiolytikum (Japonsko) |
| **Flesinoxan** | Plný agonista | 1-5 | Experimentální |
| **Ipsapiron** | Parciální agonista | 3-10 | Experimentální |

### Antagonisté

| Látka | Ki (nM) | Použití |
|-------|---------|---------|
| **WAY-100635** | 0.3-1 | Výzkum, PET ligand |
| **Lecozotan** | 1-3 | Experimentální (kognice) |
| **NAD-299** | 0.5-2 | Výzkum |
| **Pindolol** | 10-30 | Augmentace SSRI |

### Interakce s psychedeliky

| Látka | Aktivita na 5-HT1A | Klinický význam |
|-------|-------------------|-----------------|
| [**LSD**](@/alkaloids/lsd.md) | Parciální agonista | Anxiolytická komponenta |
| [**Psilocin**](@/alkaloids/psilocin.md) | Agonista | Snížení úzkosti |
| [**DMT**](@/alkaloids/dmt.md) | Agonista | Modulace psychedelického účinku |
| **Ayahuasca** | Agonista | Dlouhodobé anxiolytické účinky |

---

## Klinické aplikace

### Úzkostné poruchy

```mermaid
flowchart TD
    node_Anxiolytickmechanism["Anxiolytický mechanismus buspironu"]
    node_Buspironparciln5HT1A["Buspiron parciální 5-HT1A agonista"]
    node_RaphLimbicksystm["Raphé               Limbický systém"]
    node_autoreceptorpostsyna["autoreceptor      postsynaptický"]
    node_DesenzitizacePmaktiv["Desenzitizace       Přímá aktivace"]
    node_tdnyokamit["týdny             okamžitá"]
    node_5HTtonusHyperpolariz["5-HT tonus        Hyperpolarizace"]
    node_ANXIOLZA["ANXIOLÝZA"]
    node_bezsedacebezzvislost["bez sedace, bez závislosti"]

    node_Anxiolytickmechanism --> node_Buspironparciln5HT1A
    node_Buspironparciln5HT1A --> node_RaphLimbicksystm
    node_RaphLimbicksystm --> node_autoreceptorpostsyna
    node_autoreceptorpostsyna --> node_DesenzitizacePmaktiv
    node_DesenzitizacePmaktiv --> node_tdnyokamit
    node_tdnyokamit --> node_5HTtonusHyperpolariz
    node_5HTtonusHyperpolariz --> node_ANXIOLZA
    node_ANXIOLZA --> node_bezsedacebezzvislost
```

<details>
<summary>ASCII verze diagramu</summary>

```
Anxiolytický mechanismus buspironu
┌─────────────────────────────────────────────────┐
│                                                 │
│   Buspiron (parciální 5-HT1A agonista)         │
│              │                                  │
│   ┌──────────┴──────────┐                      │
│   ↓                     ↓                      │
│ Raphé               Limbický systém            │
│ (autoreceptor)      (postsynaptický)           │
│   │                     │                      │
│   ↓                     ↓                      │
│ Desenzitizace       Přímá aktivace            │
│ (týdny)             (okamžitá)                │
│   │                     │                      │
│   ↓                     ↓                      │
│ ↑ 5-HT tonus        Hyperpolarizace           │
│   │                     │                      │
│   └─────────┬───────────┘                      │
│             ↓                                  │
│        ANXIOLÝZA                               │
│   (bez sedace, bez závislosti)                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

</details>

### Srovnání anxiolytik

| Vlastnost | Buspiron (5-HT1A) | Benzodiazepiny (GABA-A) |
|-----------|-------------------|-------------------------|
| Nástup účinku | 2-4 týdny | Minuty |
| Sedace | Minimální | Výrazná |
| Závislost | Ne | Ano |
| Tolerance | Minimální | Ano |
| Kognitivní efekty | Neutrální/pozitivní | Negativní |
| Interakce s alkoholem | Minimální | Nebezpečná |

### Deprese a SSRI augmentace

```mermaid
flowchart TD
    node_ProblmzpodnhonstupuS["Problém zpožděného nástupu SSRI"]
    node_SSRIsynaptick5HT["SSRI   synaptický 5-HT"]
    node_Aktivace5HT1Aautorec["Aktivace 5-HT1A autoreceptorů"]
    node_firingrateraphneuron["firing rate raphé neuronů"]
    node_Kompenzace5HTtdny["Kompenzace  5-HT týdny"]
    node_Desenzitizaceautorec["Desenzitizace autoreceptorů"]
    node_TERAPEUTICKINEK24tdn["TERAPEUTICKÝ ÚČINEK 2-4 týdny"]
    node_eenPindolol5HT1Aanta["Řešení: Pindolol 5-HT1A antagonista"]
    node_Blokujeautoreceptory["Blokuje autoreceptory"]
    node_RychlejnstupSSRIinku["Rychlejší nástup SSRI účinku"]

    node_ProblmzpodnhonstupuS --> node_SSRIsynaptick5HT
    node_SSRIsynaptick5HT --> node_Aktivace5HT1Aautorec
    node_Aktivace5HT1Aautorec --> node_firingrateraphneuron
    node_firingrateraphneuron --> node_Kompenzace5HTtdny
    node_Kompenzace5HTtdny --> node_Desenzitizaceautorec
    node_Desenzitizaceautorec --> node_TERAPEUTICKINEK24tdn
    node_TERAPEUTICKINEK24tdn --> node_eenPindolol5HT1Aanta
    node_eenPindolol5HT1Aanta --> node_Blokujeautoreceptory
    node_Blokujeautoreceptory --> node_RychlejnstupSSRIinku

    click node_Blokujeautoreceptory "/receptors/_index/" "Blokuje autoreceptory"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Problém zpožděného nástupu SSRI
┌─────────────────────────────────────────────────┐
│                                                 │
│   SSRI → ↑ synaptický 5-HT                     │
│              │                                  │
│              ↓                                  │
│   Aktivace 5-HT1A autoreceptorů               │
│              │                                  │
│              ↓                                  │
│   ↓ firing rate raphé neuronů                  │
│              │                                  │
│              ↓                                  │
│   Kompenzace ↑ 5-HT (týdny)                   │
│              │                                  │
│              ↓                                  │
│   Desenzitizace autoreceptorů                 │
│              │                                  │
│              ↓                                  │
│   TERAPEUTICKÝ ÚČINEK (2-4 týdny)             │
│                                                 │
└─────────────────────────────────────────────────┘

Řešení: Pindolol (5-HT1A antagonista)
        → Blokuje autoreceptory
        → Rychlejší nástup SSRI účinku
```

</details>

---

## Neuroplasticita a neuroprotekce

### Neurotrofické účinky

| Mechanismus | Mediátor | Efekt |
|-------------|----------|-------|
| **BDNF indukce** | CREB aktivace | Neurogeneze |
| **Akt aktivace** | PI3K | Buněčné přežití |
| **GSK-3β inhibice** | Akt | Antiapoptotický |
| **Hippocampální neurogeneze** | BDNF, 5-HT | Antidepresivní |

### Neuroprotekce

```mermaid
flowchart TD
    node_5HT1Aaktivace["5-HT1A aktivace"]
    node_NEUROPROTEKCE["NEUROPROTEKCE"]
    node_Glutamtexcitotoxicit["Glutamát excitotoxicita"]
    node_Oxidativnstres["Oxidativní stres"]
    node_Apoptza["Apoptóza"]
    node_NeurotrofinyBDNF["Neurotrofiny BDNF"]
    node_Hippocamplnneurogene["Hippocampální neurogeneze"]
    node_Potencilnindikace["Potenciální indikace:"]

    node_5HT1Aaktivace --> node_NEUROPROTEKCE
    node_NEUROPROTEKCE --> node_Glutamtexcitotoxicit
    node_Glutamtexcitotoxicit --> node_Oxidativnstres
    node_Oxidativnstres --> node_Apoptza
    node_Apoptza --> node_NeurotrofinyBDNF
    node_NeurotrofinyBDNF --> node_Hippocamplnneurogene
    node_Hippocamplnneurogene --> node_Potencilnindikace
```

<details>
<summary>ASCII verze diagramu</summary>

```
5-HT1A aktivace
      │
      ↓
┌─────────────────────────────────────────┐
│           NEUROPROTEKCE                  │
│                                          │
│   ↓ Glutamát excitotoxicita             │
│   ↓ Oxidativní stres                    │
│   ↓ Apoptóza                            │
│   ↑ Neurotrofiny (BDNF)                 │
│   ↑ Hippocampální neurogeneze           │
│                                          │
└─────────────────────────────────────────┘

Potenciální indikace:
- Ischemická mrtvice
- Neurodegenerativní onemocnění
- Traumatické poškození mozku
```

</details>

---

## Genetické varianty

### Polymorfismy HTR1A

| SNP | Pozice | Funkční efekt |
|-----|--------|---------------|
| **C-1019G** | rs6295 (promotor) | ↓ exprese (G alela) |
| **Ile28Val** | rs1799921 | Změněná funkce |
| **Arg219Leu** | rs1800044 | Změněná signalizace |

### Klinické asociace

| Varianta | Asociace |
|----------|----------|
| **C-1019G (GG)** | ↑ riziko deprese, ↓ odpověď na SSRI |
| **C-1019G (CC)** | Lepší odpověď na antidepresiva |
| **Haplotypy** | Úzkostné poruchy, sebevražedné chování |

### Implikace pro farmakogenetiku

```mermaid
flowchart TD
    node_GenotypC1019Gaodpovn["Genotyp C-1019G a odpověď na léčbu"]
    node_CCgenotypGGgenotyp["CC genotyp              GG genotyp"]
    node_5HT1Aexprese5HT1Aexp["5-HT1A exprese         5-HT1A exprese"]
    node_DobrodpovnaHorodpovn["Dobrá odpověď na        Horší odpověď na"]
    node_SSRIbuspironSSRI["SSRI, buspiron          SSRI"]
    node_StandardnlbaAugmenta["Standardní léčba        Augmentace,"]
    node_alternativnstrategie["alternativní strategie"]

    node_GenotypC1019Gaodpovn --> node_CCgenotypGGgenotyp
    node_CCgenotypGGgenotyp --> node_5HT1Aexprese5HT1Aexp
    node_5HT1Aexprese5HT1Aexp --> node_DobrodpovnaHorodpovn
    node_DobrodpovnaHorodpovn --> node_SSRIbuspironSSRI
    node_SSRIbuspironSSRI --> node_StandardnlbaAugmenta
    node_StandardnlbaAugmenta --> node_alternativnstrategie
```

<details>
<summary>ASCII verze diagramu</summary>

```
Genotyp C-1019G a odpověď na léčbu

CC genotyp              GG genotyp
    │                       │
    ↓                       ↓
↑ 5-HT1A exprese        ↓ 5-HT1A exprese
    │                       │
    ↓                       ↓
Dobrá odpověď na        Horší odpověď na
SSRI, buspiron          SSRI
    │                       │
    ↓                       ↓
Standardní léčba        Augmentace,
                        alternativní strategie
```

</details>

---

## Výzkumné nástroje

### Radioligandy pro PET/SPECT

| Ligand | Typ | Vlastnosti |
|--------|-----|------------|
| **[11C]WAY-100635** | Antagonista | Zlatý standard PET |
| **[18F]MPPF** | Antagonista | Delší poločas |
| **[11C]CUMI-101** | Agonista | Detekuje funkční receptory |
| **[18F]F15599** | Agonista | Vysoká selektivita |

### In vivo markery

| Metoda | Aplikace |
|--------|----------|
| **Neuroendokrinní testy** | Odpověď prolaktinu, kortizolu na 8-OH-DPAT |
| **Hypotermie** | Aktivace presynaptických 5-HT1A |
| **fMRI** | Funkční aktivace po agonistech |

---

## Interakce s jinými systémy

### 5-HT1A a dopamin

```mermaid
flowchart TD
    node_RaphnucleiVTASubstan["Raphé nuclei  VTA/Substantia nigra"]
    node_5HTneurony5HT1AnaDAn["5-HT neurony  5-HT1A na DA neuronech"]
    node_InhibiceDAfiring["Inhibice DA firing"]
    node_DAuvolovn["DA uvolňování"]
    node_Implikace["Implikace:"]
    node_Modulaceodmny["- Modulace odměny"]
    node_Interakcepsychedelik["- Interakce psychedelik s DA systémem"]
    node_Antipsychotickinky["- Antipsychotické účinky"]

    node_RaphnucleiVTASubstan --> node_5HTneurony5HT1AnaDAn
    node_5HTneurony5HT1AnaDAn --> node_InhibiceDAfiring
    node_InhibiceDAfiring --> node_DAuvolovn
    node_DAuvolovn --> node_Implikace
    node_Implikace --> node_Modulaceodmny
    node_Modulaceodmny --> node_Interakcepsychedelik
    node_Interakcepsychedelik --> node_Antipsychotickinky
```

<details>
<summary>ASCII verze diagramu</summary>

```
Raphé nuclei → VTA/Substantia nigra
┌─────────────────────────────────────────────────┐
│                                                 │
│   5-HT neurony → 5-HT1A na DA neuronech        │
│                       │                         │
│                       ↓                         │
│              Inhibice DA firing                │
│                       │                         │
│                       ↓                         │
│              ↓ DA uvolňování                   │
│                                                 │
│   Implikace:                                   │
│   - Modulace odměny                            │
│   - Interakce psychedelik s DA systémem       │
│   - Antipsychotické účinky                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

</details>

### 5-HT1A a HPA osa

| Efekt | Mechanismus | Klinický význam |
|-------|-------------|-----------------|
| ↓ CRH | Hypothalamická 5-HT1A | Snížení stresu |
| ↓ ACTH | Hypofyzární regulace | Anxiolýza |
| ↓ Kortizol | Adrenální regulace | Antidepresivní |

---

## Srovnání serotoninových receptorů

| Receptor | G-protein | Efekt | Hlavní funkce |
|----------|-----------|-------|---------------|
| **5-HT1A** | Gi/Go | Inhibiční | Anxiolýza, autoreceptor |
| **5-HT1B** | Gi/Go | Inhibiční | Vazokonstrikce, autoreceptor |
| [**5-HT2A**](@/receptors/5-ht2a.md) | Gq/11 | Excitační | Halucinace, plasticita |
| [**5-HT2B**](@/receptors/5-ht2b.md) | Gq/11 | Excitační | Kardiovaskulární |
| [**5-HT2C**](@/receptors/5-ht2c.md) | Gq/11 | Excitační | Apetit, nálada |

---

## Terapeutický potenciál

### Současné indikace

| Indikace | Látka | Status |
|----------|-------|--------|
| **GAD** | Buspiron | Schváleno |
| **Deprese (augmentace)** | Pindolol | Off-label |
| **Úzkost u deprese** | Vilazodone | Schváleno |

### Vyvíjené terapie

| Indikace | Přístup | Fáze |
|----------|---------|------|
| **Alzheimerova choroba** | 5-HT1A agonisté | II |
| **Parkinsonova choroba** | 5-HT1A pro dyskineze | II |
| **Neuroprotekce** | Selektivní agonisté | Preklinická |
| **Psychedelická terapie** | Kombinace s 5-HT2A | Výzkum |

---

## Reference

1. Albert, P.R. & Bhatt, S. (2015). *Serotonin-1A Receptor Regulation of G Protein-Coupled Signaling*. Handbook of Behavioral Neuroscience.
2. Garcia-Garcia, A.L. et al. (2014). *Serotonin-1A Receptors in the Brain: Beyond Anxiety*. Neuroscience.
3. Blier, P. & Ward, N.M. (2003). *Is there a role for 5-HT1A agonists in the treatment of depression?* Biological Psychiatry.
4. Newman-Tancredi, A. (2011). *Biased agonism at serotonin 5-HT1A receptors: Preferential postsynaptic activity for improved therapy of CNS disorders*. Neuropsychiatry.

---

Viz také:
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Primární cíl psychedelik
- [5-HT2C receptor](@/receptors/5-ht2c.md) - Modulace apetitu a nálady
- [GABA-A receptor](@/receptors/gaba-a.md) - Alternativní anxiolytický cíl
- [LSD](@/alkaloids/lsd.md) - Parciální 5-HT1A agonista
- [Psilocybin](@/alkaloids/psilocybin.md) - Anxiolytické účinky via 5-HT1A
- [Glosář](@/glossary/_index.md) - Definice pojmů

<- Zpět na [Receptory](@/receptors/_index.md) | [5-HT2A receptor](@/receptors/5-ht2a.md) ->
