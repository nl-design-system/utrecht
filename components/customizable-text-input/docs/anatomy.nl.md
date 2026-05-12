<!-- @license CC0-1.0 -->

# Anatomie

## Terminologie

**customizable-text-input**: [NL Design System noemt het input veld](https://www.nldesignsystem.nl/text-input/) "Text input". [MDN noemt een aanpasbare select](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) "customizable select".

## Toepassing

Standaard gebruikt de **customizable-text-input** component het `span` element voor de `start` en `end` slots. Dat betekent dat een klik op een van de slots de focus niet verlegd naar het `input` veld.
Door de span te vervangen door een `label` met `for` en `aria-hidden` attributen kan de focus verlegt worden naar het `input` veld.
