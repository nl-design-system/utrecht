# Prince XML

Aandachtspunten:

- Niet alle moderne CSS units worden ondersteund. In de design tokens moeten sommige units geconverteerd worden. Bijvoorbeeld:
  - `ch` naar `em`
  - `ex` naar `em`
- Niet alle CSS selectors worden ondersteund. Als je een gecombineerde selector gebruikt, dan kan het betekenen dat die hele CSS niet werkt. Splits je selectors op, of gebruik CSS post-processing om niet-ondersteunde CSS selectors te verwijderen uit de build. Bijvoorbeeld:
  - `::backdrop`
- CSS Logical properties worden niet ondersteund. Converteer bijvoorbeeld `padding-inline-start` naar `padding-left`. Hier zijn postcss plugins voor.
- Je kunt tags maken met Prince XML vendor prefixed properties.
- `aria-hidden` werkt niet goed, moet je andere dingen voor doen
- `<svg>` wordt gezien als image
