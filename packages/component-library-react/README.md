<!-- @license CC0-1.0 -->

# Component library for React apps

The `@utrecht/component-library-react` package contains React implementations of various components. You can use this package in React apps, both client side and server side, to render the right HTML elements with the Utrecht design system class names.

The CSS components that implement the Utrecht design system class names are published in a separate npm package, so don't forget to install and include `@utrecht/component-library-css` too for the styling of the white-label components, as well as a package with design tokens for your theme.

## Stability of the components

The React components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

## React Component or React Web Component?

When you're working on a React project and the React component is available, currently you should probably use the React component.

The web components are still experimental. In the future some components might be most convenient to use as web component, and some components might be released exclusively as web component.

## Getting started

```shell
npm install --save-dev --save-exact @utrecht/component-library-react
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

## Components overview

We make components for React available when needed in a project. Not every component is available yet, and we welcome you to discuss contributions.

Currently the following components are available:

```js
import { Article } from "@utrecht/component-library-react/dist/Article";
import { Backdrop } from "@utrecht/component-library-react/dist/Backdrop";
import { Button } from "@utrecht/component-library-react/dist/Button";
import { Checkbox } from "@utrecht/component-library-react/dist/Checkbox";
import { Document } from "@utrecht/component-library-react/dist/Document";
import { Fieldset } from "@utrecht/component-library-react/dist/Fieldset";
import { FieldsetLegend } from "@utrecht/component-library-react/dist/FieldsetLegend";
import { FormField } from "@utrecht/component-library-react/dist/FormField";
import { FormFieldDescription } from "@utrecht/component-library-react/dist/FormFieldDescription";
import { FormLabel } from "@utrecht/component-library-react/dist/FormLabel";
import { HTMLContent } from "@utrecht/component-library-react/dist/HTMLContent";
import { Heading1 } from "@utrecht/component-library-react/dist/Heading1";
import { Heading2 } from "@utrecht/component-library-react/dist/Heading2";
import { Heading3 } from "@utrecht/component-library-react/dist/Heading3";
import { Heading4 } from "@utrecht/component-library-react/dist/Heading4";
import { Heading5 } from "@utrecht/component-library-react/dist/Heading5";
import { Heading6 } from "@utrecht/component-library-react/dist/Heading6";
import { Link } from "@utrecht/component-library-react/dist/Link";
import { OrderedList } from "@utrecht/component-library-react/dist/OrderedList";
import { OrderedListItem } from "@utrecht/component-library-react/dist/OrderedListItem";
import { Page } from "@utrecht/component-library-react/dist/Page";
import { PageContent } from "@utrecht/component-library-react/dist/PageContent";
import { PageFooter } from "@utrecht/component-library-react/dist/PageFooter";
import { PageHeader } from "@utrecht/component-library-react/dist/PageHeader";
import { Paragraph } from "@utrecht/component-library-react/dist/Paragraph";
import { RadioButton } from "@utrecht/component-library-react/dist/RadioButton";
import { Select, SelectOption } from "@utrecht/component-library-react/dist/Select";
import { Separator } from "@utrecht/component-library-react/dist/Separator";
import { Surface } from "@utrecht/component-library-react/dist/Surface";
import { Table } from "@utrecht/component-library-react/dist/Table";
import { TableBody } from "@utrecht/component-library-react/dist/TableBody";
import { TableCaption } from "@utrecht/component-library-react/dist/TableCaption";
import { TableCell } from "@utrecht/component-library-react/dist/TableCell";
import { TableFooter } from "@utrecht/component-library-react/dist/TableFooter";
import { TableHeader } from "@utrecht/component-library-react/dist/TableHeader";
import { TableHeaderCell } from "@utrecht/component-library-react/dist/TableHeaderCell";
import { TableRow } from "@utrecht/component-library-react/dist/TableRow";
import { Textarea } from "@utrecht/component-library-react/dist/Textarea";
import { Textbox } from "@utrecht/component-library-react/dist/Textbox";
import { URLValue } from "@utrecht/component-library-react/dist/URLValue";
import { UnorderedList } from "@utrecht/component-library-react/dist/UnorderedList";
import { UnorderedListItem } from "@utrecht/component-library-react/dist/UnorderedListItem";
```

Alternatively it is possible to include them via the collection of components too, but be careful: you will likely need to take additional steps prevent your site from also including the code for components you don't actually use. Including unused components would negatively impact the performance of your site.

For example:

```js
import { Document, Heading1, Link, Paragraph } from "@utrecht/component-library-react";
```

## Contributing

When a project needs a component from the design system that already exists as CSS component with an HTML example, they will create a React component for it internally. Projects that have new React components can let the design system team know and create a pull request to include it in this component library. No
