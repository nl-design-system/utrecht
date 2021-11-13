<!-- @license CC0-1.0 -->

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

## `Content-Security-Policy`

Autodiscovery of the nonce will ensure the CSS for lazy loaded components can be loaded in pages with a strict CSP configuration. To safely configure the nonce, render a `style` element early in the `<head>` of your HTML page, with a cryptographically strong random value in the `nonce` attribute that you must generate for each request. For example:

```html
<html>
  <head>
    <style nonce="2346ad27d7568ba9896f1b7da6b5991251debdf2"></style>
  </head>
</html>
```

The nonce must match with the nonce you provide in the `Content-Security-Policy` HTTP header for the web page. For example:

```text
Content-Security-Policy: default-src 'self'; style-src 'self' 'nonce-2346ad27d7568ba9896f1b7da6b5991251debdf2'
Content-Type: text/html
```

**You MUST NOT use a hardcoded value for the nonce.** Do not copy the example code as-is.
