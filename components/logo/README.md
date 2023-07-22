<!-- @license CC0-1.0 -->

# Logo component

## Toegankelijkheid

Als het logo tekst bevat, dan is het belangrijk voor gebruikers dat de letters voldoende groot zijn en de tekst voldoende contrast heeft. [WCAG eis 1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced) maakt voor logo's een uitzondering, maar het is niet gebruiksvriendelijk om hier een uitzondering te maken.

Test je logo in _dark mode_ en in _forced colors_ mode, want je wil dat het logo duidelijk is op zowel een lichte als een donkere achtergrond.

Test je logo in pagina's die tot 400% zijn gezoomd in scherm van 1280px breed. Je logo moet ook duidelijk zijn wanneer die maximaal 320px breed is (1280px ÷ 4). Als je rekening houdt met een marge van 24px, dan moet je logo ook duidelijk zijn wanneer die maximaal 272px breed is (320px - 2 × 24px marge van de pagina).

Is je logo niet voldoende toegankelijk? Logo's worden na verloop van tijd vaak veranderd, dus het is nooit te laat om het logo voor de hele organisatie beter te maken. Als je inspraak hebt in het ontwerpproces van je logo, probeer dan een minimale contrastverhouding van 4,5:1 aan te houden (of 3:1 voor grotere tekst).

Tekst in de afbeelding van het logo zal niet vertaald worden door automatische vertalingen van browsers. Overweeg of je de tekst uit de afbeelding in het HTML document kan plaatsen, zodat de tekst ook begrijpelijk is voor gebruikers van een automatische vertaling. Gebruik in HTML `translate="no"` als tekst in het logo niet vertaald moet worden.

Besteed aandacht aan alle logo's op de website, niet alleen aan het bedrijfslogo.

## Bestandsformaat

Gebruik voor het logo bij voorkeur een vectorafbeelding zoals SVG, zodat het logo scherp is op verschillende soorten schermen. Een pixel-logo (zoals PNG) is vaak onscherp op moderne schermen die een hoge pixeldichtheid hebben.

Het is mogelijk een scherpe versie van een pixelafbeelding te hebben voor schermen met een hoge pixeldichtheid. Gebruik daarvoor [`srcset` met een onder andere een `2x` variant](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset). SVG gebruiken is meestal toch handiger, omdat je maar één bestand nodig hebt voor alle soorten pixeldichtheid.

## HTML

### Tekst-alternatief

Het moet duidelijk zijn dat de afbeelding een logo is. Als je de afbeelding ziet dan is het waarschijnlijk direct duidelijk. Als je de afbeelding niet ziet, dan weet je niet of de beschrijving "de gemeente Utrecht" gaat over een luchtfoto of een logo.

Bijvoorbeeld, een tekst alternatief voor een `img` element:

```html
<img src="/img/logo.svg" alt="logo Gemeente Utrecht" height="100" width="150" />
```

Een andere manier om er over na te denken is: op welke tekst zou je zoeken als je op zoek gaat in de afbeeldingenbibliotheek van een CMS? Zonder het woord "logo" vind je waarschijnlijk niet waar je naar zoekt.

Houdt de tekst kort. Bijvoorbeeld niet: `alt="logo Gemeente Utrecht: een schild met de rechtsgeschuinde rood en witte vlag van Utrecht, met aan twee kanten een leeuw, met links een goudgeel accent`. Als de onderwerp van de pagina het logo is, zet dan de beschrijving dan in de gewone tekst.

**Let op**: zeg in het tekstalternatief niet dat het een "afbeelding" is, dat is al duidelijk voor gebruikers. Dus niet: `alt="afbeelding logo Gemeente Utrecht"`.

### Logo als link naar de homepage

De tekstbeschrijving van de link moet duidelijk zijn:

```html
<a href="/" aria-label="Homepage" rel="home">
  <img src="logo.svg" alt="logo Gemeente Utrecht" height="100" width="150" />
</a>
```

De tekst "Terug naar de homepage" kan verwarrend zijn, omdat de bezoeker misschien direct op de huidige pagina is gekomen vanaf een andere site.

**Let op**: gebruik niet de link-tekst als afbeelding-tekst, de link en het plaatje moeten beide een duidelijk label hebben.

```html
<a href="/">
  <img src="logo.svg" alt="logo, link naar de homepage" height="100" width="150" />
</a>
```

**Let op**: op de homepage is het niet handig om het logo in een link te plaatsen, gebruik dan een logo zonder link. Als een gebruiker op de homepage aankomt, is het zeker niet nodig om te beginnen met een link naar de pagina waar je al bent.

## References

- [Gemeente Utrecht - Huisstijl - Logo](https://huisstijl.utrecht.nl/basiselementen/logo/)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)

## Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): de afbeelding moet een tekst-alternatief hebben.

Voor logo als link:

- [WCAG eis 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)
- [WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)
