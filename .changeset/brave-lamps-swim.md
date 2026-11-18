---
"@utrecht/textbox-css": major
---

Remove the `utrecht.textbox.border-bottom-width` and `utrecht.textbox.border-block-end-width` tokens. The bottom border now has the same width as the other sides, from `utrecht.textbox.border-width`. The CSS also no longer uses `--utrecht-textbox-invalid-border-bottom-width`, `--utrecht-form-control-border-bottom-width` and `--utrecht-form-control-invalid-border-bottom-width`.

Migration: remove these custom properties from your theme. Use `utrecht.textbox.border-width` and `utrecht.textbox.invalid.border-width` to set the border width.
