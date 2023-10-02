<!-- @license CC0-1.0 -->

# Preserve data

De _preserve data_ component is bedoeld om ingevoerde gegevens zoveel mogelijk 1-op-1 te laten zien. Dat betekent: spaties worden getoond, data wordt niet vertaald, _left-to-right_ en _right-to-left_ teksten worden met Unicode in de automatische schrijfrichting weergegeven.

Losse regels worden niet getoond, dan moet het gecombineerd worden met de _multiline data_ component.

## Variaties

Deze component krijgt geen configuratie-opties, voor het weergeven van andere types kun je gebruik maken van andere data component, of je eigen component maken. Bijvoorbeeld:

- _IBAN data_
- _number data_
- _URL data_
- _datetime_ data
- _multiline data_

## HTML

Gebruik het `<bdi>` HTML element voor Unicode text direction isolation. Gebruik ook het `<data>` element als je de `value` in een attribuut wilt opslaan.
