<!-- markdownlint-disable MD033 -->

# Kleuren huisstijl

Copyright (c) 2021 Gemeente Utrecht. Voor gebruik van de huisstijl is toestemming nodig.

---

De website gebruikt op hoofdlijnen de kleuren rood, geel, blauw, zwart, wit en grijs.

## Rood

Rood wordt gebruikt als basiskleur in het ontwerp. Het is de dominante huisstijlkleur van de website.

| Demo                                                                                        | Design Token naam | Hex code | CSS variable                 | Gebruik                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------- | ----------------- | -------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-rood-donker)"></div> | Rood / donker     | #D94E51  | `var(--utrecht-rood-donker)` | Bij hover/focus state van rode links/knoppen verandert de kleur #CC0000 van knoppen en links in deze kleur. Gebruikt wit (#fff) als tekstkleur op rood. Ook voor tekstlinks. |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-rood-basis)"></div>  | Rood / basis      | #CC0000  | `var(--utrecht-rood-basis)`  | Footer, Menu, Zoek, Footer. Toptaak buttons op projectsites. Gebruikt wit (#fff) als tekstkleur op rood. Ook voor tekstlinks.                                                |

### Inzichten uit onderzoek

Uit onderzoek blijkt dat laaggeletterden afschrikken van de kleur rood. Deze dus niet gebruiken bij iets waar op geklikt kan worden. De tekst wordt niet gelezen, de laaggeletterde acteert op kleur.

## Blauw

Donkerblauw wordt gebruikt als basiskleur voor links en knoppen. Licht en ijsblauw wordt gebruikt voor blokken.

| Demo                                                                                              | Design Token naam   | Hex code | CSS variable                       | Gebruik |
| ------------------------------------------------------------------------------------------------- | ------------------- | -------- | ---------------------------------- | ------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blauw-donker)"></div>      | Blauw / donker      |          | `var(--utrecht-blauw-donker)`      |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blauw-basis)"></div>       | Blauw / basis       |          | `var(--utrecht-blauw-basis)`       |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blauw-licht)"></div>       | Blauw / licht       | #3669A5  | `var(--utrecht-blauw-licht)`       |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blauw-super-licht)"></div> | Blauw / super licht |          | `var(--utrecht-blauw-super-licht)` |         |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-blauw-ultra-licht)"></div> | Blauw / ultra licht |          | `var(--utrecht-blauw-ultra-licht)` |         |

## Geel

| Demo                                                                                             | Design Token naam | Hex code | CSS variable                      | Gebruik                                                                                                                   |
| ------------------------------------------------------------------------------------------------ | ----------------- | -------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-geel-donker)"></div>      | Geel / donker     | #FFCC00  | `var(--utrecht-geel-donker)`      | Huisstijlkleur geel Geel accent. Gebruikt zwart (#000) als tekstkleur op geel. Ook voor tekstlinks.                       |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-geel-basis)"></div>       | Geel / basis      | #FFE44D  | `var(--utrecht-geel-basis)`       | Signaalkleur om iets te benadrukken. Gebruikt zwart (#000) als tekstkleur op geel. Ook voor tekstlinks.                   |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-geel-licht)"></div>       | Geel / basis      | #FFE44D  | `var(--utrecht-geel-licht)`       | Signaalkleur voor `::selected`. Gebruikt zwart (#000) als tekstkleur op geel. Ook voor tekstlinks.                        |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-geel-super-licht)"></div> | Geel / licht      | FFEEBB   | `var(--utrecht-geel-super-licht)` | Content uitlichten (Spotlight). Gebruikt zwart als tekstkleur op geel. Gebruik voor tekstlinks het standaard donkerblauw. |

## Grijs

| Demo                                                                                         | Design Token naam | Hex code | CSS variable                      | Gebruik                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | ----------------- | -------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-grijs-donker)"></div> | Donkergrijs       | #727272  | `var(--utrecht-grijs-donker)`     | Formulier input elementen. Gebruikt wit (#fff)als tekstkleur op dit donker grijs.                                                                                                                                                               |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-grijs-basis)"></div>  | Lichtgrijs        | #E5E5E5  | `var(--utrecht-grijs-basis)`      | Break out op ladingpagina’s, kruimelpad, en diverse content elementen (spotlight, tabel, accordeon). Gebruikt zwart (#000) als tekstkleur op dit grijs. Gebruik voor links het standaard donkerblauw (#2A5587).                                 |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-grijs-licht)"></div>  | Zeer lichtgrijs   | #F2F2F2  | `var(--utrecht-grijs-superlicht)` | Basiskleur achtergrond kleur van de body, diverse elementen in contentpagina (scheidingslijn, subnav border, accordeon). Gebruikt zwart (#000) als tekstkleur op dit lichte grijs. Gebruik voor tekstlinks het standaard donkerblauw (#2A5587). |

## Zwart

| Demo                                                                                  | Design Token naam | Hex code | CSS variable           | Gebruik                                                                                                                              |
| ------------------------------------------------------------------------------------- | ----------------- | -------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-zwart)"></div> | Zwart             | #000000  | `var(--utrecht-zwart)` | Gebruik zwart als tekstkleur op de lichtere kleuren: Blauw: #99CAEF, #DBEAF6 Geel: #FFCC00, #FFE44D, #FFEEBB Grijs: #E5E5E5, #F2F2F2 |

## Wit

| Demo                                                                                | Design Token naam | Hex code | CSS variable         | Gebruik                                          |
| ----------------------------------------------------------------------------------- | ----------------- | -------- | -------------------- | ------------------------------------------------ |
| <div class="utrecht-color-demo" style="background-color: var(--utrecht-wit)"></div> | Wit               | #FFFFFF  | `var(--utrecht-wit)` | Gebruik wit als tekstkleur op de donkere kleuren |
