+++
title = "L-Tryptofan"
description = "Esenciální aminokyselina - prekurzor serotoninu a melatoninu s klíčovou rolí v neurochemii"
weight = 1

[taxonomies]
categories = ["aminokyseliny", "prekurzory", "biochemie"]
tags = ["tryptofan", "serotonin", "melatonin", "5-HTP", "esencialni", "biosynteza"]
+++

# L-Tryptofan - Esenciální aminokyselina

**L-Tryptofan** (Trp, W) je jedna z devíti **esenciálních aminokyselin**, která musí být přijímána potravou, protoze lidský organismus ji nedokáže syntetizovat. Je prekurzorem klíčových neuroaktivních molekul: **[serotoninu](@/glossary/serotonin.md)** (5-HT), **melatoninu**, a **kynureninů**. Hraje zásadní roli v neurochemii psychedelik, protože biosyntéza [psilocybinu](@/alkaloids/psilocybin.md), [DMT](@/alkaloids/dmt.md) a dalších tryptaminových alkaloidů vychází z tryptofanu.

---

## Chemická struktura

### Základní parametry

| Vlastnost | Hodnota |
|-----------|---------|
| **Chemický název** | (2S)-2-amino-3-(1H-indol-3-yl)propanová kyselina |
| **Zkratky** | Trp, W |
| **Molekulární vzorec** | C11H12N2O2 |
| **Molekulární hmotnost** | 204,23 g/mol |
| **CAS číslo** | 73-22-3 |
| **IUPAC** | (S)-2-amino-3-(1H-indol-3-yl)propanoic acid |
| **SMILES** | C1=CC=C2C(=C1)C(=CN2)C[C@@H](C(=O)O)N |
| **PubChem CID** | 6305 |
| **Chiralita** | L-enantiomer (biologicky aktivní) |

### Strukturní klasifikace

| Kategorie | Zařazení |
|-----------|----------|
| **Třída** | Alfa-aminokyseliny |
| **Typ** | Esenciální (nelze syntetizovat) |
| **Postranní řetězec** | Aromatická (indolová) |
| **Polarita** | Nepolární (hydrofobní) |
| **Kodon** | UGG (jediný) |

### Strukturní diagram

```
                    COOH
                     |
              H2N---C---H
                     |
                    CH2
                     |
               [INDOLOVÝ KRUH]
               /            \
          [Benzen]      [Pyrol]
              \            /
               C=========C
                    |
                    N
                    |
                    H

Indolový kruh = základ všech tryptaminů
- Serotonin
- Melatonin
- DMT
- Psilocybin/Psilocin
- LSD (ergoliny)
```

### Srovnání s jinými aromatickými aminokyselinami

| Aminokyselina | Postranní řetězec | Prekurzor pro |
|---------------|-------------------|---------------|
| **Tryptofan** | Indol | Serotonin, melatonin, tryptaminy |
| **Fenylalanin** | Fenyl | Tyrosin, dopamin, noradrenalin |
| **Tyrosin** | 4-hydroxyfenyl | Dopamin, noradrenalin, adrenalin |
| **Histidin** | Imidazol | Histamin |

---

## Fyzikálně-chemické vlastnosti

| Vlastnost | Hodnota |
|-----------|---------|
| **Teplota tání** | 289-290°C (rozklad) |
| **Barva** | Bílá krystalická |
| **Rozpustnost ve vodě** | 11,4 g/L (25°C) |
| **pKa (COOH)** | 2,38 |
| **pKa (NH3+)** | 9,39 |
| **Izoelektrický bod** | 5,89 |
| **UV absorpce** | 280 nm (indolový kruh) |
| **Fluorescence** | Ex 280 nm, Em 348 nm |

### Optická aktivita

| Parametr | Hodnota |
|----------|---------|
| **Specifická rotace [α]D** | -31,5° (c=1, H2O) |
| **Biologicky aktivní** | L-forma (S-konfigurace) |
| **D-forma** | Neaktivní pro syntézu proteinů |

---

## Zdroje v potravě

### Obsah v potravinách

| Potravina | Tryptofan (mg/100g) | Poznámka |
|-----------|---------------------|----------|
| **Sýry (tvrdé)** | 400-600 | Parmezán nejvíce |
| **Maso (drůbeží)** | 250-350 | Krůtí, kuřecí |
| **Ryby (losos)** | 250-300 | |
| **Vejce** | 150-200 | Celé vejce |
| **Ořechy** | 150-250 | Vlašské, mandle |
| **Semena** | 300-400 | Dýňová, sezamová |
| **Luštěniny** | 150-250 | Sója, čočka |
| **Tofu** | 200-250 | |
| **Banány** | 15-20 | Nízké |
| **Čokoláda (tmavá)** | 80-150 | |

### Doporučený denní příjem

| Populace | RDA (mg/kg/den) | Příklad (70 kg) |
|----------|-----------------|-----------------|
| **Dospělí** | 4 mg/kg | ~280 mg/den |
| **Těhotné** | 5 mg/kg | ~350 mg/den |
| **Kojící** | 7 mg/kg | ~490 mg/den |
| **Děti** | 4-7 mg/kg | Variabilní |

### "Turkey myth" - krůtí a ospalost

```mermaid
flowchart TD
    node_MTUSKrtmasozpsobujeo["MÝTUS: Krůtí maso způsobuje ospalost kvůli tryptofanu"]
    node_REALITA["REALITA:"]
    node_MECHANISMUSpokudbypl["MECHANISMUS pokud by platil:"]
    node_TrppechodHEB5HTPSero["Trp  přechod HEB  5-HTP  Serotonin  Melatonin"]
    node_OSPALOST["OSPALOST"]
    node_ALETrpsoutsostatnmia["ALE: Trp soutěží s ostatními aminokyselinami"]
    node_otransportpesHEBLNAA["o transport přes HEB LNAA transporter"]

    node_MTUSKrtmasozpsobujeo --> node_REALITA
    node_REALITA --> node_MECHANISMUSpokudbypl
    node_MECHANISMUSpokudbypl --> node_TrppechodHEB5HTPSero
    node_TrppechodHEB5HTPSero --> node_OSPALOST
    node_OSPALOST --> node_ALETrpsoutsostatnmia
    node_ALETrpsoutsostatnmia --> node_otransportpesHEBLNAA

    click node_TrppechodHEB5HTPSero "/glossary/serotonin/" "Trp  přechod HEB  5-HTP  Serotonin  Melatonin"
```

<details>
<summary>ASCII verze diagramu</summary>

```
MÝTUS: Krůtí maso způsobuje ospalost kvůli tryptofanu

REALITA:
- Krůtí obsahuje ~250 mg Trp/100g
- Ostatní maso má PODOBNÉ množství
- Ospalost po jídle = postprandiální somnolence
  - Velké porce
  - Vysoký obsah sacharidů
  - Alkohol
  - Relaxační atmosféra

MECHANISMUS (pokud by platil):
Trp → [přechod HEB] → 5-HTP → Serotonin → Melatonin
                                            ↓
                                         OSPALOST

ALE: Trp soutěží s ostatními aminokyselinami
     o transport přes HEB (LNAA transporter)
```

</details>

---

## Metabolismus tryptofanu

### Tři hlavní metabolické dráhy

```mermaid
flowchart TD
    node_LTRYPTOFAN["L-TRYPTOFAN"]
    node_9e7f046a["+-----------------+------------------+"]
    node_SEROTONINOVKYNURENIN["SEROTONINOVÁ       KYNURENINOVÁ        INDOLOVÁ"]
    node_DRHADRHADRHA["DRÁHA              DRÁHA             DRÁHA"]
    node_5951["5%               95%             &lt;1%"]
    node_SerotoninKynureninyI["Serotonin        Kynureniny         Indol-3-acetát"]
    node_bakteriln["bakteriální"]
    node_Melatonin["Melatonin"]
    node_56642846["+-----------------+"]
    node_KynurenovkQuinolinov["Kynurenová k.      Quinolinová k."]
    node_neuroprotektivnneuro["neuroprotektivní  neurotoxická"]

    node_LTRYPTOFAN --> node_9e7f046a
    node_9e7f046a --> node_SEROTONINOVKYNURENIN
    node_SEROTONINOVKYNURENIN --> node_DRHADRHADRHA
    node_DRHADRHADRHA --> node_5951
    node_5951 --> node_SerotoninKynureninyI
    node_SerotoninKynureninyI --> node_bakteriln
    node_bakteriln --> node_Melatonin
    node_Melatonin --> node_56642846
    node_56642846 --> node_KynurenovkQuinolinov
    node_KynurenovkQuinolinov --> node_neuroprotektivnneuro

    click node_SEROTONINOVKYNURENIN "/glossary/serotonin/" "SEROTONINOVÁ       KYNURENINOVÁ        INDOLOVÁ"
    click node_SerotoninKynureninyI "/glossary/serotonin/" "Serotonin        Kynureniny         Indol-3-acetát"
    click node_Melatonin "/molecules/melatonin/" "Melatonin"
```

<details>
<summary>ASCII verze diagramu</summary>

```
                        L-TRYPTOFAN
                             |
           +-----------------+------------------+
           |                 |                  |
           v                 v                  v
    SEROTONINOVÁ       KYNURENINOVÁ        INDOLOVÁ
        DRÁHA              DRÁHA             DRÁHA
        (5%)               (95%)             (<1%)
           |                 |                  |
           v                 v                  v
      Serotonin        Kynureniny         Indol-3-acetát
           |                 |             (bakteriální)
           v                 |
      Melatonin              |
                             |
           +-----------------+
           |                 |
           v                 v
    Kynurenová k.      Quinolinová k.
    (neuroprotektivní)  (neurotoxická)
```

</details>

### Serotoninová dráha (detailně)

```mermaid
flowchart TD
    node_LTRYPTOFAN["L-TRYPTOFAN"]
    node_TPHtryptofanhydroxyl["TPH - tryptofan hydroxylaza"]
    node_KofaktoryO2BH4tetrah["Kofaktory: O2, BH4 tetrahydrobiopterin, Fe2+"]
    node_LIMITUJCKROK["LIMITUJÍCÍ KROK!"]
    node_5HYDROXYTRYPTOFAN5HT["5-HYDROXYTRYPTOFAN 5-HTP"]
    node_AADCaromatickLaminok["AADC - aromatická L-aminokyselina dekarboxyláza"]
    node_KofaktorPLPvitaminB6["Kofaktor: PLP vitamin B6"]
    node_SEROTONIN5HT["SEROTONIN 5-HT"]
    node_MAOA5HIAAexkrece["+---&gt; MAO-A ---&gt; 5-HIAA exkrece"]
    node_AANATaralkylaminNace["AANAT - aralkylamin N-acetyltransferáza"]
    node_epifzenonregulace["epifýze, noční regulace"]
    node_NACETYLSEROTONIN["N-ACETYLSEROTONIN"]
    node_HIOMThydroxyindolOme["HIOMT - hydroxyindol-O-methyltransferáza"]
    node_MELATONIN["MELATONIN"]

    node_LTRYPTOFAN --> node_TPHtryptofanhydroxyl
    node_TPHtryptofanhydroxyl --> node_KofaktoryO2BH4tetrah
    node_KofaktoryO2BH4tetrah --> node_LIMITUJCKROK
    node_LIMITUJCKROK --> node_5HYDROXYTRYPTOFAN5HT
    node_5HYDROXYTRYPTOFAN5HT --> node_AADCaromatickLaminok
    node_AADCaromatickLaminok --> node_KofaktorPLPvitaminB6
    node_KofaktorPLPvitaminB6 --> node_SEROTONIN5HT
    node_SEROTONIN5HT --> node_MAOA5HIAAexkrece
    node_MAOA5HIAAexkrece --> node_AANATaralkylaminNace
    node_AANATaralkylaminNace --> node_epifzenonregulace
    node_epifzenonregulace --> node_NACETYLSEROTONIN
    node_NACETYLSEROTONIN --> node_HIOMThydroxyindolOme
    node_HIOMThydroxyindolOme --> node_MELATONIN

    click node_5HYDROXYTRYPTOFAN5HT "/supplements/5-htp/" "5-HYDROXYTRYPTOFAN 5-HTP"
    click node_SEROTONIN5HT "/glossary/serotonin/" "SEROTONIN 5-HT"
    click node_NACETYLSEROTONIN "/glossary/serotonin/" "N-ACETYLSEROTONIN"
    click node_MELATONIN "/molecules/melatonin/" "MELATONIN"
```

<details>
<summary>ASCII verze diagramu</summary>

```
L-TRYPTOFAN
     |
     | [TPH - tryptofan hydroxylaza]
     | Kofaktory: O2, BH4 (tetrahydrobiopterin), Fe2+
     | LIMITUJÍCÍ KROK!
     |
     v
5-HYDROXYTRYPTOFAN (5-HTP)
     |
     | [AADC - aromatická L-aminokyselina dekarboxyláza]
     | Kofaktor: PLP (vitamin B6)
     |
     v
SEROTONIN (5-HT)
     |
     +---> [MAO-A] ---> 5-HIAA (exkrece)
     |
     | [AANAT - aralkylamin N-acetyltransferáza]
     | (v epifýze, noční regulace)
     |
     v
N-ACETYLSEROTONIN
     |
     | [HIOMT - hydroxyindol-O-methyltransferáza]
     |
     v
MELATONIN
```

</details>

### Kynureninová dráha (95% tryptofanu)

```mermaid
flowchart TD
    node_LTRYPTOFAN["L-TRYPTOFAN"]
    node_IDOTDO["IDO/TDO"]
    node_IDOindolamin23dioxyg["IDO = indolamin-2,3-dioxygenáza zánět, imunita"]
    node_TDOtryptofan23dioxyg["TDO = tryptofan-2,3-dioxygenáza játra, kortizol"]
    node_NFORMYLKYNURENIN["N-FORMYLKYNURENIN"]
    node_Formamidza["Formamidáza"]
    node_KYNURENIN["KYNURENIN"]
    node_e0a54b3b["+---------------------+"]
    node_KATKMO["KAT               | KMO"]
    node_KYNURENOVKYSELINA3HY["KYNURENOVÁ KYSELINA    3-HYDROXYKYNURENIN"]
    node_KYNA["KYNA"]
    node_QUINOLINOVKYSELINA["QUINOLINOVÁ KYSELINA"]
    node_QUIN["QUIN"]
    node_NAD["NAD+"]

    node_LTRYPTOFAN --> node_IDOTDO
    node_IDOTDO --> node_IDOindolamin23dioxyg
    node_IDOindolamin23dioxyg --> node_TDOtryptofan23dioxyg
    node_TDOtryptofan23dioxyg --> node_NFORMYLKYNURENIN
    node_NFORMYLKYNURENIN --> node_Formamidza
    node_Formamidza --> node_KYNURENIN
    node_KYNURENIN --> node_e0a54b3b
    node_e0a54b3b --> node_KATKMO
    node_KATKMO --> node_KYNURENOVKYSELINA3HY
    node_KYNURENOVKYSELINA3HY --> node_KYNA
    node_KYNA --> node_QUINOLINOVKYSELINA
    node_QUINOLINOVKYSELINA --> node_QUIN
    node_QUIN --> node_NAD
```

<details>
<summary>ASCII verze diagramu</summary>

```
L-TRYPTOFAN
     |
     | [IDO/TDO]
     | IDO = indolamin-2,3-dioxygenáza (zánět, imunita)
     | TDO = tryptofan-2,3-dioxygenáza (játra, kortizol)
     |
     v
N-FORMYLKYNURENIN
     |
     | [Formamidáza]
     |
     v
KYNURENIN
     |
     +---------------------+
     |                     |
     | [KAT]               | [KMO]
     v                     v
KYNURENOVÁ KYSELINA    3-HYDROXYKYNURENIN
(KYNA)                      |
- NMDA antagonista          | [KYNU]
- nACh antagonista          v
- neuroprotektivní     3-HYDROXYANTHRANILOVÁ K.
                            |
                            v
                     QUINOLINOVÁ KYSELINA
                     (QUIN)
                     - NMDA agonista
                     - NEUROTOXICKÁ
                            |
                            v
                        NAD+
```

</details>

### Klíčové enzymy

| Enzym | Gen | Funkce | Regulace |
|-------|-----|--------|----------|
| **TPH1** | TPH1 | 5-HTP syntéza (periferie) | Ca2+, cAMP |
| **TPH2** | TPH2 | 5-HTP syntéza (CNS) | Stres, cirkadián |
| **IDO1** | IDO1 | Kynurenin (imunitní) | IFN-γ (ZÁNĚT!) |
| **TDO** | TDO2 | Kynurenin (játra) | Kortizol |
| **AADC** | DDC | Dekarboxylace | Konstitutivní |

---

## Kynureniny a neuropsychiatrie

### Kynurenin/tryptofan poměr

```mermaid
flowchart TD
    node_ZNTADEPRESEKYNURENIN["ZÁNĚT A DEPRESE - KYNURENINOVÁ HYPOTÉZA"]
    node_ZNTinfekcechronickst["ZÁNĚT infekce, chronický stres, obezita"]
    node_Prozntlivcytokiny["Prozánětlivé cytokiny"]
    node_IFNTNFIL1IL6["IFN-γ, TNF-α, IL-1, IL-6"]
    node_IDO1aktivace["IDO1 aktivace"]
    node_KYNURENINOVDRHA["KYNURENINOVÁ DRÁHA"]
    node_SEROTONINOVDRHA["SEROTONINOVÁ DRÁHA"]
    node_81ebf11d["+---------+---------+"]
    node_QuinolinovkSerotonin["Quinolinová k.    Serotonin"]
    node_neurotoxickneurotran["neurotoxická     neurotransmiter"]
    node_EXCITOTOXICITADEPRES["EXCITOTOXICITA     DEPRESIVNÍ"]
    node_NMDAaktivaceSYMPTOMY["NMDA aktivace    SYMPTOMY"]
    node_NEURODEGENERACE["NEURODEGENERACE?"]

    node_ZNTADEPRESEKYNURENIN --> node_ZNTinfekcechronickst
    node_ZNTinfekcechronickst --> node_Prozntlivcytokiny
    node_Prozntlivcytokiny --> node_IFNTNFIL1IL6
    node_IFNTNFIL1IL6 --> node_IDO1aktivace
    node_IDO1aktivace --> node_KYNURENINOVDRHA
    node_KYNURENINOVDRHA --> node_SEROTONINOVDRHA
    node_SEROTONINOVDRHA --> node_81ebf11d
    node_81ebf11d --> node_QuinolinovkSerotonin
    node_QuinolinovkSerotonin --> node_neurotoxickneurotran
    node_neurotoxickneurotran --> node_EXCITOTOXICITADEPRES
    node_EXCITOTOXICITADEPRES --> node_NMDAaktivaceSYMPTOMY
    node_NMDAaktivaceSYMPTOMY --> node_NEURODEGENERACE

    click node_SEROTONINOVDRHA "/glossary/serotonin/" "SEROTONINOVÁ DRÁHA"
    click node_QuinolinovkSerotonin "/glossary/serotonin/" "Quinolinová k.    Serotonin"
```

<details>
<summary>ASCII verze diagramu</summary>

```
ZÁNĚT A DEPRESE - KYNURENINOVÁ HYPOTÉZA

ZÁNĚT (infekce, chronický stres, obezita)
              |
              v
       ↑ Prozánětlivé cytokiny
       (IFN-γ, TNF-α, IL-1, IL-6)
              |
              v
       ↑ IDO1 aktivace
              |
              v
    ↑ KYNURENINOVÁ DRÁHA
    ↓ SEROTONINOVÁ DRÁHA
              |
    +---------+---------+
    |                   |
    v                   v
↑ Quinolinová k.   ↓ Serotonin
(neurotoxická)     (neurotransmiter)
    |                   |
    v                   v
EXCITOTOXICITA     DEPRESIVNÍ
(NMDA aktivace)    SYMPTOMY
    |
    v
NEURODEGENERACE?
```

</details>

### Klinické asociace

| Stav | Kynureninový profil |
|------|---------------------|
| **Deprese** | ↑ Kyn/Trp, ↑ QUIN |
| **Schizofrenie** | ↑ KYNA |
| **Huntington** | ↑ QUIN |
| **Alzheimer** | ↑ QUIN, ↓ KYNA |
| **MS** | ↑ QUIN |
| **Sepse** | ↑↑ Kyn/Trp |

---

## Tryptofan a psychedelika

### Tryptofan jako prekurzor tryptaminů

```mermaid
flowchart TD
    node_LTRYPTOFAN["L-TRYPTOFAN"]
    node_VhoubchPsiD["V houbách: PsiD"]
    node_Vrostlinchrzndekarbo["V rostlinách: různé dekarboxylázy"]
    node_TRYPTAMIN["TRYPTAMIN"]
    node_DMTbiosyntza["+---&gt; DMT biosyntéza"]
    node_INMTNmethylace2x["- INMT N-methylace 2x"]
    node_DMT["DMT"]
    node_Psilocybinbiosyntza["+---&gt; Psilocybin biosyntéza"]
    node_Psilocybin["Psilocybin"]
    node_VIZBiosyntzapsilocyb["VIZ: Biosyntéza psilocybinu@/biosynthesis/psilocybin.md"]

    node_LTRYPTOFAN --> node_VhoubchPsiD
    node_VhoubchPsiD --> node_Vrostlinchrzndekarbo
    node_Vrostlinchrzndekarbo --> node_TRYPTAMIN
    node_TRYPTAMIN --> node_DMTbiosyntza
    node_DMTbiosyntza --> node_INMTNmethylace2x
    node_INMTNmethylace2x --> node_DMT
    node_DMT --> node_Psilocybinbiosyntza
    node_Psilocybinbiosyntza --> node_Psilocybin
    node_Psilocybin --> node_VIZBiosyntzapsilocyb

    click node_TRYPTAMIN "/glossary/tryptamin/" "TRYPTAMIN"
    click node_DMTbiosyntza "/alkaloids/dmt/" "+---> DMT biosyntéza"
    click node_DMT "/alkaloids/dmt/" "DMT"
    click node_Psilocybinbiosyntza "/alkaloids/psilocybin/" "+---> Psilocybin biosyntéza"
    click node_Psilocybin "/alkaloids/psilocybin/" "Psilocybin"
    click node_VIZBiosyntzapsilocyb "/alkaloids/psilocybin/" "VIZ: Biosyntéza psilocybinu@/biosynthesis/psilocybin.md"
```

<details>
<summary>ASCII verze diagramu</summary>

```
L-TRYPTOFAN
     |
     | [V houbách: PsiD]
     | [V rostlinách: různé dekarboxylázy]
     |
     v
TRYPTAMIN
     |
     +---> [DMT biosyntéza]
     |     - INMT (N-methylace 2x)
     |     → DMT
     |
     +---> [Psilocybin biosyntéza]
           - PsiH (4-hydroxylace)
           - PsiK (fosforylace)
           - PsiM (N-methylace)
           → Psilocybin

VIZ: [Biosyntéza psilocybinu](@/biosynthesis/psilocybin.md)
```

</details>

### Strukturní vztahy

| Sloučenina | Modifikace tryptaminu |
|------------|----------------------|
| **Tryptamin** | Dekarboxylovaný Trp |
| **Serotonin** | 5-hydroxy-tryptamin |
| **DMT** | N,N-dimethyltryptamin |
| **Psilocin** | 4-hydroxy-N,N-dimethyltryptamin |
| **Psilocybin** | 4-fosforyloxy-N,N-dimethyltryptamin |
| **5-MeO-DMT** | 5-methoxy-N,N-dimethyltryptamin |
| **Bufotenin** | 5-hydroxy-N,N-dimethyltryptamin |

### TRYPTOFAN DEPLETION TEST

Výzkumná metoda pro studium serotoninu:

```mermaid
flowchart TD
    node_AKUTNTRYPTOFANOVDEPL["AKUTNÍ TRYPTOFANOVÁ DEPLECE ATD"]
    node_PROTOKOL["PROTOKOL:"]
    node_Den0Baselinemen["Den 0: Baseline měření"]
    node_Den1Aminokyselinovnp["Den 1: Aminokyselinový nápoj BEZ tryptofanu"]
    node_obsahujeostatnLNAA["obsahuje ostatní LNAA"]
    node_KompeticenaLNAAtrans["Kompetice na LNAA transporteru"]
    node_Plazmaticktryptofan8["Plazmatický tryptofan -80-90%"]
    node_Mozkovsyntzaserotoni["Mozková syntéza serotoninu"]
    node_DOASNSYMPTOMY["DOČASNÉ SYMPTOMY"]
    node_uvulnerabilnchjedinc["u vulnerabilních jedinců:"]
    node_NVRATKNORMLU24hodin["NÁVRAT K NORMÁLU: 24 hodin"]

    node_AKUTNTRYPTOFANOVDEPL --> node_PROTOKOL
    node_PROTOKOL --> node_Den0Baselinemen
    node_Den0Baselinemen --> node_Den1Aminokyselinovnp
    node_Den1Aminokyselinovnp --> node_obsahujeostatnLNAA
    node_obsahujeostatnLNAA --> node_KompeticenaLNAAtrans
    node_KompeticenaLNAAtrans --> node_Plazmaticktryptofan8
    node_Plazmaticktryptofan8 --> node_Mozkovsyntzaserotoni
    node_Mozkovsyntzaserotoni --> node_DOASNSYMPTOMY
    node_DOASNSYMPTOMY --> node_uvulnerabilnchjedinc
    node_uvulnerabilnchjedinc --> node_NVRATKNORMLU24hodin

    click node_Mozkovsyntzaserotoni "/glossary/serotonin/" "Mozková syntéza serotoninu"
```

<details>
<summary>ASCII verze diagramu</summary>

```
AKUTNÍ TRYPTOFANOVÁ DEPLECE (ATD)

PROTOKOL:
Den 0: Baseline měření
Den 1: Aminokyselinový nápoj BEZ tryptofanu
       (obsahuje ostatní LNAA)
       |
       v
Kompetice na LNAA transporteru
       |
       v
↓↓ Plazmatický tryptofan (-80-90%)
       |
       v
↓↓ Mozková syntéza serotoninu
       |
       v
DOČASNÉ SYMPTOMY
(u vulnerabilních jedinců):
- Depresivní nálada
- ↓ Pozitivní afekt
- ↑ Impulzivita
- Kognitivní změny

NÁVRAT K NORMÁLU: 24 hodin
```

</details>

---

## Tryptofan jako doplněk stravy

### Suplementace

| Forma | Dávka | Indikace |
|-------|-------|----------|
| **L-Tryptofan** | 500-2000 mg/den | Spánek, nálada |
| **5-HTP** | 50-300 mg/den | Deprese, úzkost, spánek |

### 5-HTP vs L-Tryptofan

| Aspekt | L-Tryptofan | 5-HTP |
|--------|-------------|-------|
| **Vstup do mozku** | Kompetice s LNAA | Lepší prostup |
| **Enzym limitující** | TPH (pomalý) | AADC (rychlý) |
| **Periferní konverze** | Minimální | Možná (serotonin periferně) |
| **Kynureninová dráha** | Ano (95% odchází) | Ne |
| **Dávkování** | Vyšší (500-2000 mg) | Nižší (50-300 mg) |
| **Vedlejší účinky** | Méně | Více GIT (periferní 5-HT) |

### Bezpečnost a interakce

| Riziko | Mechanismus | Doporučení |
|--------|-------------|------------|
| **Serotonin syndrom** | S SSRI, MAOI | KONTRAINDIKOVÁNO |
| **EMS (eozinofilní myalgie)** | Kontaminace (historicky 1989) | Kvalitní zdroj |
| **GIT potíže (5-HTP)** | Periferní serotonin | Začít nízkou dávkou |

### EMS epidemie 1989

```
EOZINOFILNÍ MYALGIE SYNDROM (1989)

Příčina: Kontaminovaný L-tryptofan
         z jednoho japonského výrobce (Showa Denko)

Kontaminant: "Peak E" - derivát tryptofanu

Příznaky:
- Těžká myalgie
- Eosinofilie (↑↑↑)
- Periferní neuropatie
- Sklerodermie-like změny

Následky:
- >1500 případů
- ~37 úmrtí
- Zákaz prodeje L-Trp v USA (1990-2005)

Současnost:
- L-Trp opět povolen
- Kvalitní výrobci bez kontaminace
- Bezpečný při správném užívání
```

---

## Tryptofan v kontextu psychedelické terapie

### "Serotonergní toning"

Některé protokoly doporučují:

```
PŘED PSYCHEDELICKÝM SEZENÍM

Cíl: Optimalizace serotonergního systému

Doporučení:
1. Dostatečný příjem Trp v potravě
2. Vitamin B6 (pro AADC)
3. Vitamin D (modulace IDO)
4. Omega-3 (protizánětlivé)

BĚHEM:
- Potraviny bohaté na Trp mohou teoreticky
  podpořit obnovení 5-HT po akutní depleci

PO:
- "Integration diet" - vyváženášená strava
- Podpora neuroplasticity (BDNF)
```

### Tryptofan a "afterglow"

```mermaid
flowchart TD
    node_PSYCHEDELICKAFTERGLO["PSYCHEDELICKÝ AFTERGLOW - HYPOTÉZA"]
    node_Sezenpsilocybin["Sezení psilocybin"]
    node_5HT2Aaktivace["5-HT2A aktivace"]
    node_Akutnzmnyv5HTsignali["Akutní změny v 5-HT signalizaci"]
    node_5HTakutndeplece["+---&gt;  5-HT akutně, deplece?"]
    node_Kompenzanmechanismy["Kompenzační mechanismy"]
    node_5HTreceptorovsenziti["+---&gt;  5-HT receptorová senzitivita?"]
    node_BDNFneuroplasticita["+---&gt;  BDNF, neuroplasticita"]
    node_Rebalancovnst["+---&gt; Rebalancování sítí"]
    node_AFTERGLOWPERIODA["'AFTERGLOW' PERIODA"]
    node_Trvndnyatdny["Trvání: dny až týdny"]

    node_PSYCHEDELICKAFTERGLO --> node_Sezenpsilocybin
    node_Sezenpsilocybin --> node_5HT2Aaktivace
    node_5HT2Aaktivace --> node_Akutnzmnyv5HTsignali
    node_Akutnzmnyv5HTsignali --> node_5HTakutndeplece
    node_5HTakutndeplece --> node_Kompenzanmechanismy
    node_Kompenzanmechanismy --> node_5HTreceptorovsenziti
    node_5HTreceptorovsenziti --> node_BDNFneuroplasticita
    node_BDNFneuroplasticita --> node_Rebalancovnst
    node_Rebalancovnst --> node_AFTERGLOWPERIODA
    node_AFTERGLOWPERIODA --> node_Trvndnyatdny

    click node_Sezenpsilocybin "/alkaloids/psilocybin/" "Sezení psilocybin"
```

<details>
<summary>ASCII verze diagramu</summary>

```
PSYCHEDELICKÝ AFTERGLOW - HYPOTÉZA

Sezení (psilocybin)
        |
        v
5-HT2A aktivace
        |
        v
Akutní změny v 5-HT signalizaci
        |
        +---> ↓ 5-HT (akutně, deplece?)
        |
        v
Kompenzační mechanismy
        |
        +---> ↑ 5-HT receptorová senzitivita?
        +---> ↑ BDNF, neuroplasticita
        +---> Rebalancování sítí
        |
        v
"AFTERGLOW" PERIODA
- Zlepšená nálada
- Otevřenost
- Snížená úzkost
        |
        v
Trvání: dny až týdny
```

</details>

---

## Reference

### Základní biochemie

1. Palego, L. et al. (2016). *Tryptophan biochemistry: Structural, nutritional, metabolic, and medical aspects in humans*. Journal of Amino Acids.

2. Richard, D.M. et al. (2009). *L-Tryptophan: Basic metabolic functions, behavioral research and therapeutic indications*. International Journal of Tryptophan Research.

3. Badawy, A.A. (2017). *Kynurenine pathway of tryptophan metabolism: Regulatory and functional aspects*. International Journal of Tryptophan Research.

### Kynureniny a psychiatrie

4. Savitz, J. (2020). *The kynurenine pathway: A finger in every pie*. Molecular Psychiatry.

5. Schwarcz, R. et al. (2012). *Kynurenines in the mammalian brain: When physiology meets pathology*. Nature Reviews Neuroscience.

### Tryptofan a serotonin

6. Young, S.N. (2007). *How to increase serotonin in the human brain without drugs*. Journal of Psychiatry & Neuroscience.

7. Jenkins, T.A. et al. (2016). *Influence of tryptophan and serotonin on mood and cognition*. Nutrients.

---

## Křížové odkazy

### Souvisejici molekuly
- [Serotonin](@/glossary/serotonin.md) - Produkt serotoninové dráhy
- [Melatonin](@/molecules/melatonin.md) - Produkt z serotoninu
- [5-HTP](@/supplements/5-htp.md) - Mezistupeň biosyntézy

### Souvisejici alkaloidy
- [Psilocybin](@/alkaloids/psilocybin.md) - Derivát tryptofanu
- [DMT](@/alkaloids/dmt.md) - N,N-dimethyltryptamin
- [Tryptamin](@/glossary/tryptamin.md) - Dekarboxylovaný tryptofan

### Biosyntézy
- [Biosyntéza psilocybinu](@/biosynthesis/psilocybin.md) - Enzymatická dráha
- [Biosyntéza serotoninu](@/biosynthesis/serotonin.md) - Serotoninová dráha

### Receptory
- [5-HT2A receptor](@/receptors/5-ht2a.md) - Cíl tryptaminů
- [5-HT1A receptor](@/receptors/5-ht1a.md) - Anxiolytický receptor

---

<- Zpět na [Aminokyseliny](@/amino-acids/_index.md) | [Serotonin](@/glossary/serotonin.md) ->
