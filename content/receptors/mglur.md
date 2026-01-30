+++
title = "Metabotropní glutamátové receptory (mGluR)"
description = "mGluR1-8 - modulátory synaptické transmise, plasticity a neuroprotekce"
weight = 9
insert_anchor_links = "right"

[taxonomies]
categories = ["receptory", "glutamát", "GPCR"]
tags = ["mGluR", "glutamát", "neuromodulace", "plasticita", "neuroprotekce"]
+++

# Metabotropní glutamátové receptory (mGluR) - Orchestrátoři glutamátové signalizace

**Metabotropní glutamátové receptory (mGluR)** jsou rodinou osmi G-protein spřažených receptorů (mGluR1-8), které modulují glutamátovou neurotransmisi prostřednictvím **sekundárních poslů**. Regulují synaptickou plasticitu, excitabilitu a představují slibné cíle pro léčbu neurologických a psychiatrických onemocnění.

---

## Základní charakteristika

### Klasifikace

| Vlastnost | Hodnota |
|-----------|---------|
| **Typ** | Metabotropní (GPCR) |
| **Rodina** | Třída C GPCR |
| **Počet subtypů** | 8 (mGluR1-8) |
| **Endogenní ligand** | L-Glutamát |
| **Struktura** | Homodimery |

### Rozdělení do skupin

| Skupina | Receptory | G-protein | Efektory | Lokalizace |
|---------|-----------|-----------|----------|------------|
| **Skupina I** | mGluR1, mGluR5 | Gq/11 | ↑ PLC, ↑ Ca²⁺ | Postsynapticky |
| **Skupina II** | mGluR2, mGluR3 | Gi/Go | ↓ AC, ↓ cAMP | Pre/postsynapticky |
| **Skupina III** | mGluR4, 6, 7, 8 | Gi/Go | ↓ AC, ↓ cAMP | Presynapticky |

---

## Struktura receptoru

### Doménová architektura

```mermaid
flowchart TD
    node_Extracelulrnprostor["Extracelulární prostor"]
    node_VFTVFT["VFT                     VFT"]
    node_VenusFlytrapVenusFly["Venus Flytrap        Venus Flytrap"]
    node_GlutamtGlutamt["Glutamát                Glutamát"]
    node_CRDCRD["CRD                  CRD"]
    node_DIMER["DIMER"]
    node_INTERFACE["INTERFACE"]
    node_b05e21ac["███████████████████████████████████████████"]
    node_7TM["7TM"]
    node_Gproteincoupling["G-protein coupling"]
    node_CterminusCterminus["C-terminus                C-terminus"]
    node_VFTVenusFlytrapdomai["VFT = Venus Flytrap domain glutamát vazba"]
    node_CRDCysteineRichDomai["CRD = Cysteine-Rich Domain"]
    node_7TM7transmembrnovchh["7TM = 7 transmembránových helixů"]

    node_Extracelulrnprostor --> node_VFTVFT
    node_VFTVFT --> node_VenusFlytrapVenusFly
    node_VenusFlytrapVenusFly --> node_GlutamtGlutamt
    node_GlutamtGlutamt --> node_CRDCRD
    node_CRDCRD --> node_DIMER
    node_DIMER --> node_INTERFACE
    node_INTERFACE --> node_b05e21ac
    node_b05e21ac --> node_7TM
    node_7TM --> node_Gproteincoupling
    node_Gproteincoupling --> node_CterminusCterminus
    node_CterminusCterminus --> node_VFTVenusFlytrapdomai
    node_VFTVenusFlytrapdomai --> node_CRDCysteineRichDomai
    node_CRDCysteineRichDomai --> node_7TM7transmembrnovchh

    click node_GlutamtGlutamt "/glossary/glutamate/" "Glutamát                Glutamát"
    click node_VFTVenusFlytrapdomai "/glossary/glutamate/" "VFT = Venus Flytrap domain glutamát vazba"
```

<details>
<summary>ASCII verze diagramu</summary>

```
                    Extracelulární prostor
                           │
    ┌──────────────────────┼──────────────────────┐
    │                      │                      │
    │        VFT           │          VFT         │
    │   (Venus Flytrap)    │    (Venus Flytrap)   │
    │        ↓             │          ↓           │
    │   Glutamát           │     Glutamát         │
    │        │             │          │           │
    │   ┌────┴────┐   ┌────┴────┐┌────┴────┐     │
    │   │   CRD   │   │         ││   CRD   │     │
    │   └────┬────┘   │  DIMER  │└────┬────┘     │
    │        │        │ INTERFACE│     │         │
    │        │        │         │     │         │
    └────────┼────────┴─────────┴─────┼─────────┘
             │                         │
    █████████│█████████████████████████│█████████
             │          7TM            │
             │                         │
             │    G-protein coupling   │
    █████████│█████████████████████████│█████████
             │                         │
        C-terminus                C-terminus

VFT = Venus Flytrap domain (glutamát vazba)
CRD = Cysteine-Rich Domain
7TM = 7 transmembránových helixů
```

</details>

### Aktivační mechanismus

```mermaid
flowchart TD
    node_KlidovstavAktivovans["Klidový stav              Aktivovaný sta"]
    node_VFTVFT["VFT                       VFT"]
    node_otevenzaven["otevřený                  zavřený"]
    node_GlutamtGlutamt["Glutamát      █████  Glutamát"]
    node_uvznn["█████   uvězněn"]
    node_InaktivnKonformanzmn["Inaktivní              Konformační změna"]
    node_Gprotein["G-protein"]
    node_Gproteinaktivace["G-protein aktivace"]

    node_KlidovstavAktivovans --> node_VFTVFT
    node_VFTVFT --> node_otevenzaven
    node_otevenzaven --> node_GlutamtGlutamt
    node_GlutamtGlutamt --> node_uvznn
    node_uvznn --> node_InaktivnKonformanzmn
    node_InaktivnKonformanzmn --> node_Gprotein
    node_Gprotein --> node_Gproteinaktivace

    click node_GlutamtGlutamt "/glossary/glutamate/" "Glutamát      █████  Glutamát"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Klidový stav              Aktivovaný stav

     VFT                       VFT
   otevřený                  zavřený
      │                         │
   ┌──┴──┐                  ┌──┴──┐
   │     │    Glutamát      │█████│ ← Glutamát
   │     │   ──────────→    │█████│   uvězněn
   └──┬──┘                  └──┬──┘
      │                        │
      ↓                        ↓
   Inaktivní              Konformační změna
   G-protein                   │
                               ↓
                          G-protein aktivace
```

</details>

---

## Skupina I (mGluR1, mGluR5)

### Charakteristika

| Vlastnost | mGluR1 | mGluR5 |
|-----------|--------|--------|
| **G-protein** | Gq/11 | Gq/11 |
| **Lokalizace** | Cerebellum, thalamus | Kortex, hippocampus, striatum |
| **Synaptická pozice** | Perisynaptická | Perisynaptická |
| **Funkce** | Motorika, LTD | Kognice, LTP, LTD |

### Signální kaskáda

```mermaid
flowchart TD
    node_Glutamt["Glutamát"]
    node_mGluR15["mGluR1/5"]
    node_Gq11protein["Gq/11 protein"]
    node_FosfolipzaCPLC["Fosfolipáza C β PLCβ"]
    node_IPDAG["IP₃                 DAG"]
    node_CazERPKCaktivace["Ca²⁺ z ER          PKC aktivace"]
    node_AktivaceFosforylace["Aktivace                           Fosforylace"]
    node_Cadependentnchsubstr["Ca²⁺-dependentních                 substrátů"]
    node_enzymCaMKII["enzymů CaMKII"]
    node_SynaptickplasticitaE["Synaptická plasticita              ERK/MAPK"]

    node_Glutamt --> node_mGluR15
    node_mGluR15 --> node_Gq11protein
    node_Gq11protein --> node_FosfolipzaCPLC
    node_FosfolipzaCPLC --> node_IPDAG
    node_IPDAG --> node_CazERPKCaktivace
    node_CazERPKCaktivace --> node_AktivaceFosforylace
    node_AktivaceFosforylace --> node_Cadependentnchsubstr
    node_Cadependentnchsubstr --> node_enzymCaMKII
    node_enzymCaMKII --> node_SynaptickplasticitaE

    click node_Glutamt "/glossary/glutamate/" "Glutamát"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Glutamát
    ↓
mGluR1/5
    ↓
Gq/11 protein
    ↓
Fosfolipáza C β (PLCβ)
    ↓
┌───┴───────────────┐
↓                   ↓
IP₃                 DAG
↓                   ↓
Ca²⁺ z ER          PKC aktivace
↓                   ↓
┌───────────────────┴───────────────────┐
↓                                       ↓
Aktivace                           Fosforylace
Ca²⁺-dependentních                 substrátů
enzymů (CaMKII)                        │
↓                                       ↓
Synaptická plasticita              ERK/MAPK
```

</details>

### Perisynaptická role

```mermaid
flowchart TD
    node_Glutamtovsynapse["Glutamátová synapse"]
    node_Presynaptickterminl["Presynaptický terminál"]
    node_Glutamtuvolnn["Glutamát uvolnění"]
    node_AMPANMDAmGluR15["AMPA  NMDA                    mGluR1/5"]
    node_perisynapticky["perisynapticky"]
    node_EPSPCa["EPSP  Ca²⁺"]
    node_Spillover["Spillover"]
    node_glutamt["glutamát"]
    node_LTP["LTP"]
    node_Modulace["Modulace"]
    node_PSDplasticity["PSD                       plasticity"]
    node_mGluR5sensorprovysok["mGluR5 = 'sensor' pro vysokou glutamátovou aktivitu"]

    node_Glutamtovsynapse --> node_Presynaptickterminl
    node_Presynaptickterminl --> node_Glutamtuvolnn
    node_Glutamtuvolnn --> node_AMPANMDAmGluR15
    node_AMPANMDAmGluR15 --> node_perisynapticky
    node_perisynapticky --> node_EPSPCa
    node_EPSPCa --> node_Spillover
    node_Spillover --> node_glutamt
    node_glutamt --> node_LTP
    node_LTP --> node_Modulace
    node_Modulace --> node_PSDplasticity
    node_PSDplasticity --> node_mGluR5sensorprovysok

    click node_Glutamtovsynapse "/glossary/glutamate/" "Glutamátová synapse"
    click node_Glutamtuvolnn "/glossary/glutamate/" "Glutamát uvolnění"
    click node_glutamt "/glossary/glutamate/" "glutamát"
    click node_mGluR5sensorprovysok "/glossary/glutamate/" "mGluR5 = "sensor" pro vysokou glutamátovou aktivitu"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Glutamátová synapse
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Presynaptický terminál                           │
│         │                                          │
│         ↓ Glutamát uvolnění                        │
│         │                                          │
│   ┌─────┼─────────────────────────┐               │
│   │     ↓                         │               │
│   │  AMPA  NMDA                   │ mGluR1/5      │
│   │   │     │                     │ (perisynapticky)
│   │   ↓     ↓                     │     │         │
│   │  EPSP  Ca²⁺                   │     ↓         │
│   │         │                     │  Spillover    │
│   │         ↓                     │  glutamát     │
│   │       LTP                     │     │         │
│   │                               │     ↓         │
│   │                               │  Modulace     │
│   │       PSD                     │  plasticity   │
│   └───────────────────────────────┘               │
│                                                     │
└─────────────────────────────────────────────────────┘

mGluR5 = "sensor" pro vysokou glutamátovou aktivitu
```

</details>

### mGluR5 a NMDA interakce

```mermaid
flowchart TD
    node_mGluR5NMDAfyzickafun["mGluR5 - NMDA fyzická a funkční vazba"]
    node_mGluR5HomerShankPSD9["mGluR5  Homer/Shank/PSD-95  NMDA"]
    node_Fyzickvazba["Fyzická vazba"]
    node_IPCaCainflux["IP₃  Ca²⁺                        Ca²⁺ influx"]
    node_Casynergy["Ca²⁺ synergy"]
    node_LTPLTD["LTP/LTD"]
    node_mGluR5agonistpotencu["mGluR5 agonisté potencují NMDA odpovědi"]
    node_mGluR5antagonistpote["mGluR5 antagonisté = potenciální neuroprotektiva"]

    node_mGluR5NMDAfyzickafun --> node_mGluR5HomerShankPSD9
    node_mGluR5HomerShankPSD9 --> node_Fyzickvazba
    node_Fyzickvazba --> node_IPCaCainflux
    node_IPCaCainflux --> node_Casynergy
    node_Casynergy --> node_LTPLTD
    node_LTPLTD --> node_mGluR5agonistpotencu
    node_mGluR5agonistpotencu --> node_mGluR5antagonistpote
```

<details>
<summary>ASCII verze diagramu</summary>

```
mGluR5 - NMDA fyzická a funkční vazba
┌─────────────────────────────────────────────────────┐
│                                                     │
│   mGluR5 ←──── Homer/Shank/PSD-95 ────→ NMDA       │
│     │                                     │         │
│     │         Fyzická vazba               │         │
│     │                                     │         │
│     ↓                                     ↓         │
│   IP₃ → Ca²⁺                        Ca²⁺ influx   │
│     │                                     │         │
│     └─────────────┬───────────────────────┘         │
│                   ↓                                 │
│              Ca²⁺ synergy                          │
│                   │                                 │
│                   ↓                                 │
│              LTP/LTD                               │
│                                                     │
│   mGluR5 agonisté potencují NMDA odpovědi         │
│   mGluR5 antagonisté = potenciální neuroprotektiva│
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

---

## Skupina II (mGluR2, mGluR3)

### Charakteristika

| Vlastnost | mGluR2 | mGluR3 |
|-----------|--------|--------|
| **G-protein** | Gi/Go | Gi/Go |
| **Lokalizace** | Kortex, hippocampus | Široká (včetně glie) |
| **Synaptická pozice** | Presynapticky | Pre- a postsynapticky, glie |
| **Funkce** | Autoreceptor, ↓ glutamát | Neuromodulace, glie |

### Signální kaskáda

```mermaid
flowchart TD
    node_Glutamt["Glutamát"]
    node_mGluR23["mGluR2/3"]
    node_GiGoprotein["Gi/Go protein"]
    node_i["αi                              βγ"]
    node_InhibiceACCakanly["Inhibice AC                   Ca²⁺ kanály"]
    node_cAMPNeurotransmiter["cAMP                        Neurotransmiter"]
    node_uvolnn["uvolnění"]
    node_PKA["PKA"]
    node_CREB["CREB"]

    node_Glutamt --> node_mGluR23
    node_mGluR23 --> node_GiGoprotein
    node_GiGoprotein --> node_i
    node_i --> node_InhibiceACCakanly
    node_InhibiceACCakanly --> node_cAMPNeurotransmiter
    node_cAMPNeurotransmiter --> node_uvolnn
    node_uvolnn --> node_PKA
    node_PKA --> node_CREB

    click node_Glutamt "/glossary/glutamate/" "Glutamát"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Glutamát
    ↓
mGluR2/3
    ↓
Gi/Go protein
    ↓
┌───┴───────────────────────────┐
↓                               ↓
αi                              βγ
↓                               ↓
Inhibice AC                  ↓ Ca²⁺ kanály
↓                               ↓
↓ cAMP                       ↓ Neurotransmiter
↓                            uvolnění
↓ PKA
↓
↓ CREB
```

</details>

### Presynaptická autoreceptorová funkce

```mermaid
flowchart TD
    node_mGluR2jakoautorecept["mGluR2 jako autoreceptor"]
    node_Vysoksynaptickaktivi["Vysoká synaptická aktivita"]
    node_Glutamtspillover["Glutamát spillover"]
    node_mGluR2aktivacepresyn["mGluR2 aktivace presynapticky"]
    node_GiGoCakanly["Gi/Go   Ca²⁺ kanály"]
    node_Glutamtuvolnn["Glutamát uvolnění"]
    node_NEGATIVNZPTNVAZBA["NEGATIVNÍ ZPĚTNÁ VAZBA"]
    node_ochranapedexcitotoxi["ochrana před excitotoxicitou"]

    node_mGluR2jakoautorecept --> node_Vysoksynaptickaktivi
    node_Vysoksynaptickaktivi --> node_Glutamtspillover
    node_Glutamtspillover --> node_mGluR2aktivacepresyn
    node_mGluR2aktivacepresyn --> node_GiGoCakanly
    node_GiGoCakanly --> node_Glutamtuvolnn
    node_Glutamtuvolnn --> node_NEGATIVNZPTNVAZBA
    node_NEGATIVNZPTNVAZBA --> node_ochranapedexcitotoxi

    click node_Glutamtspillover "/glossary/glutamate/" "Glutamát spillover"
    click node_Glutamtuvolnn "/glossary/glutamate/" "Glutamát uvolnění"
```

<details>
<summary>ASCII verze diagramu</summary>

```
mGluR2 jako autoreceptor
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Vysoká synaptická aktivita                       │
│              │                                      │
│              ↓                                      │
│   Glutamát spillover                               │
│              │                                      │
│              ↓                                      │
│   mGluR2 aktivace (presynapticky)                  │
│              │                                      │
│              ↓                                      │
│   Gi/Go → ↓ Ca²⁺ kanály                           │
│              │                                      │
│              ↓                                      │
│   ↓ Glutamát uvolnění                             │
│              │                                      │
│              ↓                                      │
│   NEGATIVNÍ ZPĚTNÁ VAZBA                           │
│   (ochrana před excitotoxicitou)                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### mGluR2/3 a psychedelika

```mermaid
flowchart TD
    node_5HT2AmGluR2interakce["5-HT2A - mGluR2 interakce"]
    node_5HT2AamGluR2tvoheter["5-HT2A a mGluR2 tvoří heterokomplex"]
    node_PsychedelikumLSDpsil["Psychedelikum LSD, psilocin"]
    node_5HT2Aaktivace["5-HT2A aktivace"]
    node_Halucinogenninek["Halucinogenní účinek"]
    node_mGluR2modulace["mGluR2 modulace"]
    node_Modulacepsychedelick["Modulace psychedelického účinku"]
    node_mGluR23agonistpotenc["mGluR2/3 agonisté = potenciální antipsychotika"]
    node_blokujhalucinogennin["blokují halucinogenní účinky v animálních"]
    node_modelech["modelech"]

    node_5HT2AmGluR2interakce --> node_5HT2AamGluR2tvoheter
    node_5HT2AamGluR2tvoheter --> node_PsychedelikumLSDpsil
    node_PsychedelikumLSDpsil --> node_5HT2Aaktivace
    node_5HT2Aaktivace --> node_Halucinogenninek
    node_Halucinogenninek --> node_mGluR2modulace
    node_mGluR2modulace --> node_Modulacepsychedelick
    node_Modulacepsychedelick --> node_mGluR23agonistpotenc
    node_mGluR23agonistpotenc --> node_blokujhalucinogennin
    node_blokujhalucinogennin --> node_modelech
```

<details>
<summary>ASCII verze diagramu</summary>

```
5-HT2A - mGluR2 interakce
┌─────────────────────────────────────────────────────┐
│                                                     │
│   5-HT2A a mGluR2 tvoří heterokomplex              │
│                                                     │
│   Psychedelikum (LSD, psilocin)                    │
│              │                                      │
│              ↓                                      │
│   5-HT2A aktivace                                   │
│              │                                      │
│              ├──────→ Halucinogenní účinek         │
│              │                                      │
│              ↓                                      │
│   mGluR2 modulace                                   │
│              │                                      │
│              ↓                                      │
│   Modulace psychedelického účinku                  │
│                                                     │
│   mGluR2/3 agonisté = potenciální antipsychotika   │
│   (blokují halucinogenní účinky v animálních       │
│    modelech)                                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

---

## Skupina III (mGluR4, 6, 7, 8)

### Charakteristika

| Receptor | Lokalizace | Funkce |
|----------|------------|--------|
| **mGluR4** | Cerebellum, bazální ganglia | Motorika, neuroprotekce |
| **mGluR6** | Retina (ON bipolární buňky) | Zrakový přenos |
| **mGluR7** | Široká (presynapticky) | Synaptická modulace |
| **mGluR8** | Hippocampus, kortex | Anxiolýza, kognice |

### Signální kaskáda

```mermaid
flowchart TD
    node_Glutamt["Glutamát"]
    node_mGluR4678["mGluR4/6/7/8"]
    node_GiGoprotein["Gi/Go protein"]
    node_cAMPCainflux["cAMP                        Ca²⁺ influx"]
    node_Vesiklfze["Vesikl fúze"]
    node_NTuvolnn["NT uvolnění"]
    node_Presynaptickinhibice["Presynaptická inhibice = hlavní funkce"]

    node_Glutamt --> node_mGluR4678
    node_mGluR4678 --> node_GiGoprotein
    node_GiGoprotein --> node_cAMPCainflux
    node_cAMPCainflux --> node_Vesiklfze
    node_Vesiklfze --> node_NTuvolnn
    node_NTuvolnn --> node_Presynaptickinhibice

    click node_Glutamt "/glossary/glutamate/" "Glutamát"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Glutamát
    ↓
mGluR4/6/7/8
    ↓
Gi/Go protein
    ↓
┌───┴───────────────────────────┐
↓                               ↓
↓ cAMP                       ↓ Ca²⁺ influx
                                ↓
                          ↓ Vesikl fúze
                                ↓
                          ↓ NT uvolnění

Presynaptická inhibice = hlavní funkce
```

</details>

### mGluR7 - nízkoafinitní "emergency brake"

```mermaid
flowchart TD
    node_mGluR7charakteristik["mGluR7 charakteristika"]
    node_VlastnostimGluR7["Vlastnosti mGluR7:"]
    node_Nzkafinitaproglutamt["- Nízká afinita pro glutamát EC50 ~1 mM"]
    node_Lokalizacevaktivnzn["- Lokalizace v aktivní zóně"]
    node_Rychlaktivace["- Rychlá aktivace"]
    node_FunkceEmergencybrake["Funkce: 'Emergency brake'"]
    node_NzkaktivitamGluR7nea["Nízká aktivita:    mGluR7 neaktivní"]
    node_Normlnpenos["Normální přenos"]
    node_VysokaktivitaGlutamt["Vysoká aktivita:   Glutamát &gt;&gt; 1 mM"]
    node_patologick["patologická"]
    node_mGluR7aktivace["mGluR7 aktivace"]
    node_Okamitinhibice["Okamžitá inhibice"]
    node_uvolnn["uvolnění"]
    node_NEUROPROTEKCE["NEUROPROTEKCE"]

    node_mGluR7charakteristik --> node_VlastnostimGluR7
    node_VlastnostimGluR7 --> node_Nzkafinitaproglutamt
    node_Nzkafinitaproglutamt --> node_Lokalizacevaktivnzn
    node_Lokalizacevaktivnzn --> node_Rychlaktivace
    node_Rychlaktivace --> node_FunkceEmergencybrake
    node_FunkceEmergencybrake --> node_NzkaktivitamGluR7nea
    node_NzkaktivitamGluR7nea --> node_Normlnpenos
    node_Normlnpenos --> node_VysokaktivitaGlutamt
    node_VysokaktivitaGlutamt --> node_patologick
    node_patologick --> node_mGluR7aktivace
    node_mGluR7aktivace --> node_Okamitinhibice
    node_Okamitinhibice --> node_uvolnn
    node_uvolnn --> node_NEUROPROTEKCE

    click node_Nzkafinitaproglutamt "/glossary/glutamate/" "- Nízká afinita pro glutamát EC50 ~1 mM"
    click node_VysokaktivitaGlutamt "/glossary/glutamate/" "Vysoká aktivita:   Glutamát >> 1 mM"
```

<details>
<summary>ASCII verze diagramu</summary>

```
mGluR7 charakteristika
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Vlastnosti mGluR7:                               │
│   - Nízká afinita pro glutamát (EC50 ~1 mM)       │
│   - Lokalizace v aktivní zóně                      │
│   - Rychlá aktivace                                │
│                                                     │
│   Funkce: "Emergency brake"                        │
│                                                     │
│   Nízká aktivita:    mGluR7 neaktivní              │
│   Normální přenos    ↓                             │
│                                                     │
│   Vysoká aktivita:   Glutamát >> 1 mM             │
│   (patologická)      ↓                             │
│                      mGluR7 aktivace               │
│                      ↓                             │
│                      Okamžitá inhibice             │
│                      uvolnění                       │
│                      ↓                             │
│                      NEUROPROTEKCE                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

---

## Farmakologie

### Skupina I - mGluR1/5

| Typ | Látka | Selektivita | Použití/potenciál |
|-----|-------|-------------|-------------------|
| **Agonista** | DHPG | mGluR1/5 | Výzkum |
| **mGluR5 PAM** | VU0409551 | mGluR5 | Schizofrenie |
| **mGluR5 NAM** | MPEP | mGluR5 | Výzkum, anxiolýza |
| **mGluR5 NAM** | Basimglurant | mGluR5 | Deprese (fáze III fail) |
| **mGluR5 NAM** | Mavoglurant | mGluR5 | Fragile X (fáze III fail) |
| **mGluR1 antagonista** | JNJ16259685 | mGluR1 | Výzkum |

### Skupina II - mGluR2/3

| Typ | Látka | Selektivita | Použití/potenciál |
|-----|-------|-------------|-------------------|
| **Agonista** | LY354740 | mGluR2/3 | Anxiolýza, výzkum |
| **Agonista** | Pomaglumetad | mGluR2/3 | Schizofrenie (fáze III fail) |
| **mGluR2 PAM** | LY487379 | mGluR2 | Schizofrenie |
| **mGluR2 PAM** | AZD8529 | mGluR2 | Schizofrenie |
| **Antagonista** | LY341495 | mGluR2/3 | Výzkum |

### Skupina III - mGluR4/7/8

| Typ | Látka | Selektivita | Použití/potenciál |
|-----|-------|-------------|-------------------|
| **mGluR4 PAM** | Foliglurax | mGluR4 | Parkinson (fáze II) |
| **mGluR4 agonista** | LSP1-2111 | mGluR4 | Výzkum |
| **mGluR7 agonista** | AMN082 | mGluR7 | Anxiolýza, výzkum |
| **mGluR8 agonista** | (S)-3,4-DCPG | mGluR8 | Anxiolýza |

---

## Klinické aplikace

### Schizofrenie

```mermaid
flowchart TD
    node_mGluR23hypotzaschizo["mGluR2/3 hypotéza schizofrenie"]
    node_GlutamtovhypofunkceN["Glutamátová hypofunkce NMDA"]
    node_Kompenzanglutamtuvol["Kompenzační  glutamát uvolňování"]
    node_Kortiklnhyperexcitab["Kortikální hyperexcitabilita"]
    node_Pozitivnakognitivnsy["Pozitivní a kognitivní symptomy"]
    node_TERAPIE["TERAPIE:"]
    node_mGluR23agonistglutam["mGluR2/3 agonisté   glutamát  symptomy"]
    node_StatusPomaglumetadfz["Status: Pomaglumetad - fáze III neúspěšná"]
    node_mGluR2selektivnPAMve["mGluR2 selektivní PAM - ve vývoji"]

    node_mGluR23hypotzaschizo --> node_GlutamtovhypofunkceN
    node_GlutamtovhypofunkceN --> node_Kompenzanglutamtuvol
    node_Kompenzanglutamtuvol --> node_Kortiklnhyperexcitab
    node_Kortiklnhyperexcitab --> node_Pozitivnakognitivnsy
    node_Pozitivnakognitivnsy --> node_TERAPIE
    node_TERAPIE --> node_mGluR23agonistglutam
    node_mGluR23agonistglutam --> node_StatusPomaglumetadfz
    node_StatusPomaglumetadfz --> node_mGluR2selektivnPAMve

    click node_GlutamtovhypofunkceN "/glossary/glutamate/" "Glutamátová hypofunkce NMDA"
    click node_Kompenzanglutamtuvol "/glossary/glutamate/" "Kompenzační  glutamát uvolňování"
    click node_mGluR23agonistglutam "/glossary/glutamate/" "mGluR2/3 agonisté   glutamát  symptomy"
```

<details>
<summary>ASCII verze diagramu</summary>

```
mGluR2/3 hypotéza schizofrenie
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Glutamátová hypofunkce (NMDA)                    │
│              │                                      │
│              ↓                                      │
│   Kompenzační ↑ glutamát uvolňování               │
│              │                                      │
│              ↓                                      │
│   Kortikální hyperexcitabilita                     │
│              │                                      │
│              ↓                                      │
│   Pozitivní a kognitivní symptomy                  │
│                                                     │
│   TERAPIE:                                         │
│   mGluR2/3 agonisté → ↓ glutamát → symptomy ↓     │
│                                                     │
│   Status: Pomaglumetad - fáze III neúspěšná       │
│           mGluR2 selektivní PAM - ve vývoji       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### Parkinsonova choroba

```mermaid
flowchart TD
    node_mGluR4vbazlnchgangli["mGluR4 v bazálních gangliích"]
    node_Parkinsonovachoroba["Parkinsonova choroba:"]
    node_Dopaminstriatlnaktiv["Dopamin   striatální aktivita"]
    node_GPeSTNinhibice["GPe/STN inhibice"]
    node_Motoricksymptomy["Motorické symptomy"]
    node_mGluR4aktivacestriat["mGluR4 aktivace striato-pallidální synapse:"]
    node_GABAuvolnnnormalizac["GABA uvolnění  normalizace BG aktivity"]
    node_Zlepenmotoriky["Zlepšení motoriky"]
    node_StatusFoligluraxfzeI["Status: Foliglurax - fáze II jako L-DOPA add-on"]

    node_mGluR4vbazlnchgangli --> node_Parkinsonovachoroba
    node_Parkinsonovachoroba --> node_Dopaminstriatlnaktiv
    node_Dopaminstriatlnaktiv --> node_GPeSTNinhibice
    node_GPeSTNinhibice --> node_Motoricksymptomy
    node_Motoricksymptomy --> node_mGluR4aktivacestriat
    node_mGluR4aktivacestriat --> node_GABAuvolnnnormalizac
    node_GABAuvolnnnormalizac --> node_Zlepenmotoriky
    node_Zlepenmotoriky --> node_StatusFoligluraxfzeI
```

<details>
<summary>ASCII verze diagramu</summary>

```
mGluR4 v bazálních gangliích
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Parkinsonova choroba:                            │
│   ↓ Dopamin → ↑ striatální aktivita               │
│              │                                      │
│              ↓                                      │
│   ↑ GPe/STN inhibice                              │
│              │                                      │
│              ↓                                      │
│   Motorické symptomy                               │
│                                                     │
│   mGluR4 aktivace (striato-pallidální synapse):   │
│   ↓ GABA uvolnění → normalizace BG aktivity       │
│              │                                      │
│              ↓                                      │
│   Zlepšení motoriky                                │
│                                                     │
│   Status: Foliglurax - fáze II (jako L-DOPA add-on)│
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### Fragile X syndrom

```mermaid
flowchart TD
    node_mGluRteorieFragileX["mGluR teorie Fragile X"]
    node_FMR1mutaceFMRP["FMR1 mutace  / FMRP"]
    node_mGluR5signalizacenek["mGluR5 signalizace nekontrolovaná"]
    node_Loklnproteosyntza["Lokální proteosyntéza"]
    node_AMPAinternalizace["AMPA internalizace"]
    node_Synaptickdysfunkce["Synaptická dysfunkce"]
    node_Kognitivndeficit["Kognitivní deficit"]
    node_TERAPIEmGluR5antagon["TERAPIE: mGluR5 antagonisté"]
    node_MavoglurantBasimglur["- Mavoglurant, Basimglurant"]
    node_FzeIIINESPNkomplexnp["- Fáze III NEÚSPĚŠNÉ komplexní patofyziologie"]

    node_mGluRteorieFragileX --> node_FMR1mutaceFMRP
    node_FMR1mutaceFMRP --> node_mGluR5signalizacenek
    node_mGluR5signalizacenek --> node_Loklnproteosyntza
    node_Loklnproteosyntza --> node_AMPAinternalizace
    node_AMPAinternalizace --> node_Synaptickdysfunkce
    node_Synaptickdysfunkce --> node_Kognitivndeficit
    node_Kognitivndeficit --> node_TERAPIEmGluR5antagon
    node_TERAPIEmGluR5antagon --> node_MavoglurantBasimglur
    node_MavoglurantBasimglur --> node_FzeIIINESPNkomplexnp
```

<details>
<summary>ASCII verze diagramu</summary>

```
mGluR teorie Fragile X
┌─────────────────────────────────────────────────────┐
│                                                     │
│   FMR1 mutace → ↓/↑ FMRP                          │
│              │                                      │
│              ↓                                      │
│   ↑ mGluR5 signalizace (nekontrolovaná)           │
│              │                                      │
│              ↓                                      │
│   ↑ Lokální proteosyntéza                          │
│   ↑ AMPA internalizace                             │
│              │                                      │
│              ↓                                      │
│   Synaptická dysfunkce                             │
│   Kognitivní deficit                               │
│                                                     │
│   TERAPIE: mGluR5 antagonisté                      │
│   - Mavoglurant, Basimglurant                      │
│   - Fáze III NEÚSPĚŠNÉ (komplexní patofyziologie) │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

### Úzkostné poruchy

| Cíl | Přístup | Mechanismus | Status |
|-----|---------|-------------|--------|
| **mGluR5** | NAM | ↓ amygdala excitabilita | Preklinická |
| **mGluR2/3** | Agonista | ↓ glutamát | Fáze II (anxiolýza) |
| **mGluR7** | Agonista | ↓ amygdala glutamát | Preklinická |
| **mGluR8** | Agonista | ↓ anxiogenní signály | Preklinická |

---

## Synaptická plasticita

### mGluR-dependentní LTD

```mermaid
flowchart TD
    node_mGluRLTDhippocampus["mGluR-LTD hippocampus"]
    node_Nzkofrekvnenstimulac["Nízkofrekvneční stimulace"]
    node_mGluR5aktivacepostsy["mGluR5 aktivace postsynapticky"]
    node_GqPLCIPCa["Gq  PLC  IP₃  Ca²⁺"]
    node_Loklnproteosyntza["Lokální proteosyntéza"]
    node_FMRPregulovan["FMRP-regulovaná"]
    node_AMPAreceptorinternal["AMPA receptor internalizace"]
    node_synaptickslaLTD["synaptická síla = LTD"]
    node_OdlinodNMDAdependent["Odlišné od NMDA-dependentní LTD!"]

    node_mGluRLTDhippocampus --> node_Nzkofrekvnenstimulac
    node_Nzkofrekvnenstimulac --> node_mGluR5aktivacepostsy
    node_mGluR5aktivacepostsy --> node_GqPLCIPCa
    node_GqPLCIPCa --> node_Loklnproteosyntza
    node_Loklnproteosyntza --> node_FMRPregulovan
    node_FMRPregulovan --> node_AMPAreceptorinternal
    node_AMPAreceptorinternal --> node_synaptickslaLTD
    node_synaptickslaLTD --> node_OdlinodNMDAdependent

    click node_AMPAreceptorinternal "/receptors/ampa/" "AMPA receptor internalizace"
```

<details>
<summary>ASCII verze diagramu</summary>

```
mGluR-LTD (hippocampus)
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Nízkofrekvneční stimulace                        │
│              │                                      │
│              ↓                                      │
│   mGluR5 aktivace (postsynapticky)                 │
│              │                                      │
│              ↓                                      │
│   Gq → PLC → IP₃ → Ca²⁺                           │
│              │                                      │
│              ↓                                      │
│   Lokální proteosyntéza                            │
│   (FMRP-regulovaná)                                │
│              │                                      │
│              ↓                                      │
│   AMPA receptor internalizace                      │
│              │                                      │
│              ↓                                      │
│   ↓ synaptická síla = LTD                         │
│                                                     │
│   Odlišné od NMDA-dependentní LTD!                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

</details>

---

## Srovnání glutamátových receptorů

| Vlastnost | AMPA | NMDA | Kainát | **mGluR** |
|-----------|------|------|--------|-----------|
| **Typ** | Ionotropní | Ionotropní | Ionotropní | **Metabotropní** |
| **Rychlost** | ms | ms-s | ms | s-min |
| **Efekt** | Rychlá EPSP | Plasticita | Modulace | **Neuromodulace** |
| **Hlavní funkce** | Transmise | Ca²⁺/plasticita | Pre/post | **Modulace** |

---

## Reference

1. Niswender, C.M. & Conn, P.J. (2010). *Metabotropic glutamate receptors: physiology, pharmacology, and disease*. Annual Review of Pharmacology and Toxicology.
2. Nicoletti, F. et al. (2011). *Metabotropic glutamate receptors: from the workbench to the bedside*. Neuropharmacology.
3. Pin, J.P. & Bettler, B. (2016). *Organization and functions of mGlu and GABAB receptor complexes*. Nature.
4. Crupi, R. et al. (2019). *Role of metabotropic glutamate receptors in neurological disorders*. Frontiers in Molecular Neuroscience.

---

Viz také:
- [AMPA receptor](@/receptors/ampa.md) - Rychlá glutamátová transmise
- [NMDA receptor](@/receptors/nmda.md) - Plasticita a paměť
- [5-HT2A receptor](@/receptors/5-ht2a.md) - mGluR2 heterokomplex
- [Glutamát](@/glossary/glutamate.md) - Hlavní excitační neurotransmiter
- [Glosář](@/glossary/_index.md) - Definice pojmů

<- Zpět na [Receptory](@/receptors/_index.md) | [D1 receptor](@/receptors/d1.md) ->
