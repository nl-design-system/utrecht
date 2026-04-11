<!-- @license CC0-1.0 -->

# Root

Onderlaag waarin basiskeuzes worden gemaakt voor alle componenten die in de website zitten.

## Doelen

- Deze afmeting van deze component is de maximaal beschikbare ruimte.
- De achtergrondkleur is de basis voor content.
- De kleur van de tekst is leesbaar op de achtergrond.
- Het lettertype is het standaard neutrale lettertype voor componenten.
- Scroll wanneer het nodig is.

Edge cases:

- Moet niet in de breedte scrollen wanneer een border op `:root` wordt gezet (WCAG 1.4.10)

Door het aanbieden van goee root component kunnen anti-patterns voorkomen of genezen worden.

- Anti-aliasing wordt vaak aangepast door ongewenste `font-smoothing: antialiased;`.
- Overschrijven van de root font-size, waardoor de `rem` waarde wordt aangepast
- De `<body>` element scrollbaar maken in plaats van het `<html>` element

## Varianten

Er zijn alleen varianten in code, niet in design.

- Variant die op een `html`-element is toegepast
- Variant die op een `body`-element is toegepast
- Variant die op een `div`-element is toegepast

## Acceptatiecriteria voor toegankelijkheid

...

- 1.1.1: niet van toepassing. Misschien: doe geen watermerk als achtergrond-afbeelding, zoals "Concept" of "Specimen"?-
- 1.2.1: niet van toepassing
- 1.2.2: niet van toepassing
- 1.2.3: niet van toepassing
- 1.2.4: niet van toepassing
- 1.2.5: niet van toepassing
- 1.2.6: niet van toepassing
- 1.2.7: niet van toepassing
- 1.2.8: niet van toepassing
- 1.2.9: niet van toepassing
- 1.3.1: misschien `role="group"`, `role="document"` of `role="application"` wanneer er nog content buiten de root staat?
- 1.3.2:
  - stel `dir="ltr"` of `dir="rtl"` in
  - werkt met CSS logical properties
- als je de root uitzoomt, dan moet de focus ring nog steeds voldoende duidelijk zijn
- 2.4.7 Focus zichtbaar: wanneer de Root component een scroll container is, dan moet je `scroll-padding` properties in kunnen stellen als je sticky components hebt.
