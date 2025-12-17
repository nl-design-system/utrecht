# @utrecht/web-component-library-stencil

## 4.0.0

### Major Changes

- edac79f: - badge-status is no longer styled through common badge tokens but has its own set of tokens
  - badge-status has been renamed to status-badge, use @utrecht/status-badge-css instead of @utrecht/badge-status-css

## 3.7.0

### Minor Changes

- a89b9af: wijk iconen update

  - Changed and added header groups
  - Added discription for icon groups
  - UtrechtIconFlickr
  - UtrechtIconPinteresrt
  - UtrechtIconBouwProjecten
  - UtrechtIconStandaardProjecten
  - UtrechtIconVerkeersProjecten
  - UtrechtIconCoffee
  - UtrechtIconEnergieProjecten
  - UtrechtIconGroenProjecten
  - UtrechtIconMail
  - UtrechtIconPhone
  - UtrechtIconWijkDenkmee
  - UtrechtIconWijkOverlast
  - UtrechtIconWijkPark
  - UtrechtIconWijkProjecten
  - UtrechtIconWijkSport
  - UtrechtIconWijkZwemmen

## 3.6.1

### Patch Changes

- 9b3cb1e: Release with npm provenance.

## 3.6.0

### Minor Changes

- 7fc678f: Button Group has component is now deprecated, because it has a new name: Action Group. Please migrate to the new Action Group component, which apart from the name is identical.

  The Button Group component remains available for some time to give you opportunity to migrate your code, but it will be removed in an upcoming major release.

## 3.5.1

### Patch Changes

- 8921e2b: Refactor how classnames for Alert are computed

## 3.5.0

### Minor Changes

- 85ed6c0: - Use fallback value `info` for optional `type` property in Alert component, when `type` is not given or does not match defined types.
  - Make `role` attribute in Alert component configurable via `role` property (supports either `status` or `alert`).
  - Ensure the `role` attribute in Alert component is always rendered.

## 3.4.0

### Minor Changes

- e71766c: Add Top Task Navigation and Top Task Link web components.
- 7ba40dd: Add `ok` and `error` appearances to Spotlight Section web component.

## 3.3.0

### Minor Changes

- b5c8990: Add `utrecht-preserve-data` custom element.
- 94ddb19: Add `utrecht-table-container` custom element.

### Patch Changes

- b2cb42d: Fix `utrecht-number-data` web component to include the necessary CSS.

## 3.2.0

### Minor Changes

- cfb7a9b: Add new social icons

  - UtrechtIconBluesky
  - UtrechtIconMastodon
  - UtrechtIconThreads

  Reference to the pull-request: [url](https://github.com/nl-design-system/utrecht/pull/2771/files)

## 3.1.0

### Minor Changes

- 61b06bc: Add 4 new web components: `<utrecht-root>`, `<utrecht-body>`, `<utrecht-page-layout>`, `<utrecht-nav-bar>`. Support new layout structure in existing components: `<utrecht-page-header>`, `<utrecht-page-footer>` and `<utrecht-page-content>`.

## 3.0.1

### Patch Changes

- b19733f: Use correct names for custom element classes, avoid duplicates.

## 3.0.0

### Major Changes

- 6dfa817: Rename `<utrecht-badge-data>` to `<utrecht-data-badge>`.

  The name of the class name is now in sync with the [NL Design System "Data Badge" component](https://nldesignsystem.nl/data-badge).

  Migration: replace any `<utrecht-badge-data>` elements you might have, with `<utrecht-data-badge>`.

## 2.2.0

### Minor Changes

- 200e34b: Add `utrecht.number-badge.border-color` and `utrecht.number-badge.border-width` design tokens.
- 24b4813: Add `slot="icon"` and `slot="label"` support to `utrecht-button` web component.

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
