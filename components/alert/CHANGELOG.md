# @utrecht/alert-css

## 2.4.0

### Minor Changes

- 8921e2b: Alert text color now follows design - uses utrecht-alert-color for headings and paragraphs

## 2.3.0

### Minor Changes

- 85ed6c0: Add documentation on which `role` values to use and when to use them.

## 2.2.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 2.2.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 2.1.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

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

### Minor Changes

- 08ffc43: Added extra metadata for new alert tokens.
- 08ffc43: Added metadata for alert tokens.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
