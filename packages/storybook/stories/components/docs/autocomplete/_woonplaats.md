<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

In de [Basisregistratie Adressen en Gebouwen (BAG)](https://bagviewer.kadaster.nl/lvbag/bag-viewer/index.html) hebben we gecontroleerd welke soort data "woonplaats" kan hebben. (Unieke waarden gevonden met SQL: `SELECT naam FROM wpls;`). Laatst gecontroleerd: juni 2023.
De waarde kan de volgende soorten tekens hebben: letters, letters met diakrieten (accent, omgekeerd accent, accent circonflexe, umlaut, etcetera), cijfers, spaties, leestekens zoals haakjes `(` en `)`, koppelteken `-`, apostrof `'`.

De langste woonplaats in Nederland.
Op dit moment is de langste woonplaatsnaam in Nederland 28 tekens lang: Westerhaar-Vriezenveensewijk.
Laatst gecontroleerd: juni 2023.

Sommige gebruikers willen misschien een waarde plakken met een speciale apostrof `’` (`U+2019 RIGHT SINGLE QUOTATION MARK`): `’s-Hertogenbosch`.
Waarden om mee te testen:

- Ie
- Oss
- Ohé en Laak
- Bergen (NH)
- Sibrandahûs
- 2e Exloërmond
- 's-Hertogenbosch
- Stad aan 't Haringvliet
- Nieuwerkerk aan den IJssel
- Westerhaar-Vriezenveensewijk
