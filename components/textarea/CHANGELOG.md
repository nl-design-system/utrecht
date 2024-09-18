# @utrecht/textarea-css

## 2.0.0

### Major Changes

- 72e27b6: - Renamed CSS variable in mixin `--utrecht-textarea-border-bottom-width` to `--utrecht-textarea-border-block-end-width`.
  - Renamed CSS variable in mixin `--utrecht-textarea-invalid-border-bottom-width` to `--utrecht-textarea-invalid-border-block-end-width`.

### Minor Changes

- ca4bfbf: - Added metadata for textarea tokens.
  - Added token and metadata for `utrecht.textarea.border-block-end-width`.
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