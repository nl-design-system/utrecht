# @utrecht/open-forms-container-css

## 2.0.2

### Patch Changes

- Updated dependencies [a6680b7]
  - @utrecht/textbox-css@3.1.0

## 2.0.1

### Patch Changes

- 9b3cb1e: Release with npm provenance.
- Updated dependencies [9b3cb1e]
  - @utrecht/focus-ring-css@3.0.1
  - @utrecht/textbox-css@3.0.1

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

### Patch Changes

- Updated dependencies [77438bb]
  - @utrecht/focus-ring-css@3.0.0
  - @utrecht/textbox-css@3.0.0

## 1.0.2

### Patch Changes

- Updated dependencies [33eaccf]
  - @utrecht/textbox-css@2.0.0

## 1.0.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.
- Updated dependencies [e20f33c]
  - @utrecht/focus-ring-css@2.3.1
  - @utrecht/textbox-css@1.7.1

## 1.0.0

### Major Changes

- 51c9249: Create open-forms-container CSS component

### Patch Changes

- Updated dependencies [730e2dd]
  - @utrecht/textbox-css@1.7.0
