---
"@utrecht/textarea-css": major
---

Remove the `utrecht.textarea.border-bottom-width`, `utrecht.textarea.border-block-end-width` and `utrecht.textarea.invalid.border-block-end-width` tokens. The bottom border now has the same width as the other sides, from `utrecht.textarea.border-width`. The CSS also no longer uses `--utrecht-form-control-border-block-end-width` and `--utrecht-form-control-invalid-border-block-end-width`.

Migration: remove these custom properties from your theme. Use `utrecht.textarea.border-width` and `utrecht.textarea.invalid.border-width` to set the border width.
