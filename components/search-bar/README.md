<!-- @license CC0-1.0 -->

# Search Bar

De search bar bestaat uit een button element en een input element. Het is onderdeel van het header patroon.

## HeaderSearchBar

`HeaderSearchBar` is de React component voor zoeken in de header. De component rendert een `<form>` met
`role="search"`, een search input en een submit button met het label "Zoek". De input gebruikt
`type="search"` en heeft standaard een eigen toegankelijk label via `aria-label`.

Gebruik de component voor een compacte zoekfunctie in de header van een website of applicatie. Voor complexere
zoekervaringen met suggesties, filters of resultaten in een dropdown is een uitgebreidere combobox- of autocomplete
oplossing nodig.

```tsx
<HeaderSearchBar name="q" placeholder="Waar zoekt u naar?" />
```

## Opbouw

De React component hergebruikt bestaande componenten uit de component library:

- `Textbox` voor het invoerveld.
- `Button` voor de zoekactie.
- `utrecht-icon-search` voor het zoekicoon in de button.

De component gebruikt twee lagen class names:

- `utrecht-header-search-bar` voor de React componentnaam en specifieke uitbreidingen.
- `utrecht-search-bar` met BEM class names zoals `utrecht-search-bar__input`, `utrecht-search-bar__button` en
  `utrecht-search-bar__button-icon` voor de bestaande search-bar styling.

Hierdoor blijft de component herkenbaar als `HeaderSearchBar`, maar hergebruikt deze zoveel mogelijk bestaande
search-bar, textbox en button styling.

## Belangrijke keuzes

- De component is een formulier, zodat de zoekactie ook zonder extra JavaScript bruikbaar blijft.
- Het input veld en de button blijven twee aparte controls. De focus styling wordt visueel als één geheel getoond,
  maar de semantiek van form control en submit button blijft behouden.
- De focus visible styling wordt alleen getoond bij toetsenbordnavigatie. Pointer- en touch-interactie zetten de
  focus-ring niet aan.
- De focus-ring staat op de hele search bar. De afzonderlijke input, button, label en icoon krijgen geen eigen outline,
  zodat de focus niet dubbel of rommelig oogt.
- De button gebruikt het zoekicoon vóór het label. Als het custom element `utrecht-icon-search` nog niet geladen is,
  blijft er een SVG fallback beschikbaar.
- De component gebruikt geen Figma-generated code. Het ontwerp is vertaald naar bestaande componenten, BEM class names en
  design tokens.
- De Storybook stories tonen de states die voor dit header patroon relevant zijn: default, value, hover, focus visible,
  active en small viewport. Disabled, read-only en invalid zijn bewust niet als stories toegevoegd voor dit patroon.

## Styling en tokens

De styling wordt gestuurd via search-bar tokens. De component zet waar nodig component-specifieke tokens door naar de
bestaande button en textbox tokens.

Belangrijke tokens:

- `--utrecht-search-bar-input-border-width`: border van het zoekveld, nu 2px.
- `--utrecht-search-bar-input-focus-border-color`: borderkleur van het zoekveld wanneer de search bar focus visible is.
- `--utrecht-search-bar-input-large-inline-size`: breedte van het input veld op large viewport, nu 300px.
- `--utrecht-search-bar-button-column-gap`: ruimte tussen icoon en label, nu 8px.
- `--utrecht-search-bar-button-icon-size`: grootte van het zoekicoon, nu 24px.
- `--utrecht-search-bar-button-padding-inline-start` en
  `--utrecht-search-bar-button-padding-inline-end`: horizontale padding van de button, nu 24px.
- `--utrecht-search-bar-button-border-start-end-radius` en
  `--utrecht-search-bar-button-border-end-end-radius`: afronding aan de rechterkant van de button, nu 5px.

De kleuren voor default, hover, active en focus visible zijn tijdelijk op de search-bar tokens gezet. Daarmee blijven de
HeaderSearchBar kleuren lokaal bij dit component en worden algemene button tokens niet aangepast.

## Responsief gedrag

Op kleine viewports blijft het input veld flexibel en past het binnen de beschikbare ruimte. Vanaf large viewport
(`width >= 60em`) gebruikt het input veld `--utrecht-search-bar-input-large-inline-size`. In de Utrecht theme staat die
token op `300px`.

## Focus visible

De component gebruikt een handmatige focus-visible class voor React:

- `utrecht-search-bar--manual-focus-visible` voorkomt dat de fallback `:has(:focus-visible)` styling dubbel werkt.
- `utrecht-search-bar--focus-visible` wordt toegevoegd wanneer de gebruiker via `Tab` navigeert.

De CSS fallback met `:has(:focus-visible)` blijft bestaan voor niet-React of eenvoudiger HTML-gebruik van de
search-bar styling.

## Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): Gebruik `role="search"` voor de [_search_ landmark role](https://www.w3.org/TR/wai-aria-1.2/#search). Zie ook: [WCAG Technique: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): alle labels moeten duidelijk zijn:
  - het label van de _search_ landmark. Zie ook: [Using `aria-label` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).
