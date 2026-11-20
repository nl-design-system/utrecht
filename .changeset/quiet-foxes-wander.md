---
"@utrecht/select-css": minor
---

Show a chevron in `currentColor` when the theme does not set `--utrecht-select-background-image`, instead of no icon at all. Without padding tokens, `padding-inline-end` is now `2.4em`, so the text does not run under the chevron.

If you show your own icon without these tokens, set `--utrecht-select-background-image: none` to hide the new chevron, and set `--utrecht-select-padding-inline-end` to keep your padding.
