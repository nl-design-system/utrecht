---
"@utrecht/select-css": patch
---

Show a chevron in `currentColor` when the theme does not set `--utrecht-select-background-image`, instead of no icon at all. Without padding tokens, `padding-inline-end` is `2.4em`, so the text does not run under the chevron.
