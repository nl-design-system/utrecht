<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

In de [Basisregistratie Adressen en Gebouwen (BAG)](https://bagviewer.kadaster.nl/lvbag/bag-viewer/index.html) hebben we gecontroleerd welke soort data huistoevoeging kan hebben. (Unieke waarden gevonden met SQL: `SELECT DISTINCT huistoevoeging FROM nums ORDER BY LENGTH(huistoevoeging);`). Laatst gecontroleerd: juni 2023.
De waarde kan leeg zijn, of maximaal 4 letters of cijfers bevatten.
Huistoevoeging heeft geen `autocomplete` type.

Waarden om mee te testen (en test ook leeg huistoevoeging niet invullen):

- a
- 0
- AANL
- AA08
- 0000
- zW28
- zorg
