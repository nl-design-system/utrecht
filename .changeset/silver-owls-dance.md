---
"@utrecht/select-css": major
---

Remove the `utrecht.select.border-bottom-width`, `utrecht.select.border-block-end-width` and `utrecht.select.invalid.border-block-end-width` tokens. The bottom border now has the same width as the other sides, from `utrecht.select.border-width`. The CSS also no longer uses `--utrecht-form-control-border-block-end-width` and `--utrecht-form-control-invalid-border-block-end-width`.

Migration: remove these custom properties from your theme. Use `utrecht.select.border-width` and `utrecht.select.invalid.border-width` to set the border width.
