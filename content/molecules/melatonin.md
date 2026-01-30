+++
title = "Melatonin"
description = "Hormon cirkadiannich rytmu produkovaný pinealní zlazou - biosynteza, funkce a vztah k DMT"
weight = 3
insert_anchor_links = "right"

[taxonomies]
categories = ["neuroveda", "molekuly", "hormony"]
tags = ["melatonin", "cirkadianní", "spánek", "pinealní", "serotonin", "DMT", "tryptofan"]
+++

# Melatonin - Hormon noci a cirkadiannich rytmu

**Melatonin** (N-acetyl-5-methoxytryptamin) je hormon produkovaný primarne **pinealní zlazou** (šišinkou) v reakci na tmu. Reguluje cirkadianní rytmy, spanek a má antioxidacni vlastnosti. Melatonin je strukturne pribuzny [serotoninu](@/glossary/serotonin.md) a [DMT](@/alkaloids/dmt.md) - vsechny tri latky jsou derivaty tryptofanu.

---

## Chemicka struktura

### Zakladni parametry

| Vlastnost | Hodnota |
|-----------|---------|
| **Chemicky nazev** | N-acetyl-5-methoxytryptamin |
| **Molekularni vzorec** | C13H16N2O2 |
| **Molekularni hmotnost** | 232,28 g/mol |
| **CAS cislo** | 73-31-4 |
| **Strukturni trida** | Indolamin (tryptaminovy derivat) |
| **Prekurzor** | Serotonin |

### Srovnani s pribuznymy molekulami

```
TRYPTOFAN -> SEROTONIN -> MELATONIN

             5-HT                  Melatonin
         (Serotonin)
              |                        |
         HO--[Indol]             CH3O--[Indol]
              |                        |
             CH2                      CH2
              |                        |
             CH2                      CH2
              |                        |
             NH2                     NH-CO-CH3

Rozdíly:
- Serotonin: 5-OH, volna amino skupina
- Melatonin: 5-OCH3, N-acetylová skupina


              DMT                   Melatonin
              |                        |
         H--[Indol]              CH3O--[Indol]
              |                        |
             CH2                      CH2
              |                        |
             CH2                      CH2
              |                        |
           N(CH3)2                  NH-CO-CH3

Rozdíly:
- DMT: Zadna 5-substituce, N,N-dimethyl
- Melatonin: 5-methoxy, N-acetyl
```

---

## Biosynteza

### Biosynteticka draha

```
L-TRYPTOFAN
     |
     | [TPH] Tryptofan hydroxylaza
     v
5-HYDROXYTRYPTOFAN (5-HTP)
     |
     | [AADC] Aromaticka aminokyselina dekarboxylaza
     v
SEROTONIN (5-HT)
     |
     | [AANAT] Arylalkylamin N-acetyltransferaza
     | (Rate-limiting v pinealní zlaze)
     | Cirkadianní regulace - aktivní v noci
     v
N-ACETYLSEROTONIN
     |
     | [ASMT/HIOMT] Hydroxyindol-O-methyltransferaza
     | S-adenosylmethionin jako donor
     v
MELATONIN

Viz: [Biosynteza serotoninu](@/biosynthesis/serotonin.md)
```

### Regulace syntézy

```
SVETELNA REGULACE MELATONINU

DEN:                          NOC:
Svetlo                        Tma
  |                            |
  v                            v
Retina                       Retina
  |                            |
  v                            v
SCN (suprachiasmatické jadro)  SCN
  |                            |
  v                            v
INHIBICE                     AKTIVACE
sympatiku                    sympatiku
  |                            |
  v                            v
Pinealni zlaza:              Pinealni zlaza:
  |                            |
  v                            v
NIZKA AANAT                  VYSOKA AANAT
aktivita                     aktivita
  |                            |
  v                            v
NIZKY                        VYSOKY
MELATONIN                    MELATONIN
(<10 pg/mL)                  (50-200 pg/mL)

Peak: 2-4 AM
```

### Enzymy

| Enzym | Gen | Funkce | Regulace |
|-------|-----|--------|----------|
| **TPH1** | TPH1 | Serotonin synteza (periferie) | - |
| **AADC** | DDC | Dekarboxylace | - |
| **AANAT** | AANAT | N-acetylace (rate-limiting) | Cirkadianní, noradrenalin |
| **ASMT** | ASMT | O-methylace | - |

---

## Fyziologie

### Cirkadianní rytmus

```
24-HODINOVY CIRKADIANNÍ RYTMUS MELATONINU

Melatonin (pg/mL)
    ^
200 |                    *****
    |                  **     **
150 |                 *         *
    |                *           *
100 |               *             *
    |              *               *
 50 |            **                 **
    |    ******                       ******
  0 +--|----|----|----|----|----|----|----|--> Cas
       6   12   18   24    6   12   18   24
      AM        PM        AM        PM

Svetlo      Tma         Svetlo
```

### Funkce melatoninu

| Funkce | Mechanismus | Klinicky vyznam |
|--------|-------------|-----------------|
| **Regulace spanku** | MT1, MT2 receptory v SCN | Jet lag, insomnie |
| **Cirkadianní synchronizace** | Zeitgeber | Poruchy rytmu |
| **Antioxidant** | Prime zachycení ROS | Neuroprotekce |
| **Imunomodulace** | Regulace cytokinu | Imunitní funkce |
| **Reprodukce** | Sezónní regulace | Puberta |
| **Onkostaticke** | Anti-proliferativni | Vyzkum rakoviny |

### Receptory melatoninu

| Receptor | Typ | Lokalizace | Funkce |
|----------|-----|------------|--------|
| **MT1 (MTNR1A)** | GPCR (Gi) | SCN, pars tuberalis | Akutni inhibice |
| **MT2 (MTNR1B)** | GPCR (Gi) | SCN, retina | Fázový posun |
| **MT3/QR2** | Enzym (chinon reduktáza) | Jatra, ledviny | Detoxifikace? |

---

## Melatonin a DMT - kontroverze

### Pinealní zlaza a DMT

Rick Strassman popularizoval hypotézu, ze pinealní zlaza produkuje [DMT](@/alkaloids/dmt.md):

```
STRASSMANOVA HYPOTEZA

Pinealní zlaza:
- Produkuje melatonin (potvrzeno)
- Obsahuje INMT? (kontroverzni)
- Produkuje DMT? (nepotvrzeno)

HYPOTETICKA DRAHA:
Serotonin (v pinealni)
     |
     | [INMT?]
     v
5-MeO-DMT nebo DMT?
     |
     v
"Endogenni psychedelikum"?

STATUS EVIDENCE:
- INMT exprese v pinealni: SLABA
- DMT v pinealni: NEZMERENO PRIMO
- 5-MeO-DMT: Teoreticke
```

### Soucasny vedecky konsenzus

| Tvrzeni | Evidence | Status |
|---------|----------|--------|
| **Pinealni produkuje melatonin** | Silna | Potvrzeno |
| **Pinealni obsahuje INMT** | Slaba | Neprokázáno presvedcive |
| **Pinealni produkuje DMT** | Zadna prima | Spekulativni |
| **DMT je endogenní (obecne)** | Stredni | Pravdepodobne (jine tkane) |

### Strukturni souvislost

```
SPOLECNY PREKURZOR

                 L-TRYPTOFAN
                      |
           +----------+----------+
           |                     |
           v                     v
     [Serotonin draha]    [DMT draha]
           |                     |
           v                     v
      SEROTONIN             TRYPTAMIN
           |                     |
     +-----+-----+               |
     |           |               |
     v           v               v
MELATONIN   5-HIAA           DMT

STRUKTURNI PODOBNOST:
- Vsechny jsou indolové deriváty
- Vsechny vznikaji z tryptofanu
- ALE: Jine biosynteticke enzymy
- ALE: Jine tkane produkce
```

---

## Klinicke pouziti

### Indikace

| Indikace | Davka | Evidence |
|----------|-------|----------|
| **Jet lag** | 0.5-5 mg | Silna |
| **Primární insomnie** | 0.5-3 mg | Stredni |
| **Delayed sleep phase** | 0.5-3 mg | Stredni |
| **Deti s ADHD/ASD** | 1-6 mg | Rostouci |
| **Starsi pacienti** | 1-2 mg (PR) | Stredni |

### Davkovani

| Populace | Davka | Timing |
|----------|-------|--------|
| **Dospeli (insomnie)** | 0.5-3 mg | 30-60 min pred spankem |
| **Jet lag (na vychod)** | 0.5-5 mg | Pred mistnm bedtime |
| **Jet lag (na zapad)** | 0.5 mg | Pokud prilis brzy budim |
| **Deti** | 0.5-3 mg | Pod dohledem lekare |

### Vedlejsi ucinky

| Ucinek | Frekvence |
|--------|-----------|
| **Ospalost nasledujici den** | Casta |
| **Bolest hlavy** | Obcasna |
| **Závratě** | Vzacna |
| **Zive sny** | Casta |

---

## Melatonin a psychedelika

### Interakce

| Latka | Interakce | Poznamka |
|-------|-----------|----------|
| **Psilocybin** | Minimalni | Jine receptory |
| **LSD** | Minimalni | Jine receptory |
| **Ayahuasca** | Teoretická | MAOi muze zvysit melatonin |
| **DMT** | Strukturne pribuzne | Jine receptory, jina funkce |

### Melatonin a lucidní snění

Anekdotalne je melatonin spojovan se zivymi/lucidnimi sny:

| Mechanismus | Hypoteza |
|-------------|----------|
| **REM potenciace** | Zvysena REM faze |
| **Vizualni vividnost** | Kortikalni aktivace? |
| **Vzpominani snu** | Lepsi konsolidace |

---

## Reference

### Zakladni literatura

1. Reiter, R.J. (1991). *Pineal melatonin: cell biology of its synthesis and of its physiological interactions*. Endocrine Reviews.

2. Arendt, J. (2005). *Melatonin: characteristics, concerns, and prospects*. Journal of Biological Rhythms.

### Klinicke pouziti

3. Ferracioli-Oda, E. et al. (2013). *Meta-analysis: melatonin for the treatment of primary sleep disorders*. PLoS ONE.

4. Costello, R.B. et al. (2014). *The effectiveness of melatonin for promoting healthy sleep*. Nutrition Journal.

### DMT kontroverze

5. Barker, S.A. (2018). *N, N-Dimethyltryptamine (DMT), an Endogenous Hallucinogen: Past, Present, and Future Research to Determine Its Role and Function*. Frontiers in Neuroscience.

---

## Viz take

### Biosynteza
- [Biosynteza serotoninu](@/biosynthesis/serotonin.md) - Prekurzorova draha
- [Biosynteza DMT](@/biosynthesis/dmt.md) - Alternativni draha

### Molekuly
- [Serotonin](@/glossary/serotonin.md) - Prekurzor melatoninu
- [DMT](@/alkaloids/dmt.md) - Strukturne pribuzny

### Anatomie
- Pinealní zlaza - Misto produkce

---

<- Zpet na [Molekuly](@/molecules/_index.md)
