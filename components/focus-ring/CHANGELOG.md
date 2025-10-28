# @utrecht/focus-ring-css

## 3.0.1

### Patch Changes

- 9b3cb1e: Release with npm provenance.

## 3.0.0

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

## 2.3.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 2.3.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 2.2.0

### Minor Changes

- 8cf4128: Ensure focus ring is visible by raising `z-index` of `focus-visible` elements.

## 2.1.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 2.0.0

### Major Changes

- c1f8d63: Remove the SCSS variable `$utrecht-focus-visible-fallback` and remove the following mixins:

  - `utrecht-focus-ring-reset`
  - `utrecht-focus-pseudo-classes-backwards-compatible`

## 1.2.0

### Minor Changes

- 5d61ea6: Added metadata for focus-ring tokens.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.
