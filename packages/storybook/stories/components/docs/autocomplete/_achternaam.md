<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

Gebruik de `autocomplete` waarde `family-name` wanneer je de achternaam inclusief voorvoegsel nodig hebt.

Als je een eigen textbox voor voorvoegsel gebruikt, gebruik dan niet `autocomplete="family-name"` omdat daarmee het voorvoegsel automatisch in het verkeerde veld wordt ingevuld.

Gebruik nooit een minimumlengte voor de validatie van een achternaam. "O" is een achternaam van één letter die voorkomt in Nederland en Belgie ([zie Wikipedia](<https://nl.wikipedia.org/wiki/O_(achternaam)>)). Gebruik liever `required` dan `minlength="1"` omdat het een duidelijkere foutmelding oplevert.

Je kunt op de [FamilienamenBank website](https://www.cbgfamilienamen.nl/nfb/) van het Centrum voor Familiegeschiedenis vinden welke familienamen voorkomen in Nederland.
