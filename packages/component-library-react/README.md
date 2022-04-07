<!-- @license CC0-1.0 -->

# Component library for React apps

The `@utrecht/component-library-react` package contains React implementations of various components. You can use this package in React apps, both client side and server side, to render the right HTML elements with the design system class names.

Combine this with other packages for the full experience: you also need to add the package with CSS to style these components, as well as the package with design tokens for your theme.

## Getting started

```shell
npm install --save-dev @utrecht/component-library-react
```

With this package available, you can render any component from the library in your page. For example:

```jsx
import { Document } from "@utrecht/component-library-react/dist/Document";
import { Heading1 } from "@utrecht/component-library-react/dist/Heading1";

export const MyPage = () => (
  <Document>
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
);
```

Additionally you should also include the CSS for the components and the design tokens to configure the CSS components. For example:

```js
// Package with the HTML rendering of components
import { Document } from "@utrecht/component-library-react/dist/Document";
import { Heading1 } from "@utrecht/component-library-react/dist/Heading1";

// Package with CSS for white-label components
import "@utrecht/component-library-css/dist/bem.css";

// Package with Utrecht design tokens for the white-label components
// Substitute with your another theme for other organisations.
import "@utrecht/design-tokens/dist/theme/index.css";

export const MyPage = () => (
  // Class name to apply the design tokens from the theme
  <Document className="utrecht-theme">
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
);
```
