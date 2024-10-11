<!-- @license CC0-1.0 -->

# Component library for React

You can use React components from [`@utrecht/component-library-react` npm package](https://www.npmjs.com/package/@utrecht/component-library-react) for your website. The components are "white label", which means they do not have Utrecht branding — you can choose your own design with design tokens.

You can use this package in React apps, both client side and server side, to render the right HTML elements with the Utrecht design system class names.

Documentation is in the [Storybook for Utrecht React components](http://nl-design-system.github.io/utrecht/storybook-react/).

## Getting started

```shell
npm install --save-dev --save-exact @utrecht/component-library-react
```

With this package available, you can render any component from the library in your page. For example:

```jsx
import { Document, Heading1 } from "@utrecht/component-library-react/dist/css-module";

export const MyPage = () => (
  <Document>
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
);
```

If you don't want to use CSS injection, you can import the same components from another path (without `/dist/css-module`):

```jsx
import { Document, Heading1 } from "@utrecht/component-library-react";

export const MyPage = () => (
  <Document>
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
);
```

## Add the design using a theme

Add your own design using a theme.

1. [Make your own theme based on design tokens.](https://nldesignsystem.nl/handboek/developer/thema-maken/)
2. Load the CSS for your theme. It contains CSS variables for the visual design of the components.
3. Insert the CSS class name for your theme in your HTML code, at the level above the components.

### Add the Utrecht theme

Install the npm package that contains the CSS:

```shell
npm install --save-dev @utrecht/design-tokens
```

In many React projects it is possible to import the CSS file in JavaScript. Add the `import` for the theme CSS, and use the `utrecht-theme` class name at the level above the React components.

```jsx
import { Document, Heading1 } from "@utrecht/component-library-react";
import "@utrecht/design-tokens/dist/index.css";

export const MyPage = () => (
  <div className="utrecht-theme">
    <Document>
      <Heading1>Page styled with NL Design System</Heading1>
    </Document>
  </div>
);
```

## TypeScript

TypeScript declarations for React componenten are shipped by default in this package, you don't need to install them separately.

## Support

Ask you support questions in the [#nl-design-system-developers Slack channel](https://codefornl.slack.com/archives/C01DAT4TRPF).

## React Component or React Web Component?

We currently have two packages with React components, and you might wonder which to choose. Our Web Components are still experimental and since the Shadow DOM prevents you from simply extending the CSS implementation, you wouldn't be able to easily tweak it to your needs. Therefore we suggest using the React components when they are available.

In the future this advice might change since some components could be released exclusively as Web Component while others will remain available as CSS component with React wrapper only.

Additionally you should also include the CSS for the components and the design tokens to configure the CSS components. For example:

```js
// Package with the HTML rendering of components
import { Document } from "@utrecht/component-library-react/Document";
import { Heading1 } from "@utrecht/component-library-react/Heading1";

// Package with CSS for white-label components
import "@utrecht/component-library-css";

// Package with Utrecht design tokens for the white-label components
// Substitute with your another theme for other organizations.
import "@utrecht/design-tokens/dist/index.css";

export const MyPage = () => (
  // Class name to apply the design tokens from the theme
  <Document className="utrecht-theme">
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
);
```

Only when you use the `<HTMLContent/>` component, you should import the `html.css` from the `component-library-css`

```jsx
import { HTMLContent } from "@utrecht/component-library-react";

import "@utrecht/component-library-css/dist/html.css";
import "@utrecht/design-tokens/dist/index.css";

export const MyPage = () => (
  // Class name to apply the design tokens from the theme
  <HTMLContent
    className="utrecht-theme"
    dangerouslySetInnerHTML={{
      _html: `<h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>`,
    }}
  />
);
```

## Stability of the components

Most components are used in production for Utrecht websites, but it is likely that some APIs will between releases. For breaking changes we release a new major version, so pay special attention to the changelog of major versions.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.
