# @utrecht/page-footer-css

## 2.1.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 2.0.0

### Major Changes

- e6c1467: `utrecht-page-footer` now requires a second element. Code that looked like this:

  ```html
  <div class="utrecht-page-footer">...</div>
  ```

  Must be refactored to this:

  ```html
  <div class="utrecht-page-footer">
    <div class="utrecht-page-footer__content">...</div>
  </div>
  ```

  `utrecht-page-footer` now is `display: flex`, to center the contained element.

### Minor Changes

- e6c1467: Support new tokens for `utrecht-page-footer`:

  - `utrecht.page-footer.content.background-color`
  - `utrecht.page-footer.content.color`
  - `utrecht.page-footer.content.max-inline-size`
  - `utrecht.page-footer.content.padding-block-end`
  - `utrecht.page-footer.content.padding-block-start`
  - `utrecht.page-footer.content.padding-inline`

## 1.3.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.2.0

### Minor Changes

- 5558822: Added metadata for page-footer tokens.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
