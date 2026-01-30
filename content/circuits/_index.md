+++
title = "Neurální okruhy"
description = "Funkční neurální sítě a jejich role v psychoaktivních stavech"
weight = 7
sort_by = "weight"
insert_anchor_links = "right"
+++

# Neurální okruhy a psychoaktivní látky

**Neurální okruhy** (circuits/networks) jsou funkčně propojené skupiny mozkových oblastí, které společně realizují komplexní kognitivní a emoční procesy. Psychoaktivní látky modulují tyto okruhy charakteristickými způsoby.

---

## Hlavní mozkové sítě

### Přehled sítí

| Síť | Zkratka | Funkce | Vliv psychedelik |
|-----|---------|--------|------------------|
| **Default Mode Network** | DMN | Self-reference, rumináce | Snížená aktivita |
| **Salience Network** | SN | Detekce důležitosti | Zvýšená aktivita |
| **Central Executive Network** | CEN | Kognitivní kontrola | Změněná |
| **Visual Network** | VN | Zrakové zpracování | Hyperaktivita |
| **Somatosensory Network** | SMN | Tělesné vnímání | Alterace |
| **Dorsal Attention Network** | DAN | Pozornost | Modulace |

---

## Default Mode Network (DMN)

### Anatomie

```mermaid
flowchart TD
    node_DEFAULTMODENETWORK["DEFAULT MODE NETWORK"]
    node_mPFC["mPFC"]
    node_medialPFC["medial PFC"]
    node_Selfthinking["• Self-thinking"]
    node_58a48b1d["▼                ▼                ▼"]
    node_AngularPCCLateral["Angular          PCC           Lateral"]
    node_gyrusposteriortempor["gyrus  posterior     temporal"]
    node_cingulatecortex["cingulate        cortex"]
    node_Hippocampus["Hippocampus"]
    node_pamov["paměťové"]
    node_procesy["procesy"]

    node_DEFAULTMODENETWORK --> node_mPFC
    node_mPFC --> node_medialPFC
    node_medialPFC --> node_Selfthinking
    node_Selfthinking --> node_58a48b1d
    node_58a48b1d --> node_AngularPCCLateral
    node_AngularPCCLateral --> node_gyrusposteriortempor
    node_gyrusposteriortempor --> node_cingulatecortex
    node_cingulatecortex --> node_Hippocampus
    node_Hippocampus --> node_pamov
    node_pamov --> node_procesy

    click node_DEFAULTMODENETWORK "/circuits/dmn/" "DEFAULT MODE NETWORK"
```

<details>
<summary>ASCII verze diagramu</summary>

```
┌─────────────────────────────────────────────────────────────┐
│                 DEFAULT MODE NETWORK                         │
│                                                              │
│              ┌─────────────────────┐                        │
│              │        mPFC         │                        │
│              │   (medial PFC)      │                        │
│              │   • Self-thinking   │                        │
│              └──────────┬──────────┘                        │
│                         │                                    │
│        ┌────────────────┼────────────────┐                  │
│        │                │                │                   │
│        ▼                ▼                ▼                   │
│   ┌─────────┐    ┌─────────────┐   ┌─────────────┐          │
│   │ Angular │    │     PCC     │   │   Lateral   │          │
│   │  gyrus  │←──→│(posterior   │←─→│  temporal   │          │
│   │         │    │ cingulate)  │   │   cortex    │          │
│   └─────────┘    └─────────────┘   └─────────────┘          │
│        │                │                │                   │
│        └────────────────┼────────────────┘                  │
│                         │                                    │
│                ┌────────┴────────┐                          │
│                │   Hippocampus   │                          │
│                │   (paměťové     │                          │
│                │   procesy)      │                          │
│                └─────────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

</details>

### Funkce DMN

| Proces | Komponenty | Aktivita |
|--------|------------|----------|
| **Self-reference** | mPFC | Přemýšlení o sobě |
| **Autobiografická paměť** | PCC, hippocampus | Vzpomínání |
| **Mind wandering** | Celá síť | Denní snění |
| **Theory of Mind** | mPFC, TPJ | Sociální kognice |
| **Prospekce** | mPFC, MTL | Plánování budoucnosti |

### DMN a psychedelika

```mermaid
flowchart TD
    node_NORMLNPSILOCYBIN["NORMÁLNÍ                    PSILOCYBIN"]
    node_DMNaktivita["DMN aktivita:   ████████████████            ░░░░░░░░░░░░░░░░"]
    node_VYSOKNZK["VYSOKÁ                       NÍZKÁ"]
    node_DMNkonektivita["DMN konektivita:"]
    node_mPFCPCCmPFCPCC["mPFC  PCC               mPFC   ·  ·  ·   PCC"]
    node_SILNOSLABEN["SILNÁ                              OSLABENÁ"]
    node_8dfb213c["▼                 ▼                  ▼                 ▼"]
    node_AngularLTCAngularLTC["Angular  LTC              Angular   ·  ·   LTC"]
    node_SUBJEKTIVNZITEK["SUBJEKTIVNÍ ZÁŽITEK:"]
    node_StabilnegoEgodissolu["• Stabilní ego                      • Ego dissolution"]
    node_RumincemonPtomnostvm["• Rumináce možná                    • Přítomnost v momentu"]
    node_Normlnselfreflection["• Normální self-reflection          • Ztráta hranic já/svět"]

    node_NORMLNPSILOCYBIN --> node_DMNaktivita
    node_DMNaktivita --> node_VYSOKNZK
    node_VYSOKNZK --> node_DMNkonektivita
    node_DMNkonektivita --> node_mPFCPCCmPFCPCC
    node_mPFCPCCmPFCPCC --> node_SILNOSLABEN
    node_SILNOSLABEN --> node_8dfb213c
    node_8dfb213c --> node_AngularLTCAngularLTC
    node_AngularLTCAngularLTC --> node_SUBJEKTIVNZITEK
    node_SUBJEKTIVNZITEK --> node_StabilnegoEgodissolu
    node_StabilnegoEgodissolu --> node_RumincemonPtomnostvm
    node_RumincemonPtomnostvm --> node_Normlnselfreflection

    click node_NORMLNPSILOCYBIN "/alkaloids/psilocybin/" "NORMÁLNÍ                    PSILOCYBIN"
```

<details>
<summary>ASCII verze diagramu</summary>

```
                NORMÁLNÍ                    PSILOCYBIN

DMN aktivita:   ████████████████            ░░░░░░░░░░░░░░░░
                   VYSOKÁ                       NÍZKÁ

DMN konektivita:
mPFC ←──────────→ PCC               mPFC ←  ·  ·  ·  → PCC
 │                 │                  │                 │
 │    SILNÁ        │                  │    OSLABENÁ     │
 │                 │                  │                 │
 ▼                 ▼                  ▼                 ▼
Angular ←────────→ LTC              Angular ←  ·  ·  → LTC

SUBJEKTIVNÍ ZÁŽITEK:
• Stabilní ego                      • Ego dissolution
• Rumináce možná                    • Přítomnost v momentu
• Normální self-reflection          • Ztráta hranic já/svět
```

</details>

### Klinické korelace

| Stav | DMN aktivita | Konektivita | Symptomy |
|------|--------------|-------------|----------|
| **Deprese** | ↑ | Hyperkonektivita | Rumináce, negativní self-talk |
| **Úzkost** | ↑ | Abnormální | Worry, anticipační úzkost |
| **PTSD** | ↑ | Dysregulovaná | Flashbacky, hypervigilance |
| **Psychedelický stav** | ↓↓ | Dezintegrace | Ego dissolution, mystické zážitky |
| **Meditace** | ↓ | Modifikovaná | Klid, přítomnost |

---

## Salience Network (SN)

### Anatomie

```mermaid
flowchart TD
    node_SALIENCENETWORK["SALIENCE NETWORK"]
    node_Anteriorinsula["Anterior insula"]
    node_AI["AI"]
    node_Interoceptce["• Interoceptce"]
    node_Emoce["• Emoce"]
    node_Anteriorcingulate["Anterior cingulate"]
    node_cortexdACC["cortex dACC"]
    node_Konflikt["• Konflikt"]
    node_Errordetection["• Error detection"]
    node_37b769db["▼              ▼              ▼"]
    node_AmygdalaVTASNThalamu["Amygdala      VTA/SN       Thalamus"]

    node_SALIENCENETWORK --> node_Anteriorinsula
    node_Anteriorinsula --> node_AI
    node_AI --> node_Interoceptce
    node_Interoceptce --> node_Emoce
    node_Emoce --> node_Anteriorcingulate
    node_Anteriorcingulate --> node_cortexdACC
    node_cortexdACC --> node_Konflikt
    node_Konflikt --> node_Errordetection
    node_Errordetection --> node_37b769db
    node_37b769db --> node_AmygdalaVTASNThalamu
```

<details>
<summary>ASCII verze diagramu</summary>

```
┌─────────────────────────────────────────────────────────────┐
│                   SALIENCE NETWORK                           │
│                                                              │
│              ┌─────────────────────┐                        │
│              │   Anterior insula   │                        │
│              │   (AI)              │                        │
│              │   • Interoceptce    │                        │
│              │   • Emoce           │                        │
│              └──────────┬──────────┘                        │
│                         │                                    │
│                    ←────┼────→                              │
│                         │                                    │
│              ┌──────────┴──────────┐                        │
│              │  Anterior cingulate │                        │
│              │  cortex (dACC)      │                        │
│              │  • Konflikt         │                        │
│              │  • Error detection  │                        │
│              └─────────────────────┘                        │
│                         │                                    │
│          ┌──────────────┼──────────────┐                    │
│          ▼              ▼              ▼                     │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐               │
│   │ Amygdala  │  │  VTA/SN   │  │  Thalamus │               │
│   │           │  │           │  │           │               │
│   └───────────┘  └───────────┘  └───────────┘               │
└─────────────────────────────────────────────────────────────┘
```

</details>

### Funkce SN

| Funkce | Mechanismus | Účinek psychedelik |
|--------|-------------|-------------------|
| **Detekce salience** | AI + dACC | Změněná prioritizace |
| **Switching mezi DMN/CEN** | AI hub | Fluidní přechody |
| **Interoceptivní awareness** | Anterior insula | Zesílené tělesné vnímání |
| **Emoční zpracování** | Amygdala propojení | Emoční uvolnění |

### Psychedelika a SN

```mermaid
flowchart TD
    node_EFEKTPSYCHEDELIKNASA["EFEKT PSYCHEDELIK NA SALIENCE NETWORK:"]
    node_1Zvenaktivitaanterio["1. Zvýšená aktivita anterior insuly"]
    node_Zesleninteroceptivnv["Zesílené interoceptivní vnímání"]
    node_Ctmsvtlointenzivnji["'Cítím své tělo intenzivněji'"]
    node_2ModulacedACC["2. Modulace dACC"]
    node_Zmnndetekcesignifica["Změněná detekce significance"]
    node_Vesezdhlubocevznamn["'Vše se zdá hluboce významné'"]
    node_3ZmnnswitchingDMNCEN["3. Změněný switching DMN ↔ CEN"]
    node_Fluidnpechodymezimdy["Fluidní přechody mezi módy"]
    node_Mylenkyvolnplynou["'Myšlenky volně plynou'"]

    node_EFEKTPSYCHEDELIKNASA --> node_1Zvenaktivitaanterio
    node_1Zvenaktivitaanterio --> node_Zesleninteroceptivnv
    node_Zesleninteroceptivnv --> node_Ctmsvtlointenzivnji
    node_Ctmsvtlointenzivnji --> node_2ModulacedACC
    node_2ModulacedACC --> node_Zmnndetekcesignifica
    node_Zmnndetekcesignifica --> node_Vesezdhlubocevznamn
    node_Vesezdhlubocevznamn --> node_3ZmnnswitchingDMNCEN
    node_3ZmnnswitchingDMNCEN --> node_Fluidnpechodymezimdy
    node_Fluidnpechodymezimdy --> node_Mylenkyvolnplynou
```

<details>
<summary>ASCII verze diagramu</summary>

```
EFEKT PSYCHEDELIK NA SALIENCE NETWORK:

1. Zvýšená aktivita anterior insuly
   → Zesílené interoceptivní vnímání
   → "Cítím své tělo intenzivněji"

2. Modulace dACC
   → Změněná detekce significance
   → "Vše se zdá hluboce významné"

3. Změněný switching DMN ↔ CEN
   → Fluidní přechody mezi módy
   → "Myšlenky volně plynou"
```

</details>

---

## Central Executive Network (CEN)

### Anatomie

```mermaid
flowchart TD
    node_CENTRALEXECUTIVENETW["CENTRAL EXECUTIVE NETWORK"]
    node_DorsolateralPFCdlPFC["Dorsolateral PFC dlPFC"]
    node_Workingmemory["• Working memory"]
    node_Kognitivnkontrola["• Kognitivní kontrola"]
    node_Plnovn["• Plánování"]
    node_Posteriorparietalcor["Posterior parietal cortex PPC"]
    node_Prostorovpozornost["• Prostorová pozornost"]
    node_Numerickzpracovn["• Numerické zpracování"]

    node_CENTRALEXECUTIVENETW --> node_DorsolateralPFCdlPFC
    node_DorsolateralPFCdlPFC --> node_Workingmemory
    node_Workingmemory --> node_Kognitivnkontrola
    node_Kognitivnkontrola --> node_Plnovn
    node_Plnovn --> node_Posteriorparietalcor
    node_Posteriorparietalcor --> node_Prostorovpozornost
    node_Prostorovpozornost --> node_Numerickzpracovn
```

<details>
<summary>ASCII verze diagramu</summary>

```
┌─────────────────────────────────────────────────────────────┐
│              CENTRAL EXECUTIVE NETWORK                       │
│                                                              │
│   ┌─────────────────────────────────────────────────────┐   │
│   │          Dorsolateral PFC (dlPFC)                    │   │
│   │          • Working memory                            │   │
│   │          • Kognitivní kontrola                       │   │
│   │          • Plánování                                 │   │
│   └─────────────────────┬───────────────────────────────┘   │
│                         │                                    │
│                    ←────┼────→                              │
│                         │                                    │
│   ┌─────────────────────┴───────────────────────────────┐   │
│   │          Posterior parietal cortex (PPC)             │   │
│   │          • Prostorová pozornost                      │   │
│   │          • Numerické zpracování                      │   │
│   └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

</details>

### DMN vs CEN (anticorrelation)

```mermaid
flowchart TD
    node_NORMLNSTAV["NORMÁLNÍ STAV:"]
    node_DMNaktivita["DMN aktivita:"]
    node_HighLowHighLow["High      Low      High      Low"]
    node_CENaktivita["CEN aktivita:"]
    node_LowHighLowHighLowHig["Low  High Low High Low  High"]
    node_RestTaskRestTaskRest["Rest  Task  Rest  Task  Rest  Task"]
    node_DMNaCENjsoutypickyAN["DMN a CEN jsou typicky ANTIKORELOVANÉ."]
    node_PSYCHEDELICKSTAV["PSYCHEDELICKÝ STAV:"]
    node_DMNaktivita["DMN aktivita:  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"]
    node_Persistentnnzk["Persistentně nízká"]
    node_CENaktivita["CEN aktivita:  ░░░░█░░░░░█░░░█░░░░░░█░░░░░█░░░░█░░░░"]
    node_Variabilnneorganizov["Variabilní, neorganizovaná"]
    node_AntikorelaceKOLABUJE["Antikorelace KOLABUJE  Sítě se 'mixují'"]
    node_Synestziemezikogniti["'Synestézie' mezi kognitivními módy"]

    node_NORMLNSTAV --> node_DMNaktivita
    node_DMNaktivita --> node_HighLowHighLow
    node_HighLowHighLow --> node_CENaktivita
    node_CENaktivita --> node_LowHighLowHighLowHig
    node_LowHighLowHighLowHig --> node_RestTaskRestTaskRest
    node_RestTaskRestTaskRest --> node_DMNaCENjsoutypickyAN
    node_DMNaCENjsoutypickyAN --> node_PSYCHEDELICKSTAV
    node_PSYCHEDELICKSTAV --> node_DMNaktivita
    node_DMNaktivita --> node_Persistentnnzk
    node_Persistentnnzk --> node_CENaktivita
    node_CENaktivita --> node_Variabilnneorganizov
    node_Variabilnneorganizov --> node_AntikorelaceKOLABUJE
    node_AntikorelaceKOLABUJE --> node_Synestziemezikogniti
```

<details>
<summary>ASCII verze diagramu</summary>

```
NORMÁLNÍ STAV:

DMN aktivita:  ──────────────────────────────────────────
               High │     │Low │     │High │     │Low
                    │     │    │     │     │     │
CEN aktivita:  ─────┼─────┼────┼─────┼─────┼─────┼────
               Low  │High │Low │High │Low  │High │
                    │     │    │     │     │     │
               ─────┴─────┴────┴─────┴─────┴─────┴────
               Rest  Task  Rest  Task  Rest  Task

DMN a CEN jsou typicky ANTIKORELOVANÉ.

PSYCHEDELICKÝ STAV:

DMN aktivita:  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
               Persistentně nízká

CEN aktivita:  ░░░░█░░░░░█░░░█░░░░░░█░░░░░█░░░░█░░░░
               Variabilní, neorganizovaná

Antikorelace KOLABUJE → Sítě se "mixují"
→ "Synestézie" mezi kognitivními módy
```

</details>

---

## Serotoninergní dráhy

### Anatomie

```mermaid
flowchart TD
    node_SEROTONINERGNPROJEKC["SEROTONINERGNÍ PROJEKCE"]
    node_RAPHENUCLEI["RAPHE NUCLEI"]
    node_DorslnrapheDR["Dorsální raphe DR"]
    node_MedilnrapheMR["Mediální raphe MR"]
    node_3ef67005["▼               ▼               ▼"]
    node_KORTEXLIMBICKBAZLN["KORTEX        LIMBICKÝ      BAZÁLNÍ"]
    node_SYSTMGANGLIA["SYSTÉM        GANGLIA"]
    node_PFCAmygdalaStriatum["• PFC         • Amygdala    • Striatum"]
    node_VizulHippoNacc["• Vizuál.     • Hippo.      • N. acc."]
    node_KogniceEmocePamMotor["Kognice          Emoce/Paměť     Motorika/Odměna"]

    node_SEROTONINERGNPROJEKC --> node_RAPHENUCLEI
    node_RAPHENUCLEI --> node_DorslnrapheDR
    node_DorslnrapheDR --> node_MedilnrapheMR
    node_MedilnrapheMR --> node_3ef67005
    node_3ef67005 --> node_KORTEXLIMBICKBAZLN
    node_KORTEXLIMBICKBAZLN --> node_SYSTMGANGLIA
    node_SYSTMGANGLIA --> node_PFCAmygdalaStriatum
    node_PFCAmygdalaStriatum --> node_VizulHippoNacc
    node_VizulHippoNacc --> node_KogniceEmocePamMotor
```

<details>
<summary>ASCII verze diagramu</summary>

```
┌─────────────────────────────────────────────────────────────┐
│            SEROTONINERGNÍ PROJEKCE                           │
│                                                              │
│                    RAPHE NUCLEI                              │
│              ┌──────────────────────┐                       │
│              │  Dorsální raphe (DR) │                       │
│              │  Mediální raphe (MR) │                       │
│              └──────────┬───────────┘                       │
│                         │                                    │
│         ┌───────────────┼───────────────┐                   │
│         │               │               │                    │
│         ▼               ▼               ▼                    │
│   ┌───────────┐   ┌───────────┐   ┌───────────┐             │
│   │ KORTEX    │   │ LIMBICKÝ  │   │ BAZÁLNÍ   │             │
│   │           │   │ SYSTÉM    │   │ GANGLIA   │             │
│   │ • PFC     │   │ • Amygdala│   │ • Striatum│             │
│   │ • Vizuál. │   │ • Hippo.  │   │ • N. acc. │             │
│   └───────────┘   └───────────┘   └───────────┘             │
│         │               │               │                    │
│         ▼               ▼               ▼                    │
│   Kognice          Emoce/Paměť     Motorika/Odměna           │
└─────────────────────────────────────────────────────────────┘
```

</details>

### 5-HT receptor distribuce v okruzích

| Okruh | Primární 5-HT receptor | Efekt psychedelik |
|-------|------------------------|-------------------|
| Kortikální | [5-HT2A](@/receptors/5-ht2a.md) | Halucinace, změněná kognice |
| Limbický | 5-HT2A, 5-HT1A | Emoční modulace |
| Striatální | 5-HT2A, 5-HT2C | Motorická změna |
| Autoreceptory (raphe) | 5-HT1A | Snížení 5-HT uvolňování |

---

## Dopaminergní okruhy

### Čtyři hlavní dráhy

```mermaid
flowchart TD
    node_DOPAMINERGNDRHY["DOPAMINERGNÍ DRÁHY"]
    node_1MESOLIMBICKodmna["1. MESOLIMBICKÁ odměna"]
    node_VTANucleusaccumbens["VTA  Nucleus accumbens"]
    node_Motivacepleasure["Motivace, pleasure"]
    node_2MESOKORTIKLNkognice["2. MESOKORTIKÁLNÍ kognice"]
    node_VTAPrefrontlnkortex["VTA  Prefrontální kortex"]
    node_Workingmemorypozorno["Working memory, pozornost"]
    node_3NIGROSTRIATLNmotori["3. NIGROSTRIATÁLNÍ motorika"]
    node_SNcStriatum["SNc  Striatum"]
    node_Volnpohyb["Volní pohyb"]
    node_4TUBEROINFUNDIBULRNh["4. TUBEROINFUNDIBULÁRNÍ hormony"]
    node_HypothalamusHypofza["Hypothalamus  Hypofýza"]
    node_Prolaktinregulace["Prolaktin regulace"]
    node_VTAVentralntegmentln["VTA = Ventralní tegmentální area"]
    node_SNcSubstantianigrapa["SNc = Substantia nigra pars compacta"]

    node_DOPAMINERGNDRHY --> node_1MESOLIMBICKodmna
    node_1MESOLIMBICKodmna --> node_VTANucleusaccumbens
    node_VTANucleusaccumbens --> node_Motivacepleasure
    node_Motivacepleasure --> node_2MESOKORTIKLNkognice
    node_2MESOKORTIKLNkognice --> node_VTAPrefrontlnkortex
    node_VTAPrefrontlnkortex --> node_Workingmemorypozorno
    node_Workingmemorypozorno --> node_3NIGROSTRIATLNmotori
    node_3NIGROSTRIATLNmotori --> node_SNcStriatum
    node_SNcStriatum --> node_Volnpohyb
    node_Volnpohyb --> node_4TUBEROINFUNDIBULRNh
    node_4TUBEROINFUNDIBULRNh --> node_HypothalamusHypofza
    node_HypothalamusHypofza --> node_Prolaktinregulace
    node_Prolaktinregulace --> node_VTAVentralntegmentln
    node_VTAVentralntegmentln --> node_SNcSubstantianigrapa
```

<details>
<summary>ASCII verze diagramu</summary>

```
┌─────────────────────────────────────────────────────────────┐
│             DOPAMINERGNÍ DRÁHY                               │
│                                                              │
│   1. MESOLIMBICKÁ (odměna)                                  │
│      VTA ──────────────→ Nucleus accumbens                   │
│                          → Motivace, pleasure                │
│                                                              │
│   2. MESOKORTIKÁLNÍ (kognice)                               │
│      VTA ──────────────→ Prefrontální kortex                │
│                          → Working memory, pozornost         │
│                                                              │
│   3. NIGROSTRIATÁLNÍ (motorika)                             │
│      SNc ──────────────→ Striatum                           │
│                          → Volní pohyb                       │
│                                                              │
│   4. TUBEROINFUNDIBULÁRNÍ (hormony)                         │
│      Hypothalamus ─────→ Hypofýza                           │
│                          → Prolaktin regulace                │
│                                                              │
└─────────────────────────────────────────────────────────────┘

VTA = Ventralní tegmentální area
SNc = Substantia nigra pars compacta
```

</details>

### Psychedelika a dopamin

| Látka | Dopaminový efekt | Subjektivní |
|-------|------------------|-------------|
| [LSD](@/alkaloids/lsd.md) | D2 parciální agonismus | Euforie |
| [Psilocybin](@/alkaloids/psilocybin.md) | Minimální | Neutrální nálada |
| [DMT](@/alkaloids/dmt.md) | Sigma-1 (ne D2) | Jiný typ euforie |

---

## Integrace vědomí - Claustrum

### Anatomie a konektivita

```mermaid
flowchart TD
    node_CLAUSTRUM["CLAUSTRUM"]
    node_Dirigentorchestruvdo["'Dirigent orchestru vědomí'"]
    node_TENKPRUHEDHMOTY["TENKÝ PRUH ŠEDÉ HMOTY"]
    node_meziinsulouabazlnmig["mezi insulou a bazálními ganglii"]
    node_3ef67005["▼               ▼               ▼"]
    node_SenzorickMotorickAso["Senzorické      Motorické      Asociační"]
    node_kortexkortexkortex["kortex          kortex         kortex"]
    node_Funkce["Funkce:"]
    node_Integracemultimodlni["• Integrace multimodální informace"]
    node_Bindingvdomhozitku["• 'Binding' vědomého zážitku"]
    node_Synchronizacekortikl["• Synchronizace kortikální aktivity"]
    node_Psychedelika["Psychedelika:"]
    node_Nejvyhustota5HT2Arec["• Nejvyšší hustota 5-HT2A receptorů v mozku!"]
    node_Dezintegraceegodisso["• Dezintegrace  'ego dissolution'"]
    node_Resetterapeutickpote["• Reset  terapeutický potenciál"]

    node_CLAUSTRUM --> node_Dirigentorchestruvdo
    node_Dirigentorchestruvdo --> node_TENKPRUHEDHMOTY
    node_TENKPRUHEDHMOTY --> node_meziinsulouabazlnmig
    node_meziinsulouabazlnmig --> node_3ef67005
    node_3ef67005 --> node_SenzorickMotorickAso
    node_SenzorickMotorickAso --> node_kortexkortexkortex
    node_kortexkortexkortex --> node_Funkce
    node_Funkce --> node_Integracemultimodlni
    node_Integracemultimodlni --> node_Bindingvdomhozitku
    node_Bindingvdomhozitku --> node_Synchronizacekortikl
    node_Synchronizacekortikl --> node_Psychedelika
    node_Psychedelika --> node_Nejvyhustota5HT2Arec
    node_Nejvyhustota5HT2Arec --> node_Dezintegraceegodisso
    node_Dezintegraceegodisso --> node_Resetterapeutickpote

    click node_Nejvyhustota5HT2Arec "/receptors/5-ht2a/" "• Nejvyšší hustota 5-HT2A receptorů v mozku!"
```

<details>
<summary>ASCII verze diagramu</summary>

```
┌─────────────────────────────────────────────────────────────┐
│                    CLAUSTRUM                                 │
│              "Dirigent orchestru vědomí"                     │
│                                                              │
│   ┌───────────────────────────────────────────────────┐     │
│   │              TENKÝ PRUH ŠEDÉ HMOTY                │     │
│   │           (mezi insulou a bazálními ganglii)      │     │
│   └───────────────────────────────────────────────────┘     │
│                           │                                  │
│           ┌───────────────┼───────────────┐                 │
│           │               │               │                  │
│           ▼               ▼               ▼                  │
│     Senzorické      Motorické      Asociační                │
│      kortex          kortex         kortex                  │
│                                                              │
│   Funkce:                                                    │
│   • Integrace multimodální informace                        │
│   • "Binding" vědomého zážitku                              │
│   • Synchronizace kortikální aktivity                       │
│                                                              │
│   Psychedelika:                                             │
│   • Nejvyšší hustota 5-HT2A receptorů v mozku!              │
│   • Dezintegrace → "ego dissolution"                        │
│   • Reset → terapeutický potenciál                          │
└─────────────────────────────────────────────────────────────┘
```

</details>

---

## Entropic Brain Hypothesis

### Koncept

```mermaid
flowchart TD
    node_ENTROPIEMOZKOVAKTIVI["ENTROPIE MOZKOVÉ AKTIVITY"]
    node_NzkentropieVysokentr["Nízká entropie              Vysoká entropie"]
    node_rigidnprediktabilnfl["rigidní, prediktabilní    flexibilní, variabilní"]
    node_a6b5b6fe["▼                           ▼"]
    node_DepresePsychedelick["• Deprese                • Psychedelický"]
    node_OCDsta["• OCD                      sta"]
    node_ZvislostiKreativita["• Závislosti             • Kreativita"]
    node_RigidnFlexibilita["• Rigidní                • Flexibilita"]
    node_mylenInsight["myšlení                • Insight"]
    node_OPTIMLNENTROPIE["OPTIMÁLNÍ ENTROPIE"]
    node_normlnvdom["normální vědomí"]

    node_ENTROPIEMOZKOVAKTIVI --> node_NzkentropieVysokentr
    node_NzkentropieVysokentr --> node_rigidnprediktabilnfl
    node_rigidnprediktabilnfl --> node_a6b5b6fe
    node_a6b5b6fe --> node_DepresePsychedelick
    node_DepresePsychedelick --> node_OCDsta
    node_OCDsta --> node_ZvislostiKreativita
    node_ZvislostiKreativita --> node_RigidnFlexibilita
    node_RigidnFlexibilita --> node_mylenInsight
    node_mylenInsight --> node_OPTIMLNENTROPIE
    node_OPTIMLNENTROPIE --> node_normlnvdom
```

<details>
<summary>ASCII verze diagramu</summary>

```
ENTROPIE MOZKOVÉ AKTIVITY

Nízká entropie              Vysoká entropie
(rigidní, prediktabilní)    (flexibilní, variabilní)
        │                           │
        ▼                           ▼
┌──────────────────┐       ┌──────────────────┐
│   • Deprese      │       │   • Psychedelický│
│   • OCD          │       │     stav         │
│   • Závislosti   │       │   • Kreativita   │
│   • Rigidní      │       │   • Flexibilita  │
│     myšlení      │       │   • Insight      │
└──────────────────┘       └──────────────────┘
        │                           │
        └───────────┬───────────────┘
                    │
                    ▼
            OPTIMÁLNÍ ENTROPIE
            (normální vědomí)
```

</details>

### Entropic Brain a terapie

| Stav | Entropie | Terapeutický cíl |
|------|----------|------------------|
| Deprese | Nízká (DMN hyperkonektivita) | Zvýšit flexibilitu |
| Závislosti | Nízká (habituální patterns) | Narušit rigidní okruhy |
| PTSD | Abnormální (hyperarousal) | "Reset" |
| Psychedelický | Vysoká | Dočasný, terapeutický |
| Post-psychedelický | Optimalizovaná | Trvalé změny |

---

## Reference

1. Menon, V. (2011). *Large-scale brain networks and psychopathology*. Trends in Cognitive Sciences.
2. Carhart-Harris, R.L. et al. (2014). *The entropic brain: a theory of conscious states*. Frontiers in Human Neuroscience.
3. Daws, R.E. et al. (2022). *Increased global integration in the brain after psilocybin therapy for depression*. Nature Medicine.
4. Barrett, F.S. & Griffiths, R.R. (2018). *Classic hallucinogens and mystical experiences*. Current Topics in Behavioral Neurosciences.

---

Viz také:
- [Mozek](@/brain/_index.md) - Anatomické oblasti
- [Receptory](@/receptors/_index.md) - Molekulární cíle
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Primární cíl psychedelik
- [Default Mode Network](@/circuits/dmn.md) - Detailní popis

← Zpět na [Hlavní stránku](@/_index.md)
