# @utrecht/table-of-contents-css

## 2.0.1

### Patch Changes

- 0f759fc: Ensure package is published with provenance

## 2.0.0

### Major Changes

- eabbf23: Publish `tokens.json` in DTCG format: `$value` instead of `value`, standard `$type`, etcetera.

## 1.0.2

### Patch Changes

- 982448a: Switch from deprecated CSS properties to ones that are newly Baseline supported:

  - `clip` now iw `clip-path`.
  - `word-break` is now `overflow-wrap`
  - `page-break-inside` now is `break-inside`.
  - `page-break-after` now is `break-after`.

## 1.0.1

### Patch Changes

- 9b3cb1e: Release with npm provenance.

## 1.0.0

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

## 0.3.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 0.3.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 0.2.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 0.1.0

### Minor Changes

- 1227678: Add Table of Contents component for the PDF component library.
