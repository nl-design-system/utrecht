# @utrecht/icon-css

## 2.0.0

### Major Changes

- de1c443: Split `@utrecht/icon` into two packages:

  - `@utrecht/icon-css` for the CSS and SCSS.
  - `@utrecht/icon` for the Icon SVGs.

## 1.3.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.
- a63d0ef: Add `iconset.mjs` and `iconset.d.mts` files.

## 1.2.0

### Minor Changes

- 888bc9b: Added metadata for icon tokens.

## 1.1.0

### Minor Changes

- 5e6f551: Add support for bidirectional icons: icons that adapt to `dir="ltr"` and `dir="rtl"`. The following two icons are now bidirectional icons:

  - `<utrecht-icon-chevron-left></utrecht-icon-chevron-left>`
  - `<utrecht-icon-chevron-right></utrecht-icon-chevron-right>`

  This behavior can be turned off with the `direction="ltr"` attribute:

  ```html
  <utrecht-icon-chevron-left direction="ltr"></utrecht-icon-chevron-left>
  ```

## 1.0.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.
