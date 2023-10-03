<!-- @license CC0-1.0 -->

# Form field error message

Gebruik dit component voor foutmeldingen bij formuliervelden die geen valide invoer hebben.

Dit component is meestal een onderdeel van het _form field_ component.

## Gebruikte termen

- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.
- `field` komt van `<fieldset>` in HTML.
- `error-message` komt van `aria-errormessage`.

## HTML

Gebruik een `id` attribuut op dit element, zodat je met `aria-describedby` op de _form control_ met `aria-invalid="true"` een koppeling kunt maken. Support voor `aria-errormessage` is nog onvoldoende, dus gebruik voorlopig nog `aria-describedby`.

Gebruik in HTML in plaats van `aria-live="polite"` het attribuut `role="status"`.

Gebruik in HTML in plaats van `aria-live="assertive"` het attribuut `role="alert"`.

## Relevante WCAG eisen

- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): gebruik niet alleen kleur om duidelijk te maken dat het een foutmelding is.
- [WCAG eis 3.3.1](https://www.w3.org/TR/WCAG21/#error-identification). Gebruik `id` attribuut op de _form field description_ en koppel de _form control_ met `aria-describedby` aan deze `id`. Zie ook: [WCAG Technique: Using `aria-invalid` to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)
- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#labels-or-instructions). Zie ook: [WCAG Technique ARIA1: Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/)
- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#error-suggestion)
