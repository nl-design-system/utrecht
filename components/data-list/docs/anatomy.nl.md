<!-- @license CC0-1.0 -->

# Anatomie

De _data list_ is opgebouwd uit de volgende onderdelen en BEM class names:

- de _data list_
  - _data list item_, één of meerdere. Naam is gebaseerd op "item" uit `role="associationlistitemvalue"` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemvalue)
    - de _item key_. Naam is gebaseerd op het "key" in uit `role="associationlistitemkey"` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemkey).
    - de _item value_. Naam is gebaseerd op `value` van het `input` HTML-element en op `role="associationlistitemvalue"` in de [WAI-ARIA 1.3 Draft](https://w3c.github.io/aria/#associationlistitemvalue).
    - de _item actions_ (deze zijn optioneel)

BEM class names:

- `utrecht-data-list`. Gebruik ook `utrecht-data-list--html-dl` voor een reset van standaard styling van het `<dl>` element.
- `utrecht-data-list__item` voor de `<div>`
- `utrecht-data-list__item-key` voor de `<dt>`
- `utrecht-data-list__item-value` voor de `<dd>`
- `utrecht-data-list__actions` met een eigen `<dd>`
