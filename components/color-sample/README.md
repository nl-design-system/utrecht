<!-- @license CC0-1.0 -->

# Color sample

Gebruik _color sample_ component om een voorbeeld te geven van een kleur. Gebruik deze component bijvoorbeeld voor:

- Legenda van de kleuren in landkaarten, grafieken of van data badges.
- Overzicht van kleuren in een huisstijl.
- Kleur-optie in een _color input_ component.

## Toegankelijkheid

### Tekstlabels voor kleuren

Gebruik ook een tekstlabel om de kleur te beschrijven. Bijvoorbeeld: "rood", "lichtrood", etcetera.

Een gebruiker die geen kleuren ziet kan het met een andere gebruiker over de "rode lijn" hebben, als het tekstlabel goed is. Vervang daarom de kleur in het tekstlabel niet door de bedoeling van de kleur: "hoog water", "laag water". Combineer de kleur met de bedoeling: "blauw, hoog water" en "geel, laag water".

### Forced colors mode

Bij sommige gebruikers worden kleuren in CSS zoals `background-color` vervangen of genegeerd, omdat ze een bepaald kleurenpalet nodig hebben. Voor datavisualisatie-kleuren kan dit functionaliteit kapot maken, terwijl voor decoratieve huisstijl kleuren het meestal geen probleem is.

Gebruik `forced-color-adjust: none` om te voorkomen dat de kleur wordt aangepast, zodat de betekenis duidelijk blijft. Lees meer hierover op deze Microsoft blog post: [Styling for Windows high contrast with new standards for forced colors](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

## WCAG eisen

- [WCAG eis 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): gebruik hetzelfde label voor de kleur in de _color sample_ van de legenda als in de landkaart of grafiek.
