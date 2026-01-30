+++
title = "Antagonista"
description = "Komplexni pruvodce receptorovymi antagonisty - kompetitivni vs nekompetitivni blokada, reverzibilita, terapeuticke aplikace a priklady psychoaktivnich latek"
weight = 3
insert_anchor_links = "right"

[taxonomies]
categories = ["farmakologie", "receptory", "neurofarmakologie"]
tags = ["antagonista", "receptor", "blokada", "kompetitivni", "nekompetitivni", "farmakologie", "psychoaktivni-latky"]
+++

# Antagonista - Molekularni strazce receptorove aktivity

**Antagonista** je latka, ktera se vaze na [receptor](@/glossary/receptor.md) a blokuje nebo snizuje jeho aktivaci endogennimi ligandy ci agonisty, aniz by sama vyvolavala biologickou odpoved. Antagoniste predstavuji klicovy nastroj ve farmakologii a neurovede, umoznujici presne modulovat signalni drahy v nervovem systemu.

---

## Zakladni definice

### Co je antagonista?

| Vlastnost | Popis |
|-----------|-------|
| **Zakladni definice** | Latka vazici se na receptor bez aktivace |
| **Vnitrni aktivita** | Nulova (α = 0) |
| **Efekt** | Blokada nebo snizeni odpovedi na agonisty |
| **Mechanismus** | Kompetice o vazebne misto nebo alostericka inhibice |
| **Terapeuticky vyznam** | Blokada nežadouci signalizace |

### Klicove charakteristiky

```mermaid
flowchart TD
    node_ANTAGONISTAZAKLADNIP["ANTAGONISTA - ZAKLADNI PRINCIP"]
    node_BezantagonistySantag["Bez antagonisty:              S antagonistou:"]
    node_AgonistaAgonistaAnta["Agonista                      Agonista    Antagonista"]
    node_8fa79418["▼                             ▼            ▼"]
    node_RECEPTORRECEPTOR["RECEPTOR                          RECEPTOR"]
    node_43c48985["●                           ●        ○"]
    node_obsazeno["obsazeno"]
    node_AKTIVACEBLOKOVANO["AKTIVACE                         BLOKOVANO"]
    node_signalnikaskadazadna["signalni kaskada              zadna odpoved"]

    node_ANTAGONISTAZAKLADNIP --> node_BezantagonistySantag
    node_BezantagonistySantag --> node_AgonistaAgonistaAnta
    node_AgonistaAgonistaAnta --> node_8fa79418
    node_8fa79418 --> node_RECEPTORRECEPTOR
    node_RECEPTORRECEPTOR --> node_43c48985
    node_43c48985 --> node_obsazeno
    node_obsazeno --> node_AKTIVACEBLOKOVANO
    node_AKTIVACEBLOKOVANO --> node_signalnikaskadazadna

    click node_RECEPTORRECEPTOR "/glossary/receptor/" "RECEPTOR                          RECEPTOR"
```

<details>
<summary>ASCII verze diagramu</summary>

```
ANTAGONISTA - ZAKLADNI PRINCIP

     Bez antagonisty:              S antagonistou:

     Agonista                      Agonista    Antagonista
        │                             │            │
        ▼                             ▼            ▼
   ┌─────────┐                   ┌─────────────────────┐
   │RECEPTOR │                   │      RECEPTOR       │
   │   ●     │                   │   ●        ○        │
   └────┬────┘                   │  (obsazeno)         │
        │                        └─────────────────────┘
        ▼                                 │
   AKTIVACE                         BLOKOVANO
   (signalni kaskada)              (zadna odpoved)
```

</details>

---

## Klasifikace antagonistu

### 1. Podle mechanismu vazby

#### Kompetitivni antagoniste

Souteži s agonistou o stejne (orthostericke) vazebne misto na receptoru.

| Vlastnost | Kompetitivni antagonista |
|-----------|--------------------------|
| **Vazebne misto** | Orthostericke (stejne jako agonista) |
| **Efekt na dávkovou krivku** | Posun doprava (zvyseni EC50) |
| **Efekt na Emax** | Beze zmeny (pri vysoke davce agonisty) |
| **Prekonatelnost** | Ano - zvysenim koncentrace agonisty |
| **Priklad** | Ketanserin (5-HT2A), Naloxon (opioidni) |

```mermaid
flowchart TD
    node_KOMPETITIVNIANTAGONI["KOMPETITIVNI ANTAGONISMUS"]
    node_Odpoved["Odpoved"]
    node_100Agonistasamotny["100                      Agonista samotny"]
    node_75["75                 ╱"]
    node_Antagonistaposundopr["╱      ╭ + Antagonista posun doprava"]
    node_50["50 ╱╱"]
    node_829fc43e["╱       ╱"]
    node_25["25         ╱       ╱"]
    node_0LogAgonista["0  Log Agonista"]
    node_EC50EC50["EC50   EC50'"]
    node_zvysene["zvysene"]
    node_Charakteristika["Charakteristika:"]

    node_KOMPETITIVNIANTAGONI --> node_Odpoved
    node_Odpoved --> node_100Agonistasamotny
    node_100Agonistasamotny --> node_75
    node_75 --> node_Antagonistaposundopr
    node_Antagonistaposundopr --> node_50
    node_50 --> node_829fc43e
    node_829fc43e --> node_25
    node_25 --> node_0LogAgonista
    node_0LogAgonista --> node_EC50EC50
    node_EC50EC50 --> node_zvysene
    node_zvysene --> node_Charakteristika
```

<details>
<summary>ASCII verze diagramu</summary>

```
KOMPETITIVNI ANTAGONISMUS

Odpoved
(%)
100 ┤                    ┌─── Agonista samotny
    │                  ╱
 75 ┤                ╱
    │              ╱      ╭─── + Antagonista (posun doprava)
 50 ┤────────────╱───────╱
    │          ╱       ╱
 25 ┤        ╱       ╱
    │      ╱       ╱
  0 ┼─────┴───────┴─────────→ Log [Agonista]
         EC50   EC50'
              (zvysene)

Charakteristika:
- Emax zustava zachovan
- EC50 se zvysuje (posun doprava)
- Schild rovnice: dose ratio = 1 + [B]/KB
```

</details>

#### Nekompetitivni antagoniste

Vazi se na jine misto nez agonista (alostericke) nebo ireverzibilne bloky receptor.

| Vlastnost | Nekompetitivni antagonista |
|-----------|----------------------------|
| **Vazebne misto** | Alostericke nebo ireverzibilni orthostericke |
| **Efekt na davkovou krivku** | Snizeni Emax |
| **Efekt na EC50** | Typicky beze zmeny nebo mirne zvyseni |
| **Prekonatelnost** | Ne - ani vysokou davkou agonisty |
| **Priklad** | Ketamin (NMDA kanalovy blokator) |

```mermaid
flowchart TD
    node_NEKOMPETITIVNIANTAGO["NEKOMPETITIVNI ANTAGONISMUS"]
    node_Odpoved["Odpoved"]
    node_100Agonistasamotny["100                Agonista samotny"]
    node_75Antagonistasnizeni["75           ╱    + Antagonista snizeni Emax"]
    node_a00e5021["╱   ╱"]
    node_50["50 ╱╱"]
    node_25["25   ╱   ╱"]
    node_0LogAgonista["0  Log Agonista"]
    node_EC50nezmeneno["EC50 nezmeneno"]
    node_Charakteristika["Charakteristika:"]

    node_NEKOMPETITIVNIANTAGO --> node_Odpoved
    node_Odpoved --> node_100Agonistasamotny
    node_100Agonistasamotny --> node_75Antagonistasnizeni
    node_75Antagonistasnizeni --> node_a00e5021
    node_a00e5021 --> node_50
    node_50 --> node_25
    node_25 --> node_0LogAgonista
    node_0LogAgonista --> node_EC50nezmeneno
    node_EC50nezmeneno --> node_Charakteristika
```

<details>
<summary>ASCII verze diagramu</summary>

```
NEKOMPETITIVNI ANTAGONISMUS

Odpoved
(%)
100 ┤              ┌─── Agonista samotny
    │            ╱
 75 ┤          ╱   ┌─── + Antagonista (snizeni Emax)
    │        ╱   ╱
 50 ┤──────╱───╱
    │    ╱   ╱
 25 ┤  ╱   ╱
    │╱   ╱
  0 ┼────┴──────────────────→ Log [Agonista]
        EC50 (nezmeneno)

Charakteristika:
- Emax se snizuje
- EC50 muze zustat nezmenene
- Nelze preklonat zvysenim davky agonisty
```

</details>

### 2. Podle reverzibility

#### Reverzibilni antagoniste

| Vlastnost | Hodnota |
|-----------|---------|
| **Vazba** | Nekovalentni (vodikove vazby, Van der Waals) |
| **Kinetika** | Rychla asociace i disociace |
| **Trvani ucinku** | Zavisle na biologickem polocase |
| **Obnoveni funkce** | Po eliminaci latky z organismu |
| **Priklady** | Naloxon, ketanserin, atropin |

```mermaid
flowchart TD
    node_REVERZIBILNIVAZBA["REVERZIBILNI VAZBA"]
    node_Cas["Cas"]
    node_Vazba["Vazba       ╭╮"]
    node_dfb6f68f["%        ╱        ╲"]
    node_f54df8a9["╱          ╲"]
    node_00857c7a["╱            ╲"]
    node_4688e39d["╱              ╲"]
    node_PodaniEliminaceObnov["Podani    Eliminace   Obnoveni"]
    node_latkylatkyfunkce["latky     latky       funkce"]
    node_Charakteristika["Charakteristika:"]

    node_REVERZIBILNIVAZBA --> node_Cas
    node_Cas --> node_Vazba
    node_Vazba --> node_dfb6f68f
    node_dfb6f68f --> node_f54df8a9
    node_f54df8a9 --> node_00857c7a
    node_00857c7a --> node_4688e39d
    node_4688e39d --> node_PodaniEliminaceObnov
    node_PodaniEliminaceObnov --> node_latkylatkyfunkce
    node_latkylatkyfunkce --> node_Charakteristika
```

<details>
<summary>ASCII verze diagramu</summary>

```
REVERZIBILNI VAZBA

Cas →
        ┌───────────────────────────────────┐
        │                                   │
Vazba   │    ╭──────╮                       │
(%)     │   ╱        ╲                      │
        │  ╱          ╲                     │
        │ ╱            ╲                    │
        │╱              ╲                   │
        └───────────────────────────────────┘
         Podani    Eliminace   Obnoveni
         latky     latky       funkce

Charakteristika:
- Rovnovazny stav mezi asociaci a disociaci
- Ucinek zavisi na koncentraci
- Po eliminaci - uplne obnoveni receptorove funkce
```

</details>

#### Ireverzibilni antagoniste

| Vlastnost | Hodnota |
|-----------|---------|
| **Vazba** | Kovalentni nebo kvazi-ireverzibilni |
| **Kinetika** | Velmi pomala ci zadna disociace |
| **Trvani ucinku** | Az do resyntézy receptoru |
| **Obnoveni funkce** | Vyzaduje nove receptory |
| **Priklady** | Fenoxybenzamin (alpha-1), EEDQ (vyzkumny) |

```mermaid
flowchart TD
    node_IREVERZIBILNIVAZBA["IREVERZIBILNI VAZBA"]
    node_Cas["Cas"]
    node_Vazba["Vazba       ╭"]
    node_d5a9feb7["%        ╱"]
    node_trvalablokada["╱    trvala blokada"]
    node_PodaniFunkcnirecepto["Podani   Funkcni receptory se"]
    node_latkyobnovujiazresyn["latky    obnovuji az resyntezou"]
    node_Dobaobnovenihodinyaz["Doba obnoveni: hodiny az dny resynteza receptoru"]

    node_IREVERZIBILNIVAZBA --> node_Cas
    node_Cas --> node_Vazba
    node_Vazba --> node_d5a9feb7
    node_d5a9feb7 --> node_trvalablokada
    node_trvalablokada --> node_PodaniFunkcnirecepto
    node_PodaniFunkcnirecepto --> node_latkyobnovujiazresyn
    node_latkyobnovujiazresyn --> node_Dobaobnovenihodinyaz

    click node_PodaniFunkcnirecepto "/glossary/receptor/" "Podani   Funkcni receptory se"
    click node_Dobaobnovenihodinyaz "/glossary/receptor/" "Doba obnoveni: hodiny az dny resynteza receptoru"
```

<details>
<summary>ASCII verze diagramu</summary>

```
IREVERZIBILNI VAZBA

Cas →
        ┌───────────────────────────────────┐
        │                                   │
Vazba   │    ╭────────────────────────────  │
(%)     │   ╱                               │
        │  ╱                                │
        │ ╱    (trvala blokada)             │
        │╱                                  │
        └───────────────────────────────────┘
         Podani   Funkcni receptory se
         latky    obnovuji az resyntezou

Doba obnoveni: hodiny az dny (resynteza receptoru)
```

</details>

### 3. Tabulka srovnani typu antagonismu

| Typ | Vazebne misto | Efekt na Emax | Efekt na EC50 | Prekonatelnost |
|-----|---------------|---------------|---------------|----------------|
| **Kompetitivni reverzibilni** | Orthostericke | Zachovan | Zvyseni | Ano |
| **Kompetitivni ireverzibilni** | Orthostericke | Snizeni | Zvyseni | Ne |
| **Nekompetitivni** | Alostericke | Snizeni | Beze zmeny | Ne |
| **Nesoutezivy** | Alostericke | Snizeni | Beze zmeny | Ne |

---

## Neutralni antagoniste vs inverzni agoniste

### Rozliseni

Receptory mohou mit bazalni (konstitutivni) aktivitu i bez pritomnosti agonisty. Toto rozliseni je klinicky vyznamne.

| Typ ligandu | Vnitrni aktivita | Efekt na bazalni aktivitu |
|-------------|------------------|---------------------------|
| **Plny agonista** | α = 1.0 | Maximalni aktivace |
| **Parcialni agonista** | α = 0.2-0.8 | Castecna aktivace |
| **Neutralni antagonista** | α = 0 | Zadny efekt na bazal |
| **Inverzni agonista** | α < 0 | Snizeni bazalni aktivity |

```mermaid
flowchart TD
    node_SPEKTRUMLIGANDU["SPEKTRUM LIGANDU"]
    node_Vnitrniaktivita["Vnitrni aktivita"]
    node_10Plnyagonista["+1.0   Plny agonista"]
    node_muscimolserotonin["muscimol, serotonin"]
    node_05Parcialniagonista["+0.5   Parcialni agonista"]
    node_psilocinbuprenorfin["psilocin, buprenorfin"]
    node_00NEUTRALNIANTAGONIS["0.0   NEUTRALNI ANTAGONISTA"]
    node_ketanserinnaloxon["ketanserin, naloxon"]
    node_pimavanserinDMCM["pimavanserin, DMCM"]
    node_NARECEPTORUSKONSTITU["NA RECEPTORU S KONSTITUTIVNI AKTIVITOU:"]
    node_Bazalni["Bazalni"]
    node_aktivita["aktivita"]
    node_100Plnyagonista["100                              Plny agonista"]
    node_75["75      ╱"]
    node_Neutralniantagonista["╱    Neutralni antagonista"]
    node_50["50"]
    node_zadnazmenabazalu["zadna zmena bazalu"]
    node_25["25"]
    node_Inverzniagonista["╲     Inverzni agonista"]
    node_0["0     ╲"]
    node_Ligand["Ligand"]

    node_SPEKTRUMLIGANDU --> node_Vnitrniaktivita
    node_Vnitrniaktivita --> node_10Plnyagonista
    node_10Plnyagonista --> node_muscimolserotonin
    node_muscimolserotonin --> node_05Parcialniagonista
    node_05Parcialniagonista --> node_psilocinbuprenorfin
    node_psilocinbuprenorfin --> node_00NEUTRALNIANTAGONIS
    node_00NEUTRALNIANTAGONIS --> node_ketanserinnaloxon
    node_ketanserinnaloxon --> node_pimavanserinDMCM
    node_pimavanserinDMCM --> node_NARECEPTORUSKONSTITU
    node_NARECEPTORUSKONSTITU --> node_Bazalni
    node_Bazalni --> node_aktivita
    node_aktivita --> node_100Plnyagonista
    node_100Plnyagonista --> node_75
    node_75 --> node_Neutralniantagonista
    node_Neutralniantagonista --> node_50
    node_50 --> node_zadnazmenabazalu
    node_zadnazmenabazalu --> node_25
    node_25 --> node_Inverzniagonista
    node_Inverzniagonista --> node_0
    node_0 --> node_Ligand

    click node_muscimolserotonin "/alkaloids/muscimol/" "muscimol, serotonin"
    click node_psilocinbuprenorfin "/alkaloids/psilocin/" "psilocin, buprenorfin"
    click node_NARECEPTORUSKONSTITU "/glossary/receptor/" "NA RECEPTORU S KONSTITUTIVNI AKTIVITOU:"
```

<details>
<summary>ASCII verze diagramu</summary>

```
SPEKTRUM LIGANDU

Vnitrni aktivita
      ↑
+1.0  ├───────────────────── Plny agonista
      │                      (muscimol, serotonin)
+0.5  ├───────────────────── Parcialni agonista
      │                      (psilocin, buprenorfin)
 0.0  ├───────────────────── NEUTRALNI ANTAGONISTA
      │                      (ketanserin, naloxon)
-0.5  ├─────────────────────
      │
-1.0  ├───────────────────── Inverzni agonista
      ↓                      (pimavanserin, DMCM)


NA RECEPTORU S KONSTITUTIVNI AKTIVITOU:

Bazalni
aktivita
(%)     │
  100   │                           Plny agonista
        │    ╭─────────────────────────────────
   75   │   ╱
        │  ╱    Neutralni antagonista
   50   │─────────────────────────────────────
        │        (zadna zmena bazalu)
   25   │
        │ ╲     Inverzni agonista
    0   │  ╲───────────────────────────────────
        └─────────────────────────────────────→
                    [Ligand]
```

</details>

### Neutralni antagonista - charakteristiky

| Vlastnost | Popis |
|-----------|-------|
| **Definice** | Blokuje agonisty bez ovlivneni bazalni aktivity |
| **Klinicke pouziti** | Preferovan u receptoru s nízkou konstitutivni aktivitou |
| **Vyhoda** | Predvidatelny efekt, zádny "reboundˇ |
| **Priklady** | Ketanserin (5-HT2A), naltrexon (opioidni) |

### Inverzni agonista - charakteristiky

| Vlastnost | Popis |
|-----------|-------|
| **Definice** | Snizuje bazalni receptorovou aktivitu |
| **Klinicke pouziti** | Receptory s vysokou konstitutivni aktivitou |
| **Vyhoda** | Silnejsi blokada nez neutralni antagonista |
| **Nevyhoda** | Mozny rebound po vysazeni |
| **Priklady** | Pimavanserin (5-HT2A), flumazenil (GABA-A - castecny) |

---

## Mechanismy antagonismu

### Orthostericka blokada

```mermaid
flowchart TD
    node_ORTHOSTERICKAKOMPETI["ORTHOSTERICKA KOMPETICE"]
    node_AgonistaAAntagonista["Agonista A        Antagonista B"]
    node_dff2fea1["▼                     ▼"]
    node_RECEPTOR["RECEPTOR"]
    node_ORTHOSTERICKEMISTO["ORTHOSTERICKE MISTO"]
    node_AneboB["A ●    nebo    ○ B"]
    node_aktivaceblokada["aktivace  blokada"]
    node_Pouzejedenligandmuze["Pouze jeden ligand muze obsadit misto v dany okamzik"]
    node_Kompeticeovazbu["Kompetice o vazbu"]
    node_Pomerobsazenostizavi["Pomer obsazenosti zavisi na koncentraci a afinite"]

    node_ORTHOSTERICKAKOMPETI --> node_AgonistaAAntagonista
    node_AgonistaAAntagonista --> node_dff2fea1
    node_dff2fea1 --> node_RECEPTOR
    node_RECEPTOR --> node_ORTHOSTERICKEMISTO
    node_ORTHOSTERICKEMISTO --> node_AneboB
    node_AneboB --> node_aktivaceblokada
    node_aktivaceblokada --> node_Pouzejedenligandmuze
    node_Pouzejedenligandmuze --> node_Kompeticeovazbu
    node_Kompeticeovazbu --> node_Pomerobsazenostizavi

    click node_RECEPTOR "/glossary/receptor/" "RECEPTOR"
```

<details>
<summary>ASCII verze diagramu</summary>

```
ORTHOSTERICKA KOMPETICE

              Agonista (A)        Antagonista (B)
                  │                     │
                  ▼                     ▼
            ┌──────────────────────────────────┐
            │         RECEPTOR                  │
            │                                   │
            │    ┌────────────────────────┐    │
            │    │  ORTHOSTERICKE MISTO  │    │
            │    │                        │    │
            │    │  A ●    nebo    ○ B   │    │
            │    │  (aktivace)  (blokada) │    │
            │    └────────────────────────┘    │
            │                                   │
            └──────────────────────────────────┘

Pouze jeden ligand muze obsadit misto v dany okamzik
→ Kompetice o vazbu
→ Pomer obsazenosti zavisi na koncentraci a afinite
```

</details>

### Alostericka modulace

```mermaid
flowchart TD
    node_ALOSTERICKAINHIBICE["ALOSTERICKA INHIBICE"]
    node_Agonista["Agonista"]
    node_RECEPTOR["RECEPTOR"]
    node_ORTHOALOST["ORTHO-       ALOST-"]
    node_STERICKEERICKE["STERICKE     ERICKE"]
    node_1228436e["●            ○"]
    node_agonistaantagonist["agonista  antagonist"]
    node_snizuje["snizuje"]
    node_afinitu["afinitu/"]
    node_eficaci["eficaci"]
    node_Alosterickyantagonis["Alostericky antagonista:"]

    node_ALOSTERICKAINHIBICE --> node_Agonista
    node_Agonista --> node_RECEPTOR
    node_RECEPTOR --> node_ORTHOALOST
    node_ORTHOALOST --> node_STERICKEERICKE
    node_STERICKEERICKE --> node_1228436e
    node_1228436e --> node_agonistaantagonist
    node_agonistaantagonist --> node_snizuje
    node_snizuje --> node_afinitu
    node_afinitu --> node_eficaci
    node_eficaci --> node_Alosterickyantagonis

    click node_RECEPTOR "/glossary/receptor/" "RECEPTOR"
```

<details>
<summary>ASCII verze diagramu</summary>

```
ALOSTERICKA INHIBICE

                    Agonista
                       │
                       ▼
            ┌──────────────────────────────────┐
            │         RECEPTOR                  │
            │                                   │
            │  ┌──────────┐   ┌──────────┐    │
            │  │ ORTHO-   │   │ ALOST-   │    │
            │  │ STERICKE │   │ ERICKE   │    │
            │  │   ●      │   │   ○      │    │
            │  │(agonista)│ ← │(antagonist│   │
            │  │          │   │ snizuje   │   │
            │  │          │   │ afinitu/  │   │
            │  │          │   │ eficaci)  │   │
            │  └──────────┘   └──────────┘    │
            │                                   │
            └──────────────────────────────────┘

Alostericky antagonista:
- Meni konformaci receptoru
- Snizuje afinitu agonisty
- Nebo snizuje eficaci agonisty
- Oba ligandy mohou byt soucasne navazany
```

</details>

### Kanalova blokada (specialni pripad)

```mermaid
flowchart TD
    node_KANALOVYBLOKATORnapr["KANALOVY BLOKATOR napr. ketamin na NMDA"]
    node_BezblokatoruSblokato["Bez blokatoru:                  S blokatorem:"]
    node_GlutamatGlycinGlutam["Glutamat + Glycin               Glutamat + Glycin"]
    node_82550aeb["▼                               ▼"]
    node_NMDAreceptorNMDArece["NMDA receptor                 NMDA receptor"]
    node_XXXXX["XXXXX"]
    node_XXXXXKetaminvkanalu["XXXXX  Ketamin v kanalu"]
    node_CaNainfluxBLOKOVANO["Ca²⁺, Na⁺ influx              BLOKOVANO"]
    node_usedependent["use-dependent"]
    node_Charakteristikausede["Charakteristika use-dependent blokady:"]

    node_KANALOVYBLOKATORnapr --> node_BezblokatoruSblokato
    node_BezblokatoruSblokato --> node_GlutamatGlycinGlutam
    node_GlutamatGlycinGlutam --> node_82550aeb
    node_82550aeb --> node_NMDAreceptorNMDArece
    node_NMDAreceptorNMDArece --> node_XXXXX
    node_XXXXX --> node_XXXXXKetaminvkanalu
    node_XXXXXKetaminvkanalu --> node_CaNainfluxBLOKOVANO
    node_CaNainfluxBLOKOVANO --> node_usedependent
    node_usedependent --> node_Charakteristikausede

    click node_NMDAreceptorNMDArece "/glossary/receptor/" "NMDA receptor                 NMDA receptor"
```

<details>
<summary>ASCII verze diagramu</summary>

```
KANALOVY BLOKATOR (napr. ketamin na NMDA)

    Bez blokatoru:                  S blokatorem:

    Glutamat + Glycin               Glutamat + Glycin
          │                               │
          ▼                               ▼
   ┌─────────────┐                 ┌─────────────┐
   │ NMDA receptor│                │ NMDA receptor│
   │   ┌─────┐   │                 │   ┌─────┐   │
   │   │     │   │                 │   │XXXXX│   │
   │   │     │   │                 │   │XXXXX│ ← Ketamin v kanalu
   │   │     │   │                 │   │XXXXX│   │
   │   └─────┘   │                 │   └─────┘   │
   └─────────────┘                 └─────────────┘
          │                               │
          ▼                               ▼
   Ca²⁺, Na⁺ influx              BLOKOVANO
                                 (use-dependent)

Charakteristika use-dependent blokady:
- Kanal musi byt otevreny pro vstup blokatoru
- Vyssi frekvence aktivace = silnejsi blokada
- Priklad: MK-801, ketamin, memantín
```

</details>

---

## Terapeuticke aplikace

### Psychiatrie a neurologie

| Indikace | Antagonizovany receptor | Lecivo | Mechanismus |
|----------|-------------------------|--------|-------------|
| **Schizofrenie** | D2 dopaminovy | Haloperidol, risperidon | Snizeni dopaminergni hyperaktivity |
| **Parkinsonova psychoza** | 5-HT2A | Pimavanserin | Blokada serotoninove psychozy |
| **Migréna (profylaxe)** | 5-HT2A/2C | Pizotifen | Prevence vazokonstrikce |
| **Predavkovani opioidy** | mu-opioidni | Naloxon, naltrexon | Kompetitivni vytlaceni opioidu |
| **Alzheimerova choroba** | NMDA | Memantín | Snizeni excitotoxicity |

### Kardiovaskularni system

| Indikace | Antagonizovany receptor | Lecivo | Mechanismus |
|----------|-------------------------|--------|-------------|
| **Hypertenze** | Alpha-1 adrenergni | Prazosin | Vazodilatace |
| **Arytmie** | Beta adrenergni | Propranolol | Snizeni srdecni frekvence |
| **Hypertenze** | AT1 (angiotensin) | Losartan | Vazodilatace |
| **Angina pectoris** | Beta adrenergni | Metoprolol | Snizeni naroky myokardu |

### Gastrointestinalni system

| Indikace | Antagonizovany receptor | Lecivo | Mechanismus |
|----------|-------------------------|--------|-------------|
| **Pepticky vred** | H2 histaminovy | Ranitidin | Snizeni kyseliny |
| **Nauzea, zvraceni** | 5-HT3 | Ondansetron | Blokada emeticke signalizace |
| **Prujmy** | mu-opioidni | Loperamid | Snizeni motility |

---

## Priklady s psychoaktivnimi latkami

### Serotoninove antagoniste (5-HT)

| Latka | Selektivita | Pouziti | Poznamka |
|-------|-------------|---------|----------|
| **Ketanserin** | 5-HT2A > 5-HT2C | Vyzkum, hypertenze | Standardni antagonista |
| **M100907 (Volinanserin)** | 5-HT2A >> ostatni | Vyzkum | Vysoka selektivita |
| **Ritanserin** | 5-HT2A/2C | Vyzkum | Blokuje ucinek psychedelik |
| **Pimavanserin** | 5-HT2A (inverzni ag.) | Parkinsonova psychoza | FDA schvaleny |
| **Cyproheptadin** | 5-HT2 + H1 | Serotininovy syndrom | Siroka aktivita |

#### Interakce s psychedeliky

```mermaid
flowchart TD
    node_BLOKADAPSYCHEDELICKE["BLOKADA PSYCHEDELICKEHO UCINKU"]
    node_PsychedelikumLSDPsil["Psychedelikum LSD, Psilocin"]
    node_5HT2ARECEPTOR["5-HT2A RECEPTOR"]
    node_ORTHOSTERICKEMISTO["ORTHOSTERICKE MISTO"]
    node_KetanserinVysokaafin["Ketanserin ○○     Vysoka afinita"]
    node_blokada["blokada"]
    node_PsilocinXNemzesenava["Psilocin ○X             Nemůze se navazat"]
    node_ytlacen["ytlacen"]
    node_Klinickyvyznam["Klinicky vyznam:"]

    node_BLOKADAPSYCHEDELICKE --> node_PsychedelikumLSDPsil
    node_PsychedelikumLSDPsil --> node_5HT2ARECEPTOR
    node_5HT2ARECEPTOR --> node_ORTHOSTERICKEMISTO
    node_ORTHOSTERICKEMISTO --> node_KetanserinVysokaafin
    node_KetanserinVysokaafin --> node_blokada
    node_blokada --> node_PsilocinXNemzesenava
    node_PsilocinXNemzesenava --> node_ytlacen
    node_ytlacen --> node_Klinickyvyznam

    click node_PsychedelikumLSDPsil "/alkaloids/lsd/" "Psychedelikum LSD, Psilocin"
    click node_5HT2ARECEPTOR "/glossary/receptor/" "5-HT2A RECEPTOR"
    click node_PsilocinXNemzesenava "/alkaloids/psilocin/" "Psilocin ○X             Nemůze se navazat"
```

<details>
<summary>ASCII verze diagramu</summary>

```
BLOKADA PSYCHEDELICKEHO UCINKU

Psychedelikum (LSD, Psilocin)
              │
              ▼
        ┌─────────────────────────────────┐
        │      5-HT2A RECEPTOR            │
        │                                 │
        │  ┌───────────────────────────┐ │
        │  │   ORTHOSTERICKE MISTO    │ │
        │  │                           │ │
        │  │  Ketanserin ○─────────○  │ │ ← Vysoka afinita
        │  │              (blokada)    │ │
        │  │                           │ │
        │  │  Psilocin ○───X          │ │ ← Nemůze se navazat
        │  │           (vytlacen)      │ │
        │  └───────────────────────────┘ │
        └─────────────────────────────────┘

Klinicky vyznam:
- Ketanserin predem podany blokuje halucinace
- "Trip killer" v klinickem vyzkumu
- Zachranna terapie pri tezkem "bad tripu"
```

</details>

### Opioidni antagoniste

| Latka | Selektivita | Pouziti | Farmakokineticka |
|-------|-------------|---------|------------------|
| **Naloxon** | mu >> kappa, delta | Predavkovani (akutni) | T1/2 = 30-90 min, i.v. |
| **Naltrexon** | mu > kappa, delta | Udrzovaci lecba | T1/2 = 4 h, p.o. |
| **Nalmefén** | mu > kappa, delta | Predavkovani, alkohol | T1/2 = 10-13 h |
| **Methylnaltrexon** | Periferní mu | Opioidni zapca | Neprostupuje BBB |

```mermaid
flowchart TD
    node_NALOXONMECHANISMUSZA["NALOXON - MECHANISMUS ZACHRANY"]
    node_PredavkovaniopioidyP["Predavkovani opioidy:             Po podani naloxonu:"]
    node_MorfinHeroinNaloxonv["Morfin/Heroin                     Naloxon vysoka afinita"]
    node_73170e4a["▼                                 ▼"]
    node_muOPIOIDNImuOPIOIDNI["mu-OPIOIDNI                    mu-OPIOIDNI"]
    node_RECEPTORRECEPTOR["RECEPTOR                       RECEPTOR"]
    node_Naloxonvytlacuje["●                              ○           Naloxon vytlacuje"]
    node_aktivovanblokovanopi["aktivovan                     blokovan      opioid"]
    node_RespiracnidepreseOBN["Respiracni deprese              OBNOVENI DYCHANI"]
    node_Miozasedacebehem12mi["Mioza, sedace                   behem 1-2 minut"]
    node_VAROVANIMoznaprecipi["VAROVANI: Mozna precipitace abstinenčniho syndromu"]

    node_NALOXONMECHANISMUSZA --> node_PredavkovaniopioidyP
    node_PredavkovaniopioidyP --> node_MorfinHeroinNaloxonv
    node_MorfinHeroinNaloxonv --> node_73170e4a
    node_73170e4a --> node_muOPIOIDNImuOPIOIDNI
    node_muOPIOIDNImuOPIOIDNI --> node_RECEPTORRECEPTOR
    node_RECEPTORRECEPTOR --> node_Naloxonvytlacuje
    node_Naloxonvytlacuje --> node_aktivovanblokovanopi
    node_aktivovanblokovanopi --> node_RespiracnidepreseOBN
    node_RespiracnidepreseOBN --> node_Miozasedacebehem12mi
    node_Miozasedacebehem12mi --> node_VAROVANIMoznaprecipi

    click node_RECEPTORRECEPTOR "/glossary/receptor/" "RECEPTOR                       RECEPTOR"
```

<details>
<summary>ASCII verze diagramu</summary>

```
NALOXON - MECHANISMUS ZACHRANY

Predavkovani opioidy:             Po podani naloxonu:

Morfin/Heroin                     Naloxon (vysoka afinita)
      │                                 │
      ▼                                 ▼
┌──────────────┐                 ┌──────────────┐
│ mu-OPIOIDNI  │                 │ mu-OPIOIDNI  │
│  RECEPTOR    │                 │  RECEPTOR    │
│    ●         │                 │    ○         │ ← Naloxon vytlacuje
│ (aktivovan)  │                 │  (blokovan)  │    opioid
└──────────────┘                 └──────────────┘
      │                                 │
      ▼                                 ▼
Respiracni deprese              OBNOVENI DYCHANI
Mioza, sedace                   (behem 1-2 minut)

VAROVANI: Mozna precipitace abstinenčniho syndromu
```

</details>

### GABAergni antagoniste

| Latka | Receptor/Misto | Pouziti | Typ |
|-------|----------------|---------|-----|
| **Flumazenil** | GABA-A (BZ site) | Predavkovani BZ | Kompetitivni |
| **Bikukullin** | GABA-A (GABA site) | Vyzkum | Kompetitivni |
| **Pikrotoxin** | GABA-A (kanal) | Vyzkum (konvulzant) | Kanalovy blokator |
| **CGP 35348** | GABA-B | Vyzkum | Kompetitivni |

### NMDA antagoniste (kanalove blokatory)

| Latka | Ki (nM) | Klinicke pouziti | Charakteristika |
|-------|---------|------------------|-----------------|
| **Ketamin** | 500-1000 | Anestezie, deprese | Use-dependent |
| **Memantín** | 500-1000 | Alzheimerova choroba | Nizka afinita, dobre tolerovany |
| **MK-801 (Dizocilpin)** | 2-3 | Pouze vyzkum | Vysoka afinita, neurotoxicky |
| **PCP** | 50-100 | (Zneuzivana) | Disociativni anestetikum |
| **Dextrometorfan** | 1000+ | Antitusivum | Nizka afinita |

```mermaid
flowchart TD
    node_NMDAANTAGONISTESPEKT["NMDA ANTAGONISTE - SPEKTRUM AFINITY"]
    node_AfinitaKi["Afinita Ki"]
    node_nizkavysoka["nizka  vysoka"]
    node_MemantnKetaminPCPMK8["Memantín    Ketamin    PCP    MK-801"]
    node_500100050010005023["500-1000  500-1000 50   2-3"]
    node_eb7c99e1["▼           ▼        ▼       ▼"]
    node_AlzheimerAnestezieZn["Alzheimer  Anestezie  Zneuz.  Pouze"]
    node_DepreseDepresevyzkum["Deprese    Deprese            vyzkum"]
    node_Nizsiafinitabezpecne["Nizsi afinita = bezpecnejsi mene neurotoxicity"]
    node_Vyssiafinitasilnejsi["Vyssi afinita = silnejsi efekt ale vice NÚ"]

    node_NMDAANTAGONISTESPEKT --> node_AfinitaKi
    node_AfinitaKi --> node_nizkavysoka
    node_nizkavysoka --> node_MemantnKetaminPCPMK8
    node_MemantnKetaminPCPMK8 --> node_500100050010005023
    node_500100050010005023 --> node_eb7c99e1
    node_eb7c99e1 --> node_AlzheimerAnestezieZn
    node_AlzheimerAnestezieZn --> node_DepreseDepresevyzkum
    node_DepreseDepresevyzkum --> node_Nizsiafinitabezpecne
    node_Nizsiafinitabezpecne --> node_Vyssiafinitasilnejsi
```

<details>
<summary>ASCII verze diagramu</summary>

```
NMDA ANTAGONISTE - SPEKTRUM AFINITY

Afinita (Ki)
nizka ←──────────────────────────────────→ vysoka

Memantín    Ketamin    PCP    MK-801
(500-1000)  (500-1000) (50)   (2-3)
    │           │        │       │
    ▼           ▼        ▼       ▼
Alzheimer  Anestezie  Zneuz.  Pouze
Deprese    Deprese            vyzkum

Nizsi afinita = bezpecnejsi (mene neurotoxicity)
Vyssi afinita = silnejsi efekt ale vice NÚ
```

</details>

---

## Schild analýza

### Kvantifikace kompetitivniho antagonismu

```mermaid
flowchart TD
    node_SCHILDROVNICE["SCHILD ROVNICE"]
    node_DoseratioDREC50EC501["Dose ratio DR = EC50' / EC50 = 1 + B/KB"]
    node_Kde["Kde:"]
    node_SCHILDPLOT["SCHILD PLOT:"]
    node_logDR1["logDR-1"]
    node_3["3                     ╱"]
    node_2["2                 ╱"]
    node_1["1             ╱"]
    node_0logAntagonista["0 ● logAntagonista"]
    node_pA2["pA2"]
    node_pA2logKBafinitaantag["pA2 = -log KB = afinita antagonisty"]
    node_Smernice1procistekom["Smernice = 1 pro ciste kompetitivni antagonismus"]

    node_SCHILDROVNICE --> node_DoseratioDREC50EC501
    node_DoseratioDREC50EC501 --> node_Kde
    node_Kde --> node_SCHILDPLOT
    node_SCHILDPLOT --> node_logDR1
    node_logDR1 --> node_3
    node_3 --> node_2
    node_2 --> node_1
    node_1 --> node_0logAntagonista
    node_0logAntagonista --> node_pA2
    node_pA2 --> node_pA2logKBafinitaantag
    node_pA2logKBafinitaantag --> node_Smernice1procistekom
```

<details>
<summary>ASCII verze diagramu</summary>

```
SCHILD ROVNICE

Dose ratio (DR) = EC50' / EC50 = 1 + [B]/KB

Kde:
- DR = dose ratio (pomer davek)
- EC50' = EC50 v pritomnosti antagonisty
- EC50 = EC50 bez antagonisty
- [B] = koncentrace antagonisty
- KB = rovnovazna disociacni konstanta antagonisty

SCHILD PLOT:

log(DR-1)
    │
  3 ┤                    ╱
    │                  ╱
  2 ┤                ╱
    │              ╱
  1 ┤            ╱
    │          ╱
  0 ┤────────●───────────────→ log[Antagonista]
    │        │
    │      pA2
    │
pA2 = -log KB = afinita antagonisty

Smernice = 1 pro ciste kompetitivni antagonismus
```

</details>

### Interpretace pA2

| pA2 hodnota | Afinita | Priklad |
|-------------|---------|---------|
| > 9 | Extrémne vysoka | M100907 (5-HT2A) |
| 8-9 | Vysoka | Ketanserin (5-HT2A) |
| 7-8 | Stredni | Mnoho leciv |
| 6-7 | Nizka | Fyziologicke antagonisty |
| < 6 | Velmi nizka | Slabe interakce |

---

## Klinicke uvahy

### Terapeuticky index antagonistu

```mermaid
flowchart TD
    node_TERAPEUTICKYINDEX["TERAPEUTICKY INDEX"]
    node_TD50toxickadavka50["TD50 toxicka davka 50%"]
    node_TI["TI ="]
    node_ED50efektivnidavka50["ED50 efektivni davka 50%"]
    node_Priklady["Priklady:"]
    node_Cilemjemaximalizovat["Cilem je maximalizovat:"]

    node_TERAPEUTICKYINDEX --> node_TD50toxickadavka50
    node_TD50toxickadavka50 --> node_TI
    node_TI --> node_ED50efektivnidavka50
    node_ED50efektivnidavka50 --> node_Priklady
    node_Priklady --> node_Cilemjemaximalizovat
```

<details>
<summary>ASCII verze diagramu</summary>

```
TERAPEUTICKY INDEX

    TD50 (toxicka davka 50%)
TI = ─────────────────────────
    ED50 (efektivni davka 50%)

Priklady:
- Naloxon: TI > 100 (velmi bezpecny)
- Flumazenil: TI > 50 (bezpecny)
- Haloperidol: TI ~ 10-20 (potrebny monitoring)

Cilem je maximalizovat:
- Receptorovou obsazenost na cilovém receptoru
- Minimalizovat off-target ucinky
```

</details>

### Selektivita antagonistu

| Antagonista | Primarni cil | Sekundarni cile | Dusledek |
|-------------|--------------|-----------------|----------|
| **Haloperidol** | D2 | Alpha-1, 5-HT2A, H1 | EPS, sedace, hypotenze |
| **Risperidon** | D2, 5-HT2A | Alpha-1, H1 | Mene EPS, sedace |
| **Ketanserin** | 5-HT2A | Alpha-1, H1 | Hypotenze |
| **M100907** | 5-HT2A | (minimalni) | Vysoka selektivita |

### Rebound fenomén

```mermaid
flowchart TD
    node_REBOUNDPOVYSAZENIANT["REBOUND PO VYSAZENI ANTAGONISTY"]
    node_Dlouhodobablokadarec["Dlouhodoba blokada receptoru"]
    node_Upregulacereceptoruk["Up-regulace receptoru kompenzacni"]
    node_Nahlvysazeniantagoni["Nahlé vysazeni antagonisty"]
    node_ZVYSENYPOCETSENZITIV["ZVYSENY POCET + SENZITIVITA RECEPTORU"]
    node_NORMALNIHLADINAENDOG["NORMALNI HLADINA ENDOGENNIHO LIGANDU"]
    node_PRILISSILNASIGNALIZA["PRILIS SILNA SIGNALIZACE = REBOUND"]
    node_Priklady["Priklady:"]

    node_REBOUNDPOVYSAZENIANT --> node_Dlouhodobablokadarec
    node_Dlouhodobablokadarec --> node_Upregulacereceptoruk
    node_Upregulacereceptoruk --> node_Nahlvysazeniantagoni
    node_Nahlvysazeniantagoni --> node_ZVYSENYPOCETSENZITIV
    node_ZVYSENYPOCETSENZITIV --> node_NORMALNIHLADINAENDOG
    node_NORMALNIHLADINAENDOG --> node_PRILISSILNASIGNALIZA
    node_PRILISSILNASIGNALIZA --> node_Priklady

    click node_Dlouhodobablokadarec "/glossary/receptor/" "Dlouhodoba blokada receptoru"
    click node_Upregulacereceptoruk "/glossary/receptor/" "Up-regulace receptoru kompenzacni"
    click node_ZVYSENYPOCETSENZITIV "/glossary/receptor/" "ZVYSENY POCET + SENZITIVITA RECEPTORU"
```

<details>
<summary>ASCII verze diagramu</summary>

```
REBOUND PO VYSAZENI ANTAGONISTY

Dlouhodoba blokada receptoru
         │
         ▼
Up-regulace receptoru (kompenzacni)
         │
         ▼
Nahlé vysazeni antagonisty
         │
         ▼
┌─────────────────────────────────────────┐
│  ZVYSENY POCET + SENZITIVITA RECEPTORU  │
│                    +                     │
│  NORMALNI HLADINA ENDOGENNIHO LIGANDU   │
└─────────────────────────────────────────┘
         │
         ▼
PRILIS SILNA SIGNALIZACE = REBOUND

Priklady:
- Beta-blokatory: rebound hypertenze, tachykardie
- Benzodiazepiny (částečne antagoniste): úzkost, křeče
- Antipsychotika: supersenzitivní psychóza
```

</details>

---

## Vyzkumne aplikace

### Farmakologicke nastroje

| Antagonista | Receptor | Vyzkumne pouziti |
|-------------|----------|------------------|
| **Ketanserin** | 5-HT2A | Studium psychedelik |
| **SCH 23390** | D1 | Dopaminergni signalizace |
| **Raclopride** | D2 | PET imaging |
| **SR 141716** | CB1 | Endokanabinoidní system |
| **Naltrindole** | Delta-opioidní | Opioidni farmakologie |

### Radioligandy pro PET

```mermaid
flowchart TD
    node_PETIMAGINGSANTAGONIS["PET IMAGING S ANTAGONISTY"]
    node_Radioaktivniantagoni["Radioaktivni antagonista"]
    node_napr11Craclopride["napr. 11Craclopride"]
    node_D2RECEPTOR["D2 RECEPTOR"]
    node_DetekcepozitronuPET["Detekce pozitronu PET"]
    node_Kvantifikacereceptor["Kvantifikace receptorove"]
    node_dostupnostibindingpo["dostupnosti binding potential"]
    node_Prikladyradioligandu["Priklady radioligandu antagoniste:"]

    node_PETIMAGINGSANTAGONIS --> node_Radioaktivniantagoni
    node_Radioaktivniantagoni --> node_napr11Craclopride
    node_napr11Craclopride --> node_D2RECEPTOR
    node_D2RECEPTOR --> node_DetekcepozitronuPET
    node_DetekcepozitronuPET --> node_Kvantifikacereceptor
    node_Kvantifikacereceptor --> node_dostupnostibindingpo
    node_dostupnostibindingpo --> node_Prikladyradioligandu

    click node_D2RECEPTOR "/glossary/receptor/" "D2 RECEPTOR"
    click node_Kvantifikacereceptor "/glossary/receptor/" "Kvantifikace receptorove"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PET IMAGING S ANTAGONISTY

             Radioaktivni antagonista
                    (napr. [11C]raclopride)
                           │
                           ▼
                    ┌─────────────┐
                    │   D2 RECEPTOR│
                    │      ○       │
                    └──────┬──────┘
                           │
                           ▼
              Detekce pozitronu (PET)
                           │
                           ▼
         ┌─────────────────────────────────┐
         │  Kvantifikace receptorove       │
         │  dostupnosti (binding potential)│
         └─────────────────────────────────┘

Priklady radioligandu (antagoniste):
- [11C]Raclopride (D2)
- [18F]Altanserin (5-HT2A)
- [11C]Flumazenil (GABA-A BZ site)
- [11C]Carfentanil (mu-opioidni)
```

</details>

---

## Srovnani: Antagonista vs Agonista vs Modulátor

| Vlastnost | Agonista | Antagonista | Alosterický modulátor |
|-----------|----------|-------------|----------------------|
| **Vazebne misto** | Orthostericke | Orthostericke/alostericke | Alostericke |
| **Vnitrni aktivita** | Pozitivni | Nulova | Zadna (modifikuje) |
| **Samostatny efekt** | Ano | Ne (pouze blokuje) | Ne (potrebuje ligand) |
| **Efekt na agonisty** | - | Snizuje/blokuje | Zvysuje (PAM) / Snizuje (NAM) |
| **Priklad** | Psilocin, morfin | Ketanserin, naloxon | Diazepam, CDPPB |

---

## Reference

1. Kenakin, T. (2012). *Pharmacology in Drug Discovery and Development*. Academic Press.
2. Rang, H.P. et al. (2019). *Rang and Dale's Pharmacology*. Elsevier. 9th ed.
3. Christopoulos, A. & Kenakin, T. (2002). *G protein-coupled receptor allosterism and complexing*. Pharmacological Reviews.
4. Kobilka, B.K. (2011). *Structural insights into adrenergic receptor function and pharmacology*. Trends in Pharmacological Sciences.
5. Vollenweider, F.X. & Preller, K.H. (2020). *Psychedelic drugs: neurobiology and potential for treatment of psychiatric disorders*. Nature Reviews Neuroscience.
6. Stahl, S.M. (2021). *Stahl's Essential Psychopharmacology*. Cambridge University Press. 5th ed.

---

## Viz take

### Souvisejici pojmy v glosari

- [Receptor](@/glossary/receptor.md) - Molekularni cil antagonistu
- [GABA](@/glossary/gaba.md) - Neurotransmiter s klinicky vyznamnymi antagonisty
- [Fosfat](@/glossary/fosfat.md) - Signalni transdukce
- [Nukleotid](@/glossary/nukleotid.md) - Sekundarni messengery (cAMP)

### Specificke receptory

- [5-HT2A receptor](@/receptors/5-ht2a.md) - Primarni cil psychedelik, ketanserin antagonista
- [GABA-A receptor](@/receptors/gaba-a.md) - Flumazenil, bikukullin
- [NMDA receptor](@/receptors/nmda.md) - Ketamin, memantín (kanalove blokatory)

### Psychoaktivni latky

- [LSD](@/alkaloids/lsd.md) - Blokovatelny ketanserinem
- [Psilocybin](@/alkaloids/psilocybin.md) / [Psilocin](@/alkaloids/psilocin.md) - 5-HT2A agoniste

### Houby

- [Psilocybe houby](@/shrooms/psilocybes/_index.md) - Zdroj psilocybinu
- [Amanita muscaria](@/shrooms/amanita-muscaria.md) - Zdroj muscimolu

---

<- Zpet na [Glosar](@/glossary/_index.md)

---

*Posledni aktualizace: 2026-01-30*
