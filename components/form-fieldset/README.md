<!-- @license CC0-1.0 -->

# Fieldset

## States

### `disabled`

Een veldengroep waar alle velden `disabled` zijn.

### `invalid`

Een veldengroep die niet valide is. Gebruik deze voor veldengroepen de als geheel gevalideerd worden, bijvoorbeeld een _radio group_ of een _checkbox group_. Gebruik `invalid` niet voor veldengroepen waar één los onderdeel invalide is, bijvoorbeeld: als één van de vragen nog niet beantwoord is.

## HTML

In HTML kun je de `<fieldset>` en `<legend>` elementen gebruiken, die worden automatisch gekoppeld aan radio buttons en checkboxes.

Voor een radio button group gebruik je `<fieldset role="radiogroup">`, dat maakt het extra duidelijk voor screen reader gebruikers. `<fieldset>` heeft als default `role="group"` en daarom hoef je nooit `<fieldset role="group">` te gebruiken.

De bijzondere browser default stylesheet voor `<fieldset>` en `<legend>` maken het erg moeilijk om CSS te gebruiken voor deze elementen, maar voor toegankelijkheid is het echter zeker de moeite waarde deze elementen toch te gebruiken. Gebruik de reset CSS voor fieldset en legend om geen default styles te gebruiken.

Gebruik een extra `<div>` om je `<fieldset>` zodat het mogelijk wordt een `background-color` of `border` in te stellen, door de browser default stylesheet is dat voor `<fieldset>` niet goed mogelijk.

### HTML attributen

Deze attributen moet je kunnen gebruiken in de fieldset component van een framework:

- `class`
- [`disabled`](https://html.spec.whatwg.org/multipage/form-elements.html#dom-fieldset-disabled)
- `hidden`: om een _conditional fieldset_ te maken moet je het `hidden` attribuut kunnen gebruiken
- `role`: het moet mogelijk zijn `role="radiogroup"` in te stellen
- `aria-describedby`: gebruik bij voorkeur `<legend>`
- `aria-invalid`

Deze attributen willen mensen soms ook gebruiken:

- `aria-label`: gebruik bij voorkeur `<legend>`
- `aria-labelledby`: gebruik bij voorkeur `<legend>`
- `aria-disabled`: gebruik bij voorkeur `disabled`, behalve als je _client-side form validation_ gebruikt om `aria-disabled` te maken.
- [`form`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fae-form)
- [`name`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fe-name)

## CSS

De tokens voor `background-color` en `border` werken niet goed als alleen een `<fieldset>` wordt gebruikt. Voor goed resultaat is een extra `div` nodig. De HTML component heeft daarom geen goede ondersteuning voor `background-color` en `border`.

## Relevante WCAG regels

- [WCAG eis 1.3.5](https://www.w3.org/TR/WCAG21/#identify-input-purpose)
  - voor een _radio group_ en _checkbox group_ is fieldset een goede manier het doel van de groep aan te geven
