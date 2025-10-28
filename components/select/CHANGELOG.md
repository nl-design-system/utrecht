# @utrecht/select-css

## 2.0.1

### Patch Changes

- 9b3cb1e: Release with npm provenance.

## 2.0.0

### Major Changes

- 77438bb: # BREAKING CHANGE: Migrate from SCSS @import to @use/@forward

  Migrated all SCSS files from the legacy `@import` syntax to the modern `@use` and `@forward` module system.

  ## Breaking Changes

  - **Import syntax changed**: `@import` statements replaced with `@use`/`@forward`
  - **Namespace requirements**: Some imports now require explicit namespaces
  - **File structure**: Added `_forward.scss` files for mixin exports
  - **Module loading**: Modules are now loaded once and cached

  ## Migration Guide

  ### For CSS Classes

  ```scss
  // Before
  @import "~@utrecht/button-css/src/index";

  // After (recommended)
  @use "~@utrecht/button-css/src/index";

  // Note: @import still works for CSS-only files but @use is recommended
  ```

  ### For Mixins

  ```scss
  // Before
  @import "~@utrecht/button-css/src/mixin";
  @include utrecht-button;

  // After
  @use "~@utrecht/button-css/src/forward" as *;
  @include utrecht-button;
  ```

  ### With Namespaces

  ```scss
  @use "~@utrecht/focus-ring-css/src/forward" as focus-ring;
  @include focus-ring.utrecht-focus-visible;
  ```

  ## Benefits

  - Better performance through module caching
  - Namespace safety prevents naming conflicts
  - Explicit dependencies improve maintainability
  - Future-proof with modern SCSS standards

  See `SCSS_MIGRATION.md` for detailed migration instructions.

## 1.8.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.8.0

### Minor Changes

- 729f698: Restore vanilla HTML implementations to the npm packages of CSS components, with the following files:

  - `dist/html/index.css`
  - `dist/html/index.min.css`
  - `dist/html/index.mjs`

## 1.7.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.6.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

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
