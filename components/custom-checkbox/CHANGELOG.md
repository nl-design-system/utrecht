# @utrecht/custom-checkbox-css

## 3.1.0

### Minor Changes

- 9101272: Add `utrecht.checkbox.checked.hover`, `utrecht.checkbox.checked.active`, `utrecht.checkbox.indeterminate.hover` and `utrecht.checkbox.indeterminate.active` design tokens (each with `background-color`, `border-color`, `border-width` and `color`) and apply them on the custom checkbox, so the checked and indeterminate states can be themed for hover and active interaction, as requested in #2716. The tokens are empty by default and fall back to the existing checked and indeterminate tokens, so the default appearance is unchanged. Disabled checkboxes keep precedence over hover and active.

  Each new state also gets a matching modifier class (`utrecht-checkbox--checked-hover`, `utrecht-checkbox--checked-active`, `utrecht-checkbox--indeterminate-hover` and `utrecht-checkbox--indeterminate-active`), to be combined with `utrecht-checkbox--checked` or `utrecht-checkbox--indeterminate`, so the checked and indeterminate hover and active states can also be rendered without user interaction.

## 3.0.1

### Patch Changes

- 0f759fc: Ensure package is published with provenance

## 3.0.0

### Major Changes

- eabbf23: Publish `tokens.json` in DTCG format: `$value` instead of `value`, standard `$type`, etcetera.

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

## 1.3.2

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.3.1

### Patch Changes

- 8c57d0c: Remove SVG checkmark background image from checkbox :focus and :active states.

## 1.3.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.2.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.1.1

### Patch Changes

- 0e2e4da: Fix rendering of the checkbox component in the combined indeterminate and checked state, to have an indeterminate icon instead of a checked icon.'

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
