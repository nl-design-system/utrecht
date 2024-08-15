<!-- @license CC0-1.0 -->

# Hoe het niet moet: Link-tekst betekent verschillende dingen

Niet goed: "contact" linkt eerst naar de contact-pagina, verder op linkt "contact" naar een telefoonnummer.

```html
<nav>
  <a href="/contact/">contact</a>
</nav>
<!-- ...op een andere plek in dezelfde pagina -->
<p>Neem <a href="tel:555-1234">contact</a> op met de klantenservice, vandaag tot 6 uur bereikbaar.</p>
```

Beter:

```html
<nav>
  <a href="/contact/">contact</a>
</nav>
<!-- ...op een andere plek in dezelfde pagina -->
<p><a href="tel:555-1234">Bel de klantenservice</a>, vandaag tot 6 uur bereikbaar.</p>
```
