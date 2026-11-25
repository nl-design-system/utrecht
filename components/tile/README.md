<!-- @license CC0-1.0 -->

# Tile: Een tegelnavigatie met kleur- en icoonopties

Een link die eruit ziet als een button, maar een icon en een kleurvariatie hebben.

## Toepassing

Een tile mag alleen gebruikt worden voor navigatie naar een pagina waar je een actie uitvoert, de link klikken mag niet gelijk een _side-effect_ hebben.

Wel:

- Het aangeven van verschillende categorieën
- Bouwprojecten / Groenprojecten / Verkeersprojecten

Niet:

- Als standaard navigatie van onderliggende pagina's

## Activeren

Een tile moet op dezelfde manier geactiveerd kunnen worden als een button:

- Klikken
- `Enter` op toetsenbord
- `Space` op toetsenbord

Een HTML `a` element wordt standaard niet geactiveerd met `Space`, daarvoor is ondersteunende JavaScript nodig. Gebruik `role="button"` alleen wanneer je door extra JavaScript ook met `Space` de link activeert.

## States

- hover
- active
- focus
- focus-visible

De tile heeft geen disabled state, net als de normale link: die heeft ook geen disabled state.

De tile heeft geen `visited` state zoals normale links, maar ziet er altijd hetzelfde uit zoals een normale button.
