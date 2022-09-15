<!-- @license CC0-1.0 -->

# Lijsten

Lijsten worden gebruikt voor opsommingen op een contentpagina. Hier gaan opsommingen vooraf met een bullet of een cijfer. De marge tussen twee list items (li) is 0.5em (8px).

Gebruik `role="list"` om te voorkomen dat de component niet toegankelijkheid is in combinatie met een eigen icoon voor elke list item, wanneer je `list-style: none` gebruikt om de browser-icoon uit te zetten. ([Safari behandelt lijsten met eigen `list-style` anders dan normaal.](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html))

## Terminologie

- **unordered list**: uitgeschreven versie van de HTML afkorting `<ul>`
- **list item**: uitgeschreven van van [HTML `<li>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element). Ook [in ARIA is het `role="listitem"`](https://www.w3.org/TR/wai-aria-1.2/#listitem)
- **marker**: zoals in de [CSS pseudo-selector `::marker`](https://drafts.csswg.org/css-pseudo-4/#marker-pseudo)

## Class names

- `utrecht-unordered-list`
- `utrecht-unordered-list--distanced`: standaard heeft een component geen marge, gebruik deze class name om in een bepaalde context de standaard-marge toe te passen
- `utrecht-unordered-list--nested`
- `utrecht-unordered-list__item`: misschien moet nog aangepast worden naar `utrecht-unordered-list__listitem` of - `utrecht-unordered-list__list-item`
- `utrecht-unordered-list__marker`

## Design tokens

- Document
  - `--utrecht-document-font-family`
  - `--utrecht-document-font-size`
  - `--utrecht-document-line-height`
- Paragraph
  - `--utrecht-paragraph-margin-block-start`
  - `--utrecht-paragraph-margin-block-end`
- List
  - `--utrecht-unordered-list-margin-block-start`
  - `--utrecht-unordered-list-margin-block-end`
  - List item
    - `--utrecht-unordered-list-item-margin-block-start`
    - `--utrecht-unordered-list-item-margin-block-end`
  - Marker
    - `--utrecht-unordered-list-marker-color`
