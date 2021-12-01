<!-- @license CC0-1.0 -->

<!-- markdownlint-disable MD033 -->

# Kleuren huisstijl

Copyright (c) 2021 Gemeente Utrecht.

---

De website gebruikt op hoofdlijnen de kleuren rood, geel, blauw, zwart, wit en grijs.

## Rood

Rood wordt gebruikt als basiskleur in het ontwerp.

| Voorbeeld                                                                                    | Design Token naam        | Hsl code            | Hex code  | Gebruik                                                                                                                                                           |
| -------------------------------------------------------------------------------------------- | ------------------------ | ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-red-20)"></div> | `--utrecht-color-red-20` | `hsl(0, 100%, 20%)` | `#660000` | Donker rood. Gebruikt wit (`utrecht-color-white`) als tekstkleur op rood.                                                                                         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-red-30)"></div> | `--utrecht-color-red-30` | `hsl(0, 100%, 30%)` | `#990000` | Hover rood. Gebruikt wit (`utrecht-color-white`) als tekstkleur op rood. Wordt gebruikt voor de achtergrond van de social media buttons & error codes.            |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-red-40)"></div> | `--utrecht-color-red-40` | `hsl(0, 100%, 40%)` | `#CC0000` | Basis rood. Wordt gebruikt in de footer, in menu's, bij het zoeken. Toptaak buttons op projectsites. Gebruikt wit (`utrecht-color-white`) als tekstkleur op rood. |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-red-95)"></div> | `--utrecht-color-red-95` | `hsl(0, 100%, 95%)` | `#FFE5E5` | Licht rood. Voor gebruik voor rode achtergrond.                                                                                                                   |

### Inzichten uit onderzoek

Uit onderzoek blijkt dat laaggeletterden afschrikken van de kleur rood. Deze dus niet gebruiken bij iets waar op geklikt kan worden. De tekst wordt niet gelezen, de laaggeletterde acteert op kleur.

## Blauw

Donkerblauw wordt gebruikt als basiskleur voor links en knoppen. Licht en ijsblauw wordt gebruikt voor blokken.

| Voorbeeld                                                                                     | Design Token naam         | Hsl kleurencode      | Hex code  | Gebruik                                                                           |
| --------------------------------------------------------------------------------------------- | ------------------------- | -------------------- | --------- | --------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-blue-20)"></div> | `--utrecht-color-blue-20` | `hsl(211, 60%, 20%)` | `#143252` | Basis donkerblauw (OS focus).                                                     |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-blue-30)"></div> | `--utrecht-color-blue-30` | `hsl(211, 60%, 30%)` | `#1F4B7A` | Staat niet in figma. Wordt alleen gebruikt in form-toggle en link. Deze weghalen? |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-blue-35)"></div> | `--utrecht-color-blue-35` | `hsl(211, 60%, 35%)` | `#24578F` | Basis link en knoppen CTA                                                         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-blue-40)"></div> | `--utrecht-color-blue-40` | `hsl(211, 60%, 40%)` | `#2964A3` | Blauw variant bij hover/focus.                                                    |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-blue-80)"></div> | `--utrecht-color-blue-80` | `hsl(211, 60%, 80%)` | `#ADCBEB` | Licht blauw voor achtergrond.                                                     |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-blue-90)"></div> | `--utrecht-color-blue-90` | `hsl(211 60% 90%)`   | `#D6E5F5` | Ijsblauw variant voor achtergrond, spotlight en uitgelicht.                       |

## Geel

Geel wordt gebruikt als ondersteunende kleur.

### Logo

Het logo wordt gebruikt in combinatie met een geel accent (utrecht-color-yellow-50).

| Voorbeeld                                                                                       | Design Token naam           | Hsl kleurencode      | Hex code  | Gebruik                                                                                                                 |
| ----------------------------------------------------------------------------------------------- | --------------------------- | -------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-yellow-40)"></div> | `--utrecht-color-yellow-40` | `hsl(48, 100%, 40%)` | `#CCA300` | Donkere variant van basis geel.                                                                                         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-yellow-50)"></div> | `--utrecht-color-yellow-50` | `hsl(48, 100%, 50%)` | `#FFCC00` | Basis Gemeente Utrecht kleur geel. Gebruikt zwart (`--utrecht-color-black`) als tekstkleur op geel.                     |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-yellow-60)"></div> | `--utrecht-color-yellow-60` | `hsl(48, 100%, 60%)` | `#FFD633` | Deze kleur geel wordt gebruikt als achtergrond bij het selecteren.                                                      |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-yellow-80)"></div> | `--utrecht-color-yellow-80` | `hsl(48, 100% ,80%)` | `#FFEB99` | Achtergrond geel voor Spotlight en uitgelicht blokken. Gebruikt zwart (`--utrecht-color-black`) als tekstkleur op geel. |

## Grijs

| Voorbeeld                                                                                     | Design Token naam         | Hsl code          | Hex code  | Gebruik                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | ------------------------- | ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-grey-10)"></div> | `--utrecht-color-grey-10` | `hsl(0, 0%, 10%)` | `#1A1A1A` |                                                                                                                                                                                                                                                                                      |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-grey-15)"></div> | `--utrecht-color-grey-15` | `hsl(0, 0%, 15%)` | `#262626` |                                                                                                                                                                                                                                                                                      |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-grey-20)"></div> | `--utrecht-color-grey-20` | `hsl(0, 0%, 20%)` | `#333333` |                                                                                                                                                                                                                                                                                      |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-grey-30)"></div> | `--utrecht-color-grey-30` | `hsl(0, 0%, 30%)` | `#4D4D4D` |                                                                                                                                                                                                                                                                                      |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-grey-40)"></div> | `--utrecht-color-grey-40` | `hsl(0, 0%, 40%)` | `#666666` | Formulier input elementen. Gebruikt wit (`--utrecht-color-white`) als tekstkleur op dit donker grijs.                                                                                                                                                                                |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-grey-80)"></div> | `--utrecht-color-grey-80` | `hsl(0, 0%, 80%)` | `#CCCCCC` | Break out op ladingpagina’s, kruimelpad, en diverse content elementen (spotlight, tabel, accordeon). Gebruikt zwart (`--utrecht-color-black`) als tekstkleur op dit grijs. Gebruik voor links het standaard donkerblauw (`--utrecht-color-blue-35`).                                 |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-grey-90)"></div> | `--utrecht-color-grey-90` | `hsl(0, 0%, 90%)` | `#E6E6E6` | Basiskleur achtergrond kleur van de body, diverse elementen in contentpagina (scheidingslijn, subnav border, accordeon). Gebruikt zwart (`--utrecht-color-black`) als tekstkleur op dit lichte grijs. Gebruik voor tekstlinks het standaard donkerblauw (`--utrecht-color-blue-35`). |

## Groen

| Voorbeeld                                                                                      | Design Token naam          | Hsl kleurencode     | Hex code  | Gebruik                           |
| ---------------------------------------------------------------------------------------------- | -------------------------- | ------------------- | --------- | --------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-green-40)"></div> | `--utrecht-color-green-40` | `hsl(90, 30%, 40%)` | `#668547` | Donkere variant van basis groen   |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-green-50)"></div> | `--utrecht-color-green-50` | `hsl(90, 30%, 50%)` | `#80A659` | Basis Gemeente Utrecht groen      |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-green-80)"></div> | `--utrecht-color-green-80` | `hsl(90, 30%, 80%)` | `#CCDBBD` | Selecteer achtergrond kleur groen |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-green-90)"></div> | `--utrecht-color-green-90` | `hsl(90, 30%, 90%)` | `#E6EDDE` | Achtergrond groen voor badges     |

## Zwart

| Voorbeeld                                                                                   | Design Token naam       | Hsl code         | Hex code  | Gebruik                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | ----------------------- | ---------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-black)"></div> | `--utrecht-color-black` | `hsl(0, 0%, 0%)` | `#000000` | Gebruik zwart als tekstkleur op de lichtere kleuren: Blauw: `--utrecht-color-blue-80`, `--utrecht-color-blue-90` Geel: `--utrecht-color-yellow-80` Grijs: `--utrecht-color-grey-80`, `--utrecht-color-grey-90` |

## Wit

| Voorbeeld                                                                                   | Design Token naam       | Hsl code           | Hex code  | Gebruik                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------- | ----------------------- | ------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-color-white)"></div> | `--utrecht-color-white` | `hsl(0, 0%, 100%)` | `#FFFFFF` | Gebruik wit als tekstkleur op de donkere kleuren. Blauw: `--utrecht-color-blue-35`. Rood: `-utrecht-color-red-20`, `-utrecht-color-red-30`. Grijs: `--utrecht-color-grey-40`. |

## Design

[Figma - Utrecht Design System - Kleuren](https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=1%3A866)
