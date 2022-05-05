<!-- @license CC0-1.0 -->

# Button link: link die er uit ziet als button

Een link die er uitziet als een button, om gebruikers aan te sporen op de link te klikken en actie te gaan ondernemen.

## Toepassing

Een link button mag alleen gebruikt worden voor navigatie naar een pagina waar je een actie uitvoert, de link klikken mag niet gelijk een _side-effect_ hebben.

Wel:

- Log in met eIDAS (navigeert naar formulier voor inloggen)
- Maak een afspraak (navigeert naar formulier)

Niet:

- Uitloggen (logt direct uit)
- Stop de parkeermeter (je mag hierna niet meer parkeren)

## Activeren

Een link button moet op dezelfde manier geactiveerd kunnen worden als een button:

- Klikken
- `Enter` op toetsenbord
- `Space` op toetsenbord

Een HTML `a` element wordt standaard niet geactiveerd met `Space`, daarvoor is ondersteunende JavaScript nodig.

## States

- hover
- focus
- focus-visible

De link button heeft geen disabled state, net als de normale link: die heeft ook geen disabled state.

De link button heeft geen `visited` state zoals normale links, maar ziet er altijd hetzelfde uit zoals een normale button.
