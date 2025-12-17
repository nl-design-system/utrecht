# @utrecht/web-component-library-react

## 4.0.0

### Major Changes

- edac79f: - badge-status is no longer styled through common badge tokens but has its own set of tokens
  - badge-status has been renamed to status-badge, use @utrecht/status-badge-css instead of @utrecht/badge-status-css

### Patch Changes

- Updated dependencies [edac79f]
  - @utrecht/web-component-library-stencil@4.0.0

## 3.0.12

### Patch Changes

- Updated dependencies [a89b9af]
  - @utrecht/web-component-library-stencil@3.7.0

## 3.0.11

### Patch Changes

- 9b3cb1e: Release with npm provenance.
- Updated dependencies [9b3cb1e]
  - @utrecht/web-component-library-stencil@3.6.1

## 3.0.10

### Patch Changes

- 6a1dc0e: Updated peer dependencies for React 19 compatibility.

## 3.0.9

### Patch Changes

- Updated dependencies [7fc678f]
  - @utrecht/web-component-library-stencil@3.6.0

## 3.0.8

### Patch Changes

- Updated dependencies [8921e2b]
  - @utrecht/web-component-library-stencil@3.5.1

## 3.0.7

### Patch Changes

- Updated dependencies [85ed6c0]
  - @utrecht/web-component-library-stencil@3.5.0

## 3.0.6

### Patch Changes

- Updated dependencies [e71766c]
- Updated dependencies [7ba40dd]
  - @utrecht/web-component-library-stencil@3.4.0

## 3.0.5

### Patch Changes

- Updated dependencies [b2cb42d]
- Updated dependencies [b5c8990]
- Updated dependencies [94ddb19]
  - @utrecht/web-component-library-stencil@3.3.0

## 3.0.4

### Patch Changes

- Updated dependencies [cfb7a9b]
  - @utrecht/web-component-library-stencil@3.2.0

## 3.0.3

### Patch Changes

- Updated dependencies [61b06bc]
  - @utrecht/web-component-library-stencil@3.1.0

## 3.0.2

### Patch Changes

- Updated dependencies [b19733f]
  - @utrecht/web-component-library-stencil@3.0.1

## 3.0.1

### Patch Changes

- Updated dependencies [6dfa817]
  - @utrecht/web-component-library-stencil@3.0.0

## 3.0.0

### Major Changes

- c3660c1: Rename design token `utrecht.button.icon.gap` to `utrecht.button.column-gap`

### Minor Changes

- 24b4813: Add `slot="icon"` and `slot="label"` support to `utrecht-button` web component.

### Patch Changes

- Updated dependencies [200e34b]
- Updated dependencies [24b4813]
  - @utrecht/web-component-library-stencil@2.2.0

## 2.0.1

### Patch Changes

- Updated dependencies [8431fb9]
- Updated dependencies [d6bb92d]
- Updated dependencies [5695c6c]
- Updated dependencies [9aa2be4]
- Updated dependencies [48ccd57]
  - @utrecht/web-component-library-stencil@2.1.0

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
