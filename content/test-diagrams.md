+++
title = "Test diagramů - Mermaid integrace"
description = "Kompletní test Mermaid diagram integrace s exportem PNG a dark/light mode synchronizaci"
date = 2026-01-30
updated = 2026-01-30
draft = false
weight = 999

[taxonomies]
categories = ["test", "diagramy"]
tags = ["mermaid", "diagramy", "test", "png-export", "dark-mode"]

[extra]
lead = "Testovací stránka demonstrující všechny typy Mermaid diagramů s funkcí PNG exportu a automatické synchronizace témat."
+++

# Test Mermaid diagram integrace

Tato stránka testuje kompletní implementaci Mermaid.js s následujícími funkcemi:
- ⚡ On-demand loading (knihovna se načte pouze při přítomnosti diagramů)
- 🖼️ PNG export s vysokým rozlišením
- 🌗 Automatická synchronizace dark/light mode
- 📱 Responzivní design
- ⚠️ Error handling a fallback zobrazení

## Flowchart - Farmakokinetická cesta

```mermaid
graph TD
    A[Podání látky] --> B{Absorpce}
    B -->|GIT| C[Portální oběh]
    B -->|Inhalace| D[Plicní oběh]
    B -->|IV| E[Systémový oběh]

    C --> F[First-pass metabolismus]
    F --> G{Biotransformace}
    G -->|Aktivní| H[Aktivní metabolit]
    G -->|Inaktivní| I[Inaktivní metabolit]

    D --> E
    H --> E
    E --> J[Distribuce]
    J --> K[Cílový receptor]
    J --> L[Zásobní tkáně]

    K --> M[Farmakologický efekt]
    E --> N[Eliminace]
    I --> N

    classDef active fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#f8fafc
    classDef inactive fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#f8fafc
    classDef process fill:#3b82f6,stroke:#2563eb,stroke-width:1px

    class H,M active
    class I inactive
    class B,F,G,J,N process
```

## Sequence Diagram - Synaptic Transmission

```mermaid
sequenceDiagram
    participant Pre as Presynaptická terminála
    participant Syn as Synaptická štěrbina
    participant Post as Postsynaptický neuron
    participant Enz as Enzymy (MAO, COMT)

    Note over Pre,Post: Neurotransmise
    Pre->>Syn: Uvolnění neurotransmiteru
    Syn->>Post: Vazba na receptor
    Post->>Post: Depolarizace/hyperpolarizace

    Note over Syn,Enz: Terminace signálu
    Syn->>Pre: Zpětné vychytávání (SERT, DAT)
    Syn->>Enz: Enzymatická degradace
    Enz->>Syn: Inaktivní metabolity

    Note over Pre,Post: Psychoaktivní interference
    Note right of Pre: MDMA blokuje SERT
    Note right of Enz: MAOI blokuje MAO-A
```

## State Diagram - Receptor States

```mermaid
stateDiagram-v2
    [*] --> Resting: Bez ligandu
    Resting --> Bound: Ligand binding
    Bound --> Activated: Conformační změna
    Activated --> Signaling: G-protein coupling
    Signaling --> Desensitized: Prolongovaná aktivace

    Desensitized --> Internalized: Endocytóza
    Internalized --> Degraded: Lysosomy
    Internalized --> Recycled: Zpět na membránu

    Recycled --> Resting: Resensitizace
    Degraded --> [*]: Nový receptor

    Bound --> Resting: Disociace ligandu
    Activated --> Resting: Rychlá disociace

    note right of Signaling: Farmakologický efekt
    note right of Desensitized: Tolerance
```

## Gantt Chart - Psychedelická terapie protokol

```mermaid
gantt
    title Protokol psychedelické terapie (MDMA-PT)
    dateFormat  HH:mm
    axisFormat %H:%M

    section Příprava
    Screening & Edukace    :done, prep1, 09:00, 10:00
    Set & Setting příprava :done, prep2, 10:00, 10:30

    section Terapie
    Baseline měření        :active, base, 10:30, 11:00
    MDMA administrace     :milestone, dosing, 11:00, 11:01
    Onset období          :onset, 11:00, 11:45
    Peak efekt            :peak, 11:45, 15:45
    Comedown              :comedown, 15:45, 18:00

    section Monitorování
    Vitální funkce        :monitoring, 11:00, 18:00
    Psychologická podpora :support, 11:00, 18:00
    Integrace začátek     :integration, 17:00, 18:00

    section Follow-up
    Day after call        :followup1, after comedown, 1h
    Week 1 session        :followup2, after followup1, 1w
```

## Class Diagram - Neurotransmitter Hierarchy

```mermaid
classDiagram
    class Neurotransmitter {
        +String name
        +Double molecularWeight
        +String chemicalFormula
        +Array receptors
        +synthesize()
        +degrade()
    }

    class Monoamine {
        +String aminoGroup
        +String aromaticRing
        +metabolizeMAO()
    }

    class Tryptamine {
        +String indoleRing
        +Boolean psychoactive
        +activate5HT2A()
    }

    class Phenethylamine {
        +String phenylRing
        +Boolean stimulant
        +activateDAT()
    }

    class Serotonin {
        +Array["5-HT1A", "5-HT2A", "5-HT3"] receptorTypes
        +regulateMood()
        +modulateCognition()
    }

    class DMT {
        +Boolean endogenous
        +String source
        +inducePsychedelicState()
    }

    class Dopamine {
        +Array["D1", "D2", "D3", "D4"] receptorTypes
        +modulateReward()
        +controlMotor()
    }

    Neurotransmitter <|-- Monoamine
    Monoamine <|-- Tryptamine
    Monoamine <|-- Phenethylamine
    Tryptamine <|-- Serotonin
    Tryptamine <|-- DMT
    Phenethylamine <|-- Dopamine
```

## ER Diagram - Neuroreceptor Database Schema

```mermaid
erDiagram
    RECEPTOR {
        int receptor_id PK
        string name
        string family
        string location
        string function
    }

    LIGAND {
        int ligand_id PK
        string name
        string chemical_formula
        float molecular_weight
        string psychoactivity
    }

    BINDING_SITE {
        int site_id PK
        string site_name
        string site_type
        string location_on_receptor
    }

    INTERACTION {
        int interaction_id PK
        int receptor_id FK
        int ligand_id FK
        int binding_site_id FK
        float affinity_ki
        string interaction_type
        string effect
    }

    PATHWAY {
        int pathway_id PK
        string pathway_name
        string signaling_type
        string downstream_effects
    }

    RECEPTOR ||--o{ BINDING_SITE : has
    RECEPTOR ||--o{ INTERACTION : participates_in
    LIGAND ||--o{ INTERACTION : binds_to
    BINDING_SITE ||--o{ INTERACTION : facilitates
    INTERACTION ||--o{ PATHWAY : activates
```

## Pie Chart - Neurotransmitter Distribution

```mermaid
pie title Distribuce neurotransmiterů v mozku
    "GABA (inhibiční)" : 40
    "Glutamát (excitační)" : 35
    "Acetylcholin" : 8
    "Dopamin" : 6
    "Serotonin" : 5
    "Noradrenalin" : 3
    "Ostatní" : 3
```

## Mindmap - Psychedelická farmakologie

```mermaid
mindmap
  root((Psychedelická farmakologie))
    Tryptaminy
      Psilocybin
        4-PO-DMT
        Prodrug
        Alkalická fosfatáza
      DMT
        Endogenní
        MAO degradace
        Ayahuasca
      5-MeO-DMT
        Bufo alvarius
        Vysoká potence
        Kratší trvání
    Lyzergamidy
      LSD
        Ergot alkaloidy
        Dlouhé trvání
        Mikrogramové dávky
      AL-LAD
        Analog LSD
        Kratší trvání
        Méně introspekce
    Fenethylaminy
      Meskalin
        Kaktus Peyote
        Dlouhé trvání
        Vizuální efekty
      2C série
        2C-B
        2C-I
        2C-E
    Mechanismus
      5-HT2A agonismus
        Glutamát uvolnění
        Kortikální aktivace
        Default mode network
      Neuroplasticita
        BDNF upregulace
        Dendritogeneze
        Synaptogeneze
```

## Timeline - Historie psychedelické vědy

```mermaid
timeline
    title Historie psychedelického výzkumu

    1938 : Objev LSD (Albert Hofmann) : Sandoz laboratoře

    1943 : První LSD trip : "Bicycle Day" - 19. dubna

    1950-1960 : Zlatý věk výzkumu : CIA projekty : Terapeutické studie

    1966 : Prohibice LSD : Konec legálního výzkumu

    1970 : Controlled Substances Act : Schedule I klasifikace

    1990-2000 : Psychedelická renesance : MAPS založena : Strassman DMT studie

    2010-2020 : Breakthrough Therapy : FDA designace : MDMA-PT fáze III : Psilocybin deprese

    2020-2025 : Klinická implementace : Oregon psilocybin program : MDMA schválení
```

## Test chybového stavu

Následující diagram obsahuje záměrnou syntaktickou chybu pro test error handlingu:

```mermaid
graph TD
    A[Start] --> B{Decision
    B --> C[Option 1]
    B --> D[Option 2
    C --> E[End]
    D --> E
    // Záměrně neuzavřené závorky a chybějící šipky
```

---

## Instrukce k testování

1. **PNG Export**: Klikněte na tlačítko "PNG" u libovolného diagramu
2. **Fullscreen**: Použijte tlačítko pro celou obrazovku
3. **Theme Switching**: Přepněte mezi světlým/tmavým režimem
4. **Responsivita**: Otestujte na různých velikostech obrazovky
5. **Error Handling**: Posledný diagram by měl zobrazit chybové hlášení

*Všechny diagramy by měly být interaktivní a exportovatelné jako PNG soubory.*