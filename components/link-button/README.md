<!-- @license CC0-1.0 -->

# Link button: button met uiterlijk van een link

Een button met het uiterlijk van een link gebruik je binnen formulieren en applicaties, wanneer de gebruiker moet kunnen navigeren naar een andere pagina, en je op die plaats in de user interface normaalgesproken een button gebruikt. Bijvoorbeeld: een button om naar de vorige stap in een formulier te gaan, terwijl de ingevulde informatie van de huidige stap wel opgeslagen wordt.

Gebruik deze component niet op standaard informatieve webpagina's, gebruik dan een gewone link.

## States

- active
- hover
- focus
- focus visible

Er is geen `visited` state, want buttons hebben geen visited state.

Er is geen `disabled` state, want links hebben geen disabled state.

## Design tokens

Voor de layout van de component worden de design tokens van `utrecht-button` gebruikt, voor de kleur en het uiterlijk van inhoud en interactieve states worden de design tokens van `utrecht-link` gebruikt. Op dit moment heeft `utrecht-link-button` nog geen eigen design tokens.
