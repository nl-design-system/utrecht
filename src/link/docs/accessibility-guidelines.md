# Toegangkelijkheids eisen

## Focus appearance

### WCAG 2.4.11

Bij het Link component hebben we te maken met [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG22/#focus-appearance-minimum). Deze eis beschrijft dat als een link de focus door het te selecteren met het toetsenbord het uiterlijk van de link moet veranderen.  De [bedoeling van dit punt](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html#intent) is dat de keyboard focus indicator altijd duidelijk zichtbaar is.

### Design keuzes

We maken daarom de volgende design keuzes bij een hover state:

- De achtergrondkleur wordt geel (--utrecht-highlight-colour).
- We kiezen er voor om de outline donkerblauw (--utrecht-link-colour) te maken.
- We kiezen voor outline in plaats van border omdat dit beter opgepakt wordt door de verschillende browsers.

Het verschil tussen de normale achtergrond (zonder focus) en de nieuwe achtergrond (met focus) moet voldoen aan een contrast ration van 3:1. Met de bovenstaande keuzes hebben we een contrastwaarde van ??:??
Het verschil tussen de achtergrond met focus en de omgeving moet voldoen aan een contrast van 3:1 of de afscheiding heeft ten minste een waarde van 2 pixels. Met de bovenstaande keuzes hebben we een contrastwaarde van ??:?? en de dikte van de outline is ??:??.
