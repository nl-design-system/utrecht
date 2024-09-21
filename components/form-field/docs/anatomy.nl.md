<!-- @license CC0-1.0 -->

# Anatomy

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

## Gebruikte termen

- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.
- `field` komt van `<fieldset>` in HTML.
- `invalid` komt van `aria-invalid` in WAI-ARIA.
- `radio` komt van `<input type="radio">` in HTML.
- `checkbox` komt van `<input type="checkbox">` in HTML.
- `label` komt van `<label>` in HTML en `aria-labelledby` in WAI-ARIA.
- `description` komt van `aria-describedby` in WAI-ARIA.
