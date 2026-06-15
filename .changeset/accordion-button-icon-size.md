---
"@utrecht/accordion-css": minor
---

Apply the existing `utrecht.accordion.button.icon.size` token. The accordion button icon now reserves its configured size as an inline column and exposes `--utrecht-icon-size` to icon children, so the icon and the panel text line up predictably. Previously the token was defined (and flagged `figma-implementation: true`) but never applied in the CSS.
