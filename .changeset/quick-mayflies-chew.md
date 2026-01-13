---
"@utrecht/component-library-vue": patch
---

Resolve type errors on dependencies update for Image component by aligning `<img>` `width` and `height` attribute typings with Vue’s `Numberish` type (`string | number`) instead of `CSSNumberish`.
