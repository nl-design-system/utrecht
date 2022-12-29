<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

Gebruik het `required` attribuut zodat duidelijk is dat het veld verplicht is. Browsers zullen een foutmelding tonen als een verplicht veld niet is ingevuld, en de _form submit_ blokkeren (tenzij `<form novalidate>` wordt gebruikt).

Gebruik `aria-required` in plaats van het `required` attribuut als de validatie-meldingen zelf wilt genereren (met de _invalid form field description_ component). De browser doet geen validatie voor `aria-required`.

Voor _progressive enhancement_ gebruik je bij server-side rendering `required`, en met client-side script vervang je de `required` door `aria-required`. Als het script niet geladen kan worden heeft de gebruiker nog voordeel van `required` .

Screen readers ondersteunen zowel `required` als `aria-required`.

In CSS werkt de `input:required` selector alleen bij het `required` attribuut, en niet bij het `aria-required` attribuut. Gebruik daarom de `.utrecht-textbox:required, .utrecht-textbox[aria-required="true"]` om beide varianten te ondersteunen.

Zie ook:

- [WCAG Technique ARIA2: Identifying a required field with the `aria-required` property](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2)
