<!-- @license CC0-1.0 -->

# Page Header

De page header bevat vaak de volgende onderdelen:

- Logo (met link naar de homepage)
- Navigatie
- Zoekveld
- Kruimelpad-navigatie
- Eventueel een melding met een waarschuwing, bijvoorbeeld over een actuele storing.
- Cookie banner.

Het logo maakt duidelijk wie verantwoordelijk is voor de website en geeft daarmee belangrijke context voor de rest van de pagina.

## HTML

Gebruik het HTML `<header>` element, zodat het automatisch een `banner` landmark krijgt.

## Relevante WCAG eisen

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): plaats de header in een `banner` landmark, door het `<header>` element te gebruiken
- [WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): plaats de header aan het begin van pagina, maar na de _skip links_. Zo is het gelijk duidelijk wie verantwoordelijk is voor de pagina die er op volgt.
