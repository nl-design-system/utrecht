<!-- @license CC0-1.0 -->

<!-- markdownlint-disable first-line-h1 -->

Gebruik `role="combobox"` om duidelijk te maken dat deze form control bestaat uit twee delen: de text input en een lijst met opties.

Gebruik `aria-expanded="false"` voor het `role="combobox"` element om mee te beginnen.

Gebruik `autocomplete="off"` op het `<input>` element zodat de gebruiker niet twee autocomplete popups tegelijk krijgt: één van deze component, de tweede van de browser.

Gebruik `aria-autocomplete="list"` om duidelijk te maken dat het een autocomplete is met één of meerdere opties.

Gebruik voor elke _option_ `role="option"`, bijvoorbeeld `<li role="option">...</li>`.
