<!-- @license CC0-1.0 -->

# Quote

Quotes worden gebruikt om uitspraken te accentueren. De quote bestaat uit een uitspraak en een bronvermelding. De tekstkleur van de uitspraak is rood en de tekst is iets groter (font-size: 1.125em) dan de standaard broodtekst. De tekstgrootte van de bronvermelding is iets kleiner dan de standaard broodtekst (font-size:.75em) en start met een (lang) streepje. De quote is links uitgelijnd en springt iets in naar het midden in 1.6em vanaf de linkerkantlijn.

## Terminologie

- **blockquote**: van het [HTML element `<blockquote>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element). MDN noemt het ["Block Quotation element"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote), misschien zou dat nog wel beter zijn dan "Blockquote".
- **content**: experimentele naam.
- **attribution**: verwijzing naar de bron van het citaat. Experimentele naam.

## Class names

- `utrecht-blockquote`: container element.
- `utrecht-blockquote__content`: gedeelte waar het citaat word genoemd.
- `utrecht-blockquote__attribution`: gedeelte waar de bron van het citaat word genoemd.
- `utrecht-blockquote--distanced`: modifier om afstand te creëren tot omliggende tekst.

## Design tokens

- Document (parent):
  - `--utrecht-document-font-family`
- Blockquote:
  - `--utrecht-blockquote-margin-inline-start`
  - `--utrecht-blockquote-margin-inline-end`
  - `--utrecht-blockquote-margin-block-start`
  - `--utrecht-blockquote-margin-block-end`
  - `--utrecht-blockquote-font-size`
  - `--utrecht-blockquote-font-family`
  - Blockquote content:
    - `--utrecht-blockquote-content-color`
