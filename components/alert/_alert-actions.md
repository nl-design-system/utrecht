<!-- @license CC0-1.0 -->

<!-- markdownlint-disable first-line-h1 -->

Zorg dat er alternatieve manieren zijn om de acties in een alert uit te voeren. Als er geen alternatieve manier is, gebruik dan een _alert dialog_ in plaats van een _alert_.

Actions zoals buttons worden in de praktijk vaak gebruikt bij een alert, maar er is nog niet een duidelijk stappenplan om de acties toegankelijk te maken.

Screen reader gebruikers krijgen alleen het bericht in de _message_, omdat die `aria-live="true"` heeft. Links en buttons in de _message_ worden niet aangekondigd als link of button. De toetsenbord focus kan heel ergens anders op de pagina zijn, waardoor het voor een gebruiker onduidelijk hoe je een _call to action_ moet uitvoeren.
