+++
title = "Locus coeruleus"
description = "Locus coeruleus - hlavni zdroj noradrenalinu v mozku, centrum bdělosti a pozornosti"
weight = 8
insert_anchor_links = "right"

[taxonomies]
tags = ["locus-coeruleus", "noradrenalin", "arousal", "pozornost", "stres", "mozek"]
categories = ["neuroanatomie", "neuroveda", "psychedelika"]
+++

# Locus coeruleus - Centrum bdelosti

**Locus coeruleus** (LC, z latiny "modré místo") je male jadro v dorzalnim pontu, ktere predstavuje hlavni zdroj **noradrenalinu (norepinefrinu)** v centralnim nervovem systemu. Navzdory sve malé velikosti (pouze ~15,000-30,000 neuronu u cloveka) ma difuzni projekce do prakticky vsech oblasti mozku a misehy.

LC je klicovy pro regulaci **bdelosti**, **pozornosti**, **stresove odpovedi** a **kognitivni flexibility**. V kontextu psychedelik moduluje arousal a muze prispivat k nekterym aspektum zmeneneho stavu vedomi.

---

## Anatomicka lokalizace

### Pozice v mozku

| Vlastnost | Hodnota |
|-----------|---------|
| **Lokalizace** | Dorzalni pons (tegmentum) |
| **Pozice** | Lateralne od IV. komory |
| **Strana** | Parovy |
| **Pocet neuronu** | ~15,000-30,000 u cloveka |
| **Barva** | Modra (neuromelanin) |

### Anatomicke vztahy

```mermaid
flowchart TD
    node_LOCUSCOERULEUSHORIZO["LOCUS COERULEUS - HORIZONTALNI REZ PONSEM"]
    node_IVkomora["IV. komora"]
    node_LOCUSLOCUS["LOCUS                     LOCUS"]
    node_COERULEUSCOERULEUS["COERULEUS               COERULEUS"]
    node_levypravy["levy                  pravy"]
    node_modremodre["modre                  modre"]
    node_zbarvenizbarveni["zbarveni               zbarveni"]
    node_Tegmentumpontu["Tegmentum pontu"]

    node_LOCUSCOERULEUSHORIZO --> node_IVkomora
    node_IVkomora --> node_LOCUSLOCUS
    node_LOCUSLOCUS --> node_COERULEUSCOERULEUS
    node_COERULEUSCOERULEUS --> node_levypravy
    node_levypravy --> node_modremodre
    node_modremodre --> node_zbarvenizbarveni
    node_zbarvenizbarveni --> node_Tegmentumpontu
```

<details>
<summary>ASCII verze diagramu</summary>

```
LOCUS COERULEUS - HORIZONTALNI REZ PONSEM

                    IV. komora
                        │
           ┌────────────┴────────────┐
           │                         │
    ┌──────┴──────┐           ┌──────┴──────┐
    │             │           │             │
    │  LOCUS      │           │    LOCUS    │
    │  COERULEUS  │           │  COERULEUS  │
    │   (levy)    │           │   (pravy)   │
    │             │           │             │
    │  (modre     │           │  (modre     │
    │   zbarveni) │           │   zbarveni) │
    │             │           │             │
    └─────────────┘           └─────────────┘
           │                         │
           └────────────┬────────────┘
                        │
              Tegmentum pontu
```

</details>

### Neuromelanin

LC ma charakteristickou **modrou barvu** diky neuromelaninu:

| Vlastnost | Hodnota |
|-----------|---------|
| **Pigment** | Neuromelanin |
| **Puvod** | Oxidace noradrenalinu |
| **Funkce** | Vazba toxinu, zeleza |
| **Vek** | Narustat s vekem |
| **Patologie** | Ztrata u Parkinsona, Alzheimera |

---

## Bunecna charakteristika

### LC neurony

| Vlastnost | Hodnota |
|-----------|---------|
| **Neurotransmiter** | Noradrenalin (NE) |
| **Ko-transmiter** | Galanin, NPY |
| **Morfologie** | Velke, multipolární |
| **Axony** | Extenzivne vetvene |
| **Cílove oblasti** | Prakticky cely CNS |

### Synteza noradrenalinu

```mermaid
flowchart TD
    node_SYNTEZANORADRENALINU["SYNTEZA NORADRENALINU V LC"]
    node_Tyrosinzpotravy["Tyrosin z potravy"]
    node_THtyrosinhydroxylaza["TH tyrosin hydroxylaza"]
    node_Ratelimitingkrok["Rate-limiting krok"]
    node_Kofaktortetrahydrobi["Kofaktor: tetrahydrobiopterin"]
    node_LDOPA["L-DOPA"]
    node_AADCaromatickaminoky["AADC aromatická aminokyselina dekarboxyláza"]
    node_Kofaktorpyridoxalfos["Kofaktor: pyridoxal fosfát B6"]
    node_Dopamin["Dopamin"]
    node_DBHdopaminbetahydrox["DBH dopamin beta-hydroxylaza"]
    node_Vsynaptickchvezikulc["V synaptických vezikulách"]
    node_KofaktoraskorbtCu2["Kofaktor: askorbát, Cu2+"]
    node_NORADRENALINNE["NORADRENALIN NE"]
    node_UskladnniVMAT2["Uskladněni VMAT2"]
    node_Uvolnnexocytza["Uvolnění exocytóza"]

    node_SYNTEZANORADRENALINU --> node_Tyrosinzpotravy
    node_Tyrosinzpotravy --> node_THtyrosinhydroxylaza
    node_THtyrosinhydroxylaza --> node_Ratelimitingkrok
    node_Ratelimitingkrok --> node_Kofaktortetrahydrobi
    node_Kofaktortetrahydrobi --> node_LDOPA
    node_LDOPA --> node_AADCaromatickaminoky
    node_AADCaromatickaminoky --> node_Kofaktorpyridoxalfos
    node_Kofaktorpyridoxalfos --> node_Dopamin
    node_Dopamin --> node_DBHdopaminbetahydrox
    node_DBHdopaminbetahydrox --> node_Vsynaptickchvezikulc
    node_Vsynaptickchvezikulc --> node_KofaktoraskorbtCu2
    node_KofaktoraskorbtCu2 --> node_NORADRENALINNE
    node_NORADRENALINNE --> node_UskladnniVMAT2
    node_UskladnniVMAT2 --> node_Uvolnnexocytza
```

<details>
<summary>ASCII verze diagramu</summary>

```
SYNTEZA NORADRENALINU V LC

Tyrosin (z potravy)
    │
    │ TH (tyrosin hydroxylaza)
    │ Rate-limiting krok
    │ Kofaktor: tetrahydrobiopterin
    ↓
L-DOPA
    │
    │ AADC (aromatická aminokyselina dekarboxyláza)
    │ Kofaktor: pyridoxal fosfát (B6)
    ↓
Dopamin
    │
    │ DBH (dopamin beta-hydroxylaza)
    │ V synaptických vezikulách
    │ Kofaktor: askorbát, Cu2+
    ↓
NORADRENALIN (NE)
    │
    └─→ Uskladněni (VMAT2)
        │
        └─→ Uvolnění (exocytóza)
```

</details>

### Klicove enzymy

| Enzym | Gen | Funkce | Regulace |
|-------|-----|--------|----------|
| **TH** | TH | Rate-limiting, L-DOPA | PKA, stress |
| **DBH** | DBH | Dopamin → NE | Ve vezikulách |
| **MAO-A** | MAOA | Degradace NE | Geneticke varianty |
| **COMT** | COMT | Degradace NE | Val158Met |

---

## Projekce LC

### Vzestupné projekce

LC inervuje prakticky cely mozek:

```mermaid
flowchart TD
    node_PROJEKCELOCUSCOERULE["PROJEKCE LOCUS COERULEUS"]
    node_CELNEOKORTEX["CELÝ NEOKORTEX"]
    node_PFCparietalnivizualn["PFC, parietalni, vizualni..."]
    node_ThalamusLimbickMozee["Thalamus           Limbický            Mozeček"]
    node_systm["systém"]
    node_HypothalamusHippocam["Hypothalamus        Hippocampus"]
    node_Amygdala["Amygdala"]
    node_LOCUS["LOCUS"]
    node_COERULEUS["COERULEUS"]
    node_MICHA["MICHA"]

    node_PROJEKCELOCUSCOERULE --> node_CELNEOKORTEX
    node_CELNEOKORTEX --> node_PFCparietalnivizualn
    node_PFCparietalnivizualn --> node_ThalamusLimbickMozee
    node_ThalamusLimbickMozee --> node_systm
    node_systm --> node_HypothalamusHippocam
    node_HypothalamusHippocam --> node_Amygdala
    node_Amygdala --> node_LOCUS
    node_LOCUS --> node_COERULEUS
    node_COERULEUS --> node_MICHA

    click node_ThalamusLimbickMozee "/brain/thalamus/" "Thalamus           Limbický            Mozeček"
    click node_HypothalamusHippocam "/brain/hippocampus/" "Hypothalamus        Hippocampus"
    click node_Amygdala "/brain/amygdala/" "Amygdala"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PROJEKCE LOCUS COERULEUS

                    ┌─────────────────────────────────┐
                    │                                 │
                    │     CELÝ NEOKORTEX              │
                    │     (PFC, parietalni, vizualni...) │
                    └────────────────┬────────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ↓                      ↓                      ↓
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │  Thalamus   │       │ Limbický    │       │ Mozeček     │
       │             │       │  systém     │       │             │
       └─────────────┘       └─────────────┘       └─────────────┘
              │                      │                      │
              │                      │                      │
       ┌──────┴──────┐       ┌──────┴──────┐
       │ Hypothalamus│       │ Hippocampus │
       │             │       │ Amygdala    │
       └─────────────┘       └─────────────┘
                                     │
                             ┌───────┴───────┐
                             │               │
                             │ LOCUS         │
                             │ COERULEUS     │
                             │               │
                             └───────┬───────┘
                                     │
                                     ↓
                             ┌─────────────┐
                             │   MICHA     │
                             │             │
                             └─────────────┘
```

</details>

### Specificke projekce

| Cil | Funkce | Adrenoreceptor |
|-----|--------|----------------|
| **[Prefrontalni kortex](@/brain/prefrontal-cortex.md)** | Pracovni pamet, pozornost | Alpha-2A, Alpha-1 |
| **[Hippocampus](@/brain/hippocampus.md)** | Pamet, LTP modulace | Beta, Alpha-1 |
| **[Amygdala](@/brain/amygdala.md)** | Emocni pamet, strach | Beta |
| **[Thalamus](@/brain/thalamus.md)** | Arousal, senzoricky relay | Alpha-1 |
| **Mozeček** | Motoricka koordinace | Beta |
| **Micha** | Bolest, autonomni | Alpha-2 |

---

## Funkcni role

### Arousal a bdelost

LC je klicovy pro regulaci stavu bdelosti:

```mermaid
flowchart TD
    node_LCAKTIVITAASTAVYVEDO["LC AKTIVITA A STAVY VEDOMI"]
    node_LCfiringrate["LC firing rate"]
    node_VysokStress["Vysoká                      ████████████  Stress"]
    node_4c9d0919["████"]
    node_StednAktivnibdelost["Střední            ████                   Aktivni bdelost"]
    node_NzkRelaxovanabdelost["Nízká     ████                            Relaxovana bdelost"]
    node_MinimlnNREMspnek["Minimální█                                 NREM spánek"]
    node_NulovREMspnek["Nulová  ░                                 REM spánek"]
    node_Behaviorlnsta["Behaviorální sta"]

    node_LCAKTIVITAASTAVYVEDO --> node_LCfiringrate
    node_LCfiringrate --> node_VysokStress
    node_VysokStress --> node_4c9d0919
    node_4c9d0919 --> node_StednAktivnibdelost
    node_StednAktivnibdelost --> node_NzkRelaxovanabdelost
    node_NzkRelaxovanabdelost --> node_MinimlnNREMspnek
    node_MinimlnNREMspnek --> node_NulovREMspnek
    node_NulovREMspnek --> node_Behaviorlnsta
```

<details>
<summary>ASCII verze diagramu</summary>

```
LC AKTIVITA A STAVY VEDOMI

       LC firing rate
            ^
            │
Vysoká  ────┤                    ████████████  Stress
            │                 ████
            │              ████
Střední ────┤           ████                   Aktivni bdelost
            │        ████
            │     ████
Nízká   ────┤  ████                            Relaxovana bdelost
            │
Minimální───┤█                                 NREM spánek
            │
Nulová  ────┤░                                 REM spánek
            │
            └────────────────────────────────→ Behaviorální stav
```

</details>

### Adaptive Gain Theory

LC moduluje "gain" kortikalni odpovedi:

```mermaid
flowchart TD
    node_ADAPTIVEGAINTHEORY["ADAPTIVE GAIN THEORY"]
    node_TONICMODEnizkabdelos["TONIC MODE nizka bdelost:"]
    node_PHASICMODEfokusovana["PHASIC MODE fokusovana pozornost:"]
    node_Vkon["Výkon"]
    node_fddd21b9["*****"]
    node_85b44d28["**     **"]
    node_Optimal["Optimal **"]
    node_95d58a1b["*           *"]
    node_e426b9c9["*             *"]
    node_59329965["*               *"]
    node_7f99cb67["*                 *"]
    node_LCaktivita["LC aktivita"]
    node_NzkStednVysok["Nízká   Střední   Vysoká"]
    node_ospalostalertstress["ospalost alert stress"]

    node_ADAPTIVEGAINTHEORY --> node_TONICMODEnizkabdelos
    node_TONICMODEnizkabdelos --> node_PHASICMODEfokusovana
    node_PHASICMODEfokusovana --> node_Vkon
    node_Vkon --> node_fddd21b9
    node_fddd21b9 --> node_85b44d28
    node_85b44d28 --> node_Optimal
    node_Optimal --> node_95d58a1b
    node_95d58a1b --> node_e426b9c9
    node_e426b9c9 --> node_59329965
    node_59329965 --> node_7f99cb67
    node_7f99cb67 --> node_LCaktivita
    node_LCaktivita --> node_NzkStednVysok
    node_NzkStednVysok --> node_ospalostalertstress
```

<details>
<summary>ASCII verze diagramu</summary>

```
ADAPTIVE GAIN THEORY

TONIC MODE (nizka bdelost):
- Nizka, stabilni LC aktivita
- Široky "spotlight" pozornosti
- Explorace prostredi
- Flexibilita

PHASIC MODE (fokusovana pozornost):
- Vysoky phasic LC burst
- Úzký "spotlight"
- Exploitace (vyuziti znameho)
- Selektivita

                    Výkon
                      ^
                      │        *****
                      │      **     **
Optimal ──────────────│────*─────────*────────
                      │   *           *
                      │  *             *
                      │ *               *
                      │*                 *
                      └───────────────────────→ LC aktivita
                      Nízká   Střední   Vysoká
                      (ospalost) (alert) (stress)

= Obrácená U-křivka (Yerkes-Dodson)
```

</details>

### Pozornost a kognice

| Funkce | Mechanismus | Receptor |
|--------|-------------|----------|
| **Sustained attention** | Tonic LC modulace | Alpha-2A |
| **Selective attention** | Phasic bursts | Alpha-2A |
| **Cognitive flexibility** | Reset networks | Alpha-1, Beta |
| **Working memory** | PFC NE | Alpha-2A (optimum) |
| **Memory consolidation** | Hippocampal NE | Beta |

### Stresova odpoved

```mermaid
flowchart TD
    node_LCASTRESOVAODPOVED["LC A STRESOVA ODPOVED"]
    node_STRESOR["STRESOR"]
    node_AmygdalaCRFLCaktivac["Amygdala CRF  LC aktivace"]
    node_Noradrenalinrelease["Noradrenalin release"]
    node_HPAosa["HPA osa"]
    node_Kortexarousal["Kortex arousal"]
    node_Amygdalastrach["Amygdala strach"]
    node_Hippocampuspamet["Hippocampus pamet"]
    node_Kortizol["Kortizol"]
    node_Pozitivnizpetnavazba["Pozitivni zpetna vazba:"]
    node_StresCRFLCNEzvysenav["Stres  CRF  LC  NE  zvysena vigilance  dalsi LC aktivace"]
    node_UPTSDHyperaktivniLCz["U PTSD: Hyperaktivni LC, zvysena bazalni NE"]

    node_LCASTRESOVAODPOVED --> node_STRESOR
    node_STRESOR --> node_AmygdalaCRFLCaktivac
    node_AmygdalaCRFLCaktivac --> node_Noradrenalinrelease
    node_Noradrenalinrelease --> node_HPAosa
    node_HPAosa --> node_Kortexarousal
    node_Kortexarousal --> node_Amygdalastrach
    node_Amygdalastrach --> node_Hippocampuspamet
    node_Hippocampuspamet --> node_Kortizol
    node_Kortizol --> node_Pozitivnizpetnavazba
    node_Pozitivnizpetnavazba --> node_StresCRFLCNEzvysenav
    node_StresCRFLCNEzvysenav --> node_UPTSDHyperaktivniLCz

    click node_AmygdalaCRFLCaktivac "/brain/amygdala/" "Amygdala CRF  LC aktivace"
    click node_Amygdalastrach "/brain/amygdala/" "Amygdala strach"
    click node_Hippocampuspamet "/brain/hippocampus/" "Hippocampus pamet"
```

<details>
<summary>ASCII verze diagramu</summary>

```
LC A STRESOVA ODPOVED

STRESOR
    │
    ↓
Amygdala (CRF) ──────→ LC aktivace
    │                       │
    │                       ↓
    ↓               Noradrenalin release
HPA osa                     │
    │                       ├─→ Kortex (arousal)
    │                       ├─→ Amygdala (strach)
    ↓                       └─→ Hippocampus (pamet)
Kortizol

Pozitivni zpetna vazba:
Stres → CRF → LC → NE → zvysena vigilance → dalsi LC aktivace

U PTSD: Hyperaktivni LC, zvysena bazalni NE
```

</details>

---

## LC a psychedelika

### Efekty psychedelik na LC

| Efekt | Mechanismus |
|-------|-------------|
| **Zvysena aktivita** | 5-HT2A aktivace (neprime) |
| **Modulace arousalu** | Zmena tonic/phasic |
| **Interakce s raphe** | Vzajemna regulace |

### Mechanismus

```mermaid
flowchart TD
    node_PSYCHEDELIKAALC["PSYCHEDELIKA A LC"]
    node_PsychedelikumnaprLSD["Psychedelikum napr. LSD"]
    node_5HT2Areceptorkortex["5-HT2A receptor kortex"]
    node_KortikoLCprojekce["Kortiko-LC projekce"]
    node_LCaktivacemodulace["LC aktivace/modulace"]
    node_Zmenenyarousal["Zmeneny arousal"]
    node_Zmenenapozornost["Zmenena pozornost"]
    node_5HT2Cpmo["5-HT2C přímo?"]
    node_LCmodulace["LC modulace"]
    node_KontextNEsystempravd["Kontext: NE system pravdepodobne prispiva k:"]

    node_PSYCHEDELIKAALC --> node_PsychedelikumnaprLSD
    node_PsychedelikumnaprLSD --> node_5HT2Areceptorkortex
    node_5HT2Areceptorkortex --> node_KortikoLCprojekce
    node_KortikoLCprojekce --> node_LCaktivacemodulace
    node_LCaktivacemodulace --> node_Zmenenyarousal
    node_Zmenenyarousal --> node_Zmenenapozornost
    node_Zmenenapozornost --> node_5HT2Cpmo
    node_5HT2Cpmo --> node_LCmodulace
    node_LCmodulace --> node_KontextNEsystempravd

    click node_PsychedelikumnaprLSD "/alkaloids/lsd/" "Psychedelikum napr. LSD"
    click node_5HT2Areceptorkortex "/receptors/5-ht2a/" "5-HT2A receptor kortex"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PSYCHEDELIKA A LC

Psychedelikum (napr. LSD)
        │
        ├─→ 5-HT2A receptor (kortex)
        │         │
        │         ↓
        │   Kortiko-LC projekce
        │         │
        │         ↓
        │   LC aktivace/modulace
        │         │
        │         └─→ Zmeneny arousal
        │         └─→ Zmenena pozornost
        │
        └─→ 5-HT2C (přímo?)
                  │
                  ↓
            LC modulace

Kontext: NE system pravdepodobne prispiva k:
- Zvysene bdelosti pod psychedeliky
- Emocni intenzite
- Hypervigilanci
```

</details>

### Psychedelika a noradrenergni system

| Latka | Efekt na LC | Reference |
|-------|-------------|-----------|
| **[LSD](@/alkaloids/lsd.md)** | Zvysena aktivita | Aghajanian 1968 |
| **[Psilocybin](@/alkaloids/psilocybin.md)** | Modulace | - |
| **MDMA** | Silna NE release | Green 2003 |

---

## Receptorova exprese

### Adrenoreceptory v LC

| Receptor | Exprese | Funkce |
|----------|---------|--------|
| **Alpha-2A** | Vysoka | Autoreceptor (inhibice) |
| **Alpha-1** | Stredni | Excitace (od PFC) |

### Dalsi receptory

| Receptor | Ligand | Efekt na LC |
|----------|--------|-------------|
| **5-HT2A** | [Serotonin](@/glossary/serotonin.md) | Excitace |
| **CRF-R1** | CRF | Silna excitace |
| **Orexin** | Orexin A/B | Excitace (arousal) |
| **GABA-A** | [GABA](@/glossary/gaba.md) | Inhibice |
| **Opioidni (mu)** | Endorfiny | Inhibice |

### Alpha-2 autoreceptor

```mermaid
flowchart TD
    node_ALPHA2AAUTORECEPTOR["ALPHA-2A AUTORECEPTOR"]
    node_NEneuronLC["NE neuron LC:"]
    node_Terminl["Terminál"]
    node_Alpha2AAutoreceptor["Alpha-2A          Autoreceptor"]
    node_presynaptick["presynaptický"]
    node_Gioprotein["Gi/o protein"]
    node_cAMPCa2influx["cAMP           Ca2+ influx"]
    node_THaktivitaNErelease["TH aktivita    NE release"]
    node_NEGATIVNZPTNVAZBA["NEGATIVNÍ ZPĚTNÁ VAZBA"]
    node_Farmakologie["Farmakologie:"]

    node_ALPHA2AAUTORECEPTOR --> node_NEneuronLC
    node_NEneuronLC --> node_Terminl
    node_Terminl --> node_Alpha2AAutoreceptor
    node_Alpha2AAutoreceptor --> node_presynaptick
    node_presynaptick --> node_Gioprotein
    node_Gioprotein --> node_cAMPCa2influx
    node_cAMPCa2influx --> node_THaktivitaNErelease
    node_THaktivitaNErelease --> node_NEGATIVNZPTNVAZBA
    node_NEGATIVNZPTNVAZBA --> node_Farmakologie
```

<details>
<summary>ASCII verze diagramu</summary>

```
ALPHA-2A AUTORECEPTOR

NE neuron (LC):
┌─────────────────────────────────────────────────┐
│                                                 │
│   Terminál                                      │
│       │                                         │
│       │ ┌─────────────────┐                    │
│       └─┤ Alpha-2A        │ ← Autoreceptor     │
│         │ (presynaptický) │                    │
│         └────────┬────────┘                    │
│                  │                              │
│                  ↓                              │
│         Gi/o protein                            │
│                  │                              │
│         ┌───────┴───────┐                      │
│         ↓               ↓                      │
│    ↓ cAMP          ↓ Ca2+ influx              │
│         │               │                      │
│         ↓               ↓                      │
│    ↓ TH aktivita   ↓ NE release               │
│                                                 │
│   NEGATIVNÍ ZPĚTNÁ VAZBA                       │
└─────────────────────────────────────────────────┘

Farmakologie:
- Agonista (clonidin, dexmedetomidin): sedace, analgezie
- Antagonista (yohimbin): arousal, anxieta
```

</details>

---

## Konektivita

### Aferentni spoje

| Zdroj | Neurotransmiter | Efekt |
|-------|-----------------|-------|
| **[Amygdala](@/brain/amygdala.md) (CeA)** | CRF | Silna excitace |
| **Hypothalamus (LH)** | Orexin | Arousal |
| **PAG** | Glutamát | Obrana, bolest |
| **[Prefrontální kortex](@/brain/prefrontal-cortex.md)** | Glutamát | Modulace |
| **Nucleus paragigantocell.** | GABA | Inhibice (REM) |

### Eferentni spoje

| Cil | Receptor | Funkce |
|-----|----------|--------|
| **Neokortex** | Alpha-1, Alpha-2, Beta | Arousal, kognice |
| **Hippocampus** | Beta, Alpha-1 | LTP, pamet |
| **Amygdala** | Beta | Emocni pamet |
| **Thalamus** | Alpha-1 | Senzoricky gate |
| **Raphe nuclei** | Alpha-1 | Vzajemna regulace |
| **Micha** | Alpha-2 | Analgezie |

---

## Patologie LC

### Alzheimerova choroba

| Nalez | Stadium |
|-------|---------|
| **Casna degenerace LC** | Pred kortikalni tau |
| **Ztrata neuronu** | 30-70% |
| **Snizeny NE** | Globalni deficit |
| **Tau patologie** | Jedna z prvnich oblasti |

```
LC V ALZHEIMERU

Normální LC:                 Alzheimer LC:
████████████████████        ████████░░░░░░░░░░░░
████████████████████        ████████░░░░░░░░░░░░
████████████████████        ████░░░░░░░░░░░░░░░░
                            (30-70% ztráta neuronů)

Důsledky:
- Snížená pozornost
- Poruchy paměti
- Ztráta neuroprotekce (NE má anti-zánětlivé účinky)
```

### Parkinsonova choroba

| Nalez | Popis |
|-------|-------|
| **Ztrata LC neuronu** | Casto predchazi SN |
| **Non-motoricke symptomy** | Deprese, uzkost, kognice |
| **Neuromelanin ztrata** | MRI detekovatelne |

### PTSD

| Nalez | Dusledek |
|-------|----------|
| **Hyperaktivni LC** | Hypervigilance |
| **Zvyseny bazalni NE** | Pretrvavajici arousal |
| **Abnormalni CRF** | Stresova dysregulace |

### ADHD

| Nalez | Terapie |
|-------|---------|
| **Hypoaktivni LC** | Atomoxetin (NET inhibitor) |
| **Snizeny NE v PFC** | Stimulancia |
| **Abnormalni tonic/phasic** | Alpha-2A agoniste |

---

## Farmakologie

### Latky ovlivnujici LC

| Latka | Mechanismus | Klinicky efekt |
|-------|-------------|----------------|
| **Atomoxetin** | NET inhibitor | ADHD |
| **Dexmedetomidin** | Alpha-2 agonista | Sedace (ICU) |
| **Clonidin** | Alpha-2 agonista | Hypertenze, ADHD |
| **Yohimbin** | Alpha-2 antagonista | Anxiogenny |
| **Propranolol** | Beta antagonista | Performance anxiety |
| **Prazosin** | Alpha-1 antagonista | PTSD nocni mury |

### Psychedelika a LC

| Latka | Efekt na LC |
|-------|-------------|
| **LSD** | Modulace via 5-HT2A |
| **MDMA** | Silna NE release |
| **Ayahuasca** | MAO-A inhibice → zvyseny NE |

---

## Reference

### Klicova literatura

1. Aston-Jones, G. & Cohen, J.D. (2005). *An integrative theory of locus coeruleus-norepinephrine function: Adaptive gain and optimal performance*. Annual Review of Neuroscience, 28, 403-450.

2. Sara, S.J. (2009). *The locus coeruleus and noradrenergic modulation of cognition*. Nature Reviews Neuroscience, 10(3), 211-223.

3. Berridge, C.W. & Waterhouse, B.D. (2003). *The locus coeruleus-noradrenergic system: modulation of behavioral state and state-dependent cognitive processes*. Brain Research Reviews, 42(1), 33-84.

4. Mather, M., Clewett, D., Sakaki, M. & Harley, C.W. (2016). *Norepinephrine ignites local hotspots of neuronal excitation*. Nature Reviews Neuroscience, 17(3), 169-182.

5. Braak, H. et al. (2011). *Stages of the pathologic process in Alzheimer disease*. Journal of Neuropathology, 70(11), 960-969.

### LC a psychedelika

6. Aghajanian, G.K. (1968). *LSD and 2-bromo-LSD: Comparison of effects on serotonergic neurones and on neurones in two serotonergic projection areas*. Neuropharmacology, 7(4), 307-318.

---

## Viz take

### Mozkové oblasti
- [Prefrontalni kortex](@/brain/prefrontal-cortex.md) - LC projekce, kognice
- [Hippocampus](@/brain/hippocampus.md) - Pamet, LTP
- [Amygdala](@/brain/amygdala.md) - Emocni pamet
- [Raphe nuclei](@/brain/raphe-nuclei.md) - Vzajemna regulace
- [Thalamus](@/brain/thalamus.md) - Arousal

### Receptory
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Modulace LC
- [GABA-A receptor](@/receptors/gaba-a.md) - Inhibice

### Neurotransmitery
- [Serotonin](@/glossary/serotonin.md) - 5-HT2A vstup
- [GABA](@/glossary/gaba.md) - Inhibice

### Psychoaktivní látky
- [LSD](@/alkaloids/lsd.md) - LC modulace
- [Psilocybin](@/alkaloids/psilocybin.md) - Neprime efekty

---

<- Zpet na [Mozek](@/brain/_index.md) | [Raphe nuclei](@/brain/raphe-nuclei.md) ->
