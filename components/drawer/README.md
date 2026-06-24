<!-- @license CC0-1.0 -->

# Drawer

Een paneel aan de zijkant van een scherm, die geopend kan worden voor gerelateerde informatie, formulieren of acties.

## Onderdelen

Een Drawer kan optioneel uit de volgende onderdelen bestaan:

- `utrecht-drawer__header`: de header van de Drawer, doorgaans op een `<header>`, bijvoorbeeld met een titel en een sluitknop, met een optionele scheidingslijn eronder (`border-block-end`). Het onderdeel verzorgt de eigen padding en de rand; de layout van titel en sluitknop bepaalt de consument zelf.
- `utrecht-drawer__body`: de inhoud van de Drawer, doorgaans op een `<div>`; stapelt onderdelen met `row-gap`.
- `utrecht-drawer__footer`: de footer van de Drawer, doorgaans op een `<footer>`, bijvoorbeeld met acties, met een optionele scheidingslijn erboven (`border-block-start`).

Geef je de Drawer een header, body of footer, zet dan de eigen padding van de Drawer (`--utrecht-drawer-padding-*`) op `0`. De onderdelen verzorgen dan zelf de ruimte, zodat de scheidingslijnen de volle breedte kunnen beslaan en padding niet dubbel wordt opgeteld.
