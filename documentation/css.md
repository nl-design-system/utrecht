<!-- @license CC0-1.0 -->

# Design system ten op zichte van CSS

## `font-size`

- Gebruik geen `font-size` kleiner dan `16px`.
- Gebruik een

## `font-weight`

- Let op wanneer je `font-weight` gebruikt bij states zoals `hover`, `focus` of `aria-current`, dat er geen _layout shift_ ontstaat. Zie ook: [Bold on Hover… Without the Layout Shift — CSS Tricks](https://css-tricks.com/bold-on-hover-without-the-layout-shift/).
- Bij een `font-weight` lager dan `400` wordt het contrast met de achtergrond lager, kies eventueel een kleur met meer contrast.
- We gebruiken `400` en `700` in plaats van keywords zoals `normal` en `bold`, omdat ze als design token duidelijker zijn in andere platforms.

## `overflow: hidden`

Let op dat de focus ring van componenten binnen zo'n element volledig zichtbaar is, bijvoorbeeld door `padding` te gebruiken die groter is dan `calc(var(--utrecht-focus-outline-width, 0) + var(--utrecht-focus-outline-offset, 0))`.

## `pointer-events: none`

Gebruik `pointer-events: none` niet om een interactief element _disabled_ te maken, want toetsenbord gebruikers kunnen dan nog wel het component activeren. Gebruik een HTML attribuut zoals `disabled`, of gebruik `event.preventDefault()` in een script.

## `top`, `right`, `bottom` en `left`

- Gebruik in de meeste gevallen `inset-inline-start` in plaats van `left`.
- Gebruik in de meeste gevallen `inset-inline-end` in plaats van `right`.
- Gebruik in de meeste gevallen `inset-block-start` in plaats van `top`.
- Gebruik in de meeste gevallen `inset-block-end` in plaats van `bottom`.

## `user-select: none`

Onder andere de volgende componenten moeten `user-select: none;` gebruiken:

- _form controls_ zonder tekstinvoer:
  - _checkbox_
  - _radio button_
  - _toggle button_
- knoppen
  - _button_
  - _button that looks like a link_
- componenten die niet moeten reageren op interactie (inerte componenten)
  - _backdrop_
