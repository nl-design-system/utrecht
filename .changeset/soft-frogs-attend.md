---
"@utrecht/card-css": major
"@utrecht/card-react": minor
"@utrecht/design-tokens": major
---

Updated the card component.

Breaking changes:

- Renamed the `utrecht-card--link` class name and mixin to `utrecht-card--has-link`.
- Removed the `utrecht.card.link.hover.text-decoration-thickness` token. Use `utrecht.card.hover.text-decoration-thickness` instead.
- Removed the `utrecht.card.content.row-gap` and `utrecht.card.content.padding-block-start` tokens. Each part of the card has its own padding instead: `padding-block-start`, `padding-block-end`, `padding-inline-start` and `padding-inline-end` for `utrecht.card.heading`, `utrecht.card.image`, `utrecht.card.body` and `utrecht.card.footer`. `utrecht.card.content.padding-block-end` stays, for the space below the last part.
- The whole card is clickable via a stretched link: `::after` on `.utrecht-card__link`. The card gets `position: relative`, and the focus ring moved from the card to the link.
- Card React: the card wrapper no longer has `role="link"`, `tabIndex` and `aria-labelledby`, so the card has one tab stop.
- Card React: the heading always has the `utrecht-heading-2` class name, for every `headingLevel`.

New features:

- Appearance variants: `neutral`, `warm`, `cool`, `soft` and `bright`.
- Image aspect ratios: `utrecht-card--16by9`, `utrecht-card--4by3` and `utrecht-card--1by1`. In Card React: `aspect="16:9"`, `"4:3"` or `"1:1"`.
- An arrow icon for cards with a link, at the end of the footer (`utrecht-card__arrow` in `utrecht-card__footer`). Card React also renders the footer for the arrow alone. You can hide the arrow with `arrowIcon={false}`.
- Hover, active and focus-visible styles, with the state class names `utrecht-card--hover`, `utrecht-card--focus`, `utrecht-card--focus-visible` and `utrecht-card--active`.
- A pre-heading above the heading (`utrecht-card__heading-group` and `utrecht-card__pre-heading`, `preHeading` in Card React) and a footer below the body (`utrecht-card__footer`, `footer` in Card React). The footer stays at the bottom of the card, so the footers of cards in a row line up.
- Design tokens for the new styles, including `utrecht.card.footer.column-gap`, `utrecht.card.footer.padding-inline-start` and `utrecht.card.footer.padding-inline-end`.

Fixes:

- No padding above the image area when it has no `img`.
- Images are cropped to the aspect ratio with `object-fit: cover`, also with the `utrecht-img` class name.
- Card React: without `href`, the heading is plain text instead of a link without `href`.
