<!-- @license CC0-1.0 -->

# Form field description

Gebruik dit component voor extra beschrijvingen en instructies bij formuliervelden. Gebruik variaties van dit component voor meldingen dat er iets mis is met de invoer (`invalid`), dat er iets fout ging met het behandelen van de invoer (`error`), feedback over de status van de invoer, of feedback dat de invoer OK is.

Dit component is meestal een onderdeel van het _form field_ component.

## Toepassing

- Gebruik `role="status"` voor feedback over acties van de gebruiker. Gebruik deze rol niet bij server-side templates, het is niet handig als deze teksten direct worden voorgelezen door een _screen reader_ zodra de pagina geladen is. Zie ook: [Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22). Bijvoorbeeld:
  - informatie over hoeveel meer tekens nog gebruikt mogen worden voordat de limiet is bereikt.
  - informatie over hoeveel zoekresultaten een combobox heeft.
- Gebruik `role="alert"` voor fouten die optreden door een actie van de gebruiker, bijvoorbeeld:
  - Wanneer een formulierveld niet juist is ingevuld.
  - Wanneer een formulier niet verzonden kan worden, omdat geen verbinding met de server gemaakt kan worden.

## Gebruikte termen

- `form` komt van `<form>` in HTML en `role="form"` in WAI-ARIA.
- `field` komt van `<fieldset>` in HTML.
- `description` komt van `aria-describedby`.
- `invalid` komt van `:valid` in CSS en `aria-invalid` in WAI-ARIA.
- `valid` from `:valid` in CSS.

## HTML

Gebruik een `id` attribuut op dit element, zodat je met `aria-describedby` op de _form control_ een koppeling kunt maken.

## Relevante WCAG eisen

- [WCAG eis 3.3.1](https://www.w3.org/TR/WCAG21/#error-identification). Gebruik `id` attribuut op de _form field description_ en koppel de _form control_ met `aria-describedby` aan deze `id`. Zie ook: [WCAG Technique: Using `aria-invalid` to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21)
- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#labels-or-instructions). Zie ook: [WCAG Technique ARIA1: Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/)
- [WCAG eis 3.3.2](https://www.w3.org/TR/WCAG21/#error-suggestion)
