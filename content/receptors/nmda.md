+++
title = "NMDA receptor"
description = "N-methyl-D-aspartátový receptor - klíčový pro paměť, plasticitu a cíl disociativ"
weight = 3
insert_anchor_links = "right"
+++

# NMDA receptor - Brána synaptické plasticity

**NMDA receptor** (N-methyl-D-aspartát receptor) je ionotropní **glutamátový receptor** klíčový pro **synaptickou plasticitu**, učení a paměť. Je cílem disociativních látek (ketamin, PCP) a prekurzorem excitotoxického poškození při nadměrné aktivaci ([kyselina ibotenová](@/neurotoxins/ibotenic-acid.md)).

---

## Základní charakteristika

| Vlastnost | Hodnota |
|-----------|---------|
| **Typ** | Ionotropní (ligandem řízený) |
| **Rodina** | Glutamátové receptory |
| **Iony** | Ca²⁺, Na⁺ (influx), K⁺ (eflux) |
| **Struktura** | Tetramer |
| **Koagonisté** | Glutamát + Glycin/D-serin |
| **Napěťová závislost** | Mg²⁺ blokáda při negativním potenciálu |

### Podjednotky

| Podjednotka | Gen | Funkce |
|-------------|-----|--------|
| **GluN1** | GRIN1 | Obligatorní, glycinové místo |
| **GluN2A** | GRIN2A | Synaptické, rychlá kinetika |
| **GluN2B** | GRIN2B | Extrasynaptické, plasticita |
| **GluN2C** | GRIN2C | Cerebellum |
| **GluN2D** | GRIN2D | Vývojové |
| **GluN3A/B** | GRIN3A/B | Modulační |

---

## Jedinečné vlastnosti

### Koincidentní detektor

```mermaid
flowchart TD
    node_ProaktivaciNMDArecep["Pro aktivaci NMDA receptoru jsou potřeba TŘI podmínky:"]
    node_1Glutamt2GlycinDseri["1. Glutamát          2. Glycin/D-serin      3. Depolarizace"]
    node_presynaptickastrocyt["presynaptický      astrocyty            postsynaptická"]
    node_NMDARECEPTOR["NMDA RECEPTOR"]
    node_GlusiteGlysite["Glu site      Gly site"]
    node_71006eb8["▼    ▼"]
    node_MgKANLDepolarizace["Mg²⁺     KANÁL        Depolarizace"]
    node_blokprodstranMg["blok       pór          odstraní Mg²⁺"]
    node_Cainflux["Ca²⁺ influx"]
    node_NMDAANDgateprosynapt["NMDA = 'AND gate' pro synaptickou koincidenci"]

    node_ProaktivaciNMDArecep --> node_1Glutamt2GlycinDseri
    node_1Glutamt2GlycinDseri --> node_presynaptickastrocyt
    node_presynaptickastrocyt --> node_NMDARECEPTOR
    node_NMDARECEPTOR --> node_GlusiteGlysite
    node_GlusiteGlysite --> node_71006eb8
    node_71006eb8 --> node_MgKANLDepolarizace
    node_MgKANLDepolarizace --> node_blokprodstranMg
    node_blokprodstranMg --> node_Cainflux
    node_Cainflux --> node_NMDAANDgateprosynapt
```

<details>
<summary>ASCII verze diagramu</summary>

```
Pro aktivaci NMDA receptoru jsou potřeba TŘI podmínky:

1. Glutamát          2. Glycin/D-serin      3. Depolarizace
   (presynaptický)      (astrocyty)            (postsynaptická)
        │                    │                       │
        ↓                    ↓                       ↓
   ┌────────────────────────────────────────────────────┐
   │                  NMDA RECEPTOR                     │
   │                                                    │
   │  Glu site ────┐    ┌──── Gly site                 │
   │               │    │                               │
   │               ▼    ▼                               │
   │         ┌───────────────┐                         │
   │    Mg²⁺ │    KANÁL      │ ←── Depolarizace        │
   │   blok  │     (pór)     │     odstraní Mg²⁺       │
   │         └───────┬───────┘                         │
   │                 │                                  │
   │                 ↓                                  │
   │            Ca²⁺ influx                            │
   └────────────────────────────────────────────────────┘

NMDA = "AND gate" pro synaptickou koincidenci
```

</details>

### Mg²⁺ blokáda

| Membránový potenciál | Mg²⁺ stav | NMDA aktivita |
|---------------------|-----------|---------------|
| -70 mV (klid) | Blokuje pór | Minimální |
| -40 mV (EPSP) | Částečně | Částečná |
| -20 mV (AP) | Odstraněn | Plná |
| +20 mV | Odstraněn | Maximální |

---

## Signalizace

### Ca²⁺ dependentní kaskády

```mermaid
flowchart TD
    node_NMDAaktivace["NMDA aktivace"]
    node_Cainflux["Ca²⁺ influx"]
    node_CaMKIICalci["CaMKII  Calci-"]
    node_neurin["neurin"]
    node_LTPLTD["LTP     LTD"]
    node_posilnnoslaben["posilnění oslabení"]

    node_NMDAaktivace --> node_Cainflux
    node_Cainflux --> node_CaMKIICalci
    node_CaMKIICalci --> node_neurin
    node_neurin --> node_LTPLTD
    node_LTPLTD --> node_posilnnoslaben
```

<details>
<summary>ASCII verze diagramu</summary>

```
NMDA aktivace
      │
      ↓
┌─────────────────┐
│  Ca²⁺ influx    │
└────────┬────────┘
         │
    ┌────┴────┐
    ↓         ↓
┌───────┐ ┌───────┐
│CaMKII │ │Calci- │
│       │ │neurin │
└───┬───┘ └───┬───┘
    │         │
    ↓         ↓
┌───────┐ ┌───────┐
│  LTP  │ │  LTD  │
│(posilnění) │(oslabení)
└───────┘ └───────┘
```

</details>

### LTP (Long-Term Potentiation)

| Fáze | Časový rámec | Mechanismus |
|------|--------------|-------------|
| **Raná** | Minuty | CaMKII fosforylace |
| **Pozdní** | Hodiny-dny | Genová exprese, syntéza proteinů |

---

## Farmakologie

### Antagonisté (disociativa)

| Látka | Ki (nM) | Mechanismus | Účinek |
|-------|---------|-------------|--------|
| **Ketamin** | 500-1000 | Kanálový blokátor | Disociace, analgezie |
| **PCP** | 50-100 | Kanálový blokátor | Silná disociace |
| **MK-801** | 2-5 | Kanálový blokátor | Výzkum |
| **Memantine** | 500-1000 | Nízkoafinitní | Alzheimerova choroba |
| **Dextrometorfan** | 1000+ | Neselektivní | Antitusikum |

### Agonisté (excitotoxiny)

| Látka | Efekt | Zdroj |
|-------|-------|-------|
| **Glutamát** | Endogenní agonista | Fyziologický |
| [**Kyselina ibotenová**](@/neurotoxins/ibotenic-acid.md) | Potentní agonista | [Amanita muscaria](@/shrooms/amanita-muscaria.md) |
| **NMDA** | Syntetický agonista | Výzkum |
| **Kyselina kainová** | Kainátový > NMDA | Mořské řasy |

### Modulátory koagonistů

| Místo | Agonista | Antagonista |
|-------|----------|-------------|
| **Glycinové** | Glycin, D-serin | 7-chlorokynurenát |
| **Polyaminové** | Spermin | Ifenprodil |

---

## Klinické aplikace

### Ketamin v psychiatrii

| Indikace | Dávka | Účinek |
|----------|-------|--------|
| **Rezistentní deprese** | 0.5 mg/kg IV | Rychlý antidepresivní efekt |
| **Suicidální ideace** | 0.5 mg/kg | Akutní snížení |
| **Chronická bolest** | Variabilní | Analgezie |
| **PTSD** | Experimentální | Extinkce strachu |

### Mechanismus antidepresivního účinku

```mermaid
flowchart TD
    node_KetaminNMDAblokda["Ketamin  NMDA blokáda"]
    node_Paradoxnglutamtburst["Paradoxní glutamát burst"]
    node_AMPAreceptoraktivace["AMPA receptor aktivace"]
    node_BDNFuvolnn["BDNF uvolnění"]
    node_TrkBmTORaktivace["TrkB  mTOR aktivace"]
    node_Synaptogenezehodinyd["Synaptogeneze hodiny-dny"]
    node_ANTIDEPRESIVNINEK["ANTIDEPRESIVNÍ ÚČINEK"]

    node_KetaminNMDAblokda --> node_Paradoxnglutamtburst
    node_Paradoxnglutamtburst --> node_AMPAreceptoraktivace
    node_AMPAreceptoraktivace --> node_BDNFuvolnn
    node_BDNFuvolnn --> node_TrkBmTORaktivace
    node_TrkBmTORaktivace --> node_Synaptogenezehodinyd
    node_Synaptogenezehodinyd --> node_ANTIDEPRESIVNINEK

    click node_AMPAreceptoraktivace "/receptors/ampa/" "AMPA receptor aktivace"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Ketamin → NMDA blokáda
              │
              ↓
     Paradoxní glutamát burst
              │
              ↓
     AMPA receptor aktivace
              │
              ↓
         BDNF uvolnění
              │
              ↓
      TrkB → mTOR aktivace
              │
              ↓
    Synaptogeneze (hodiny-dny)
              │
              ↓
    ANTIDEPRESIVNÍ ÚČINEK
```

</details>

---

## Excitotoxicita

### Mechanismus poškození

```mermaid
flowchart TD
    node_NadmrnNMDAaktivaceis["Nadměrná NMDA aktivace ischémie, trauma, ibotenová k.@/neurotoxins/ibotenic-acid.md"]
    node_MasivnCainflux["Masivní Ca²⁺ influx"]
    node_ProtezyLipzyEndonukl["Proteázy    Lipázy     Endonukleázy"]
    node_calpainyPLACAD["calpainy   PLA₂    CAD"]
    node_CytoskeletMembrnyDNA["Cytoskelet  Membrány      DNA"]
    node_destrukceperoxidacef["destrukce   peroxidace   fragmentace"]
    node_NEURONLNSMRT["NEURONÁLNÍ SMRT"]
    node_nekrzaapoptza["nekróza/apoptóza"]

    node_NadmrnNMDAaktivaceis --> node_MasivnCainflux
    node_MasivnCainflux --> node_ProtezyLipzyEndonukl
    node_ProtezyLipzyEndonukl --> node_calpainyPLACAD
    node_calpainyPLACAD --> node_CytoskeletMembrnyDNA
    node_CytoskeletMembrnyDNA --> node_destrukceperoxidacef
    node_destrukceperoxidacef --> node_NEURONLNSMRT
    node_NEURONLNSMRT --> node_nekrzaapoptza

    click node_NadmrnNMDAaktivaceis "/neurotoxins/ibotenic-acid/" "Nadměrná NMDA aktivace ischémie, trauma, ibotenová k.@/neurotoxins/ibotenic-acid.md"
```

<details>
<summary>ASCII verze diagramu</summary>

```
Nadměrná NMDA aktivace (ischémie, trauma, [ibotenová k.](@/neurotoxins/ibotenic-acid.md))
                    │
                    ↓
           Masivní Ca²⁺ influx
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
   Proteázy    Lipázy     Endonukleázy
   (calpainy)   (PLA₂)    (CAD)
        │           │           │
        ↓           ↓           ↓
   Cytoskelet  Membrány      DNA
   destrukce   peroxidace   fragmentace
        │           │           │
        └───────────┼───────────┘
                    ↓
           NEURONÁLNÍ SMRT
           (nekróza/apoptóza)
```

</details>

### Neuroprotektivní strategie

| Přístup | Mechanismus | Status |
|---------|-------------|--------|
| NMDA antagonisté | Blokáda Ca²⁺ influxu | Limitovaný úspěch |
| Mg²⁺ suplementace | Fyziologická blokáda | Preventivní |
| Hypothermie | Snížení metabolismu | Standard v ischémii |
| GluN2B selektivní | Cílená blokáda | Ve vývoji |

---

## Vývojové aspekty

### Ontogeneze

| Období | Dominantní subtypy | Funkce |
|--------|-------------------|--------|
| **Fetální** | GluN2B, GluN2D | Migrace, diferenciace |
| **Postnatální** | GluN2B → GluN2A switch | Synaptická maturace |
| **Dospělý** | GluN2A dominance | Stabilní konektivita |
| **Stárnutí** | Snížená exprese | Kognitivní pokles |

---

## Srovnání glutamátových receptorů

| Receptor | Typ | Ion | Funkce |
|----------|-----|-----|--------|
| **NMDA** | Ionotropní | Ca²⁺, Na⁺ | Plasticita, paměť |
| **AMPA** | Ionotropní | Na⁺, (Ca²⁺) | Rychlá excitace |
| **Kainátový** | Ionotropní | Na⁺ | Modulace |
| **mGluR** | Metabotropní | G-protein | Neuromodulace |

---

## Reference

1. Traynelis, S.F. et al. (2010). *Glutamate receptor ion channels: structure, regulation, and function*. Pharmacological Reviews.
2. Krystal, J.H. et al. (2019). *Ketamine: A paradigm shift for depression research and treatment*. Neuron.
3. Bhargava, S. & Bhargava, S. (2018). *NMDA receptor antagonists: A review*. Asian Journal of Pharmacy.

---

## Detailni modulacni mechanismy

NMDA receptor ma **6+ odlisnych modulacnich mist** -- viz sekce [Mechanismy ucinku](@/mechanisms/_index.md):

### Modulacni mista a jejich farmakologie

```mermaid
flowchart TD
    node_NMDARECEPTORMODULACN["NMDA RECEPTOR - MODULACNI MISTA"]
    node_GlutamatovemistoGluN["Glutamatove misto GluN2"]
    node_GlycinovemistoPolyam["Glycinove misto -----+------ Polyaminove misto"]
    node_GluN1GluN2Bextracel["GluN1              |       GluN2B extracel."]
    node_IONOVYKANAL["IONOVY KANAL"]
    node_Mg2sitePCPketaminsit["Mg2+ site ----- PCP/ketamin site"]
    node_kanalovypor["kanalovy por"]
    node_Zn2mistoRedoxmisto["Zn2+ misto ----------+------ Redox misto"]
    node_GluN2AextracelCysres["GluN2A extracel.          Cys residua"]

    node_NMDARECEPTORMODULACN --> node_GlutamatovemistoGluN
    node_GlutamatovemistoGluN --> node_GlycinovemistoPolyam
    node_GlycinovemistoPolyam --> node_GluN1GluN2Bextracel
    node_GluN1GluN2Bextracel --> node_IONOVYKANAL
    node_IONOVYKANAL --> node_Mg2sitePCPketaminsit
    node_Mg2sitePCPketaminsit --> node_kanalovypor
    node_kanalovypor --> node_Zn2mistoRedoxmisto
    node_Zn2mistoRedoxmisto --> node_GluN2AextracelCysres

    click node_GlutamatovemistoGluN "/glossary/glutamate/" "Glutamatove misto GluN2"
```

<details>
<summary>ASCII verze diagramu</summary>

```
NMDA RECEPTOR - MODULACNI MISTA

                  Glutamatove misto (GluN2)
                         |
    Glycinove misto -----+------ Polyaminove misto
    (GluN1)              |       (GluN2B extracel.)
                         |
    ┌────────────────────┴────────────────────┐
    |            IONOVY KANAL                  |
    |    Mg2+ site ----- PCP/ketamin site     |
    |                    (kanalovy por)        |
    └────────────────────┬────────────────────┘
                         |
    Zn2+ misto ----------+------ Redox misto
    (GluN2A extracel.)          (Cys residua)
```

</details>

| Misto | Typ modulace | Farmakologicky priklad | Terapeuticke vyuziti |
|-------|-------------|------------------------|---------------------|
| **Glutamatove** | Agonismus | NMDA, kys. ibotenova | Vyzkum |
| **Glycinove** | Ko-agonismus | D-serin, D-cykloserin | Schizofrenie (adjuv.) |
| **Kanalove** | Blokada | Ketamin, memantine | Deprese, Alzheimer |
| **Mg2+** | Napetova zavislost | Mg2+ suplementace | Neuroprotekce |
| **Polyaminove** | Potenciace/blokada | Ifenprodil (GluN2B) | Bolest, deprese |
| **Zn2+** | Inhibice | Endogenni Zn2+ | Synaptická modulace |
| **Redox** | Modulace | Oxidanty/reduktanty | Neurodegenerace |

### Antidepresivni mechanismus ketaminu -- signalni kaskada

```mermaid
flowchart TD
    node_KETAMINNMDABLOKADAin["KETAMIN -&gt; NMDA BLOKADA interneurony"]
    node_Paradoxniglutamatovy["Paradoxni glutamatovy burst dezinhibice"]
    node_AMPAreceptoraktivace["AMPA receptor aktivace postsynapticka"]
    node_BDNFuvolnenizdendrit["+---&gt; BDNF uvolneni z dendritickych vezikulu"]
    node_VDCCCa2TrkBautofosfo["VDCC Ca2+   TrkB autofosforylace"]
    node_CaMKIIPI3KAktmTORC1["CaMKII     PI3K/Akt -&gt; mTORC1"]
    node_CREBTranslacePSD95Gl["CREB      Translace: PSD-95, GluA1, synaptofyzin"]
    node_GenovaSYNAPTOGENEZE6["Genova    SYNAPTOGENEZE 6-24 h"]
    node_exprese["exprese"]
    node_ANTIDEPRESIVNIUCINEK["ANTIDEPRESIVNI UCINEK 24-72 h"]

    node_KETAMINNMDABLOKADAin --> node_Paradoxniglutamatovy
    node_Paradoxniglutamatovy --> node_AMPAreceptoraktivace
    node_AMPAreceptoraktivace --> node_BDNFuvolnenizdendrit
    node_BDNFuvolnenizdendrit --> node_VDCCCa2TrkBautofosfo
    node_VDCCCa2TrkBautofosfo --> node_CaMKIIPI3KAktmTORC1
    node_CaMKIIPI3KAktmTORC1 --> node_CREBTranslacePSD95Gl
    node_CREBTranslacePSD95Gl --> node_GenovaSYNAPTOGENEZE6
    node_GenovaSYNAPTOGENEZE6 --> node_exprese
    node_exprese --> node_ANTIDEPRESIVNIUCINEK

    click node_Paradoxniglutamatovy "/glossary/glutamate/" "Paradoxni glutamatovy burst dezinhibice"
    click node_AMPAreceptoraktivace "/receptors/ampa/" "AMPA receptor aktivace postsynapticka"
```

<details>
<summary>ASCII verze diagramu</summary>

```
KETAMIN -> NMDA BLOKADA (interneurony)
    |
    v
Paradoxni glutamatovy burst (dezinhibice)
    |
    v
AMPA receptor aktivace (postsynapticka)
    |
    +---> BDNF uvolneni z dendritickych vezikulu
    |          |
    v          v
VDCC Ca2+   TrkB autofosforylace
    |          |
    v          v
CaMKII     PI3K/Akt -> mTORC1
    |          |
    v          v
CREB      Translace: PSD-95, GluA1, synaptofyzin
    |          |
    v          v
Genova    SYNAPTOGENEZE (6-24 h)
exprese        |
               v
         ANTIDEPRESIVNI UCINEK (24-72 h)
```

</details>

Podrobnosti: [Signalni transdukce](@/mechanisms/signal-transduction.md) -- mTOR konvergence, BDNF-TrkB
Podrobnosti: [Alostericka modulace](@/mechanisms/allosteric-modulation.md) -- NMDA modulacni mista, GluN2B selektivita

---

Viz take:
- [Kyselina ibotenova](@/neurotoxins/ibotenic-acid.md) - NMDA agonista
- [AMPA receptor](@/receptors/ampa.md) - Rychly glutamatovy receptor
- [Glutamat](@/glossary/glutamate.md) - Hlavni excitacni neurotransmiter
- [Mechanismy ucinku](@/mechanisms/_index.md) - kompletni mechanismy
- [Alostericka modulace](@/mechanisms/allosteric-modulation.md) - NMDA modulacni mista
- [Signalni transdukce](@/mechanisms/signal-transduction.md) - NMDA -> mTOR -> synaptogeneze
- [Receptorova kinetika](@/mechanisms/receptor-binding.md) - vazebna kinetika kanalovych blokatoru

<- Zpet na [Receptory](@/receptors/_index.md)
