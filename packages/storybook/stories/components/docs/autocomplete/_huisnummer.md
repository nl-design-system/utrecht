<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

In de [Basisregistratie Adressen en Gebouwen (BAG)](https://bagviewer.kadaster.nl/lvbag/bag-viewer/index.html) hebben we gecontroleerd welke soort data huisnummer kan hebben. (Unieke waarden gevonden met SQL: `SELECT DISTINCT huisnummer FROM nums WHERE huisnummer ORDER BY huisnummer;`). Laatst gecontroleerd: juni 2023.
De waarde is een getal tussen 1 en 99999.
Huisnummer heeft geen `autocomplete` type.

Valide waarden om mee te testen:

- 1
- 99999

Invalide waarden om mee te testen:

- 0
- 100000
