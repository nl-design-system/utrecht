<!-- @license CC0-1.0 -->

# Component library for Vue apps

The `@utrecht/component-library-vue` package contains Vue implementations of various components. You can use this package in Vue apps, both client side and server side, to render the right HTML elements with the Utrecht design system class names.

The CSS components that implement the Utrecht design system class names are published in a separate npm package, so don't forget to install and include `@utrecht/component-library-css` too for the styling of the white-label components, as well as a package with design tokens for your theme.

## Stability of the components

The Vue components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

## Vue Component or Vue Web Component?

We currently have two packages with Vue components, and you might wonder which to choose. Our Web Components are still experimental and since the Shadow DOM prevents you from simply extending the CSS implementation, you wouldn't be able to easily tweak it to your needs. Therefore we suggest using the Vue components when they are available.

In the future this advice might change since some components could be released exclusively as Web Component while others will remain available as CSS component with Vue wrapper only.

## Getting started

```shell
npm install --save-dev --save-exact @utrecht/component-library-vue
```

With this package available, you can render any component from the library in your page. For example:

```vue
<script setup lang="ts">
import { Document, Heading1 } from "@utrecht/component-library-vue";
</script>

<template>
  <!-- Class name to apply the design tokens from the theme -->
  <Document class="utrecht-theme">
    <Heading1>Page styled with NL Design System</Heading1>
  </Document>
</template>

<!--Package with Utrecht design tokens for the white-label components
Substitute with your another theme for other organisations. -->
<style src="@utrecht/design-tokens/dist/index.css"></style>

<style src="@utrecht/component-library-vue/dist/style.css"></style>
```

## Components overview

We make components for Vue available when needed in a project. Not every component is available yet, and we welcome you to discuss contributions.

Currently the following components are available:

```js
import {
  Article,
  BadgeStatus,
  Button,
  ButtonGroup,
  Checkbox,
  Document,
  FormField,
  FormFieldset,
  FormFieldsetLegend,
  FormLabel,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Link,
  Paragraph,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  RadioButton,
  Select,
  SelectOption,
  Textbox,
  Textarea,
} from "@utrecht/component-library-vue";
```

## Contributing

When a project needs a component from the design system that already exists as CSS component with an HTML example, they will create a Vue component for it internally. Projects that have new Vue components can let the design system team know and create a pull request to include it in this component library. No
