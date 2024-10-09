<!-- @license CC0-1.0 -->

# HTML

## Tekst-alternatief

Het moet duidelijk zijn dat de afbeelding een logo is. Als je de afbeelding ziet dan is het waarschijnlijk direct duidelijk. Als je de afbeelding niet ziet, dan weet je niet of de beschrijving "de gemeente Utrecht" gaat over een luchtfoto of een logo.

Bijvoorbeeld, een tekst alternatief voor een `img` element:

```html
<img src="/img/logo.svg" alt="logo Gemeente Utrecht" height="100" width="150" />
```

Een andere manier om er over na te denken is: op welke tekst zou je zoeken als je op zoek gaat in de afbeeldingenbibliotheek van een CMS? Zonder het woord "logo" vind je waarschijnlijk niet waar je naar zoekt.

Houdt de tekst kort. Bijvoorbeeld niet: `alt="logo Gemeente Utrecht: een schild met de rechtsgeschuinde rood en witte vlag van Utrecht, met aan twee kanten een leeuw, met links een goudgeel accent`. Als de onderwerp van de pagina het logo is, zet dan de beschrijving dan in de gewone tekst.

**Let op**: zeg in het tekstalternatief niet dat het een "afbeelding" is, dat is al duidelijk voor gebruikers. Dus niet: `alt="afbeelding logo Gemeente Utrecht"`.

## Logo als link naar de homepage

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
