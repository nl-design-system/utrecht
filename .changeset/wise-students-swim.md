---
"@utrecht/component-library-react": major
"@utrecht/design-tokens": major
"@utrecht/link-list-css": major
"@utrecht/components": major
"@utrecht/component-library-css": major
---

Rename tokens in the Link list component, because they should be on `link` instead of on `item`. "Item" currently only exists in CSS, but is not necessary to build the Link list in Figma.

- Rename `utrecht.link-list.item.font-weight` to `utrecht.link-list.link.font-weight`.
- Rename `utrecht.link-list.item.column-gap` to `utrecht.link-list.link.column-gap`.
