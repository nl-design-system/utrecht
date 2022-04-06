<!-- @license CC0-1.0 -->

# Componenten voor NL Design System

## Unit tests schrijven

Een belangrijk doel van unit tests hebben is voorkomen van onbedoelde _breaking changes_.

Breaking changes zijn onder andere:

- Het wijzigen van een CSS class name die gebruikt wordt. Een ander project die het component gebruikt kan aanvullende CSS hebben toegevoegd die alleen werkt voor de originele class name.
- Het wijzigen van het HTML element dat wordt gebruikt om het component op te bouwen. Een ander project kan attributen instellen op het component die alleen bestaan op het originele element. Een ander project kan afhankelijk zijn van de TypeScript interface van het originele element.
- Het wijzigen van de standaard CSS `display` methode. Een ander project heeft de layout getest met de originele `display` waarde, en bij aanpassing van een component kan de layout van een pagina compleet verschuiven.

Aanvullend testen we:

- wordt de juiste _role_ gebruikt zodat het component beschikbaar is in de _accessibility tree_?
- worden de juiste _states_ gebruikt zodat ze beschikbaar zijn in de _accessibility tree_?
- wordt het `hidden` attribuut gerespecteerd, of wordt het overschreven door bijvoorbeeld een expliciete `display: block`? In sommige gevallen moet de CSS selector aangevuld worden met `:not([hidden])` om dit probleem te voorkomen.

Bij varianten testen we:

- werkt de variant zoals verwacht?
- is de variant optioneel, en is de variant niet per ongeluk standaard van toepassing?

In het geval van React testen we ook:

- werkt in React het `className` attribuut op het element, of worden alleen de interne class names van het component toegepast?
- werkt in de [`ForwardRef` functionaliteit van React](https://reactjs.org/docs/forwarding-refs.html)?
