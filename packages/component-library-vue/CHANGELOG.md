# @utrecht/component-library-vue

## 3.0.0

### Major Changes

- edac79f: - badge-status is no longer styled through common badge tokens but has its own set of tokens
  - badge-status has been renamed to status-badge, use @utrecht/status-badge-css instead of @utrecht/badge-status-css

## 2.4.1

### Patch Changes

- 9b3cb1e: Release with npm provenance.

## 2.4.0

### Minor Changes

- 7fc678f: Button Group has component is now deprecated, because it has a new name: Action Group. Please migrate to the new Action Group component, which apart from the name is identical.

  The Button Group component remains available for some time to give you opportunity to migrate your code, but it will be removed in an upcoming major release.

## 2.3.1

### Patch Changes

- ca024bf: Make the empty state reactive in DataListValue.vue

## 2.3.0

### Minor Changes

- 7905eff: Add the `HtmlContent` container component for styling vanilla HTML.

## 2.2.0

### Minor Changes

- 200e34b: Add `utrecht.number-badge.border-color` and `utrecht.number-badge.border-width` design tokens.

## 2.1.0

### Minor Changes

- 8431fb9: Add the following design tokens to breadcrumb navigation:

  - `utrecht.breadcrumb-nav.line-height`
  - `utrecht.breadcrumb-nav.link.active.color`
  - `utrecht.breadcrumb-nav.link.active.text-decoration`

- d6bb92d: Add Number badge component as replacement for Badge counter
- 48ccd57: Support bold form controls.

  Add the following design tokens:

  - `utrecht.form-control.font-weight` (common token)
  - `utrecht.listbox.font-weight`
  - `utrecht.select.font-weight`
  - `utrecht.textarea.font-weight`
  - `utrecht.textbox.font-weight`

### Patch Changes

- 5695c6c: Improve table component CSS to explicitly fallback to `background-color: transparent` to have a valid CSS value. ([GitHub Issue nl-design-system/utrecht#2435](https://github.com/nl-design-system/utrecht/issues/2435))
- 9aa2be4: Fix regression in `utrecht.button.font-family` support.

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

## 1.2.0

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

## 1.1.1

### Patch Changes

- 62f1157: Fix styling of list items of unordered lists in Vue.

## 1.1.0

### Minor Changes

- f9c23c6: Add `utrecht.accordion.button.icon.gap` design token.

## 1.0.1

### Patch Changes

- 0e434e0a19: fix rendering glitch in Firefox when hovering over a button

## 1.0.0

### Patch Changes

- c7cae76a0d: allow word wrap for URL data, so it is fully readable in print and on screen
- 28a3ef848a: Support rendering of `<select>` element with multiple attribute.
