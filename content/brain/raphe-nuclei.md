+++
title = "Raphe nuclei"
description = "Raphe nuclei - hlavni zdroj serotoninu v mozku a klicova struktura pro regulaci nalady"
weight = 7
insert_anchor_links = "right"

[taxonomies]
tags = ["raphe-nuclei", "serotonin", "mozkovy-kmen", "nalada", "mozek"]
categories = ["neuroanatomie", "neuroveda", "psychedelika"]
+++

# Raphe nuclei - Zdroj serotoninu

**Raphe nuclei** (jadra švu) je skupina jadrovych komplexu umistena ve stredni linii mozkoveho kmene. Predstavuji hlavni zdroj **serotoninu (5-HT)** v centralnim nervovem systemu. Jejich projekce zasahuji prakticky do vsech oblasti mozku a mozocdku, kde moduluji **naladu**, **spanek**, **kognici**, **bolest** a **autonomni funkce**.

Raphe nuclei jsou klicove pro pochopeni mechanismu ucinku antidepresiv i psychedelik, protoze serotoninovy system je primarnim cilem obou skupin latek.

---

## Anatomicka lokalizace

### Pozice v mozku

| Vlastnost | Hodnota |
|-----------|---------|
| **Lokalizace** | Mozkovy kmen (stredni linie) |
| **Rozsah** | Od mesencefalu po medulla |
| **Nazev** | Z latiny "raphe" = sev/šev |
| **Pocet neuronu** | ~300,000 serotoninergních (u cloveka) |

### Jednotliva jadra

```mermaid
flowchart TD
    node_RAPHENUCLEISAGITALNI["RAPHE NUCLEI - SAGITALNI POHLED"]
    node_MESENCEFALON["MESENCEFALON"]
    node_DorslnrapheDR["Dorsální raphe DR"]
    node_MedilnrapheMR["Mediální raphe MR"]
    node_PONS["PONS"]
    node_RaphepontisRPo["Raphe pontis RPo"]
    node_NraphemagnusNRM["N. raphe magnus NRM"]
    node_MEDULLA["MEDULLA"]
    node_NrapheobscurusNRO["N. raphe obscurus NRO"]
    node_NraphepallidusNRP["N. raphe pallidus NRP"]
    node_MichaNRPNRO["Micha NRP, NRO"]

    node_RAPHENUCLEISAGITALNI --> node_MESENCEFALON
    node_MESENCEFALON --> node_DorslnrapheDR
    node_DorslnrapheDR --> node_MedilnrapheMR
    node_MedilnrapheMR --> node_PONS
    node_PONS --> node_RaphepontisRPo
    node_RaphepontisRPo --> node_NraphemagnusNRM
    node_NraphemagnusNRM --> node_MEDULLA
    node_MEDULLA --> node_NrapheobscurusNRO
    node_NrapheobscurusNRO --> node_NraphepallidusNRP
    node_NraphepallidusNRP --> node_MichaNRPNRO
```

<details>
<summary>ASCII verze diagramu</summary>

```
RAPHE NUCLEI - SAGITALNI POHLED

            ┌─────────────────────────────────┐
            │         MESENCEFALON            │
            │                                 │
            │    ┌───────────────────────┐   │
            │    │ Dorsální raphe (DR)    │   │
            │    │ Mediální raphe (MR)    │   │
            │    └───────────────────────┘   │
            │                                 │
            ├─────────────────────────────────┤
            │            PONS                 │
            │                                 │
            │    ┌───────────────────────┐   │
            │    │ Raphe pontis (RPo)     │   │
            │    │ N. raphe magnus (NRM)  │   │
            │    └───────────────────────┘   │
            │                                 │
            ├─────────────────────────────────┤
            │          MEDULLA                │
            │                                 │
            │    ┌───────────────────────┐   │
            │    │ N. raphe obscurus (NRO)│   │
            │    │ N. raphe pallidus (NRP)│   │
            │    └───────────────────────┘   │
            │                                 │
            └─────────────────────────────────┘
                         │
                         ↓
                    Micha (NRP, NRO)
```

</details>

### Hlavni jadra

| Jadro | Zkratka | Lokalizace | Hlavni projekce |
|-------|---------|------------|-----------------|
| **Dorsální raphe** | DR | Mesencefalon | Kortex, striatum, [amygdala](@/brain/amygdala.md) |
| **Mediální raphe** | MR | Mesencefalon | [Hippocampus](@/brain/hippocampus.md), septum |
| **Raphe magnus** | NRM | Pons | Micha (bolest) |
| **Raphe obscurus** | NRO | Medulla | Mozeček, micha |
| **Raphe pallidus** | NRP | Medulla | Micha, autonomni |
| **Raphe pontis** | RPo | Pons | Mozeček |

---

## Dorsalni raphe (DR)

### Anatomie DR

| Vlastnost | Hodnota |
|-----------|---------|
| **Neuronů** | ~165,000 u člověka |
| **5-HT neurony** | 50-70% |
| **Ostatni** | GABA, glutamát, dopamin |
| **Subregiony** | DRD, DRV, DRL, DRI, DRC |

### Projekce DR

```mermaid
flowchart TD
    node_DORSLNRAPHEPROJEKCE["DORSÁLNÍ RAPHE - PROJEKCE"]
    node_DORSLNRAPHE["DORSÁLNÍ RAPHE"]
    node_FrontlnLimbickBazln["Frontální        Limbický       Bazální"]
    node_kortexsystmganglia["kortex           systém         ganglia"]
    node_mPFCAmygdalaStriatum["• mPFC          • Amygdala      • Striatum"]
    node_OFCHippocampusNAc["• OFC           • Hippocampus   • NAc"]
    node_DLPFCSeptumCaudate["• DLPFC         • Septum        • Caudate"]
    node_KogniceEmoceOdmna["Kognice         Emoce           Odměna"]
    node_RozhodovnNladaPohyb["Rozhodování     Nálada          Pohyb"]

    node_DORSLNRAPHEPROJEKCE --> node_DORSLNRAPHE
    node_DORSLNRAPHE --> node_FrontlnLimbickBazln
    node_FrontlnLimbickBazln --> node_kortexsystmganglia
    node_kortexsystmganglia --> node_mPFCAmygdalaStriatum
    node_mPFCAmygdalaStriatum --> node_OFCHippocampusNAc
    node_OFCHippocampusNAc --> node_DLPFCSeptumCaudate
    node_DLPFCSeptumCaudate --> node_KogniceEmoceOdmna
    node_KogniceEmoceOdmna --> node_RozhodovnNladaPohyb

    click node_mPFCAmygdalaStriatum "/brain/amygdala/" "• mPFC          • Amygdala      • Striatum"
    click node_OFCHippocampusNAc "/brain/hippocampus/" "• OFC           • Hippocampus   • NAc"
```

<details>
<summary>ASCII verze diagramu</summary>

```
DORSÁLNÍ RAPHE - PROJEKCE

                    DORSÁLNÍ RAPHE
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ↓                 ↓                 ↓
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│  Frontální    │ │   Limbický    │ │  Bazální      │
│  kortex       │ │   systém      │ │  ganglia      │
│               │ │               │ │               │
│  • mPFC       │ │  • Amygdala   │ │  • Striatum   │
│  • OFC        │ │  • Hippocampus│ │  • NAc        │
│  • DLPFC      │ │  • Septum     │ │  • Caudate    │
│               │ │               │ │               │
│  Kognice      │ │  Emoce        │ │  Odměna       │
│  Rozhodování  │ │  Nálada       │ │  Pohyb        │
└───────────────┘ └───────────────┘ └───────────────┘
```

</details>

### Subregiony DR

| Subregion | Projekce | Funkce |
|-----------|----------|--------|
| **DRD** (dorzální) | Kortex | Kognice |
| **DRV** (ventrální) | Amygdala, striatum | Emoce, odměna |
| **DRL** (laterální) | Hypothalamus | Autonomní |
| **DRI** (interfascikulární) | PAG | Bolest, obrana |
| **DRC** (kaudální) | Mozeček | Motorika |

---

## Medialni raphe (MR)

### Anatomie MR

| Vlastnost | Hodnota |
|-----------|---------|
| **Neuronů** | ~30,000-50,000 |
| **5-HT neurony** | ~20% |
| **Ostatni** | Glutamát (významny podil) |

### Projekce MR

| Cíl | Funkce |
|-----|--------|
| **[Hippocampus](@/brain/hippocampus.md)** | Pamet, theta rytmus |
| **Mediální septum** | Cholinergní modulace |
| **Interpeduncular nucleus** | Habénulární okruhy |
| **Entorhinal cortex** | Prostorová navigace |

```mermaid
flowchart TD
    node_MEDILNRAPHEFUNKCE["MEDIÁLNÍ RAPHE - FUNKCE"]
    node_MRHippocampusThetaos["MR  Hippocampus: Theta oscilace"]
    node_Prostorovpam["Prostorová paměť"]
    node_Kontextovuen["Kontextové učení"]
    node_Neurogeneze["Neurogeneze"]
    node_MRSeptumCholinergnre["MR  Septum: Cholinergní regulace"]
    node_Pozornost["Pozornost"]
    node_Uen["Učení"]

    node_MEDILNRAPHEFUNKCE --> node_MRHippocampusThetaos
    node_MRHippocampusThetaos --> node_Prostorovpam
    node_Prostorovpam --> node_Kontextovuen
    node_Kontextovuen --> node_Neurogeneze
    node_Neurogeneze --> node_MRSeptumCholinergnre
    node_MRSeptumCholinergnre --> node_Pozornost
    node_Pozornost --> node_Uen

    click node_MRHippocampusThetaos "/brain/hippocampus/" "MR  Hippocampus: Theta oscilace"
```

<details>
<summary>ASCII verze diagramu</summary>

```
MEDIÁLNÍ RAPHE - FUNKCE

MR → Hippocampus: Theta oscilace
     │
     └─→ Prostorová paměť
         Kontextové učení
         Neurogeneze

MR → Septum: Cholinergní regulace
     │
     └─→ Pozornost
         Učení
```

</details>

---

## Serotoninova synteza

### Biosynteticka draha

```mermaid
flowchart TD
    node_SYNTEZASEROTONINUVRA["SYNTEZA SEROTONINU V RAPHE"]
    node_LTryptofanesencilnam["L-Tryptofan esenciální aminokyselina z potravy"]
    node_TPH2tryptofanhydroxy["TPH2 tryptofan hydroxylaza 2"]
    node_CNSspecifickisoforma["CNS-specifická isoforma"]
    node_Ratelimitingkrok["Rate-limiting krok"]
    node_5Hydroxytryptofan5HT["5-Hydroxytryptofan 5-HTP"]
    node_AADCaromatickaminoky["AADC aromatická aminokyselina dekarboxyláza"]
    node_KofaktorvitaminB6PLP["Kofaktor: vitamin B6 PLP"]
    node_SEROTONIN5HT["SEROTONIN 5-HT"]
    node_Uskladnenivevesiklec["Uskladneni ve vesiklech VMAT2"]
    node_Uvolnenexocytza["Uvolnení exocytóza"]

    node_SYNTEZASEROTONINUVRA --> node_LTryptofanesencilnam
    node_LTryptofanesencilnam --> node_TPH2tryptofanhydroxy
    node_TPH2tryptofanhydroxy --> node_CNSspecifickisoforma
    node_CNSspecifickisoforma --> node_Ratelimitingkrok
    node_Ratelimitingkrok --> node_5Hydroxytryptofan5HT
    node_5Hydroxytryptofan5HT --> node_AADCaromatickaminoky
    node_AADCaromatickaminoky --> node_KofaktorvitaminB6PLP
    node_KofaktorvitaminB6PLP --> node_SEROTONIN5HT
    node_SEROTONIN5HT --> node_Uskladnenivevesiklec
    node_Uskladnenivevesiklec --> node_Uvolnenexocytza

    click node_SYNTEZASEROTONINUVRA "/glossary/serotonin/" "SYNTEZA SEROTONINU V RAPHE"
    click node_SEROTONIN5HT "/glossary/serotonin/" "SEROTONIN 5-HT"
```

<details>
<summary>ASCII verze diagramu</summary>

```
SYNTEZA SEROTONINU V RAPHE

L-Tryptofan (esenciální aminokyselina z potravy)
      │
      │ TPH2 (tryptofan hydroxylaza 2)
      │ CNS-specifická isoforma
      │ Rate-limiting krok
      ↓
5-Hydroxytryptofan (5-HTP)
      │
      │ AADC (aromatická aminokyselina dekarboxyláza)
      │ Kofaktor: vitamin B6 (PLP)
      ↓
SEROTONIN (5-HT)
      │
      └─→ Uskladneni ve vesiklech (VMAT2)
          │
          └─→ Uvolnení (exocytóza)
```

</details>

### Klicove enzymy

| Enzym | Gen | Funkce | Regulace |
|-------|-----|--------|----------|
| **TPH2** | TPH2 | Hydroxylace tryptofanu | Stress, cirkadianni |
| **AADC** | DDC | Dekarboxylace | Konstitutivní |
| **VMAT2** | SLC18A2 | Vesikulární transport | DA, 5-HT, NE |
| **MAO-A** | MAOA | Degradace 5-HT | Genetické varianty |

---

## Autoreceptorova regulace

### 5-HT1A autoreceptory

Klicovy mechanismus regulace aktivity raphe neuronu:

```mermaid
flowchart TD
    node_5HT1AAUTORECEPTORVDR["5-HT1A AUTORECEPTOR V DR"]
    node_SerotonergnneuronDR["Serotonergní neuron DR:"]
    node_Somatloneuronu["Soma tělo neuronu"]
    node_5HT1AreceptorAutorec["5-HT1A receptor   Autoreceptor"]
    node_somatodendrit["somatodendrit."]
    node_Gioprotein["Gi/o protein"]
    node_cAMPKkanly["cAMP           K+ kanály"]
    node_firingHyperpolarizac["firing       Hyperpolarizace"]
    node_NEGATIVNZPTNVAZBA["NEGATIVNÍ ZPĚTNÁ VAZBA"]
    node_5HTfiring5HTrelease["5-HT   firing   5-HT release"]

    node_5HT1AAUTORECEPTORVDR --> node_SerotonergnneuronDR
    node_SerotonergnneuronDR --> node_Somatloneuronu
    node_Somatloneuronu --> node_5HT1AreceptorAutorec
    node_5HT1AreceptorAutorec --> node_somatodendrit
    node_somatodendrit --> node_Gioprotein
    node_Gioprotein --> node_cAMPKkanly
    node_cAMPKkanly --> node_firingHyperpolarizac
    node_firingHyperpolarizac --> node_NEGATIVNZPTNVAZBA
    node_NEGATIVNZPTNVAZBA --> node_5HTfiring5HTrelease

    click node_5HT1AreceptorAutorec "/receptors/5-ht1a/" "5-HT1A receptor   Autoreceptor"
```

<details>
<summary>ASCII verze diagramu</summary>

```
5-HT1A AUTORECEPTOR V DR

Serotonergní neuron (DR):
┌─────────────────────────────────────────────────┐
│                                                 │
│   Soma (tělo neuronu)                          │
│       │                                         │
│       │ ┌─────────────────┐                    │
│       └─┤ 5-HT1A receptor │ ← Autoreceptor     │
│         │ (somatodendrit.)│                    │
│         └────────┬────────┘                    │
│                  │                              │
│                  ↓                              │
│         Gi/o protein                            │
│                  │                              │
│         ┌───────┴───────┐                      │
│         ↓               ↓                      │
│    ↓ cAMP          ↑ K+ kanály                │
│         │               │                      │
│         ↓               ↓                      │
│    ↓ firing       Hyperpolarizace             │
│                                                 │
│   NEGATIVNÍ ZPĚTNÁ VAZBA                       │
│   (↑ 5-HT → ↓ firing → ↓ 5-HT release)        │
└─────────────────────────────────────────────────┘
```

</details>

### Autoreceptory na terminalech

| Receptor | Lokalizace | Funkce |
|----------|------------|--------|
| **5-HT1A** | Soma, dendrity (raphe) | Inhibice firing |
| **5-HT1B** | Axonove terminály | Inhibice release |
| **5-HT1D** | Axony | Modulace |

### Desenzitizace pri SSRI lecbe

```mermaid
flowchart TD
    node_TERAPEUTICKLATENCESS["TERAPEUTICKÁ LATENCE SSRI"]
    node_Tden0["Týden 0:"]
    node_SSRI5HTvsynapsiaktiv["SSRI   5-HT v synapsi  aktivace 5-HT1A auto   firing"]
    node_Mloklinickhoefektu["'Málo klinického efektu'"]
    node_Tden24["Týden 2-4:"]
    node_Chronick5HTdesenziti["Chronická  5-HT  desenzitizace 5-HT1A autoreceptorů"]
    node_obnovenfiring["obnovený firing"]
    node_trvalezven5HTvclovch["trvale zvýšený 5-HT v cílových oblastech"]
    node_Tden46["Týden 4-6:"]
    node_Nstupantidepresivnho["'Nástup antidepresivního účinku'"]
    node_Postsynaptickadaptac["Postsynaptické adaptace"]
    node_Neuroplasticita["Neuroplasticita"]

    node_TERAPEUTICKLATENCESS --> node_Tden0
    node_Tden0 --> node_SSRI5HTvsynapsiaktiv
    node_SSRI5HTvsynapsiaktiv --> node_Mloklinickhoefektu
    node_Mloklinickhoefektu --> node_Tden24
    node_Tden24 --> node_Chronick5HTdesenziti
    node_Chronick5HTdesenziti --> node_obnovenfiring
    node_obnovenfiring --> node_trvalezven5HTvclovch
    node_trvalezven5HTvclovch --> node_Tden46
    node_Tden46 --> node_Nstupantidepresivnho
    node_Nstupantidepresivnho --> node_Postsynaptickadaptac
    node_Postsynaptickadaptac --> node_Neuroplasticita
```

<details>
<summary>ASCII verze diagramu</summary>

```
TERAPEUTICKÁ LATENCE SSRI

Týden 0:
SSRI → ↑ 5-HT v synapsi → aktivace 5-HT1A auto → ↓ firing
       "Málo klinického efektu"

Týden 2-4:
Chronická ↑ 5-HT → desenzitizace 5-HT1A autoreceptorů
                  → obnovený firing
                  → trvale zvýšený 5-HT v cílových oblastech

Týden 4-6:
       "Nástup antidepresivního účinku"
       Postsynaptické adaptace
       Neuroplasticita
```

</details>

---

## Raphe a psychedelika

### Efekty psychedelik na raphe

Psychedelika ([psilocybin](@/alkaloids/psilocybin.md), [LSD](@/alkaloids/lsd.md), [DMT](@/alkaloids/dmt.md)) ovlivnuji raphe nuclei:

| Efekt | Mechanismus | Dusledek |
|-------|-------------|----------|
| **Snizeny firing DR** | 5-HT1A aktivace | Mene endogenního 5-HT |
| **Postsynaptický 5-HT2A** | Primární psychedelický účinek | Halucinace |
| **Zmena konektivity** | Modulace DR-kortex | Zmenene vedomi |

### Mechanismus

```mermaid
flowchart TD
    node_PSYCHEDELIKAARAPHENU["PSYCHEDELIKA A RAPHE NUCLEI"]
    node_PSILOCINaktivnmetabo["PSILOCIN aktivní metabolit psilocybinu:"]
    node_1VRAPHEDR["1. V RAPHE DR:"]
    node_Psilocin5HT1Aautorec["Psilocin  5-HT1A autoreceptor   DR firing"]
    node_endogenn5HTrelease["endogenní 5-HT release"]
    node_2VKORTEXU["2. V KORTEXU:"]
    node_Psilocin5HT2Arecepto["Psilocin  5-HT2A receptor  depolarizace pyramidových neuronů"]
    node_zvenglutamtovtransmi["zvýšená glutamátová transmise"]
    node_PSYCHEDELICKEFEKT["PSYCHEDELICKÝ EFEKT"]
    node_NETEFEKT["NET EFEKT:"]

    node_PSYCHEDELIKAARAPHENU --> node_PSILOCINaktivnmetabo
    node_PSILOCINaktivnmetabo --> node_1VRAPHEDR
    node_1VRAPHEDR --> node_Psilocin5HT1Aautorec
    node_Psilocin5HT1Aautorec --> node_endogenn5HTrelease
    node_endogenn5HTrelease --> node_2VKORTEXU
    node_2VKORTEXU --> node_Psilocin5HT2Arecepto
    node_Psilocin5HT2Arecepto --> node_zvenglutamtovtransmi
    node_zvenglutamtovtransmi --> node_PSYCHEDELICKEFEKT
    node_PSYCHEDELICKEFEKT --> node_NETEFEKT

    click node_PSILOCINaktivnmetabo "/alkaloids/psilocybin/" "PSILOCIN aktivní metabolit psilocybinu:"
    click node_Psilocin5HT2Arecepto "/receptors/5-ht2a/" "Psilocin  5-HT2A receptor  depolarizace pyramidových neuronů"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PSYCHEDELIKA A RAPHE NUCLEI

PSILOCIN (aktivní metabolit psilocybinu):

1. V RAPHE (DR):
   Psilocin → 5-HT1A autoreceptor → ↓ DR firing
                                    ↓ endogenní 5-HT release

2. V KORTEXU:
   Psilocin → 5-HT2A receptor → depolarizace pyramidových neuronů
                              → zvýšená glutamátová transmise
                              → PSYCHEDELICKÝ EFEKT

NET EFEKT:
- Snížené endogenní 5-HT (z raphe)
- Přímá postsynaptická 5-HT2A aktivace (psychedelikem)
- = "přepsání" normální serotoninergní signalizace
```

</details>

### Studie mikrodialyzy

| Studie | Nalez |
|--------|-------|
| Aghajanian (1972) | LSD snizuje DR firing |
| Sprouse & Aghajanian (1987) | 5-HT1A mediuje inhibici |
| Celada (2008) | Psilocybin snizuje 5-HT release |

---

## Funkcni systemy

### Raphe a spanek

| Stav | DR aktivita | Funkce |
|------|-------------|--------|
| **Bdelost** | Vysoka | Arousal, pozornost |
| **NREM** | Snizena | Umoznuje spanek |
| **REM** | Temer nulova | REM atonie |

```mermaid
flowchart TD
    node_RAPHEASPANEK["RAPHE A SPANEK"]
    node_DRaktivita["DR aktivita"]
    node_Bdelost["Bdelost █████████████████████████"]
    node_NREM["NREM ████████████"]
    node_REM["REM ██"]
    node_as["Čas"]
    node_Serotoninergnineuron["Serotoninergni neurony 'vypinaji' behem REM spanku."]

    node_RAPHEASPANEK --> node_DRaktivita
    node_DRaktivita --> node_Bdelost
    node_Bdelost --> node_NREM
    node_NREM --> node_REM
    node_REM --> node_as
    node_as --> node_Serotoninergnineuron

    click node_Serotoninergnineuron "/glossary/serotonin/" "Serotoninergni neurony "vypinaji" behem REM spanku."
```

<details>
<summary>ASCII verze diagramu</summary>

```
RAPHE A SPANEK

       DR aktivita
            ^
            │
Bdelost ────┤█████████████████████████
            │
NREM ───────┤████████████
            │
REM ────────┤██
            │
            └───────────────────────────→ Čas

Serotoninergni neurony "vypinaji" behem REM spanku.
```

</details>

### Raphe a bolest

**Nucleus raphe magnus (NRM)** moduluje bolest:

```mermaid
flowchart TD
    node_DESCENDENTNIMODULACE["DESCENDENTNI MODULACE BOLESTI"]
    node_KortexPAGaktivace["Kortex PAG aktivace"]
    node_Periakveduktalni["Periakveduktalni"]
    node_sedPAG["sed PAG"]
    node_Nucleusraphe["Nucleus raphe"]
    node_magnusNRM["magnus NRM"]
    node_5HTprojekce["5-HT projekce"]
    node_Zadnrohymchy["Zadní rohy míchy"]
    node_laminyIII["laminy I, II"]
    node_Inhibicebolestiv["Inhibice bolestivé"]
    node_transmise["transmise"]
    node_Mechanismus["Mechanismus:"]

    node_DESCENDENTNIMODULACE --> node_KortexPAGaktivace
    node_KortexPAGaktivace --> node_Periakveduktalni
    node_Periakveduktalni --> node_sedPAG
    node_sedPAG --> node_Nucleusraphe
    node_Nucleusraphe --> node_magnusNRM
    node_magnusNRM --> node_5HTprojekce
    node_5HTprojekce --> node_Zadnrohymchy
    node_Zadnrohymchy --> node_laminyIII
    node_laminyIII --> node_Inhibicebolestiv
    node_Inhibicebolestiv --> node_transmise
    node_transmise --> node_Mechanismus
```

<details>
<summary>ASCII verze diagramu</summary>

```
DESCENDENTNI MODULACE BOLESTI

         Kortex (PAG aktivace)
              │
              ↓
    ┌─────────────────────┐
    │ Periakveduktalni    │
    │ sed (PAG)           │
    └──────────┬──────────┘
               │
               ↓
    ┌─────────────────────┐
    │ Nucleus raphe       │
    │ magnus (NRM)        │
    └──────────┬──────────┘
               │
               │ 5-HT projekce
               ↓
    ┌─────────────────────┐
    │ Zadní rohy míchy    │
    │ (laminy I, II)      │
    │                     │
    │ Inhibice bolestivé  │
    │ transmise           │
    └─────────────────────┘

Mechanismus:
- 5-HT aktivuje inhibicni interneurony
- Snižuje nocicepční transmisi
- Základ opioidní analgezie
```

</details>

### Raphe a nalada

| Oblast cile | Funkce | Patologie pri dysfunkci |
|-------------|--------|------------------------|
| **mPFC** | Kognitivni hodnoceni | Negativni bias |
| **Amygdala** | Emocni reakce | Hyperreaktivita |
| **Hippocampus** | Emocni pamet | Ruminace |
| **Striatum** | Odmena | Anhedonie |

---

## Receptorova exprese v raphe

### 5-HT receptory

| Receptor | Exprese v DR | Funkce |
|----------|--------------|--------|
| **5-HT1A** | Velmi vysoka | Autoreceptor, inhibice |
| **5-HT1B** | Stredni | Presynaptická modulace |
| **5-HT2A** | Nizka | GABAergni interneurony |
| **5-HT2C** | Stredni | Heteroreceptor |

### Dalsi receptory

| Receptor | Funkce v raphe |
|----------|----------------|
| **GABA-A** | Inhibice z interneuronu |
| **Glutamat (NMDA)** | Excitace |
| **Alfa-1 adrenergni** | NE modulace z LC |
| **Orexin** | Arousal signaly |
| **CRF** | Stresova odpoved |

---

## Konektivita

### Aferentni spoje

| Zdroj | Neurotransmiter | Efekt |
|-------|-----------------|-------|
| **[Prefrontální kortex](@/brain/prefrontal-cortex.md)** | Glutamát | Excitace |
| **[Locus coeruleus](@/brain/locus-coeruleus.md)** | Noradrenalin | Modulace |
| **Hypothalamus (LH)** | Orexin | Arousal |
| **Habénula** | Glutamát | Inhibice |
| **PAG** | Různé | Bolest, obrana |

### Eferentni spoje

| Cil | Funkce |
|-----|--------|
| **Kortex (vsechny oblasti)** | Kognice, percepce |
| **Limbicky system** | Emoce, pamet |
| **Bazalni ganglia** | Motorika, odmena |
| **Hypothalamus** | Autonomni funkce |
| **Mozeček** | Motoricka koordinace |
| **Micha** | Bolest, autonomni |

---

## Patologie raphe nuclei

### Deprese

| Nalez | Interpretace |
|-------|--------------|
| **Snizena 5-HT transmise** | Hypoteza deficitu |
| **TPH2 polymorfismy** | Geneticke riziko |
| **Zmeneny DR objem** | Post-mortem studie |

### Suicidalita

| Nalez | Oblast |
|-------|--------|
| **Zvysena 5-HT1A vazba** | Upregulace |
| **Snizena TPH** | Snizena synteza |
| **MAO-A polymorfismy** | Rychlejsi degradace |

### Uzkostne poruchy

| Porucha | Raphe dysfunkce |
|---------|-----------------|
| **Panicka porucha** | Hyperaktivita DR |
| **GAD** | Dysregulace DR-amygdala |
| **PTSD** | Zmeny 5-HT1A |

---

## Farmakologie

### Antidepresiva cilici na raphe

| Latka | Mechanismus | Efekt na raphe |
|-------|-------------|----------------|
| **SSRI** | SERT inhibice | Zvyseny 5-HT → 5-HT1A desenzitizace |
| **Buspiron** | 5-HT1A parcialni agonista | Akutne ↓ firing, chronicke adaptace |
| **Vilazodone** | SSRI + 5-HT1A | Rychlejsi efekt |
| **Vortioxetin** | Multimodalni | Komplexni |

### Psychedelika

| Latka | Efekt na DR |
|-------|-------------|
| **[LSD](@/alkaloids/lsd.md)** | Snizeny firing via 5-HT1A |
| **[Psilocybin](@/alkaloids/psilocybin.md)** | Snizeny firing |
| **[DMT](@/alkaloids/dmt.md)** | Kratka inhibice |

---

## Reference

### Klicova literatura

1. Jacobs, B.L. & Azmitia, E.C. (1992). *Structure and function of the brain serotonin system*. Physiological Reviews, 72(1), 165-229.

2. Celada, P., Puig, M.V. & Artigas, F. (2013). *Serotonin modulation of cortical neurons and networks*. Frontiers in Integrative Neuroscience, 7, 25.

3. Aghajanian, G.K. & Marek, G.J. (1999). *Serotonin and hallucinogens*. Neuropsychopharmacology, 21(2 Suppl), 16S-23S.

4. Lowry, C.A. et al. (2008). *Serotonergic systems, anxiety, and affective disorder: Focus on the dorsomedial part of the dorsal raphe nucleus*. Annals of the New York Academy of Sciences, 1148, 86-94.

5. Hale, M.W. & Lowry, C.A. (2011). *Functional topography of midbrain and pontine serotonergic systems*. Journal of Chemical Neuroanatomy, 41(4), 182-195.

### Psychedelika a raphe

6. Aghajanian, G.K. (1972). *LSD and CNS transmission*. Annual Review of Pharmacology, 12(1), 157-168.

7. Celada, P. et al. (2008). *The serotonin 5-HT2A receptor as a target for the treatment of schizophrenia*. CNS Drugs, 22, 761-791.

---

## Viz take

### Mozkové oblasti
- [Prefrontalni kortex](@/brain/prefrontal-cortex.md) - DR projekce
- [Hippocampus](@/brain/hippocampus.md) - MR projekce
- [Amygdala](@/brain/amygdala.md) - Emocni modulace
- [Locus coeruleus](@/brain/locus-coeruleus.md) - Vzajemna regulace

### Receptory
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Psychedelicky cil
- [5-HT1A receptor](@/receptors/5-ht1a.md) - Autoreceptor

### Neurotransmitery
- [Serotonin](@/glossary/serotonin.md) - Hlavni produkt raphe
- [GABA](@/glossary/gaba.md) - Interneurony

### Psychoaktivní látky
- [Psilocybin](@/alkaloids/psilocybin.md) - Snizuje DR firing
- [LSD](@/alkaloids/lsd.md) - 5-HT1A aktivace
- [DMT](@/alkaloids/dmt.md) - Endogenni serotoninovy analog

---

<- Zpet na [Mozek](@/brain/_index.md) | [Locus coeruleus](@/brain/locus-coeruleus.md) ->
