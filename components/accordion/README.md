<!-- @license CC0-1.0 -->

# Accordion

## HTML

Gebruik een `<button>` element waarmee je de inhoud van de section kunt weergeven en verbergen. Gebruik altijd het `aria-expanded` attribuut zodat duidelijk wat het effect is van de button activeren. Gebruik `aria-expanded="true"` wanneer de inhoud beschikbaar is, gebruik `aria-expanded="false"` wanneer de inhoud verborgen is.

Plaats de button in de heading, zodat gebruikers die via een overzicht van headings door de pagina navigeren de informatie makkelijk kunnen vinden.

Plaats de inhoud van de _expandable region_ in een `<section>` element, zodat gebruikers die via een overzicht van _landmarks_ door de pagina navigeren de informatie makkelijk kunnen vinden (het `section` element maakt een `region` landmark). Gebruik `aria-labelledby` om de `section` te koppelen aan de heading, omdat het is belangrijk dat de landmark een duidelijk label heeft. Zonder label is de _landmark navigation_ onduidelijk omdat er meerdere regions zijn zonder naam, waarvan niet duidelijk is wat de inhoud is.

Wanneer je accordion heel veel onderdelen heeft, dan kunnen gebruikers van _landmark navigation_ moeilijker andere landmarks in de pagina vinden. Om bij de `contentinfo` landmark te komen (de page footer), moet de gebruiker eerst alle accordion onderdelen overslaan. Gebruik voor een accordion met heel veel onderdelen een `<div>` of `<section role="presentation">` element in plaats van het `<section>` element zodat het geen landmark wordt. Gebruikers kunnen de informatie dan nog wel vinden via _heading navigation_.

### Zo moet het niet

Verwijder het `aria-expanded` attribuut niet, want `aria-expanded="false"` is niet hetzelfde als geen `aria-expanded` attribuut hebben.

Plaats niet de heading in de button in plaats van andersom, omdat de heading dan niet toegankelijk is voor hulpmiddelen die een overzicht maken van alle headings op een pagina.

## Relevante info

- [Accordion (Sections With Show/Hide Functionality) - W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
