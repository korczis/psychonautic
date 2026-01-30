+++
title = "Agonista"
description = "Komplexni pruvodce farmakologii agonistu - plni, parcialni a inverzni agoniste, dávkové závislosti, afinita, eficacia a priklady psychoaktivnich latek"
weight = 3
insert_anchor_links = "right"

[taxonomies]
categories = ["Farmakologie", "Receptorova biologie"]
tags = ["agonista", "receptor", "farmakologie", "afinita", "eficacia", "dose-response", "psychedelika", "GABAergni latky"]
+++

# Agonista - Aktivator receptorove odpovedi

**Agonista** je latka (ligand), ktera se vaze na [receptor](@/glossary/receptor.md) a **aktivuje jej**, cimz spousti biologickou odpoved. Na rozdil od antagonistu, kteri pouze blokuji vazebne misto, agoniste vyvolavaji konformacni zmenu receptoru vedouci k signalni transdukci. Agoniste jsou zakladem ucinkuĺ vetsiny psychoaktivnich latek vcetne [psychedelik](@/alkaloids/_index.md), [GABAergních latek](@/glossary/gaba.md) a opioidnich analgetik.

---

## Zakladni definice

### Co je agonista?

| Vlastnost | Popis |
|-----------|-------|
| **Definice** | Ligand aktivujici receptor |
| **Vazba** | Orthostericke nebo alostericke misto |
| **Efekt** | Konformacni zmena, signalni transdukce |
| **Vnitrni aktivita** | > 0 (pozitivni) |
| **Protejsek** | Antagonista (blokuje bez aktivace) |

### Etymologie

Termin pochazi z reckeho **agonistes** (zapasnik, soutezici), coz odkazuje na "soutezneni" o vazebne misto s endogennim ligandem nebo jinymi latkami.

---

## Klasifikace agonistu

### Podle vnitrni aktivity (eficacie)

```
SPEKTRUM VNITRNI AKTIVITY

    Inverzni       Antagonista    Parcialni      Plny
    agonista       (neutralni)    agonista       agonista
       |               |              |              |
       v               v              v              v
   ─────┼───────────────┼──────────────┼──────────────┼─────
      -1              0             0.5             1.0
       |               |              |              |
    Snizuje         Zadna         Castecna      Maximalni
    bazalni        aktivita       aktivace      aktivace
    aktivitu


GRAFICKE ZNAZORNENI ODPOVEDI:

Odpoved
(%)
100 ┤                              ╭───── Plny agonista (α = 1.0)
    │                            ╱
 75 ┤                          ╱
    │                        ╱    ╭───── Parcialni agonista (α = 0.5)
 50 ┤                      ╱    ╱
    │                    ╱    ╱
 25 ┤                  ╱    ╱
    │                ╱    ╱
  0 ┼──────────────┴────┴──────────────→ Log [Agonista]
    │
    │──────────────────────────────────── Antagonista (α = 0)
-25 ┤
    │╰───── Inverzni agonista (α < 0)
-50 ┤
```

### Typy agonistu

| Typ | Vnitrni aktivita (α) | Maximalní odpoved | Priklady |
|-----|---------------------|-------------------|----------|
| **Plny agonista** | α = 1.0 | 100% Emax | Serotonin, [muscimol](@/alkaloids/muscimol.md), morfin |
| **Parcialni agonista** | 0 < α < 1.0 | Submaximalní | [Psilocin](@/alkaloids/psilocin.md), buprenorfin, aripiprazol |
| **Inverzni agonista** | α < 0 | Negativni (pod bazal) | Flumazenil, pimavanserin, DMCM |
| **Superagonista** | α > 1.0 | > endogenni ligand | Nektera synteticka psychedelika |

---

## Plny agonista

### Definice a charakteristika

**Plny agonista** je latka schopna vyvolat maximalni biologickou odpoved receptoru. Pri dostatecne vysokych koncentracich dosahuje **100% eficacie** (Emax) srovnatelne s maximalni odpovedi endogenního ligandu.

```
              PLNY AGONISTA - MECHANISMUS

    Receptor v klidovem stavu        Po vazbe plneho agonisty
    (nizka bazalni aktivita)         (maximalni aktivace)

         ┌──────────────┐                ┌──────────────┐
         │              │                │   ●──────●   │
         │   RECEPTOR   │       ──►      │   AKTIVNI    │
         │   (neaktivni)│                │   RECEPTOR   │
         └──────────────┘                └──────────────┘
              │                               │
              ▼                               ▼
         Bazalni signal              Maximalni signal
         (nízký)                     (100% Emax)


PRIKLADY PLNYCH AGONISTU:

┌─────────────────┬──────────────┬─────────────────────────────┐
│ Latka           │ Receptor     │ Klinicky/farmakologicky     │
│                 │              │ vyznam                      │
├─────────────────┼──────────────┼─────────────────────────────┤
│ Serotonin       │ 5-HT2A       │ Endogenni ligand            │
│ Muscimol        │ GABA-A       │ Silna sedace, delirium      │
│ Morfin          │ mu-opioidni  │ Analgezie, euforie          │
│ Isoproterenol   │ beta-adreno  │ Bronchodilatace             │
│ GABA            │ GABA-A/B     │ Inhibice CNS                │
│ Glutamat        │ NMDA/AMPA    │ Excitace CNS                │
└─────────────────┴──────────────┴─────────────────────────────┘
```

### Dusledky plneho agonismu

| Vlastnost | Implikace |
|-----------|-----------|
| **Ceiling effect** | Neexistuje - odpoved roste az k maximalnimu efektu |
| **Predavkovani** | Vysoke riziko pri receptorech s zivot ohrozujicimi funkcemi |
| **Tolerance** | Rychly vyvoj pri chronicke expozici |
| **Terapeuticky index** | Zavisí na vztahu Emax a toxicity |

### Priklady u psychoaktivnich latek

#### [Muscimol](@/alkaloids/muscimol.md) - Plny GABA-A agonista

| Parametr | Hodnota |
|----------|---------|
| **Receptor** | [GABA-A](@/receptors/gaba-a.md) |
| **Vnitrni aktivita** | α ≈ 1.0 |
| **Efekt** | Maximalni Cl⁻ influx, hyperpolarizace |
| **Klinicky projev** | Silna sedace, delirium, halucinace |
| **Zdroj** | [Amanita muscaria](@/shrooms/amanita-muscaria.md) |

---

## Parcialni agonista

### Definice a charakteristika

**Parcialni agonista** aktivuje receptor, ale i pri saturaci vsech receptoru nedosahuje maximalni odpovedi plneho agonisty. Ma **nizsi vnitrni aktivitu** (α < 1.0), coz mu dava jedinecne farmakologicke vlastnosti.

```
          PARCIALNI AGONISTA - DUALNÍ POVAHA

┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   SCENAR A: Sam (bez endogenního ligandu)                   │
│                                                              │
│        Parcialni agonista                                    │
│              │                                               │
│              ▼                                               │
│        ┌──────────────┐                                     │
│        │  50% Emax    │  →  AGONISTICKE PUSOBENI            │
│        │  aktivace    │     (stimuluje receptor)            │
│        └──────────────┘                                     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   SCENAR B: S plnym agonistou (soutez o receptor)           │
│                                                              │
│        Parcialni agonista    Plny agonista                  │
│              │                    │                          │
│              ▼                    ▼                          │
│        ┌──────────────┐    ┌──────────────┐                 │
│        │ Obsazuje     │ vs │ Vytlacen     │                 │
│        │ receptor     │    │ z receptoru  │                 │
│        └──────────────┘    └──────────────┘                 │
│              │                                               │
│              ▼                                               │
│        Celkovy efekt snizen = ANTAGONISTICKE PUSOBENÍ       │
│                                                              │
└──────────────────────────────────────────────────────────────┘


GRAFICKY:

Odpoved
(%)
100 ┤              ╭─────────── Plny agonista sam
    │            ╱
 75 ┤          ╱
    │        ╱
 50 ┤───────╱──────────────────── Parcialni agonista (Emax 50%)
    │      │
 25 ┤     │    ╭───────────────── Plny + parcialni (soutez)
    │    │   ╱                    → snizeny efekt
  0 ┼────┴──┴─────────────────────────────→ Koncentrace
```

### Terapeuticky vyznam

| Vlastnost | Vyhoda |
|-----------|--------|
| **Ceiling effect** | Limiti predavkovani (napr. buprenorfin vs morfin) |
| **Stabilizace systemu** | Pri nadbytku endogenního ligandu pusobi antagonisticky |
| **Sirsi terapeuticke okno** | Mensi riziko vedlejsich ucinku |
| **Abstinenční syndrom** | Mirnejsi pri vysazeni |

### Priklady parciálních agonistu

| Latka | Receptor | α | Klinické pouziti |
|-------|----------|---|------------------|
| [**Psilocin**](@/alkaloids/psilocin.md) | [5-HT2A](@/receptors/5-ht2a.md) | 0.4-0.6 | Psychedelicka terapie |
| [**LSD**](@/alkaloids/lsd.md) | [5-HT2A](@/receptors/5-ht2a.md) | 0.7-0.9 | (výzkum, psychoterapie) |
| **Buprenorfin** | mu-opioidni | 0.4-0.6 | Substitucni lecba opioidni zavislosti |
| **Aripiprazol** | D2 | 0.3 | Schizofrenie (stabilizace dopaminu) |
| **Buspiron** | 5-HT1A | 0.6 | Anxiolytikum |
| **Vareniclin** | α4β2 nAChR | 0.4 | Odvykani koureni |

#### [Psilocin](@/alkaloids/psilocin.md) jako parcialni agonista

```
PSILOCIN NA 5-HT2A RECEPTORU

    Serotonin (plny)          Psilocin (parcialni)
         │                          │
         ▼                          ▼
    ┌─────────────┐           ┌─────────────┐
    │ 5-HT2A      │           │ 5-HT2A      │
    │ Emax = 100% │           │ Emax ≈ 50%  │
    └─────────────┘           └─────────────┘
         │                          │
         ▼                          ▼
    Gq/11 aktivace           Gq/11 aktivace
    (maximalni)              (submaximalní)
         │                          │
         ▼                          ▼
    Fyziologicky             Psychedelický
    stav                     stav

PROC PARCIALNI AGONISMUS?

1. Vysoka afinita k receptoru (Ki = 6-15 nM)
2. Odlisna konformace receptor-ligand
3. Biased agonism (preference Gq nad β-arrestinem)
4. Dostatecna eficacia pro psychedelický ucinek
```

---

## Inverzni agonista

### Definice a mechanismus

**Inverzni agonista** se vaze na receptor a **snizuje jeho bazalni aktivitu** pod fyziologickou uroven. Pusobi opacne nez agoniste. Tento jev je mozny pouze u receptoru s konstitutivni (bazalni) aktivitou.

```
            INVERZNI AGONISMUS - MECHANISMUS

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  PREDPOKLAD: Receptor ma bazalni aktivitu (bez ligandu)    │
│                                                             │
│  ┌────────────────┬────────────────┬────────────────┐      │
│  │   Bez ligandu  │    Agonista    │ Inverzni ag.   │      │
│  ├────────────────┼────────────────┼────────────────┤      │
│  │                │                │                │      │
│  │    R ⇌ R*      │   R ←── R*     │   R ──→ R*     │      │
│  │   (rovnovaha)  │  (vice R*)     │  (vice R)      │      │
│  │                │                │                │      │
│  │  Aktivita: 20% │ Aktivita: 100% │ Aktivita: 0%   │      │
│  │  (bazalni)     │ (maximalni)    │ (pod bazal)    │      │
│  └────────────────┴────────────────┴────────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘


SPEKTRUM RECEPTOROVE AKTIVITY:

Aktivita
(%)
100 ┤                                    ← Plny agonista
    │
 75 ┤
    │
 50 ┤                              ← Parcialni agonista
    │
 25 ┤
    │    ════════════════════════════ ← Bazalni aktivita
  0 ┼─────────────────────────────────────────────────
    │
-25 ┤                              ← Parcialni inverzni
    │
-50 ┤                              ← Plny inverzni agonista
```

### Priklady inverznich agonistu

| Latka | Receptor | Ucinek | Pouziti |
|-------|----------|--------|---------|
| **Flumazenil** | GABA-A (BZ site) | Snizuje bazalni potenciaci | Antidotum benzodiazepinu |
| **Pimavanserin** | [5-HT2A](@/receptors/5-ht2a.md) | Snizuje bazalni signalizaci | Parkinsonske psychozy |
| **DMCM** | GABA-A | Silny inverzni agonista | Vyzkum (konvulzivní!) |
| **Rimonabant** | CB1 | Snizuje kanabinoidni tonus | (stazeno - psychiatricke NÚ) |

### Klinicky vyznam

```
INVERZNI AGONISTA VS ANTAGONISTA

┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ANTAGONISTA (neutralni)         INVERZNI AGONISTA         │
│                                                              │
│   - Blokuje vazebne misto         - Blokuje vazebne misto   │
│   - Nemeni bazalni aktivitu       - SNIZUJE bazální aktivitu│
│   - Nema vnitrni aktivitu (α=0)   - Negativni aktivita (α<0)│
│                                                              │
│   Priklad: Naloxon               Priklad: Rimonabant        │
│   (opioidní receptor)            (CB1 receptor)             │
│                                                              │
│   Pouziti:                       Pouziti:                   │
│   Blokada ucinkuu opioidů        Aktivni suprese systemu    │
│   (predavkovani)                 (redukce chuti k jidlu)    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Afinita a eficacia

### Dva klicove parametry

Ucinek agonisty je urcen dvema nezavislymi parametry:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   AFINITA (Ki, Kd)              EFICACIA (Emax, α)         │
│                                                             │
│   "Jak PEVNE se váže"           "Jak SILNE aktivuje"       │
│                                                             │
│   ┌─────────────────┐           ┌─────────────────┐        │
│   │    RECEPTOR     │           │    RECEPTOR     │        │
│   │       ▲         │           │      ●──●       │        │
│   │       │         │           │    aktivace     │        │
│   │   ●───┘         │           │                 │        │
│   │   vazba         │           │                 │        │
│   └─────────────────┘           └─────────────────┘        │
│                                                             │
│   Mereni: radioligand           Mereni: funkcni eseje      │
│           binding                       (Ca2+, cAMP)       │
│                                                             │
│   Jednotka: nM (nanomolární)    Jednotka: % maxima         │
│                                                             │
│   Nizsi Ki = vyssi afinita      Vyssi Emax = vyssi eficacia│
│                                                             │
└─────────────────────────────────────────────────────────────┘


VZTAH AFINITY A EFICACIE:

                        │ Vysoka eficacia │ Nizka eficacia
────────────────────────┼─────────────────┼────────────────
Vysoka afinita (Ki↓)    │ Potentni plny   │ Potentní
                        │ agonista        │ parcialni agonista
                        │ (LSD na 5-HT2A) │ (aripiprazol na D2)
────────────────────────┼─────────────────┼────────────────
Nizka afinita (Ki↑)     │ Slaby plny      │ Slaby parcialni
                        │ agonista        │ agonista
                        │ (meskalin)      │ (vzácné)
```

### Afinita (Ki, Kd)

**Afinita** vyjadruje silu vazby ligandu k receptoru. Meri se jako:

| Parametr | Definice | Interpretace |
|----------|----------|--------------|
| **Ki** | Inhibicni konstanta | Koncentrace potrebna k obsazeni 50% receptoru |
| **Kd** | Disociacni konstanta | Rovnovazna konstanta vazba/uvolneni |

```
AFINITA PSYCHEDELIK K 5-HT2A:

Latka                Ki (nM)         Relativni afinita
─────────────────────────────────────────────────────────
25I-NBOMe            0.04            ██████████████████████████ Extrémní
LSD                  1-2             █████████████████████ Velmi vysoká
Psilocin             6-15            ██████████████ Vysoká
DMT                  75-130          ████████ Střední
Serotonin            100-300         ███████ Střední (endogenní)
Meskalin             5000+           █ Nízká

POZN: Nizsi Ki = vyssi afinita (logaritmicka stupnice!)
```

### Eficacia (Emax)

**Eficacia** urcuje maximalni biologickou odpoved, kterou ligand muze vyvolat. Je nezavisla na afinite.

| Parametr | Definice | Rozsah |
|----------|----------|--------|
| **Emax** | Maximalni efekt | 0-100% (nebo vice u superagonistu) |
| **α (alfa)** | Vnitrni aktivita | -1 az +1 (relativní k plnemu agoniste) |

```
EFICACIA RUZNYCH TYPU AGONISTU:

Typ                   α          Emax (relativní)
─────────────────────────────────────────────────────
Plny agonista         1.0        100% ████████████████████
Parciální agonista    0.5        50%  ██████████
Antagonista           0.0        0%   │
Inverzní agonista    -0.5       -50%  ████████████████████ (snizeni)
```

---

## Davkova zavislost (Dose-Response)

### Zakladni krivka dose-response

```
                DOSE-RESPONSE KRIVKA

Odpoved
(% Emax)
100 ┤                           ╭───────────────── Emax (plato)
    │                         ╱
 90 ┤                       ╱
    │                     ╱
 75 ┤                   ╱
    │                 ╱
 50 ┤───────────────●─────────────────────────── EC50
    │             ╱ │
 25 ┤           ╱   │
    │         ╱     │
 10 ┤       ╱       │
    │     ╱         │
  0 ┼────┴──────────┼─────────────────────────→ Log [Agonista]
                    │
               EC50 (potence)


KLICOVE PARAMETRY:

┌───────────────┬────────────────────────────────────────────┐
│ Parametr      │ Definice                                   │
├───────────────┼────────────────────────────────────────────┤
│ EC50          │ Koncentrace pro 50% maximálního efektu     │
│ Emax          │ Maximální dosažitelný efekt                │
│ Hill coeff.   │ Strmost krivky (kooperativita)             │
│ Potence       │ Relativni EC50 (nizsi = potentnejsi)       │
│ Eficacia      │ Emax relativně k referenčnímu agonistovi   │
└───────────────┴────────────────────────────────────────────┘
```

### Porovnani ruznych agonistu

```
POROVNANI DOSE-RESPONSE KRIVEK:

Odpoved
(%)
100 ┤                    A ──────────────── Vysoka potence,
    │                  ╱                    vysoka eficacia
 80 ┤                ╱      B ────────────── Nizka potence,
    │              ╱      ╱                  vysoka eficacia
 60 ┤            ╱      ╱
    │          ╱      ╱   C ──────────────── Vysoka potence,
 40 ┤────────●──────●───────────────────────  nizka eficacia
    │      ╱      ╱                          (parcialni)
 20 ┤    ╱      ╱
    │  ╱      ╱
  0 ┼─┴──────┴────────────────────────────→ Log [Agonista]
      │      │
      │      └── EC50 (B) - nizka potence
      └── EC50 (A) - vysoka potence


PRIKLADY NA 5-HT2A RECEPTORU:

Latka           │ Potence (EC50) │ Eficacia (Emax) │ Charakter
────────────────┼────────────────┼─────────────────┼───────────────
25I-NBOMe       │ Extrémní       │ Velmi vysoka    │ A (nebezpečné!)
LSD             │ Velmi vysoká   │ Vysoká          │ A
Psilocin        │ Vysoká         │ Střední         │ C (parciální)
Meskalin        │ Nízká          │ Střední-vysoka  │ B
```

### Klinicke implikace dose-response

| Parametr | Klinicky vyznam |
|----------|-----------------|
| **EC50 (potence)** | Urcuje davkovani - potentnejsi = nizsi davky |
| **Emax (eficacia)** | Urcuje maximalni mozny ucinek |
| **Terapeutické okno** | Rozsah davek mezi EC50 a toxicitou |
| **Strmnost krivky** | Predikuje variabilitu odpovedi |

---

## Funkční selektivita (Biased Agonism)

### Koncept

**Biased agonism** (funkční selektivita) je fenomen, kdy ruzni agonisté tehoz receptoru aktivuji odlisne signalni drahy. Toto ma zasadni vyznam pro psychedelika.

```
        BIASED AGONISM NA 5-HT2A RECEPTORU

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      5-HT2A RECEPTOR                        │
│                           │                                 │
│            ┌──────────────┼──────────────┐                 │
│            ▼              │              ▼                 │
│       ┌─────────┐         │         ┌─────────┐           │
│       │  Gq/11  │         │         │β-arrestin│           │
│       └────┬────┘         │         └────┬────┘           │
│            │              │              │                 │
│            ▼              │              ▼                 │
│       PLCβ → IP3          │         Internalizace         │
│         + DAG             │         Desenzitizace         │
│            │              │              │                 │
│            ▼              │              ▼                 │
│       Ca2+ + PKC          │         ERK signaling         │
│            │              │              │                 │
│            ▼              │              ▼                 │
│     HALUCINOGENNI         │         Receptor              │
│        UCINEK             │         downregulace          │
│                           │                                │
└─────────────────────────────────────────────────────────────┘


LIGAND-SPECIFICKA AKTIVACE:

Ligand          │ Gq/11 (halucinogeze) │ β-arrestin (desenz.)
────────────────┼──────────────────────┼─────────────────────
Serotonin       │ +++                  │ +++
LSD             │ +++                  │ +
Psilocin        │ ++                   │ +
Lisurid         │ +                    │ ++
(nehalucinogen) │                      │

ZÁVER: LSD a psilocin jsou "Gq-biased" agonisté → halucinogenní
       Lisurid je "β-arrestin-biased" → nehalucinogenní
```

### Terapeuticky potencial

| Bias | Účinek | Terapeutický cíl |
|------|--------|------------------|
| **Gq-biased** | Neuroplasticita, změněné vědomí | Psychedelická terapie |
| **β-arr-biased** | Neuroplasticita BEZ halucinací | Bezpečnější antidepresiva |

---

## Priklady agonistu u psychoaktivnich latek

### Serotonergni system (5-HT)

| Latka | Receptor | Typ agonismu | Ucinek |
|-------|----------|--------------|--------|
| [**LSD**](@/alkaloids/lsd.md) | [5-HT2A](@/receptors/5-ht2a.md), 5-HT1A, D2 | Parcialni-plny | Psychedelicky |
| [**Psilocin**](@/alkaloids/psilocin.md) | [5-HT2A](@/receptors/5-ht2a.md), 5-HT1A | Parcialni | Psychedelicky |
| [**DMT**](@/alkaloids/dmt.md) | [5-HT2A](@/receptors/5-ht2a.md), sigma-1 | Parcialni | Psychedelicky |
| [**Meskalin**](@/alkaloids/mescaline.md) | [5-HT2A](@/receptors/5-ht2a.md) | Parciální | Psychedelicky |
| **MDMA** | 5-HT uvolnení | (nepřímy) | Entaktogenní |

### GABAergni system

| Latka | Receptor | Typ agonismu | Ucinek |
|-------|----------|--------------|--------|
| [**Muscimol**](@/alkaloids/muscimol.md) | [GABA-A](@/receptors/gaba-a.md) | Plny | Sedace, delirium |
| **GABA** | GABA-A, GABA-B | Plny (endogenni) | Inhibice |
| **Baclofen** | GABA-B | Plny | Myorelaxace |
| **GHB** | GABA-B, GHB-R | Plny | Sedace, euforie |

### Glutamatergni system

| Latka | Receptor | Typ agonismu | Ucinek |
|-------|----------|--------------|--------|
| **Glutamat** | [NMDA](@/receptors/nmda.md), AMPA | Plny (endogenni) | Excitace |
| [**Kys. ibotenova**](@/neurotoxins/ibotenic-acid.md) | NMDA, mGluR | Agonista | Excitotoxicita |

### Opioidni system

| Latka | Receptor | Typ agonismu | Ucinek |
|-------|----------|--------------|--------|
| **Morfin** | mu | Plny | Analgezie, euforie |
| **Buprenorfin** | mu | Parcialni | Substituce, analgezie |
| **Fentanyl** | mu | Plny | Silna analgezie |

### Kanabinoidni system

| Latka | Receptor | Typ agonismu | Ucinek |
|-------|----------|--------------|--------|
| **THC** | CB1 | Parcialni | Psychoaktivni |
| **Anandamid** | CB1 | Parcialni (endogenni) | Neuromodulace |
| **Syntet. kanabinoidy** | CB1 | Plny | Silne psychoaktivni |

---

## Tabulka porovnani typu agonistu

```
SOUHRNNA TABULKA - TYPY AGONISTU

┌─────────────────┬─────────┬─────────┬────────────┬───────────────┐
│ Vlastnost       │ Plný    │ Parciál.│ Antagonista│ Inverzní      │
├─────────────────┼─────────┼─────────┼────────────┼───────────────┤
│ Vnitrni aktiv.  │ α = 1   │ 0<α<1   │ α = 0      │ α < 0         │
│ Emax            │ 100%    │ <100%   │ 0%         │ <0% (bazal)   │
│ Vazba na rec.   │ ANO     │ ANO     │ ANO        │ ANO           │
│ Aktivace rec.   │ MAX     │ SUBMAX  │ NE         │ NEGATIVNI     │
│ Ceiling effect  │ NE      │ ANO     │ -          │ ANO           │
│ Predavkovani    │ RIZIKO  │ NIŽŠÍ   │ -          │ NÍZKÉ         │
│ Tolerance       │ RYCHLA  │ POMALEJ │ -          │ VARIABILNI    │
└─────────────────┴─────────┴─────────┴────────────┴───────────────┘

PRIKLADY PRO KAZDY TYP:

Plný:       Muscimol (GABA-A), Morfin (mu), Serotonin (5-HT2A)
Parciální:  Psilocin (5-HT2A), Buprenorfin (mu), Aripiprazol (D2)
Antagonista: Ketanserin (5-HT2A), Naloxon (mu), Flumazenil (GABA-A BZ)
Inverzní:   Pimavanserin (5-HT2A), DMCM (GABA-A), Rimonabant (CB1)
```

---

## Klinicka relevance

### Vyber agonisty podle indikace

| Indikace | Preferovany typ | Duvod |
|----------|-----------------|-------|
| **Akutni bolest** | Plny agonista (morfin) | Maximalni analgezie |
| **Chronicka bolest/zavislost** | Parcialni (buprenorfin) | Bezpecnejsi, mensi tolerance |
| **Psychedelicka terapie** | Parcialni (psilocybin) | Kontrolovatelnejsi ucinek |
| **Antipsychotika** | Parcialni/inverzni (aripiprazol) | Stabilizace bez extrapyramid. |
| **Predavkovani BZ** | Antagonista/inverzni (flumazenil) | Reverze sedace |

### Bezpecnostni profily

| Typ agonisty | Riziko predávkování | Příklad nebezpečí |
|--------------|---------------------|-------------------|
| **Plný** | VYSOKÉ | Morfin - respiracni deprese |
| **Parcialni** | NIZSI (ceiling) | Buprenorfin - limity efekt |
| **Inverzni** | SPECIFICKE | DMCM - konvulze |

---

## Reference

1. Kenakin, T. (2012). *Biased signalling and allosteric machines: new vistas and challenges for drug discovery*. British Journal of Pharmacology.
2. Nichols, D.E. (2016). *Psychedelics*. Pharmacological Reviews 68(2): 264-355.
3. Wacker, D. et al. (2017). *Crystal structure of an LSD-bound human serotonin receptor*. Cell.
4. Roth, B.L. (2019). *Molecular pharmacology of metabotropic receptors targeted by neuropsychiatric drugs*. Nature Structural & Molecular Biology.
5. Olsen, R.W. & Sieghart, W. (2008). *GABAA receptors: Subtypes provide diversity of function and pharmacology*. Neuropharmacology.
6. Kobilka, B.K. (2013). *The structural basis of G-protein-coupled receptor signaling*. Nobel Lecture.
7. Kroeze, W.K. et al. (2015). *PRESTO-Tango as an open-source resource for interrogation of the druggable human GPCRome*. Nature Structural & Molecular Biology.

---

## Viz take

### Zakladni pojmy
- [Receptor](@/glossary/receptor.md) - Molekularni brána bunecne komunikace
- [GABA](@/glossary/gaba.md) - Hlavni inhibicni neurotransmiter

### Specificke receptory
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Primarni cil klasickych psychedelik
- [GABA-A receptor](@/receptors/gaba-a.md) - Cil GABAergních latek (muscimol)
- [NMDA receptor](@/receptors/nmda.md) - Glutamatergni receptor

### Psychoaktivni latky (agoniste)
- [LSD](@/alkaloids/lsd.md) - Potentni 5-HT2A parcialni agonista
- [Psilocybin](@/alkaloids/psilocybin.md) / [Psilocin](@/alkaloids/psilocin.md) - Tryptaminova psychedelika
- [DMT](@/alkaloids/dmt.md) - Endogenni psychedelikum
- [Muscimol](@/alkaloids/muscimol.md) - Plny GABA-A agonista
- [Meskalin](@/alkaloids/mescaline.md) - Fenethylaminovy 5-HT2A agonista

### Zdroje
- [Psilocybe houby](@/shrooms/psilocybes/_index.md) - Zdroj psilocybinu
- [Amanita muscaria](@/shrooms/amanita-muscaria.md) - Zdroj muscimolu

---

<- Zpet na [Glosar](@/glossary/_index.md)
