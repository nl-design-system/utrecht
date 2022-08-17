<!-- @license CC0-1.0 -->

# _Number value_ component

Gebruik de number value component voor getallen in tabellen en overzichten van gegevens (_table_ en _data list_), waar je getallen moet controleren of opzoeken.

## Design

Als het lettertype de mogelijkheid heeft, dan worden "tabulaire cijfers" gebruikt, zodat lange getallen beter te vergelijken zijn. Het cijfer "2" is standaard vaak iets breder dan het cijfer "1", met tabulaire cijfers worden getallen met even veel cijfers ook even lang.

### Positief en negatief

Er twee varianten om positieve of juist negative getallen extra opvallend te maken:

- `utrecht-value-number--positive`
- `utrecht-value-number--negative`

Maak niet alleen gebruik van kleur om duidelijk te maken dat een getal negatief is, gebruik ook een minteken. Dit is belangrijk voor onder andere gebruikers die beperkt kleuren zien en gebruikers van _screen readers_.

## HTML

Gebruik in HTML het `<data>` element zodat het `value` attribuut het getal kan bevatten in [_valid floating-point number_ notatie]([https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number), net als bijvoorbeeld `<input type="number">`.

Bijvoorbeeld:

```html
<td lang="nl-NL" dir="ltr">
  <data value="1243.56">1.234,56</data>
</td>
```

## Notatie van getallen

Getallen bestaan niet altijd puur uit de cijfers 0 tot 9. Complexe getallen zijn duidelijker voor mensen als niet teveel cijfers achter elkaar staan. Voor duizendtallen en decimalen worden vaak punten, komma's en spaties gebruikt; dit verschilt heel erg per taal. Bijvoorbeeld:

- "1.234,56" in het Nederlands <!-- new Intl.NumberFormat("nl-NL").format(1234.56) -->
- "1,234.56" in het Engels <!-- new Intl.NumberFormat("en").format(1234.56) -->
- "1’234.56" in Zwitserland <!-- new Intl.NumberFormat("de-CH").format(1234.56) -->

Om de notatie van een getal aan te passen aan de taal, kun je in JavaScript `Intl.NumberFormat` gebruiken:

```js
const nl = new Intl.NumberFormat("nl-NL").format(1234.56);
const en = new Intl.NumberFormat("en").format(1234.56);
const ch = new Intl.NumberFormat("de-CH").format(1234.56);
```

Het is ook belangrijk dat het getal duidelijk is voor software (WCAG eis 1.3.6), onder andere zodat een _screen reader_ het getal foutloos kan voorlezen.

Wanneer het getal niet helemaal aaneen is geschreven om de leesbaarheid van een groot getal te verbeteren, of als getal decimalen heeft, dan is het essentiëel dat de taal van de tekst goed is ingesteld (WCAG eis 3.1.2). Als de taal niet klopt, dan kan een screen reader een heel ander getal voorlezen dan bedoeld is.

Tip: als je test met een _screen reader_ of een getal in verschillende talen foutloos voorgelezen wordt, controleer dan of alle talen wel beschikbaar zijn. Screen readers zijn vaak ingesteld op één taal, andere talen moeten als optie gekozen worden.

## Links

- [`font-variant-numeric: tabular-nums` in de CSS 4 specificatie](https://drafts.csswg.org/css-fonts/#valdef-font-variant-numeric-tabular-nums), die je gebruikt voor tabulaire nummers.

## Relevante WCAG eisen

- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): numerieke gegevens kunnen automatisch herkend worden, zelfs als _number formatting_ is gebruikt.
- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): gebruik een minteken voor negatieve getallen, niet alleen kleur
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast van de kleur voor positief en negatief moet voldoende zijn met de achtergrondkeur
- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): als je _number formatting_ gebruikt zonder de taal in te stellen is het niet toegankelijk.
- [WCAG eis 3.1.4](https://www.w3.org/TR/WCAG21/#abbreviations): als een getal afgekort is, bijvoorbeeld duizend als "1K", moet er een manier zijn om duidelijk te maken welk getal bedoeld wordt.
