<!-- @license CC0-1.0 -->

# Search bar

De search bar bestaat uit een button element en een input element. Het is onderdeel van het header patroon.

## Search bar met combobox

Toetsenbord:

- `Escape`: sluit de combobox wanneer die _expanded_ is.
- `Enter`: selecteer de _active option_.
- `Arrow up`: selecteer de vorige _option_.
- `Arrow down`: selecteer de volgende _option_.
- `Arrow up`: selecteer de volgende _option_.

Toetsen zoals `Space`, `Home` en `End` moeten geen speciaal effect hebben, die zijn om te typen in de text input.

## Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): Gebruik `role="search"` voor de [_search_ landmark role](https://www.w3.org/TR/wai-aria-1.2/#search). Zie ook: [WCAG Technique: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): alle labels moeten duidelijk zijn:
  - het label van de _search_ landmark. Zie ook: [Using `aria-label` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).
