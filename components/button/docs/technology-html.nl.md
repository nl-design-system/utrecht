<!-- @license CC0-1.0 -->

# HTML

Gebruik het `<button type="button">` element in HTML om een button te maken.

Een alternatief op `<button>` is bijvoorbeeld `<input type="button">`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is `<div role="button" tabindex="0">`, maar `<button>` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.

## Formulieren verzenden

Voor formulieren verzenden gebruik je `<button type="submit">`. Gebruik ook de `submit` event van een formulier en niet alleen de `click` event van de button, zodat je ook vanuit een formulierveld op `Enter` kan drukken om het formulier te verzenden.
