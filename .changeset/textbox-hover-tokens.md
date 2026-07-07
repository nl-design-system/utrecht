---
"@utrecht/textbox-css": minor
"@utrecht/design-tokens": patch
---

Add `utrecht.textbox.hover.background-color`, `utrecht.textbox.hover.border-color` and `utrecht.textbox.hover.color` design tokens and apply them on the Textbox `:hover` state, as requested in #2716 for all form controls. The tokens are empty by default and fall back to the existing Textbox and Form Control tokens, so the default appearance is unchanged. Disabled and read-only states keep precedence over hover.
