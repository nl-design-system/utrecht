---
"@utrecht/icon-react": minor
"@utrecht/component-library-react": minor
---

Moved the `Icon` component to the new `@utrecht/icon-react` package. `@utrecht/component-library-react` still exports it, so you do not need to change your imports.

Added the `icon` prop to `Icon`: it shows an icon from `@utrecht/icon/dist/icons.mjs` as an inline `<svg>`, without web components. For example `<Icon icon={utrechtIconArrow} />`.
