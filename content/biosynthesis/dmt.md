+++
title = "Biosynteza DMT"
description = "Enzymaticka draha syntézy N,N-dimethyltryptaminu - role INMT enzymu a endogenni produkce v lidskem tele"
weight = 2

[taxonomies]
categories = ["biosynteza", "enzymy", "neurochemie"]
tags = ["DMT", "INMT", "tryptamin", "endogenni", "biosynteza", "AADC"]
+++

# Biosynteza DMT - Endogenni produkce "Spirit Molecule"

**N,N-Dimethyltryptamin (DMT)** je tryptaminovy alkaloid syntetizovany prostrednictvim jednoduche enzymaticke drahy z aminokyseliny [L-tryptofanu](@/amino-acids/tryptophan.md). Unikatni je skutecnost, ze DMT je **endogenni sloucenina** - je produkovan v lidskem tele, vcetne mozku. Klicovym enzymem je **INMT (indolethylamin-N-methyltransferaza)**.

---

## Prehled biosynteticke drahy

### Schema kompletni drahy

```
L-TRYPTOFAN
     |
     | [AADC - Aromaticka L-aminokyselina dekarboxylaza]
     | Dekarboxylace (odstraneni COOH)
     | Kofaktor: PLP (pyridoxal-5'-fosfat, vitamin B6)
     |
     v
TRYPTAMIN
     |
     | [INMT - Indolethylamin-N-methyltransferaza]
     | Prvni N-methylace
     | Kofaktor: SAM (S-adenosylmethionin)
     |
     v
N-METHYLTRYPTAMIN (NMT)
     |
     | [INMT - Indolethylamin-N-methyltransferaza]
     | Druha N-methylace
     | Kofaktor: SAM -> SAH
     |
     v
N,N-DIMETHYLTRYPTAMIN (DMT)
```

### Klicove charakteristiky

| Aspekt | Hodnota |
|--------|---------|
| **Prekurzor** | L-Tryptofan |
| **Produkt** | DMT |
| **Pocet kroku** | 3 enzymaticke reakce |
| **Klicove enzymy** | AADC, INMT |
| **Kofaktory** | PLP (B6), SAM |
| **Endogenni produkce** | Ano (mozek, plice, jatra) |

---

## Jednotlive enzymy

### 1. AADC - Aromaticka L-aminokyselina dekarboxylaza

#### Charakteristika

| Vlastnost | Hodnota |
|-----------|---------|
| **EC cislo** | EC 4.1.1.28 |
| **Alternativni nazvy** | DOPA dekarboxylaza, DDC |
| **Gen** | DDC (chromozom 7) |
| **Kofaktor** | PLP (pyridoxal-5'-fosfat, vitamin B6) |
| **Substráty** | L-Tryptofan, L-DOPA, 5-HTP |
| **Lokalizace** | Serotoninergni a dopaminergni neurony, periferie |

#### Reakce

```mermaid
flowchart TD
    node_COOH["COOH"]
    node_H2NCHAADCH2NCH2["H2N---C---H              AADC              H2N---CH2"]
    node_CH2PLPHCH2["CH2           PLP, H+            +          CH2"]
    node_CO2["-CO2"]
    node_IndolIndol["Indol                                    Indol"]
    node_LTRYPTOFANTRYPTAMIN["L-TRYPTOFAN                              TRYPTAMIN"]
    node_M20423M16022["M: 204,23                             M: 160,22"]

    node_COOH --> node_H2NCHAADCH2NCH2
    node_H2NCHAADCH2NCH2 --> node_CH2PLPHCH2
    node_CH2PLPHCH2 --> node_CO2
    node_CO2 --> node_IndolIndol
    node_IndolIndol --> node_LTRYPTOFANTRYPTAMIN
    node_LTRYPTOFANTRYPTAMIN --> node_M20423M16022

    click node_LTRYPTOFANTRYPTAMIN "/glossary/tryptamin/" "L-TRYPTOFAN                              TRYPTAMIN"
```

<details>
<summary>ASCII verze diagramu</summary>

```
        COOH
         |
  H2N---C---H              [AADC]              H2N---CH2
         |            ────────────────>              |
        CH2           PLP, H+            +          CH2
         |            -CO2                           |
    [Indol]                                    [Indol]

L-TRYPTOFAN                              TRYPTAMIN
 (M: 204,23)                             (M: 160,22)
```

</details>

#### Substrátova specificita

AADC je **nespicificka** - katalyzuje dekarboxylaci mnoha aromatickych aminokyselin:

| Substrát | Produkt | Vyznam |
|----------|---------|--------|
| **L-Tryptofan** | Tryptamin | DMT prekurzor |
| **5-Hydroxytryptofan** | Serotonin | Neurotransmiter |
| **L-DOPA** | Dopamin | Neurotransmiter |
| **L-Tyrosin** | Tyramin | Stopova amina |
| **L-Histidin** | Histamin | Histaminergni |

### 2. INMT - Indolethylamin-N-methyltransferaza

#### Charakteristika

| Vlastnost | Hodnota |
|-----------|---------|
| **EC cislo** | EC 2.1.1.49 |
| **Gen** | INMT (chromozom 7) |
| **Kofaktor** | S-adenosylmethionin (SAM) |
| **Produkt** | S-adenosylhomocystein (SAH) |
| **Substráty** | Tryptamin, NMT, serotonin |
| **Lokalizace** | Plice, mozek (vysoka), jatra, srdce |

#### Reakce (dve methylace)

```mermaid
flowchart TD
    node_PRVNIMETHYLACE["PRVNI METHYLACE:"]
    node_IndolIndol["Indol                      Indol"]
    node_INMT["INMT"]
    node_CH2CH2["CH2      &gt;          CH2"]
    node_SAMSAH["SAM -&gt; SAH"]
    node_NH2NHCH3["NH2                          NHCH3"]
    node_TRYPTAMINNMETHYLTRYP["TRYPTAMIN                   N-METHYLTRYPTAMIN NMT"]
    node_M16022M17424["M: 160,22                     M: 174,24"]
    node_DRUHAMETHYLACE["DRUHA METHYLACE:"]
    node_NHCH3NCH32["NHCH3                        NCH32"]
    node_NMETHYLTRYPTAMINDMT["N-METHYLTRYPTAMIN                   DMT"]
    node_M17424M18827["M: 174,24                  M: 188,27"]

    node_PRVNIMETHYLACE --> node_IndolIndol
    node_IndolIndol --> node_INMT
    node_INMT --> node_CH2CH2
    node_CH2CH2 --> node_SAMSAH
    node_SAMSAH --> node_NH2NHCH3
    node_NH2NHCH3 --> node_TRYPTAMINNMETHYLTRYP
    node_TRYPTAMINNMETHYLTRYP --> node_M16022M17424
    node_M16022M17424 --> node_DRUHAMETHYLACE
    node_DRUHAMETHYLACE --> node_NHCH3NCH32
    node_NHCH3NCH32 --> node_NMETHYLTRYPTAMINDMT
    node_NMETHYLTRYPTAMINDMT --> node_M17424M18827

    click node_TRYPTAMINNMETHYLTRYP "/glossary/tryptamin/" "TRYPTAMIN                   N-METHYLTRYPTAMIN NMT"
    click node_NMETHYLTRYPTAMINDMT "/alkaloids/dmt/" "N-METHYLTRYPTAMIN                   DMT"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PRVNI METHYLACE:

   [Indol]                      [Indol]
       |          [INMT]             |
      CH2      ──────────>          CH2
       |       SAM -> SAH            |
      NH2                          NHCH3

TRYPTAMIN                   N-METHYLTRYPTAMIN (NMT)
(M: 160,22)                     (M: 174,24)


DRUHA METHYLACE:

   [Indol]                      [Indol]
       |          [INMT]             |
      CH2      ──────────>          CH2
       |       SAM -> SAH            |
     NHCH3                        N(CH3)2

N-METHYLTRYPTAMIN                   DMT
   (M: 174,24)                  (M: 188,27)
```

</details>

#### Mechanismus SAM-dependentni methylace

```mermaid
flowchart TD
    node_SAMMETHYLACESN2mecha["SAM-METHYLACE SN2 mechanismus"]
    node_CH3["CH3"]
    node_AdenosylS["Adenosyl-S+"]
    node_INMT["\      INMT"]
    node_RNH2tryptamin["R-NH2 tryptamin"]
    node_1Substrattryptaminse["1. Substrat tryptamin se vaze do aktivniho mista INMT"]
    node_2SAMsevazedokofaktor["2. SAM se vaze do kofaktoroveho mista"]
    node_3Aminoskupinanukleof["3. Amino skupina nukleofilne atakuje methylovou skupinu SAM"]
    node_4PrenosCH3nadusikSN2["4. Prenos CH3 na dusik SN2"]
    node_5UvolneniSAHSadenosy["5. Uvolneni SAH S-adenosylhomocystein"]
    node_6UvolneniproduktuNMT["6. Uvolneni produktu NMT nebo DMT"]

    node_SAMMETHYLACESN2mecha --> node_CH3
    node_CH3 --> node_AdenosylS
    node_AdenosylS --> node_INMT
    node_INMT --> node_RNH2tryptamin
    node_RNH2tryptamin --> node_1Substrattryptaminse
    node_1Substrattryptaminse --> node_2SAMsevazedokofaktor
    node_2SAMsevazedokofaktor --> node_3Aminoskupinanukleof
    node_3Aminoskupinanukleof --> node_4PrenosCH3nadusikSN2
    node_4PrenosCH3nadusikSN2 --> node_5UvolneniSAHSadenosy
    node_5UvolneniSAHSadenosy --> node_6UvolneniproduktuNMT

    click node_RNH2tryptamin "/glossary/tryptamin/" "R-NH2 tryptamin"
    click node_1Substrattryptaminse "/glossary/tryptamin/" "1. Substrat tryptamin se vaze do aktivniho mista INMT"
    click node_6UvolneniproduktuNMT "/alkaloids/dmt/" "6. Uvolneni produktu NMT nebo DMT"
```

<details>
<summary>ASCII verze diagramu</summary>

```
SAM-METHYLACE (SN2 mechanismus)

              CH3
               |
    Adenosyl-S+
               \      [INMT]
                ────────────>
               /
           R-NH2 (tryptamin)

1. Substrat (tryptamin) se vaze do aktivniho mista INMT
2. SAM se vaze do kofaktoroveho mista
3. Amino skupina nukleofilne atakuje methylovou skupinu SAM
4. Prenos CH3 na dusik (SN2)
5. Uvolneni SAH (S-adenosylhomocystein)
6. Uvolneni produktu (NMT nebo DMT)
```

</details>

#### INMT kinetika

| Reakce | Km (uM) | Vmax (relativni) |
|--------|---------|------------------|
| **Tryptamin -> NMT** | 15-50 | 1,0 |
| **NMT -> DMT** | 50-100 | 0,7-0,8 |
| **Serotonin -> NMS** | 100-200 | 0,3-0,5 |

**Poznamka**: Tryptamin je preferovany substrat oproti serotoninu, coz vysvetluje, proc DMT prevazuje nad bufoteninem v endogenni produkci.

---

## Endogenni produkce DMT

### Evidence endogenni syntézy

#### Historicky prehled

| Rok | Objev | Vyznam |
|-----|-------|--------|
| **1965** | DMT detekovan v lidske moci | Franzen & Gross |
| **1972** | DMT v lidske krvi | Angrist et al. |
| **1976** | INMT aktivita v lidskem mozku | Saavedra & Axelrod |
| **2013** | DMT v mozku zivy potkanu | Barker et al. |
| **2019** | INMT exprese v lidske mozkove kure | Dean et al. |

#### Tkanova distribuce INMT

| Tkan | INMT exprese | Relativni |
|------|--------------|-----------|
| **Plice** | Velmi vysoka | +++++ |
| **Mozek** | Vysoka | +++ |
| **Jatra** | Stredni | ++ |
| **Srdce** | Nizsi | + |
| **Ledviny** | Nizsi | + |

### Mozkova produkce DMT

```
ENDOGENNI DMT V MOZKU

Tkane s INMT expresi:
- Mozkova kura (prefrontalni, temporalni)
- Hippocampus
- Choroidni plexus
- Pinealní žlaza (kontroverzni)

Merene koncentrace:
- Mozkova tkan: 10-50 pg/g
- CSF: Detekovatelne, nizke
- Krev: 0.1-1.0 ng/mL

Fyziologicka role: NEJASNA
Hypotezy:
1. Neuromodulátor
2. Role ve snění
3. Near-death experience mediátor
4. Sigma-1 receptor endogenní ligand
```

### Hypoteza pinealní produkce

Rick Strassman popularizoval teorii, ze DMT je produkovano pinealní žlazou:

| Aspekt | Evidence | Status |
|--------|----------|--------|
| **INMT v pinealni** | Slaba evidence | Kontroverzni |
| **DMT v pinealni** | Nezměřeno primoce | Nekonfirmovano |
| **Melatonin prekurzory** | Ano (5-MT -> 5-MeO-DMT?) | Teoreticke |

**Soucasny konsenzus**: DMT je pravdepodobne syntetizovan difuzne v mnoha tkanich, pinealní role je spekulativni.

---

## Regulace biosyntézy

### Faktory ovlivnujici DMT produkci

| Faktor | Vliv | Mechanismus |
|--------|------|-------------|
| **Dostupnost tryptofanu** | Primarni | Substratova limitace |
| **SAM hladiny** | Sekundarni | Methylacni kapacita |
| **Vitamin B6** | Nezbytny | AADC kofaktor |
| **INMT exprese** | Regulacni | Transkripční kontrola |
| **MAO aktivita** | Degradační | Metabolismus DMT |

### MAO a DMT degradace

```
DMT METABOLISMUS

DMT
 |
 | [MAO-A] - Oxidativni deaminace
 | (Hlavni degradacni cesta)
 v
Indol-3-acetalaldehyd (IAld)
 |
 | [ALDH]
 v
Indol-3-octova kyselina (IAA)
 |
 v
Eliminace

T1/2 DMT (endogenni): ~5-15 minut
```

### Proc je oralni DMT neaktivni

```
ORALNI PODANI DMT (bez MAOi)

DMT (pozity)
     |
     v
Absorpce ve streve
     |
     v
First-pass metabolismus (jatra)
     |
     | [MAO-A v jatrech]
     | Rychla degradace
     v
IAA (neaktivni)
     |
     v
ZADNY PSYCHOAKTIVNI UCINEK

RESENI: Ayahuasca
- MAO inhibitory (harmin, harmalin)
- Blokaduji hepatalni MAO
- Umoznuji DMT dosazeni mozku
```

---

## Srovnani s psilocybinovou biosyntezou

### Houbova vs. savci draha

| Aspekt | DMT (savci/rostliny) | Psilocybin (houby) |
|--------|---------------------|-------------------|
| **Prekurzor** | L-Tryptofan | L-Tryptofan |
| **Dekarboxylaza** | AADC | PsiD |
| **Hydroxylaza** | Zadna (pro DMT) | PsiH (4-hydroxylace) |
| **Kinaza** | Zadna | PsiK (fosforylace) |
| **Methyltransferaza** | INMT | PsiM |
| **Produkt** | DMT | Psilocybin |
| **Endogenni v lidech** | Ano | Ne |

### Klicove rozdily

```mermaid
flowchart TD
    node_SROVNANIDRAH["SROVNANI DRAH"]
    node_LTRYPTOFAN["L-TRYPTOFAN"]
    node_Dekarboxylace["Dekarboxylace"]
    node_TRYPTAMIN["TRYPTAMIN"]
    node_75af1692["+---------------+---------------+"]
    node_INMTPsiH["INMT                          PsiH"]
    node_Methylace4Hydroxylac["Methylace                       4-Hydroxylace"]
    node_DMT4Hydroxytryptamin["DMT                     4-Hydroxytryptamin"]
    node_NNdimethyl["N,N-dimethyl"]
    node_PsiKPsiM["PsiK + PsiM"]
    node_PSILOCYBIN["PSILOCYBIN"]
    node_4PONNDMT["4-PO-N,N-DMT"]

    node_SROVNANIDRAH --> node_LTRYPTOFAN
    node_LTRYPTOFAN --> node_Dekarboxylace
    node_Dekarboxylace --> node_TRYPTAMIN
    node_TRYPTAMIN --> node_75af1692
    node_75af1692 --> node_INMTPsiH
    node_INMTPsiH --> node_Methylace4Hydroxylac
    node_Methylace4Hydroxylac --> node_DMT4Hydroxytryptamin
    node_DMT4Hydroxytryptamin --> node_NNdimethyl
    node_NNdimethyl --> node_PsiKPsiM
    node_PsiKPsiM --> node_PSILOCYBIN
    node_PSILOCYBIN --> node_4PONNDMT

    click node_LTRYPTOFAN "/amino-acids/tryptophan/" "L-TRYPTOFAN"
    click node_TRYPTAMIN "/glossary/tryptamin/" "TRYPTAMIN"
    click node_DMT4Hydroxytryptamin "/alkaloids/dmt/" "DMT                     4-Hydroxytryptamin"
    click node_4PONNDMT "/alkaloids/dmt/" "4-PO-N,N-DMT"
```

<details>
<summary>ASCII verze diagramu</summary>

```
SROVNANI DRAH

L-TRYPTOFAN
      |
      | [Dekarboxylace]
      v
TRYPTAMIN
      |
      +---------------+---------------+
      |                               |
      v                               v
  [INMT]                          [PsiH]
  Methylace                       4-Hydroxylace
      |                               |
      v                               v
    DMT                     4-Hydroxytryptamin
(N,N-dimethyl)                        |
                                      | [PsiK + PsiM]
                                      v
                                  PSILOCYBIN
                              (4-PO-N,N-DMT)
```

</details>

---

## Endogenni DMT a psychofyziologie

### Hypotézy o funkci

| Hypoteza | Navrh | Evidence |
|----------|-------|----------|
| **Neuromodulator** | Sigma-1 receptor ligand | Stredni |
| **Dream mediator** | REM induktor | Slaba |
| **Stresova odpoved** | Cardiac arrest, hypoxie | Spekulativni |
| **NDE mediator** | Near-death psychedelie | Spekulativni |
| **Neuroprotekce** | Sigma-1 → anti-oxidant | Preklinicka |

### Sigma-1 receptor interakce

DMT je endogenni ligand sigma-1 receptoru:

```mermaid
flowchart TD
    node_DMTSigma1receptor["DMT + Sigma-1 receptor"]
    node_Chaperonovaaktivita["Chaperonova aktivita"]
    node_dc692126["+----+----+"]
    node_AntiModulace["Anti-         Modulace"]
    node_oxidantCa2signalizac["oxidant       Ca2+ signalizace"]
    node_NeuroprotekceNeuropl["Neuroprotekce  Neuroplasticita"]

    node_DMTSigma1receptor --> node_Chaperonovaaktivita
    node_Chaperonovaaktivita --> node_dc692126
    node_dc692126 --> node_AntiModulace
    node_AntiModulace --> node_oxidantCa2signalizac
    node_oxidantCa2signalizac --> node_NeuroprotekceNeuropl

    click node_DMTSigma1receptor "/alkaloids/dmt/" "DMT + Sigma-1 receptor"
```

<details>
<summary>ASCII verze diagramu</summary>

```
DMT + Sigma-1 receptor
         |
         v
Chaperonova aktivita
         |
    +----+----+
    |         |
    v         v
Anti-         Modulace
oxidant       Ca2+ signalizace
    |         |
    v         v
Neuroprotekce  Neuroplasticita
```

</details>

---

## Exogenni zdroje DMT

### Prirodni zdroje

| Zdroj | Cast | DMT obsah |
|-------|------|-----------|
| **Psychotria viridis** | Listy | 0,1-0,6% |
| **Mimosa hostilis** | Koren | 0,3-1,0% |
| **Acacia confusa** | Koren | 0,2-1,5% |
| **Anadenanthera** | Semena | DMT + 5-MeO-DMT |
| **Virola** | Pryskyrice | DMT + 5-MeO-DMT |

### Ayahuasca biosynteza

```
AYAHUASCA = DMT + MAOi

Komponent 1: Psychotria viridis (Chacruna)
- DMT producent
- Biosynteza: Tryptofan -> Tryptamin -> DMT

Komponent 2: Banisteriopsis caapi (Ayahuasca vine)
- MAO inhibitory: Harmin, Harmalin, THH
- Biosynteza: Tryptofan -> Harmalan pathway

KOMBINACE:
- MAOi blokuji intestinalni/hepatalni MAO
- DMT preziva first-pass
- Systemicka distribuce do mozku
- Psychedelicky ucinek
```

---

## Reference

### Historicke studie

1. Franzen, F. & Gross, H. (1965). *Tryptamine, N,N-dimethyltryptamine, N,N-diethyltryptamine and 5-hydroxytryptamine in human blood and urine*. Nature.

2. Saavedra, J.M. & Axelrod, J. (1972). *Psychotomimetic N-methylated tryptamines: formation in brain in vivo and in vitro*. Science.

### Soucasny vyzkum

3. Barker, S.A. et al. (2013). *LC/MS/MS analysis of the endogenous dimethyltryptamine hallucinogens, their precursors, and major metabolites in rat pineal gland microdialysate*. Biomedical Chromatography.

4. Dean, J.G. et al. (2019). *Biosynthesis and extracellular concentrations of N,N-dimethyltryptamine (DMT) in mammalian brain*. Scientific Reports.

5. Fontanilla, D. et al. (2009). *The hallucinogen N,N-dimethyltryptamine (DMT) is an endogenous sigma-1 receptor regulator*. Science.

### Enzymatika

6. Thompson, M.A. & Weinshilboum, R.M. (1998). *Rabbit lung indolethylamine N-methyltransferase*. Journal of Biological Chemistry.

---

## Krizove odkazy

### Produkty drahy
- [DMT](@/alkaloids/dmt.md) - Finalni produkt
- [Tryptamin](@/glossary/tryptamin.md) - Intermediat

### Prekurzory
- [L-Tryptofan](@/amino-acids/tryptophan.md) - Vychozi aminokyselina

### Souvisejici drahy
- [Biosynteza psilocybinu](@/biosynthesis/psilocybin.md) - Houbova draha
- [Biosynteza serotoninu](@/biosynthesis/serotonin.md) - Sdilene enzymy

### Receptory
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Psychedelicky cil
- [Sigma-1 receptor](@/receptors/sigma-1.md) - Endogenni cil

---

<- Zpet na [Biosyntézy](@/biosynthesis/_index.md) | [DMT](@/alkaloids/dmt.md) ->
