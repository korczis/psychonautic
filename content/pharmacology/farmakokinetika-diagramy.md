+++
title = "Farmakokinetika - interaktivni diagramy"
description = "Vizualni pruvodce farmakokinetikou: ADME procesy, metabolicke drahy a receptorove interakce zobrazene pomoci interaktivnich diagramu"
date = 2026-01-30
updated = 2026-01-30
weight = 10
draft = false

[taxonomies]
categories = ["farmakologie", "farmakokinetika"]
tags = ["ADME", "metabolismus", "absorpce", "distribuce", "eliminace", "receptory", "diagramy"]

[extra]
toc = true
mermaid = true
scientific_level = "intermediate"
+++

# Farmakokinetika - interaktivni diagramy

Farmakokinetika zkouma osud lecive latky v organismu. Tato stranka prezentuje klicove
farmakokineticky procesy pomoci interaktivnich diagramu, ktere lze exportovat jako PNG
pro dalsi pouziti.

## ADME procesy

Zakladni farmakokineticky model popisuje ctyri hlavni faze: **Absorpce**, **Distribuce**,
**Metabolismus** a **Eliminace** (ADME).

```mermaid
graph TD
    A["Podani latky<br/>(per os, i.v., i.m.)"] --> B["ABSORPCE<br/>GIT, plice, kuze"]
    B --> C["Portalní oběh"]
    C --> D{"First-pass<br/>metabolismus<br/>(játra)"}
    D -->|"Aktivní metabolit"| E["DISTRIBUCE<br/>Systémový oběh"]
    D -->|"Inaktivní metabolit"| F["Eliminace"]
    E --> G["Cílová tkáň<br/>(receptory)"]
    E --> H["Zásobní tkáně<br/>(tuk, kosti)"]
    E --> I["METABOLISMUS<br/>Fáze I: oxidace, redukce<br/>Fáze II: konjugace"]
    I --> J["ELIMINACE<br/>Ledviny, žluč, plíce"]
    G -->|"Farmakologický<br/>účinek"| K["Terapeutická<br/>odpověď"]
    H -->|"Postupné<br/>uvolňování"| E

    style A fill:#4ade80,stroke:#16a34a,color:#14532d
    style B fill:#60a5fa,stroke:#2563eb,color:#1e3a5f
    style E fill:#f59e0b,stroke:#d97706,color:#78350f
    style I fill:#a78bfa,stroke:#7c3aed,color:#3b0764
    style J fill:#f87171,stroke:#dc2626,color:#7f1d1d
    style K fill:#34d399,stroke:#059669,color:#064e3b
```

## Receptor-ligand interakce

Zakladni typy receptor-ligand interakci v neurofarmakologii:

```mermaid
graph LR
    subgraph "Agonismus"
        L1["Plný agonista"] -->|"Maximální<br/>odpověď"| R1["Receptor<br/>(aktivní)"]
        L2["Parciální agonista"] -->|"Submaximální<br/>odpověď"| R2["Receptor<br/>(částečně aktivní)"]
    end

    subgraph "Antagonismus"
        L3["Kompetitivní<br/>antagonista"] -->|"Blokáda<br/>vazebného místa"| R3["Receptor<br/>(neaktivní)"]
        L4["Nekompetitivní<br/>antagonista"] -->|"Alosterická<br/>inhibice"| R4["Receptor<br/>(konformační změna)"]
    end

    subgraph "Inverzní agonismus"
        L5["Inverzní agonista"] -->|"Snížení bazální<br/>aktivity"| R5["Receptor<br/>(inhibovaný)"]
    end

    style L1 fill:#22c55e,stroke:#16a34a,color:#14532d
    style L2 fill:#86efac,stroke:#22c55e,color:#14532d
    style L3 fill:#ef4444,stroke:#dc2626,color:#7f1d1d
    style L4 fill:#f87171,stroke:#ef4444,color:#7f1d1d
    style L5 fill:#f59e0b,stroke:#d97706,color:#78350f
```

## Receptor binding kinetics

Model asociace a disociace ligandy z receptoru s ukazkou residence time pro vybrane psychoaktivni latky:

```mermaid
graph TD
    subgraph "Receptor binding dynamics"
        L[Ligand]
        R[Receptor]
        LR[Ligand-Receptor komplex]

        L -->|"kon<br/>(on-rate)"| BIND{Vazba}
        R --> BIND
        BIND --> LR

        LR -->|"koff<br/>(off-rate)"| DISS{Disociace}
        DISS --> L
        DISS --> R
    end

    subgraph "Rovnovážné vztahy"
        KD["`KD = koff / kon
        Disociační konstanta
        (nižší = vyšší afinita)`"]

        RT["`Residence time = 1 / koff
        Doba zdržení na receptoru
        (delší = delší účinek)`"]
    end

    subgraph "Příklady psychoaktivních látek"
        subgraph "5-HT2A receptor"
            LSD_EX["`LSD
            KD: 1-2 nM
            Residence time: 100+ min
            → Dlouhý účinek (8-12h)`"]

            PSI_EX["`Psilocin
            KD: 3-6 nM
            Residence time: 15-30 min
            → Střední účinek (4-6h)`"]

            SER_EX["`Serotonin
            KD: 5-10 nM
            Residence time: 1-5 min
            → Krátký fyziologický signál`"]
        end

        subgraph "NMDA receptor"
            KET_EX["`Ketamin
            KD: 0.5-1 μM
            Residence time: 30-60 min
            → Disociativní účinek`"]

            MEM_EX["`Memantin
            KD: 1-3 μM
            Residence time: 100+ min
            → Neuroprotekce`"]
        end

        subgraph "D2 receptor"
            HAL_EX["`Haloperidol
            KD: 0.1-1 nM
            Residence time: 60+ min
            → Antipsychotický účinek`"]
        end
    end

    BIND -.-> KD
    DISS -.-> RT

    classDef ligand fill:#60a5fa,stroke:#2563eb,color:#1e3a5f
    classDef receptor fill:#34d399,stroke:#059669,color:#064e3b
    classDef complex fill:#a78bfa,stroke:#7c3aed,color:#3b0764
    classDef kinetics fill:#fbbf24,stroke:#f59e0b,color:#78350f
    classDef example fill:#f472b6,stroke:#ec4899,color:#831843

    class L ligand
    class R receptor
    class LR complex
    class BIND,DISS,KD,RT kinetics
    class LSD_EX,PSI_EX,SER_EX,KET_EX,MEM_EX,HAL_EX example
```

## Serotoninova draha

Serotoninergni system a jeho klicove komponenty pri pusobeni psychedelik:

```mermaid
graph TD
    TRP["Tryptofan<br/>(esenciální AK)"] -->|"Tryptofan<br/>hydroxyláza"| 5HTP["5-hydroxytryptofan"]
    5HTP -->|"AADC<br/>(dekarboxyláza)"| 5HT["Serotonin<br/>(5-HT)"]

    5HT --> V["Vezikulární<br/>transport (VMAT2)"]
    V --> SYN["Synaptická<br/>štěrbina"]

    SYN --> R1["5-HT₁A<br/>(anxiolytický)"]
    SYN --> R2["5-HT₂A<br/>(psychedelický)"]
    SYN --> R3["5-HT₂C<br/>(anorektický)"]
    SYN --> R4["5-HT₃<br/>(emetický)"]

    SYN --> SERT["SERT<br/>(zpětné vychytávání)"]
    SERT --> MAO["MAO-A<br/>(degradace)"]
    MAO --> HIAA["5-HIAA<br/>(metabolit v moči)"]

    PSY["Psychedelika<br/>(LSD, psilocin)"] -.->|"Agonismus"| R2
    SSRI["SSRI<br/>(fluoxetin)"] -.->|"Inhibice"| SERT
    MAOI["MAO inhibitory<br/>(harmalin)"] -.->|"Inhibice"| MAO

    style TRP fill:#e0e7ff,stroke:#6366f1,color:#312e81
    style 5HT fill:#fef3c7,stroke:#f59e0b,color:#78350f
    style R2 fill:#fce7f3,stroke:#ec4899,color:#831843
    style PSY fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
    style SSRI fill:#d1fae5,stroke:#10b981,color:#064e3b
    style MAOI fill:#fee2e2,stroke:#ef4444,color:#7f1d1d
```

## Dopaminergni draha

Klicove dopaminergni drahy mozku a jejich funkce:

```mermaid
graph TD
    subgraph "Mezolimbická dráha"
        VTA1["VTA<br/>(ventrální tegmentum)"] -->|"Odměna<br/>motivace"| NAc["Nucleus<br/>accumbens"]
    end

    subgraph "Mezokortikální dráha"
        VTA2["VTA"] -->|"Kognice<br/>rozhodování"| PFC["Prefrontální<br/>kortex"]
    end

    subgraph "Nigrostriatální dráha"
        SN["Substantia<br/>nigra"] -->|"Motorika<br/>návyky"| STR["Striatum<br/>(kaudátum + putamen)"]
    end

    subgraph "Tuberoinfundibulární dráha"
        HYP["Hypotalamus"] -->|"Inhibice<br/>prolaktinu"| PIT["Hypofýza"]
    end

    AMPH["Amfetamin"] -.->|"↑ uvolnění DA"| NAc
    AMPH -.->|"↑ uvolnění DA"| STR
    COC["Kokain"] -.->|"Blokáda DAT"| NAc
    HAL["Haloperidol"] -.->|"D2 blokáda"| STR
    HAL -.->|"D2 blokáda"| PIT

    style VTA1 fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
    style VTA2 fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
    style NAc fill:#fef3c7,stroke:#f59e0b,color:#78350f
    style PFC fill:#e0e7ff,stroke:#6366f1,color:#312e81
    style SN fill:#f3e8ff,stroke:#a855f7,color:#581c87
    style AMPH fill:#fee2e2,stroke:#ef4444,color:#7f1d1d
    style COC fill:#fee2e2,stroke:#ef4444,color:#7f1d1d
    style HAL fill:#d1fae5,stroke:#10b981,color:#064e3b
```

## Farmakokineticky profil - casova osa

Typicky farmakokineticky profil latky po peroralni podani:

```mermaid
gantt
    title Farmakokinetický profil (perorální podání)
    dateFormat HH:mm
    axisFormat %H:%M

    section Absorpce
    Rozpuštění v GIT        :a1, 00:00, 30m
    Absorpce ze střeva      :a2, 00:15, 60m
    First-pass metabolismus :a3, 00:30, 30m

    section Distribuce
    Systémový oběh          :d1, 00:45, 120m
    Tkáňová distribuce      :d2, 01:00, 180m
    Cmax dosažena            :milestone, m1, 01:30, 0m

    section Účinek
    Nástup účinku            :e1, 01:00, 30m
    Plný farmakologický efekt:e2, 01:30, 240m
    Odeznění účinku          :e3, 05:30, 120m

    section Eliminace
    Hepatální metabolismus   :el1, 02:00, 360m
    Renální exkrece          :el2, 03:00, 480m
```

## Stavovy diagram - stav receptoru

Zivotni cyklus GPCR (receptor sprazeny s G-proteinem):

```mermaid
stateDiagram-v2
    [*] --> Klidový: Bazální stav
    Klidový --> Aktivní: Vazba agonisty
    Klidový --> Blokovaný: Vazba antagonisty

    Aktivní --> G_signalizace: Aktivace G-proteinu
    G_signalizace --> Desenzitizovaný: Fosforylace (GRK)
    Desenzitizovaný --> Internalizovaný: Beta-arrestin + endocytóza

    Internalizovaný --> Recyklovaný: Defosforylace
    Internalizovaný --> Degradovaný: Lysozomální degradace

    Recyklovaný --> Klidový: Návrat na membránu
    Blokovaný --> Klidový: Disociace antagonisty
    Degradovaný --> [*]: Nová syntéza proteinu
```

## Metabolismus CYP450

Hlavni enzymy systemu cytochromu P450 a jejich substrat ve farmakologii:

```mermaid
pie title Podíl CYP enzymů na metabolismu léčiv
    "CYP3A4" : 36
    "CYP2D6" : 19
    "CYP2C9" : 16
    "CYP1A2" : 11
    "CYP2C19" : 8
    "CYP2B6" : 5
    "Ostatní" : 5
```

## Signalni kaskada 5-HT2A

Intracelularni signalni kaskada po aktivaci 5-HT2A receptoru psychedelikem:

```mermaid
graph TD
    PSI["Psilocin / LSD"] -->|"Vazba"| R["5-HT₂A receptor"]
    R -->|"Konformační změna"| Gq["Gq protein<br/>(aktivace)"]

    Gq --> PLC["Fosfolipáza C<br/>(PLC-β)"]
    PLC --> IP3["IP₃<br/>(inositoltrifosfát)"]
    PLC --> DAG["DAG<br/>(diacylglycerol)"]

    IP3 --> ER["Uvolnění Ca²⁺<br/>z ER"]
    ER --> CAL["↑ Intracelulární<br/>Ca²⁺"]

    DAG --> PKC["Protein kináza C<br/>(aktivace)"]
    PKC --> TF["Transkripční<br/>faktory"]

    CAL --> CAM["Kalmodulin<br/>(aktivace)"]
    CAM --> CAMK["CaMKII"]
    CAMK --> TF

    TF --> GENE["Genová exprese<br/>(c-fos, egr-1, arc)"]
    GENE --> PLAST["Synaptická<br/>plasticita"]

    R -->|"β-arrestin<br/>dráha"| ARR["β-arrestin 2"]
    ARR --> ERK["ERK1/2<br/>(MAP kináza)"]
    ERK --> TF

    style PSI fill:#dbeafe,stroke:#3b82f6,color:#1e3a5f
    style R fill:#fce7f3,stroke:#ec4899,color:#831843
    style PLAST fill:#d1fae5,stroke:#10b981,color:#064e3b
    style GENE fill:#fef3c7,stroke:#f59e0b,color:#78350f
```

## Pouziti diagramu

Vsechny diagramy na teto strance jsou interaktivni:

- **Export PNG**: Najedte na diagram a kliknete na tlacitko "PNG" pro stazeni obrazku ve vysokem rozliseni
- **Cela obrazovka**: Tlacitko se sipkami pro zobrazeni diagramu na celou obrazovku (zavreni klastesou Escape)
- **Tmave/svetle tema**: Diagramy se automaticky prizpusobi zvolenemu tematu stranek

Diagramy jsou vytvoreny pomoci knihovny [Mermaid.js](https://mermaid.js.org/) a vykresluji
se primo v prohlizeci. V pripade, ze se diagram nezobrazí spravne, zobrazi se zdrojovy kod
diagramu jako fallback.
