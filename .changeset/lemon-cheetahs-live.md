---
"@utrecht/design-tokens": major
"@utrecht/alert-css": major
"@utrecht/components": major
"@utrecht/component-library-angular": major
"@utrecht/component-library-css": major
"@utrecht/component-library-react": major
"@utrecht/component-library-vue": major
"@utrecht/web-component-library-angular": major
"@utrecht/web-component-library-react": major
"@utrecht/web-component-library-stencil": major
"@utrecht/web-component-library-vue": major
---

Refactor the Alert component for more consistent token names and use flex instead of grid layout. Adding support for content and message sections.

- Rename `utrecht.alert.icon.gap` to `utrecht.alert.column-gap`
- Add `utrecht.alert.message.row-gap` token
- Add `utrecht.alert.content.row-gap` token
- Add `utrecht.alert.icon.size` token
- Add `utrecht.alert.icon.inset-block-start` token
- Add `utrecht-alert__content` class
- Change implementation of layout from grid to flex
