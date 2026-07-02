---
"@utrecht/checkbox-css": minor
"@utrecht/custom-checkbox-css": minor
"@utrecht/design-tokens": patch
---

Add `utrecht.checkbox.checked.hover`, `utrecht.checkbox.checked.active`, `utrecht.checkbox.indeterminate.hover` and `utrecht.checkbox.indeterminate.active` design tokens (each with `background-color`, `border-color`, `border-width` and `color`) and apply them on the custom checkbox, so the checked and indeterminate states can be themed for hover and active interaction, as requested in #2716. The tokens are empty by default and fall back to the existing checked and indeterminate tokens, so the default appearance is unchanged. Disabled checkboxes keep precedence over hover and active.
