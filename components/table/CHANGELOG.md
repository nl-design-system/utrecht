# @utrecht/table-css

## 1.6.0

### Minor Changes

- 94ddb19: Add SCSS mixins: `utrecht-table-container` and `utrecht-table-container--overflow-inline`.

### Patch Changes

- 94ddb19: Fix `.table-container` to be `display: block` by default.

## 1.5.0

### Minor Changes

- 729f698: Restore vanilla HTML implementations to the npm packages of CSS components, with the following files:

  - `dist/html/index.css`
  - `dist/html/index.min.css`
  - `dist/html/index.mjs`

## 1.4.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.3.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.2.0

### Minor Changes

- 160668a: - Added metadata for table tokens.
  - Added missing tokens that were available as CSS variants in the mixin.

### Patch Changes

- 5695c6c: Improve table component CSS to explicitly fallback to `background-color: transparent` to have a valid CSS value. ([GitHub Issue nl-design-system/utrecht#2435](https://github.com/nl-design-system/utrecht/issues/2435))

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
