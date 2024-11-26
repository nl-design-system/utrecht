# @utrecht/link-css

## 1.5.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.4.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.3.0

### Minor Changes

- c71f875: Move the Link `text-underline` effect from `focus` to `focus-visible`. The goal is to not change the `text-underline` appearance during the flow of moving the mouse over the link (`:hover`) and then clicking the link (`:focus` + `:active`).

  Add new `focus-visible` tokens for Link:

  - `utrecht.link.focus-visible.text-decoration`
  - `utrecht.link.focus-visible.text-decoration-thickness`

  The following tokens are now deprecated:

  - `utrecht.link.focus.text-decoration`
  - `utrecht.link.focus.text-decoration-thickness`

### Patch Changes

- e177ced: Start using `:focus-visible`, Safari support has caught up.

## 1.2.1

### Patch Changes

- c146b9a: Add missing metadata for `utrecht.link.focus.background-color`.

## 1.2.0

### Minor Changes

- 01ce66c: Added metadata for link tokens.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
