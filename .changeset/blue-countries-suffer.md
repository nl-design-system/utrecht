---
"@utrecht/web-component-library-stencil": minor
"@utrecht/icon": minor
"@utrecht/web-component-library-angular": minor
"@utrecht/web-component-library-react": minor
"@utrecht/web-component-library-vue": minor
---

Add support for bidirectional icons: icons that adapt to `dir="ltr"` and `dir="rtl"`. The following two icons are now bidirectional icons:

- `<utrecht-icon-chevron-left></utrecht-icon-chevron-left>`
- `<utrecht-icon-chevron-right></utrecht-icon-chevron-right>`

This behavior can be turned off with the `direction="ltr"` attribute:

```html
<utrecht-icon-chevron-left direction="ltr"></utrecht-icon-chevron-left>
```
