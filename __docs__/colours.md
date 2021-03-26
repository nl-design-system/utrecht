<!-- markdownlint-disable MD033 -->

# Kleuren huisstijl

Copyright (c) 2021 Gemeente Utrecht. Voor gebruik van de huisstijl is toestemming nodig.

---

De website gebruikt op hoofdlijnen de kleuren rood, geel, blauw, zwart, wit en grijs.

## Rood

Rood wordt gebruikt als basiskleur in het ontwerp. Het is de dominante huisstijlkleur van de website.

| Demo                                                                                   | Design Token naam | Hex code | CSS variable            | Gebruik                                                                                                                                                                      |
| -------------------------------------------------------------------------------------- | ----------------- | -------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-red-20)"></div> | Rood / donker     | #D94E51  | `var(--utrecht-red-20)` | Bij hover/focus state van rode links/knoppen verandert de kleur #CC0000 van knoppen en links in deze kleur. Gebruikt wit (#fff) als tekstkleur op rood. Ook voor tekstlinks. |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-red-30)"></div> | Rood / hover      |          | `var(--utrecht-red-30)` | Bij hover/focus state van rode links/knoppen verandert de kleur #CC0000 van knoppen en links in deze kleur. Gebruikt wit (#fff) als tekstkleur op rood. Ook voor tekstlinks. |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-red-40)"></div> | Rood / basis      | #CC0000  | `var(--utrecht-red-40)` | Footer, Menu, Zoek, Footer. Toptaak buttons op projectsites. Gebruikt wit (#fff) als tekstkleur op rood. Ook voor tekstlinks.                                                |

### Inzichten uit onderzoek

Uit onderzoek blijkt dat laaggeletterden afschrikken van de kleur rood. Deze dus niet gebruiken bij iets waar op geklikt kan worden. De tekst wordt niet gelezen, de laaggeletterde acteert op kleur.

## Blauw

Donkerblauw wordt gebruikt als basiskleur voor links en knoppen. Licht en ijsblauw wordt gebruikt voor blokken.

| Demo                                                                                    | Design Token naam   | Hex code | CSS variable             | Gebruik |
| --------------------------------------------------------------------------------------- | ------------------- | -------- | ------------------------ | ------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blue-20)"></div> | Blauw / donker      |          | `var(--utrecht-blue-20)` |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blue-30)"></div> | Blauw / basis       |          | `var(--utrecht-blue-30)` |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blue-40)"></div> | Blauw / licht       | #3669A5  | `var(--utrecht-blue-40)` |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blue-80)"></div> | Blauw / super licht |          | `var(--utrecht-blue-80)` |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blue-90)"></div> | Blauw / ultra licht |          | `var(--utrecht-blue-90)` |         |

## Geel

| Demo                                                                                      | Design Token naam | Hex code | CSS variable               | Gebruik                                                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------- | -------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-yellow-40)"></div> | Geel / donker     | #FFCC00  | `var(--utrecht-yellow-40)` | Huisstijlkleur geel Geel accent. Gebruikt zwart (#000) als tekstkleur op geel. Ook voor tekstlinks.                       |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-yellow-50)"></div> | Geel / basis      | #FFE44D  | `var(--utrecht-yellow-50)` | Signaalkleur om iets te benadrukken. Gebruikt zwart (#000) als tekstkleur op geel. Ook voor tekstlinks.                   |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-yellow-60)"></div> | Geel / basis      | #FFE44D  | `var(--utrecht-yellow-60)` | Signaalkleur voor `::selected`. Gebruikt zwart (#000) als tekstkleur op geel. Ook voor tekstlinks.                        |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-yellow-80)"></div> | Geel / licht      | FFEEBB   | `var(--utrecht-yellow-80)` | Content uitlichten (Spotlight). Gebruikt zwart als tekstkleur op geel. Gebruik voor tekstlinks het standaard donkerblauw. |

## Grijs

| Demo                                                                                    | Design Token naam | Hex code | CSS variable             | Gebruik                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------- | ----------------- | -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-grey-30)"></div> |                   |          | `var(--utrecht-grey-30)` |                                                                                                                                                                                                                                                 |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-grey-40)"></div> | Donkergrijs       | #727272  | `var(--utrecht-grey-40)` | Formulier input elementen. Gebruikt wit (#fff)als tekstkleur op dit donker grijs.                                                                                                                                                               |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-grey-80)"></div> | Lichtgrijs        | #E5E5E5  | `var(--utrecht-grey-80)` | Break out op ladingpagina’s, kruimelpad, en diverse content elementen (spotlight, tabel, accordeon). Gebruikt zwart (#000) als tekstkleur op dit grijs. Gebruik voor links het standaard donkerblauw (#2A5587).                                 |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-grey-90)"></div> | Zeer lichtgrijs   | #F2F2F2  | `var(--utrecht-grey-90)` | Basiskleur achtergrond kleur van de body, diverse elementen in contentpagina (scheidingslijn, subnav border, accordeon). Gebruikt zwart (#000) als tekstkleur op dit lichte grijs. Gebruik voor tekstlinks het standaard donkerblauw (#2A5587). |

## Zwart

| Demo                                                                                  | Design Token naam | Hex code | CSS variable           | Gebruik                                                                                                                              |
| ------------------------------------------------------------------------------------- | ----------------- | -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-black)"></div> | Zwart             | #000000  | `var(--utrecht-black)` | Gebruik zwart als tekstkleur op de lichtere kleuren: Blauw: #99CAEF, #DBEAF6 Geel: #FFCC00, #FFE44D, #FFEEBB Grijs: #E5E5E5, #F2F2F2 |

## Wit

| Demo                                                                                  | Design Token naam | Hex code | CSS variable           | Gebruik                                          |
| ------------------------------------------------------------------------------------- | ----------------- | -------- | ---------------------- | ------------------------------------------------ |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-white)"></div> | Wit               | #FFFFFF  | `var(--utrecht-white)` | Gebruik wit als tekstkleur op de donkere kleuren |
