<!-- @license CC0-1.0 -->

# Vega Visualization

## React

Je kan het React `<VegaVisualization />` component gebruiken voor het tonen van data visualisaties. Gebruik de [Vega-Lite](https://vega.github.io/vega-lite/docs/) specificatie voor je data en geef deze specificatie mee aan het component.

### Configuratie

De standaard [configuratie](https://vega.github.io/vega-lite/docs/config.html) van het visualisatie component kan worden overschreven via de `config` property. Gebruik dit voor het wijzigen van het uiterlijk van de visualisatie.

Om meer talen toe te voegen kan je binnen het `config` object een `locale: {...}` property definieren. [Vega locale documentatie](https://vega.github.io/vega/docs/api/locale/).

## Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): grafieken moeten een tekst of een tabel als alternatief hebben.
- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): informatie wordt niet duidelijk door kleur, zodat de grafiek ook duidelijk is voor mensen met kleurenblindheid.
- [WCAG eis 1.4.11](https://www.w3.org/TR/WCAG21/#non-text-contrast): voldoende contrast tussen de achtergrondkleur en visuele onderdelen zoals lijnen, staven, stippen en iconen.
