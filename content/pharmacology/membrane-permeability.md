+++
title = "Membranovy prostup"
description = "Hematoencefalicka bariera, placentarni bariera a testikulrani bariera - mechanismy prostupu psychoaktivnich latek pres biologicke membrany"
date = 2026-01-30
updated = 2026-01-30
draft = false
weight = 3

[taxonomies]
categories = ["farmakologie", "farmakokinetika"]
tags = ["BBB", "hematoencefalicka-bariera", "placenta", "testikulrani-bariera", "membranovy-prostup", "distribuce", "lipofilita", "P-glykoprotein"]

[extra]
lead = "Prostup biologickymi membranami je kritickym determinantem ucinnosti psychoaktivnich latek. Hematoencefalicka bariera (BBB) rozhoduje o tom, zda se latka dostane do mozku. Placentarni a testikulrani bariera maji zasadni vyznam pro reprodukcni bezpecnost."
complexity = "pokrocila"
reading_time = "30 min"
+++

# Membranovy prostup psychoaktivnich latek

Biologicke membrany slouzi jako selektivni bariery mezi kompartmenty organismu. Pro psychoaktivni latky jsou tri bariery zvlaste vyznamne:

1. **Hematoencefalicka bariera (BBB)** - urcuje, zda latka vyvolá ucinek na CNS
2. **Placentarni bariera** - urcuje expozici plodu
3. **Testikulrani bariera (BTB)** - chrání spermatogenezi

Pochopeni mechanismu prostupu techto bariér je zakladem pro predikci farmakokinetickych vlastnosti a bezpecnostniho profilu psychoaktivnich latek.

---

## Obecne principy membranoveho prostupu

### Mechanismy transportu pres membrany

```mermaid
graph LR
    subgraph "Membranove transportni mechanismy"
        L[Luminalní<br/>kompartment]

        subgraph M[Membrana]
            subgraph "1. Pasivni transcelularni difuze"
                TC[Lipofilni molekuly<br/>DMT, LSD, THC]
            end

            subgraph "2. Paracelularni transport"
                PC[Male hydrofilni<br/>limitovano u BBB]
            end

            subgraph "3. Aktivni influx"
                INF[GLUT1/LAT1<br/>glukoza, aminokyseliny<br/>ATP/gradient]
            end

            subgraph "4. Efflux transport"
                EFF[P-gp/BCRP<br/>xenobiotika ven<br/>ATP]
            end

            subgraph "5. Transcytoza"
                TR[Receptorem zprostredkovana<br/>transferin, insulin]
            end
        end

        A[Abluminalní<br/>kompartment]

        L -->|prostup| TC --> A
        L -.->|omezeno| PC -.-> A
        L -->|import| INF --> A
        L <--|export| EFF
        L -->|vezikuly| TR --> A
    end

    classDef passive fill:#e5e7eb,stroke:#6b7280,stroke-width:1px
    classDef active fill:#fbbf24,stroke:#f59e0b,stroke-width:2px
    classDef efflux fill:#ef4444,stroke:#dc2626,stroke-width:2px
    classDef compartment fill:#dbeafe,stroke:#2563eb,stroke-width:2px

    class TC,PC passive
    class INF,TR active
    class EFF efflux
    class L,A compartment
```mermaid
flowchart TD
    node_Faktoryovlivnujicime["### Faktory ovlivnujici membranovy prostup"]
    node_FaktorOptimalnipropr["Faktor | Optimalni pro prostup | Snizujici prostup"]
    node_f45a86e6["--------|----------------------|-------------------"]
    node_LipofilitalogPlogP13["**Lipofilita log P** | log P 1-3 | log P &lt;0 hydrofilni nebo &gt;5 zachyceni v membranach"]
    node_MolekulovahmotnostMW["**Molekulova hmotnost** | MW &lt;400-500 Da | MW &gt;500 Da"]
    node_IonizaceNeionizovana["**Ionizace** | Neionizovana forma pKa daleko od fyziologickeho pH | Plne ionizovana"]
    node_Vodikovevazby10donor["**Vodikove vazby** | &lt;10 donoru+akceptoru | Nadmerny pocet H-vazeb"]
    node_PolarnaplochaPSAPSA9["**Polarna plocha PSA** | PSA &lt;90 A^2 | PSA &gt;120 A^2"]
    node_PgpsubstratNeAnoakti["**P-gp substrat** | Ne | Ano aktivni efflux"]
    node_VazbanaproteinyNizka["**Vazba na proteiny** | Nizka-stredni | Extremne vysoka &gt;99%"]
    node_Lipinskehopravidlope["### Lipinskeho pravidlo peti Rule of Five"]
    node_Latkabudemitpravdepo["Latka bude mit pravdepodobne dobrou peroralni biodostupnost a membranovy prostup, pokud splnuje:"]

    node_Faktoryovlivnujicime --> node_FaktorOptimalnipropr
    node_FaktorOptimalnipropr --> node_f45a86e6
    node_f45a86e6 --> node_LipofilitalogPlogP13
    node_LipofilitalogPlogP13 --> node_MolekulovahmotnostMW
    node_MolekulovahmotnostMW --> node_IonizaceNeionizovana
    node_IonizaceNeionizovana --> node_Vodikovevazby10donor
    node_Vodikovevazby10donor --> node_PolarnaplochaPSAPSA9
    node_PolarnaplochaPSAPSA9 --> node_PgpsubstratNeAnoakti
    node_PgpsubstratNeAnoakti --> node_VazbanaproteinyNizka
    node_VazbanaproteinyNizka --> node_Lipinskehopravidlope
    node_Lipinskehopravidlope --> node_Latkabudemitpravdepo
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Faktory ovlivnujici membranovy prostup

| Faktor | Optimalni pro prostup | Snizujici prostup |
|--------|----------------------|-------------------|
| **Lipofilita (log P)** | log P 1-3 | log P <0 (hydrofilni) nebo >5 (zachyceni v membranach) |
| **Molekulova hmotnost** | MW <400-500 Da | MW >500 Da |
| **Ionizace** | Neionizovana forma (pKa daleko od fyziologickeho pH) | Plne ionizovana |
| **Vodikove vazby** | <10 donoru+akceptoru | Nadmerny pocet H-vazeb |
| **Polarna plocha (PSA)** | PSA <90 A^2 | PSA >120 A^2 |
| **P-gp substrat** | Ne | Ano (aktivni efflux) |
| **Vazba na proteiny** | Nizka-stredni | Extremne vysoka (>99%) |

### Lipinskeho pravidlo peti (Rule of Five)

Latka bude mit pravdepodobne dobrou peroralni biodostupnost a membranovy prostup, pokud splnuje:

```

</details>
LIPINSKEHO PRAVIDLO PETI

1. MW     <= 500 Da
2. log P  <= 5
3. H-donory  <= 5
4. H-akceptory <= 10

Psychoaktivni latky vs pravidlo:

Latka        MW    logP   H-don  H-akc  Splnuje?
----------------------------------------------------
DMT          188   1.3    1      1      ANO (vse)
Psilocin     204   1.2    2      2      ANO (vse)
LSD          323   2.9    1      4      ANO (vse)
Mescalin     211   0.7    1      4      ANO (vse)
MDMA         193   1.8    1      3      ANO (vse)
Ketamin      238   2.2    0      2      ANO (vse)
THC          314   6.9    1      2      NE (log P)
Morfin       285   0.9    2      4      ANO (vse)
```mermaid
flowchart TD
    node_Hematoencefalickabar["## Hematoencefalicka bariera BBB"]
    node_StrukturaBBB["### Struktura BBB"]
    node_Hematoencefalickabar["Hematoencefalicka bariera je specializovana struktura mozkových kapilár, ktera chrání CNS pred potencialne skodlivymi latkami z krve."]

    node_Hematoencefalickabar --> node_StrukturaBBB
    node_StrukturaBBB --> node_Hematoencefalickabar
```

<details>
<summary>ASCII verze diagramu</summary>

```
---

## Hematoencefalicka bariera (BBB)

### Struktura BBB

Hematoencefalicka bariera je specializovana struktura mozkových kapilár, ktera chrání CNS pred potencialne skodlivymi latkami z krve.

```

</details>mermaid
graph TD
    KL[Krevni lumen<br/>kapilara]

    subgraph BBB["Hematoencefalicka bariera (BBB)"]
        subgraph EB["Endotelove bunky"]
            TJ[Tight junctions<br/>ZO-1, claudin-5, occludin<br/>eliminace paracelularniho transportu]
            MP[Minimalni pinocytoza]
            ST[Specializovane transportery<br/>GLUT1, LAT1, P-gp]
        end

        BL[Bazalni lamina<br/>kolagen IV, laminin]

        subgraph PC["Pericyty"]
            PCF[20-30% pokryti kapilary<br/>regulace perfuze]
        end

        subgraph AST["Astrocytarni koncove nozky"]
            EN[99% pokryti povrchu<br/>regulace transporteru<br/>udrzba bariery]
        end
    end

    MP2[Mozkovy parenchym]

    KL --> EB
    EB --> BL
    BL --> PC
    PC --> AST
    AST --> MP2

    classDef barrier fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#f8fafc
    classDef support fill:#8b5cf6,stroke:#7c3aed,stroke-width:1px,color:#f8fafc
    classDef brain fill:#22c55e,stroke:#16a34a,stroke-width:2px,color:#f8fafc
    classDef blood fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#f8fafc

    class TJ,MP,ST barrier
    class BL,PCF,EN support
    class MP2 brain
    class KL blood
```mermaid
flowchart TD
    node_SrovnaniBBBsperifern["### Srovnani BBB s periferni kapilarou"]
    node_VlastnostMozkovkapil["Vlastnost | Mozková kapilara BBB | Periferni kapilara"]
    node_acfaaf20["-----------|----------------------|-------------------"]
    node_TightjunctionsKomple["**Tight junctions** | Kompletni TEER &gt;1500 ohm*cm2 | Fenestrované TEER ~10"]
    node_PinocytozaMinimalniA["**Pinocytoza** | Minimalni | Aktivni"]
    node_Paracelularniprostup["**Paracelularni prostup** | Zanedbatelny | Vyznamny"]
    node_EffluxpumpyVysokaexp["**Efflux pumpy** | Vysoka exprese P-gp, BCRP, MRP | Nizka"]
    node_EnzymyCYPMAOCOMTpept["**Enzymy** | CYP, MAO, COMT, peptidazy | Nizsi aktivita"]
    node_Astrocyty99pokrytien["**Astrocyty** | 99% pokryti endfeet | Zadne"]
    node_PericytyVysokahustot["**Pericyty** | Vysoka hustota | Nizka"]
    node_Detailnisrovnanimemb["### Detailni srovnani membran"]
    node_MembrnaCharakteristi["Membrána | Charakteristika | Latky s dobrým prostupem"]
    node_15ad8b65["----------|------------------|-------------------------"]
    node_KapilaryobecnFenestr["**Kapilary obecně** | Fenestracije, mezery | Většina látek"]
    node_Hematoencefalickbari["**Hematoencefalická bariéra** | Tight junctions | Lipofilní, malé"]
    node_PlacentaSelektivnZvi["**Placenta** | Selektivní | Závisí na MW, lipofilité"]
    node_TestikulrnbariraTigh["**Testikulární bariéra** | Tight junctions | Lipofilní"]
    node_TransporterynaBBB["### Transportery na BBB"]

    node_SrovnaniBBBsperifern --> node_VlastnostMozkovkapil
    node_VlastnostMozkovkapil --> node_acfaaf20
    node_acfaaf20 --> node_TightjunctionsKomple
    node_TightjunctionsKomple --> node_PinocytozaMinimalniA
    node_PinocytozaMinimalniA --> node_Paracelularniprostup
    node_Paracelularniprostup --> node_EffluxpumpyVysokaexp
    node_EffluxpumpyVysokaexp --> node_EnzymyCYPMAOCOMTpept
    node_EnzymyCYPMAOCOMTpept --> node_Astrocyty99pokrytien
    node_Astrocyty99pokrytien --> node_PericytyVysokahustot
    node_PericytyVysokahustot --> node_Detailnisrovnanimemb
    node_Detailnisrovnanimemb --> node_MembrnaCharakteristi
    node_MembrnaCharakteristi --> node_15ad8b65
    node_15ad8b65 --> node_KapilaryobecnFenestr
    node_KapilaryobecnFenestr --> node_Hematoencefalickbari
    node_Hematoencefalickbari --> node_PlacentaSelektivnZvi
    node_PlacentaSelektivnZvi --> node_TestikulrnbariraTigh
    node_TestikulrnbariraTigh --> node_TransporterynaBBB
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Srovnani BBB s periferni kapilarou

| Vlastnost | Mozková kapilara (BBB) | Periferni kapilara |
|-----------|----------------------|-------------------|
| **Tight junctions** | Kompletni (TEER >1500 ohm*cm2) | Fenestrované (TEER ~10) |
| **Pinocytoza** | Minimalni | Aktivni |
| **Paracelularni prostup** | Zanedbatelny | Vyznamny |
| **Efflux pumpy** | Vysoka exprese (P-gp, BCRP, MRP) | Nizka |
| **Enzymy** | CYP, MAO, COMT, peptidazy | Nizsi aktivita |
| **Astrocyty** | 99% pokryti (endfeet) | Zadne |
| **Pericyty** | Vysoka hustota | Nizka |

### Detailni srovnani membran

| Membrána | Charakteristika | Latky s dobrým prostupem |
|----------|------------------|-------------------------|
| **Kapilary (obecně)** | Fenestracije, mezery | Většina látek |
| **Hematoencefalická bariéra** | Tight junctions | Lipofilní, malé |
| **Placenta** | Selektivní | Závisí na MW, lipofilité |
| **Testikulární bariéra** | Tight junctions | Lipofilní |

### Transportery na BBB

```

</details>
TRANSPORTERY NA HEMATOENCEFALICKE BARIERE

LUMINALNI STRANA (krev):

EFFLUX (zpet do krve):
├── P-glykoprotein (P-gp/ABCB1) - nejdulezitejsi
│   Substráty: mnohe lipofilni latky, digoxin, vincristin
│   Inhibitory: verapamil, cyklosporin A
│
├── BCRP (ABCG2) - breast cancer resistance protein
│   Substráty: nektera cytostatika, sulfat konjugaty
│
└── MRP1-5 (ABCC1-5) - multidrug resistance protein
    Substráty: glukuronidove konjugaty, anionty

INFLUX (do mozku):
├── GLUT1 (SLC2A1) - glukoza
│   Kapacita: ~0.4 mg/min/g mozku
│
├── LAT1 (SLC7A5) - velke neutralni aminokyseliny
│   Substráty: L-DOPA, gabapentin, melphalan
│
├── CAT1 (SLC7A1) - kationicke aminokyseliny
│   Substráty: arginin, lysin
│
├── MCT1 (SLC16A1) - monokarboxylaty
│   Substráty: laktat, pyruvat, valproat
│
└── OAT/OCT - organicke anionty/kationty
    Substráty: nektera leciva

ABLUMINALNI STRANA (mozek):
└── Dalsi sada transporteru pro odstranovani
    metabolitu z mozku
```mermaid
flowchart TD
    node_ProstupBBBupsychoakt["### Prostup BBB u psychoaktivnich latek"]
    node_LatkaMWDalogPPSAA2Pg["Latka | MW Da | log P | PSA A2 | P-gp substrat | Prostup BBB | Poznamka"]
    node_107ff62e["-------|---------|-------|----------|---------------|-------------|----------"]
    node_LSDalkaloidslsdmd323["**LSD@/alkaloids/lsd.md** | 323 | 2.9 | 49 | Castecny | **Vyborny** | Vysoka lipofilita, aktivni v ng/ml"]
    node_Psilocinalkaloidspsi["**Psilocin@/alkaloids/psilocin.md** | 204 | 1.2 | 54 | Ne | **Dobry** | Aktivni forma psilocybinu@/alkaloids/psilocybin.md"]
    node_DMTalkaloidsdmtmd188["**DMT@/alkaloids/dmt.md** | 188 | 1.3 | 16 | Ne | **Dobry** | Maly, lipofilni, ale rychla degradace"]
    node_5MeODMTalkaloids5meo["**5-MeO-DMT@/alkaloids/5-meo-dmt.md** | 218 | 1.7 | 25 | Ne | **Dobry** | Mírne vyssi lipofilita nez DMT"]
    node_Meskalinalkaloidsmes["**Meskalin@/alkaloids/mescaline.md** | 211 | 0.7 | 50 | Ne | **Stredni** | Nizsi lipofilita, vyssi davky potrebne"]
    node_MDMA1931830NeDobryRy["**MDMA** | 193 | 1.8 | 30 | Ne | **Dobry** | Rychly prostup"]
    node_Ketaminalkaloidsketa["**Ketamin@/alkaloids/ketamin.md** | 238 | 2.2 | 29 | Ne | **Dobry** | Rychly nastup ucinku"]
    node_THC3146929CastecnyVy["**THC** | 314 | 6.9 | 29 | Castecny | **Vyborny** | Extremni lipofilita  sekvrestrace"]
    node_Morfin2850952AnoNizs["**Morfin** | 285 | 0.9 | 52 | **Ano** | **Nizsi** | P-gp efflux omezuje prostup"]
    node_GABA1031463NeSpatnyI["**GABA** | 103 | -1.4 | 63 | Ne | **Spatny** | Ionizovana, hydrofilni"]
    node_Diazepam2852832NeVyb["**Diazepam** | 285 | 2.8 | 32 | Ne | **Vyborny** | Referencni BBB prostupna latka"]
    node_FaktoryovlivnujiciBB["### Faktory ovlivnujici BBB prostup psychoaktivnich latek"]

    node_ProstupBBBupsychoakt --> node_LatkaMWDalogPPSAA2Pg
    node_LatkaMWDalogPPSAA2Pg --> node_107ff62e
    node_107ff62e --> node_LSDalkaloidslsdmd323
    node_LSDalkaloidslsdmd323 --> node_Psilocinalkaloidspsi
    node_Psilocinalkaloidspsi --> node_DMTalkaloidsdmtmd188
    node_DMTalkaloidsdmtmd188 --> node_5MeODMTalkaloids5meo
    node_5MeODMTalkaloids5meo --> node_Meskalinalkaloidsmes
    node_Meskalinalkaloidsmes --> node_MDMA1931830NeDobryRy
    node_MDMA1931830NeDobryRy --> node_Ketaminalkaloidsketa
    node_Ketaminalkaloidsketa --> node_THC3146929CastecnyVy
    node_THC3146929CastecnyVy --> node_Morfin2850952AnoNizs
    node_Morfin2850952AnoNizs --> node_GABA1031463NeSpatnyI
    node_GABA1031463NeSpatnyI --> node_Muscimolalkaloidsmus
    node_Muscimolalkaloidsmus --> node_Diazepam2852832NeVyb
    node_Diazepam2852832NeVyb --> node_FaktoryovlivnujiciBB

    click node_LSDalkaloidslsdmd323 "/alkaloids/lsd/" "**LSD@/alkaloids/lsd.md** | 323 | 2.9 | 49 | Castecny | **Vyborny** | Vysoka lipofilita, aktivni v ng/ml"
    click node_Psilocinalkaloidspsi "/alkaloids/psilocin/" "**Psilocin@/alkaloids/psilocin.md** | 204 | 1.2 | 54 | Ne | **Dobry** | Aktivni forma psilocybinu@/alkaloids/psilocybin.md"
    click node_DMTalkaloidsdmtmd188 "/alkaloids/dmt/" "**DMT@/alkaloids/dmt.md** | 188 | 1.3 | 16 | Ne | **Dobry** | Maly, lipofilni, ale rychla degradace"
    click node_5MeODMTalkaloids5meo "/alkaloids/dmt/" "**5-MeO-DMT@/alkaloids/5-meo-dmt.md** | 218 | 1.7 | 25 | Ne | **Dobry** | Mírne vyssi lipofilita nez DMT"
    click node_Meskalinalkaloidsmes "/alkaloids/mescaline/" "**Meskalin@/alkaloids/mescaline.md** | 211 | 0.7 | 50 | Ne | **Stredni** | Nizsi lipofilita, vyssi davky potrebne"
    click node_MDMA1931830NeDobryRy "/alkaloids/mdma/" "**MDMA** | 193 | 1.8 | 30 | Ne | **Dobry** | Rychly prostup"
    click node_Ketaminalkaloidsketa "/alkaloids/ketamin/" "**Ketamin@/alkaloids/ketamin.md** | 238 | 2.2 | 29 | Ne | **Dobry** | Rychly nastup ucinku"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Prostup BBB u psychoaktivnich latek

| Latka | MW (Da) | log P | PSA (A2) | P-gp substrat | Prostup BBB | Poznamka |
|-------|---------|-------|----------|---------------|-------------|----------|
| **[LSD](@/alkaloids/lsd.md)** | 323 | 2.9 | 49 | Castecny | **Vyborny** | Vysoka lipofilita, aktivni v ng/ml |
| **[Psilocin](@/alkaloids/psilocin.md)** | 204 | 1.2 | 54 | Ne | **Dobry** | Aktivni forma [psilocybinu](@/alkaloids/psilocybin.md) |
| **[DMT](@/alkaloids/dmt.md)** | 188 | 1.3 | 16 | Ne | **Dobry** | Maly, lipofilni, ale rychla degradace |
| **[5-MeO-DMT](@/alkaloids/5-meo-dmt.md)** | 218 | 1.7 | 25 | Ne | **Dobry** | Mírne vyssi lipofilita nez DMT |
| **[Meskalin](@/alkaloids/mescaline.md)** | 211 | 0.7 | 50 | Ne | **Stredni** | Nizsi lipofilita, vyssi davky potrebne |
| **MDMA** | 193 | 1.8 | 30 | Ne | **Dobry** | Rychly prostup |
| **[Ketamin](@/alkaloids/ketamin.md)** | 238 | 2.2 | 29 | Ne | **Dobry** | Rychly nastup ucinku |
| **THC** | 314 | 6.9 | 29 | Castecny | **Vyborny** | Extremni lipofilita → sekvrestrace |
| **Morfin** | 285 | 0.9 | 52 | **Ano** | **Nizsi** | P-gp efflux omezuje prostup |
| **GABA** | 103 | -1.4 | 63 | Ne | **Spatny** | Ionizovana, hydrofilni |
| **Diazepam** | 285 | 2.8 | 32 | Ne | **Vyborny** | Referencni BBB prostupna latka |

### Faktory ovlivnujici BBB prostup psychoaktivnich latek

```

</details>
ROZHODOVACI STROM BBB PROSTUPU

Latka
  |
  +---> MW > 500 Da?
  |        |
  |        ANO → Spatny prostup (vyjimky: transcytoza)
  |        |
  |        NE ↓
  |
  +---> log P < 0?
  |        |
  |        ANO → Spatny prostup (prilis hydrofilni)
  |        |     Vyjimky: Transporterove substráty
  |        |
  |        NE ↓
  |
  +---> log P > 5?
  |        |
  |        ANO → Sekvrestrace v membranach
  |        |     (THC: log P 6.9 → pomaly onset po p.o.)
  |        |
  |        NE ↓
  |
  +---> P-gp substrat?
  |        |
  |        ANO → Snizeny prostup (efflux)
  |        |     (Morfin: omezeny BBB prostup)
  |        |
  |        NE ↓
  |
  +---> PSA > 120 A2?
  |        |
  |        ANO → Spatny prostup
  |        |
  |        NE ↓
  |
  └──→ DOBRY BBB PROSTUP
       (vetsina klasickych psychoaktivnich latek)
```

### Specialni pripady

#### THC - paradox extremni lipofility

```
THC: log P = 6.9 (extremne lipofilni)

INHALACE:
THC → plice → krev → rychle do mozku
Tmax mozkove koncentrace: 2-5 minut
Duvod: Vysoka krevni perfuze mozku + okamzity BBB prostup

PERORALNI:
THC → GIT → jatra (high first-pass) → krev
Tmax mozkove koncentrace: 60-120 minut
Duvod: Pomala absorpce z GIT + sekvrestrace v adipozni tkani

PARADOX:
- Extremni lipofilita = vyborny BBB prostup
- ALE take = rozsahla distribuce do tukove tkane
- = Dlouhy terminalni T1/2 (20-30 hodin)
- = Pomala redistribuce zpet z tkani
- = Detekce v moci az 30+ dni
```

#### Morfin vs heroin - P-gp a BBB

```
MORFIN:
MW = 285, log P = 0.9
P-gp substrat: ANO
BBB prostup: OMEZENY (P-gp efflux)
Nastup ucinku (i.v.): 15-20 minut

HEROIN (diacetylmorfin):
MW = 369, log P = 1.6
P-gp substrat: NE (diacetylova skupina)
BBB prostup: DOBRY (obchazi P-gp)
Nastup ucinku (i.v.): 7-8 sekund (!!)

MECHANISMUS:
Heroin → prostup BBB (rychly, bez P-gp effluxu)
         |
         v
    V mozku: Esterazy
         |
         v
    6-monoacetylmorfin → MORFIN
    (v mozku, za BBB)

Heroin je de facto "BBB-prostupny" prodrug morfinu
```mermaid
flowchart TD
    node_Muscimoltransportnav["#### Muscimol - transport navzdory fyzikalne-chemickym vlastnostem"]
    node_ParametrHodnotaPredi["Parametr | Hodnota | Predikce prostupu"]
    node_67e44ab9["----------|---------|-------------------"]
    node_logP01Spatny["log P | -0.1 | Spatny"]
    node_PSA70A2Stredni["PSA | 70 A2 | Stredni"]
    node_MW114Dobry["MW | 114 | Dobry"]
    node_SkutecnyprostupDobry["**Skutecny prostup** | **Dobry** | -"]
    node_MoznevysvetleniStruk["Mozne vysvetleni: Strukturni podobnost s GABA umoznnuje vyuziti aminokyselinovych transporteru LAT, GAT na BBB."]
    node_Placentarnibariera["## Placentarni bariera"]
    node_Struktura["### Struktura"]
    node_Placentarnibarieraod["Placentarni bariera oddeluje materskou a fetalni cirkulaci. Je mene restriktivni nez BBB, ale stale predstavuje vyznamnou barieru."]

    node_Muscimoltransportnav --> node_Muscimolalkaloidsmus
    node_Muscimolalkaloidsmus --> node_ParametrHodnotaPredi
    node_ParametrHodnotaPredi --> node_67e44ab9
    node_67e44ab9 --> node_logP01Spatny
    node_logP01Spatny --> node_PSA70A2Stredni
    node_PSA70A2Stredni --> node_MW114Dobry
    node_MW114Dobry --> node_SkutecnyprostupDobry
    node_SkutecnyprostupDobry --> node_MoznevysvetleniStruk
    node_MoznevysvetleniStruk --> node_Placentarnibariera
    node_Placentarnibariera --> node_Struktura
    node_Struktura --> node_Placentarnibarieraod

    click node_Muscimoltransportnav "/alkaloids/muscimol/" "#### Muscimol - transport navzdory fyzikalne-chemickym vlastnostem"
```

<details>
<summary>ASCII verze diagramu</summary>

```
#### Muscimol - transport navzdory fyzikalne-chemickym vlastnostem


| Parametr | Hodnota | Predikce prostupu |
|----------|---------|-------------------|
| log P | -0.1 | Spatny |
| PSA | 70 A2 | Stredni |
| MW | 114 | Dobry |
| **Skutecny prostup** | **Dobry** | - |

Mozne vysvetleni: Strukturni podobnost s GABA umoznnuje vyuziti aminokyselinovych transporteru (LAT, GAT) na BBB.

---

## Placentarni bariera

### Struktura

Placentarni bariera oddeluje materskou a fetalni cirkulaci. Je mene restriktivni nez BBB, ale stale predstavuje vyznamnou barieru.

```

</details>
ARCHITEKTURA PLACENTARNI BARIERY

MATERNALNI KREV (intervilozni prostor)
              |
    ┌─────────┴─────────┐
    |                     |
    |  SYNCYTIOTROFOBLAST |  ← Kontinualni syncytium (bez mezer)
    |  - Tight junctions  |     Hlavni bariera
    |  - CYP19 (aromataza)|     Enzymaticka aktivita
    |  - P-gp, BCRP       |     Efflux pumpy
    |  - MAO              |
    |                     |
    ├─────────────────────┤
    |                     |
    |  CYTOTROFOBLAST     |  ← Zanikajici v pozni gravidite
    |  (casna gravidita)  |     → Bariera se ztenčuje
    |                     |
    ├─────────────────────┤
    |                     |
    |  BAZALNI MEMBRÁNA   |
    |                     |
    ├─────────────────────┤
    |                     |
    |  FETALNI ENDOTEL    |  ← Fenestrovaný
    |                     |     (ne tak tesny jako BBB)
    |                     |
    └─────────┬───────────┘
              |
    FETALNI KREV (pupecnikove cevy)
```mermaid
flowchart TD
    node_Zmenyvprubehugravidi["### Zmeny v prubehu gravidity"]
    node_Parametr1trimestr2tr["Parametr | 1. trimestr | 2. trimestr | 3. trimestr"]
    node_28a0d44c["----------|-------------|-------------|-------------"]
    node_Tloustkabariery25um1["**Tloustka bariery** | ~25 um | ~10 um | ~2-4 um"]
    node_CytotrofoblastPritom["**Cytotrofoblast** | Pritomen | Redukovan | Prakticky chybi"]
    node_ProstupnostNizsiStre["**Prostupnost** | Nizsi | Stredni | Vyssi"]
    node_Plocha5m210m21214m2["**Plocha** | ~5 m2 | ~10 m2 | ~12-14 m2"]
    node_PrutekkrveNizkyStred["**Prutek krve** | Nizky | Stredni | Vysoky ~600 ml/min"]
    node_Prostuppsychoaktivni["### Prostup psychoaktivnich latek pres placentu"]
    node_Vtinapsychoaktivnich["Většina psychoaktivnich latek prostupuje placentou do ruzne miry:"]
    node_LatkaPlacentarnipros["Latka | Placentarni prostup | F/M pomer | Teratogenni potencial | Kategorie rizika"]
    node_74af7e52["-------|--------------------|-----------|-----------------------|-----------------"]
    node_AlkoholethanolVolny1["**Alkohol ethanol** | **Volny** | ~1.0 | **PROKAZANY** FAS | X"]
    node_THCVysoky0104Neurora["**THC** | **Vysoky** | 0.1-0.4 | Neurorazvojove zmeny | C"]
    node_KokainVysoky0508Vask["**Kokain** | **Vysoky** | ~0.5-0.8 | Vaskulární, neurovyvoj | X"]
    node_MDMAPredpokladanyvys["**MDMA** | **Predpokladany vysoky** | Nezname | Zvířecí data - kardialne | X"]
    node_LSDalkaloidslsdmdPre["**LSD@/alkaloids/lsd.md** | **Predpokladany stredni** | Nezname | Nejasne starsi zvíreci data | X"]
    node_Psilocybinalkaloidsp["**Psilocybin@/alkaloids/psilocybin.md** | **Pravdepodobny** | Nezname | Nedostatek dat | Nezname"]
    node_Ketaminalkaloidsketa["**Ketamin@/alkaloids/ketamin.md** | **Vysoky** | ~0.7-1.0 | Apoptoza neuronu zvířecí | B kratkodobe"]
    node_BenzodiazepinyVysoky["**Benzodiazepiny** | **Vysoky** | 0.6-1.3 | Oralni stery? kontroverzni | D"]
    node_OpioidnVysokyVariabi["**Opioidní** | **Vysoky** | Variabilni | NAS neonatal abstinence | C/D"]
    node_KofeinVolny10Nizkeda["**Kofein** | **Volny** | ~1.0 | Nizke davky bezpecne | B"]
    node_NikotinVysoky09IUGRp["**Nikotin** | **Vysoky** | ~0.9 | IUGR, predcasny porod | D"]
    node_FMpomerfetalnimatern["*F/M pomer = fetalni/maternalni koncentracni pomer*"]
    node_Teratogenniobavyupsy["### Teratogenni obavy u psychoaktivnich latek"]
    node_AlkoholFetalnialkoho["#### Alkohol - Fetalni alkoholovy syndrom FAS"]

    node_Zmenyvprubehugravidi --> node_Parametr1trimestr2tr
    node_Parametr1trimestr2tr --> node_28a0d44c
    node_28a0d44c --> node_Tloustkabariery25um1
    node_Tloustkabariery25um1 --> node_CytotrofoblastPritom
    node_CytotrofoblastPritom --> node_ProstupnostNizsiStre
    node_ProstupnostNizsiStre --> node_Plocha5m210m21214m2
    node_Plocha5m210m21214m2 --> node_PrutekkrveNizkyStred
    node_PrutekkrveNizkyStred --> node_Prostuppsychoaktivni
    node_Prostuppsychoaktivni --> node_Vtinapsychoaktivnich
    node_Vtinapsychoaktivnich --> node_LatkaPlacentarnipros
    node_LatkaPlacentarnipros --> node_74af7e52
    node_74af7e52 --> node_AlkoholethanolVolny1
    node_AlkoholethanolVolny1 --> node_THCVysoky0104Neurora
    node_THCVysoky0104Neurora --> node_KokainVysoky0508Vask
    node_KokainVysoky0508Vask --> node_MDMAPredpokladanyvys
    node_MDMAPredpokladanyvys --> node_LSDalkaloidslsdmdPre
    node_LSDalkaloidslsdmdPre --> node_Psilocybinalkaloidsp
    node_Psilocybinalkaloidsp --> node_Ketaminalkaloidsketa
    node_Ketaminalkaloidsketa --> node_BenzodiazepinyVysoky
    node_BenzodiazepinyVysoky --> node_OpioidnVysokyVariabi
    node_OpioidnVysokyVariabi --> node_KofeinVolny10Nizkeda
    node_KofeinVolny10Nizkeda --> node_NikotinVysoky09IUGRp
    node_NikotinVysoky09IUGRp --> node_FMpomerfetalnimatern
    node_FMpomerfetalnimatern --> node_Teratogenniobavyupsy
    node_Teratogenniobavyupsy --> node_AlkoholFetalnialkoho

    click node_MDMAPredpokladanyvys "/alkaloids/mdma/" "**MDMA** | **Predpokladany vysoky** | Nezname | Zvířecí data - kardialne | X"
    click node_LSDalkaloidslsdmdPre "/alkaloids/lsd/" "**LSD@/alkaloids/lsd.md** | **Predpokladany stredni** | Nezname | Nejasne starsi zvíreci data | X"
    click node_Psilocybinalkaloidsp "/alkaloids/psilocybin/" "**Psilocybin@/alkaloids/psilocybin.md** | **Pravdepodobny** | Nezname | Nedostatek dat | Nezname"
    click node_Ketaminalkaloidsketa "/alkaloids/ketamin/" "**Ketamin@/alkaloids/ketamin.md** | **Vysoky** | ~0.7-1.0 | Apoptoza neuronu zvířecí | B kratkodobe"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Zmeny v prubehu gravidity

| Parametr | 1. trimestr | 2. trimestr | 3. trimestr |
|----------|-------------|-------------|-------------|
| **Tloustka bariery** | ~25 um | ~10 um | ~2-4 um |
| **Cytotrofoblast** | Pritomen | Redukovan | Prakticky chybi |
| **Prostupnost** | Nizsi | Stredni | Vyssi |
| **Plocha** | ~5 m2 | ~10 m2 | ~12-14 m2 |
| **Prutek krve** | Nizky | Stredni | Vysoky (~600 ml/min) |

### Prostup psychoaktivnich latek pres placentu

Většina psychoaktivnich latek prostupuje placentou do ruzne miry:

| Latka | Placentarni prostup | F/M pomer | Teratogenni potencial | Kategorie rizika |
|-------|--------------------|-----------|-----------------------|-----------------|
| **Alkohol (ethanol)** | **Volny** | ~1.0 | **PROKAZANY** (FAS) | X |
| **THC** | **Vysoky** | 0.1-0.4 | Neurorazvojove zmeny | C |
| **Kokain** | **Vysoky** | ~0.5-0.8 | Vaskulární, neurovyvoj | X |
| **MDMA** | **Predpokladany vysoky** | Nezname | Zvířecí data - kardialne | X |
| **[LSD](@/alkaloids/lsd.md)** | **Predpokladany stredni** | Nezname | Nejasne (starsi zvíreci data) | X |
| **[Psilocybin](@/alkaloids/psilocybin.md)** | **Pravdepodobny** | Nezname | Nedostatek dat | Nezname |
| **[Ketamin](@/alkaloids/ketamin.md)** | **Vysoky** | ~0.7-1.0 | Apoptoza neuronu (zvířecí) | B (kratkodobe) |
| **Benzodiazepiny** | **Vysoky** | 0.6-1.3 | Oralni stery? (kontroverzni) | D |
| **Opioidní** | **Vysoky** | Variabilni | NAS (neonatal abstinence) | C/D |
| **Kofein** | **Volny** | ~1.0 | Nizke davky bezpecne | B |
| **Nikotin** | **Vysoky** | ~0.9 | IUGR, predcasny porod | D |

*F/M pomer = fetalni/maternalni koncentracni pomer*

### Teratogenni obavy u psychoaktivnich latek

#### Alkohol - Fetalni alkoholovy syndrom (FAS)

```

</details>
FETALNI ALKOHOLOVY SYNDROM (FAS)

Ethanol → volny prostup placentou → fetalni krev
     |
     v
MECHANISMY POSKOZENI:
├── Prima cytotoxicita (ethanol + acetaldehyd)
├── Oxidativni stres (mitochondrialni dysfunkce)
├── Inhibice migrace neuronu (NCN-M)
├── Apoptoza neuronalnich progenitoru
├── Epigeneticke zmeny (methylace, histony)
└── Disrupce signalnich drah (Shh, Wnt, RA)

SPEKTRUM POSKOZENI (FASD):
├── FAS (plny syndrom)
│   ├── Obliccejova dysmorfie (tenke rty, hladke filtrum)
│   ├── Rust retardace
│   └── CNS dysfunkce (IQ 60-75)
│
├── pFAS (partialny FAS)
│   └── Nektera obliccejova + CNS
│
├── ARND (Alcohol-Related Neurodevelopmental Disorder)
│   └── Bez obliccejovych zmen, kognitivni deficity
│
└── ARBD (Alcohol-Related Birth Defects)
    └── Srdecni, renalni, kostni defekty

BEZPECNA DAVKA: NEEXISTUJE
(neni stanovena bezpecna hladina alkoholu v tehotenstvi)
```mermaid
flowchart TD
    node_THCaprenatalniexpozi["#### THC a prenatalni expozice"]
    node_ParametrEvidence["Parametr | Evidence"]
    node_38d16886["----------|----------"]
    node_PorodnihmotnostMirne["Porodni hmotnost | Mirne snizena meta-analyza"]
    node_PredcasnyporodZvysen["Predcasny porod | Zvysene riziko"]
    node_NeurovyvojZmenyvexek["Neurovyvoj | Zmeny v exekutivnich funkcich longitudinalni studie"]
    node_KanabinoidyavyvojCB1["Kanabinoidy a vyvoj | CB1 receptory dulezite pro neuronalni migraci"]
    node_BezpecnostNedoporuce["Bezpecnost | **Nedoporuceno v tehotenstvi**"]
    node_Ketaminaneurodevelop["#### Ketamin a neurodevelopmentalni toxicita"]

    node_THCaprenatalniexpozi --> node_ParametrEvidence
    node_ParametrEvidence --> node_38d16886
    node_38d16886 --> node_PorodnihmotnostMirne
    node_PorodnihmotnostMirne --> node_PredcasnyporodZvysen
    node_PredcasnyporodZvysen --> node_NeurovyvojZmenyvexek
    node_NeurovyvojZmenyvexek --> node_KanabinoidyavyvojCB1
    node_KanabinoidyavyvojCB1 --> node_BezpecnostNedoporuce
    node_BezpecnostNedoporuce --> node_Ketaminaneurodevelop

    click node_Ketaminaneurodevelop "/alkaloids/ketamin/" "#### Ketamin a neurodevelopmentalni toxicita"
```

<details>
<summary>ASCII verze diagramu</summary>

```
#### THC a prenatalni expozice

| Parametr | Evidence |
|----------|----------|
| Porodni hmotnost | Mirne snizena (meta-analyza) |
| Predcasny porod | Zvysene riziko |
| Neurovyvoj | Zmeny v exekutivnich funkcich (longitudinalni studie) |
| Kanabinoidy a vyvoj | CB1 receptory dulezite pro neuronalni migraci |
| Bezpecnost | **Nedoporuceno v tehotenstvi** |

#### Ketamin a neurodevelopmentalni toxicita

```

</details>
KETAMIN A VYVOJOVY MOZEK

Zvířecí data (primaty, hlodavci):
├── NMDA blokada v kritickych periodach vyvoje
│   → Zvysena apoptoza neuronu
│
├── Dosavedka citlivost:
│   3. trimestr (ekvivalent) = nejvyssi riziko
│
├── Davkova zavislost:
│   Jednorazove anestetické davky - mozne bezpecne
│   Opakované expozice - neurotoxické
│
└── Klinicky vyznam:
    - Kratke chirurgicke vykony: Pravdepodobne bezpecne
    - Opakované podani: Nedoporuceno
    - FDA warning: "Prolongovana nebo opakovana anestezie"
```mermaid
flowchart TD
    node_Ochrannemechanismypl["### Ochranne mechanismy placenty"]
    node_MechanismusFunkcePri["Mechanismus | Funkce | Priklad"]
    node_69292b33["-------------|--------|---------"]
    node_PgpABCB1Effluxxenobi["**P-gp ABCB1** | Efflux xenobiotik zpet do matky | Omezuje prostup digoxinu, nekterych cytostatik"]
    node_BCRPABCG2EffluxDopln["**BCRP ABCG2** | Efflux | Doplnkovy k P-gp"]
    node_CYP19aromatazaSteroi["**CYP19 aromataza** | Steroidni metabolismus | Ochrana pred androgenizaci"]
    node_MAODegradacemonoamin["**MAO** | Degradace monoaminu | Castecna degradace DMT teoreticky"]
    node_11betaHSD2Inaktivace["**11beta-HSD2** | Inaktivace kortizolu | Ochrana plodu pred stresem"]
    node_TestikulranibarieraB["## Testikulrani bariera BTB"]
    node_Strukturaafunkce["### Struktura a funkce"]
    node_TestikulranibarieraB["Testikulrani bariera Blood-Testis Barrier chrání vyvijejici se zarodecke bunky pred imunitnim systemem a toxickymi latkami."]

    node_Ochrannemechanismypl --> node_MechanismusFunkcePri
    node_MechanismusFunkcePri --> node_69292b33
    node_69292b33 --> node_PgpABCB1Effluxxenobi
    node_PgpABCB1Effluxxenobi --> node_BCRPABCG2EffluxDopln
    node_BCRPABCG2EffluxDopln --> node_CYP19aromatazaSteroi
    node_CYP19aromatazaSteroi --> node_MAODegradacemonoamin
    node_MAODegradacemonoamin --> node_11betaHSD2Inaktivace
    node_11betaHSD2Inaktivace --> node_TestikulranibarieraB
    node_TestikulranibarieraB --> node_Strukturaafunkce
    node_Strukturaafunkce --> node_TestikulranibarieraB

    click node_MAODegradacemonoamin "/alkaloids/dmt/" "**MAO** | Degradace monoaminu | Castecna degradace DMT teoreticky"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Ochranne mechanismy placenty

| Mechanismus | Funkce | Priklad |
|-------------|--------|---------|
| **P-gp (ABCB1)** | Efflux xenobiotik zpet do matky | Omezuje prostup digoxinu, nekterych cytostatik |
| **BCRP (ABCG2)** | Efflux | Doplnkovy k P-gp |
| **CYP19 (aromataza)** | Steroidni metabolismus | Ochrana pred androgenizaci |
| **MAO** | Degradace monoaminu | Castecna degradace DMT (teoreticky) |
| **11beta-HSD2** | Inaktivace kortizolu | Ochrana plodu pred stresem |

---

## Testikulrani bariera (BTB)

### Struktura a funkce

Testikulrani bariera (Blood-Testis Barrier) chrání vyvijejici se zarodecke bunky pred imunitnim systemem a toxickymi latkami.

```

</details>
ARCHITEKTURA TESTIKULRANI BARIERY

KREVNI KAPILARA (fenestrována)
         |
         v
INTERSTICIALNI PROSTOR
  (Leydigovy bunky - testosteron)
         |
         v
┌────────────────────────────────────────┐
│                                         │
│  BAZALNI KOMPARTMENT                    │
│  (spermatogonie, primární spermatocyty) │
│                                         │
│═══════════════════════════════════════│ ← TIGHT JUNCTIONS
│  SERTOLIHO BUNKY                       │   (claudin-11, occludin,
│  (tvorí vlastni barieru)               │    ZO-1, N-cadherin)
│═══════════════════════════════════════│
│                                         │
│  ADLUMINALNI KOMPARTMENT               │
│  (sekundarni spermatocyty,              │
│   spermatidy, spermie)                  │
│  → IMUNOLOGICKY PRIVILEGOVANE MISTO     │
│                                         │
└──────────────────────┬──────────────────┘
                       |
                  LUMEN TUBULU
                  (spermie)
```mermaid
flowchart TD
    node_SrovnaniBTBsBBB["### Srovnani BTB s BBB"]
    node_VlastnostBBBBTB["Vlastnost | BBB | BTB"]
    node_b692ada3["-----------|-----|-----"]
    node_TypbunekEndoteloveSe["**Typ bunek** | Endotelove | Sertoliho"]
    node_TightjunctionsKontin["**Tight junctions** | Kontinualni, stabilni | Dynamicke remodelace"]
    node_HlavniclaudinClaudin["**Hlavni claudin** | Claudin-5 | Claudin-11"]
    node_RemodelaceMinimalniP["**Remodelace** | Minimalni | Pravidelna spermatogeneze"]
    node_EffluxpumpyPgpBCRPMR["**Efflux pumpy** | P-gp, BCRP, MRP | P-gp nizsi exprese"]
    node_EnzymyExtenzivniStre["**Enzymy** | Extenzivni | Stredni"]
    node_ProstupnostVelminizk["**Prostupnost** | Velmi nizka | Nizka, ale dynamicka"]
    node_Prostuppsychoaktivni["### Prostup psychoaktivnich latek pres BTB"]
    node_LatkaPredpokladanypr["Latka | Predpokladany prostup | Evidence | Dopad na reprodukci"]
    node_8cae5647["-------|-----------------------|----------|---------------------"]
    node_AlkoholVysokyDobraTe["**Alkohol** | **Vysoky** | Dobra | Teratospermie, snizena motilita"]
    node_THCVysokylipofilniSt["**THC** | **Vysoky** lipofilni | Stredni | Snizena motilita, akrozomalni reakce"]
    node_MDMAalkaloidsmdmamdP["**MDMA@/alkaloids/mdma.md** | **Pravdepodobny** | Zvířecí | Oxidativni stres v testes"]
    node_OpioidyStredniDobraH["**Opioidy** | **Stredni** | Dobra | Hypogonadismus, snizena fertilita"]
    node_AnabolikaVysokyVybor["**Anabolika** | **Vysoky** | Vyborny | Azoospermie, atrofie testes"]
    node_KofeinVysokyStredniM["**Kofein** | **Vysoky** | Stredni | Mozne zvyseni motility mirne davky"]
    node_Ketaminalkaloidsketa["**Ketamin@/alkaloids/ketamin.md** | **Pravdepodobny** | Omezena | Nezname dlouhodobe ucinky"]
    node_Klinickedusledkypros["### Klinicke dusledky prostupu BTB"]

    node_SrovnaniBTBsBBB --> node_VlastnostBBBBTB
    node_VlastnostBBBBTB --> node_b692ada3
    node_b692ada3 --> node_TypbunekEndoteloveSe
    node_TypbunekEndoteloveSe --> node_TightjunctionsKontin
    node_TightjunctionsKontin --> node_HlavniclaudinClaudin
    node_HlavniclaudinClaudin --> node_RemodelaceMinimalniP
    node_RemodelaceMinimalniP --> node_EffluxpumpyPgpBCRPMR
    node_EffluxpumpyPgpBCRPMR --> node_EnzymyExtenzivniStre
    node_EnzymyExtenzivniStre --> node_ProstupnostVelminizk
    node_ProstupnostVelminizk --> node_Prostuppsychoaktivni
    node_Prostuppsychoaktivni --> node_LatkaPredpokladanypr
    node_LatkaPredpokladanypr --> node_8cae5647
    node_8cae5647 --> node_AlkoholVysokyDobraTe
    node_AlkoholVysokyDobraTe --> node_THCVysokylipofilniSt
    node_THCVysokylipofilniSt --> node_MDMAalkaloidsmdmamdP
    node_MDMAalkaloidsmdmamdP --> node_OpioidyStredniDobraH
    node_OpioidyStredniDobraH --> node_AnabolikaVysokyVybor
    node_AnabolikaVysokyVybor --> node_KofeinVysokyStredniM
    node_KofeinVysokyStredniM --> node_Ketaminalkaloidsketa
    node_Ketaminalkaloidsketa --> node_Klinickedusledkypros

    click node_MDMAalkaloidsmdmamdP "/alkaloids/mdma/" "**MDMA@/alkaloids/mdma.md** | **Pravdepodobny** | Zvířecí | Oxidativni stres v testes"
    click node_Ketaminalkaloidsketa "/alkaloids/ketamin/" "**Ketamin@/alkaloids/ketamin.md** | **Pravdepodobny** | Omezena | Nezname dlouhodobe ucinky"
```

<details>
<summary>ASCII verze diagramu</summary>

```
### Srovnani BTB s BBB

| Vlastnost | BBB | BTB |
|-----------|-----|-----|
| **Typ bunek** | Endotelove | Sertoliho |
| **Tight junctions** | Kontinualni, stabilni | Dynamicke (remodelace) |
| **Hlavni claudin** | Claudin-5 | Claudin-11 |
| **Remodelace** | Minimalni | Pravidelna (spermatogeneze) |
| **Efflux pumpy** | P-gp, BCRP, MRP | P-gp (nizsi exprese) |
| **Enzymy** | Extenzivni | Stredni |
| **Prostupnost** | Velmi nizka | Nizka, ale dynamicka |

### Prostup psychoaktivnich latek pres BTB

| Latka | Predpokladany prostup | Evidence | Dopad na reprodukci |
|-------|-----------------------|----------|---------------------|
| **Alkohol** | **Vysoky** | Dobra | Teratospermie, snizena motilita |
| **THC** | **Vysoky** (lipofilni) | Stredni | Snizena motilita, akrozomalni reakce |
| **[MDMA](@/alkaloids/mdma.md)** | **Pravdepodobny** | Zvířecí | Oxidativni stres v testes |
| **Opioidy** | **Stredni** | Dobra | Hypogonadismus, snizena fertilita |
| **Anabolika** | **Vysoky** | Vyborny | Azoospermie, atrofie testes |
| **Kofein** | **Vysoky** | Stredni | Mozne zvyseni motility (mirne davky) |
| **[Ketamin](@/alkaloids/ketamin.md)** | **Pravdepodobny** | Omezena | Nezname dlouhodobe ucinky |

### Klinicke dusledky prostupu BTB

```

</details>
DOPAD PSYCHOAKTIVNICH LATEK NA MUŽSKOU REPRODUKCI

ALKOHOL (chronicky):
├── Prima gonadotoxicita
├── Sertoliho bunky: Snizena funkce
├── Leydigovy bunky: Snizeny testosteron
├── Spermatogeneze: Narušena
└── Vysledek: Oligoasthenoteratospermie

THC (chronicky):
├── CB1/CB2 receptory v testes
├── Snizeny testosteron (centralni + periferni)
├── Narušeni akrozomalni reakce
├── Abnormalni morfologie spermii
└── Reverzibilita: Castecna (mesice po vysazeni)

MDMA:
├── Oxidativni stres (5-HT deplece → ROS)
├── Apoptoza zarodeckych bunek (zvířecí data)
├── Histopatologicke zmeny (zvířecí modely)
└── Lidska data: Omezena, ale varovne signaly

OPIOIDNI ANALGETIKA (chronicky):
├── Centralni suprese GnRH → LH, FSH
├── Hypogonadismus (40-90% pacientu)
├── Snizeny testosteron
├── Oligospermie
└── Reverzibilita: Variabilni
```

---

## Farmakologicke modulace bariérovych funkci

### Modulace BBB prostupnosti

| Strategie | Mechanismus | Priklad | Status |
|-----------|-------------|---------|--------|
| **P-gp inhibice** | Blokada effluxu | Verapamil, elacridar | Klinicky (onkologie) |
| **Osmoticky skok** | Otevreni tight junctions | Manitol i.v. | Klinicky |
| **Ultrazvuk + mikrobublinky** | Mechanicke otevreni | Focused ultrasound | Klinicky trial |
| **Nanočástice** | Trojansky kon | PEG-PLGA nanočástice | Preklinicka |
| **Liposomy** | Enkapsulace | Liposomalni doxorubicin | Schvaleno |
| **Receptor-mediated transport** | Transcytoza | Transferin receptor Ab | Klinicky trial |

### Modulace placentarniho prostupu

| Strategie | Cil | Priklad |
|-----------|-----|---------|
| **Zvyseni P-gp** | Omezeni fetalni expozice | Rifampicin (induktor P-gp) |
| **Nanomedicina** | Cilena maternalni terapie | Placentou nepronikajici formulace |
| **Timing terapie** | Minimalizace expozice v kritickem obdobi | 1. trimestr = nejcitlivejsi |

---

## Klinicke doporuceni

### Tehotenstvi a psychoaktivni latky

| Kategorie | Doporuceni |
|-----------|------------|
| **Absolutne kontraindikovane** | Alkohol (jakekoli mnozstvi), kokain, amfetaminy, heroin |
| **Vysoke riziko** | THC, [MDMA](@/alkaloids/mdma.md), [LSD](@/alkaloids/lsd.md), [psilocybin](@/alkaloids/psilocybin.md) (nedostatek dat) |
| **Zvazit risk/benefit** | [Ketamin](@/alkaloids/ketamin.md) (jednorazova anestezie), benzodiazepiny (krize) |
| **Nizke riziko (mirne davky)** | Kofein (<200 mg/den) |
| **Bezpecne** | - |

### Muzska reprodukce

| Latka | Doporuceni pro planovani tehotenstvi |
|-------|--------------------------------------|
| **Alkohol** | Abstinence 3+ mesice pred koncepcí |
| **THC** | Vysazeni 3+ mesice pred koncepcí |
| **Anabolika** | Vysazeni 6-12 mesicu + endokrinologicky monitoring |
| **Opioidy** | Redukce/vysazeni + kontrola spermiogramu |
| **MDMA** | Vysazeni 3+ mesice pred koncepcí |

---

## Reference

### Hematoencefalicka bariera

1. Abbott, N.J. et al. (2010). *Structure and function of the blood-brain barrier*. Neurobiology of Disease, 37(1), 13-25.
2. Pardridge, W.M. (2005). *The blood-brain barrier: bottleneck in brain drug development*. NeuroRx, 2(1), 3-14.
3. Daneman, R. & Prat, A. (2015). *The blood-brain barrier*. Cold Spring Harbor Perspectives in Biology, 7(1), a020412.

### Placentarni bariera

4. Griffiths, S.K. & Campbell, J.P. (2015). *Placental structure, function and drug transfer*. Continuing Education in Anaesthesia Critical Care & Pain, 15(2), 84-89.
5. Myllynen, P. et al. (2005). *Human placenta: a human organ for developmental toxicology research and biomonitoring*. Placenta, 26(5), 361-371.

### Teratogeneze

6. Hoyme, H.E. et al. (2016). *Updated Clinical Guidelines for Diagnosing Fetal Alcohol Spectrum Disorders*. Pediatrics, 138(2), e20154256.
7. Gunn, J.K.L. et al. (2016). *Prenatal exposure to cannabis and maternal and child health outcomes*. BMJ Open, 6(4), e009986.

### Testikulrani bariera

8. Mruk, D.D. & Cheng, C.Y. (2015). *The Mammalian Blood-Testis Barrier: Its Biology and Regulation*. Endocrine Reviews, 36(5), 564-591.
9. Duca, Y. et al. (2019). *Substance Abuse and Male Hypogonadism*. Journal of Clinical Medicine, 8(5), 732.

### Farmakologie

10. Lipinski, C.A. et al. (2001). *Experimental and computational approaches to estimate solubility and permeability in drug discovery and development settings*. Advanced Drug Delivery Reviews, 46(1-3), 3-26.
11. Nichols, D.E. (2016). *Psychedelics*. Pharmacological Reviews, 68(2), 264-355.

---

## Krizove odkazy

### Farmakologie

- [First-pass metabolismus](@/pharmacology/first-pass-metabolism.md) - Presystemovy metabolismus
- [Farmakokinetika](@/glossary/farmakokinetika.md) - Kompletni ADME pruvodce
- [MAOI](@/pharmacology/maoi.md) - MAO inhibitory a interakce

### Receptory

- [5-HT2A receptor](@/receptors/5-ht2a.md) - Hlavni cil psychedelik
- [GABA-A receptor](@/receptors/gaba-a.md) - Cil muscimolu a sedativ
- [NMDA receptor](@/receptors/nmda.md) - Cil disociativ

### Psychoaktivni latky

- [LSD](@/alkaloids/lsd.md) - Vyborny BBB prostup
- THC - Extremni lipofilita, sekvrestrace (pripravujeme)
- Morfin - P-gp substrat, omezeny BBB prostup (pripravujeme)
- [DMT](@/alkaloids/dmt.md) - Dobry BBB prostup, ale MAO degradace

### Bezpecnost

- [Harm Reduction](@/harm-reduction/_index.md) - Zasady bezpecneho uzivani

---

Zpet na [Farmakologie](@/pharmacology/_index.md) | [Farmakokinetika](@/glossary/farmakokinetika.md) | [First-pass metabolismus](@/pharmacology/first-pass-metabolism.md)

---

*Tento text slouzi k edukacnim ucelum. Informace zde obsazene nejsou urceny jako lekarska ci farmakologicka rada. V pripade tehotenstvi nebo reprodukcnich otazek konzultujte lekare.*
