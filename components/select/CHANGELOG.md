# @utrecht/select-css

## 1.5.0

### Minor Changes

- ec52086: Add `hover` tokens to the Select component:

  - `utrecht.select.hover.background-color`
  - `utrecht.select.hover.border-color`
  - `utrecht.select.hover.color`

## 1.4.0

### Minor Changes

- bc27493: Add `utrecht.select.line-height` design token.

### Patch Changes

- e177ced: Start using `:focus-visible`, Safari support has caught up.

## 1.3.0

### Minor Changes

- 52364b1: - Added metadata for select
  - Changed syntax for background-image token
- 7967cee: Added token `select.invalid.border-block-end-width` that is available as CSS variable.
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
