<!-- @license CC0-1.0 -->

# Alternate Language Navigation

## HTML

Use the `<nav>` with `<a>` element approach for hyperlinks to alternate languages. Use the button group with toggle button approach (`role="region"` with `<button aria-pressed="true">`) for single page apps where language is replaced using client-side scripting.

- Use `aria-current="page"` to annotate the link to the page the use is on currently.

- Use a word separator between the links to keep the links comprehensible without CSS, so do not write `<a>EN</a><a>NL</a>`.

- The links are best discoverable inside a [navigation landmark region](https://www.w3.org/TR/wai-aria-1.1/#navigation), so inside a `role="navigation"` or `<nav>` element.

- The buttons are best discoverable inside a `role="region"` landmark. Provide a label for the landmark, for example by using `aria-label`. <!-- Hmm... isn't <section> + <h2> preferable to using ARIA? -->

- Since it is not possible to provide alternate content for every language, it can help users that only understand other languages to use automatic translation tools such as [Google Translate](https://translate.google.com/). Ensure the language of the [current page is declared](https://www.w3.org/International/questions/qa-html-language-declarations.en) using `<html lang="…">`, so the browser can recognize the page is in a foreign language and suggest to enable automatic translation. Provide server side-rendering to improve the ability of those tools to retrieve the text content for translation.

## UX

- For users that don't understand the language of the current page, it should be simple to discover if the page is available in alternate languages. Provide the links as part of the page header or the page footer, or both.
- Do not use [flags as symbol for a language](https://en.wikipedia.org/wiki/Flag_icons_for_languages), this design pattern is discouraged: [W3C Internationalization Best Practices: "Do not use flag icons to indicate languages"](https://www.w3.org/International/geo/html-tech/tech-lang.html#ri20040808.173208643)

## Relevante WCAG eisen

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de heading van de landmark gebruikt de juiste _heading level_.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)
  - de `hreflang` maakt duidelijk dat de link verwijst naar een pagina in een andere taal
  - `rel="alternate"` maakt duidelijk dat het om dezelfde informatie gaat op een andere pagina
  - `aria-current` maakt duidelijk welke pagina op dit moment wordt weergegeven
  - maak duidelijk dat je kunt navigeren naar alternatieve versies door het plaatsen van deze links in een `navigation` landmark (`<nav>`)
- [WCAG eis 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context): met alleen de naam van de taal als label ("English") is het doel van de link duidelijk in de context van een navigation landmark
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): alle labels moeten duidelijk zijn:
  - het label van de landmark (de heading in de `nav` of `section`)
  - het zichtbare label van de links of buttons
  - het langere label van de link of button (in `aria-label` of `title`)
- [WCAG eis 2.4.9](https://www.w3.org/TR/WCAG21/#link-purpose-link-only): gebruik een label als "This page in English" zodat het doel van de link ook duidelijk is zonder context.
- [WCAG eis 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name): door een afkorting te gebruiken als link-tekst, wordt het moeilijk om met een gesproken instructie de link te activeren.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de link moet groot genoeg zijn om aan te klikken, en kleine links moeten niet te dicht op een andere link staan.
- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): voor de bezoeker die de huidige taal niet kan lezen, is het handig om voor de linktekst juist de andere taal te gebruiken. Gebruik het `lang` attribuut om aan te geven dat deze linktekst in een andere taal is geschreven.
- [WCAG eis 3.1.4](https://www.w3.org/TR/WCAG21/#abbreviations): als de taal wordt weergegeven als afkorting, dan moet de volledige naam in het `title` attribuut beschikbaar zijn.
- [WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation): de links naar alternatieve talen moeten op alle pagina's op dezelfde plek staan.
