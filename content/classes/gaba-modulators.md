+++
title = "GABA modulatory"
description = "Komplexni klasifikace GABAergních latek - benzodiazepiny, barbituráty, neurosteroidyá, Z-léky, alkohol, klinické profily a farmakologie"
date = 2026-01-30
updated = 2026-01-30
draft = false
weight = 2

[taxonomies]
categories = ["farmakologie", "neurofarmakologie", "klasifikace"]
tags = ["GABA", "benzodiazepiny", "barbituráty", "neurosteroidyá", "Z-léky", "alkohol", "GABA-A", "sedativa", "anxiolytika", "hypnotika"]

[extra]
lead = "GABA modulatory jsou siroka skupina latek pusobicich na GABAergní system - hlavni inhibicni neurotransmiterovy system mozku. Zahrnuji benzodiazepiny, barbituráty, neurosteroidyá, Z-léky a alkohol. Kazda trida ma specificky mechanismus, klinicky profil a bezpecnostni rizika."
complexity = "pokrocila"
reading_time = "35 min"
+++

# GABA modulatory - Komplexni klasifikace

**GABA modulatory** jsou farmakologicky heterogenni skupina latek, ktere zvysuji GABAergní inhibici v centralnim nervovem systemu. Pusobi na [GABA-A receptor](@/receptors/gaba-a.md) nebo [GABA-B receptor](@/receptors/gaba-b.md) prostrednictvim ruznych mechanismu - od prime aktivace az po alosterickou modulaci.

---

## Prehled GABA modulatoru

### Klasifikace podle mechanismu

```mermaid
graph TD
    subgraph "GABA-A receptor - vazebna mista"
        GABAR[GABA-A receptor<br/>α β γ δ podjednotky]

        subgraph "Ortostericke misto"
            ORTH[GABA vazebne misto<br/>α/β interface]
        end

        subgraph "Alostericka mista"
            BZ[BZ site<br/>α/γ interface]
            BARB[Barbiturátový site<br/>β TM domena]
            NEURO[Neurosteroidový site<br/>α/β TM domena]
            ALC[Alkoholova mista<br/>multipočetna]
        end
    end

    subgraph "1. Primy agoniste"
        GABA1[GABA endogenni]
        MUSC[Muscimol<br/>Amanita muscaria]
        THIP[Gaboxadol THIP]

        GABA1 --> ORTH
        MUSC --> ORTH
        THIP --> ORTH
    end

    subgraph "2. Pozitivni alostericke modulatory PAM"
        subgraph "Benzodiazepiny"
            BZ1[Diazepam]
            BZ2[Alprazolam]
            BZ3[Clonazepam]
        end

        subgraph "Barbituráty"
            BARB1[Fenobarbital<br/>dlouhe T1/2]
            BARB2[Thiopental<br/>ultrakratke T1/2]
        end

        subgraph "Neurosteroidyá"
            NEU1[Alopregnanolone<br/>endogenni]
            NEU2[Brexanolone<br/>synteticky]
        end

        subgraph "Z-léky"
            Z1[Zolpidem α1 selektivni]
            Z2[Zopiclon]
        end

        ALCO[Ethanol<br/>multipočetny mechanismus]

        BZ1 --> BZ
        BZ2 --> BZ
        BZ3 --> BZ

        BARB1 --> BARB
        BARB2 --> BARB

        NEU1 --> NEURO
        NEU2 --> NEURO

        Z1 --> BZ
        Z2 --> BZ

        ALCO --> ALC
    end

    subgraph "3. GABA-B agoniste"
        BAC[Baclofen]
        GHB[GHB]
        FEN[Fenibut]

        GABB[GABA-B receptor<br/>Gi/o spojeny]

        BAC --> GABB
        GHB --> GABB
        FEN --> GABB
    end

    subgraph "4. Degradace/reuptake inhibitory"
        VIG[Vigabatrin<br/>GABA-T inhibitor]
        TIA[Tiagabin<br/>GAT-1 inhibitor]

        SYNT[GABA synteza ↑]
        REUPT[GABA reuptake ↓]

        VIG --> SYNT
        TIA --> REUPT
    end

    classDef agonist fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#f8fafc
    classDef modulator fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#f8fafc
    classDef receptor fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#f8fafc
    classDef site fill:#f59e0b,stroke:#d97706,stroke-width:1px

    class GABA1,MUSC,THIP,BAC,GHB,FEN agonist
    class BZ1,BZ2,BZ3,BARB1,BARB2,NEU1,NEU2,Z1,Z2,ALCO,VIG,TIA modulator
    class GABAR,GABB receptor
    class ORTH,BZ,BARB,NEURO,ALC site
```mermaid
flowchart TD
    node_Srovnavaciprehled["### Srovnavaci prehled"]
    node_TridaVazebnemistoMec["Trida | Vazebne misto | Mechanismus | Terapeut. okno | Zavislost | Smrtelne predavkovani"]
    node_19e6a3af["-------|---------------|-------------|----------------|-----------|----------------------"]
    node_Benzodiazepinyinterf["**Benzodiazepiny** | α/γ interface | Frekvence otevirani | Siroke | Stredni | Vzacne samo o sobe"]
    node_BarbiturtyTMdomenaDo["**Barbituráty** | β TM domena | Doba otevreni | **Uzke** | Vysoka | **ANO**"]
    node_NeurosteroidyTMdomen["**Neurosteroidyá** | α/β TM domena | Potenciace + prime | Stredni | Nizka | Nizke riziko"]
    node_Zlky1selektivniBZSed["**Z-léky** | α1 selektivni BZ | Sedace α1 | Stredni | Stredni | Vzacne"]
    node_AlkoholVicemistKompl["**Alkohol** | Vice mist | Komplexni | **Uzke** | Vysoka | **ANO**"]
    node_GHBGABABGHBRAgonismu["**GHB** | GABA-B + GHB-R | Agonismus | **Velmi uzke** | Vysoka | **ANO**"]
    node_KlinickeprofilyGABAm["### Klinicke profily GABA modulatoru"]
    node_TdaPkladyKlinickpoui["Třída | Příklady | Klinické použití"]
    node_8389cb60["-------|----------|------------------"]
    node_BenzodiazepinyDiazep["**Benzodiazepiny** | Diazepam, Alprazolam | Úzkost, nespavost"]
    node_BarbiturtyFenobarbit["**Barbituráty** | Fenobarbital | Epilepsie, anestézie"]
    node_NeurosteroidyAlopreg["**Neurosteroidyá** | Alopregnanolone | Postpartum deprese"]
    node_ZlkyZolpidemZopiclon["**Z-léky** | Zolpidem, Zopiclon | Nespavost"]
    node_AlkoholEthanolRekrea["**Alkohol** | Ethanol | Rekreační"]
    node_Benzodiazepiny["## Benzodiazepiny"]
    node_Mechanismusucinku["### Mechanismus ucinku"]
    node_Benzodiazepinysevazi["Benzodiazepiny se vazi na rozhrani alfa/gamma podjednotek GABA-A receptoru@/receptors/gaba-a.md a zvysuji **frekvenci otevirani chloridoveho kanalu** v odpovedi na GABA."]

    node_Srovnavaciprehled --> node_TridaVazebnemistoMec
    node_TridaVazebnemistoMec --> node_19e6a3af
    node_19e6a3af --> node_Benzodiazepinyinterf
    node_Benzodiazepinyinterf --> node_BarbiturtyTMdomenaDo
    node_BarbiturtyTMdomenaDo --> node_NeurosteroidyTMdomen
    node_NeurosteroidyTMdomen --> node_Zlky1selektivniBZSed
    node_Zlky1selektivniBZSed --> node_AlkoholVicemistKompl
    node_AlkoholVicemistKompl --> node_GHBGABABGHBRAgonismu
    node_GHBGABABGHBRAgonismu --> node_KlinickeprofilyGABAm
    node_KlinickeprofilyGABAm --> node_TdaPkladyKlinickpoui
    node_TdaPkladyKlinickpoui --> node_8389cb60
    node_8389cb60 --> node_BenzodiazepinyDiazep
    node_BenzodiazepinyDiazep --> node_BarbiturtyFenobarbit
    node_BarbiturtyFenobarbit --> node_NeurosteroidyAlopreg
    node_NeurosteroidyAlopreg --> node_ZlkyZolpidemZopiclon
    node_ZlkyZolpidemZopiclon --> node_AlkoholEthanolRekrea
    node_AlkoholEthanolRekrea --> node_Benzodiazepiny
    node_Benzodiazepiny --> node_Mechanismusucinku
    node_Mechanismusucinku --> node_Benzodiazepinysevazi

    click node_GHBGABABGHBRAgonismu "/glossary/gaba/" "**GHB** | GABA-B + GHB-R | Agonismus | **Velmi uzke** | Vysoka | **ANO**"
    click node_KlinickeprofilyGABAm "/glossary/gaba/" "### Klinicke profily GABA modulatoru"
    click node_Benzodiazepinysevazi "/receptors/gaba-a/" "Benzodiazepiny se vazi na rozhrani alfa/gamma podjednotek GABA-A receptoru@/receptors/gaba-a.md a zvysuji **frekvenci otevirani chloridoveho kanalu** v odpovedi na GABA."
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Srovnavaci prehled

| Trida | Vazebne misto | Mechanismus | Terapeut. okno | Zavislost | Smrtelne predavkovani |
|-------|---------------|-------------|----------------|-----------|----------------------|
| **Benzodiazepiny** | α/γ interface | Frekvence otevirani | Siroke | Stredni | Vzacne (samo o sobe) |
| **Barbituráty** | β TM domena | Doba otevreni | **Uzke** | Vysoka | **ANO** |
| **Neurosteroidyá** | α/β TM domena | Potenciace + prime | Stredni | Nizka | Nizke riziko |
| **Z-léky** | α1 selektivni BZ | Sedace (α1) | Stredni | Stredni | Vzacne |
| **Alkohol** | Vice mist | Komplexni | **Uzke** | Vysoka | **ANO** |
| **GHB** | GABA-B + GHB-R | Agonismus | **Velmi uzke** | Vysoka | **ANO** |

### Klinicke profily GABA modulatoru

| Třída | Příklady | Klinické použití |
|-------|----------|------------------|
| **Benzodiazepiny** | Diazepam, Alprazolam | Úzkost, nespavost |
| **Barbituráty** | Fenobarbital | Epilepsie, anestézie |
| **Neurosteroidyá** | Alopregnanolone | Postpartum deprese |
| **Z-léky** | Zolpidem, Zopiclon | Nespavost |
| **Alkohol** | Ethanol | Rekreační |

---

## Benzodiazepiny

### Mechanismus ucinku

Benzodiazepiny se vazi na rozhrani alfa/gamma podjednotek [GABA-A receptoru](@/receptors/gaba-a.md) a zvysuji **frekvenci otevirani chloridoveho kanalu** v odpovedi na GABA.

```

</details>
MECHANISMUS BENZODIAZEPINU

Bez BZ:                    S BZ (napr. Diazepam):

GABA                       GABA + BZ
  |                           |
  v                           v
GABA-A receptor            GABA-A receptor
  |                           |
  v                           v
Otevreni kanalu            Otevreni kanalu
1x za casovou jednotku     3-5x za casovou jednotku
  |                           |
  v                           v
Cl- influx: 10 pA         Cl- influx: 30-50 pA
  |                           |
  v                           v
Mirna inhibice             SILNA inhibice

KLICOVA VLASTNOST:
BZ ZVYSUJI FREKVENCI, NE DOBU otevreni
→ BZ NEMAJI ucinek BEZ GABA (bezpecnostni mechanismus)
→ Existuje strop ucinku ("ceiling effect")
→ Proto jsou BZ bezpecnejsi nez barbituráty
```mermaid
flowchart TD
    node_Subtypovaselektivita["### Subtypova selektivita"]
    node_SubtypGABAAFunkceRel["Subtyp GABA-A | Funkce | Relevance pro BZ"]
    node_e7e4c7d3["----------------|--------|-------------------"]
    node_1Sedaceamnezieantiko["**α1βγ** | Sedace, amnezie, antikonvulze | Zolpidem selektivni"]
    node_2AnxiolyzahlavnicilT["**α2βγ** | **Anxiolyza** hlavni cil | TPA023 vyzkumny"]
    node_3MyorelaxaceCastecne["**α3βγ** | Myorelaxace | Castecne BZ"]
    node_5Pamethippocampus5IA["**α5βγ** | Pamet hippocampus | α5IA inverzni agonista"]
    node_Klasickebenzodiazepi["Klasicke benzodiazepiny jsou **neselektivni** - pusobi na vsechny subtypy α1-3,5  proto maji siroky ucinkovy profil anxiolyza + sedace + amnezie + myorelaxace."]
    node_Kompletniklasifikace["### Kompletni klasifikace benzodiazepinu"]
    node_Podlepolocasurozpadu["#### Podle polocasu rozpadu"]
    node_KategorieT12Priklady["Kategorie | T1/2 | Priklady | Hlavni indikace"]
    node_d7921b56["-----------|------|----------|-----------------"]
    node_Ultrakrtke6hMidazola["**Ultrakrátke** | &lt;6 h | Midazolam, Triazolam | Premedikace, insomnie"]
    node_Krtke612hOxazepamLor["**Krátke** | 6-12 h | Oxazepam, Lorazepam, Alprazolam | Akutni uzkost, panické"]
    node_Stredni1224hBromazep["**Stredni** | 12-24 h | Bromazepam, Nitrazepam | Uzkost, insomnie"]
    node_Dlouhe24hDiazepamClo["**Dlouhe** | &gt;24 h | Diazepam, Clonazepam, Chlordiazepoxid | Epilepsie, abstinence"]
    node_Detailnifarmakologic["#### Detailni farmakologicke profily"]
    node_DIAZEPAMValiumrefere["**DIAZEPAM Valium - referencni benzodiazepin**"]
    node_ParametrHodnota["Parametr | Hodnota"]
    node_bc2198f1["----------|---------"]
    node_Biodostupnost100po["Biodostupnost | ~100% p.o."]
    node_Tmax3090min["Tmax | 30-90 min"]
    node_T1220100hvcetnemetab["T1/2 | 20-100 h vcetne metabolitu"]
    node_AktivnimetabolityDes["Aktivni metabolity | Desmethyldiazepam T1/2: 36-200 h, Oxazepam"]
    node_Vazbanaproteiny98["Vazba na proteiny | 98%"]
    node_MetabolismusCYP3A4CY["Metabolismus | CYP3A4, CYP2C19"]
    node_Potencerelativni1xre["Potence relativni | 1x reference"]
    node_Ekvivalentnidavka10m["Ekvivalentni davka | 10 mg"]

    node_Subtypovaselektivita --> node_SubtypGABAAFunkceRel
    node_SubtypGABAAFunkceRel --> node_e7e4c7d3
    node_e7e4c7d3 --> node_1Sedaceamnezieantiko
    node_1Sedaceamnezieantiko --> node_2AnxiolyzahlavnicilT
    node_2AnxiolyzahlavnicilT --> node_3MyorelaxaceCastecne
    node_3MyorelaxaceCastecne --> node_5Pamethippocampus5IA
    node_5Pamethippocampus5IA --> node_Klasickebenzodiazepi
    node_Klasickebenzodiazepi --> node_Kompletniklasifikace
    node_Kompletniklasifikace --> node_Podlepolocasurozpadu
    node_Podlepolocasurozpadu --> node_KategorieT12Priklady
    node_KategorieT12Priklady --> node_d7921b56
    node_d7921b56 --> node_Ultrakrtke6hMidazola
    node_Ultrakrtke6hMidazola --> node_Krtke612hOxazepamLor
    node_Krtke612hOxazepamLor --> node_Stredni1224hBromazep
    node_Stredni1224hBromazep --> node_Dlouhe24hDiazepamClo
    node_Dlouhe24hDiazepamClo --> node_Detailnifarmakologic
    node_Detailnifarmakologic --> node_DIAZEPAMValiumrefere
    node_DIAZEPAMValiumrefere --> node_ParametrHodnota
    node_ParametrHodnota --> node_bc2198f1
    node_bc2198f1 --> node_Biodostupnost100po
    node_Biodostupnost100po --> node_Tmax3090min
    node_Tmax3090min --> node_T1220100hvcetnemetab
    node_T1220100hvcetnemetab --> node_AktivnimetabolityDes
    node_AktivnimetabolityDes --> node_Vazbanaproteiny98
    node_Vazbanaproteiny98 --> node_MetabolismusCYP3A4CY
    node_MetabolismusCYP3A4CY --> node_Potencerelativni1xre
    node_Potencerelativni1xre --> node_Ekvivalentnidavka10m

    click node_SubtypGABAAFunkceRel "/glossary/gaba/" "Subtyp GABA-A | Funkce | Relevance pro BZ"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Subtypova selektivita

| Subtyp GABA-A | Funkce | Relevance pro BZ |
|----------------|--------|-------------------|
| **α1βγ** | Sedace, amnezie, antikonvulze | Zolpidem selektivni |
| **α2βγ** | **Anxiolyza** (hlavni cil) | TPA023 (vyzkumny) |
| **α3βγ** | Myorelaxace | Castecne BZ |
| **α5βγ** | Pamet (hippocampus) | α5IA (inverzni agonista) |

Klasicke benzodiazepiny jsou **neselektivni** - pusobi na vsechny subtypy α1-3,5 → proto maji siroky ucinkovy profil (anxiolyza + sedace + amnezie + myorelaxace).

### Kompletni klasifikace benzodiazepinu

#### Podle polocasu rozpadu

| Kategorie | T1/2 | Priklady | Hlavni indikace |
|-----------|------|----------|-----------------|
| **Ultrakrátke** | <6 h | Midazolam, Triazolam | Premedikace, insomnie |
| **Krátke** | 6-12 h | Oxazepam, Lorazepam, Alprazolam | Akutni uzkost, panické |
| **Stredni** | 12-24 h | Bromazepam, Nitrazepam | Uzkost, insomnie |
| **Dlouhe** | >24 h | Diazepam, Clonazepam, Chlordiazepoxid | Epilepsie, abstinence |

#### Detailni farmakologicke profily

**DIAZEPAM (Valium) - referencni benzodiazepin**

| Parametr | Hodnota |
|----------|---------|
| Biodostupnost | ~100% (p.o.) |
| Tmax | 30-90 min |
| T1/2 | 20-100 h (vcetne metabolitu) |
| Aktivni metabolity | Desmethyldiazepam (T1/2: 36-200 h), Oxazepam |
| Vazba na proteiny | 98% |
| Metabolismus | CYP3A4, CYP2C19 |
| Potence (relativni) | 1x (reference) |
| Ekvivalentni davka | 10 mg |

```

</details>
METABOLISMUS DIAZEPAMU

Diazepam (T1/2: 20-100 h)
     |
     +--[CYP3A4]--→ Temazepam (T1/2: 8-22 h)
     |                    |
     |                    +--[UGT]--→ Glukuronid (eliminace)
     |
     +--[CYP2C19]--→ Desmethyldiazepam (Nordiazepam)
                         (T1/2: 36-200 h !!!)
                              |
                              +--[CYP3A4]--→ Oxazepam (T1/2: 5-15 h)
                                                  |
                                                  +--[UGT]--→ Glukuronid

VYZNAM: Dlouhe aktivni metabolity → kumulace pri opakovane
davkovani → predlouzena sedace u senioru
```mermaid
flowchart TD
    node_ALPRAZOLAMXanaxkrtce["**ALPRAZOLAM Xanax - krátce pusobici, vysoka potence**"]
    node_ParametrHodnota["Parametr | Hodnota"]
    node_bc2198f1["----------|---------"]
    node_Biodostupnost80100["Biodostupnost | 80-100%"]
    node_Tmax12h["Tmax | 1-2 h"]
    node_T12612h["T1/2 | 6-12 h"]
    node_AktivnimetabolityAlf["Aktivni metabolity | Alfa-hydroxyalprazolam slabe aktivni"]
    node_Potencerelativni20xd["Potence relativni | 20x diazepam"]
    node_Ekvivalentnidavka05m["Ekvivalentni davka | 0.5 mg"]
    node_Zavislostnipotencial["Zavislostni potencial | **Vysoky** rychly nastup, kratky T1/2"]
    node_CLONAZEPAMRivotrildl["**CLONAZEPAM Rivotril - dlouhodoby, antiepilepticky**"]
    node_Biodostupnost90["Biodostupnost | ~90%"]
    node_Tmax14h["Tmax | 1-4 h"]
    node_T121850h["T1/2 | 18-50 h"]
    node_MetabolismusCYP3A4ni["Metabolismus | CYP3A4 nitroredukce, acetylace"]
    node_HlavniindikaceEpilep["Hlavni indikace | Epilepsie, panieka porucha"]
    node_LORAZEPAMTemestastre["**LORAZEPAM Temesta - stredne pusobici, bez aktivnich metabolitu**"]
    node_Tmax2h["Tmax | 2 h"]
    node_T121020h["T1/2 | 10-20 h"]
    node_MetabolismusPrimaglu["Metabolismus | Prima glukuronidace UGT - BEZ CYP"]
    node_AktivnimetabolityZad["Aktivni metabolity | Zadne"]
    node_Potencerelativni10xd["Potence relativni | 10x diazepam"]
    node_Ekvivalentnidavka1mg["Ekvivalentni davka | 1 mg"]
    node_VyhodaBezpecnyujater["Vyhoda | Bezpecny u jaterni insuficience"]
    node_Ekvivalencnitabulkab["### Ekvivalencni tabulka benzodiazepinu"]
    node_BZEkvivalentnidavkam["BZ | Ekvivalentni davka mg | T1/2 h | Nastup | Hlavni indikace"]
    node_0f0c45a0["----|------------------------|----------|--------|-----------------"]
    node_Diazepam1020100Rychl["**Diazepam** | 10 | 20-100 | Rychly | Reference, abstinence"]
    node_Alprazolam05612Rychl["**Alprazolam** | 0.5 | 6-12 | Rychly | Panicka porucha"]
    node_Clonazepam051850Stre["**Clonazepam** | 0.5 | 18-50 | Stredni | Epilepsie, panika"]
    node_Lorazepam11020Stredn["**Lorazepam** | 1 | 10-20 | Stredni | Akutni uzkost, status EP"]
    node_Oxazepam1530515Pomal["**Oxazepam** | 15-30 | 5-15 | Pomaly | Uzkost seniori"]
    node_Bromazepam361220Stre["**Bromazepam** | 3-6 | 12-20 | Stredni | Uzkost"]
    node_Midazolam3751525Velm["**Midazolam** | 3.75 | 1.5-2.5 | Velmi rychly | Premedikace, sedace"]
    node_Nitrazepam5101538Str["**Nitrazepam** | 5-10 | 15-38 | Stredni | Insomnie"]
    node_Flunitrazepam0511826["**Flunitrazepam** | 0.5-1 | 18-26 | Rychly | Insomnie stazeny"]
    node_Chlordiazepoxid25530["**Chlordiazepoxid** | 25 | 5-30 | Stredni | Alkoholova abstinence"]
    node_Klinickepouziti["### Klinicke pouziti"]
    node_IndikacePreferovanyB["Indikace | Preferovany BZ | Duvod"]
    node_8832c512["----------|----------------|-------"]
    node_AkutniuzkostLorazepa["**Akutni uzkost** | Lorazepam, Alprazolam | Rychly nastup"]
    node_PanickaporuchaAlpraz["**Panicka porucha** | Alprazolam, Clonazepam | Vysoka potence"]
    node_Generalizovanauzkost["**Generalizovana uzkost** | Diazepam, Bromazepam | Plynuly ucinek"]
    node_InsomnieNitrazepamMi["**Insomnie** | Nitrazepam, Midazolam | Sedativni profil"]
    node_EpilepsieakutniDiaze["**Epilepsie akutni** | Diazepam i.v., Lorazepam i.v. | Rychla antikonvulze"]
    node_EpilepsiechronickaCl["**Epilepsie chronicka** | Clonazepam, Clobazam | Dlouhodoby ucinek"]
    node_Alkoholovaabstinence["**Alkoholova abstinence** | Diazepam, Chlordiazepoxid | Dlouhy T1/2, krize"]
    node_SpasticitaDiazepamMy["**Spasticita** | Diazepam | Myorelaxacni ucinek"]
    node_PremedikaceMidazolam["**Premedikace** | Midazolam | Amnezie, anxiolyza"]
    node_Nedoucucinkyarizika["### Nežádoucí ucinky a rizika"]
    node_UcinekMechanismussub["Ucinek | Mechanismus | α subtyp | Prevence"]
    node_f04cbc8e["--------|-------------|----------|----------"]
    node_Sedace1aktivace1Nizs["**Sedace** | α1 aktivace | α1 | Nizsi davky, α2/3 selektivni"]
    node_Amnzie1515Nizsidavky["**Amnézie** | α1, α5 | α1, α5 | Nizsi davky"]
    node_Ataxie16CerebellumOp["**Ataxie** | α1, α6 | Cerebellum | Opatrnost u senioru"]
    node_Kognitvndeficit5Hipp["**Kognitívní deficit** | α5 | Hippocampus | Casove omezeni lecby"]
    node_ParadoxnireakceNezna["**Paradoxni reakce** | Nezname | - | Vysazeni"]
    node_RespiracnidepreseKom["**Respiracni deprese** | Kombinace s opioidy | - | **Nekombinovat**"]
    node_ToleranceDownregulac["**Tolerance** | Down-regulace receptoru | Vsechny | Intermitentni davkovani"]
    node_ZavislostNeuroadapta["**Zavislost** | Neuroadaptace | Vsechny | Max 2-4 tydny"]
    node_Barbiturty["## Barbituráty"]
    node_Mechanismusucinku["### Mechanismus ucinku"]
    node_Barbiturtysevazinabe["Barbituráty se vazi na beta transmembrannovou domenu GABA-A receptoru@/receptors/gaba-a.md a **prodluzuji dobu otevreni chloridoveho kanalu**. Na rozdil od benzodiazepinu mohou pri vysokych davkach aktivovat receptor i **BEZ GABA**."]

    node_ALPRAZOLAMXanaxkrtce --> node_ParametrHodnota
    node_ParametrHodnota --> node_bc2198f1
    node_bc2198f1 --> node_Biodostupnost80100
    node_Biodostupnost80100 --> node_Tmax12h
    node_Tmax12h --> node_T12612h
    node_T12612h --> node_AktivnimetabolityAlf
    node_AktivnimetabolityAlf --> node_Potencerelativni20xd
    node_Potencerelativni20xd --> node_Ekvivalentnidavka05m
    node_Ekvivalentnidavka05m --> node_Zavislostnipotencial
    node_Zavislostnipotencial --> node_CLONAZEPAMRivotrildl
    node_CLONAZEPAMRivotrildl --> node_Biodostupnost90
    node_Biodostupnost90 --> node_Tmax14h
    node_Tmax14h --> node_T121850h
    node_T121850h --> node_MetabolismusCYP3A4ni
    node_MetabolismusCYP3A4ni --> node_HlavniindikaceEpilep
    node_HlavniindikaceEpilep --> node_LORAZEPAMTemestastre
    node_LORAZEPAMTemestastre --> node_Tmax2h
    node_Tmax2h --> node_T121020h
    node_T121020h --> node_MetabolismusPrimaglu
    node_MetabolismusPrimaglu --> node_AktivnimetabolityZad
    node_AktivnimetabolityZad --> node_Potencerelativni10xd
    node_Potencerelativni10xd --> node_Ekvivalentnidavka1mg
    node_Ekvivalentnidavka1mg --> node_VyhodaBezpecnyujater
    node_VyhodaBezpecnyujater --> node_Ekvivalencnitabulkab
    node_Ekvivalencnitabulkab --> node_BZEkvivalentnidavkam
    node_BZEkvivalentnidavkam --> node_0f0c45a0
    node_0f0c45a0 --> node_Diazepam1020100Rychl
    node_Diazepam1020100Rychl --> node_Alprazolam05612Rychl
    node_Alprazolam05612Rychl --> node_Clonazepam051850Stre
    node_Clonazepam051850Stre --> node_Lorazepam11020Stredn
    node_Lorazepam11020Stredn --> node_Oxazepam1530515Pomal
    node_Oxazepam1530515Pomal --> node_Bromazepam361220Stre
    node_Bromazepam361220Stre --> node_Midazolam3751525Velm
    node_Midazolam3751525Velm --> node_Nitrazepam5101538Str
    node_Nitrazepam5101538Str --> node_Flunitrazepam0511826
    node_Flunitrazepam0511826 --> node_Chlordiazepoxid25530
    node_Chlordiazepoxid25530 --> node_Klinickepouziti
    node_Klinickepouziti --> node_IndikacePreferovanyB
    node_IndikacePreferovanyB --> node_8832c512
    node_8832c512 --> node_AkutniuzkostLorazepa
    node_AkutniuzkostLorazepa --> node_PanickaporuchaAlpraz
    node_PanickaporuchaAlpraz --> node_Generalizovanauzkost
    node_Generalizovanauzkost --> node_InsomnieNitrazepamMi
    node_InsomnieNitrazepamMi --> node_EpilepsieakutniDiaze
    node_EpilepsieakutniDiaze --> node_EpilepsiechronickaCl
    node_EpilepsiechronickaCl --> node_Alkoholovaabstinence
    node_Alkoholovaabstinence --> node_SpasticitaDiazepamMy
    node_SpasticitaDiazepamMy --> node_PremedikaceMidazolam
    node_PremedikaceMidazolam --> node_Nedoucucinkyarizika
    node_Nedoucucinkyarizika --> node_UcinekMechanismussub
    node_UcinekMechanismussub --> node_f04cbc8e
    node_f04cbc8e --> node_Sedace1aktivace1Nizs
    node_Sedace1aktivace1Nizs --> node_Amnzie1515Nizsidavky
    node_Amnzie1515Nizsidavky --> node_Ataxie16CerebellumOp
    node_Ataxie16CerebellumOp --> node_Kognitvndeficit5Hipp
    node_Kognitvndeficit5Hipp --> node_ParadoxnireakceNezna
    node_ParadoxnireakceNezna --> node_RespiracnidepreseKom
    node_RespiracnidepreseKom --> node_ToleranceDownregulac
    node_ToleranceDownregulac --> node_ZavislostNeuroadapta
    node_ZavislostNeuroadapta --> node_Barbiturty
    node_Barbiturty --> node_Mechanismusucinku
    node_Mechanismusucinku --> node_Barbiturtysevazinabe

    click node_Barbiturtysevazinabe "/receptors/gaba-a/" "Barbituráty se vazi na beta transmembrannovou domenu GABA-A receptoru@/receptors/gaba-a.md a **prodluzuji dobu otevreni chloridoveho kanalu**. Na rozdil od benzodiazepinu mohou pri vysokych davkach aktivovat receptor i **BEZ GABA**."
```

<details>
<summary>ASCII verze diagramu</summary>

```
**ALPRAZOLAM (Xanax) - krátce pusobici, vysoka potence**

| Parametr | Hodnota |
|----------|---------|
| Biodostupnost | 80-100% |
| Tmax | 1-2 h |
| T1/2 | 6-12 h |
| Aktivni metabolity | Alfa-hydroxyalprazolam (slabe aktivni) |
| Potence (relativni) | 20x diazepam |
| Ekvivalentni davka | 0.5 mg |
| Zavislostni potencial | **Vysoky** (rychly nastup, kratky T1/2) |

**CLONAZEPAM (Rivotril) - dlouhodoby, antiepilepticky**

| Parametr | Hodnota |
|----------|---------|
| Biodostupnost | ~90% |
| Tmax | 1-4 h |
| T1/2 | 18-50 h |
| Metabolismus | CYP3A4 (nitroredukce, acetylace) |
| Potence (relativni) | 20x diazepam |
| Ekvivalentni davka | 0.5 mg |
| Hlavni indikace | Epilepsie, panieka porucha |

**LORAZEPAM (Temesta) - stredne pusobici, bez aktivnich metabolitu**

| Parametr | Hodnota |
|----------|---------|
| Biodostupnost | ~90% |
| Tmax | 2 h |
| T1/2 | 10-20 h |
| Metabolismus | Prima glukuronidace (UGT) - BEZ CYP |
| Aktivni metabolity | Zadne |
| Potence (relativni) | 10x diazepam |
| Ekvivalentni davka | 1 mg |
| Vyhoda | Bezpecny u jaterni insuficience |

### Ekvivalencni tabulka benzodiazepinu

| BZ | Ekvivalentni davka (mg) | T1/2 (h) | Nastup | Hlavni indikace |
|----|------------------------|----------|--------|-----------------|
| **Diazepam** | 10 | 20-100 | Rychly | Reference, abstinence |
| **Alprazolam** | 0.5 | 6-12 | Rychly | Panicka porucha |
| **Clonazepam** | 0.5 | 18-50 | Stredni | Epilepsie, panika |
| **Lorazepam** | 1 | 10-20 | Stredni | Akutni uzkost, status EP |
| **Oxazepam** | 15-30 | 5-15 | Pomaly | Uzkost (seniori) |
| **Bromazepam** | 3-6 | 12-20 | Stredni | Uzkost |
| **Midazolam** | 3.75 | 1.5-2.5 | Velmi rychly | Premedikace, sedace |
| **Nitrazepam** | 5-10 | 15-38 | Stredni | Insomnie |
| **Flunitrazepam** | 0.5-1 | 18-26 | Rychly | Insomnie (stazeny) |
| **Chlordiazepoxid** | 25 | 5-30 | Stredni | Alkoholova abstinence |

### Klinicke pouziti

| Indikace | Preferovany BZ | Duvod |
|----------|----------------|-------|
| **Akutni uzkost** | Lorazepam, Alprazolam | Rychly nastup |
| **Panicka porucha** | Alprazolam, Clonazepam | Vysoka potence |
| **Generalizovana uzkost** | Diazepam, Bromazepam | Plynuly ucinek |
| **Insomnie** | Nitrazepam, Midazolam | Sedativni profil |
| **Epilepsie (akutni)** | Diazepam i.v., Lorazepam i.v. | Rychla antikonvulze |
| **Epilepsie (chronicka)** | Clonazepam, Clobazam | Dlouhodoby ucinek |
| **Alkoholova abstinence** | Diazepam, Chlordiazepoxid | Dlouhy T1/2, krize |
| **Spasticita** | Diazepam | Myorelaxacni ucinek |
| **Premedikace** | Midazolam | Amnezie, anxiolyza |

### Nežádoucí ucinky a rizika

| Ucinek | Mechanismus | α subtyp | Prevence |
|--------|-------------|----------|----------|
| **Sedace** | α1 aktivace | α1 | Nizsi davky, α2/3 selektivni |
| **Amnézie** | α1, α5 | α1, α5 | Nizsi davky |
| **Ataxie** | α1, α6 | Cerebellum | Opatrnost u senioru |
| **Kognitívní deficit** | α5 | Hippocampus | Casove omezeni lecby |
| **Paradoxni reakce** | Nezname | - | Vysazeni |
| **Respiracni deprese** | Kombinace s opioidy | - | **Nekombinovat** |
| **Tolerance** | Down-regulace receptoru | Vsechny | Intermitentni davkovani |
| **Zavislost** | Neuroadaptace | Vsechny | Max 2-4 tydny |

---

## Barbituráty

### Mechanismus ucinku

Barbituráty se vazi na beta transmembrannovou domenu [GABA-A receptoru](@/receptors/gaba-a.md) a **prodluzuji dobu otevreni chloridoveho kanalu**. Na rozdil od benzodiazepinu mohou pri vysokych davkach aktivovat receptor i **BEZ GABA**.

```

</details>
MECHANISMUS BARBITURÁTU

Nizke davky:                  Vysoke davky:

GABA + Barbiturát              Barbiturát (samotny)
     |                              |
     v                              v
GABA-A receptor                GABA-A receptor
     |                              |
     v                              v
Prodlouzena doba otevreni     PRIME otevreni kanalu
(2 ms → 10-20 ms)            BEZ GABA
     |                              |
     v                              v
Zesílena inhibice              NEKONTROLOVANA inhibice
     |                              |
     v                              v
Terapeuticky ucinek            PREDAVKOVANI
(sedace, antikonvulze)         (koma, smrt)

KLICOVY ROZDIL OD BZ:
- Barbituráty MOHOU otevrit kanal BEZ GABA
- NEMAJÍ strop ucinku ("no ceiling effect")
- → UZKE terapeuticke okno
- → SMRTELNE predavkovani je mozne
```mermaid
flowchart TD
    node_Klasifikacebarbiturt["### Klasifikace barbiturátu"]
    node_KategorieT12PrikladP["Kategorie | T1/2 | Priklad | Pouziti | Status"]
    node_d25461e4["-----------|------|---------|---------|--------"]
    node_Ultrakrtke30minThiop["**Ultrakrátke** | &lt;30 min | Thiopental, Methohexital | IV anestezie indukce | Aktivni"]
    node_Krtke16hPentobarbita["**Krátke** | 1-6 h | Pentobarbital, Secobarbital | Historicky insomnie | Vetsinou stazeny"]
    node_Stredni612hAmobarbit["**Stredni** | 6-12 h | Amobarbital, Butalbarbital | Historicky sedace | Omezene"]
    node_Dlouhe12100hFenobarb["**Dlouhe** | 12-100+ h | **Fenobarbital**, Primidon | **Epilepsie** | Aktivni"]
    node_Fenobarbitalklinicky["### Fenobarbital - klinicky relevantni barbiturát"]
    node_ParametrHodnota["Parametr | Hodnota"]
    node_bc2198f1["----------|---------"]
    node_Biodostupnost80100po["Biodostupnost | 80-100% p.o."]
    node_Tmax16h["Tmax | 1-6 h"]
    node_T1253118hextremnedlo["T1/2 | **53-118 h** extremne dlouhy"]
    node_MetabolismusCYP2C9ca["Metabolismus | CYP2C9 castecne, renalni exkrece 25%"]
    node_Terapeutickerozmezi1["Terapeuticke rozmezi | 15-40 ug/ml"]
    node_Toxickehladiny40ugml["Toxicke hladiny | &gt;40 ug/ml"]
    node_Letalnihladiny80ugml["Letalni hladiny | &gt;80 ug/ml"]
    node_HlavniindikaceEpilep["Hlavni indikace | Epilepsie, status epilepticus, neonatalni krecě"]
    node_IndukcniefektSilnyCY["Indukcni efekt | **Silny CYP induktor** CYP3A4, CYP2C, CYP1A2"]
    node_Barbiturtyklinickabe["### Barbituráty - klinicka bezpecnost"]
    node_AspektHodnoceni["Aspekt | Hodnoceni"]
    node_60fd7e2b["--------|-----------"]
    node_TerapeutickeoknoUzke["Terapeuticke okno | **Uzke** letalni davka = 5-10x terapeuticka"]
    node_PredavkovaniPotencia["Predavkovani | Potencialne smrtelne respiracni deprese"]
    node_AntidotumNeexistujep["Antidotum | **Neexistuje** podpurna pece"]
    node_ToleranceRychlaavyzn["Tolerance | Rychla a vyznamna"]
    node_ZavislostVysoka["Zavislost | **Vysoka**"]
    node_AbstinennsyndromZivo["Abstinenční syndrom | **Zivot ohrozujici** krecě, delirium"]
    node_SoucasnystatusVetsin["Soucasny status | Vetsinou nahrazeny BZ a novejsimi leky"]
    node_Neurosteroidy["## Neurosteroidyá"]
    node_Definiceapuvod["### Definice a puvod"]
    node_Neurosteroidyjsouste["Neurosteroidyá jsou steroidni slouceniny syntetizovane v CNS nebo periferii, ktere moduluji GABA-A receptor@/receptors/gaba-a.md. Pusobi na transmembrannove domeny α/β podjednotek."]

    node_Klasifikacebarbiturt --> node_KategorieT12PrikladP
    node_KategorieT12PrikladP --> node_d25461e4
    node_d25461e4 --> node_Ultrakrtke30minThiop
    node_Ultrakrtke30minThiop --> node_Krtke16hPentobarbita
    node_Krtke16hPentobarbita --> node_Stredni612hAmobarbit
    node_Stredni612hAmobarbit --> node_Dlouhe12100hFenobarb
    node_Dlouhe12100hFenobarb --> node_Fenobarbitalklinicky
    node_Fenobarbitalklinicky --> node_ParametrHodnota
    node_ParametrHodnota --> node_bc2198f1
    node_bc2198f1 --> node_Biodostupnost80100po
    node_Biodostupnost80100po --> node_Tmax16h
    node_Tmax16h --> node_T1253118hextremnedlo
    node_T1253118hextremnedlo --> node_MetabolismusCYP2C9ca
    node_MetabolismusCYP2C9ca --> node_Terapeutickerozmezi1
    node_Terapeutickerozmezi1 --> node_Toxickehladiny40ugml
    node_Toxickehladiny40ugml --> node_Letalnihladiny80ugml
    node_Letalnihladiny80ugml --> node_HlavniindikaceEpilep
    node_HlavniindikaceEpilep --> node_IndukcniefektSilnyCY
    node_IndukcniefektSilnyCY --> node_Barbiturtyklinickabe
    node_Barbiturtyklinickabe --> node_AspektHodnoceni
    node_AspektHodnoceni --> node_60fd7e2b
    node_60fd7e2b --> node_TerapeutickeoknoUzke
    node_TerapeutickeoknoUzke --> node_PredavkovaniPotencia
    node_PredavkovaniPotencia --> node_AntidotumNeexistujep
    node_AntidotumNeexistujep --> node_ToleranceRychlaavyzn
    node_ToleranceRychlaavyzn --> node_ZavislostVysoka
    node_ZavislostVysoka --> node_AbstinennsyndromZivo
    node_AbstinennsyndromZivo --> node_SoucasnystatusVetsin
    node_SoucasnystatusVetsin --> node_Neurosteroidy
    node_Neurosteroidy --> node_Definiceapuvod
    node_Definiceapuvod --> node_Neurosteroidyjsouste

    click node_Neurosteroidyjsouste "/receptors/gaba-a/" "Neurosteroidyá jsou steroidni slouceniny syntetizovane v CNS nebo periferii, ktere moduluji GABA-A receptor@/receptors/gaba-a.md. Pusobi na transmembrannove domeny α/β podjednotek."
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Klasifikace barbiturátu

| Kategorie | T1/2 | Priklad | Pouziti | Status |
|-----------|------|---------|---------|--------|
| **Ultrakrátke** | <30 min | Thiopental, Methohexital | IV anestezie (indukce) | Aktivni |
| **Krátke** | 1-6 h | Pentobarbital, Secobarbital | Historicky insomnie | Vetsinou stazeny |
| **Stredni** | 6-12 h | Amobarbital, Butalbarbital | Historicky sedace | Omezene |
| **Dlouhe** | 12-100+ h | **Fenobarbital**, Primidon | **Epilepsie** | Aktivni |

### Fenobarbital - klinicky relevantni barbiturát

| Parametr | Hodnota |
|----------|---------|
| Biodostupnost | 80-100% (p.o.) |
| Tmax | 1-6 h |
| T1/2 | **53-118 h** (extremne dlouhy) |
| Metabolismus | CYP2C9 (castecne), renalni exkrece (25%) |
| Terapeuticke rozmezi | 15-40 ug/ml |
| Toxicke hladiny | >40 ug/ml |
| Letalni hladiny | >80 ug/ml |
| Hlavni indikace | Epilepsie, status epilepticus, neonatalni krecě |
| Indukcni efekt | **Silny CYP induktor** (CYP3A4, CYP2C, CYP1A2) |

### Barbituráty - klinicka bezpecnost

| Aspekt | Hodnoceni |
|--------|-----------|
| Terapeuticke okno | **Uzke** (letalni davka = 5-10x terapeuticka) |
| Predavkovani | Potencialne smrtelne (respiracni deprese) |
| Antidotum | **Neexistuje** (podpurna pece) |
| Tolerance | Rychla a vyznamna |
| Zavislost | **Vysoka** |
| Abstinenční syndrom | **Zivot ohrozujici** (krecě, delirium) |
| Soucasny status | Vetsinou nahrazeny BZ a novejsimi leky |

---

## Neurosteroidyá

### Definice a puvod

Neurosteroidyá jsou steroidni slouceniny syntetizovane v CNS nebo periferii, ktere moduluji [GABA-A receptor](@/receptors/gaba-a.md). Pusobi na transmembrannove domeny α/β podjednotek.

```

</details>
BIOSYNTEZA NEUROSTEROIDU

Cholesterol
     |
     v [CYP11A1 (P450scc)]
Pregnenolon
     |
     +--[3α-HSD]--→ Alopregnanolone (3α,5α-THP)
     |                    |
     |                    └──→ GABA-A PAM (nejvyznamnejsi)
     |
     +--[5α-reduktáza]--→ 5α-DHP
     |                        |
     |                        └──→ [3α-HSD] → Alopregnanolone
     |
     v
Progesteron
     |
     +--[5α-reduktáza]--→ 5α-Dihydroprogesteron
     |                        |
     |                        └──→ [3α-HSD] → Alopregnanolone
     |
     v
Deoxycorticosteron
     |
     +--[5α-reduktáza + 3α-HSD]--→ THDOC
                                        |
                                        └──→ GABA-A PAM

LOKALIZACE SYNTEZY:
- CNS (astrocyty, neurony)
- Nadledviny
- Gonady
- Placenta
```mermaid
flowchart TD
    node_Hlavnineurosteroidya["### Hlavni neurosteroidyá a jejich farmakologie"]
    node_NeurosteroidTypZdroj["Neurosteroid | Typ | Zdroj | Funkce | Ki GABA-A"]
    node_1a6a446a["--------------|-----|-------|--------|-----------"]
    node_Alopregnanolone35THP["**Alopregnanolone 3α,5α-THP** | PAM | Endogenni progesteron | Anxiolyza, sedace | ~30 nM"]
    node_THDOCPAMEndogenniDOC["**THDOC** | PAM | Endogenni DOC | Stresoprotekce | ~50 nM"]
    node_PregnanolonePAMEndog["**Pregnanolone** | PAM | Endogenni | Sedace | ~100 nM"]
    node_DHEASNAMEndogenniPro["**DHEA-S** | NAM | Endogenni | Proexcitacni | ~1 uM"]
    node_PregnenolonsulfatNAM["**Pregnenolon sulfat** | NAM | Endogenni | Proexcitacni, NMDA PAM | ~1 uM"]
    node_PAMpozitivnialosteri["*PAM = pozitivni alostericky modulator, NAM = negativni alostericky modulator*"]
    node_Klinickyvyuzivaneneu["### Klinicky vyuzivane neurosteroidyá"]
    node_BREXANOLONEZulressop["**BREXANOLONE Zulresso - postpartum deprese**"]
    node_ParametrHodnota["Parametr | Hodnota"]
    node_bc2198f1["----------|---------"]
    node_UcinnlatkaSynteticky["Ucinná latka | Synteticky alopregnanolone"]
    node_IndikacePostpartumde["Indikace | **Postpartum deprese** FDA 2019"]
    node_PodaniIVinfuze60hodi["Podani | IV infuze 60 hodin"]
    node_MechanismusGABAAPAMr["Mechanismus | GABA-A PAM  rapidni antidepresivni ucinek"]
    node_Efektivita75response["Efektivita | 75% response rate v 24 h"]
    node_OmezeniPouzevcertifi["Omezeni | Pouze v certifikovanych centrech REMS"]
    node_Cena34000zalecbu["Cena | ~$34,000 za lecbu"]
    node_GANAXOLONEZtalmyepil["**GANAXOLONE Ztalmy - epilepsie**"]
    node_Ucinnlatka3methylova["Ucinná latka | 3β-methylovany alopregnanolone"]
    node_IndikaceCDKL5deficie["Indikace | **CDKL5 deficiency disorder** FDA 2022"]
    node_PodaniPeroralnisuspe["Podani | Peroralni suspenze"]
    node_MechanismusGABAAPAMs["Mechanismus | GABA-A PAM synapticke i extrasynapticke"]
    node_VyhodaPeroralnimetab["Vyhoda | Peroralni, metabolicky stabilni"]
    node_ZURANOLONEZurzuvaepo["**ZURANOLONE Zurzuvae - postpartum a MDD**"]
    node_UcinnlatkaSynteticky["Ucinná latka | Synteticky neurosteroid"]
    node_IndikacePostpartumde["Indikace | **Postpartum deprese** FDA 2023, MDD"]
    node_PodaniPeroralni14dni["Podani | **Peroralni** 14 dni"]
    node_VyhodaPeroralnikratk["Vyhoda | Peroralni, kratky lecebny kurz"]
    node_EfektivitaSignifikan["Efektivita | Signifikantni vs placebo v den 15"]
    node_Neurosteroidyvreprod["### Neurosteroidyá v reprodukci a stresu"]

    node_Hlavnineurosteroidya --> node_NeurosteroidTypZdroj
    node_NeurosteroidTypZdroj --> node_1a6a446a
    node_1a6a446a --> node_Alopregnanolone35THP
    node_Alopregnanolone35THP --> node_THDOCPAMEndogenniDOC
    node_THDOCPAMEndogenniDOC --> node_PregnanolonePAMEndog
    node_PregnanolonePAMEndog --> node_DHEASNAMEndogenniPro
    node_DHEASNAMEndogenniPro --> node_PregnenolonsulfatNAM
    node_PregnenolonsulfatNAM --> node_PAMpozitivnialosteri
    node_PAMpozitivnialosteri --> node_Klinickyvyuzivaneneu
    node_Klinickyvyuzivaneneu --> node_BREXANOLONEZulressop
    node_BREXANOLONEZulressop --> node_ParametrHodnota
    node_ParametrHodnota --> node_bc2198f1
    node_bc2198f1 --> node_UcinnlatkaSynteticky
    node_UcinnlatkaSynteticky --> node_IndikacePostpartumde
    node_IndikacePostpartumde --> node_PodaniIVinfuze60hodi
    node_PodaniIVinfuze60hodi --> node_MechanismusGABAAPAMr
    node_MechanismusGABAAPAMr --> node_Efektivita75response
    node_Efektivita75response --> node_OmezeniPouzevcertifi
    node_OmezeniPouzevcertifi --> node_Cena34000zalecbu
    node_Cena34000zalecbu --> node_GANAXOLONEZtalmyepil
    node_GANAXOLONEZtalmyepil --> node_Ucinnlatka3methylova
    node_Ucinnlatka3methylova --> node_IndikaceCDKL5deficie
    node_IndikaceCDKL5deficie --> node_PodaniPeroralnisuspe
    node_PodaniPeroralnisuspe --> node_MechanismusGABAAPAMs
    node_MechanismusGABAAPAMs --> node_VyhodaPeroralnimetab
    node_VyhodaPeroralnimetab --> node_ZURANOLONEZurzuvaepo
    node_ZURANOLONEZurzuvaepo --> node_UcinnlatkaSynteticky
    node_UcinnlatkaSynteticky --> node_IndikacePostpartumde
    node_IndikacePostpartumde --> node_PodaniPeroralni14dni
    node_PodaniPeroralni14dni --> node_VyhodaPeroralnikratk
    node_VyhodaPeroralnikratk --> node_EfektivitaSignifikan
    node_EfektivitaSignifikan --> node_Neurosteroidyvreprod

    click node_NeurosteroidTypZdroj "/glossary/gaba/" "Neurosteroid | Typ | Zdroj | Funkce | Ki GABA-A"
    click node_MechanismusGABAAPAMr "/glossary/gaba/" "Mechanismus | GABA-A PAM  rapidni antidepresivni ucinek"
    click node_MechanismusGABAAPAMs "/glossary/gaba/" "Mechanismus | GABA-A PAM synapticke i extrasynapticke"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Hlavni neurosteroidyá a jejich farmakologie

| Neurosteroid | Typ | Zdroj | Funkce | Ki GABA-A |
|--------------|-----|-------|--------|-----------|
| **Alopregnanolone (3α,5α-THP)** | PAM | Endogenni (progesteron) | Anxiolyza, sedace | ~30 nM |
| **THDOC** | PAM | Endogenni (DOC) | Stresoprotekce | ~50 nM |
| **Pregnanolone** | PAM | Endogenni | Sedace | ~100 nM |
| **DHEA-S** | NAM | Endogenni | Proexcitacni | ~1 uM |
| **Pregnenolon sulfat** | NAM | Endogenni | Proexcitacni, NMDA PAM | ~1 uM |

*PAM = pozitivni alostericky modulator, NAM = negativni alostericky modulator*

### Klinicky vyuzivane neurosteroidyá

**BREXANOLONE (Zulresso) - postpartum deprese**

| Parametr | Hodnota |
|----------|---------|
| Ucinná latka | Synteticky alopregnanolone |
| Indikace | **Postpartum deprese** (FDA 2019) |
| Podani | IV infuze (60 hodin) |
| Mechanismus | GABA-A PAM → rapidni antidepresivni ucinek |
| Efektivita | 75% response rate v 24 h |
| Omezeni | Pouze v certifikovanych centrech (REMS) |
| Cena | ~$34,000 za lecbu |

**GANAXOLONE (Ztalmy) - epilepsie**

| Parametr | Hodnota |
|----------|---------|
| Ucinná latka | 3β-methylovany alopregnanolone |
| Indikace | **CDKL5 deficiency disorder** (FDA 2022) |
| Podani | Peroralni suspenze |
| Mechanismus | GABA-A PAM (synapticke i extrasynapticke) |
| Vyhoda | Peroralni, metabolicky stabilni |

**ZURANOLONE (Zurzuvae) - postpartum a MDD**

| Parametr | Hodnota |
|----------|---------|
| Ucinná latka | Synteticky neurosteroid |
| Indikace | **Postpartum deprese** (FDA 2023), MDD |
| Podani | **Peroralni** (14 dni) |
| Mechanismus | GABA-A PAM (synapticke i extrasynapticke) |
| Vyhoda | Peroralni, kratky lecebny kurz |
| Efektivita | Signifikantni vs placebo v den 15 |

### Neurosteroidyá v reprodukci a stresu

```

</details>
NEUROSTEROIDYÁ A REPRODUKCNI CYKLUS

MENSTRUACNI CYKLUS:
├── Lutealní fáze: Progesteron ↑ → Alopregnanolone ↑ → Anxiolyza
├── Premenstrualni faze: Progesteron ↓ → Alopregnanolone ↓ → PMS/PMDD
└── Terapie PMDD: Neurosteroidová modulace

TEHOTENSTVI:
├── Progesteron ↑↑↑ → Alopregnanolone ↑↑↑
├── 3. trimestr: 10-100x vyssi hladiny nez ne-gravídní
├── Porod: Prudky pokles → Postpartum deprese
└── Brexanolone: Nahradi deficitní neurosteroid

STRES:
├── Akutni stres: CRH → ACTH → DOC → THDOC ↑
│   → Stresoprotektivni GABAergní modulace
└── Chronicky stres: Deplece neurosteroidu
    → Snizena inhibice → Uzkost, deprese
```mermaid
flowchart TD
    node_Zlkynebenzodiazepino["## Z-léky nebenzodiazepinova hypnotika"]
    node_Mechanismusucinku["### Mechanismus ucinku"]
    node_Zlkynazevodvozenodpi["Z-léky nazev odvozen od pismena Z na zacatku generickych nazvu jsou strukturne odlisne od benzodiazepinu, ale pusobi na stejne vazebne misto BZ site. Klicovym rozdilem je **selektivita pro α1 subtyp**  prevazne sedativni/hypnoticky ucinek."]

    node_Zlkynebenzodiazepino --> node_Mechanismusucinku
    node_Mechanismusucinku --> node_Zlkynazevodvozenodpi
```

<details>
<summary>ASCII verze diagramu</summary>

```
---

## Z-léky (nebenzodiazepinova hypnotika)

### Mechanismus ucinku

Z-léky (nazev odvozen od pismena Z na zacatku generickych nazvu) jsou strukturne odlisne od benzodiazepinu, ale pusobi na stejne vazebne misto (BZ site). Klicovym rozdilem je **selektivita pro α1 subtyp** → prevazne sedativni/hypnoticky ucinek.

```

</details>
SELEKTIVITA Z-LÉKU vs BZ

BENZODIAZEPIN (neselektivni):
α1: ++++ (sedace)
α2: ++++ (anxiolyza)
α3: ++++ (myorelaxace)
α5: ++++ (amnezie)
→ Siroky ucinkovy profil

ZOLPIDEM (α1-selektivni):
α1: ++++ (sedace)
α2: +    (minimalni anxiolyza)
α3: +    (minimalni myorelaxace)
α5: +    (minimalni amnezie)
→ Prevazne hypnoticky ucinek
→ Mensi myorelaxace a amnezie
→ MENSI zavislostni potencial (teoreticky)
```mermaid
flowchart TD
    node_Farmakologickeprofil["### Farmakologicke profily Z-léku"]
    node_ZOLPIDEMStilnoxAmbie["**ZOLPIDEM Stilnox, Ambien**"]
    node_ParametrHodnota["Parametr | Hodnota"]
    node_bc2198f1["----------|---------"]
    node_ChemickatridaImidazo["Chemicka trida | Imidazopyridin"]
    node_Selektivita1235["Selektivita | α1 &gt;&gt; α2, α3, α5"]
    node_Biodostupnost70po["Biodostupnost | 70% p.o."]
    node_Tmax16h["Tmax | 1.6 h"]
    node_T1225hvelmikratky["T1/2 | **2.5 h** velmi kratky"]
    node_MetabolismusCYP3A4hl["Metabolismus | CYP3A4 hlavni, CYP1A2"]
    node_Davkovani510mgpredsp["Davkovani | 5-10 mg pred spankem"]
    node_ZvlastnostiKomplexni["Zvlastnosti | Komplexni spankove chovani somnambulismus"]
    node_ForensnivyznamZolpid["Forensni vyznam | 'Zolpidem defense' nekontrolovane jednani"]
    node_ZOPICLONESZOPICLONIm["**ZOPICLON / ESZOPICLON Imovane / Lunesta**"]
    node_ParametrZopiclonEszo["Parametr | Zopiclon | Eszopiclon"]
    node_a17b8a47["----------|----------|------------"]
    node_ChemickatridaCyklopy["Chemicka trida | Cyklopyrrolon | S-enantiomer zopiclonu"]
    node_Selektivita1ostatnim["Selektivita | α1 &gt; ostatni mensi selektivita nez zolpidem"]
    node_Biodostupnost8080["Biodostupnost | ~80% | ~80%"]
    node_Tmax12h1h["Tmax | 1-2 h | 1 h"]
    node_T123565h6h["T1/2 | 3.5-6.5 h | 6 h"]
    node_Davka37575mg13mg["Davka | 3.75-7.5 mg | 1-3 mg"]
    node_ZvlastnostiKovovachu["Zvlastnosti | Kovova chut casta | Delsi ucinek, lepsi udrzba spanku"]
    node_ZALEPLONSonata["**ZALEPLON Sonata**"]
    node_ChemickatridaPyrazol["Chemicka trida | Pyrazolopyrimidin"]
    node_Selektivita1preferuj["Selektivita | α1 preferujici"]
    node_Biodostupnost30["Biodostupnost | 30%"]
    node_Tmax1h["Tmax | 1 h"]
    node_T121hnejkratsizZlku["T1/2 | **1 h** nejkratsi z Z-léku"]
    node_Davka520mg["Davka | 5-20 mg"]
    node_ZvlastnostiProproble["Zvlastnosti | Pro problemy s usínáním, ne udrzeni spanku"]
    node_SrovnaniZlkusbenzodi["### Srovnani Z-léku s benzodiazepiny"]
    node_ParametrZlkyBZhypnot["Parametr | Z-léky | BZ hypnotika"]
    node_7a5223c1["----------|--------|--------------"]
    node_1selektivitaVysokazo["α1 selektivita | Vysoka zolpidem | Nizka neselektivni"]
    node_MyorelaxaceMinimalni["Myorelaxace | Minimalni | Vyznamna"]
    node_AnxiolyzaMinimalniVy["Anxiolyza | Minimalni | Vyznamna"]
    node_AntikonvulzeMinimaln["Antikonvulze | Minimalni | Vyznamna"]
    node_AmnezieNizsiVyssi["Amnezie | Nizsi | Vyssi"]
    node_ReboundinsomniaNizsi["Rebound insomnia | Nizsi | Vyssi"]
    node_ZavislostNizsialeexi["Zavislost | Nizsi ale existuje! | Vyssi"]
    node_SomnambulismusCaster["Somnambulismus | Casterejsi | Vzacnejsi"]
    node_Alkoholethanol["## Alkohol ethanol"]
    node_MechanismusucinkunaG["### Mechanismus ucinku na GABA-A"]
    node_Ethanoljenejrozsiker["Ethanol je nejrozsikerejsi GABAergní latka na svete. Jeho mechanismus ucinku na GABA-A receptor@/receptors/gaba-a.md je komplexni a zahrnuje vice vazebnych mist."]

    node_Farmakologickeprofil --> node_ZOLPIDEMStilnoxAmbie
    node_ZOLPIDEMStilnoxAmbie --> node_ParametrHodnota
    node_ParametrHodnota --> node_bc2198f1
    node_bc2198f1 --> node_ChemickatridaImidazo
    node_ChemickatridaImidazo --> node_Selektivita1235
    node_Selektivita1235 --> node_Biodostupnost70po
    node_Biodostupnost70po --> node_Tmax16h
    node_Tmax16h --> node_T1225hvelmikratky
    node_T1225hvelmikratky --> node_MetabolismusCYP3A4hl
    node_MetabolismusCYP3A4hl --> node_Davkovani510mgpredsp
    node_Davkovani510mgpredsp --> node_ZvlastnostiKomplexni
    node_ZvlastnostiKomplexni --> node_ForensnivyznamZolpid
    node_ForensnivyznamZolpid --> node_ZOPICLONESZOPICLONIm
    node_ZOPICLONESZOPICLONIm --> node_ParametrZopiclonEszo
    node_ParametrZopiclonEszo --> node_a17b8a47
    node_a17b8a47 --> node_ChemickatridaCyklopy
    node_ChemickatridaCyklopy --> node_Selektivita1ostatnim
    node_Selektivita1ostatnim --> node_Biodostupnost8080
    node_Biodostupnost8080 --> node_Tmax12h1h
    node_Tmax12h1h --> node_T123565h6h
    node_T123565h6h --> node_Davka37575mg13mg
    node_Davka37575mg13mg --> node_ZvlastnostiKovovachu
    node_ZvlastnostiKovovachu --> node_ZALEPLONSonata
    node_ZALEPLONSonata --> node_ChemickatridaPyrazol
    node_ChemickatridaPyrazol --> node_Selektivita1preferuj
    node_Selektivita1preferuj --> node_Biodostupnost30
    node_Biodostupnost30 --> node_Tmax1h
    node_Tmax1h --> node_T121hnejkratsizZlku
    node_T121hnejkratsizZlku --> node_Davka520mg
    node_Davka520mg --> node_ZvlastnostiProproble
    node_ZvlastnostiProproble --> node_SrovnaniZlkusbenzodi
    node_SrovnaniZlkusbenzodi --> node_ParametrZlkyBZhypnot
    node_ParametrZlkyBZhypnot --> node_7a5223c1
    node_7a5223c1 --> node_1selektivitaVysokazo
    node_1selektivitaVysokazo --> node_MyorelaxaceMinimalni
    node_MyorelaxaceMinimalni --> node_AnxiolyzaMinimalniVy
    node_AnxiolyzaMinimalniVy --> node_AntikonvulzeMinimaln
    node_AntikonvulzeMinimaln --> node_AmnezieNizsiVyssi
    node_AmnezieNizsiVyssi --> node_ReboundinsomniaNizsi
    node_ReboundinsomniaNizsi --> node_ZavislostNizsialeexi
    node_ZavislostNizsialeexi --> node_SomnambulismusCaster
    node_SomnambulismusCaster --> node_Alkoholethanol
    node_Alkoholethanol --> node_MechanismusucinkunaG
    node_MechanismusucinkunaG --> node_Ethanoljenejrozsiker

    click node_MechanismusucinkunaG "/glossary/gaba/" "### Mechanismus ucinku na GABA-A"
    click node_Ethanoljenejrozsiker "/receptors/gaba-a/" "Ethanol je nejrozsikerejsi GABAergní latka na svete. Jeho mechanismus ucinku na GABA-A receptor@/receptors/gaba-a.md je komplexni a zahrnuje vice vazebnych mist."
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Farmakologicke profily Z-léku

**ZOLPIDEM (Stilnox, Ambien)**

| Parametr | Hodnota |
|----------|---------|
| Chemicka trida | Imidazopyridin |
| Selektivita | α1 >> α2, α3, α5 |
| Biodostupnost | 70% (p.o.) |
| Tmax | 1.6 h |
| T1/2 | **2.5 h** (velmi kratky) |
| Metabolismus | CYP3A4 (hlavni), CYP1A2 |
| Davkovani | 5-10 mg pred spankem |
| Zvlastnosti | Komplexni spankove chovani (somnambulismus) |
| Forensni vyznam | "Zolpidem defense" (nekontrolovane jednani) |

**ZOPICLON / ESZOPICLON (Imovane / Lunesta)**

| Parametr | Zopiclon | Eszopiclon |
|----------|----------|------------|
| Chemicka trida | Cyklopyrrolon | (S)-enantiomer zopiclonu |
| Selektivita | α1 > ostatni (mensi selektivita nez zolpidem) |
| Biodostupnost | ~80% | ~80% |
| Tmax | 1-2 h | 1 h |
| T1/2 | 3.5-6.5 h | 6 h |
| Davka | 3.75-7.5 mg | 1-3 mg |
| Zvlastnosti | Kovova chut (casta) | Delsi ucinek, lepsi udrzba spanku |

**ZALEPLON (Sonata)**

| Parametr | Hodnota |
|----------|---------|
| Chemicka trida | Pyrazolopyrimidin |
| Selektivita | α1 preferujici |
| Biodostupnost | 30% |
| Tmax | 1 h |
| T1/2 | **1 h** (nejkratsi z Z-léku) |
| Davka | 5-20 mg |
| Zvlastnosti | Pro problemy s usínáním, ne udrzeni spanku |

### Srovnani Z-léku s benzodiazepiny

| Parametr | Z-léky | BZ hypnotika |
|----------|--------|--------------|
| α1 selektivita | Vysoka (zolpidem) | Nizka (neselektivni) |
| Myorelaxace | Minimalni | Vyznamna |
| Anxiolyza | Minimalni | Vyznamna |
| Antikonvulze | Minimalni | Vyznamna |
| Amnezie | Nizsi | Vyssi |
| Rebound insomnia | Nizsi | Vyssi |
| Zavislost | Nizsi (ale existuje!) | Vyssi |
| Somnambulismus | Casterejsi | Vzacnejsi |

---

## Alkohol (ethanol)

### Mechanismus ucinku na GABA-A

Ethanol je nejrozsikerejsi GABAergní latka na svete. Jeho mechanismus ucinku na [GABA-A receptor](@/receptors/gaba-a.md) je komplexni a zahrnuje vice vazebnych mist.

```

</details>
ETHANOL A GABA-A RECEPTOR

AKUTNI EXPOZICE:
Ethanol
  |
  ├──→ GABA-A receptor (vice mist)
  |     ├── Potenciace GABA odpovedi
  |     ├── Prodlouzeni doby otevreni kanalu
  |     └── Pri vysoke koncentraci: prime otevreni
  |
  ├──→ NMDA receptor (inhibice)
  |     └── Snizeni glutamátergní excitace
  |
  ├──→ Opioidni system (neprime)
  |     └── Beta-endorfin uvolneni
  |
  └──→ Dopaminergni system (neprime)
        └── Zvyseni dopaminu v NAc

CHRONICKA EXPOZICE → NEUROADAPTACE:
├── GABA-A receptory: Down-regulace (mene inhibice)
├── NMDA receptory: Up-regulace (vice excitace)
├── Zmeny podjednotkoveho slozeni:
│   α1 ↓, α4 ↑ (snizena citlivost na BZ)
│   γ2 ↓, δ ↑ (zmena farmakolgie)
└── Vysledek: TOLERANCE + ZAVISLOST

ABSTINENCNI SYNDROM:
├── Snizena GABA inhibice +
├── Zvysena NMDA excitace =
│
├── HYPEREXCITABILNI STAV
│   ├── Tremor, uzkost
│   ├── Tachykardie, hypertenze
│   ├── KRECĚ (potencialne smrtelne)
│   └── Delirium tremens (smrtnost 5-15%)
│
└── LECBA: BZ (substituce GABA modulace)
```mermaid
flowchart TD
    node_Farmakokinetickepara["### Farmakokineticke parametry ethanolu"]
    node_ParametrHodnota["Parametr | Hodnota"]
    node_bc2198f1["----------|---------"]
    node_Biodostupnost80rychl["Biodostupnost | ~80% rychla, kompletni absorpce"]
    node_Tmax3090minnalacnory["Tmax | 30-90 min nalacno rychleji"]
    node_Distribucniobjem0607["Distribucni objem | 0.6-0.7 L/kg celkova telesna voda"]
    node_MetabolismusADHALDHh["Metabolismus | ADH + ALDH hlavni, CYP2E1 chronicky"]
    node_EliminacnikinetikaNu["Eliminacni kinetika | **Nulteho radu** ~0.15 g/L/h"]
    node_Standardninapoj10get["'Standardni napoj' | 10 g ethanolu"]

    node_Farmakokinetickepara --> node_ParametrHodnota
    node_ParametrHodnota --> node_bc2198f1
    node_bc2198f1 --> node_Biodostupnost80rychl
    node_Biodostupnost80rychl --> node_Tmax3090minnalacnory
    node_Tmax3090minnalacnory --> node_Distribucniobjem0607
    node_Distribucniobjem0607 --> node_MetabolismusADHALDHh
    node_MetabolismusADHALDHh --> node_EliminacnikinetikaNu
    node_EliminacnikinetikaNu --> node_Standardninapoj10get
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Farmakokineticke parametry ethanolu

| Parametr | Hodnota |
|----------|---------|
| Biodostupnost | ~80% (rychla, kompletni absorpce) |
| Tmax | 30-90 min (nalacno rychleji) |
| Distribucni objem | 0.6-0.7 L/kg (celkova telesna voda) |
| Metabolismus | ADH + ALDH (hlavni), CYP2E1 (chronicky) |
| Eliminacni kinetika | **Nulteho radu** (~0.15 g/L/h) |
| "Standardni napoj" | 10 g ethanolu |

```

</details>
METABOLISMUS ETHANOLU

Ethanol (CH3CH2OH)
     |
     | [Alkoholdehydrogenáza (ADH)]  ← Hlavni cesta (90%)
     | [NAD+ → NADH]
     |
     v
Acetaldehyd (CH3CHO)  ← TOXICKY metabolit
     |
     | [Aldehyddehydrogenáza (ALDH2)]
     | [NAD+ → NADH]
     |
     v
Octová kyselina (CH3COOH)
     |
     v
CO2 + H2O (Krebsuv cyklus)

GENETICKE POLYMORFISMY:
├── ADH1B*2 (Asiate): Rychlejsi ADH → vice acetaldehydu → flush
├── ALDH2*2 (Asiate): Pomalá ALDH → akumulace acetaldehydu
│   → Flush, nauzea → PROTEKTIVNI faktor proti alkoholismu
└── CYP2E1 indukce: Chronicky alkohol → zvysena CYP2E1 aktivita
    → Zvysena produkce acetaldehydu → hepatotoxicita
```mermaid
flowchart TD
    node_AlkoholjakoGABAmodul["### Alkohol jako GABA modulator - davkova zavislost"]
    node_BACgLEkvivalentUcine["BAC g/L | Ekvivalent | Ucinek | Mechanismus"]
    node_2bbb4665["-----------|------------|--------|-------------"]
    node_020512napojeEuforier["0.2-0.5 | 1-2 napoje | Euforie, relaxace | GABA-A potenciace + opioidni"]
    node_051035napojuSedaceat["0.5-1.0 | 3-5 napoju | Sedace, ataxie | GABA-A + NMDA inhibice"]
    node_1020510napojuZmateno["1.0-2.0 | 5-10 napoju | Zmatenost, dysartrie | Silna CNS deprese"]
    node_20301015napojuStupor["2.0-3.0 | 10-15 napoju | Stupor, hrozba aspirace | Tezka inhibice"]
    node_30401520napojuKomaGe["3.0-4.0 | 15-20 napoju | Koma | Generalizovana deprese"]
    node_4020napojuSMRTrespir["&gt;4.0 | &gt;20 napoju | **SMRT** respiracni deprese | Vitalni centra"]
    node_Alkoholafarmakointer["### Alkohol a farmakointerakce"]
    node_InterakceMechanismus["Interakce | Mechanismus | Riziko"]
    node_997f5ecd["-----------|-------------|--------"]
    node_AlkoholBenzodiazepin["Alkohol + **Benzodiazepiny** | Synergicka GABA potenciace | **Smrtelna respiracni deprese**"]
    node_AlkoholOpioidyGABAmu["Alkohol + **Opioidy** | GABA + mu-opioidni | **Smrtelna respiracni deprese**"]
    node_AlkoholBarbiturtySyn["Alkohol + **Barbituráty** | Synergicka GABA | **Extremne nebezpecne**"]
    node_AlkoholAntihistamini["Alkohol + **Antihistaminika** | Aditivni sedace | Vysoka sedace"]
    node_AlkoholParacetamolCY["Alkohol + **Paracetamol** | CYP2E1 indukce  NAPQI | Hepatotoxicita"]
    node_AlkoholMAOITyraminvn["Alkohol + **MAOI** | Tyramin v nekterych alkoholech | Hypertenzni krize"]
    node_AlkoholMetforminLakt["Alkohol + **Metformin** | Laktátová acidoza | Vzacne, ale zavazne"]
    node_Srovnanibezpecnostni["## Srovnani bezpecnostnich profilu"]
    node_Terapeutickyindex["### Terapeuticky index"]

    node_AlkoholjakoGABAmodul --> node_BACgLEkvivalentUcine
    node_BACgLEkvivalentUcine --> node_2bbb4665
    node_2bbb4665 --> node_020512napojeEuforier
    node_020512napojeEuforier --> node_051035napojuSedaceat
    node_051035napojuSedaceat --> node_1020510napojuZmateno
    node_1020510napojuZmateno --> node_20301015napojuStupor
    node_20301015napojuStupor --> node_30401520napojuKomaGe
    node_30401520napojuKomaGe --> node_4020napojuSMRTrespir
    node_4020napojuSMRTrespir --> node_Alkoholafarmakointer
    node_Alkoholafarmakointer --> node_InterakceMechanismus
    node_InterakceMechanismus --> node_997f5ecd
    node_997f5ecd --> node_AlkoholBenzodiazepin
    node_AlkoholBenzodiazepin --> node_AlkoholOpioidyGABAmu
    node_AlkoholOpioidyGABAmu --> node_AlkoholBarbiturtySyn
    node_AlkoholBarbiturtySyn --> node_AlkoholAntihistamini
    node_AlkoholAntihistamini --> node_AlkoholParacetamolCY
    node_AlkoholParacetamolCY --> node_AlkoholMAOITyraminvn
    node_AlkoholMAOITyraminvn --> node_AlkoholMetforminLakt
    node_AlkoholMetforminLakt --> node_Srovnanibezpecnostni
    node_Srovnanibezpecnostni --> node_Terapeutickyindex

    click node_AlkoholjakoGABAmodul "/glossary/gaba/" "### Alkohol jako GABA modulator - davkova zavislost"
    click node_020512napojeEuforier "/glossary/gaba/" "0.2-0.5 | 1-2 napoje | Euforie, relaxace | GABA-A potenciace + opioidni"
    click node_051035napojuSedaceat "/glossary/gaba/" "0.5-1.0 | 3-5 napoju | Sedace, ataxie | GABA-A + NMDA inhibice"
    click node_AlkoholBenzodiazepin "/glossary/gaba/" "Alkohol + **Benzodiazepiny** | Synergicka GABA potenciace | **Smrtelna respiracni deprese**"
    click node_AlkoholOpioidyGABAmu "/glossary/gaba/" "Alkohol + **Opioidy** | GABA + mu-opioidni | **Smrtelna respiracni deprese**"
    click node_AlkoholBarbiturtySyn "/glossary/gaba/" "Alkohol + **Barbituráty** | Synergicka GABA | **Extremne nebezpecne**"
    click node_AlkoholMAOITyraminvn "/pharmacology/maoi/" "Alkohol + **MAOI** | Tyramin v nekterych alkoholech | Hypertenzni krize"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Alkohol jako GABA modulator - davkova zavislost

| BAC (g/L) | Ekvivalent | Ucinek | Mechanismus |
|-----------|------------|--------|-------------|
| 0.2-0.5 | 1-2 napoje | Euforie, relaxace | GABA-A potenciace + opioidni |
| 0.5-1.0 | 3-5 napoju | Sedace, ataxie | GABA-A + NMDA inhibice |
| 1.0-2.0 | 5-10 napoju | Zmatenost, dysartrie | Silna CNS deprese |
| 2.0-3.0 | 10-15 napoju | Stupor, hrozba aspirace | Tezka inhibice |
| 3.0-4.0 | 15-20 napoju | Koma | Generalizovana deprese |
| >4.0 | >20 napoju | **SMRT** (respiracni deprese) | Vitalni centra |

### Alkohol a farmakointerakce

| Interakce | Mechanismus | Riziko |
|-----------|-------------|--------|
| Alkohol + **Benzodiazepiny** | Synergicka GABA potenciace | **Smrtelna respiracni deprese** |
| Alkohol + **Opioidy** | GABA + mu-opioidni | **Smrtelna respiracni deprese** |
| Alkohol + **Barbituráty** | Synergicka GABA | **Extremne nebezpecne** |
| Alkohol + **Antihistaminika** | Aditivni sedace | Vysoka sedace |
| Alkohol + **Paracetamol** | CYP2E1 indukce → NAPQI | Hepatotoxicita |
| Alkohol + **MAOI** | Tyramin v nekterych alkoholech | Hypertenzni krize |
| Alkohol + **Metformin** | Laktátová acidoza | Vzacne, ale zavazne |

---

## Srovnani bezpecnostnich profilu

### Terapeuticky index

```

</details>
TERAPEUTICKY INDEX (TI) = LD50 / ED50

Vysoky TI = bezpecnejsi
Nizky TI = nebezpecnejsi

GABA MODULATORY - RELATIVNI BEZPECNOST:

                    TI
Benzodiazepiny:   ████████████████████████████████████  ~100-1000x
Neurosteroidyá:   ██████████████████████████████        ~50-100x (odhad)
Z-léky:           ██████████████████████████            ~30-50x
Alkohol:          ██████████████                        ~10x
GHB:              ████████████                          ~8x
Barbituráty:      ██████                                ~3-5x

KLICOVY VYZNAM:
- BZ jsou bezpecne z hlediska predavkovani (samy o sobe)
- ALE: BZ + alkohol/opioidy = SMRTELNE
- Barbituráty jsou potencialne smrtelne i samotne
- GHB ma velmi uzke terapeuticke okno
```mermaid
flowchart TD
    node_Antidota["### Antidota"]
    node_TridaAntidotumMechan["Trida | Antidotum | Mechanismus"]
    node_5c02febc["-------|-----------|-------------"]
    node_BenzodiazepinyFlumaz["**Benzodiazepiny** | **Flumazenil** | BZ site antagonista"]
    node_BarbiturtyNeexistuje["**Barbituráty** | **Neexistuje** | Podpurna pece, dialyza"]
    node_AlkoholNeexistujePod["**Alkohol** | **Neexistuje** | Podpurna pece"]
    node_GHBNeexistujePodpurn["**GHB** | **Neexistuje** | Podpurna pece"]
    node_NeurosteroidyNeexist["**Neurosteroidyá** | **Neexistuje** | Podpurna pece"]
    node_Pozornaflumazenil["**Pozor na flumazenil:**"]
    node_Tolerancezavislostaa["## Tolerance, zavislost a abstinence"]
    node_Mechanismytolerance["### Mechanismy tolerance"]

    node_Antidota --> node_TridaAntidotumMechan
    node_TridaAntidotumMechan --> node_5c02febc
    node_5c02febc --> node_BenzodiazepinyFlumaz
    node_BenzodiazepinyFlumaz --> node_BarbiturtyNeexistuje
    node_BarbiturtyNeexistuje --> node_AlkoholNeexistujePod
    node_AlkoholNeexistujePod --> node_GHBNeexistujePodpurn
    node_GHBNeexistujePodpurn --> node_NeurosteroidyNeexist
    node_NeurosteroidyNeexist --> node_Pozornaflumazenil
    node_Pozornaflumazenil --> node_Tolerancezavislostaa
    node_Tolerancezavislostaa --> node_Mechanismytolerance
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Antidota

| Trida | Antidotum | Mechanismus |
|-------|-----------|-------------|
| **Benzodiazepiny** | **Flumazenil** | BZ site antagonista |
| **Barbituráty** | **Neexistuje** | Podpurna pece, dialyza |
| **Alkohol** | **Neexistuje** | Podpurna pece |
| **GHB** | **Neexistuje** | Podpurna pece |
| **Neurosteroidyá** | **Neexistuje** | Podpurna pece |

**Pozor na flumazenil:**
- Muze vyvolat krecě u pacienta zavislych na BZ
- Kratky T1/2 (40-80 min) → resedace po odezneni
- Kontraindikovano pri soucasne konzumaci TCA nebo epilepsii

---

## Tolerance, zavislost a abstinence

### Mechanismy tolerance

```

</details>
MECHANISMY GABAERGNI TOLERANCE

AKUTNI EXPOZICE:
GABA-A receptor → Cl- influx → Inhibice → Terapeuticky ucinek

CHRONICKA EXPOZICE (dny-tydny):
├── 1. Receptorova desenzitizace
│   └── Fosforylace → snizena odpoved
│
├── 2. Receptorova internalizace (endocytoza)
│   └── Mene receptoru na povrchu
│
├── 3. Zmena podjednotkoveho slozeni
│   ├── α1 ↓ (snizena citlivost na BZ)
│   ├── α4 ↑ (extrasynapticky, mensi BZ citlivost)
│   ├── γ2 ↓ → δ ↑ (zmena farmakologickeho profilu)
│   └── Vysledek: Receptor reaguje mene na GABA modulatory
│
├── 4. Genova exprese
│   └── Zmeny v transkripci podjednotkových genů
│
└── 5. Kompenzacni zmeny
    ├── NMDA up-regulace (zvysena excitace)
    ├── Glutamátergní hyperaktivita
    └── Snizena endogenni GABA synteza
```mermaid
flowchart TD
    node_Abstinennsyndrompodl["### Abstinenční syndrom podle tridy"]
    node_TridaNastupVrcholTrv["Trida | Nastup | Vrchol | Trvani | Zavaznost"]
    node_44694c21["-------|--------|--------|--------|-----------"]
    node_BZkratkeT12624h25dni["**BZ kratke T1/2** | 6-24 h | 2-5 dni | 1-4 tydny | Stredni-tezka"]
    node_BZdlouheT1227dni714d["**BZ dlouhe T1/2** | 2-7 dni | 7-14 dni | 2-8 tydnu | Stredni"]
    node_Barbiturty1224h37dni["**Barbituráty** | 12-24 h | 3-7 dni | 1-2 tydny | **ZIVOT OHROZUJICI**"]
    node_Alkohol624h4872h510d["**Alkohol** | 6-24 h | 48-72 h | 5-10 dni | **ZIVOT OHROZUJICI**"]
    node_GHB16h2472h515dniZIV["**GHB** | 1-6 h | 24-72 h | 5-15 dni | **ZIVOT OHROZUJICI**"]
    node_Zlky1224h25dni12tydn["**Z-léky** | 12-24 h | 2-5 dni | 1-2 tydny | Stredni"]
    node_Krizovareakceabstine["### Krizova reakce - abstinencni krecě"]

    node_Abstinennsyndrompodl --> node_TridaNastupVrcholTrv
    node_TridaNastupVrcholTrv --> node_44694c21
    node_44694c21 --> node_BZkratkeT12624h25dni
    node_BZkratkeT12624h25dni --> node_BZdlouheT1227dni714d
    node_BZdlouheT1227dni714d --> node_Barbiturty1224h37dni
    node_Barbiturty1224h37dni --> node_Alkohol624h4872h510d
    node_Alkohol624h4872h510d --> node_GHB16h2472h515dniZIV
    node_GHB16h2472h515dniZIV --> node_Zlky1224h25dni12tydn
    node_Zlky1224h25dni12tydn --> node_Krizovareakceabstine
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Abstinenční syndrom podle tridy

| Trida | Nastup | Vrchol | Trvani | Zavaznost |
|-------|--------|--------|--------|-----------|
| **BZ (kratke T1/2)** | 6-24 h | 2-5 dni | 1-4 tydny | Stredni-tezka |
| **BZ (dlouhe T1/2)** | 2-7 dni | 7-14 dni | 2-8 tydnu | Stredni |
| **Barbituráty** | 12-24 h | 3-7 dni | 1-2 tydny | **ZIVOT OHROZUJICI** |
| **Alkohol** | 6-24 h | 48-72 h | 5-10 dni | **ZIVOT OHROZUJICI** |
| **GHB** | 1-6 h | 24-72 h | 5-15 dni | **ZIVOT OHROZUJICI** |
| **Z-léky** | 12-24 h | 2-5 dni | 1-2 tydny | Stredni |

### Krizova reakce - abstinencni krecě

```

</details>
ABSTINENCNI KRECĚ - PATOFYZIOLOGIE

Chronicka GABA modulace
     |
     v
Neuroadaptace:
  GABA-A ↓↓ + NMDA ↑↑
     |
     v
Nahlé vysazeni
     |
     v
GABA inhibice: KRITICKY SNIZENA
NMDA excitace: KRITICKY ZVYSENA
     |
     v
HYPEREXCITABILNI STAV
     |
     ├── Tonicky-klonicke krecě
     ├── Status epilepticus
     ├── Delirium tremens
     ├── Autonomni bouri (tachykardie, hypertermie)
     └── SMRT (5-15% neléceného DT)

LECBA:
├── Benzodiazepiny (diazepam, lorazepam)
├── Fenobarbital (druha linie)
├── Propofol (ICU, refrakterní)
└── NIKDY nahlé vysazeni dlouhodobe uzivanych GABAergik!
```

---

## Reference

### Benzodiazepiny

1. Rudolph, U. & Knoflach, F. (2011). *Beyond classical benzodiazepines: novel therapeutic potential of GABAA receptor subtypes*. Nature Reviews Drug Discovery, 10(9), 685-697.
2. Tan, K.R. et al. (2010). *Neural bases for addictive properties of benzodiazepines*. Nature, 463(7282), 769-774.
3. Lader, M. (2011). *Benzodiazepines revisited - will we ever learn?* Addiction, 106(12), 2086-2109.

### Barbituráty

4. Lopez-Munoz, F. et al. (2005). *The history of barbiturates a century after their clinical introduction*. Neuropsychiatric Disease and Treatment, 1(4), 329-343.

### Neurosteroidyá

5. Meltzer-Brody, S. et al. (2018). *Brexanolone injection in post-partum depression: two multicentre, double-blind, randomised, placebo-controlled, phase 3 trials*. Lancet, 392(10152), 1058-1070.
6. Zorumski, C.F. et al. (2013). *Neurosteroids as novel antidepressants and anxiolytics: GABA-A receptors and beyond*. Neurobiology of Stress, 11, 100196.

### Z-léky

7. Sanger, D.J. (2004). *The pharmacology and mechanisms of action of new generation, non-benzodiazepine hypnotic agents*. CNS Drugs, 18(Suppl 1), 9-15.

### Alkohol

8. Olsen, R.W. & Liang, J. (2017). *Role of GABAA receptors in alcohol use disorders suggested by chronic intermittent ethanol (CIE) rodent model*. Molecular Brain, 10(1), 45.
9. Koob, G.F. & Colrain, I.M. (2020). *Alcohol use disorder and sleep disturbances: a feed-forward allostatic framework*. Neuropsychopharmacology, 45(1), 141-165.

### Obecna farmakologie

10. Sigel, E. & Steinmann, M.E. (2012). *Structure, function, and modulation of GABAA receptors*. Journal of Biological Chemistry, 287(48), 40224-40231.
11. Mohler, H. (2012). *The GABA system in anxiety and depression and its therapeutic potential*. Neuropharmacology, 62(1), 42-53.

---

## Krizove odkazy

### Receptory

- [GABA-A receptor](@/receptors/gaba-a.md) - Hlavni cilova struktura
- [GABA-B receptor](@/receptors/gaba-b.md) - Metabotropní GABA receptor
- [NMDA receptor](@/receptors/nmda.md) - Alkoholu inhibovany

### Neurotransmitery

- [GABA](@/glossary/gaba.md) - Hlavni inhibicni neurotransmiter
- [Serotonin](@/glossary/serotonin.md) - Interakce s GABAergním systémem
- [Glutamat](@/glossary/glutamate.md) - Excitacni protipol

### Psychoaktivni latky

- [Ketamin](@/alkaloids/ketamin.md) - NMDA antagonista (opak GABAergik)
- [Amanita muscaria](@/shrooms/amanita-muscaria.md) - Zdroj muscimolu

### Farmakologie

- [MAOI](@/pharmacology/maoi.md) - Interakce s alkoholem a GABAergiky
- [First-pass metabolismus](@/pharmacology/first-pass-metabolism.md) - Metabolismus GABAergik
- [Membranovy prostup](@/pharmacology/membrane-permeability.md) - BBB prostup

### Bezpecnost

- [Harm Reduction](@/harm-reduction/_index.md) - Zasady bezpecneho uzivani

---

Zpet na [Farmakologicke tridy](@/classes/_index.md) | [GABA-A receptor](@/receptors/gaba-a.md) | [GABA](@/glossary/gaba.md)

---

*Tento text slouzi k edukacnim ucelum. Informace zde obsazene nejsou urceny jako lekarska ci farmakologicka rada. Benzodiazepiny, barbituráty a alkohol jsou latky s vyznamnym zavislostnim potencialem. Nikdy nenáhle nevysazujte dlouhodobe uzivane GABAergické latky.*
