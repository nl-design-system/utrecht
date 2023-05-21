<!-- @license CC0-1.0 -->

# Logo component

## Toegankelijkheid

Soms is het logo de belangrijkste manier om te zien op welke website je bent, en wat de naam van de organisatie is. Zorg dan dat de tekst in het logo groot genoeg is en het contrast voldoende is, anders is de afzender niet duidelijk. WCAG maakt een uitzondering voor logo's, maar dat is geen goede reden om een onduidelijke site te hebben.

## Bestandsformaat

Gebruik voor het logo bij voorkeur een een vectorafbeelding zoals SVG, zodat het logo scherp is op verschillende soorten schermen. Een pixel-logo (zoals PNG) is vaak onscherp op moderne schermen die een hoge pixeldichtheid hebben.

Het is mogelijk een scherpe versie van een pixelafbeelding te hebben voor schermen met een hoge pixeldichtheid. Gebruik daarvoor [`srcset` met een onder andere een `2x` variant](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset). SVG gebruiken is meestal toch handiger, omdat je maar één bestand nodig hebt voor alle soorten pixeldichteid.

## Text content

Text embedded in the logo image will not be translated by tools built-in to browsers. Consider placing the logo text in the HTML document instead, so it is available for users reading a translation too.

## References

- [Gemeente Utrecht - Huisstijl - Logo](https://huisstijl.utrecht.nl/basiselementen/logo/)
