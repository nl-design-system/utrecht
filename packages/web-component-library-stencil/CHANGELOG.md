# @utrecht/web-component-library-stencil

## 2.0.0

### Major Changes

- ecf877a: Refactor the Alert component for more consistent token names and use flex instead of grid layout. Adding support for content and message sections.

  - Rename `utrecht.alert.icon.gap` to `utrecht.alert.column-gap`
  - Add `utrecht.alert.message.row-gap` token
  - Add `utrecht.alert.content.row-gap` token
  - Add `utrecht.alert.icon.size` token
  - Add `utrecht.alert.icon.inset-block-start` token
  - Add `utrecht-alert__content` class
  - Change implementation of layout from grid to flex

## 1.4.0

### Minor Changes

- 4037f4c: Add two new design tokens to "Badge counter":

  - `utrecht.badge-counter.min-block-size`
  - `utrecht.badge-counter.min-inline-size`: the primary token to configure the size.

  The following design token is now deprecated. Reason for deprecation: it does not follow naming conventions, to use existing CSS property names — "`min-size`" is a made-up property.

  - `utrecht.badge-counter.min-size`

- 5299695: Button now support two new design tokens for each appearance: `font-size` and a matching `line-height`. These are optional, by default the button still uses `utrecht.button.font-size` and `utrecht.button.line-height`.

  These are the 6 new design tokens:

  - `utrecht.button.primary-action.font-size`
  - `utrecht.button.primary-action.line-height`
  - `utrecht.button.secondary-action.font-size`
  - `utrecht.button.secondary-action.line-height`
  - `utrecht.button.subtle.font-size`
  - `utrecht.button.subtle.line-height`

## 1.3.0

### Minor Changes

- 5e6f551: Add support for bidirectional icons: icons that adapt to `dir="ltr"` and `dir="rtl"`. The following two icons are now bidirectional icons:

  - `<utrecht-icon-chevron-left></utrecht-icon-chevron-left>`
  - `<utrecht-icon-chevron-right></utrecht-icon-chevron-right>`

  This behavior can be turned off with the `direction="ltr"` attribute:

  ```html
  <utrecht-icon-chevron-left direction="ltr"></utrecht-icon-chevron-left>
  ```

## 1.2.1

### Patch Changes

- 0e2e4da: Fix rendering of the checkbox component in the combined indeterminate and checked state, to have an indeterminate icon instead of a checked icon.'

## 1.2.0

### Minor Changes

- f9c23c6: Add `utrecht.accordion.button.icon.gap` design token.

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
