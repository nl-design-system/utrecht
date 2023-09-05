<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

Gebruik de `autocomplete` waarde `given-name` wanneer je alleen de voornaam nodig hebt, of je de voornaam nodig hebt als los onderdeel van de naam.

Er is geen `autocomplete` waarde voor "Voornamen". De `autocomplete` waarde `given-name` gaat alleen om de eerste naam. Als losse `autocomplete` optie bestaat `additional-name`, maar er is geen combinatie mogelijk.

Gebruik nooit een minimumlengte voor de validatie van een voornaam. Er zijn diverse namen van één letter die voorkomen in Nederland en België. Gebruik liever `required` dan `minlength="1"` omdat het een duidelijkere foutmelding oplevert.
Bekijk op de [Nederlandse Voornamenbank](https://www.meertens.knaw.nl/nvb/) van het Meertens Instituut de voornamen die voorkomen in Nederland.

Let op bij validatie van de ingevoerde tekst dat je tekens toestaat die officiëel toegestaan zijn in de basisregistratie personen, zodat elke persoon zijn officiële naam kan invullen.

"Voornamen" is onderdeel van de basisregistratie personen (elementnummer 02.10 in het [Logisch Ontwerp BRP](https://www.rvig.nl/brp/documenten/publicaties/2022/10/21/logisch-ontwerp-brp-4.1)): lengte 1-200, alfanumerieke tekens uit Teletex.

Vul automatisch de voornaam in wanneer deze al bekend is, bijvoorbeeld als de gebruiker met DigiD is ingelogd. De voornaam is bijvoorbeeld beschikbaar vanuit [Haal Centraal](https://vng.nl/projecten/haal-centraal).
