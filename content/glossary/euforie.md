+++
title = "Euforie"
description = "Euforie - stav intenzivního štěstí a pohody, neurobiologie, typy euforie u různých psychoaktivních látek, dopaminergní vs serotoninové vs GABAergní mechanismy"
weight = 10
insert_anchor_links = "right"

[taxonomies]
categories = ["psychologie", "neurobiologie", "fenomenologie"]
tags = ["euforie", "dopamin", "serotonin", "GABA", "reward", "endorfiny", "štěstí"]
+++

# Euforie

**Euforie** (z řeckého *eu* = dobře + *pherein* = nést) je stav intenzivního **štěstí**, **pohody** a **spokojenosti**, často doprovázený pocity energie, sebedůvěry a optimismu. Je klíčovým účinkem mnoha psychoaktivních látek.

---

## Neurobiologie euforie

### Hlavní systémy

```mermaid
flowchart TD
    node_NEUROBIOLOGICKSUBSTR["NEUROBIOLOGICKÉ SUBSTRÁTY EUFORIE"]
    node_DOPAMINOVSYSTM["DOPAMINOVÝ SYSTÉM"]
    node_VTANAcPFC["VTA  NAc  PFC"]
    node_Wantingmotivansalien["'Wanting' - motivační salience"]
    node_OPIOIDNSYSTM["OPIOIDNÍ SYSTÉM"]
    node_Endorfinyenkefaliny["Endorfiny, enkefaliny"]
    node_Likinghedonickdopad["'Liking' - hedonický dopad"]
    node_SEROTONINOVSYSTM["SEROTONINOVÝ SYSTÉM"]
    node_Raphekortexlimbicksy["Raphe  kortex, limbický systém"]
    node_Emonpohodaspokojenos["Emoční pohoda, spokojenost"]
    node_GABAergnSYSTM["GABAergní SYSTÉM"]
    node_Disinhibicerewardokr["Disinhibice reward okruhů"]
    node_Anxiolzasubjektivnpo["Anxiolýza  subjektivní pohoda"]

    node_NEUROBIOLOGICKSUBSTR --> node_DOPAMINOVSYSTM
    node_DOPAMINOVSYSTM --> node_VTANAcPFC
    node_VTANAcPFC --> node_Wantingmotivansalien
    node_Wantingmotivansalien --> node_OPIOIDNSYSTM
    node_OPIOIDNSYSTM --> node_Endorfinyenkefaliny
    node_Endorfinyenkefaliny --> node_Likinghedonickdopad
    node_Likinghedonickdopad --> node_SEROTONINOVSYSTM
    node_SEROTONINOVSYSTM --> node_Raphekortexlimbicksy
    node_Raphekortexlimbicksy --> node_Emonpohodaspokojenos
    node_Emonpohodaspokojenos --> node_GABAergnSYSTM
    node_GABAergnSYSTM --> node_Disinhibicerewardokr
    node_Disinhibicerewardokr --> node_Anxiolzasubjektivnpo

    click node_DOPAMINOVSYSTM "/glossary/dopamin/" "DOPAMINOVÝ SYSTÉM"
    click node_SEROTONINOVSYSTM "/glossary/serotonin/" "SEROTONINOVÝ SYSTÉM"
    click node_GABAergnSYSTM "/glossary/gaba/" "GABAergní SYSTÉM"
```

<details>
<summary>ASCII verze diagramu</summary>

```
NEUROBIOLOGICKÉ SUBSTRÁTY EUFORIE

┌─────────────────────────────────────────────┐
│                                             │
│  DOPAMINOVÝ SYSTÉM                          │
│  VTA → NAc → PFC                            │
│  "Wanting" - motivační salience             │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  OPIOIDNÍ SYSTÉM                            │
│  Endorfiny, enkefaliny                      │
│  "Liking" - hedonický dopad                 │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  SEROTONINOVÝ SYSTÉM                        │
│  Raphe → kortex, limbický systém            │
│  Emoční pohoda, spokojenost                 │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  GABAergní SYSTÉM                           │
│  Disinhibice reward okruhů                  │
│  Anxiolýza → subjektivní pohoda             │
│                                             │
└─────────────────────────────────────────────┘
```

</details>

### Reward circuit

```mermaid
flowchart TD
    node_MESOLIMBICKDRHA["MESOLIMBICKÁ DRÁHA"]
    node_VTAVentralTegmentalA["VTA Ventral Tegmental Area"]
    node_Dopamin["Dopamin"]
    node_NAcNucleusAccumbens["NAc Nucleus Accumbens"]
    node_Projekce["Projekce"]
    node_AmygdalaPFC["Amygdala    PFC"]
    node_emocekognice["emoce   kognice"]

    node_MESOLIMBICKDRHA --> node_VTAVentralTegmentalA
    node_VTAVentralTegmentalA --> node_Dopamin
    node_Dopamin --> node_NAcNucleusAccumbens
    node_NAcNucleusAccumbens --> node_Projekce
    node_Projekce --> node_AmygdalaPFC
    node_AmygdalaPFC --> node_emocekognice

    click node_Dopamin "/glossary/dopamin/" "Dopamin"
    click node_AmygdalaPFC "/brain/amygdala/" "Amygdala    PFC"
```

<details>
<summary>ASCII verze diagramu</summary>

```
MESOLIMBICKÁ DRÁHA

VTA (Ventral Tegmental Area)
         |
         | Dopamin
         ↓
NAc (Nucleus Accumbens)
         |
         | Projekce
         ↓
   ┌─────┴─────┐
   ↓           ↓
Amygdala    PFC
(emoce)   (kognice)
```

</details>

---

## Typy euforie

### Dopaminergní euforie

**Mechanismus**: Zvýšení dopaminu v NAc

| Charakteristika | Popis |
|-----------------|-------|
| **Kvalita** | Energická, stimulující |
| **"Rush"** | Intenzivní nástup |
| **Motivace** | Zvýšená, goal-directed |
| **Typické látky** | Kokain, amfetaminy, metamfetamin |

```mermaid
flowchart TD
    node_DOPAMINERGNEUFORIE["DOPAMINERGNÍ EUFORIE"]
    node_NormlnStimulant["Normální      Stimulant"]
    node_DADA["DA         DA ████"]
    node_BaselineRushHigh["Baseline      Rush/High"]
    node_SpokojenostIntenzivn["Spokojenost   Intenzivní euforie"]
    node_energie["+ energie"]

    node_DOPAMINERGNEUFORIE --> node_NormlnStimulant
    node_NormlnStimulant --> node_DADA
    node_DADA --> node_BaselineRushHigh
    node_BaselineRushHigh --> node_SpokojenostIntenzivn
    node_SpokojenostIntenzivn --> node_energie

    click node_DOPAMINERGNEUFORIE "/glossary/dopamin/" "DOPAMINERGNÍ EUFORIE"
```

<details>
<summary>ASCII verze diagramu</summary>

```
DOPAMINERGNÍ EUFORIE

Normální      Stimulant
    |             |
  DA ──        DA ████
    |             |
Baseline      Rush/High
    |             |
Spokojenost   Intenzivní euforie
                + energie
```

</details>

### Opioidní euforie

**Mechanismus**: Aktivace μ-opioidních receptorů

| Charakteristika | Popis |
|-----------------|-------|
| **Kvalita** | Teplá, "objímající" |
| **Tělesná** | Výrazná tělesná složka |
| **Anxiolýza** | Silná |
| **Typické látky** | Heroin, morfin, oxykodon |

```mermaid
flowchart TD
    node_OPIOIDNEUFORIE["OPIOIDNÍ EUFORIE"]
    node_Teplvlna["'Teplá vlna'"]
    node_Tlesnrelaxace["Tělesná relaxace"]
    node_Emonpohoda["Emoční pohoda"]
    node_Absencebolestizkosti["Absence bolesti/úzkosti"]
    node_Contentment["Contentment"]

    node_OPIOIDNEUFORIE --> node_Teplvlna
    node_Teplvlna --> node_Tlesnrelaxace
    node_Tlesnrelaxace --> node_Emonpohoda
    node_Emonpohoda --> node_Absencebolestizkosti
    node_Absencebolestizkosti --> node_Contentment
```

<details>
<summary>ASCII verze diagramu</summary>

```
OPIOIDNÍ EUFORIE

"Teplá vlna"
    ↓
Tělesná relaxace
    ↓
Emoční pohoda
    ↓
Absence bolesti/úzkosti
    ↓
Contentment
```

</details>

### Serotoninová euforie

**Mechanismus**: 5-HT uvolnění nebo [5-HT2A](@/receptors/5-ht2a.md) aktivace

| Charakteristika | Popis |
|-----------------|-------|
| **Kvalita** | Empatická, expansivní |
| **Spojení** | Pocit spojení s ostatními |
| **Insight** | Kognitivní clarity |
| **Typické látky** | [MDMA](@/alkaloids/mdma.md), [psilocybin](@/alkaloids/psilocybin.md), [LSD](@/alkaloids/lsd.md) |

### GABAergní euforie

**Mechanismus**: Disinhibice reward okruhů, anxiolýza

| Charakteristika | Popis |
|-----------------|-------|
| **Kvalita** | Klidná, relaxovaná |
| **Anxiolýza** | Výrazná |
| **Tělesná** | Svalová relaxace |

```mermaid
flowchart TD
    node_GABAergnEUFORIE["GABAergní EUFORIE"]
    node_GABAAaktivace["GABA-A aktivace"]
    node_Kortiklninhibice["Kortikální inhibice"]
    node_Snenzkost["Snížená úzkost"]
    node_DisinhibiceVTASubjek["Disinhibice VTA     Subjektivní"]
    node_pohoda["pohoda"]
    node_Tepleuforie["'Teplá' euforie"]

    node_GABAergnEUFORIE --> node_GABAAaktivace
    node_GABAAaktivace --> node_Kortiklninhibice
    node_Kortiklninhibice --> node_Snenzkost
    node_Snenzkost --> node_DisinhibiceVTASubjek
    node_DisinhibiceVTASubjek --> node_pohoda
    node_pohoda --> node_Tepleuforie

    click node_GABAergnEUFORIE "/glossary/gaba/" "GABAergní EUFORIE"
    click node_GABAAaktivace "/glossary/gaba/" "GABA-A aktivace"
```

<details>
<summary>ASCII verze diagramu</summary>

```
GABAergní EUFORIE

GABA-A aktivace
      ↓
Kortikální inhibice
      ↓
Snížená úzkost ────────────┐
      |                    |
      ↓                    ↓
Disinhibice VTA     Subjektivní
      |              pohoda
      ↓
"Teplá" euforie
```

</details>

---

## Srovnání typů euforie

| Aspekt | Dopaminergní | Opioidní | Serotoninová | GABAergní |
|--------|--------------|----------|--------------|-----------|
| **Energie** | Vysoká | Nízká | Střední | Nízká |
| **Tělesná kvalita** | Stimulace | Teplo, relaxace | Variabilní | Relaxace |
| **Kognitivní efekt** | Fokus | Zamlžení | Expanze | Zamlžení |
| **Sociální** | Variabilní | Izolace | Empatie | Disinhibice |
| **Závislostní potenciál** | Velmi vysoký | Velmi vysoký | Nízký | Střední |
| **Tolerance** | Rychlá | Velmi rychlá | Pomalá | Rychlá |

---

## Euforie u konkrétních látek

### Klasická psychedelika

| Látka | Typ euforie | Poznámka |
|-------|-------------|----------|
| **[Psilocybin](@/alkaloids/psilocybin.md)** | Serotoninová + mystická | Podmíněná set/setting |
| **[LSD](@/alkaloids/lsd.md)** | Serotoninová | Intenzivní, dlouhá |
| **[DMT](@/alkaloids/dmt.md)** | Serotoninová | Breakthrough = extáze |

### GABAergika

| Látka | Charakteristika |
|-------|-----------------|
| **Alkohol** | Disinhibiční, sociální |
| **GHB** | Podobná MDMA při nízkých dávkách |

### Stimulanty

| Látka | Charakteristika |
|-------|-----------------|
| **Kokain** | Intenzivní rush, krátký |
| **Amfetamin** | Delší, energická |
| **MDMA** | Kombinace DA + 5-HT, empatogenní |

---

## Klinický a terapeutický kontext

### Euforie v terapii

| Kontext | Role euforie |
|---------|--------------|
| **Psychedelická terapie** | Mystická extáze koreluje s terapeutickým výsledkem |
| **Palliativní péče** | Legitimní cíl (MDMA, psilocybin) |
| **Anestezie** | Vedlejší efekt ketaminu |

### Euforie a závislost

```mermaid
flowchart TD
    node_EUFORIEZVISLOST["EUFORIE  ZÁVISLOST"]
    node_Pozitivnreinforcemen["Pozitivní reinforcement"]
    node_Euforie["Euforie"]
    node_OpakovnTolerance["Opakování          Tolerance"]
    node_Eskalace["Eskalace"]
    node_Zvislost["Závislost"]

    node_EUFORIEZVISLOST --> node_Pozitivnreinforcemen
    node_Pozitivnreinforcemen --> node_Euforie
    node_Euforie --> node_OpakovnTolerance
    node_OpakovnTolerance --> node_Eskalace
    node_Eskalace --> node_Zvislost
```

<details>
<summary>ASCII verze diagramu</summary>

```
EUFORIE → ZÁVISLOST

Pozitivní reinforcement
        |
    Euforie ────────────┐
        |               |
   Opakování          Tolerance
        |               |
   Eskalace ←──────────┘
        |
   Závislost
```

</details>

| Faktor | Vliv na závislostní potenciál |
|--------|-------------------------------|
| **Intenzita euforie** | Vyšší = vyšší riziko |
| **Rychlost nástupu** | Rychlejší = vyšší riziko |
| **Trvání** | Kratší = více opakování |
| **Tolerance** | Rychlá = eskalace |

---

## Viz také

### Neurotransmitery
- [Dopamin](@/glossary/dopamin.md) - Reward, motivace
- [Serotonin](@/glossary/serotonin.md) - Emoční pohoda
- [GABA](@/glossary/gaba.md) - Anxiolýza

### Látky
- [Psilocybin](@/alkaloids/psilocybin.md) - Mystická extáze
- [MDMA](@/alkaloids/mdma.md) - Entaktogenní euforie

### Mozkové struktury
- [Amygdala](@/brain/amygdala.md) - Emoční zpracování
- [Prefrontální kortex](@/brain/prefrontal-cortex.md) - Kognitivní aspekty

### Související
- [Mystické zážitky](@/phenomenology/mystical-experiences.md) - Transcendentní euforie
- [Závislosti](@/conditions/addiction.md) - Patologická euforie

---

← Zpět na [Glosář](@/glossary/_index.md)
