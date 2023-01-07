<!-- @license CC0-1.0 -->

# Form field

Gebruik het _form field_ component om een alle onderdelen van een formulierveld in te verzamelen: het label, de _form control_, eventueel een extra beschrijving of de status en eventueel een validatiemelding of foutmelding.

De volgende componenten zijn vaak onderdeel van een _form field_:

- _form label_ component
- _form field description_ component met extra beschrijving
- _form field description_ component met een validatiemelding
- een form control component zoals bijvoorbeeld:
  - _textbox_ component
  - _textarea_ component
  - _checkbox_ component
  - _radio button_ component
  - _form select_ component
  - etcetera
- _form field description_ component met een foutmelding
- _form field description_ component status van component

## HTML

Gebruik een element `<div>` element voor formuliervelden met één _form control_. Een formulierveld moet meerdere `<p>` elementen kunnen bevatten, gebruik daarom geen `<p>` element voor de form field. Je moet geen _landmark role_ gebruiken voor een formulierveld (dus geen `<section>`) element.

Voor formuliervelden met meerdere _form controls_ mag je een `<fieldset>` element gebruiken, bijvoorbeeld voor: jaar, maand en dag. Voor CSS is het handig om dan nog steeds een `<div>` om de fieldset heen te hebben: `<div><fieldset>...</fieldset></div>`.

## Gebruikte termen

- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.
- `field` komt van `<fieldset>` in HTML.
- `invalid` komt van `aria-invalid` in WAI-ARIA.
- `radio` komt van `<input type="radio">` in HTML.
- `checkbox` komt van `<input type="checkbox">` in HTML.
- `label` komt van `<label>` in HTML en `aria-labelledby` in WAI-ARIA.
- `description` komt van `aria-describedby` in WAI-ARIA.

## Relevante WCAG regels

- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn
- [WCAG eis 3.3.9](https://www.w3.org/TR/WCAG22/#redundant-entry): gebruik niet een formulierveld voor informatie die de gebruiker eerder al heeft ingevuld.
  - Vraag gebruikers niet twee keer achter elkaar identieke gegevens in te vullen, bijvoorbeeld om typfouten te herkennen en daarmee fouten te voorkomen. Bied liever een mogelijkheid aan om de gegevens te controleren als laatste stap.
  - Vul bestaande gegevens in als standaardwaarde wanneer je de gegevens al hebt maar je graag zeker wilt weken of de oude gegevens nog juist zijn.
