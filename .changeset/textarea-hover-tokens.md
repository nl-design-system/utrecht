---
"@utrecht/textarea-css": minor
"@utrecht/design-tokens": patch
---

Add `utrecht.textarea.hover.background-color`, `utrecht.textarea.hover.border-color` and `utrecht.textarea.hover.color` design tokens and apply them on the Textarea `:hover` state, as requested in #2716 for all form controls. The tokens are empty by default and fall back to the existing Textarea and Form Control tokens, so the default appearance is unchanged. Disabled and read-only states keep precedence over hover.
