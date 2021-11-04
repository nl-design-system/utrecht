<!-- @license CC0-1.0 -->

# Separator

Scheidingslijnen worden gebruikt om de scanbaarheid van een lange contentpagina te vergroten.

## Terminologie

- **separator**, van de ARIA `role="separator"`. "hr" van `<hr>` uit HTML is te onduidelijk buiten de context van code, "horizontal rule" te specifieke beschrijving van de originele rendering in HTML. De "separator" zou er ook heel anders uit kunnen zien dan een "rule" (lijn), en bovendien kan er voor andere tekstrichtingen wel eens een verticale variant komen.

"Divider" is ook een vaak gehoorde term hiervoor, misschien moet deze voor vindbaarheid ook genoemd worden in de documentatie.

## Class names

- `utrecht-separator`

## Variant

- horizontaal

## Design tokens

We hebben de volgende CSS variabelen:

- `utrecht-separator-color`
- `utrecht-separator-width` - "width" is misschien verwarrend, voor de horizontale variant is "height" logischer. Wat zou een schrijf-richting-agnostische term hiervoor kunnen zijn?
- `utrecht-separator-margin-block-start`
- `utrecht-separator-margin-block-end`

## Visueel design Utrecht

8px dikke grijze lijn.
