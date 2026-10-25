---
"@utrecht/select-css": patch
---

Disabled Select no longer looks paler than a disabled Textbox in Chromium: reset the `opacity: 0.7` from the browser's user agent stylesheet, so the disabled colors from the design tokens are used as-is.
