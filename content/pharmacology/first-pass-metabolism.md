+++
title = "First-pass metabolismus"
description = "Presystemovy metabolismus psychoaktivnich latek - first-pass efekt, biodostupnost, enzymaticke systemy, klinicke dusledky pro davkovani"
date = 2026-01-30
updated = 2026-01-30
draft = false
weight = 2

[taxonomies]
categories = ["farmakologie", "farmakokinetika"]
tags = ["first-pass", "metabolismus", "biodostupnost", "CYP450", "MAO", "UGT", "presystemovy-metabolismus", "jatra", "psychedelika"]

[extra]
lead = "First-pass metabolismus (presystemovy metabolismus) je enzymatická premena latky pred dosazenim systemove cirkulace. Tento proces zasadne ovlivnuje biodostupnost psychoaktivnich latek a determinuje, zda a v jake forme se ucinná latka dostane do centralniho nervoveho systemu."
complexity = "pokrocila"
reading_time = "25 min"
+++

# First-pass metabolismus

**First-pass metabolismus** (presystemovy metabolismus, efekt prvniho pruchodu) je souhrn enzymatickych premen, kterym latka podleha mezi podanim a dosazenim systemove cirkulace. Tento fenomen je jednim z nejvyznamnejsich farmakokinetickych determinantu ucinnosti peroralne podavanych psychoaktivnich latek.

Pochopeni first-pass efektu je klicove pro:
- Predikci peroralni biodostupnosti
- Volbu optimalni cesty podani
- Vysvetleni rozdilu v ucinku pri ruznych zpusobech aplikace
- Pochopeni role [MAOI](@/pharmacology/maoi.md) v kontextu [ayahuascy](@/preparations/ayahuasca.md)

---

## Anatomie first-pass efektu

### Tri urovne presystemoveho metabolismu

First-pass metabolismus neni jediny proces, ale soustava enzymatickych bariér na ceste od gastrointestinalniho traktu (GIT) do systemove cirkulace.

```mermaid
graph TD
    PO[Peroralni podani] --> L1{Uroven 1: Luminalni metabolismus}

    L1 --> |Misto: Lumen GIT<br/>Enzymy:<br/>• Strevni bakterie<br/>• Kyselá hydrolýza<br/>• Beta-glukuronidazy<br/>• Peptidazy| L2{Uroven 2: Enterocytarni metabolismus}

    L2 --> |Misto: Strevni stena<br/>Enzymy:<br/>• CYP3A4 (80% strevniho CYP)<br/>• UGT (glukuronidace)<br/>• Alkalicka fosfataza<br/>• MAO-A<br/>• P-glykoprotein| PV[Portalni zila]

    PV --> L3{Uroven 3: Hepatalni metabolismus}

    L3 --> |Misto: Jatra<br/>Enzymy:<br/>• CYP450 (50+ izoforem)<br/>• UGT, SULT, NAT, COMT<br/>• MAO-A, MAO-B<br/>• Aldehyd oxidaza<br/>• Esterazy| SC[Systemova cirkulace<br/>Biodostupnost = F]

    classDef metabolism fill:#dcfce7,stroke:#16a34a,stroke-width:2px
    classDef transport fill:#f0fdf4,stroke:#86efac,stroke-width:1px

    class L1,L2,L3 metabolism
    class PO,PV,SC transport
```

### Kvantitativni model

Celkova biodostupnost po peroralnim podani je soucinem dílcich faktoru:

```
F = f_abs x f_GIT x f_hepat

Kde:
  F        = celkova biodostupnost (0-1)
  f_abs    = frakce absorbovana ze strevniho lumenu (0-1)
  f_GIT    = frakce prezivajici strevni metabolismus (0-1)
  f_hepat  = frakce prezivajici hepatalni metabolismus (0-1)

Priklad - THC:
  f_abs   = 0.90 (90% se vstrebava)
  f_GIT   = 0.40 (40% prezije strevni stenu)
  f_hepat = 0.30 (30% prezije jatra)
  F       = 0.90 x 0.40 x 0.30 = 0.108 = ~11%

Priklad - LSD:
  f_abs   = 0.95 (95% se vstrebava)
  f_GIT   = 0.85 (85% prezije strevni stenu)
  f_hepat = 0.87 (87% prezije jatra)
  F       = 0.95 x 0.85 x 0.87 = 0.70 = ~70%
```mermaid
flowchart TD
    node_Firstpassmetabolismu["## First-pass metabolismus psychoaktivnich latek"]
    node_Kompletnisrovnavacit["### Kompletni srovnavaci tabulka"]
    node_LatkaBiodostupnostpo["Latka | Biodostupnost p.o. | First-pass efekt | Hlavni enzymy | Aktivni metabolity | Klinicky vyznam"]
    node_ac49e8fa["-------|---------------------|------------------|---------------|-------------------|-----------------"]
    node_DMTalkaloidsdmtmd0be["**DMT@/alkaloids/dmt.md** | **~0%** bez MAOI@/pharmacology/maoi.md | **Extremni** MAO | MAO-A strevní, hepatalni | Zadne kompletni degradace | Vyžaduje MAOI pro peroralni aktivitu"]
    node_Morfin2040Vysokygluk["**Morfin** | **20-40%** | **Vysoky** glukuronidace | UGT2B7, CYP3A4 | Morfin-6-glukuronid M6G | Aktivni metabolit M6G"]
    node_Psilocybinalkaloidsp["**Psilocybin@/alkaloids/psilocybin.md** | **~50%** | **Stredni** | Alkalicka fosfataza, UGT | Psilocin@/alkaloids/psilocin.md aktivni | Prodrug, aktivace na psilocin"]
    node_LSDalkaloidslsdmd70N["**LSD@/alkaloids/lsd.md** | **~70%** | **Nizky** | CYP3A4, CYP2D6, CYP1A2 | Zadne vyznamne | Vysoka potence kompenzuje"]
    node_MDMAalkaloidsmdmamd7["**MDMA@/alkaloids/mdma.md** | **~70%** | **Stredni** CYP2D6 | CYP2D6, CYP3A4, COMT | MDA aktivni | Variabilita dle genotypu"]
    node_THC620VysokyCYP2C93A["**THC** | **6-20%** | **Vysoky** CYP2C9, 3A4 | CYP2C9, CYP3A4 | 11-OH-THC aktivni | 11-OH-THC je aktivni"]
    node_Ketaminalkaloidsketa["**Ketamin@/alkaloids/ketamin.md** | **17-29%** | **Vysoky** CYP3A4, 2B6 | CYP3A4, CYP2B6 | Norketamin, HNK aktivni | Norketamin je aktivni"]
    node_Detailniprofily["### Detailni profily"]
    node_DMTExtremnifirstpass["#### DMT - Extremni first-pass biodostupnost ~0%"]
    node_DMTalkaloidsdmtmdpre["DMT@/alkaloids/dmt.md predstavuje nejdramatictejsi priklad first-pass metabolismu mezi psychoaktivnimi latkami. Monoaminooxidaza A MAO-A@/glossary/mao.md ve strevni stene a jatrech degraduje DMT behem minut na neaktivni metabolity."]

    node_Firstpassmetabolismu --> node_Kompletnisrovnavacit
    node_Kompletnisrovnavacit --> node_LatkaBiodostupnostpo
    node_LatkaBiodostupnostpo --> node_ac49e8fa
    node_ac49e8fa --> node_DMTalkaloidsdmtmd0be
    node_DMTalkaloidsdmtmd0be --> node_Morfin2040Vysokygluk
    node_Morfin2040Vysokygluk --> node_Psilocybinalkaloidsp
    node_Psilocybinalkaloidsp --> node_LSDalkaloidslsdmd70N
    node_LSDalkaloidslsdmd70N --> node_MDMAalkaloidsmdmamd7
    node_MDMAalkaloidsmdmamd7 --> node_THC620VysokyCYP2C93A
    node_THC620VysokyCYP2C93A --> node_Ketaminalkaloidsketa
    node_Ketaminalkaloidsketa --> node_Detailniprofily
    node_Detailniprofily --> node_DMTExtremnifirstpass
    node_DMTExtremnifirstpass --> node_DMTalkaloidsdmtmdpre

    click node_DMTalkaloidsdmtmd0be "/pharmacology/maoi/" "**DMT@/alkaloids/dmt.md** | **~0%** bez MAOI@/pharmacology/maoi.md | **Extremni** MAO | MAO-A strevní, hepatalni | Zadne kompletni degradace | Vyžaduje MAOI pro peroralni aktivitu"
    click node_Psilocybinalkaloidsp "/alkaloids/psilocybin/" "**Psilocybin@/alkaloids/psilocybin.md** | **~50%** | **Stredni** | Alkalicka fosfataza, UGT | Psilocin@/alkaloids/psilocin.md aktivni | Prodrug, aktivace na psilocin"
    click node_LSDalkaloidslsdmd70N "/alkaloids/lsd/" "**LSD@/alkaloids/lsd.md** | **~70%** | **Nizky** | CYP3A4, CYP2D6, CYP1A2 | Zadne vyznamne | Vysoka potence kompenzuje"
    click node_MDMAalkaloidsmdmamd7 "/alkaloids/mdma/" "**MDMA@/alkaloids/mdma.md** | **~70%** | **Stredni** CYP2D6 | CYP2D6, CYP3A4, COMT | MDA aktivni | Variabilita dle genotypu"
    click node_Ketaminalkaloidsketa "/alkaloids/ketamin/" "**Ketamin@/alkaloids/ketamin.md** | **17-29%** | **Vysoky** CYP3A4, 2B6 | CYP3A4, CYP2B6 | Norketamin, HNK aktivni | Norketamin je aktivni"
    click node_DMTExtremnifirstpass "/alkaloids/dmt/" "#### DMT - Extremni first-pass biodostupnost ~0%"
    click node_DMTalkaloidsdmtmdpre "/alkaloids/dmt/" "DMT@/alkaloids/dmt.md predstavuje nejdramatictejsi priklad first-pass metabolismu mezi psychoaktivnimi latkami. Monoaminooxidaza A MAO-A@/glossary/mao.md ve strevni stene a jatrech degraduje DMT behem minut na neaktivni metabolity."
```

<details>
<summary>ASCII verze diagramu</summary>

```
---

## First-pass metabolismus psychoaktivnich latek

### Kompletni srovnavaci tabulka

| Latka | Biodostupnost (p.o.) | First-pass efekt | Hlavni enzymy | Aktivni metabolity | Klinicky vyznam |
|-------|---------------------|------------------|---------------|-------------------|-----------------|
| **[DMT](@/alkaloids/dmt.md)** | **~0%** (bez [MAOI](@/pharmacology/maoi.md)) | **Extremni** (MAO) | MAO-A (strevní, hepatalni) | Zadne (kompletni degradace) | Vyžaduje MAOI pro peroralni aktivitu |
| **Morfin** | **20-40%** | **Vysoky** (glukuronidace) | UGT2B7, CYP3A4 | Morfin-6-glukuronid (M6G) | Aktivni metabolit M6G |
| **[Psilocybin](@/alkaloids/psilocybin.md)** | **~50%** | **Stredni** | Alkalicka fosfataza, UGT | [Psilocin](@/alkaloids/psilocin.md) (aktivni) | Prodrug, aktivace na psilocin |
| **[LSD](@/alkaloids/lsd.md)** | **~70%** | **Nizky** | CYP3A4, CYP2D6, CYP1A2 | Zadne vyznamne | Vysoka potence kompenzuje |
| **[MDMA](@/alkaloids/mdma.md)** | **~70%** | **Stredni** (CYP2D6) | CYP2D6, CYP3A4, COMT | MDA (aktivni) | Variabilita dle genotypu |
| **THC** | **6-20%** | **Vysoky** (CYP2C9, 3A4) | CYP2C9, CYP3A4 | 11-OH-THC (aktivni) | 11-OH-THC je aktivni |
| **[Ketamin](@/alkaloids/ketamin.md)** | **17-29%** | **Vysoky** (CYP3A4, 2B6) | CYP3A4, CYP2B6 | Norketamin, HNK (aktivni) | Norketamin je aktivni |

---

### Detailni profily

#### DMT - Extremni first-pass (biodostupnost ~0%)

[DMT](@/alkaloids/dmt.md) predstavuje nejdramatictejsi priklad first-pass metabolismu mezi psychoaktivnimi latkami. Monoaminooxidaza A ([MAO-A](@/glossary/mao.md)) ve strevni stene a jatrech degraduje DMT behem minut na neaktivni metabolity.

```

</details>mermaid
graph TD
    DMT[DMT<br/>peroralni podani] --> ZAL[Zaludek<br/>stabilni v kyselem prostredi]

    ZAL --> TS[Tenke strevo - strevni stena]

    TS --> |~90%| MAO1[MAO-A<br/>enterocyty]
    TS --> |~10%| PZ[Portalni zila]

    MAO1 --> ALD[Indol-3-acetaldehyd]
    ALD --> IAA[Indol-3-octova kyselina<br/>NEAKTIVNI ❌]

    PZ --> JAT[Jatra]
    JAT --> MAO2[MAO-A<br/>hepatocyty]
    MAO2 --> DEG[Kompletni degradace<br/>NEAKTIVNI ❌]

    JAT --> |~0% DMT| SC[Systemova cirkulace<br/>ZADNY PSYCHOAKTIVNI UCINEK]

    classDef active fill:#22c55e,stroke:#166534,stroke-width:2px,color:#f8fafc
    classDef inactive fill:#ef4444,stroke:#b91c1c,stroke-width:2px,color:#f8fafc
    classDef organ fill:#f3f4f6,stroke:#6b7280,stroke-width:1px
    classDef enzyme fill:#fbbf24,stroke:#f59e0b,stroke-width:2px

    class DMT active
    class IAA,DEG,SC inactive
    class ZAL,TS,PZ,JAT organ
    class MAO1,MAO2,ALD enzyme
```

**Reseni - MAO inhibice ([ayahuasca](@/preparations/ayahuasca.md)):**

```mermaid
graph TD
    AYA[AYAHUASCA<br/>DMT + MAOI<br/>harmin/harmalin] --> |1. MAOI podani| MAOI[Harmin/Harmalin]

    MAOI --> INH[Reverzibilni inhibice MAO-A<br/>strevni stena + jatra]

    INH --> |2. DMT podani| DMT2[DMT<br/>peroralni]

    DMT2 --> |MAO-A INHIBOVANA ❌| TSI[Tenke strevo<br/>bez degradace]
    DMT2 -.-> |normalne by byla| MAO_OFF[MAO-A degradace]

    TSI --> PZ2[Portalni zila<br/>DMT zachovano]
    PZ2 --> JAT2[Jatra<br/>MAO-A inhibovana]

    JAT2 --> |25-40% DMT| SC2[Systemova cirkulace]
    SC2 --> BBB[Prostup BBB]
    BBB --> RECE[5-HT2A aktivace]
    RECE --> |4-6 hodin| PSY[PSYCHEDELICKY UCINEK ✅]

    classDef success fill:#22c55e,stroke:#166534,stroke-width:2px,color:#f8fafc
    classDef blocked fill:#ef4444,stroke:#b91c1c,stroke-width:2px,color:#f8fafc
    classDef process fill:#f3f4f6,stroke:#6b7280,stroke-width:1px
    classDef inhibitor fill:#8b5cf6,stroke:#6d28d9,stroke-width:2px,color:#f8fafc

    class PSY,SC2,BBB,RECE success
    class MAO_OFF blocked
    class DMT2,TSI,PZ2,JAT2 process
    class MAOI,INH inhibitor
```mermaid
flowchart TD
    node_Farmakologickyvyznam["**Farmakologicky vyznam:**"]
    node_ParametrDMTbezMAOIDM["Parametr | DMT bez MAOI | DMT s MAOI ayahuasca"]
    node_538682f7["----------|-------------|------------------------"]
    node_Biodostupnost02540["Biodostupnost | ~0% | ~25-40%"]
    node_Tmax60120min["Tmax | - | 60-120 min"]
    node_TrvaniucinkuZadny46h["Trvani ucinku | Zadny | 4-6 hodin"]
    node_IntenzitaZadnaSilna["Intenzita | Zadna | Silna"]
    node_KlinickyekvivalentSt["Klinicky ekvivalent | - | Stredne silna davka vaporizovaneho DMT"]
    node_MorfinVysokyfirstpas["#### Morfin - Vysoky first-pass biodostupnost 20-40%"]
    node_Morfinjereferentniop["Morfin je referentni opioidni analgetikum s vyznamnym first-pass metabolismem. Zajimave je, ze jeden z jeho metabolitu je farmakologicky silnejsi nez mateřska latka."]

    node_Farmakologickyvyznam --> node_ParametrDMTbezMAOIDM
    node_ParametrDMTbezMAOIDM --> node_538682f7
    node_538682f7 --> node_Biodostupnost02540
    node_Biodostupnost02540 --> node_Tmax60120min
    node_Tmax60120min --> node_TrvaniucinkuZadny46h
    node_TrvaniucinkuZadny46h --> node_IntenzitaZadnaSilna
    node_IntenzitaZadnaSilna --> node_KlinickyekvivalentSt
    node_KlinickyekvivalentSt --> node_MorfinVysokyfirstpas
    node_MorfinVysokyfirstpas --> node_Morfinjereferentniop

    click node_ParametrDMTbezMAOIDM "/pharmacology/maoi/" "Parametr | DMT bez MAOI | DMT s MAOI ayahuasca"
    click node_KlinickyekvivalentSt "/alkaloids/dmt/" "Klinicky ekvivalent | - | Stredne silna davka vaporizovaneho DMT"
```

<details>
<summary>ASCII verze diagramu</summary>

```
**Farmakologicky vyznam:**

| Parametr | DMT bez MAOI | DMT s MAOI (ayahuasca) |
|----------|-------------|------------------------|
| Biodostupnost | ~0% | ~25-40% |
| Tmax | - | 60-120 min |
| Trvani ucinku | Zadny | 4-6 hodin |
| Intenzita | Zadna | Silna |
| Klinicky ekvivalent | - | Stredne silna davka vaporizovaneho DMT |

---

#### Morfin - Vysoky first-pass (biodostupnost 20-40%)

Morfin je referentni opioidni analgetikum s vyznamnym first-pass metabolismem. Zajimave je, ze jeden z jeho metabolitu je farmakologicky silnejsi nez mateřska latka.

```

</details>
MORFIN (peroralni podani)
     |
     v
STREVNI STENA
     |
     +---> UGT2B7 (10-15% podane davky)
     |         |
     |         v
     |    Morfin-3-glukuronid (M3G) [neaktivni, prokonvulzivni]
     |    Morfin-6-glukuronid (M6G) [AKTIVNI, 6-200x silnejsi]
     |
     v
PORTALNI ZILA
     |
     v
JATRA (hlavni misto metabolismu)
     |
     +---> UGT2B7 (40-70% podane davky)
     |         |
     |         ├── M3G (~60% metabolismu) [neaktivni]
     |         └── M6G (~10% metabolismu) [AKTIVNI]
     |
     +---> CYP3A4 (~5%)
     |         |
     |         v
     |    Normorfin (N-demethylace) [slabe aktivni]
     |
     +---> CYP2D6 (~1-2%)
     |         |
     |         v
     |    Hydromorfon [silne aktivni]
     |
     v
SYSTEMOVA CIRKULACE: 20-40% morfinu + M6G + M3G

KLINICKY VYZNAM M6G:
- 6-200x vyssi afinita k mu-opioidnimu receptoru nez morfin
- Prodlouzeny T1/2 (delsi analgezie po p.o. nez po i.v.)
- Akumulace u renalni insuficience → riziko predavkovani
```mermaid
flowchart TD
    node_Klinickydulezitepozn["**Klinicky dulezite poznatky:**"]
    node_AspektDetail["Aspekt | Detail"]
    node_0dceb9d1["--------|--------"]
    node_Peroralnidavkavsiv31["Peroralni davka vs i.v. | 3:1 30 mg p.o. = 10 mg i.v."]
    node_M6Gurenalnihoselhani["M6G u renalniho selhani | Akumulace  prolongovana deprese dychani"]
    node_Genetickavariabilita["Geneticka variabilita | UGT2B7 polymorfismy meni pomer M3G/M6G"]
    node_Interindividualnivar["Interindividualni variabilita | 4-nasobny rozdil v biodostupnosti"]
    node_PsilocybinProduktivn["#### Psilocybin - Produktivni first-pass biodostupnost ~50%"]
    node_Psilocybinalkaloidsp["Psilocybin@/alkaloids/psilocybin.md je unikatni pripad, kdy first-pass metabolismus latku **aktivuje** namisto inaktivace. Psilocybin je prodrug, ktery se premeni na aktivni psilocin@/alkaloids/psilocin.md defosforylaci."]

    node_Klinickydulezitepozn --> node_AspektDetail
    node_AspektDetail --> node_0dceb9d1
    node_0dceb9d1 --> node_Peroralnidavkavsiv31
    node_Peroralnidavkavsiv31 --> node_M6Gurenalnihoselhani
    node_M6Gurenalnihoselhani --> node_Genetickavariabilita
    node_Genetickavariabilita --> node_Interindividualnivar
    node_Interindividualnivar --> node_PsilocybinProduktivn
    node_PsilocybinProduktivn --> node_Psilocybinalkaloidsp

    click node_PsilocybinProduktivn "/alkaloids/psilocybin/" "#### Psilocybin - Produktivni first-pass biodostupnost ~50%"
    click node_Psilocybinalkaloidsp "/alkaloids/psilocybin/" "Psilocybin@/alkaloids/psilocybin.md je unikatni pripad, kdy first-pass metabolismus latku **aktivuje** namisto inaktivace. Psilocybin je prodrug, ktery se premeni na aktivni psilocin@/alkaloids/psilocin.md defosforylaci."
```

<details>
<summary>ASCII verze diagramu</summary>

```
**Klinicky dulezite poznatky:**

| Aspekt | Detail |
|--------|--------|
| Peroralni davka vs i.v. | 3:1 (30 mg p.o. = 10 mg i.v.) |
| M6G u renalniho selhani | Akumulace → prolongovana deprese dychani |
| Geneticka variabilita | UGT2B7 polymorfismy meni pomer M3G/M6G |
| Interindividualni variabilita | 4-nasobny rozdil v biodostupnosti |

---

#### Psilocybin - Produktivni first-pass (biodostupnost ~50%)

[Psilocybin](@/alkaloids/psilocybin.md) je unikatni pripad, kdy first-pass metabolismus latku **aktivuje** namisto inaktivace. Psilocybin je prodrug, ktery se premeni na aktivni [psilocin](@/alkaloids/psilocin.md) defosforylaci.

```

</details>
PSILOCYBIN (prodrug, peroralni podani)
     |
     v
ZALUDEK (pH 1-3)
     |  (castecna kyselá defosforylace)
     v
TENKE STREVO
     |
     +---> Alkalicka fosfataza (strevni stena)
     |         |
     |         v
     |    PSILOCIN (4-HO-DMT) [AKTIVNI FORMA]
     |         |
     |         +---> UGT (enterocytarni glukuronidace)
     |         |         |
     |         |         v
     |         |    Psilocin-O-glukuronid [neaktivni]
     |         |
     |         +---> MAO-A (castecna degradace)
     |                   |
     |                   v
     |              4-HO-IAA [neaktivni]
     |
     v (nekonvertovany psilocybin + psilocin)
PORTALNI ZILA
     |
     v
JATRA
     |
     +---> Alkalicka fosfataza (dalsi konverze)
     |         |
     |         v
     |    Psilocin [AKTIVNI]
     |
     +---> UGT1A10 (glukuronidace psilocinu)
     |         |
     |         v
     |    Psilocin-O-glukuronid (~70% exkrece)
     |
     +---> MAO-A (oxidativni deaminace)
               |
               v
          4-hydroxyindol-3-octova kyselina
          [neaktivni]

BILANCE:
- ~50% psilocybinu se dostane do systemove cirkulace jako psilocin
- Tmax psilocinu: 60-90 minut
- T1/2 psilocinu: 2-3 hodiny
```mermaid
flowchart TD
    node_Srovnanisprimympodan["**Srovnani s primym podanim psilocinu:**"]
    node_ParametrPsilocybinpo["Parametr | Psilocybin p.o. | Psilocin p.o."]
    node_82397ae9["----------|-------------------|-----------------"]
    node_StabilitaVyssifosfor["Stabilita | Vyssi fosforylovan | Nizsi oxidace"]
    node_Biodostupnost50jakop["Biodostupnost | ~50% jako psilocin | ~50% prima glukuronidace"]
    node_Tmax6090min4060min["Tmax | 60-90 min | 40-60 min"]
    node_ReprodukovatelnostVy["Reprodukovatelnost | Vyssi | Nizsi"]
    node_KlinickepouzitiStand["Klinicke pouziti | Standardni | Zkoumany"]
    node_LSDNizkyfirstpassbio["#### LSD - Nizky first-pass biodostupnost ~70%"]
    node_LSDalkaloidslsdmdvyk["LSD@/alkaloids/lsd.md vykazuje relativne nizky first-pass metabolismus, coz v kombinaci s jeho extremne vysokou potenci aktivni v mikrogramovych davkach zajistuje spolehlivy peroralni ucinek."]

    node_Srovnanisprimympodan --> node_ParametrPsilocybinpo
    node_ParametrPsilocybinpo --> node_82397ae9
    node_82397ae9 --> node_StabilitaVyssifosfor
    node_StabilitaVyssifosfor --> node_Biodostupnost50jakop
    node_Biodostupnost50jakop --> node_Tmax6090min4060min
    node_Tmax6090min4060min --> node_ReprodukovatelnostVy
    node_ReprodukovatelnostVy --> node_KlinickepouzitiStand
    node_KlinickepouzitiStand --> node_LSDNizkyfirstpassbio
    node_LSDNizkyfirstpassbio --> node_LSDalkaloidslsdmdvyk

    click node_Srovnanisprimympodan "/alkaloids/psilocin/" "**Srovnani s primym podanim psilocinu:**"
    click node_ParametrPsilocybinpo "/alkaloids/psilocybin/" "Parametr | Psilocybin p.o. | Psilocin p.o."
    click node_Biodostupnost50jakop "/alkaloids/psilocin/" "Biodostupnost | ~50% jako psilocin | ~50% prima glukuronidace"
    click node_LSDNizkyfirstpassbio "/alkaloids/lsd/" "#### LSD - Nizky first-pass biodostupnost ~70%"
    click node_LSDalkaloidslsdmdvyk "/alkaloids/lsd/" "LSD@/alkaloids/lsd.md vykazuje relativne nizky first-pass metabolismus, coz v kombinaci s jeho extremne vysokou potenci aktivni v mikrogramovych davkach zajistuje spolehlivy peroralni ucinek."
```

<details>
<summary>ASCII verze diagramu</summary>

```
**Srovnani s primym podanim psilocinu:**

| Parametr | Psilocybin (p.o.) | Psilocin (p.o.) |
|----------|-------------------|-----------------|
| Stabilita | Vyssi (fosforylovan) | Nizsi (oxidace) |
| Biodostupnost | ~50% (jako psilocin) | ~50% (prima glukuronidace) |
| Tmax | 60-90 min | 40-60 min |
| Reprodukovatelnost | Vyssi | Nizsi |
| Klinicke pouziti | Standardni | Zkoumany |

---

#### LSD - Nizky first-pass (biodostupnost ~70%)

[LSD](@/alkaloids/lsd.md) vykazuje relativne nizky first-pass metabolismus, coz v kombinaci s jeho extremne vysokou potenci (aktivni v mikrogramovych davkach) zajistuje spolehlivy peroralni ucinek.

```

</details>
LSD (peroralni/sublingualni podani)
     |
     ├── Sublingualni absorpce (20-30%)
     |         |
     |         v
     |    Systemova cirkulace (obchazi first-pass)
     |
     └── Peroralni absorpce (70-80%)
               |
               v
          STREVNI STENA
               |
               +---> CYP3A4 (minimalní aktivita)
               |
               v
          JATRA
               |
               +---> CYP3A4 → 2-oxo-3-hydroxy-LSD (O-H-LSD)
               |                   [neaktivni, hlavni metabolit v moci]
               |
               +---> CYP2D6 → Nor-LSD (N-demethylace)
               |                   [neaktivni]
               |
               +---> CYP1A2 → N-desmethyl-LSD
               |
               +---> Glukuronidace
               |
               v
          SYSTEMOVA CIRKULACE: ~70% LSD

DUVODY NIZKEHO FIRST-PASS:
1. Vysoka lipofilita (log P 2.9) → rychly prostup strevni stenou
2. Maly first-pass metabolismus → vetsi frakce prezije jatra
3. Extremni potence (Ki 1-2 nM u 5-HT2A) → i mala frakce staci
```

**Receptor residence time:**

LSD vykazuje prodlouzeny ucinek (8-12 hodin), ktery neodpovida jeho farmakokinetickemu polocasu (3-5 hodin). Vysvetlenim je prolongovana vazba na [5-HT2A receptor](@/receptors/5-ht2a.md):

```
LSD + 5-HT2A receptor
     |
     v
Vazba do ortosterickeho mista
     |
     v
Extracellularni "viko" (EL2 loop)
uzavre LSD v receptoru
     |
     v
Prolongovana aktivace
(cas disociace >> nez u serotoninu)
     |
     v
Ucinek trva 8-12 hodin
(presto ze T1/2 = 3-5 h)
```mermaid
flowchart TD
    node_MDMAStrednifirstpass["#### MDMA - Stredni first-pass s autoinhibici biodostupnost ~70%"]
    node_MDMAalkaloidsmdmamdp["MDMA@/alkaloids/mdma.md prochazi strednim first-pass metabolismem primarne pres CYP2D6, pricemz sama MDMA tento enzym inhibuje, coz vede k nelinearni kinetice."]

    node_MDMAStrednifirstpass --> node_MDMAalkaloidsmdmamdp

    click node_MDMAStrednifirstpass "/alkaloids/mdma/" "#### MDMA - Stredni first-pass s autoinhibici biodostupnost ~70%"
    click node_MDMAalkaloidsmdmamdp "/alkaloids/mdma/" "MDMA@/alkaloids/mdma.md prochazi strednim first-pass metabolismem primarne pres CYP2D6, pricemz sama MDMA tento enzym inhibuje, coz vede k nelinearni kinetice."
```

<details>
<summary>ASCII verze diagramu</summary>

```
---

#### MDMA - Stredni first-pass s autoinhibici (biodostupnost ~70%)

[MDMA](@/alkaloids/mdma.md) prochazi strednim first-pass metabolismem primarne pres CYP2D6, pricemz sama MDMA tento enzym inhibuje, coz vede k nelinearni kinetice.

```

</details>
MDMA (peroralni podani)
     |
     v
STREVNI STENA
     |
     +---> CYP2D6 (casecny metabolismus)
     |
     v
JATRA
     |
     +---> CYP2D6 (hlavni cesta)
     |         |
     |         ├── MDA (N-demethylace) [AKTIVNI - psychedelicka slozka]
     |         |
     |         └── HHMA (3,4-dihydroxymetamfetamin)
     |                   |
     |                   v [COMT]
     |              HMMA (4-hydroxy-3-methoxymetamfetamin)
     |
     +---> CYP3A4 (alternativni cesta)
     |         |
     |         v
     |    N-demethylace → MDA
     |
     +---> COMT, UGT (konjugace)
     |
     v
SYSTEMOVA CIRKULACE: ~70% MDMA

AUTOINHIBICE CYP2D6:
====================
MDMA je mechanismus-zalozeny inhibitor CYP2D6
("suicide substrate")

Davka:    75 mg    100 mg    125 mg    150 mg
Cmax:     1x       1.5x      2.3x      3.5x
AUC:      1x       1.7x      3.0x      5.0x+

→ Neproporcionalni narust expozice s davkou!
→ Vyssi davky = disproportionalne vyssi riziko toxicity
```mermaid
flowchart TD
    node_CYP2D6genetickepolym["**CYP2D6 geneticke polymorfismy a MDMA:**"]
    node_FenotypPrevalenceDop["Fenotyp | Prevalence | Dopad na MDMA | Riziko"]
    node_4432d6f3["---------|------------|---------------|--------"]
    node_Ultrarychlymetaboliz["**Ultra-rychly metabolizer UM** | 5-10% | Rychlejsi konverze na MDA | Zvysena psychedelicka slozka"]
    node_Extenzivnimetabolize["**Extenzivni metabolizer EM** | 65-80% | Standardni | Referencni"]
    node_Intermediarnimetabol["**Intermediarni metabolizer IM** | 10-15% | Mirne zvysene hladiny | Zvysene"]
    node_PomalymetabolizerPM5["**Pomaly metabolizer PM** | 5-10% | 5-10x vyssi plazmaticke hladiny | **VYSOKE - neurotoxicita**"]
    node_THCVysokyfirstpasssa["#### THC - Vysoky first-pass s aktivnim metabolitem biodostupnost 6-20%"]
    node_THCdelta9tetrahydroc["THC delta-9-tetrahydrocannabinol je vyrazne ovlivnen first-pass metabolismem, pricemz vznikajici metabolit 11-OH-THC je farmakologicky aktivnejsi nez mateřska latka."]

    node_CYP2D6genetickepolym --> node_FenotypPrevalenceDop
    node_FenotypPrevalenceDop --> node_4432d6f3
    node_4432d6f3 --> node_Ultrarychlymetaboliz
    node_Ultrarychlymetaboliz --> node_Extenzivnimetabolize
    node_Extenzivnimetabolize --> node_Intermediarnimetabol
    node_Intermediarnimetabol --> node_PomalymetabolizerPM5
    node_PomalymetabolizerPM5 --> node_THCVysokyfirstpasssa
    node_THCVysokyfirstpasssa --> node_THCdelta9tetrahydroc

    click node_CYP2D6genetickepolym "/alkaloids/mdma/" "**CYP2D6 geneticke polymorfismy a MDMA:**"
    click node_FenotypPrevalenceDop "/alkaloids/mdma/" "Fenotyp | Prevalence | Dopad na MDMA | Riziko"
```

<details>
<summary>ASCII verze diagramu</summary>

```
**CYP2D6 geneticke polymorfismy a MDMA:**

| Fenotyp | Prevalence | Dopad na MDMA | Riziko |
|---------|------------|---------------|--------|
| **Ultra-rychly metabolizer (UM)** | 5-10% | Rychlejsi konverze na MDA | Zvysena psychedelicka slozka |
| **Extenzivni metabolizer (EM)** | 65-80% | Standardni | Referencni |
| **Intermediarni metabolizer (IM)** | 10-15% | Mirne zvysene hladiny | Zvysene |
| **Pomaly metabolizer (PM)** | 5-10% | 5-10x vyssi plazmaticke hladiny | **VYSOKE - neurotoxicita** |

---

#### THC - Vysoky first-pass s aktivnim metabolitem (biodostupnost 6-20%)

THC (delta-9-tetrahydrocannabinol) je vyrazne ovlivnen first-pass metabolismem, pricemz vznikajici metabolit 11-OH-THC je farmakologicky aktivnejsi nez mateřska latka.

```

</details>
THC (peroralni podani, napr. edibles)
     |
     v
ZALUDEK
     |  (lipofilni, absorpce s tuky)
     v
TENKE STREVO
     |
     +---> CYP3A4 (enterocytarni - vyznamny podil)
     |         |
     |         v
     |    11-OH-THC (hydroxylace) [AKTIVNI, SILNEJSI]
     |         |
     |         v
     |    11-nor-9-COOH-THC (THC-COOH) [neaktivni]
     |
     v
JATRA
     |
     +---> CYP2C9 (hlavni)
     |         |
     |         v
     |    11-OH-THC [AKTIVNI]
     |         |
     |         v
     |    THC-COOH [neaktivni, detekce v moci]
     |
     +---> CYP3A4 (sekundarni)
     |
     +---> UGT (glukuronidace metabolitu)
     |
     v
SYSTEMOVA CIRKULACE:
  6-20% THC
  + 11-OH-THC (AKTIVNI METABOLIT)

SROVNANI INHALACE vs PERORALNI PODANI:
=======================================
              INHALACE        PERORALNI
THC v plazmě  Vysoke           Nizke
11-OH-THC     Nizke            Vysoke (az 3x THC)
Celkový efekt Rychlý nastup    Silnejsi, delsi
Tmax          5-10 min         1-3 hodiny
Trvani        2-4 h            4-8 h
Subjektivne   Kontrolovatelne  Mene predvidatelne
```mermaid
flowchart TD
    node_Procjsouediblesnepre["**Proc jsou 'edibles' nepredvidatelne:**"]
    node_FaktorVlivnavariabil["Faktor | Vliv na variabilitu"]
    node_010439c8["--------|---------------------"]
    node_ObsahtukuvpotraveZvy["Obsah tuku v potrave | Zvysuje absorpci 2-5x"]
    node_CYP2C9polymorfismy33["CYP2C9 polymorfismy | *3/*3 genotyp: 3x nizsi clearance"]
    node_JaternifunkceCirhoza["Jaterni funkce | Cirhoza: 2-3x vyssi biodostupnost"]
    node_GastrickypHOvlivnuje["Gastricky pH | Ovlivnuje rozpustnost"]
    node_Firstpassvariabilita["First-pass variabilita | 6-20% rozmezi = 3-nasobny rozdil"]
    node_KetaminVysokyfirstpa["#### Ketamin - Vysoky first-pass s bioaktivnimi metabolity biodostupnost 17-29%"]
    node_Ketaminalkaloidsketa["Ketamin@/alkaloids/ketamin.md prochazi intenzivnim first-pass metabolismem, pricemz jeho metabolity norketamin, hydroxynorketamin maji vlastni farmakologickou aktivitu."]

    node_Procjsouediblesnepre --> node_FaktorVlivnavariabil
    node_FaktorVlivnavariabil --> node_010439c8
    node_010439c8 --> node_ObsahtukuvpotraveZvy
    node_ObsahtukuvpotraveZvy --> node_CYP2C9polymorfismy33
    node_CYP2C9polymorfismy33 --> node_JaternifunkceCirhoza
    node_JaternifunkceCirhoza --> node_GastrickypHOvlivnuje
    node_GastrickypHOvlivnuje --> node_Firstpassvariabilita
    node_Firstpassvariabilita --> node_KetaminVysokyfirstpa
    node_KetaminVysokyfirstpa --> node_Ketaminalkaloidsketa

    click node_KetaminVysokyfirstpa "/alkaloids/ketamin/" "#### Ketamin - Vysoky first-pass s bioaktivnimi metabolity biodostupnost 17-29%"
    click node_Ketaminalkaloidsketa "/alkaloids/ketamin/" "Ketamin@/alkaloids/ketamin.md prochazi intenzivnim first-pass metabolismem, pricemz jeho metabolity norketamin, hydroxynorketamin maji vlastni farmakologickou aktivitu."
```

<details>
<summary>ASCII verze diagramu</summary>

```
**Proc jsou "edibles" nepredvidatelne:**

| Faktor | Vliv na variabilitu |
|--------|---------------------|
| Obsah tuku v potrave | Zvysuje absorpci 2-5x |
| CYP2C9 polymorfismy | *3/*3 genotyp: 3x nizsi clearance |
| Jaterni funkce | Cirhoza: 2-3x vyssi biodostupnost |
| Gastricky pH | Ovlivnuje rozpustnost |
| First-pass variabilita | 6-20% rozmezi = 3-nasobny rozdil |

---

#### Ketamin - Vysoky first-pass s bioaktivnimi metabolity (biodostupnost 17-29%)

[Ketamin](@/alkaloids/ketamin.md) prochazi intenzivnim first-pass metabolismem, pricemz jeho metabolity (norketamin, hydroxynorketamin) maji vlastni farmakologickou aktivitu.

```

</details>
KETAMIN (peroralni podani)
     |
     v
STREVNI STENA
     |
     +---> CYP3A4 (vyznamny strevni metabolismus)
     |         |
     |         v
     |    NORKETAMIN (N-demethylace)
     |
     v
JATRA (hlavni metabolicke misto)
     |
     +---> CYP3A4 (hlavni)
     |         |
     |         v
     |    NORKETAMIN [AKTIVNI, ~30% potence ketaminu]
     |         |
     |         +---> CYP2A6, CYP2B6 (hydroxylace)
     |                   |
     |                   v
     |              HYDROXYNORKETAMIN (HNK)
     |              [ANTIDEPRESIVNI - AMPA mechanismus]
     |
     +---> CYP2B6 (alternativni cesta)
     |         |
     |         v
     |    5-OH-ketamin → dalsi metabolity
     |
     +---> Glukuronidace
     |
     v
SYSTEMOVA CIRKULACE:
  17-29% ketaminu
  + Norketamin (stredne aktivni)
  + HNK (antidepresivne aktivni)

SROVNANI CEST PODANI:
=====================
              IV      IM       IN       PERORALNI
Biodostupnost 100%    93%      45-50%   17-29%
Ketamin       +++     +++      ++       +
Norketamin    +       +        ++       +++
HNK           +       +        ++       +++
Disociace     Silna   Silna    Stredni  Mirna
Antideprese   Ano     Ano      Ano      Ano (jiny profil)
```mermaid
flowchart TD
    node_Dulezitypoznateko2R6["**Dulezity poznatek o 2R,6R-HNK:**"]
    node_Vlastnost2R6RHNK["Vlastnost | 2R,6R-HNK"]
    node_55746411["-----------|-------------"]
    node_NMDAaktivitaMinimaln["NMDA aktivita | Minimalni Ki &gt;100 uM"]
    node_AMPApotenciaceAnopri["AMPA potenciace | Ano prime i neprime"]
    node_Antidepresivniucinek["Antidepresivni ucinek | Ano zviri modely"]
    node_DisociativniucinkyMi["Disociativni ucinky | Minimalni/zadne"]
    node_Zavislostnipotencial["Zavislostni potencial | Nizky"]
    node_KlinickypotencialVys["Klinicky potencial | Vysoky bez disociace"]
    node_Enzymyfirstpassmetab["## Enzymy first-pass metabolismu"]
    node_CYP450system["### CYP450 system"]
    node_CytochromP450jerodin["Cytochrom P450 je rodina hem-obsahujicich oxidaz zodpovednych za metabolismus &gt;75% vsech leciv."]
    node_IzoformaPodilnametab["Izoforma | Podil na metabolismu leciv | Substráty psychoaktivni | Lokalizace"]
    node_3cbc38a0["----------|---------------------------|---------------------------|------------"]
    node_CYP3A450Ketaminalkal["**CYP3A4** | ~50% | Ketamin@/alkaloids/ketamin.md, THC, alprazolam, midazolam | Jatra, strevo"]
    node_CYP2D625MDMAalkaloid["**CYP2D6** | ~25% | MDMA@/alkaloids/mdma.md, DXM, kodein, amfetaminy | Jatra"]
    node_CYP2C910THCibuprofen["**CYP2C9** | ~10% | THC, ibuprofen | Jatra"]
    node_CYP2C195DiazepamJatr["**CYP2C19** | ~5% | Diazepam | Jatra"]
    node_CYP1A25KofeinLSDalka["**CYP1A2** | ~5% | Kofein, LSD@/alkaloids/lsd.md castecne | Jatra"]
    node_CYP2B65Ketaminalkalo["**CYP2B6** | ~5% | Ketamin@/alkaloids/ketamin.md, metadon | Jatra"]
    node_MAOmonoaminooxidaza["### MAO monoaminooxidaza"]
    node_IzoformaLokalizaceSu["Izoforma | Lokalizace | Substráty | Vyznam pro first-pass"]
    node_2a47fa3d["----------|------------|-----------|----------------------"]
    node_MAOAGITjatramozekSer["**MAO-A** | GIT, jatra, mozek | Serotonin@/glossary/serotonin.md, noradrenalin, DMT@/alkaloids/dmt.md, tyramin | **Kriticka** - kompletne degraduje DMT"]
    node_MAOBMozektrombocytyD["**MAO-B** | Mozek, trombocyty | Dopamin, fenylethylamin | Nizsi vyznam pro first-pass"]
    node_UGTUDPglukuronosyltr["### UGT UDP-glukuronosyltransferaza"]
    node_IzoformaSubstrtyVyzn["Izoforma | Substráty | Vyznam"]
    node_1eeb7fca["----------|-----------|--------"]
    node_UGT2B7MorfinM3GM6GHl["**UGT2B7** | Morfin  M3G, M6G | Hlavni metabolicka cesta morfinu"]
    node_UGT1A10Psilocinalkal["**UGT1A10** | Psilocin@/alkaloids/psilocin.md  glukuronid | Hlavni eliminacni cesta psilocinu"]
    node_UGT1A1Bilirubinmnohe["**UGT1A1** | Bilirubin, mnohe fenoly | Siroky substratovy profil"]
    node_Alkalickafosfataza["### Alkalicka fosfataza"]
    node_LokalizaceSubstrtyVy["Lokalizace | Substráty | Vyznam"]
    node_8e3732a0["------------|-----------|--------"]
    node_Strevnistenabrushbor["Strevni stena brush border | Psilocybin@/alkaloids/psilocybin.md  psilocin@/alkaloids/psilocin.md | Aktivace prodrug psilocybinu"]
    node_JatrakostiFosfoester["Jatra, kosti | Fosfoestery obecne | Obecna defosforylace"]
    node_Strategieobejitifirs["## Strategie obejiti first-pass efektu"]
    node_Alternativnicestypod["### Alternativni cesty podani"]
    node_Nektercestypodanicas["Nekteré cesty podani castecne nebo zcela obchazeji first-pass metabolismus:"]
    node_CestapodaniFirstpass["Cesta podani | First-pass | Mechanismus obejiti | Priklady"]
    node_8c7b0e73["--------------|------------|---------------------|----------"]
    node_IntravnozniivZadny0P["**Intravnozni i.v.** | Zadny 0% | Prima do systemove cirkulace | Ketamin, DMT"]
    node_IntramuskulariimZadn["**Intramuskulari i.m.** | Zadny 0% | Absorpce do kapilár, ne portalni zila | Ketamin"]
    node_SublingualnislCastec["**Sublingualni s.l.** | Castecny | Absorpce do v. jugularis  v. cava | LSD@/alkaloids/lsd.md blottery"]
    node_IntranazalniinCastec["**Intranazalni i.n.** | Castecny | Absorpce pres nosni sliznici | Esketamin Spravato"]
    node_InhalacniZadny0Plicn["**Inhalacni** | Zadny 0% | Plicni absorpce  plicni zily  srdce | DMT, THC vaporizace"]
    node_RektalniCastecny50Do["**Rektalni** | Castecny 50% | Dolni rektalni zily obchazeji portalni oběh | Nektera psychedelika"]
    node_TransdermalnZadny0Pr["**Transdermalní** | Zadny 0% | Prima do kapilár | Fentanyl nalepky"]
    node_BukalniCastecnyAbsor["**Bukalni** | Castecny | Absorpce pres ustnl sliznici | Nektera sublingualni"]
    node_Farmakologickamodula["### Farmakologicka modulace"]
    node_StrategieMechanismus["Strategie | Mechanismus | Priklad"]
    node_65132861["-----------|-------------|---------"]
    node_MAOIpharmacologymaoi["**MAOI@/pharmacology/maoi.md** | Inhibice MAO-A ve strevu a jatrech | Harmala alkaloidy + DMT@/alkaloids/dmt.md = ayahuasca"]
    node_CYPinhibiceInhibiceh["**CYP inhibice** | Inhibice hepatalnich CYP enzymů | Grapefruitovy dzus CYP3A4"]
    node_FormulaceLiposomynan["**Formulace** | Liposomy, nanočástice, entericky obal | Experimentální"]
    node_ProdrugdesignStabiln["**Prodrug design** | Stabilni forma, aktivace po absorpci | Psilocybin@/alkaloids/psilocybin.md fosfatovy ester psilocinu"]
    node_Genetickepolymorfism["## Geneticke polymorfismy a first-pass variabilita"]
    node_CYP2D6polymorfismy["### CYP2D6 polymorfismy"]
    node_CYP2D6jenejvicepolym["CYP2D6 je nejvice polymorfni z klinicky vyznamnych CYP enzymu s vice nez 100 alelickymi variantami."]

    node_Dulezitypoznateko2R6 --> node_Vlastnost2R6RHNK
    node_Vlastnost2R6RHNK --> node_55746411
    node_55746411 --> node_NMDAaktivitaMinimaln
    node_NMDAaktivitaMinimaln --> node_AMPApotenciaceAnopri
    node_AMPApotenciaceAnopri --> node_Antidepresivniucinek
    node_Antidepresivniucinek --> node_DisociativniucinkyMi
    node_DisociativniucinkyMi --> node_Zavislostnipotencial
    node_Zavislostnipotencial --> node_KlinickypotencialVys
    node_KlinickypotencialVys --> node_Enzymyfirstpassmetab
    node_Enzymyfirstpassmetab --> node_CYP450system
    node_CYP450system --> node_CytochromP450jerodin
    node_CytochromP450jerodin --> node_IzoformaPodilnametab
    node_IzoformaPodilnametab --> node_3cbc38a0
    node_3cbc38a0 --> node_CYP3A450Ketaminalkal
    node_CYP3A450Ketaminalkal --> node_CYP2D625MDMAalkaloid
    node_CYP2D625MDMAalkaloid --> node_CYP2C910THCibuprofen
    node_CYP2C910THCibuprofen --> node_CYP2C195DiazepamJatr
    node_CYP2C195DiazepamJatr --> node_CYP1A25KofeinLSDalka
    node_CYP1A25KofeinLSDalka --> node_CYP2B65Ketaminalkalo
    node_CYP2B65Ketaminalkalo --> node_MAOmonoaminooxidaza
    node_MAOmonoaminooxidaza --> node_IzoformaLokalizaceSu
    node_IzoformaLokalizaceSu --> node_2a47fa3d
    node_2a47fa3d --> node_MAOAGITjatramozekSer
    node_MAOAGITjatramozekSer --> node_MAOBMozektrombocytyD
    node_MAOBMozektrombocytyD --> node_UGTUDPglukuronosyltr
    node_UGTUDPglukuronosyltr --> node_IzoformaSubstrtyVyzn
    node_IzoformaSubstrtyVyzn --> node_1eeb7fca
    node_1eeb7fca --> node_UGT2B7MorfinM3GM6GHl
    node_UGT2B7MorfinM3GM6GHl --> node_UGT1A10Psilocinalkal
    node_UGT1A10Psilocinalkal --> node_UGT1A1Bilirubinmnohe
    node_UGT1A1Bilirubinmnohe --> node_Alkalickafosfataza
    node_Alkalickafosfataza --> node_LokalizaceSubstrtyVy
    node_LokalizaceSubstrtyVy --> node_8e3732a0
    node_8e3732a0 --> node_Strevnistenabrushbor
    node_Strevnistenabrushbor --> node_JatrakostiFosfoester
    node_JatrakostiFosfoester --> node_Strategieobejitifirs
    node_Strategieobejitifirs --> node_Alternativnicestypod
    node_Alternativnicestypod --> node_Nektercestypodanicas
    node_Nektercestypodanicas --> node_CestapodaniFirstpass
    node_CestapodaniFirstpass --> node_8c7b0e73
    node_8c7b0e73 --> node_IntravnozniivZadny0P
    node_IntravnozniivZadny0P --> node_IntramuskulariimZadn
    node_IntramuskulariimZadn --> node_SublingualnislCastec
    node_SublingualnislCastec --> node_IntranazalniinCastec
    node_IntranazalniinCastec --> node_InhalacniZadny0Plicn
    node_InhalacniZadny0Plicn --> node_RektalniCastecny50Do
    node_RektalniCastecny50Do --> node_TransdermalnZadny0Pr
    node_TransdermalnZadny0Pr --> node_BukalniCastecnyAbsor
    node_BukalniCastecnyAbsor --> node_Farmakologickamodula
    node_Farmakologickamodula --> node_StrategieMechanismus
    node_StrategieMechanismus --> node_65132861
    node_65132861 --> node_MAOIpharmacologymaoi
    node_MAOIpharmacologymaoi --> node_CYPinhibiceInhibiceh
    node_CYPinhibiceInhibiceh --> node_FormulaceLiposomynan
    node_FormulaceLiposomynan --> node_ProdrugdesignStabiln
    node_ProdrugdesignStabiln --> node_Genetickepolymorfism
    node_Genetickepolymorfism --> node_CYP2D6polymorfismy
    node_CYP2D6polymorfismy --> node_CYP2D6jenejvicepolym

    click node_CYP3A450Ketaminalkal "/alkaloids/ketamin/" "**CYP3A4** | ~50% | Ketamin@/alkaloids/ketamin.md, THC, alprazolam, midazolam | Jatra, strevo"
    click node_CYP2D625MDMAalkaloid "/alkaloids/mdma/" "**CYP2D6** | ~25% | MDMA@/alkaloids/mdma.md, DXM, kodein, amfetaminy | Jatra"
    click node_CYP1A25KofeinLSDalka "/alkaloids/lsd/" "**CYP1A2** | ~5% | Kofein, LSD@/alkaloids/lsd.md castecne | Jatra"
    click node_CYP2B65Ketaminalkalo "/alkaloids/ketamin/" "**CYP2B6** | ~5% | Ketamin@/alkaloids/ketamin.md, metadon | Jatra"
    click node_MAOmonoaminooxidaza "/glossary/mao/" "### MAO monoaminooxidaza"
    click node_MAOAGITjatramozekSer "/alkaloids/dmt/" "**MAO-A** | GIT, jatra, mozek | Serotonin@/glossary/serotonin.md, noradrenalin, DMT@/alkaloids/dmt.md, tyramin | **Kriticka** - kompletne degraduje DMT"
    click node_MAOBMozektrombocytyD "/glossary/mao/" "**MAO-B** | Mozek, trombocyty | Dopamin, fenylethylamin | Nizsi vyznam pro first-pass"
    click node_UGT1A10Psilocinalkal "/alkaloids/psilocin/" "**UGT1A10** | Psilocin@/alkaloids/psilocin.md  glukuronid | Hlavni eliminacni cesta psilocinu"
    click node_Strevnistenabrushbor "/alkaloids/psilocybin/" "Strevni stena brush border | Psilocybin@/alkaloids/psilocybin.md  psilocin@/alkaloids/psilocin.md | Aktivace prodrug psilocybinu"
    click node_IntravnozniivZadny0P "/alkaloids/dmt/" "**Intravnozni i.v.** | Zadny 0% | Prima do systemove cirkulace | Ketamin, DMT"
    click node_IntramuskulariimZadn "/alkaloids/ketamin/" "**Intramuskulari i.m.** | Zadny 0% | Absorpce do kapilár, ne portalni zila | Ketamin"
    click node_SublingualnislCastec "/alkaloids/lsd/" "**Sublingualni s.l.** | Castecny | Absorpce do v. jugularis  v. cava | LSD@/alkaloids/lsd.md blottery"
    click node_IntranazalniinCastec "/alkaloids/ketamin/" "**Intranazalni i.n.** | Castecny | Absorpce pres nosni sliznici | Esketamin Spravato"
    click node_InhalacniZadny0Plicn "/alkaloids/dmt/" "**Inhalacni** | Zadny 0% | Plicni absorpce  plicni zily  srdce | DMT, THC vaporizace"
    click node_MAOIpharmacologymaoi "/pharmacology/maoi/" "**MAOI@/pharmacology/maoi.md** | Inhibice MAO-A ve strevu a jatrech | Harmala alkaloidy + DMT@/alkaloids/dmt.md = ayahuasca"
    click node_ProdrugdesignStabiln "/alkaloids/psilocybin/" "**Prodrug design** | Stabilni forma, aktivace po absorpci | Psilocybin@/alkaloids/psilocybin.md fosfatovy ester psilocinu"
```

<details>
<summary>ASCII verze diagramu</summary>

```
**Dulezity poznatek o (2R,6R)-HNK:**

| Vlastnost | (2R,6R)-HNK |
|-----------|-------------|
| NMDA aktivita | Minimalni (Ki >100 uM) |
| AMPA potenciace | Ano (prime i neprime) |
| Antidepresivni ucinek | Ano (zviri modely) |
| Disociativni ucinky | Minimalni/zadne |
| Zavislostni potencial | Nizky |
| Klinicky potencial | Vysoky (bez disociace) |

---

## Enzymy first-pass metabolismu

### CYP450 system

Cytochrom P450 je rodina hem-obsahujicich oxidaz zodpovednych za metabolismus >75% vsech leciv.

| Izoforma | Podil na metabolismu leciv | Substráty (psychoaktivni) | Lokalizace |
|----------|---------------------------|---------------------------|------------|
| **CYP3A4** | ~50% | [Ketamin](@/alkaloids/ketamin.md), THC, alprazolam, midazolam | Jatra, strevo |
| **CYP2D6** | ~25% | [MDMA](@/alkaloids/mdma.md), DXM, kodein, amfetaminy | Jatra |
| **CYP2C9** | ~10% | THC, ibuprofen | Jatra |
| **CYP2C19** | ~5% | Diazepam | Jatra |
| **CYP1A2** | ~5% | Kofein, [LSD](@/alkaloids/lsd.md) (castecne) | Jatra |
| **CYP2B6** | ~5% | [Ketamin](@/alkaloids/ketamin.md), metadon | Jatra |

### MAO (monoaminooxidaza)

| Izoforma | Lokalizace | Substráty | Vyznam pro first-pass |
|----------|------------|-----------|----------------------|
| **MAO-A** | GIT, jatra, mozek | [Serotonin](@/glossary/serotonin.md), noradrenalin, [DMT](@/alkaloids/dmt.md), tyramin | **Kriticka** - kompletne degraduje DMT |
| **MAO-B** | Mozek, trombocyty | Dopamin, fenylethylamin | Nizsi vyznam pro first-pass |

### UGT (UDP-glukuronosyltransferaza)

| Izoforma | Substráty | Vyznam |
|----------|-----------|--------|
| **UGT2B7** | Morfin → M3G, M6G | Hlavni metabolicka cesta morfinu |
| **UGT1A10** | [Psilocin](@/alkaloids/psilocin.md) → glukuronid | Hlavni eliminacni cesta psilocinu |
| **UGT1A1** | Bilirubin, mnohe fenoly | Siroky substratovy profil |

### Alkalicka fosfataza

| Lokalizace | Substráty | Vyznam |
|------------|-----------|--------|
| Strevni stena (brush border) | [Psilocybin](@/alkaloids/psilocybin.md) → [psilocin](@/alkaloids/psilocin.md) | Aktivace prodrug psilocybinu |
| Jatra, kosti | Fosfoestery obecne | Obecna defosforylace |

---

## Strategie obejiti first-pass efektu

### Alternativni cesty podani

Nekteré cesty podani castecne nebo zcela obchazeji first-pass metabolismus:

| Cesta podani | First-pass | Mechanismus obejiti | Priklady |
|--------------|------------|---------------------|----------|
| **Intravnozni (i.v.)** | Zadny (0%) | Prima do systemove cirkulace | Ketamin, DMT |
| **Intramuskulari (i.m.)** | Zadny (0%) | Absorpce do kapilár, ne portalni zila | Ketamin |
| **Sublingualni (s.l.)** | Castecny | Absorpce do v. jugularis → v. cava | [LSD](@/alkaloids/lsd.md) blottery |
| **Intranazalni (i.n.)** | Castecny | Absorpce pres nosni sliznici | Esketamin (Spravato) |
| **Inhalacni** | Zadny (0%) | Plicni absorpce → plicni zily → srdce | DMT, THC (vaporizace) |
| **Rektalni** | Castecny (50%) | Dolni rektalni zily obchazeji portalni oběh | Nektera psychedelika |
| **Transdermalní** | Zadny (0%) | Prima do kapilár | Fentanyl nalepky |
| **Bukalni** | Castecny | Absorpce pres ustnl sliznici | Nektera sublingualni |

### Farmakologicka modulace

| Strategie | Mechanismus | Priklad |
|-----------|-------------|---------|
| **[MAOI](@/pharmacology/maoi.md)** | Inhibice MAO-A ve strevu a jatrech | Harmala alkaloidy + [DMT](@/alkaloids/dmt.md) = ayahuasca |
| **CYP inhibice** | Inhibice hepatalnich CYP enzymů | Grapefruitovy dzus (CYP3A4) |
| **Formulace** | Liposomy, nanočástice, entericky obal | Experimentální |
| **Prodrug design** | Stabilni forma, aktivace po absorpci | [Psilocybin](@/alkaloids/psilocybin.md) (fosfatovy ester psilocinu) |

---

## Geneticke polymorfismy a first-pass variabilita

### CYP2D6 polymorfismy

CYP2D6 je nejvice polymorfni z klinicky vyznamnych CYP enzymu s vice nez 100 alelickymi variantami.

```

</details>
CYP2D6 FENOTYPY A DOPAD NA PSYCHOAKTIVNI LATKY

ULTRA-RYCHLI METABOLIZERI (UM) - 5-10% populace
+--------------------------------------------------+
| Genotyp: Duplikace/multiplikace CYP2D6            |
| Prevalence: 1-2% Kavkazci, 10-29% Etiopie/Arabi  |
|                                                    |
| Dopad:                                             |
| - MDMA: Rychla konverze na MDA → vice psychedelicka|
| - Kodein: Rychla konverze na morfin → predavkovani |
| - DXM: Rychly metabolismus → nizsi ucinek          |
+--------------------------------------------------+

POMALI METABOLIZERI (PM) - 5-10% kavkazske populace
+--------------------------------------------------+
| Genotyp: *3/*4, *4/*4, *5/*5 (nefunkcni alely)    |
| Prevalence: 6-10% Kavkazci, 1-2% Asiate           |
|                                                    |
| Dopad:                                             |
| - MDMA: 5-10x vyssi hladiny → NEUROTOXICITA       |
| - DXM: Intenzivni disociace i pri nizkych davkach  |
| - Kodein: Zadny analgeticky ucinek (ne → morfin)   |
+--------------------------------------------------+
```mermaid
flowchart TD
    node_CYP2C9polymorfismyTH["### CYP2C9 polymorfismy THC"]
    node_GenotypPrevalenceKav["Genotyp | Prevalence Kavkazci | Dopad na THC"]
    node_01fc365c["---------|----------------------|--------------"]
    node_11EM65Normalnimetabo["*1/*1 EM | 65% | Normalni metabolismus"]
    node_13IM2515xvyssiAUC["*1/*3 IM | 25% | 1.5x vyssi AUC"]
    node_33PM53xvyssiAUCprodl["*3/*3 PM | 5% | 3x vyssi AUC, prodlouzeny ucinek"]
    node_Klinickedusledky["## Klinicke dusledky"]
    node_Davkovanipriruznychc["### Davkovani pri ruznych cestach podani"]
    node_LatkapoivimPomeerpop["Latka | p.o. | i.v./i.m. | Pomeer p.o./parenteral"]
    node_5a2b9142["-------|------|-----------|------------------------"]
    node_Morfin30mg10mg31["Morfin | 30 mg | 10 mg | 3:1"]
    node_Ketaminalkaloidsketa["Ketamin@/alkaloids/ketamin.md | 200-400 mg | 0.5 mg/kg ~35 mg | 6-10:1"]
    node_THC10mgedible["THC | 10 mg edible | - | -"]
    node_DMTNeaktivni1530mgim["DMT | Neaktivni | 15-30 mg i.m. | neaplikovatelne"]
    node_Interindividualnivar["### Interindividualni variabilita"]

    node_CYP2C9polymorfismyTH --> node_GenotypPrevalenceKav
    node_GenotypPrevalenceKav --> node_01fc365c
    node_01fc365c --> node_11EM65Normalnimetabo
    node_11EM65Normalnimetabo --> node_13IM2515xvyssiAUC
    node_13IM2515xvyssiAUC --> node_33PM53xvyssiAUCprodl
    node_33PM53xvyssiAUCprodl --> node_Klinickedusledky
    node_Klinickedusledky --> node_Davkovanipriruznychc
    node_Davkovanipriruznychc --> node_LatkapoivimPomeerpop
    node_LatkapoivimPomeerpop --> node_5a2b9142
    node_5a2b9142 --> node_Morfin30mg10mg31
    node_Morfin30mg10mg31 --> node_Ketaminalkaloidsketa
    node_Ketaminalkaloidsketa --> node_THC10mgedible
    node_THC10mgedible --> node_DMTNeaktivni1530mgim
    node_DMTNeaktivni1530mgim --> node_Interindividualnivar

    click node_Ketaminalkaloidsketa "/alkaloids/ketamin/" "Ketamin@/alkaloids/ketamin.md | 200-400 mg | 0.5 mg/kg ~35 mg | 6-10:1"
    click node_DMTNeaktivni1530mgim "/alkaloids/dmt/" "DMT | Neaktivni | 15-30 mg i.m. | neaplikovatelne"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### CYP2C9 polymorfismy (THC)

| Genotyp | Prevalence (Kavkazci) | Dopad na THC |
|---------|----------------------|--------------|
| *1/*1 (EM) | 65% | Normalni metabolismus |
| *1/*3 (IM) | 25% | 1.5x vyssi AUC |
| *3/*3 (PM) | 5% | 3x vyssi AUC, prodlouzeny ucinek |

---

## Klinicke dusledky

### Davkovani pri ruznych cestach podani

| Latka | p.o. | i.v./i.m. | Pomeer p.o./parenteral |
|-------|------|-----------|------------------------|
| Morfin | 30 mg | 10 mg | 3:1 |
| [Ketamin](@/alkaloids/ketamin.md) | 200-400 mg | 0.5 mg/kg (~35 mg) | 6-10:1 |
| THC | 10 mg (edible) | - | - |
| DMT | Neaktivni | 15-30 mg (i.m.) | neaplikovatelne |

### Interindividualni variabilita

```

</details>
FAKTORY OVLIVNUJICI FIRST-PASS

GENETICKE:
├── CYP450 polymorfismy (CYP2D6, CYP2C9, CYP2C19)
├── UGT polymorfismy
├── MAO expresni varianty
└── Transporterove polymorfismy (P-gp, OATP)

FYZIOLOGICKE:
├── Vek (snizena CYP aktivita u senioru)
├── Pohlavi (mirne rozdily v CYP aktivite)
├── Jaterni funkce (cirhoza = snizeny first-pass)
├── Jaterni prutok (srdecni selhani = snizeny)
└── GIT motilita (ovlivnuje absorpci)

VNEJSI:
├── Potrava (tukova strava zvysuje absorpci lipofilnich latek)
├── Lekove interakce (CYP inhibice/indukce)
├── Koureni (indukce CYP1A2)
├── Alkohol (chronicke uzivani indukuje CYP2E1)
└── Grapefruit (inhibice CYP3A4)
```

### Bezpecnostni implikace

| Situace | Riziko | Doporuceni |
|---------|--------|------------|
| CYP2D6 PM + MDMA | 5-10x vyssi expozice | Nizsi davka nebo vyhnouti se |
| Jaterni cirhoza + libovolna latka | Zvysena biodostupnost | Vyznamna redukce davky |
| CYP3A4 inhibitor + ketamin | Zvyseny ucinek | Snizit davku ketaminu |
| Grapefruit + alprazolam | Zvysene hladiny BZ | Vyhnouti se kombinaci |
| MAOI + tyramin (potrava) | Hypertenzni krize | Striktnl dieta |

---

## Reference

### Ucebnice a prehledove clanky

1. Rowland, M. & Tozer, T.N. (2011). *Clinical Pharmacokinetics and Pharmacodynamics: Concepts and Applications*. Lippincott Williams & Wilkins. 4th ed.
2. Brunton, L.L., Hilal-Dandan, R. & Knollmann, B.C. (2018). *Goodman and Gilman's: The Pharmacological Basis of Therapeutics*. McGraw-Hill. 13th ed.
3. Thummel, K.E. et al. (1997). *Oral first-pass elimination of midazolam involves both gastrointestinal and hepatic CYP3A-mediated metabolism*. Clinical Pharmacology & Therapeutics, 62(3), 248-260.

### Psychoaktivni latky

4. Brown, R.T. et al. (2017). *Pharmacokinetics of Escalating Doses of Oral Psilocybin in Healthy Adults*. Clinical Pharmacology & Therapeutics.
5. Holze, F. et al. (2019). *Pharmacokinetics and Pharmacodynamics of Lysergic Acid Diethylamide Microdoses in Healthy Participants*. Clinical Pharmacology & Therapeutics.
6. Dinis-Oliveira, R.J. (2017). *Metabolism of psilocybin and psilocin: clinical and forensic toxicological relevance*. Drug Metabolism Reviews.
7. Riba, J. et al. (2003). *Human pharmacology of ayahuasca: subjective and cardiovascular effects, monoamine metabolite excretion, and pharmacokinetics*. Journal of Pharmacology and Experimental Therapeutics.
8. de la Torre, R. et al. (2004). *Non-linear pharmacokinetics of MDMA ('ecstasy') in humans*. British Journal of Clinical Pharmacology, 57(2), 159-169.
9. Huestis, M.A. (2007). *Human cannabinoid pharmacokinetics*. Chemistry & Biodiversity, 4(8), 1770-1804.
10. Zanos, P. et al. (2016). *NMDAR inhibition-independent antidepressant actions of ketamine metabolites*. Nature, 533(7604), 481-486.

### Geneticke polymorfismy

11. Zanger, U.M. & Schwab, M. (2013). *Cytochrome P450 enzymes in drug metabolism: regulation of gene expression, enzyme activities, and impact of genetic variation*. Pharmacology & Therapeutics, 138(1), 103-141.
12. Zhou, S.F. (2009). *Polymorphism of human cytochrome P450 2D6 and its clinical significance*. Clinical Pharmacokinetics, 48(12), 761-804.

---

## Krizove odkazy

### Farmakologie

- [Farmakokinetika](@/glossary/farmakokinetika.md) - Kompletni ADME pruvodce
- [MAOI](@/pharmacology/maoi.md) - Inhibitory monoaminooxidazy
- [Membranovy prostup](@/pharmacology/membrane-permeability.md) - BBB, placenta, testikulrani bariera

### Enzymy a receptory

- [MAO](@/glossary/mao.md) - Monoaminooxidaza
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Cil psychedelik
- [NMDA receptor](@/receptors/nmda.md) - Cil disociativ

### Psychoaktivni latky

- [DMT](@/alkaloids/dmt.md) - Extremni first-pass (MAO degradace)
- [Psilocybin](@/alkaloids/psilocybin.md) - Prodrug (aktivace first-passem)
- [LSD](@/alkaloids/lsd.md) - Nizky first-pass
- [MDMA](@/alkaloids/mdma.md) - CYP2D6 autoinhibice
- [Ketamin](@/alkaloids/ketamin.md) - Bioaktivni metabolity
- [Meskalin](@/alkaloids/mescaline.md) - Fenethylaminove psychedelikum

### Bezpecnost

- [Harm Reduction](@/harm-reduction/_index.md) - Zasady bezpecneho uzivani
- [Ayahuasca](@/preparations/ayahuasca.md) - MAOI + DMT pripravek

---

Zpet na [Farmakologie](@/pharmacology/_index.md) | [Farmakokinetika](@/glossary/farmakokinetika.md) | [MAOI](@/pharmacology/maoi.md)

---

*Tento text slouzi k edukacnim ucelum. Informace zde obsazene nejsou urceny jako lekarska ci farmakologicka rada.*
