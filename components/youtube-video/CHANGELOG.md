# @utrecht/youtube-video-css

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

## 1.0.0

### Major Changes

- b6cd5bb: Add YouTube video CSS component.
