+++
title = "Biosyntéza"
description = "Enzymatické dráhy syntézy psychoaktivních alkaloidů"
weight = 20
sort_by = "weight"
insert_anchor_links = "right"
+++

# Biosyntéza psychoaktivnich alkaloidů

Tato sekce popisuje **enzymatické dráhy**, kterymi zive organismy syntetizuji psychoaktivni alkaloidy. Porozumeni biosynteze je klicove pro:

- Pochopeni evoluce psychoaktivnich latek
- Vyvoj heterologni produkce (biotechnologie)
- Studium strukturne-aktivitnich vztahu

---

## Prehled biosyntetickych drah

| Alkaloid | Prekurzor | Organismus | Klicove enzymy |
|----------|-----------|------------|----------------|
| [Psilocybin](/biosynthesis/psilocybin/) | L-Tryptofan | Houby (*Psilocybe*) | PsiD, PsiH, PsiK, PsiM |
| Serotonin | L-Tryptofan | Savci | TPH, AADC |
| DMT | L-Tryptofan | Rostliny, savci? | AADC, INMT |
| Meskalin | L-Tyrosin | Kaktusy | TDC, hydroxylazy, OMT |
| Ibogain | L-Tryptofan | *Tabernanthe iboga* | Komplexni draha |

---

## Tryptaminova draha

### Biosynteza psilocybinu

```
L-TRYPTOFAN
     |
     | [PsiD - Dekarboxyláza]
     v
TRYPTAMIN
     |
     | [PsiH - 4-Hydroxylaza]
     v
4-HYDROXYTRYPTAMIN
     |
     | [PsiK - Kinaza]
     v
NORBAEOCYSTIN
     |
     | [PsiM - Methyltransferaza]
     v
BAEOCYSTIN
     |
     | [PsiM - Methyltransferaza]
     v
PSILOCYBIN

VIZ: [Detailni popis](/biosynthesis/psilocybin/)
```

### Biosynteza serotoninu (savci)

```
L-TRYPTOFAN
     |
     | [TPH - Tryptofan hydroxylaza]
     | (limitujici krok)
     v
5-HYDROXYTRYPTOFAN (5-HTP)
     |
     | [AADC - Aromaticka dekarboxylaza]
     v
SEROTONIN (5-HT)
     |
     | [AANAT + HIOMT]
     | (v epifyze)
     v
MELATONIN
```

### Biosynteza DMT

```
L-TRYPTOFAN
     |
     | [AADC]
     v
TRYPTAMIN
     |
     | [INMT - Indolamin N-methyltransferaza]
     | (1. methylace)
     v
N-METHYLTRYPTAMIN (NMT)
     |
     | [INMT]
     | (2. methylace)
     v
N,N-DIMETHYLTRYPTAMIN (DMT)
```

---

## Fenyletylaminova draha

### Biosynteza meskalinu

```
L-TYROSIN
     |
     | [TDC - Tyrosin dekarboxylaza]
     v
TYRAMIN
     |
     | [Hydroxylazy]
     v
DOPAMIN
     |
     | [O-Methyltransferazy]
     v
3,4,5-TRIMETHOXYFENETYLAMIN
(MESKALIN)
```

---

## Ergolinova draha

### Biosynteza LSD (semisynteticka)

```
L-TRYPTOFAN + DMAPP (isoprenoidy)
     |
     v
CHANOCLAVIN-I
     |
     v
AGROCLAVIN
     |
     v
ELYMOCLAVIN
     |
     v
KYSELINA LYSERGOVÁ
     |
     | [Semisyntetická modifikace]
     | + diethylamin
     v
LSD (Lysergamid)
```

---

## Genove clustery

### Psilocybinovy cluster

```
5'───[psiD]──[psiM]──[psiH]──[psiK]───3'

Velikost: ~25 kbp
Organismy: Psilocybe, Panaeolus, Gymnopilus

Evoluce:
- Pravdepodobny horizontalni genovy prenos
- Vysoka sekvenční homologie mezi vzdálenými rody
```

---

## Heterologni exprese

### Biotechnologicka produkce

| Produkt | Hostitel | Vytezek | Status |
|---------|----------|---------|--------|
| **Psilocybin** | E. coli | ~100 mg/L | Vyvoj |
| **Psilocybin** | S. cerevisiae | ~50 mg/L | Vyvoj |
| **Psilocybin** | A. nidulans | ~200 mg/L | Vyvoj |
| **Cannabinoidy** | S. cerevisiae | Komercni | Realizovano |

---

## Vyznam pro vyzkum

1. **Farmaceuticka vyroba**: Alternativa k chemicke synteze a extrakci
2. **Strukturni analogy**: Modifikace enzymu pro nove slouceniny
3. **Evolucni biologie**: Pochopeni vzniku sekundarnich metabolitu
4. **Medicinski vyzkum**: GMP produkce pro klinicke studie

---

## Reference

1. Fricke, J., Blei, F., & Hoffmeister, D. (2017). *Enzymatic synthesis of psilocybin*. Angewandte Chemie.

2. Reynolds, H.T. et al. (2018). *Horizontal gene transfer enabled psilocybin biosynthesis*. Evolution Letters.

3. Jakobsson, M. et al. (2022). *Engineering yeast for production of psilocybin*. Metabolic Engineering.

---

Viz take:
- [Psilocybin](/alkaloids/psilocybin/) - Produkt biosyntezy
- [L-Tryptofan](/amino-acids/tryptophan/) - Prekurzor
- [Serotonin](/glossary/serotonin/) - Savci biosynteticka draha

<- Zpet na [Hlavni stranku](/)
