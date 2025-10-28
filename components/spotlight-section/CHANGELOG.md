# @utrecht/spotlight-section-css

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

## 1.6.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.6.0

### Minor Changes

- a4fb52f: Add `utrecht.spotlight-section.border-radius` token.

## 1.5.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.4.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.3.0

### Minor Changes

- 374b678: Extend the Spotlight Section component with new features.

  Add new CSS class names:

  - `utrecht-spotlight-section--error`
  - `utrecht-spotlight-section--ok`

  Add new SCSS mixins:

  - `utrecht-spotlight-section--error`
  - `utrecht-spotlight-section--ok`

  Add new design tokens for spotlight-section component:

  - `utrecht.spotlight-section.error.background-color`
  - `utrecht.spotlight-section.error.border-color`
  - `utrecht.spotlight-section.error.border-width`
  - `utrecht.spotlight-section.error.color`
  - `utrecht.spotlight-section.error.icon.color`
  - `utrecht.spotlight-section.ok.background-color`
  - `utrecht.spotlight-section.ok.border-color`
  - `utrecht.spotlight-section.ok.border-width`
  - `utrecht.spotlight-section.ok.color`
  - `utrecht.spotlight-section.ok.icon.color`

## 1.2.0

### Minor Changes

- fc11ffb: - Added metadata for spotlight section tokens.
  - Added missing tokens that were available in mixin.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
