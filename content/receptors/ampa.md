+++
title = "AMPA receptor"
description = "Ionotropní glutamátový receptor - mediátor rychlé excitační transmise a synaptické plasticity"
weight = 8
insert_anchor_links = "right"

[taxonomies]
categories = ["receptory", "glutamát", "ionotropní"]
tags = ["AMPA", "glutamát", "LTP", "synaptická-plasticita", "excitace", "paměť"]
+++

# AMPA receptor - Motor rychlé synaptické transmise

**AMPA receptor** (α-amino-3-hydroxy-5-methyl-4-isoxazoleproprionátový receptor) je **ionotropní glutamátový receptor** zodpovědný za většinu **rychlé excitační synaptické transmise** v centrálním nervovém systému. Je klíčovým mediátorem **synaptické plasticity**, **učení** a **paměti**, a představuje atraktivní terapeutický cíl pro kognitivní poruchy.

---

## Základní charakteristika

### Klasifikace

| Vlastnost | Hodnota |
|-----------|---------|
| **Typ** | Ionotropní (ligandem řízený) |
| **Rodina** | Glutamátové receptory |
| **Iony** | Na⁺ (influx), K⁺ (eflux), (Ca²⁺ u GluA2-lacking) |
| **Struktura** | Tetramer |
| **Endogenní ligand** | Glutamát |
| **Rychlost** | Velmi rychlá kinetika (ms) |

### Podjednotky

| Podjednotka | Gen | Charakteristika |
|-------------|-----|-----------------|
| **GluA1 (GluR1)** | GRIA1 | Ca²⁺ propustná (Q/R needitovaná) |
| **GluA2 (GluR2)** | GRIA2 | Určuje Ca²⁺ impermeabilitu (Q/R editovaná) |
| **GluA3 (GluR3)** | GRIA3 | Konstitutivní trafficking |
| **GluA4 (GluR4)** | GRIA4 | Rychlá desenzitizace |

---

## Struktura receptoru

### Architektura tetrameru

```mermaid
flowchart TD
    node_Pohledshoraextracelu["Pohled shora extracelulární"]
    node_GluA1["GluA1"]
    node_8455cce0["╱    ╲"]
    node_5ec3d07b["╱        ╲"]
    node_GluA2GluA2["GluA2  GluA2"]
    node_b14cbd56["╲        ╱"]
    node_fd0e3b1c["╲    ╱"]
    node_Nejastjkombinacevdos["Nejčastější kombinace v dospělém mozku:"]

    node_Pohledshoraextracelu --> node_GluA1
    node_GluA1 --> node_8455cce0
    node_8455cce0 --> node_5ec3d07b
    node_5ec3d07b --> node_GluA2GluA2
    node_GluA2GluA2 --> node_b14cbd56
    node_b14cbd56 --> node_fd0e3b1c
    node_fd0e3b1c --> node_Nejastjkombinacevdos
```

<details>
<summary>ASCII verze diagramu</summary>

```
         Pohled shora (extracelulární)

              GluA1
             ╱    ╲
           ╱        ╲
        GluA2 ──── GluA2
           ╲        ╱
             ╲    ╱
              GluA1

Nejčastější kombinace v dospělém mozku:
- GluA1/GluA2 (heteromer) - hlavní typ
- GluA2/GluA3 (heteromer) - konstitutivní
- GluA1 homomery - plasticita (GluA2-lacking)
```

</details>

### Doménová organizace

```mermaid
flowchart TD
    node_Extracelulrnprostor["Extracelulární prostor"]
    node_NterminusATD["N-terminus  ATD"]
    node_aminoterminlnAminoTe["amino-terminální                   Amino-Terminal Domain"]
    node_domna["doména"]
    node_LBDLBD["LBD                     LBD"]
    node_LigandBinding["Ligand-Binding"]
    node_Glutamt["Glutamát"]
    node_3bf53711["██████████████████████████████████████████████"]
    node_KANL["KANÁL"]
    node_pr["pór"]
    node_M1["M1"]
    node_M2reentrantloop["M2       re-entrant loop"]
    node_M3["M3"]
    node_M4["M4"]
    node_CterminusPDZvazba["C-terminus  PDZ vazba"]
    node_scaffolding["scaffolding"]
    node_Intracelulrnprostor["Intracelulární prostor"]

    node_Extracelulrnprostor --> node_NterminusATD
    node_NterminusATD --> node_aminoterminlnAminoTe
    node_aminoterminlnAminoTe --> node_domna
    node_domna --> node_LBDLBD
    node_LBDLBD --> node_LigandBinding
    node_LigandBinding --> node_Glutamt
    node_Glutamt --> node_3bf53711
    node_3bf53711 --> node_KANL
    node_KANL --> node_pr
    node_pr --> node_M1
    node_M1 --> node_M2reentrantloop
    node_M2reentrantloop --> node_M3
    node_M3 --> node_M4
    node_M4 --> node_CterminusPDZvazba
    node_CterminusPDZvazba --> node_scaffolding
    node_scaffolding --> node_Intracelulrnprostor

    click node_Glutamt "/glossary/glutamate/" "Glutamát"
```

<details>
<summary>ASCII verze diagramu</summary>

```
                    Extracelulární prostor
                           │
    N-terminus ────────────┼──────────── ATD
    (amino-terminální      │             (Amino-Terminal Domain)
     doména)               │
                           │
    ┌──────────────────────┼──────────────────────┐
    │        LBD           │          LBD         │
    │  (Ligand-Binding)    │                      │
    │        ↓             │                      │
    │   Glutamát           │                      │
    └──────────┬───────────┼──────────────────────┘
               │           │
    ███████████│███████████│████████████████████████
               │   KANÁL   │
               │   (pór)   │
               │    M1     │
               │    M2     │ ← re-entrant loop
               │    M3     │
               │    M4     │
    ███████████│███████████│████████████████████████
               │           │
    C-terminus ────────────┴──────────── PDZ vazba
                                         (scaffolding)

               Intracelulární prostor
```

</details>

### Iontový pór a Q/R editing

```mermaid
flowchart TD
    node_QReditovacmstoM2segm["Q/R editovací místo M2 segment"]
    node_GluA2needitovanQGluA["GluA2 needitovaná Q        GluA2 editovaná R"]
    node_QR["████ Q ████                ████ R ████"]
    node_CapropustnCaIMPERMEA["Ca²⁺ propustný             Ca²⁺ IMPERMEABILNÍ"]
    node_ExcitotoxicitaNeurop["Excitotoxicita             Neuroprotekce"]
    node_Normln99GluA2jeRedit["Normálně: &gt;99% GluA2 je R-editovaná ADAR2"]
    node_VjimkyRanvvojspecifi["Výjimky: Raný vývoj, specifické populace neuronů"]

    node_QReditovacmstoM2segm --> node_GluA2needitovanQGluA
    node_GluA2needitovanQGluA --> node_QR
    node_QR --> node_CapropustnCaIMPERMEA
    node_CapropustnCaIMPERMEA --> node_ExcitotoxicitaNeurop
    node_ExcitotoxicitaNeurop --> node_Normln99GluA2jeRedit
    node_Normln99GluA2jeRedit --> node_VjimkyRanvvojspecifi
```

<details>
<summary>ASCII verze diagramu</summary>

```
Q/R editovací místo (M2 segment)

GluA2 needitovaná (Q)        GluA2 editovaná (R)
┌─────────────────────┐      ┌─────────────────────┐
│                     │      │                     │
│   ████ Q ████       │      │   ████ R ████       │
│        │            │      │        │            │
│        ↓            │      │        ↓            │
│   Ca²⁺ propustný    │      │   Ca²⁺ IMPERMEABILNÍ│
│        │            │      │        │            │
│        ↓            │      │        ↓            │
│   Excitotoxicita    │      │   Neuroprotekce    │
│                     │      │                     │
└─────────────────────┘      └─────────────────────┘

Normálně: >99% GluA2 je R-editovaná (ADAR2)
Výjimky: Raný vývoj, specifické populace neuronů
```

</details>

---

## Distribuce v mozku

### Regionální exprese

| Oblast | Hlavní podjednotky | Funkce |
|--------|-------------------|--------|
| **Hippocampus** | GluA1, GluA2, GluA3 | Paměť, LTP |
| **Kortex** | GluA1, GluA2 | Kognice |
| **Cerebellum** | GluA2, GluA3, GluA4 | Motorika |
| **Amygdala** | GluA1, GluA2 | Emoční paměť |
| **Striatum** | GluA1, GluA2 | Motorika, odměna |
| **Mícha** | GluA1-4 | Senzorická/motorická |

### Synaptická vs extrasynaptická lokalizace

| Lokalizace | Kompozice | Funkce |
|------------|-----------|--------|
| **Synaptická** | GluA1/A2, GluA2/A3 | Rychlá transmise |
| **Extrasynaptická** | Různé | Tonická excitace |
| **Perisynaptická** | GluA1 homomery | Rezervoár pro LTP |

---

## Kinetika a funkce

### Rychlá synaptická transmise

```mermaid
flowchart TD
    node_PresynaptickAP["Presynaptický AP"]
    node_Glutamtuvolnn["Glutamát uvolnění"]
    node_0105ms["0.1-0.5 ms"]
    node_AMPAreceptoraktivace["AMPA receptor aktivace"]
    node_NainfluxKeflux["Na⁺ influx, K⁺ eflux"]
    node_EPSPExcitatoryPostSy["EPSP Excitatory PostSynaptic Potential"]
    node_RychlostAMPAvsNMDA["Rychlost AMPA vs NMDA:"]
    node_AMPARisetime05ms["AMPA: Rise time ~0.5 ms"]
    node_Decay25ms["Decay ~2-5 ms"]
    node_NMDARisetime510ms["NMDA: Rise time ~5-10 ms"]
    node_Decay50300ms["Decay ~50-300 ms"]
    node_AMPArychldepolarizac["AMPA = rychlá depolarizace"]
    node_NMDApomalCadependent["NMDA = pomalá, Ca²⁺-dependentní"]

    node_PresynaptickAP --> node_Glutamtuvolnn
    node_Glutamtuvolnn --> node_0105ms
    node_0105ms --> node_AMPAreceptoraktivace
    node_AMPAreceptoraktivace --> node_NainfluxKeflux
    node_NainfluxKeflux --> node_EPSPExcitatoryPostSy
    node_EPSPExcitatoryPostSy --> node_RychlostAMPAvsNMDA
    node_RychlostAMPAvsNMDA --> node_AMPARisetime05ms
    node_AMPARisetime05ms --> node_Decay25ms
    node_Decay25ms --> node_NMDARisetime510ms
    node_NMDARisetime510ms --> node_Decay50300ms
    node_Decay50300ms --> node_AMPArychldepolarizac
    node_AMPArychldepolarizac --> node_NMDApomalCadependent

    click node_Glutamtuvolnn "/glossary/glutamate/" "Glutamát uvolnění"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Presynaptický AP
      │
      ↓
Glutamát uvolnění
      │
      ↓ (0.1-0.5 ms)
      │
AMPA receptor aktivace
      │
      ↓
Na⁺ influx, K⁺ eflux
      │
      ↓
EPSP (Excitatory PostSynaptic Potential)
      │
      ↓
┌─────────────────────────────────────────┐
│                                         │
│   Rychlost AMPA vs NMDA:               │
│                                         │
│   AMPA: Rise time ~0.5 ms              │
│         Decay ~2-5 ms                   │
│                                         │
│   NMDA: Rise time ~5-10 ms             │
│         Decay ~50-300 ms                │
│                                         │
│   AMPA = rychlá depolarizace           │
│   NMDA = pomalá, Ca²⁺-dependentní      │
│                                         │
└─────────────────────────────────────────┘
```

</details>

### AMPA-NMDA synergie

```mermaid
flowchart TD
    node_Glutamtovsynapse["Glutamátová synapse"]
    node_Glutamt["Glutamát"]
    node_AMPAreceptor["AMPA receptor"]
    node_Rychldepolarizace["Rychlá depolarizace"]
    node_Mgodstrann["Mg²⁺ odstranění"]
    node_NMDAreceptor["NMDA receptor"]
    node_Cainflux["Ca²⁺ influx"]
    node_LTPplasticita["LTP/plasticita"]
    node_AMPAgateopenerproNMD["AMPA = 'gate opener' pro NMDA"]

    node_Glutamtovsynapse --> node_Glutamt
    node_Glutamt --> node_AMPAreceptor
    node_AMPAreceptor --> node_Rychldepolarizace
    node_Rychldepolarizace --> node_Mgodstrann
    node_Mgodstrann --> node_NMDAreceptor
    node_NMDAreceptor --> node_Cainflux
    node_Cainflux --> node_LTPplasticita
    node_LTPplasticita --> node_AMPAgateopenerproNMD

    click node_Glutamtovsynapse "/glossary/glutamate/" "Glutamátová synapse"
    click node_Glutamt "/glossary/glutamate/" "Glutamát"
    click node_NMDAreceptor "/receptors/nmda/" "NMDA receptor"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Glutamátová synapse
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Glutamát                                          │
│      │                                              │
│      ├──────────→ AMPA receptor                    │
│      │                  │                          │
│      │                  ↓                          │
│      │             Rychlá depolarizace             │
│      │                  │                          │
│      │                  ↓                          │
│      │             Mg²⁺ odstranění                │
│      │                  │                          │
│      └──────────→ NMDA receptor                    │
│                         │                          │
│                         ↓                          │
│                    Ca²⁺ influx                     │
│                         │                          │
│                         ↓                          │
│                    LTP/plasticita                   │
│                                                     │
└─────────────────────────────────────────────────────┘

AMPA = "gate opener" pro NMDA
```

</details>

---

## Synaptická plasticita

### LTP (Long-Term Potentiation)

```mermaid
flowchart TD
    node_LTPindukceaexprese["LTP indukce a exprese"]
    node_1INDUKCENMDAdependen["1. INDUKCE NMDA-dependentní"]
    node_Tetanickstimulace["Tetanická stimulace"]
    node_AMPAdepolarizace["AMPA depolarizace"]
    node_NMDAaktivaceCainflux["NMDA aktivace  Ca²⁺ influx"]
    node_CaMKIIaktivace["CaMKII aktivace"]
    node_2RANEXPRESEminuty["2. RANÁ EXPRESE minuty"]
    node_CaMKII["CaMKII"]
    node_odivostexistujcchAMP["odivost existujících AMPA"]
    node_fosforylaceSer831Glu["fosforylace Ser831 GluA1"]
    node_3POZDNEXPRESEhodinyd["3. POZDNÍ EXPRESE hodiny-dny"]
    node_Proteinsyntza["Protein syntéza"]
    node_TraffickingnovchAMPA["Trafficking nových AMPA na synapsi"]
    node_GluA1obsahujc["GluA1-obsahující"]
    node_Strukturlnzmnyspine["Strukturální změny spine"]

    node_LTPindukceaexprese --> node_1INDUKCENMDAdependen
    node_1INDUKCENMDAdependen --> node_Tetanickstimulace
    node_Tetanickstimulace --> node_AMPAdepolarizace
    node_AMPAdepolarizace --> node_NMDAaktivaceCainflux
    node_NMDAaktivaceCainflux --> node_CaMKIIaktivace
    node_CaMKIIaktivace --> node_2RANEXPRESEminuty
    node_2RANEXPRESEminuty --> node_CaMKII
    node_CaMKII --> node_odivostexistujcchAMP
    node_odivostexistujcchAMP --> node_fosforylaceSer831Glu
    node_fosforylaceSer831Glu --> node_3POZDNEXPRESEhodinyd
    node_3POZDNEXPRESEhodinyd --> node_Proteinsyntza
    node_Proteinsyntza --> node_TraffickingnovchAMPA
    node_TraffickingnovchAMPA --> node_GluA1obsahujc
    node_GluA1obsahujc --> node_Strukturlnzmnyspine
```

<details>
<summary>ASCII verze diagramu</summary>

```
LTP indukce a exprese
┌─────────────────────────────────────────────────────┐
│                                                     │
│   1. INDUKCE (NMDA-dependentní)                    │
│      Tetanická stimulace                           │
│           ↓                                        │
│      AMPA depolarizace                             │
│           ↓                                        │
│      NMDA aktivace → Ca²⁺ influx                  │
│           ↓                                        │
│      CaMKII aktivace                               │
│                                                     │
│   2. RANÁ EXPRESE (minuty)                         │
│      CaMKII                                         │
│           ↓                                        │
│      ↑ vodivost existujících AMPA                 │
│      (fosforylace Ser831 GluA1)                    │
│                                                     │
│   3. POZDNÍ EXPRESE (hodiny-dny)                   │
│      Protein syntéza                               │
│           ↓                                        │
│      Trafficking nových AMPA na synapsi            │
│      (GluA1-obsahující)                            │
│           ↓                                        │
│      Strukturální změny spine                      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### LTD (Long-Term Depression)

```mermaid
flowchart TD
    node_LTDmechanismus["LTD mechanismus"]
    node_Nzkofrekvnenstimulac["Nízkofrekvneční stimulace"]
    node_MrnCainfluxNMDA["Mírný Ca²⁺ influx NMDA"]
    node_Calcineurinfosfatza["Calcineurin fosfatáza"]
    node_DefosforylaceGluA1Se["Defosforylace GluA1 Ser845"]
    node_AMPAreceptorinternal["AMPA receptor internalizace"]
    node_synapticksla["synaptická síla"]

    node_LTDmechanismus --> node_Nzkofrekvnenstimulac
    node_Nzkofrekvnenstimulac --> node_MrnCainfluxNMDA
    node_MrnCainfluxNMDA --> node_Calcineurinfosfatza
    node_Calcineurinfosfatza --> node_DefosforylaceGluA1Se
    node_DefosforylaceGluA1Se --> node_AMPAreceptorinternal
    node_AMPAreceptorinternal --> node_synapticksla
```

<details>
<summary>ASCII verze diagramu</summary>

```
LTD mechanismus
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Nízkofrekvneční stimulace                        │
│           ↓                                        │
│   Mírný Ca²⁺ influx (NMDA)                        │
│           ↓                                        │
│   Calcineurin (fosfatáza)                          │
│           ↓                                        │
│   Defosforylace GluA1 (Ser845)                     │
│           ↓                                        │
│   AMPA receptor internalizace                      │
│           ↓                                        │
│   ↓ synaptická síla                               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### AMPA trafficking

| Proces | Podjednotka | Regulace |
|--------|-------------|----------|
| **Konstitutivní cycling** | GluA2/A3 | Kontinuální |
| **Activity-dependent insertion** | GluA1 | CaMKII, LTP |
| **Internalizace (LTD)** | GluA1, GluA2 | Calcineurin |

---

## Farmakologie

### Agonisté

| Látka | Ki (nM) | Selektivita | Použití |
|-------|---------|-------------|---------|
| **Glutamát** | 100-500 | Neselektivní | Endogenní |
| **AMPA** | 50-200 | AMPA selektivní | Výzkum |
| **Kainát** | 200-500 | Kainát > AMPA | Výzkum |
| **Willardiine** | 10-100 | AMPA | Výzkum |

### Antagonisté

| Látka | Typ | Ki (nM) | Použití |
|-------|-----|---------|---------|
| **NBQX** | Kompetitivní | 0.2-0.5 | Výzkum |
| **CNQX** | Kompetitivní | 1-3 | Výzkum |
| **GYKI 52466** | Nekompetitivní | 10-30 | Výzkum |
| **Perampanel** | Nekompetitivní | 60-100 | Epilepsie (schváleno) |

### Pozitivní alosterické modulátory (PAM) - "AMPAkiny"

| Látka | Typ | Mechanismus | Potenciál |
|-------|-----|-------------|-----------|
| **CX516** | Ampakine | ↓ desenzitizace | Kognice (fáze II fail) |
| **CX717** | Ampakine | ↓ desenzitizace | Kognice |
| **LY404187** | TARP-dependentní | ↑ proud | Výzkum |
| **S18986** | Ampakine | ↓ desenzitizace | Výzkum |

---

## Klinické aplikace

### Perampanel - Epilepsie

```mermaid
flowchart TD
    node_PERAMPANELFycompa["PERAMPANEL Fycompa"]
    node_Mechanismus["Mechanismus:"]
    node_NekompetitivnAMPAant["- Nekompetitivní AMPA antagonista"]
    node_Alosterickvazba["- Alosterická vazba"]
    node_Snenglutamtovexcitac["- Snížení glutamátové excitace"]
    node_Indikace["Indikace:"]
    node_Parcilnzchvatyaddon["- Parciální záchvaty add-on"]
    node_Primrngeneralizovant["- Primárně generalizované tonicko-klonické"]
    node_Dvkovn["Dávkování:"]
    node_Zatek2mgden["- Začátek: 2 mg/den"]
    node_Cl812mgden["- Cíl: 8-12 mg/den"]
    node_Nonpodnt105h["- Noční podání t½ ~105 h"]
    node_N["NÚ:"]
    node_Zvratsomnolence["- Závratě, somnolence"]
    node_Agresivitairitabilit["- Agresivita/iritabilita vzácně"]

    node_PERAMPANELFycompa --> node_Mechanismus
    node_Mechanismus --> node_NekompetitivnAMPAant
    node_NekompetitivnAMPAant --> node_Alosterickvazba
    node_Alosterickvazba --> node_Snenglutamtovexcitac
    node_Snenglutamtovexcitac --> node_Indikace
    node_Indikace --> node_Parcilnzchvatyaddon
    node_Parcilnzchvatyaddon --> node_Primrngeneralizovant
    node_Primrngeneralizovant --> node_Dvkovn
    node_Dvkovn --> node_Zatek2mgden
    node_Zatek2mgden --> node_Cl812mgden
    node_Cl812mgden --> node_Nonpodnt105h
    node_Nonpodnt105h --> node_N
    node_N --> node_Zvratsomnolence
    node_Zvratsomnolence --> node_Agresivitairitabilit

    click node_Snenglutamtovexcitac "/glossary/glutamate/" "- Snížení glutamátové excitace"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PERAMPANEL (Fycompa)
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Mechanismus:                                      │
│   - Nekompetitivní AMPA antagonista                │
│   - Alosterická vazba                               │
│   - Snížení glutamátové excitace                   │
│                                                     │
│   Indikace:                                         │
│   - Parciální záchvaty (add-on)                    │
│   - Primárně generalizované tonicko-klonické       │
│                                                     │
│   Dávkování:                                        │
│   - Začátek: 2 mg/den                              │
│   - Cíl: 8-12 mg/den                               │
│   - Noční podání (t½ ~105 h)                       │
│                                                     │
│   NÚ:                                               │
│   - Závratě, somnolence                            │
│   - Agresivita/iritabilita (vzácně)               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### Kognitivní enhancement

```mermaid
flowchart TD
    node_AMPAkinyTeoretickmec["AMPAkiny - Teoretický mechanismus"]
    node_AMPAkine["AMPAkine"]
    node_AMPAdesenzitizace["AMPA desenzitizace"]
    node_AMPAproudprodlouen["AMPA proud prodloužený"]
    node_NMDAaktivacesynergie["NMDA aktivace synergie"]
    node_LTPBDNF["LTP,  BDNF"]
    node_Kognicepam["Kognice, paměť"]
    node_StatusKlinickstudiev["Status: Klinické studie většinou negativní"]
    node_nebosmarginlnminkem["nebo s marginálním účinkem"]

    node_AMPAkinyTeoretickmec --> node_AMPAkine
    node_AMPAkine --> node_AMPAdesenzitizace
    node_AMPAdesenzitizace --> node_AMPAproudprodlouen
    node_AMPAproudprodlouen --> node_NMDAaktivacesynergie
    node_NMDAaktivacesynergie --> node_LTPBDNF
    node_LTPBDNF --> node_Kognicepam
    node_Kognicepam --> node_StatusKlinickstudiev
    node_StatusKlinickstudiev --> node_nebosmarginlnminkem
```

<details>
<summary>ASCII verze diagramu</summary>

```
AMPAkiny - Teoretický mechanismus
┌─────────────────────────────────────────────────────┐
│                                                     │
│   AMPAkine                                          │
│        │                                            │
│        ↓                                            │
│   ↓ AMPA desenzitizace                             │
│        │                                            │
│        ↓                                            │
│   ↑ AMPA proud (prodloužený)                       │
│        │                                            │
│        ↓                                            │
│   ↑ NMDA aktivace (synergie)                       │
│        │                                            │
│        ↓                                            │
│   ↑ LTP, ↑ BDNF                                    │
│        │                                            │
│        ↓                                            │
│   ↑ Kognice, paměť                                 │
│                                                     │
│   Status: Klinické studie většinou negativní       │
│   nebo s marginálním účinkem                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### Potenciální indikace

| Indikace | Přístup | Status |
|----------|---------|--------|
| **Kognitivní deficit (schizofrenie)** | AMPAkiny | Fáze II |
| **Alzheimerova choroba** | AMPAkiny | Preklinická |
| **Deprese** | AMPA potentiace | Výzkum |
| **ADHD** | AMPAkiny | Preklinická |
| **Respirační deprese** | AMPAkiny | Fáze II (narkotika) |

---

## AMPA a onemocnění

### Excitotoxicita

```mermaid
flowchart TD
    node_GluA2lackingAMPArece["GluA2-lacking AMPA receptory a patologie"]
    node_Normlnsta["Normální sta"]
    node_GluA2obsahujcAMPA["- GluA2-obsahující AMPA"]
    node_Caimpermeabiln["- Ca²⁺ impermeabilní"]
    node_Fyziologickexcitace["- Fyziologická excitace"]
    node_Patologickstavy["Patologické stavy"]
    node_ischmieepilepsietrau["ischémie, epilepsie, trauma"]
    node_GluA2expreseQReditin["GluA2 exprese /  Q/R editing"]
    node_GluA2lackingAMPACape["GluA2-lacking AMPA Ca²⁺-permeable"]
    node_CainfluxpesAMPA["Ca²⁺ influx přes AMPA"]
    node_EXCITOTOXICITA["EXCITOTOXICITA"]

    node_GluA2lackingAMPArece --> node_Normlnsta
    node_Normlnsta --> node_GluA2obsahujcAMPA
    node_GluA2obsahujcAMPA --> node_Caimpermeabiln
    node_Caimpermeabiln --> node_Fyziologickexcitace
    node_Fyziologickexcitace --> node_Patologickstavy
    node_Patologickstavy --> node_ischmieepilepsietrau
    node_ischmieepilepsietrau --> node_GluA2expreseQReditin
    node_GluA2expreseQReditin --> node_GluA2lackingAMPACape
    node_GluA2lackingAMPACape --> node_CainfluxpesAMPA
    node_CainfluxpesAMPA --> node_EXCITOTOXICITA

    click node_GluA2lackingAMPArece "/receptors/_index/" "GluA2-lacking AMPA receptory a patologie"
```

<details>
<summary>ASCII verze diagramu</summary>

```
GluA2-lacking AMPA receptory a patologie
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Normální stav                                     │
│   - GluA2-obsahující AMPA                          │
│   - Ca²⁺ impermeabilní                             │
│   - Fyziologická excitace                          │
│                                                     │
│   Patologické stavy                                 │
│   (ischémie, epilepsie, trauma)                    │
│        │                                            │
│        ↓                                            │
│   ↓ GluA2 exprese / ↓ Q/R editing                 │
│        │                                            │
│        ↓                                            │
│   GluA2-lacking AMPA (Ca²⁺-permeable)              │
│        │                                            │
│        ↓                                            │
│   Ca²⁺ influx přes AMPA                            │
│        │                                            │
│        ↓                                            │
│   EXCITOTOXICITA                                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### Asociace s nemocemi

| Onemocnění | AMPA změna | Důsledek |
|------------|------------|----------|
| **Epilepsie** | ↑ GluA1 | Hyperexcitabilita |
| **Ischémie** | ↓ GluA2 | Excitotoxicita |
| **ALS** | ↓ GluA2 editing | Motoneuronová smrt |
| **Rasmussen encefalitida** | Anti-GluA3 Ab | Autoimunita |
| **Limbická encefalitida** | Anti-AMPA Ab | Autoimunita |

---

## Auxiliární proteiny - TARPs

### TARP funkce

```mermaid
flowchart TD
    node_TARPTransmembraneAMP["TARP Transmembrane AMPA Receptor Regulatory Proteins"]
    node_2stargazin34578["γ-2 stargazin, γ-3, γ-4, γ-5, γ-7, γ-8"]
    node_Funkce["Funkce:"]
    node_1Traffickingnapovrch["1. Trafficking na povrch"]
    node_2Synapticklokalizace["2. Synaptická lokalizace PSD-95 vazba"]
    node_3Modulacekinetiky["3. Modulace kinetiky"]
    node_afinitaglutamtu["-  afinita glutamátu"]
    node_desenzitizace["-  desenzitizace"]
    node_Pomalejdeaktivace["- Pomalejší deaktivace"]
    node_Farmakologickvznam["Farmakologický význam:"]
    node_TARPdependentnPAMcle["- TARP-dependentní PAM = cílená modulace"]
    node_TkovspecifickTARPsse["- Tkáňově specifické TARPs = selektivita"]

    node_TARPTransmembraneAMP --> node_2stargazin34578
    node_2stargazin34578 --> node_Funkce
    node_Funkce --> node_1Traffickingnapovrch
    node_1Traffickingnapovrch --> node_2Synapticklokalizace
    node_2Synapticklokalizace --> node_3Modulacekinetiky
    node_3Modulacekinetiky --> node_afinitaglutamtu
    node_afinitaglutamtu --> node_desenzitizace
    node_desenzitizace --> node_Pomalejdeaktivace
    node_Pomalejdeaktivace --> node_Farmakologickvznam
    node_Farmakologickvznam --> node_TARPdependentnPAMcle
    node_TARPdependentnPAMcle --> node_TkovspecifickTARPsse

    click node_afinitaglutamtu "/glossary/glutamate/" "-  afinita glutamátu"
```

<details>
<summary>ASCII verze diagramu</summary>

```
TARP (Transmembrane AMPA Receptor Regulatory Proteins)
┌─────────────────────────────────────────────────────┐
│                                                     │
│   γ-2 (stargazin), γ-3, γ-4, γ-5, γ-7, γ-8        │
│                                                     │
│   Funkce:                                           │
│   1. Trafficking na povrch                          │
│   2. Synaptická lokalizace (PSD-95 vazba)          │
│   3. Modulace kinetiky                              │
│      - ↑ afinita glutamátu                         │
│      - ↓ desenzitizace                             │
│      - Pomalejší deaktivace                        │
│                                                     │
│   Farmakologický význam:                            │
│   - TARP-dependentní PAM = cílená modulace         │
│   - Tkáňově specifické TARPs = selektivita         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

---

## Srovnání glutamátových receptorů

| Vlastnost | **AMPA** | NMDA | Kainát | mGluR |
|-----------|----------|------|--------|-------|
| **Typ** | Ionotropní | Ionotropní | Ionotropní | Metabotropní |
| **Hlavní ion** | Na⁺ | Ca²⁺, Na⁺ | Na⁺ | G-protein |
| **Rychlost** | Velmi rychlá | Pomalá | Rychlá | Pomalá |
| **Funkce** | Rychlá EPSP | Plasticita | Modulace | Neuromodulace |
| **Mg²⁺ blok** | Ne | Ano | Ne | N/A |

---

## Výzkumné nástroje

### Farmakologické nástroje

| Nástroj | Typ | Použití |
|---------|-----|---------|
| **NBQX** | Antagonista | Blokáda AMPA |
| **Spermine** | Vnitřní blokátor | Ca²⁺-perm. AMPA |
| **Cyclothiazide** | PAM | Blok desenzitizace |
| **NASPM** | Selektivní blokátor | GluA2-lacking |

### Genetické nástroje

| Nástroj | Aplikace |
|---------|----------|
| **GluA1 KO** | LTP, paměť |
| **GluA2 KO** | Ca²⁺ permeabilita |
| **Conditional KO** | Regionálně specifické |

---

## Reference

1. Traynelis, S.F. et al. (2010). *Glutamate receptor ion channels: structure, regulation, and function*. Pharmacological Reviews.
2. Henley, J.M. & Wilkinson, K.A. (2016). *Synaptic AMPA receptor composition in development, plasticity and disease*. Nature Reviews Neuroscience.
3. Rogawski, M.A. (2011). *Revisiting AMPA receptors as an antiepileptic drug target*. Epilepsy Currents.
4. Kessels, H.W. & Malinow, R. (2009). *Synaptic AMPA receptor plasticity and behavior*. Neuron.
5. Huganir, R.L. & Nicoll, R.A. (2013). *AMPARs and synaptic plasticity: The last 25 years*. Neuron.

---

Viz také:
- [NMDA receptor](@/receptors/nmda.md) - Partner pro synaptickou plasticitu
- [mGluR](@/receptors/mglur.md) - Metabotropní glutamátové receptory
- [Glutamát](@/glossary/glutamate.md) - Hlavní excitační neurotransmiter
- [Glosář](@/glossary/_index.md) - Definice pojmů

<- Zpět na [Receptory](@/receptors/_index.md) | [mGluR](@/receptors/mglur.md) ->
