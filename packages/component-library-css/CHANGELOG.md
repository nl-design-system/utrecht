# @utrecht/component-library-css

## 4.1.0

### Minor Changes

- c5a7e71: Add margin tokens to the Accordion component:

  - `utrecht.accordion.margin-block-end`
  - `utrecht.accordion.margin-block-start`

## 4.0.0

### Major Changes

- 14c8559: Replace `utrecht.link-list.item.margin-block-start` design token with `utrecht.link-list.row-gap`.
- bd0514c: Rename tokens in the Link list component, because they should be on `link` instead of on `item`. "Item" currently only exists in CSS, but is not necessary to build the Link list in Figma.

  - Rename `utrecht.link-list.item.font-weight` to `utrecht.link-list.link.font-weight`.
  - Rename `utrecht.link-list.item.column-gap` to `utrecht.link-list.link.column-gap`.

### Minor Changes

- e2b188d: Add design token to Link list component: `utrecht.link-list.link.text-decoration`, so you can enable or disable the underline. By default the links have no underline.

### Patch Changes

- 0e2e4da: Fix rendering of the checkbox component in the combined indeterminate and checked state, to have an indeterminate icon instead of a checked icon.'

## 3.2.0

### Minor Changes

- 8d8babe: Add 5 missing CSS components to CSS component library bundle.

  - `utrecht-combobox`
  - `utrecht-currency-data`
  - `utrecht-data-placeholder`
  - `utrecht-listbox`
  - `utrecht-logo-image`
  - `utrecht-preserve-data`

## 3.1.0

### Minor Changes

- f9c23c6: Add `utrecht-accordion__button--utrecht` class name.
  Add `utrecht-accordion__button-icon` class name.
- f9c23c6: Add `utrecht.accordion.button.icon.gap` design token.

## 3.0.0

### Major Changes

- af24025682: rename `utrecht-button-group--vertical` mixin and class name to `utrecht-button-group--column`'

### Patch Changes

- af24025682: inline button link component no longer automatically stretches to match size of button group

## 1.0.1

### Patch Changes

- 0e434e0a19: fix rendering glitch in Firefox when hovering over a button

## 1.0.0

### Patch Changes

- c7cae76a0d: allow word wrap for URL data, so it is fully readable in print and on screen
- 28a3ef848a: Support rendering of `<select>` element with multiple attribute.
