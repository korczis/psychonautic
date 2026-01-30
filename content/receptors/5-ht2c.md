+++
title = "5-HT2C receptor"
description = "Serotoninový receptor 2C - regulace apetitu, nálady a jedinečný RNA editing"
weight = 6
insert_anchor_links = "right"

[taxonomies]
categories = ["receptory", "serotonin", "GPCR"]
tags = ["5-HT2C", "apetit", "obezita", "RNA-editing", "lorcaserin", "psychedelika"]
+++

# 5-HT2C receptor - Regulátor metabolismu a nálady

**5-HT2C receptor** je serotoninový receptor z rodiny GPCR, který hraje klíčovou roli v regulaci **apetitu**, **nálady** a **úzkosti**. Je unikátní svou schopností podléhat **RNA editingu**, což vytváří funkčně odlišné varianty receptoru. Je cílem antiobezitních léčiv a modulátorem účinků psychedelik.

---

## Základní charakteristika

### Klasifikace

| Vlastnost | Hodnota |
|-----------|---------|
| **Rodina** | G-protein spřažené receptory (GPCR) |
| **Podrodina** | Serotoninové receptory (5-HT2) |
| **Gen** | HTR2C |
| **Chromozom** | Xq23 (X-vázaný) |
| **Délka** | 458 aminokyselin (needitovaná forma) |
| **G-protein** | Gq/11 (excitační) |

### Struktura

```mermaid
flowchart TD
    node_Extracelulrnprostor["Extracelulární prostor"]
    node_Nterminusvazebnmsto["N-terminus  vazebné místo"]
    node_TM1TM7["TM1    TM7"]
    node_MembrnaTM2TM3TM6TM5["Membrána   TM2     TM3     TM6     TM5"]
    node_TM4["TM4"]
    node_Gq11["Gq/11"]
    node_Cterminusi2smyka["C-terminus  i2 smyčka"]
    node_IntracelulrnRNAediti["Intracelulární      RNA editing"]
    node_prostor["prostor"]
    node_TMtransmembrnovdomna["TM = transmembránová doména celkem 7"]
    node_i2druhintracelulrnsm["i2 = druhá intracelulární smyčka - místo RNA editingu"]

    node_Extracelulrnprostor --> node_Nterminusvazebnmsto
    node_Nterminusvazebnmsto --> node_TM1TM7
    node_TM1TM7 --> node_MembrnaTM2TM3TM6TM5
    node_MembrnaTM2TM3TM6TM5 --> node_TM4
    node_TM4 --> node_Gq11
    node_Gq11 --> node_Cterminusi2smyka
    node_Cterminusi2smyka --> node_IntracelulrnRNAediti
    node_IntracelulrnRNAediti --> node_prostor
    node_prostor --> node_TMtransmembrnovdomna
    node_TMtransmembrnovdomna --> node_i2druhintracelulrnsm
```

<details>
<summary>ASCII verze diagramu</summary>

```
                    Extracelulární prostor
                           │
    N-terminus ───┬────────┼────────┬─── vazebné místo
                  │   TM1  │  TM7   │
         ┌────────┼────────┼────────┼────────┐
Membrána │  TM2   │  TM3   │  TM6   │  TM5   │
         └────────┼────────┼────────┼────────┘
                  │   TM4  │        │
                  │        │ Gq/11  │
    C-terminus ───┴────────┴────────┴─── i2 smyčka
                    Intracelulární      (RNA editing)
                        prostor

TM = transmembránová doména (celkem 7)
i2 = druhá intracelulární smyčka - místo RNA editingu
```

</details>

---

## RNA editing - Jedinečná vlastnost

### Mechanismus

```mermaid
flowchart TD
    node_HTR2CpremRNA["HTR2C pre-mRNA"]
    node_ADAR1ADAR2enzymy["ADAR1/ADAR2 enzymy"]
    node_5editovatelnchmstABC["5 editovatelných míst A, B, C, D, E"]
    node_AdenosinInosintenoja["Adenosin  Inosin čteno jako Guanosin"]
    node_Kodony156160vi2smyce["Kodony 156-160 v i2 smyčce"]
    node_PoziceABCDE["Pozice:  A    B    C    D    E"]
    node_NeeditINIIleAsnIle["Needit: INI  Ile-Asn-Ile"]
    node_PlnVGVValGlyVal["Plně:   VGV  Val-Gly-Val"]

    node_HTR2CpremRNA --> node_ADAR1ADAR2enzymy
    node_ADAR1ADAR2enzymy --> node_5editovatelnchmstABC
    node_5editovatelnchmstABC --> node_AdenosinInosintenoja
    node_AdenosinInosintenoja --> node_Kodony156160vi2smyce
    node_Kodony156160vi2smyce --> node_PoziceABCDE
    node_PoziceABCDE --> node_NeeditINIIleAsnIle
    node_NeeditINIIleAsnIle --> node_PlnVGVValGlyVal
```

<details>
<summary>ASCII verze diagramu</summary>

```
HTR2C pre-mRNA
      │
      ↓ ADAR1/ADAR2 enzymy
      │
┌─────────────────────────────────────────────────┐
│                                                 │
│   5 editovatelných míst (A, B, C, D, E)        │
│                                                 │
│   Adenosin → Inosin (čteno jako Guanosin)     │
│                                                 │
│   Kodony 156-160 v i2 smyčce                   │
│                                                 │
│   Pozice:  A    B    C    D    E              │
│            │    │    │    │    │              │
│            ↓    ↓    ↓    ↓    ↓              │
│   Needit: INI  (Ile-Asn-Ile)                  │
│   Plně:   VGV  (Val-Gly-Val)                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

</details>

### Varianty receptoru

| Varianta | Editovaná místa | Aminokyseliny | Konstitutivní aktivita | Signalizace |
|----------|-----------------|---------------|------------------------|-------------|
| **INI** (needitovaná) | Žádná | Ile-Asn-Ile | Vysoká | Silná |
| **INV** | E | Ile-Asn-Val | Střední | Střední |
| **ISV** | C, E | Ile-Ser-Val | Střední | Střední |
| **VSV** | A, C, E | Val-Ser-Val | Nízká | Nízká |
| **VNV** | A, E | Val-Asn-Val | Nízká | Nízká |
| **VGV** (plně editovaná) | A, B, C, D, E | Val-Gly-Val | Minimální | Velmi nízká |

### Funkční důsledky editingu

```mermaid
flowchart TD
    node_NeeditovanformaINIPl["Needitovaná forma INI           Plně editovaná VGV"]
    node_VysokkonstitutivnNzk["Vysoká konstitutivní            Nízká konstitutivní"]
    node_aktivitaaktivita["aktivita                         aktivita"]
    node_SilnsignalizaceSlabs["Silná signalizace               Slabá signalizace"]
    node_apetitapetit["apetit                         apetit"]
    node_anxietyanxiety["anxiety                        anxiety"]
    node_DepresesebevradaVGVI["Deprese, sebevražda:  VGV,  INI"]
    node_Obezitavariabilnedit["Obezita: variabilní editing pattern"]

    node_NeeditovanformaINIPl --> node_VysokkonstitutivnNzk
    node_VysokkonstitutivnNzk --> node_aktivitaaktivita
    node_aktivitaaktivita --> node_SilnsignalizaceSlabs
    node_SilnsignalizaceSlabs --> node_apetitapetit
    node_apetitapetit --> node_anxietyanxiety
    node_anxietyanxiety --> node_DepresesebevradaVGVI
    node_DepresesebevradaVGVI --> node_Obezitavariabilnedit
```

<details>
<summary>ASCII verze diagramu</summary>

```
Needitovaná forma (INI)           Plně editovaná (VGV)
┌────────────────────┐            ┌────────────────────┐
│                    │            │                    │
│  Vysoká konstitutivní          │  Nízká konstitutivní
│  aktivita           │            │  aktivita           │
│       │            │            │       │            │
│       ↓            │            │       ↓            │
│  Silná signalizace │            │  Slabá signalizace │
│       │            │            │       │            │
│       ↓            │            │       ↓            │
│  ↓ apetit          │            │  ↑ apetit          │
│  ↑ anxiety         │            │  ↓ anxiety         │
│                    │            │                    │
└────────────────────┘            └────────────────────┘

Deprese, sebevražda: ↑ VGV, ↓ INI
Obezita: variabilní editing pattern
```

</details>

### Regulace editingu

| Faktor | Efekt na editing | Důsledek |
|--------|------------------|----------|
| **Chronický stres** | ↑ editing | ↓ signalizace, deprese |
| **SSRI** | ↓ editing | Normalizace funkce |
| **Interferon-α** | ↑ editing | Psychiatrické NÚ |
| **Alkohol** | Změněný vzorec | Behaviorální změny |

---

## Distribuce v mozku

### Regionální exprese

| Oblast | Exprese | Funkce |
|--------|---------|--------|
| **Choroid plexus** | Velmi vysoká | CSF produkce |
| **Nucleus accumbens** | Vysoká | Odměna, motivace |
| **Prefrontální kortex** | Vysoká | Kognice, impulzivita |
| **Hypothalamus** | Vysoká | Apetit, metabolismus |
| **Amygdala** | Střední | Úzkost, strach |
| **Hippocampus** | Střední | Paměť, nálada |
| **VTA** | Střední | Dopaminová regulace |
| **Substantia nigra** | Nízká | Motorika |

### Buněčná lokalizace

| Typ neuronu | Role |
|-------------|------|
| **POMC neurony** | Anorexigenní signalizace |
| **GABAergní interneurony** | Inhibice DA neuronů |
| **Pyramidové neurony** | Kortikální signalizace |
| **Dopaminergní neurony** | Modulace DA uvolňování |

---

## Signální dráhy

### Primární kaskáda (Gq/11)

```mermaid
flowchart TD
    node_5HTAgonista["5-HT / Agonista"]
    node_5HT2Creceptor["5-HT2C receptor"]
    node_Gq11protein["Gq/11 protein"]
    node_FosfolipzaCPLC["Fosfolipáza C PLCβ"]
    node_IPDAG["IP₃             DAG"]
    node_CazERProteinkinzaCPK["Ca²⁺ z ER    Protein kináza C PKC"]
    node_DownstreamERK12aktiv["Downstream   ERK1/2 aktivace"]
    node_effektory["effektory"]
    node_Genovexprese["Genová exprese"]

    node_5HTAgonista --> node_5HT2Creceptor
    node_5HT2Creceptor --> node_Gq11protein
    node_Gq11protein --> node_FosfolipzaCPLC
    node_FosfolipzaCPLC --> node_IPDAG
    node_IPDAG --> node_CazERProteinkinzaCPK
    node_CazERProteinkinzaCPK --> node_DownstreamERK12aktiv
    node_DownstreamERK12aktiv --> node_effektory
    node_effektory --> node_Genovexprese
```

<details>
<summary>ASCII verze diagramu</summary>

```
5-HT / Agonista
        ↓
   5-HT2C receptor
        ↓
    Gq/11 protein
        ↓
   Fosfolipáza C (PLCβ)
        ↓
┌───────┴───────┐
↓               ↓
IP₃             DAG
↓               ↓
Ca²⁺ z ER    Protein kináza C (PKC)
↓               ↓
Downstream   ERK1/2 aktivace
effektory    ↓
             Genová exprese
```

</details>

### Sekundární dráhy

| Dráha | Mediátor | Funkce |
|-------|----------|--------|
| **β-arrestin** | Desenzitizace | Internalizace receptoru |
| **PLA₂** | Kyselina arachidonová | Neuromodulace |
| **ERK/MAPK** | Proliferace | Neuroplasticita |

### Konstitutivní aktivita

```mermaid
flowchart TD
    node_Konstitutivnaktivita["Konstitutivní aktivita bez ligandu"]
    node_INIformaSpontnnGq11a["INI forma: Spontánní Gq/11 aktivace"]
    node_Tonickinhibiceapetit["Tonická inhibice apetitu"]
    node_TonickregulaceDAuvol["Tonická regulace DA uvolňování"]
    node_VGVformaMinimlnspont["VGV forma: Minimální spontánní aktivita"]
    node_Ztrtatonickinhibice["Ztráta tonické inhibice"]
    node_apetitzmnnDAregulace["apetit, změněná DA regulace"]

    node_Konstitutivnaktivita --> node_INIformaSpontnnGq11a
    node_INIformaSpontnnGq11a --> node_Tonickinhibiceapetit
    node_Tonickinhibiceapetit --> node_TonickregulaceDAuvol
    node_TonickregulaceDAuvol --> node_VGVformaMinimlnspont
    node_VGVformaMinimlnspont --> node_Ztrtatonickinhibice
    node_Ztrtatonickinhibice --> node_apetitzmnnDAregulace
```

<details>
<summary>ASCII verze diagramu</summary>

```
Konstitutivní aktivita (bez ligandu)
┌─────────────────────────────────────────────────┐
│                                                 │
│   INI forma: Spontánní Gq/11 aktivace          │
│              │                                  │
│              ↓                                  │
│   Tonická inhibice apetitu                     │
│   Tonická regulace DA uvolňování               │
│                                                 │
│   VGV forma: Minimální spontánní aktivita      │
│              │                                  │
│              ↓                                  │
│   Ztráta tonické inhibice                      │
│   ↑ apetit, změněná DA regulace               │
│                                                 │
└─────────────────────────────────────────────────┘
```

</details>

---

## Regulace apetitu

### POMC/AgRP systém

```mermaid
flowchart TD
    node_5HT2Caktivacevhypoth["5-HT2C aktivace v hypothalamu"]
    node_Arcuatenucleus["Arcuate nucleus"]
    node_POMCneuronyAgRPneuro["POMC neurony    AgRP neurony"]
    node_anorexigennorexigenn["anorexigenní  orexigenní"]
    node_AKTIVACEINHIBICE["AKTIVACE       INHIBICE"]
    node_MSHAgRP["α-MSH          AgRP"]
    node_MC4Raktivace["MC4R aktivace"]
    node_PJEMPOTRAVY["PŘÍJEM POTRAVY"]
    node_ENERGETICKVDEJ["ENERGETICKÝ VÝDEJ"]

    node_5HT2Caktivacevhypoth --> node_Arcuatenucleus
    node_Arcuatenucleus --> node_POMCneuronyAgRPneuro
    node_POMCneuronyAgRPneuro --> node_anorexigennorexigenn
    node_anorexigennorexigenn --> node_AKTIVACEINHIBICE
    node_AKTIVACEINHIBICE --> node_MSHAgRP
    node_MSHAgRP --> node_MC4Raktivace
    node_MC4Raktivace --> node_PJEMPOTRAVY
    node_PJEMPOTRAVY --> node_ENERGETICKVDEJ
```

<details>
<summary>ASCII verze diagramu</summary>

```
5-HT2C aktivace v hypothalamu
              │
              ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│   Arcuate nucleus                               │
│        │                                        │
│   ┌────┴────────────┐                          │
│   ↓                 ↓                          │
│ POMC neurony    AgRP neurony                   │
│ (anorexigenní)  (orexigenní)                   │
│   │                 │                          │
│   ↓                 ↓                          │
│ AKTIVACE       INHIBICE                        │
│   │                 │                          │
│   ↓                 ↓                          │
│ α-MSH ↑         AgRP ↓                         │
│   │                 │                          │
│   └────────┬────────┘                          │
│            ↓                                    │
│       MC4R aktivace                            │
│            ↓                                    │
│       ↓ PŘÍJEM POTRAVY                         │
│       ↑ ENERGETICKÝ VÝDEJ                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

</details>

### Klinická relevance

| Stav | 5-HT2C aktivita | Důsledek |
|------|-----------------|----------|
| **Obezita** | Snížená/dysfunkční | Zvýšený apetit |
| **Anorexie** | Zvýšená | Snížený apetit |
| **Antipsychotika** | Blokáda | Váhový přírůstek |
| **SSRI** | Nepřímá aktivace | Variabilní efekt na váhu |

---

## Farmakologie

### Agonisté

| Látka | Ki (nM) | Selektivita | Použití |
|-------|---------|-------------|---------|
| **Lorcaserin** | 15-30 | 5-HT2C >> 2A, 2B | Obezita (stažen 2020) |
| **mCPP** | 10-50 | Neselektivní | Výzkum, metabolit trazodonu |
| **WAY-161503** | 5-15 | Selektivní | Výzkum |
| **Ro60-0175** | 10-30 | Selektivní | Výzkum |
| **CP-809101** | 2-10 | Vysoce selektivní | Výzkum |

### Antagonisté/Inverzní agonisté

| Látka | Ki (nM) | Použití |
|-------|---------|---------|
| **SB-242084** | 1-5 | Selektivní, výzkum |
| **Agomelatine** | 50-100 | Antidepresivum |
| **Olanzapin** | 10-30 | Antipsychotikum |
| **Klozapin** | 5-20 | Antipsychotikum |
| **RS-102221** | 5-15 | Výzkum |

### Interakce s psychedeliky

| Látka | 5-HT2C aktivita | Modulace účinku |
|-------|-----------------|-----------------|
| [**LSD**](@/alkaloids/lsd.md) | Agonista | Částečně přes 5-HT2C |
| [**Psilocin**](@/alkaloids/psilocin.md) | Agonista | Modulace psychedelického zážitku |
| [**DMT**](@/alkaloids/dmt.md) | Agonista | Sekundární cíl |
| [**Meskalin**](@/alkaloids/mescaline.md) | Slabý agonista | Minimální přínos |

---

## Klinické aplikace

### Lorcaserin (Belviq) - Případová studie

```mermaid
flowchart TD
    node_TIMELINELORCASERINU["TIMELINE LORCASERINU"]
    node_2012FDAschvlenproobe["2012: FDA schválení pro obezitu"]
    node_2020Dobrovolnstaenzt["2020: Dobrovolné stažení z trhu"]

    node_TIMELINELORCASERINU --> node_2012FDAschvlenproobe
    node_2012FDAschvlenproobe --> node_2020Dobrovolnstaenzt
```

<details>
<summary>ASCII verze diagramu</summary>

```
TIMELINE LORCASERINU
────────────────────────────────────────────────────
2012: FDA schválení pro obezitu
      - Selektivní 5-HT2C agonista
      - Snížení chuti k jídlu
      - Bez kardiovaskulární toxicity (5-HT2B)

2020: Dobrovolné stažení z trhu
      - CAMELLIA-TIMI 61 studie
      - Numericky vyšší výskyt malignit
      - 7.7% vs 7.1% (3 roky)
      - Kauzalita nejistá
────────────────────────────────────────────────────
```

</details>

### Mechanismus antiobezitního účinku

```mermaid
flowchart TD
    node_Lorcaserin["Lorcaserin"]
    node_Selektivn5HT2Caktiva["Selektivní 5-HT2C aktivace"]
    node_1Hypothalamus["1. Hypothalamus"]
    node_POMCaktivaceMSHMC4Rs["- POMC aktivace  α-MSH  MC4R  sytost"]
    node_AgRPinhibiceorexigen["- AgRP inhibice   orexigenní signály"]
    node_2VTANucleusaccumbens["2. VTA/Nucleus accumbens"]
    node_Snenhedonickhodnotyj["- Snížení hedonické hodnoty jídla"]
    node_ModulaceDAsystmu["- Modulace DA systému"]
    node_3Prefrontlnkortex["3. Prefrontální kortex"]
    node_inhibinkontrola["-  inhibiční kontrola"]
    node_impulzivnjdlo["-  impulzivní jídlo"]
    node_SNENPJMUPOTRAVY510vh["SNÍŽENÍ PŘÍJMU POTRAVY ~5-10% váhový úbytek"]

    node_Lorcaserin --> node_Selektivn5HT2Caktiva
    node_Selektivn5HT2Caktiva --> node_1Hypothalamus
    node_1Hypothalamus --> node_POMCaktivaceMSHMC4Rs
    node_POMCaktivaceMSHMC4Rs --> node_AgRPinhibiceorexigen
    node_AgRPinhibiceorexigen --> node_2VTANucleusaccumbens
    node_2VTANucleusaccumbens --> node_Snenhedonickhodnotyj
    node_Snenhedonickhodnotyj --> node_ModulaceDAsystmu
    node_ModulaceDAsystmu --> node_3Prefrontlnkortex
    node_3Prefrontlnkortex --> node_inhibinkontrola
    node_inhibinkontrola --> node_impulzivnjdlo
    node_impulzivnjdlo --> node_SNENPJMUPOTRAVY510vh
```

<details>
<summary>ASCII verze diagramu</summary>

```
Lorcaserin
    │
    ↓ Selektivní 5-HT2C aktivace
    │
┌───┴───────────────────────────────────────────────┐
│                                                   │
│   1. Hypothalamus                                 │
│      - POMC aktivace → α-MSH → MC4R → sytost    │
│      - AgRP inhibice → ↓ orexigenní signály     │
│                                                   │
│   2. VTA/Nucleus accumbens                       │
│      - Snížení hedonické hodnoty jídla          │
│      - Modulace DA systému                       │
│                                                   │
│   3. Prefrontální kortex                         │
│      - ↑ inhibiční kontrola                      │
│      - ↓ impulzivní jídlo                        │
│                                                   │
└───────────────────────────────────────────────────┘
    │
    ↓
SNÍŽENÍ PŘÍJMU POTRAVY (~5-10% váhový úbytek)
```

</details>

### Váhový přírůstek u antipsychotik

| Antipsychotikum | 5-HT2C antagonismus | Váhový přírůstek |
|-----------------|---------------------|------------------|
| **Klozapin** | Silný | +++ |
| **Olanzapin** | Silný | +++ |
| **Risperidon** | Střední | ++ |
| **Quetiapin** | Střední | ++ |
| **Aripiprazol** | Slabý | + |
| **Ziprasidon** | Slabý | + |

---

## Role v psychiatrii

### Deprese a úzkost

```mermaid
flowchart TD
    node_DepreseRNAeditingVGV["Deprese   RNA editing   VGV forma"]
    node_Konstitutivnaktivita["Konstitutivní aktivita 5-HT2C"]
    node_TonickinhibiceVTADAn["Tonická inhibice VTA DA neuronů"]
    node_ZmnnDAsignalizace["Změněná DA signalizace"]
    node_Anhedoniemotivandefi["Anhedonie, motivační deficity"]
    node_SSRIeditingnormaliza["SSRI   editing  normalizace INI/VGV poměru"]
    node_terapeutickinek["terapeutický účinek"]

    node_DepreseRNAeditingVGV --> node_Konstitutivnaktivita
    node_Konstitutivnaktivita --> node_TonickinhibiceVTADAn
    node_TonickinhibiceVTADAn --> node_ZmnnDAsignalizace
    node_ZmnnDAsignalizace --> node_Anhedoniemotivandefi
    node_Anhedoniemotivandefi --> node_SSRIeditingnormaliza
    node_SSRIeditingnormaliza --> node_terapeutickinek
```

<details>
<summary>ASCII verze diagramu</summary>

```
Deprese → ↑ RNA editing → ↑ VGV forma
              │
              ↓
┌─────────────────────────────────────────────────┐
│                                                 │
│   ↓ Konstitutivní aktivita 5-HT2C              │
│              │                                  │
│              ↓                                  │
│   ↓ Tonická inhibice VTA DA neuronů            │
│              │                                  │
│              ↓                                  │
│   Změněná DA signalizace                       │
│              │                                  │
│              ↓                                  │
│   Anhedonie, motivační deficity                │
│                                                 │
└─────────────────────────────────────────────────┘

SSRI → ↓ editing → normalizace INI/VGV poměru
     → terapeutický účinek
```

</details>

### Impulzivita a sebevražedné chování

| Parametr | Asociace |
|----------|----------|
| **↑ VGV editovaná forma** | ↑ riziko sebevraždy |
| **↓ INI needitovaná forma** | Deprese, impulzivita |
| **HTR2C polymorfismy** | Variabilní odpověď na SSRI |

---

## Dopaminová regulace

### 5-HT2C inhibice DA systému

```mermaid
flowchart TD
    node_5HT2CaktivacenaGABAe["5-HT2C aktivace na GABAergních neuronech"]
    node_VTA["VTA"]
    node_GABAinterneurony5HT2["GABA interneurony 5-HT2C+"]
    node_AKTIVACE["AKTIVACE"]
    node_GABAuvolnn["GABA uvolnění"]
    node_DAneurony["DA neurony"]
    node_INHIBICE["INHIBICE"]
    node_DAuvolovnNAcPFC["DA uvolňování NAc, PFC"]
    node_5HT2CagonistDAantips["5-HT2C agonisté   DA  antipsychotický potenciál"]
    node_5HT2CantagonistDApro["5-HT2C antagonisté   DA  propsychotický potenciál"]

    node_5HT2CaktivacenaGABAe --> node_VTA
    node_VTA --> node_GABAinterneurony5HT2
    node_GABAinterneurony5HT2 --> node_AKTIVACE
    node_AKTIVACE --> node_GABAuvolnn
    node_GABAuvolnn --> node_DAneurony
    node_DAneurony --> node_INHIBICE
    node_INHIBICE --> node_DAuvolovnNAcPFC
    node_DAuvolovnNAcPFC --> node_5HT2CagonistDAantips
    node_5HT2CagonistDAantips --> node_5HT2CantagonistDApro
```

<details>
<summary>ASCII verze diagramu</summary>

```
5-HT2C aktivace na GABAergních neuronech
                │
                ↓
┌───────────────────────────────────────────────────┐
│                                                   │
│   VTA                                             │
│    │                                              │
│    ↓                                              │
│   GABA interneurony (5-HT2C+)                    │
│    │                                              │
│    ↓ AKTIVACE                                    │
│    │                                              │
│    ↓                                              │
│   ↑ GABA uvolnění                                │
│    │                                              │
│    ↓                                              │
│   DA neurony                                      │
│    │                                              │
│    ↓ INHIBICE                                    │
│    │                                              │
│    ↓                                              │
│   ↓ DA uvolňování (NAc, PFC)                    │
│                                                   │
└───────────────────────────────────────────────────┘

5-HT2C agonisté → ↓ DA → antipsychotický potenciál
5-HT2C antagonisté → ↑ DA → propsychotický potenciál
```

</details>

### Implikace pro závislosti

| Látka | 5-HT2C mechanismus | Efekt |
|-------|-------------------|-------|
| **Kokain** | 5-HT2C aktivace snižuje reward | Potenciální cíl léčby |
| **Amfetaminy** | 5-HT2C modulace DA | Snížení závislostního potenciálu |
| **Nikotin** | 5-HT2C agonisté snižují seeking | Experimentální terapie |

---

## Genetické varianty

### Polymorfismy HTR2C

| SNP | Efekt | Klinická asociace |
|-----|-------|-------------------|
| **Cys23Ser** | rs6318 | Obezita, deprese |
| **-759C/T** | Promotor | Váhový přírůstek na AP |
| **-697G/C** | Promotor | Odpověď na klozapin |

### X-vázaná dědičnost

```mermaid
flowchart TD
    node_HTR2CnachromozomuX["HTR2C na chromozomu X"]
    node_MuiXYHemizygotn["Muži XY: Hemizygotní"]
    node_Pouze1alelaplnexpres["- Pouze 1 alela  plná exprese"]
    node_Variantafenotyp["- Varianta = fenotyp"]
    node_enyXXHeterozygotnmon["Ženy XX: Heterozygotní možné"]
    node_Xinaktivacemozaikovv["- X inaktivace  mozaikový vzorec"]
    node_Variabilnexprese["- Variabilní exprese"]
    node_Implikace["Implikace:"]
    node_Pohlavnrozdlyvodpovd["- Pohlavní rozdíly v odpovědi na léky"]
    node_MuivceovlivnniHTR2Cp["- Muži více ovlivněni HTR2C polymorfismy"]

    node_HTR2CnachromozomuX --> node_MuiXYHemizygotn
    node_MuiXYHemizygotn --> node_Pouze1alelaplnexpres
    node_Pouze1alelaplnexpres --> node_Variantafenotyp
    node_Variantafenotyp --> node_enyXXHeterozygotnmon
    node_enyXXHeterozygotnmon --> node_Xinaktivacemozaikovv
    node_Xinaktivacemozaikovv --> node_Variabilnexprese
    node_Variabilnexprese --> node_Implikace
    node_Implikace --> node_Pohlavnrozdlyvodpovd
    node_Pohlavnrozdlyvodpovd --> node_MuivceovlivnniHTR2Cp
```

<details>
<summary>ASCII verze diagramu</summary>

```
HTR2C na chromozomu X
┌─────────────────────────────────────────────────┐
│                                                 │
│   Muži (XY): Hemizygotní                       │
│   - Pouze 1 alela → plná exprese              │
│   - Varianta = fenotyp                         │
│                                                 │
│   Ženy (XX): Heterozygotní možné               │
│   - X inaktivace → mozaikový vzorec           │
│   - Variabilní exprese                         │
│                                                 │
│   Implikace:                                    │
│   - Pohlavní rozdíly v odpovědi na léky       │
│   - Muži více ovlivněni HTR2C polymorfismy    │
│                                                 │
└─────────────────────────────────────────────────┘
```

</details>

---

## Srovnání 5-HT2 receptorů

| Vlastnost | 5-HT2A | 5-HT2B | **5-HT2C** |
|-----------|--------|--------|------------|
| **G-protein** | Gq/11 | Gq/11 | Gq/11 |
| **Lokalizace** | Kortex | Srdce | Limbický systém |
| **RNA editing** | Ne | Ne | **Ano** |
| **Konstitutivní aktivita** | Nízká | Nízká | **Vysoká** |
| **Hlavní funkce** | Halucinace | Kardiovaskulární | Apetit, nálada |
| **Terapeutický cíl** | Psychedelika | Vyhýbat se | Obezita |

---

## Výzkumné nástroje

### Radioligandy

| Ligand | Typ | Použití |
|--------|-----|---------|
| **[3H]mesulergine** | Antagonista | In vitro vazba |
| **[125I]DOI** | Agonista | Neselektivní 5-HT2 |

### Selektivní nástroje

| Nástroj | Typ | Selektivita |
|---------|-----|-------------|
| **SB-242084** | Antagonista | 100x vs 5-HT2A |
| **WAY-163909** | Agonista | >100x vs 5-HT2A, 5-HT2B |
| **5-HT2C KO myši** | Genetický | Absolutní |

---

## Reference

1. Werry, T.D. et al. (2008). *RNA editing of the serotonin 5HT2C receptor and its effects on cell signalling, pharmacology and brain function*. Pharmacology & Therapeutics.
2. Higgins, G.A. et al. (2020). *Serotonin 5-HT2C receptor-mediated hypophagia*. ACS Chemical Neuroscience.
3. Di Giovanni, G. & De Deurwaerdere, P. (2016). *5-HT2C receptors in neurodegenerative diseases*. Behavioural Brain Research.
4. Martin, C.B. et al. (2014). *RNA splicing and editing modulation of 5-HT2C receptor function*. Neuropharmacology.
5. Heisler, L.K. et al. (2006). *Serotonin reciprocally regulates melanocortin neurons to modulate food intake*. Neuron.

---

Viz také:
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Primární psychedelický cíl
- [5-HT2B receptor](@/receptors/5-ht2b.md) - Kardiovaskulární riziko
- [5-HT1A receptor](@/receptors/5-ht1a.md) - Anxiolytický receptor
- [D2 receptor](@/receptors/d2.md) - Dopaminová regulace
- [Psilocybin](@/alkaloids/psilocybin.md) - 5-HT2C agonista
- [Glosář](@/glossary/_index.md) - Definice pojmů

<- Zpět na [Receptory](@/receptors/_index.md) | [GABA-B receptor](@/receptors/gaba-b.md) ->
