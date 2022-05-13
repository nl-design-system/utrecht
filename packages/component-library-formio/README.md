<!-- @license CC0-1.0 -->

# Form.io Components

The `@utrecht/component-library-formio` package contains implementations of various form related components. It currently is a mix of CSS components and Web components. This means you need to install the following three packages:

## Installation

```shell
npm install --save-dev --save-exact \
  @utrecht/component-library-css \
  @utrecht/component-library-formio \
  @utrecht/web-component-library-stencil
```

Additionally, having the core Form.io packages installed is a prerequisite:

```shell
npm install --save-dev --save-exact formiojs react-formio
```

Configure Form.io to use our custom components instead by including the following code in your app once:

```ts
import { Formio, Templates } from "react-formio";
import { components, templates } from "@utrecht/component-library-formio";

Formio.use({ components });
Templates.current = templates;
```

Since the implementation of the web components needs to be loaded in the browser, include the following effect to import web component library from `@utrecht/web-component-library-stencil`, in Next.js this would be in `_app.ts`:

```js
useEffect(() => {
  import("@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js");
}, []);
```

## Create a form

Because the components use Web components internally, it is important to include the web components in the allow list of [DOMPurify](https://github.com/cure53/DOMPurify), which would otherwise remove these essential custom elements as part of the cross-site scripting mitigations:

```jsx
import { Form } from 'react-formio';
import { sanitizeConfig } from "@utrecht/component-library-formio";

export const Page () => (<Form options={{ sanitizeConfig }}/>)
```

Every `<Form>` element must be configured with the correct `sanitizeConfig` settings, otherwise the form inputs cannot be displayed.

## Theming

To use the Utrecht theme for the components, include the design tokens CSS in your `angular.json`:

```shell
npm install --save-dev --save-exact @utrecht/design-tokens
```

Include the CSS variables in your page, and apply the `utrecht-theme` class name.

```js
import "@utrecht/design-tokens/dist/index.css";
```
