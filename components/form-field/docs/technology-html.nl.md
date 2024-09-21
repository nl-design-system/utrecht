<!-- @license CC0-1.0 -->

# HTML

Gebruik een element `<div>` element voor formuliervelden met één _form control_. Een formulierveld moet meerdere `<p>` elementen kunnen bevatten, gebruik daarom geen `<p>` element voor de form field. Je moet geen _landmark role_ gebruiken voor een formulierveld (dus geen `<section>`) element.

Voor formuliervelden met meerdere _form controls_ mag je een `<fieldset>` element gebruiken, bijvoorbeeld voor: jaar, maand en dag. Voor CSS is het handig om dan nog steeds een `<div>` om de fieldset heen te hebben: `<div><fieldset>...</fieldset></div>`.
