<!-- @license CC0-1.0 -->

<!-- markdownlint-disable first-line-h1 -->

## Theme color

To make the browser user interface match your websites surface background color, you can include the following code in the `<head>` element of your pages. Instead of the hex code `#012345` use the value of your surface background color design token.

```html
<meta name="theme-color" content="#012345" />
```

For projects that use JSX and React, the following code sample shows how to refer to the design token package to automatically use the most recent choice of color.

```jsx
import { utrechtSurfaceBackgroundColor } from "@utrecht/design-tokens/dist/index.mjs";

export const ThemeColor = () => <meta name="theme-color" content={utrechtSurfaceBackgroundColor} />;
```

See for more information: [`theme-color` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color)
