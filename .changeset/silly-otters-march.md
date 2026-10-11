---
"@utrecht/component-library-react": patch
---

Fix `UnorderedList` to apply `utrecht-unordered-list--level-{n}` modifier classes based on nesting depth, so that level-specific design tokens (such as marker style and font size) are applied correctly for nested lists (levels 1–8).
