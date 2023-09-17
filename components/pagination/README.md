<!-- @license CC0-1.0 -->

# Pagination navigation

## Content

Gebruik duidelijke taal voor de volgende teksten, en maak een vertaling voor elke taal die je aanbied:

- Naam van de _navigation landmark_
- Link naar vorige pagina
- Link naar volgende pagina
- Link naar paginanummer _X_
- Zichtbare korte label voor link naar vorige pagina
- Zichtbare korte label voor link naar volgende pagina

Uit gebruikerstesten met schermvoorlezers blijkt dat linkteksten in _pagination navigation_ vaak onduidelijk zijn. "Ga naar pagina 1" is duidelijker dan alleen "Pagina 1". In de meeste gevallen gebruik je niet "Ga naar" in de linktekst, maar dit is een belangrijke uitzondering voor gebruiksvriendlijkheid. Bron: [Making Accessible Links: 15 Golden Rules For Developers — Gian Wild](https://www.sitepoint.com/15-rules-making-accessible-links/).

De link naar de huidige pagina hoeft niet een speciaal label te hebben als je `aria-current="page"` gebruikt, dan wordt "huidige pagina" al duidelijk gemaakt door hulpmiddelen.

## Design

- Maak alle links groot genoeg: 44×44 pixels of groter.
- Wanneer meerdere links niet op één regel passen, dan moeten ze verdeeld worden over meerdere regels. Zo kun je alles ook gebruiken wanneer de pagina 400% is ingezoomd.
- Alle links moeten voldoende contrast hebben.
- Maak duidelijk verschil tussen de verschillende soorten links, zorg dat de verschillen voldoende contrast hebben:
  - een link naar een andere pagina
  - een link naar de huidige pagina
  - een _disabled_ link
  - en een link die _focus_ heeft

De volgorde van de links is anders voor talen waar tekst van rechts naar links worden geschreven, zoals Arabisch, Farsi en Hebreeuws:

- De eerste link staat dan rechts, de laatste link staat links.
- De vorige knop staat rechts, de volgende knop staat links.
- De icoon voor de vorige knop wijst naar links, de icoon van de volgende knop wijst naar links.
- De cijfers zijn van niet 1 to 9, maar in het schrift van de taal.

## HTML

- Gebruik `aria-current="page"` op de link naar de huidige pagina.
- Plaats de pagination in een `navigation` landmark, bij voorkeur met het `<nav>` element.
- Geeft het landmark een toegankelijk label, bij voorkeur met `aria-labelledby`.
- De link naar huidige pagina hoeft niet in de tabvolgorde voor te komen, je kunt dat op verschillende manieren bereiken:
  - Gebruik `tabindex="-1"`.
  - Gebruik `role="link" aria-disabled="true"` en geen `href` attribuut.
- Gebruik `aria-labelledby` om de links een langer label te geven. Gebruik niet het `title` attribuut of het `aria-label` attribuut.
- Gebruik `role="group"` in plaats de _navigation landmark_ voor de pagination, wanneer je dezelfde pagination een tweede keer toont. Bijvoorbeeld wanneer je de pagination vóór en ná de zoekresultaten toont.

## Gebruikerstesten

We willen nog gebruikerstesten doen, ook specifiek met de volgende doelgroepen:

- gebruikers van een _screen reader_
- gebruikers van _voice commands_

Heb jij deze component getest? Laat het ons weten!

## Relevante WCAG regels

- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): alle tekst moet voldoende contrast hebben.
- [WCAG eis 1.4.10](https://www.w3.org/TR/WCAG21/#reflow): alles moet ook werken op een klein scherm en bij 400% zoom.
- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location)
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): links moeten 44×44 pixels of groter zijn.
