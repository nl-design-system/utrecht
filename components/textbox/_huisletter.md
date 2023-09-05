<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

In de [Basisregistratie Adressen en Gebouwen (BAG)](https://bagviewer.kadaster.nl/lvbag/bag-viewer/index.html) hebben we gecontroleerd welke soort data huisletter kan hebben. (Unieke waarden gevonden met SQL: `SELECT DISTINCT huisletter FROM nums ORDER BY huisletter;`). Laatst gecontroleerd: juni 2023.
De waarde kan 1 letter zijn van A tot Z, als hoofdletter of kleine letter. De waarde kan ook leeg zijn.
Huisletter heeft geen `autocomplete` type.

Waarden om mee te testen:

- a
- z
- A
- Z

Invalide waarden om mee te testen:

- 0
- xx
