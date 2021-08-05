# Web Components

If you want to use the components library, you can use custom elements in your HTML page to render the components. The npm package `@utrecht/web-component-library-stencil` contains the implementation of every web component, but each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.

## Getting started

Include the Design Token CSS variables:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/index.css" />
```

Combine it with the latest Web Components (for convenience you can use the unpkg CDN), for example:

```html
<script
  src="https://unpkg.com/@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js"
  type="module"
></script>
```

Then you can go ahead and see the result:

```html
<utrecht-html-content>
  <h1>Page styled with NL Design System</h1>
</utrecht-html-content>
```
