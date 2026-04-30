<!-- @license CC0-1.0 -->

Wanneer je tekst mee geeft aan het `start` of `end` slot moet deze leesbaar zijn voor screen readers. Dit kan op de volgende twee manieren:

- De tekst die je in het slot meegeeft voorzie je van een uniek `id` en koppel je aan het input element doormiddel van `aria-describedby`. Dit zorgt er voor dat de tekst opgelezen en aan de input verbonden wordt.
- De tekst die je in het slot mee geeft laat je terug komen in het label die bij de input hoort. Voorbeeld: je geeft "mL per uur" mee aan het `end` slot, en je geeft "Verbruik in mL per uur" mee in het `label`. De "mL per uur" word niet voorgelezen door screen readers, maar komt terug in het `label` en is dus nog steeds toegankelijk.
