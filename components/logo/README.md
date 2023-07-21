<!-- @license CC0-1.0 -->

# Logo component

## Toegankelijkheid

Test je logo ook in _dark mode_ en in in _forced colors_ mode.

## Bestandsformaat

Gebruik voor het logo bij voorkeur een een vectorafbeelding zoals SVG, zodat het logo scherp is op verschillende soorten schermen. Een pixel-logo (zoals PNG) is vaak onscherp op moderne schermen die een hoge pixeldichtheid hebben.

Het is mogelijk een scherpe versie van een pixelafbeelding te hebben voor schermen met een hoge pixeldichtheid. Gebruik daarvoor [`srcset` met een onder andere een `2x` variant](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset). SVG gebruiken is meestal toch handiger, omdat je maar één bestand nodig hebt voor alle soorten pixeldichtheid.

## Text content

Als het logo tekst bevat, dan is het belangrijk voor gebruikers dat de letters voldoende groot zijn en de tekst voldoende contrast heeft. [WCAG eis 1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced) maakt voor logo's een uitzondering, maar het is niet gebruiksvriendelijk om hier een uitzondering te maken.

Tekst in de afbeelding van het logo zal niet vertaald worden door automatische vertalingen van browsers. Overweeg of je de tekst uit de afbeelding in het HTML document kan plaatsen, zodat de tekst ook begrijpelijk is voor gebruikers van een automatische vertaling.

## HTML

### Tekst-alternatief

Het moet duidelijk zijn dat de afbeelding een logo is. Als je de afbeelding ziet dan is het waarschijnlijk direct duidelijk. Als je de afbeelding niet ziet, dan weet je niet of de beschrijving "de gemeente Utrecht" gaat over een luchtfoto of een logo.

Bijvoorbeeld, een tekst alternatief voor een `img` element:

```html
<img src="/img/logo.svg" alt="logo Gemeente Utrecht" height="100" width="150" />
```

Een andere manier om er over na te denken is: op welke tekst zou je zoeken als je op zoek gaat in de afbeeldingenbibliotheek van een CMS? Zonder het woord "logo" vind je waarschijnlijk niet waar je naar zoekt.

### Logo als link naar de homepage

Op de homepage is niet handig om het logo in een link te plaatsen, gebruik dan een logo zonder link.

De tekstbeschrijving van de link moet duidelijk zijn:

```html
<a href="/" aria-label="Homepage" rel="home">
  <img src="logo.svg" alt="logo Gemeente Utrecht" height="100" width="150" />
</a>
```

De tekst "Terug naar de homepage" is kan verwarrend zijn, omdat de bezoeker misschien direct op de huidige pagina is gekomen vanaf een andere site.

**Let op**: gebruik niet de link-tekst als afbeelding-tekst:

```html
<a href="/">
  <img src="logo.svg" alt="logo, link naar de homepage" height="100" width="150" />
</a>
```

## References

- [Gemeente Utrecht - Huisstijl - Logo](https://huisstijl.utrecht.nl/basiselementen/logo/)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)

## Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): de afbeelding moet een tekst-alternatief hebben.

Voor logo als link:

- [WCAG eis 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)
- [WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)
