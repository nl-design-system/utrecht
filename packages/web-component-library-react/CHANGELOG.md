# @utrecht/web-component-library-react

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

### Patch Changes

- Updated dependencies [ecf877a]
  - @utrecht/web-component-library-stencil@2.0.0

## 1.3.0

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

### Patch Changes

- Updated dependencies [4037f4c]
- Updated dependencies [5299695]
  - @utrecht/web-component-library-stencil@1.4.0

## 1.2.0

### Minor Changes

- 5e6f551: Add support for bidirectional icons: icons that adapt to `dir="ltr"` and `dir="rtl"`. The following two icons are now bidirectional icons:

  - `<utrecht-icon-chevron-left></utrecht-icon-chevron-left>`
  - `<utrecht-icon-chevron-right></utrecht-icon-chevron-right>`

  This behavior can be turned off with the `direction="ltr"` attribute:

  ```html
  <utrecht-icon-chevron-left direction="ltr"></utrecht-icon-chevron-left>
  ```

### Patch Changes

- Updated dependencies [5e6f551]
  - @utrecht/web-component-library-stencil@1.3.0

## 1.1.1

### Patch Changes

- 0e2e4da: Fix rendering of the checkbox component in the combined indeterminate and checked state, to have an indeterminate icon instead of a checked icon.'
- Updated dependencies [0e2e4da]
  - @utrecht/web-component-library-stencil@1.2.1

## 1.1.0

### Minor Changes

- f9c23c6: Add `utrecht.accordion.button.icon.gap` design token.

### Patch Changes

- Updated dependencies [f9c23c6]
  - @utrecht/web-component-library-stencil@1.2.0

## 1.0.2

### Patch Changes

- Updated dependencies [e2e932b8c7]
- Updated dependencies [4e6413150d]
- Updated dependencies [e340a7b2de]
- Updated dependencies [af24025682]
- Updated dependencies [234f33d1b2]
- Updated dependencies [be08c293bc]
- Updated dependencies [d5413fe86f]
  - @utrecht/web-component-library-stencil@1.1.0

## 1.0.1

### Patch Changes

- Updated dependencies [0e434e0a19]
  - @utrecht/web-component-library-stencil@1.0.1

## 1.0.0

### Patch Changes

- Updated dependencies [c7cae76a0d]
  - @utrecht/web-component-library-stencil@1.0.0
