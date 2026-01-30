+++
title = "Cerebellum (Mozeček)"
description = "Cerebellum - mozeček, centrum motorické koordinace, rovnováhy a motorického učení, role v ataxii způsobené psychoaktivními látkami"
weight = 5
insert_anchor_links = "right"

[taxonomies]
categories = ["neuroanatomie", "motorika", "cerebellum"]
tags = ["cerebellum", "mozeček", "koordinace", "ataxie", "GABA", "Purkyňovy buňky", "motorické učení"]
+++

# Cerebellum (Mozeček)

**Cerebellum** (latinsky "malý mozek") je struktura zadního mozku zodpovědná za **motorickou koordinaci**, **rovnováhu**, **motorické učení** a jemné doladění pohybů. Obsahuje více než 50% všech neuronů mozku.

---

## Anatomie

### Makroskopická anatomie

```mermaid
flowchart TD
    node_CEREBELLUMPOHLED["CEREBELLUM - POHLED"]
    node_VERMISstednst["VERMIS střední část"]
    node_LEVPRAV["LEVÁ             PRAVÁ"]
    node_HEMISFRAHEMISFRA["HEMISFÉRA        HEMISFÉRA"]
    node_PEDUNCULI["PEDUNCULI"]
    node_stopky["stopky"]
    node_MOZKOVKMEN["MOZKOVÝ KMEN"]

    node_CEREBELLUMPOHLED --> node_VERMISstednst
    node_VERMISstednst --> node_LEVPRAV
    node_LEVPRAV --> node_HEMISFRAHEMISFRA
    node_HEMISFRAHEMISFRA --> node_PEDUNCULI
    node_PEDUNCULI --> node_stopky
    node_stopky --> node_MOZKOVKMEN
```

<details>
<summary>ASCII verze diagramu</summary>

```
CEREBELLUM - POHLED

          VERMIS (střední část)
              ┌───┐
         ┌────┤   ├────┐
         │    │   │    │
    LEVÁ │    │   │    │ PRAVÁ
HEMISFÉRA│    └───┘    │HEMISFÉRA
         │             │
         │             │
         └─────────────┘
              │
         PEDUNCULI
         (stopky)
              │
       MOZKOVÝ KMEN
```

</details>

### Dělení

| Část | Funkce | Afference |
|------|--------|-----------|
| **Vestibulocerebellum** | Rovnováha, oční pohyby | Vestibulární aparát |
| **Spinocerebellum** | Postura, lokomoce | Mícha (propriocepce) |
| **Cerebrocerebellum** | Plánování pohybů, kognice | Kortex (přes pons) |

### Buněčné typy

```mermaid
flowchart TD
    node_KORTEXCEREBELLAVRSTV["KORTEX CEREBELLA - VRSTVY"]
    node_MOLEKULRNVRSTVAParal["MOLEKULÁRNÍ VRSTVA            Paralelní vlákna"]
    node_Hvzdicovbuky["Hvězdicové buňky"]
    node_Kokovbuky["Košíčkové buňky"]
    node_PURKYOVAVRSTVAPURKYO["PURKYŇOVA VRSTVA              PURKYŇOVY BUŇKY"]
    node_GABAergnvstup["GABAergní výstup"]
    node_GRANULRNVRSTVAGranul["GRANULÁRNÍ VRSTVA             Granulární buňky"]
    node_Golgihobuky["Golgiho buňky"]

    node_KORTEXCEREBELLAVRSTV --> node_MOLEKULRNVRSTVAParal
    node_MOLEKULRNVRSTVAParal --> node_Hvzdicovbuky
    node_Hvzdicovbuky --> node_Kokovbuky
    node_Kokovbuky --> node_PURKYOVAVRSTVAPURKYO
    node_PURKYOVAVRSTVAPURKYO --> node_GABAergnvstup
    node_GABAergnvstup --> node_GRANULRNVRSTVAGranul
    node_GRANULRNVRSTVAGranul --> node_Golgihobuky
```

<details>
<summary>ASCII verze diagramu</summary>

```
KORTEX CEREBELLA - VRSTVY

┌─────────────────────────────────┐
│     MOLEKULÁRNÍ VRSTVA          │ ← Paralelní vlákna
│         │                       │   Hvězdicové buňky
│         ↓                       │   Košíčkové buňky
├─────────────────────────────────┤
│     PURKYŇOVA VRSTVA            │ ← PURKYŇOVY BUŇKY
│         │                       │   (GABAergní výstup)
│         ↓                       │
├─────────────────────────────────┤
│     GRANULÁRNÍ VRSTVA           │ ← Granulární buňky
│                                 │   Golgiho buňky
└─────────────────────────────────┘
```

</details>

| Buněčný typ | Neurotransmiter | Funkce |
|-------------|-----------------|--------|
| **Purkyňovy buňky** | **GABA** | Jediný výstup z kortexu, inhibiční |
| **Granulární buňky** | Glutamát | Excitační vstup |
| **Hvězdicové, košíčkové** | GABA | Lokální inhibice |
| **Golgiho buňky** | GABA | Feedback inhibice |

---

## Receptorové vybavení

### GABA-A receptory v cerebelu

```mermaid
flowchart TD
    node_GABAASUBTYPYVCEREBEL["GABA-A SUBTYPY V CEREBELU"]
    node_Purkyovybuky122hlavn["Purkyňovy buňky: α1β2γ2 hlavní"]
    node_6extrasynaptick["α6βδ  extrasynaptické"]
    node_TONICKINHIBICE["TONICKÁ INHIBICE"]
    node_Granulrnbuky623extra["Granulární buňky: α6β2/3δ extrasynaptické"]
    node_REGULACEEXCITABILITY["REGULACE EXCITABILITY"]

    node_GABAASUBTYPYVCEREBEL --> node_Purkyovybuky122hlavn
    node_Purkyovybuky122hlavn --> node_6extrasynaptick
    node_6extrasynaptick --> node_TONICKINHIBICE
    node_TONICKINHIBICE --> node_Granulrnbuky623extra
    node_Granulrnbuky623extra --> node_REGULACEEXCITABILITY
```

<details>
<summary>ASCII verze diagramu</summary>

```
GABA-A SUBTYPY V CEREBELU

Purkyňovy buňky: α1β2γ2 (hlavní)
                 α6βδ  (extrasynaptické)
                    ↓
           TONICKÁ INHIBICE

Granulární buňky: α6β2/3δ (extrasynaptické)
                     ↓
            TONICKÁ INHIBICE
                     ↓
          REGULACE EXCITABILITY
```

</details>

| Subtyp | Lokalizace | Funkce |
|--------|------------|--------|
| **α1** | Purkyňovy buňky | Synaptická inhibice |
| **α6** | Granulární buňky | **Tonická inhibice, cíl muscimolu** |
| **δ** | Extrasynaptické | Tonická inhibice |

### Glutamátové receptory

| Typ | Funkce |
|-----|--------|
| **AMPA** | Rychlá excitace |
| **NMDA** | Plasticita, LTD |
| **mGluR1** | Modulace, LTD |

---

## Funkce

### Motorická koordinace

```mermaid
flowchart TD
    node_CEREBELRNKOORDINACE["CEREBELÁRNÍ KOORDINACE"]
    node_Kortexplnpohybu["Kortex plán pohybu"]
    node_Cerebellum["Cerebellum"]
    node_TimingSekvenceSla["Timing   Sekvence   Síla"]
    node_KOORDINOVAN["KOORDINOVANÝ"]
    node_POHYB["POHYB"]

    node_CEREBELRNKOORDINACE --> node_Kortexplnpohybu
    node_Kortexplnpohybu --> node_Cerebellum
    node_Cerebellum --> node_TimingSekvenceSla
    node_TimingSekvenceSla --> node_KOORDINOVAN
    node_KOORDINOVAN --> node_POHYB
```

<details>
<summary>ASCII verze diagramu</summary>

```
CEREBELÁRNÍ KOORDINACE

         Kortex (plán pohybu)
              ↓
         Cerebellum
              │
    ┌─────────┼─────────┐
    ↓         ↓         ↓
  Timing   Sekvence   Síla
    │         │         │
    └─────────┼─────────┘
              ↓
       KOORDINOVANÝ
          POHYB
```

</details>

### Motorické učení

| Typ | Popis | Mechanismus |
|-----|-------|-------------|
| **Vestibulo-okulární reflex** | Adaptace VOR | LTD na paralelních vláknech |
| **Klasické podmiňování** | Eyeblink conditioning | Asociativní LTD |
| **Motorické dovednosti** | Jízda na kole, hra na nástroj | Synaptická plasticita |

### Kognitivní funkce

| Funkce | Oblast cerebella |
|--------|------------------|
| **Řeč** | Pravá hemisféra |
| **Pracovní paměť** | Laterální cerebellum |
| **Časové odhady** | Vermis, hemisféry |
| **Emoční regulace** | Vermis |

---

## Cerebellum a psychoaktivní látky

### GABAergika a ataxie

```mermaid
flowchart TD
    node_GABAergnLTKYCEREBELR["GABAergní LÁTKY  CEREBELÁRNÍ ATAXIE"]
    node_MuscimolGABAAaktivac["Muscimol  GABA-A aktivace  Inhibice Purkyňových"]
    node_bunk["buněk"]
    node_Snenvstupdo["Snížený výstup do"]
    node_hlubokchjader["hlubokých jader"]
    node_MOTORICK["MOTORICKÁ"]
    node_DYSKOORDINACE["DYSKOORDINACE"]

    node_GABAergnLTKYCEREBELR --> node_MuscimolGABAAaktivac
    node_MuscimolGABAAaktivac --> node_bunk
    node_bunk --> node_Snenvstupdo
    node_Snenvstupdo --> node_hlubokchjader
    node_hlubokchjader --> node_MOTORICK
    node_MOTORICK --> node_DYSKOORDINACE

    click node_GABAergnLTKYCEREBELR "/glossary/ataxie/" "GABAergní LÁTKY  CEREBELÁRNÍ ATAXIE"
    click node_MuscimolGABAAaktivac "/alkaloids/muscimol/" "Muscimol  GABA-A aktivace  Inhibice Purkyňových"
```

<details>
<summary>ASCII verze diagramu</summary>

```
GABAergní LÁTKY → CEREBELÁRNÍ ATAXIE

[Muscimol] ──→ GABA-A aktivace ──→ Inhibice Purkyňových
                                   buněk
                                       ↓
                              Snížený výstup do
                              hlubokých jader
                                       ↓
                              MOTORICKÁ
                              DYSKOORDINACE
```

</details>

| Látka | Mechanismus v cerebelu | Stupeň ataxie |
|-------|------------------------|---------------|
| **Alkohol** | GABA-A PAM, NMDA antagonista | Silná |
| **Benzodiazepiny** | GABA-A PAM (α1) | Střední |
| **Barbituráty** | GABA-A agonista | Silná |
| **GHB** | GABA-B, GHB-R | Střední |

### NMDA antagonisté

| Látka | Efekt v cerebelu |
|-------|------------------|
| **[Ketamin](@/alkaloids/ketamin.md)** | NMDA blokáda → ataxie |
| **Alkohol** | Kombinovaný GABA + NMDA |
| **PCP** | Silná ataxie |

### Psychedelika

| Látka | Cerebelární efekt |
|-------|-------------------|
| **[Psilocybin](@/alkaloids/psilocybin.md)** | Minimální přímý efekt |
| **[LSD](@/alkaloids/lsd.md)** | Časování, rytmus |
| **Salvia** | κ-opioid → ataxie |

---

## Klinické syndromy

### Cerebelární ataxie

```mermaid
flowchart TD
    node_PZNAKYCEREBELRNLZE["PŘÍZNAKY CEREBELÁRNÍ LÉZE"]
    node_DYSMETRIENepesnclen["DYSMETRIE  Nepřesné cílení"]
    node_ADIADOCHOKINEZENesch["ADIADOCHOKINEZE  Neschopnost rychlých alternujících pohybů"]
    node_DYSARTRIESkandovane["DYSARTRIE  Skandovaná řeč"]
    node_ATAXIECHZEirokbzenes["ATAXIE CHŮZE  Široká báze, nestabilita"]
    node_INTENCILNTespiclenmp["INTENCIÁLNÍ  Třes při cíleném pohybu"]
    node_TREMOR["TREMOR"]
    node_NYSTAGMUSMimovolnpoh["NYSTAGMUS  Mimovolní pohyby očí"]

    node_PZNAKYCEREBELRNLZE --> node_DYSMETRIENepesnclen
    node_DYSMETRIENepesnclen --> node_ADIADOCHOKINEZENesch
    node_ADIADOCHOKINEZENesch --> node_DYSARTRIESkandovane
    node_DYSARTRIESkandovane --> node_ATAXIECHZEirokbzenes
    node_ATAXIECHZEirokbzenes --> node_INTENCILNTespiclenmp
    node_INTENCILNTespiclenmp --> node_TREMOR
    node_TREMOR --> node_NYSTAGMUSMimovolnpoh

    click node_ATAXIECHZEirokbzenes "/glossary/ataxie/" "ATAXIE CHŮZE  Široká báze, nestabilita"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PŘÍZNAKY CEREBELÁRNÍ LÉZE

DYSMETRIE ────── Nepřesné cílení
    │
ADIADOCHOKINEZE ─ Neschopnost rychlých alternujících pohybů
    │
DYSARTRIE ────── Skandovaná řeč
    │
ATAXIE CHŮZE ─── Široká báze, nestabilita
    │
INTENCIÁLNÍ ─── Třes při cíleném pohybu
TREMOR
    │
NYSTAGMUS ───── Mimovolní pohyby očí
```

</details>

### Hodnocení

| Test | Co testuje |
|------|------------|
| **Prst-nos** | Dysmetrie HK |
| **Pata-koleno** | Dysmetrie DK |
| **Diadochokineze** | Alternující pohyby |
| **Romberg** | Senzorická vs cerebelární |
| **Tandem chůze** | Koordinace trupu |

---

## Vývojové aspekty

### Vývoj cerebella

| Období | Vývojový milestone |
|--------|-------------------|
| **Prenatální** | Formace základní struktury |
| **0-2 roky** | Rychlý růst, synaptogeneze |
| **Dětství** | Myelinizace, motorické učení |
| **Adolescence** | Synaptický pruning |

### Cerebelární vulnerabilita

| Faktor | Efekt |
|--------|-------|
| **Alkohol prenatálně** | FAS - cerebelární hypoplázie |
| **Malnutrice** | Snížený počet Purkyňových buněk |
| **Neurodegenerace** | SCA, MSA |

---

## Viz také

### Mozkové oblasti
- [Prefrontální kortex](@/brain/prefrontal-cortex.md) - Plánování pohybů
- [Thalamus](@/brain/thalamus.md) - Cerebelothalamické dráhy
- [Hippocampus](@/brain/hippocampus.md) - Paměťová konsolidace

### Receptory
- [GABA-A receptor](@/receptors/gaba-a.md) - **α6 subtyp v granulárních buňkách**
- [NMDA receptor](@/receptors/nmda.md) - Cerebelární plasticita

### Látky
- [Účinky muscimolu](@/phenomenology/muscimol-effects.md) - Detailní fenomenologie
- [Ketamin](@/alkaloids/ketamin.md) - NMDA blokáda

### Symptomy
- [Ataxie](@/glossary/ataxie.md) - Porucha koordinace

---

## Reference

1. Ito, M. (2006). *Cerebellar circuitry as a neuronal machine*. Progress in Neurobiology, 78(3-5), 272-303.

2. Schmahmann, J.D. (2019). *The cerebellum and cognition*. Neuroscience Letters, 688, 62-75.

3. Bhattacharyya, S. et al. (2014). *Cerebellar function and dysfunction: From molecules to behavior*. Current Molecular Pharmacology, 7(2), 95-107.

4. Hanchar, H.J. et al. (2005). *Alcohol-induced motor impairment caused by increased extrasynaptic GABA A receptor activity*. Nature Neuroscience, 8(3), 339-345.

---

← Zpět na [Mozek](@/brain/_index.md) | [Ataxie](@/glossary/ataxie.md) →
