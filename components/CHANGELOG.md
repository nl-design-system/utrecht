# @utrecht/components

## 7.1.0

### Minor Changes

- 8431fb9: Add the following design tokens to breadcrumb navigation:

  - `utrecht.breadcrumb-nav.line-height`
  - `utrecht.breadcrumb-nav.link.active.color`
  - `utrecht.breadcrumb-nav.link.active.text-decoration`

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

## 7.0.0

### Major Changes

- ecf877a: Refactor the Alert component for more consistent token names and use flex instead of grid layout. Adding support for content and message sections.

  - Rename `utrecht.alert.icon.gap` to `utrecht.alert.column-gap`
  - Add `utrecht.alert.message.row-gap` token
  - Add `utrecht.alert.content.row-gap` token
  - Add `utrecht.alert.icon.size` token
  - Add `utrecht.alert.icon.inset-block-start` token
  - Add `utrecht-alert__content` class
  - Change implementation of layout from grid to flex

## 6.2.0

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

## 6.1.0

### Minor Changes

- c5a7e71: Add margin tokens to the Accordion component:

  - `utrecht.accordion.margin-block-end`
  - `utrecht.accordion.margin-block-start`

## 6.0.0

### Major Changes

- 14c8559: Replace `utrecht.link-list.item.margin-block-start` design token with `utrecht.link-list.row-gap`.
- bd0514c: Rename tokens in the Link list component, because they should be on `link` instead of on `item`. "Item" currently only exists in CSS, but is not necessary to build the Link list in Figma.

  - Rename `utrecht.link-list.item.font-weight` to `utrecht.link-list.link.font-weight`.
  - Rename `utrecht.link-list.item.column-gap` to `utrecht.link-list.link.column-gap`.

### Minor Changes

- e2b188d: Add design token to Link list component: `utrecht.link-list.link.text-decoration`, so you can enable or disable the underline. By default the links have no underline.

### Patch Changes

- 0e2e4da: Fix rendering of the checkbox component in the combined indeterminate and checked state, to have an indeterminate icon instead of a checked icon.'

## 5.0.1

### Patch Changes

- 3bf038d: Add missing `dist/` directory with the `.css` files.

## 5.0.0

### Major Changes

- 62f1157: SCSS files in the `@utrecht/components/*/css/index.scss` and `_mixin.scss` are no longer available.

  Migration steps are available for two use cases.

  Import CSS components from `@utrecht/components/dist/*/css/index.css` instead, when you only need the resulting CSS.

  Import SCSS mixins from the new npm packages that now are available for each component:

  - `@utrecht/accordion-css`
  - `@utrecht/alert-css`
  - `@utrecht/alert-dialog-css`
  - `@utrecht/alternate-lang-nav-css`
  - `@utrecht/article-css`
  - `@utrecht/backdrop-css`
  - `@utrecht/badge-counter-css`
  - `@utrecht/badge-css`
  - `@utrecht/badge-data-css`
  - `@utrecht/badge-list-css`
  - `@utrecht/badge-status-css`
  - `@utrecht/blockquote-css`
  - `@utrecht/breadcrumb-nav-css`
  - `@utrecht/button-css`
  - `@utrecht/button-group-css`
  - `@utrecht/button-link-css`
  - `@utrecht/calendar-css`
  - `@utrecht/checkbox-css`
  - `@utrecht/code-block-css`
  - `@utrecht/code-css`
  - `@utrecht/color-sample-css`
  - `@utrecht/column-layout-css`
  - `@utrecht/combobox-css`
  - `@utrecht/currency-data-css`
  - `@utrecht/custom-checkbox-css`
  - `@utrecht/data-list-css`
  - `@utrecht/data-placeholder-css`
  - `@utrecht/digid-button-css`
  - `@utrecht/document-css`
  - `@utrecht/documentation`
  - `@utrecht/drawer-css`
  - `@utrecht/emphasis-css`
  - `@utrecht/figure-css`
  - `@utrecht/flex-wrap-fallback-css`
  - `@utrecht/focus-ring-css`
  - `@utrecht/form-css`
  - `@utrecht/form-field-css`
  - `@utrecht/form-field-description-css`
  - `@utrecht/form-field-error-message-css`
  - `@utrecht/form-fieldset-css`
  - `@utrecht/form-label-css`
  - `@utrecht/form-toggle-css`
  - `@utrecht/heading-1-css`
  - `@utrecht/heading-2-css`
  - `@utrecht/heading-3-css`
  - `@utrecht/heading-4-css`
  - `@utrecht/heading-5-css`
  - `@utrecht/heading-6-css`
  - `@utrecht/heading-css`
  - `@utrecht/heading-group-css`
  - `@utrecht/html-content-css`
  - `@utrecht/iban-data-css`
  - `@utrecht/icon`
  - `@utrecht/img-css`
  - `@utrecht/index-char-nav-css`
  - `@utrecht/link-button-css`
  - `@utrecht/link-css`
  - `@utrecht/link-list-css`
  - `@utrecht/link-social-css`
  - `@utrecht/list-social-css`
  - `@utrecht/listbox-css`
  - `@utrecht/logo-button-css`
  - `@utrecht/logo-css`
  - `@utrecht/logo-image-css`
  - `@utrecht/map-control-button-css`
  - `@utrecht/map-marker-css`
  - `@utrecht/mark-css`
  - `@utrecht/multiline-data-css`
  - `@utrecht/nav-bar-css`
  - `@utrecht/nav-list-css`
  - `@utrecht/number-data-css`
  - `@utrecht/ordered-list-css`
  - `@utrecht/page-content-css`
  - `@utrecht/page-css`
  - `@utrecht/page-footer-css`
  - `@utrecht/page-header-css`
  - `@utrecht/pagination-css`
  - `@utrecht/paragraph-css`
  - `@utrecht/pre-heading-css`
  - `@utrecht/preserve-data-css`
  - `@utrecht/radio-button-css`
  - `@utrecht/search-bar-css`
  - `@utrecht/select-css`
  - `@utrecht/separator-css`
  - `@utrecht/skip-link-css`
  - `@utrecht/spotlight-section-css`
  - `@utrecht/surface-css`
  - `@utrecht/table-css`
  - `@utrecht/textarea-css`
  - `@utrecht/textbox-css`
  - `@utrecht/top-task-link-css`
  - `@utrecht/top-task-nav-css`
  - `@utrecht/unordered-list-css`
  - `@utrecht/url-data-css`
  - `@utrecht/vega-visualization-css`

  The files from `/css/` will be available from `/src/`.
  The files from `/html/` will be available from `/src/html/`.

### Minor Changes

- 8d8babe: Add 5 missing CSS components to CSS component library bundle.

  - `utrecht-combobox`
  - `utrecht-currency-data`
  - `utrecht-data-placeholder`
  - `utrecht-listbox`
  - `utrecht-logo-image`
  - `utrecht-preserve-data`

## 4.0.0

### Major Changes

- f9c23c6: Rename `utrecht-accordion__button-icon-arrow-down` to `utrecht-accordion__button-icon--utrecht-arrow-down`.
  Rename `utrecht-accordion__button-icon-arrow-up` to `utrecht-accordion__button-icon--utrecht-arrow-up`.

### Minor Changes

- f9c23c6: Add `utrecht-accordion__button--utrecht` class name.
  Add `utrecht-accordion__button-icon` class name.
- f9c23c6: Add `utrecht.accordion.button.icon.gap` design token.

## 3.0.0

### Major Changes

- af24025682: rename `utrecht-button-group--vertical` mixin and class name to `utrecht-button-group--column`'

### Patch Changes

- af24025682: inline button link component no longer automatically stretches to match size of button group
- e340a7b2de: remove margin from `<p>` element in form field shadow DOM.

## 1.0.0

### Patch Changes

- c7cae76a0d: allow word wrap for URL data, so it is fully readable in print and on screen
- 28a3ef848a: Support rendering of `<select>` element with multiple attribute.
