# @utrecht/web-component-library-stencil

## 1.1.0

### Minor Changes

- e2e932b8c7: support `cols` and `rows` properties for `utrecht-textarea` and `utrecht-form-field-textarea` web components
- af24025682: add `direction` property to `utrecht-button-group`
- 234f33d1b2: add `download` and `target` properties to `utrecht-link` and `utrecht-button-link` web components'

### Patch Changes

- 4e6413150d: render heading web components with `display: contents` for host element, to establish direct relationship between `<hgroup>`, `<h1>`/`<h2>`/`<h3>`/`<h4>`/`<h5>`/`<h6>` and `<p>` element. This affects `utrecht-heading-group`, `utrecht-pre-heading`, `utrecht-heading-1`, `utrecht-heading-2`, `utrecht-heading-3`, `utrecht-heading-4`, `utrecht-heading-5` and `utrecht-heading-6`.
- e340a7b2de: remove margin from `<p>` element in form field shadow DOM.
- be08c293bc: position form field error message between description and form control in `utrecht-form-field-textbox` and `utrecht-form-field-textarea` web components.
- d5413fe86f: use `dir="auto"` as default for web components `utrecht-textbox`, `utrecht-form-field-textbox`, `utrecht-textarea` and `utrecht-form-field-textarea`, to improve readability of right-to-left content.

## 1.0.1

### Patch Changes

- 0e434e0a19: fix rendering glitch in Firefox when hovering over a button

## 1.0.0

### Patch Changes

- c7cae76a0d: allow word wrap for URL data, so it is fully readable in print and on screen
