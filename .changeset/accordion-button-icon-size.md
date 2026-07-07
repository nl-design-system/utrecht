---
"@utrecht/accordion-css": minor
---

Apply the existing `utrecht.accordion.button.icon.size` token. The accordion button icon now reserves its configured size as an inline column and exposes `--utrecht-icon-size` to icon children. Previously the token was defined (and flagged `figma-implementation: true`) but never applied in the CSS.

The icon column also makes the button label line up with the panel content: `padding-inline-start` plus the icon size equals the panel's `padding-inline-start`. The button gap is set through `--utrecht-button-column-gap` (the property the button actually reads) and defaults to `0`, so the label lands exactly on that line instead of overshooting it. The icon is centered within its column, and the unused `utrecht-accordion__button--rtl` mixin has been removed.
