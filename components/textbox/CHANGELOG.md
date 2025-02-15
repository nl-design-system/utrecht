# @utrecht/textbox-css

## 1.6.0

### Minor Changes

- 729f698: Restore vanilla HTML implementations to the npm packages of CSS components, with the following files:

  - `dist/html/index.css`
  - `dist/html/index.min.css`
  - `dist/html/index.mjs`

## 1.5.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.4.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.3.1

### Patch Changes

- e177ced: Start using `:focus-visible`, Safari support has caught up.

## 1.3.0

### Minor Changes

- 48ccd57: Support bold form controls.

  Add the following design tokens:

  - `utrecht.form-control.font-weight` (common token)
  - `utrecht.listbox.font-weight`
  - `utrecht.select.font-weight`
  - `utrecht.textarea.font-weight`
  - `utrecht.textbox.font-weight`

## 1.2.0

### Minor Changes

- a41bba4: Add option to include Prince XML support. Use `$utrecht-support-prince-xml: true !default;` to enable this option.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
