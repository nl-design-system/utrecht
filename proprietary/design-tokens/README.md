# Design Tokens for the Utrecht Design System

**This project is very much WORK IN PROGRESS and is released as _alpha_ version. Always define the exact version you want to use, and test for breaking changes before upgrading to a newer alpha release.**

Design tokens are design decisions for our design system, in this case maintained in JSON files, and distributed in various other code languages for easy reuse.

The design tokens in this package serve as single source of truth for the look and feel for our websites, apps and designs of new products and services.

## List of all design tokens

To find out what design tokens are available, browser through the `.style-dictionary.json` files in the `src/` directory.

We currently don't have any additional documentation for every specific design token.

### Brand design tokens

Brand design tokens describe design choices regarding color and typography. We provide a limited choice of fonts and a limited color palette, please avoid choosing other fonts and colors.

### Common design tokens

Common design tokens are relevant to a wide range of components and situations. They help provide a consistent user experience. We provide design tokens for feedback colors (error, success, et cetera), the focus state, spacing, and so on. Components should reuse design tokens from the common layer where possible, to achieve a consistent look and feel.

### Component design tokens

Design decisions at a component level, to make components look a very specific way. They are applied by the component library of the design system.

## Files in this package

### `dist/theme/index.css`

Opt-in way to apply all the CSS variables to HTML elements with the `utrecht-theme` class name:

```html
<!DOCTYPE html>
<html class="utrecht-theme">
  <!-- var(--utrecht-button-font-family) works here...! -->
</html>
```

This method is the preferred way to style the page.

### `dist/index.css`

Automatically applies all the CSS variables to HTML elements to the `:root` element:

```html
<!DOCTYPE html>
<html>
  <!-- var(--utrecht-button-font-family) works here...! -->
</html>
```

This method should only be used in case there is no control over the HTML template and the `utrecht-theme` class name cannot be included.

### `dist/property.css`

Experimental CSS `@property` definitions for the design tokens that are configurable via CSS custom properties. Including these definitions is not necessarily side-effect free: with `syntax` _invalid values for custom properties will be ignored_, and `inherits` and `initial-value` declarations can influence behavior. Because [not all browsers support the `@property` declaration](https://caniuse.com/mdn-css_at-rules_property), including this file can result in rendering differences between browsers.

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/design-tokens/dist/property.css" />
```

This file should only be included when you have visual regression test for both browsers that do and don't support `@property`.

### `dist/index.js`

Use files from this package in JavaScript projects, for example in React Native or Storybook:

```js
import { utrechtButtonFontSize } from "@utrecht/design-tokens/dist/index.js";
```

### `dist/_variables.scss`

```scss
@import "~@utrecht/design-tokens/dist/variables";

button {
  font-size: $utrecht-button-font-size;
}
```

SCSS variables are not the preferred way to style components, it is better to use CSS variables, because they can be configured differently in a specific context, whereas SCSS variables are given a fixed value at build-time.

However, SCSS variables could be very useful to re-use values where CSS variables cannot be used, like inside CSS media queries:

```scss
@import "~@utrecht/design-tokens/dist/variables";

@media (min-width: $utrecht-viewport-scale-xl-width) {
  --utrecht-heading-1-font-size: 3rem;
}
```

SCSS variables are also useful in the process of incrementally migrating away from your a codebase that currently uses SCSS, such as a website built with [Bootstrap 4 components](https://getbootstrap.com/docs/4.6/getting-started/theming/), by already using the design tokens as single source of truth. For example:

```scss
@import "../node_modules/bootstrap/scss/bootstrap";

$body-bg: $utrecht-document-background-color;
$body-color: $utrecht-document-color;
```

## CSS variables

To use the design tokens in your site via CSS variables, first include the design token definitions in the `<head>` section of your HTML page:

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/design-tokens/dist/index.css" />
```

Now the CSS variables will be available and you can use of all the design tokens:

```css
.my-button {
  background-color: var(--utrecht-color-red-50);
  color: var(--utrecht-color-white);
}
```

## SCSS variables

## Contributing

The design tokens are stored in JSON files so we can use the design token translation tool [Style Dictionary](https://amzn.github.io/style-dictionary/) to make them available in many code languages. We use `.style-dictionary.json` as file extension for our design token definitions, to tell them apart from regular and unrelated `.json` files.

Style Dictionary [only recognizes one nesting level per file](https://github.com/amzn/style-dictionary/issues/366), so be careful to not to mix nesting levels in one file and separate them into multiple files.

The following example doesn't work, because the CSS output would only be `--utrecht-button-focus-background-color: navy`.

```json
{
  "utrecht": {
    "button": {
      "background-color": "blue",
      "focus": {
        "background-color": "navy"
      }
    }
  }
}
```

Organize the design tokens in multiple files instead:

`block.style-dictionary.json`:

```json
{
  "utrecht": {
    "button": {
      "background-color": "blue",
      "focus": {
        "background-color": "navy"
      }
    }
  }
}
```

`modifier.style-dictionary.json`:

```json
{
  "utrecht": {
    "button": {
      "background-color": "blue",
      "focus": {
        "background-color": "navy"
      }
    }
  }
}
```

### CSS property definitions

Design tokens in Style Dictionary JSON files can include [CSS custom property definitions](https://drafts.css-houdini.org/css-properties-values-api/#the-registerproperty-function). Using a custom formatter we output a CSS file with corresponding `@property` declarations.

```json
{
  "example-color": {
    "css": { "syntax": "<color>", "inherits": true }
  },
  "example-font-family": {
    "css": { "syntax": "*", "inherits": true }
  },
  "example-text-align": {
    "css": { "syntax": "start | end", "inherits": true }
  }
}
```

`syntax`: [any supported name](https://drafts.css-houdini.org/css-properties-values-api/#supported-names), a list of tokens and `*` are allowed. Required.

`inherits`: typically set to `true`. While `"inherits": false` is supported, it is discouraged because not all target browsers support this yet. Required.

`initialValue`: also supported, but currently discouraged because not all browsers support `@property` yet and it would result in significant rendering differences between supporting and non-supporting target browsers.

## License

Copyright © 2021 Gemeente Utrecht. All rights reserved.

The open source license does NOT apply to files in this directory.

Applying design elements from this project is strictly prohibited for organisations that are not part of the Municipality of Utrecht.

This project is part of a community iniative to use NL Design System components for projects that need to adhere to the Utrecht Design System. Teams from the central Municipality of Utrecht, as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.
