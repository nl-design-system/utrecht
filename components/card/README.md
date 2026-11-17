<!-- @license CC0-1.0 -->

# Card

Een card verwijst naar een andere pagina, met een afbeelding, een heading en een korte tekst. De hele card is klikbaar: de link in de heading bedekt de card.

## Opbouw

1. Pre-heading (optioneel): een korte tekst boven de heading, bijvoorbeeld een categorie.
2. Header: de afbeelding (optioneel) en de heading met de link.
3. Body: de beschrijving.
4. Footer (optioneel): extra gegevens, zoals een datum of data badges.

## Relevante WCAG eisen

- [WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): de pre-heading staat in de HTML na de heading, in een `<hgroup>`. Met CSS staat hij boven de heading. Zo hoor je met een screenreader eerst de heading.
- [WCAG eis 2.1.1](https://www.w3.org/TR/WCAG21/#keyboard): de card heeft één link, en dus één tabstop. Zet geen links of knoppen in de footer of de body: de link van de card ligt eroverheen, dus je kunt ze niet aanklikken.
