<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

Gebruik de `autocomplete` waarde `postal-code`.

Als je alleen wilt vragen om de eerste vier cijfers van de postcode, dan zou het autocomplete resultaat van `postal-code` door de laatste twee letters niet aan het juist formaat voldoen. Accepteer in zo'n geval ook de volledige postcode als invoer, en negeer de letters van de spotcode. Gebruik helemaal geen `autocomplete` als het niet mogelijk is om ook de letters te accepteren.

Gebruik voor validatie niet een limiet kleiner dan `maxlength="7"` zodat een spatie tussen de cijfers en letters past.
