# @utrecht/accordion-css

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

## 2.0.0

### Major Changes

- 5902c57: Remove deprecated `utrecht-accordion__button--utrecht` class. It has been fully removed in this release.

### Minor Changes

- 7274362: Support the new accordion component style for the Municipality of Utrecht.

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.6.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.5.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.4.0

### Minor Changes

- a17c04f: - Fixed metadata for `border-radius` token of accordion.
  - Added missing tokens and metadata for `accordion.section`
- 3c1e66d: Removed white space between content and expand button.
  Added row gap token to accordion for spacing.

## 1.3.0

### Minor Changes

- 08d937d: Added metadata for accordion tokens.

## 1.2.0

### Minor Changes

- c5a7e71: Add margin tokens to the Accordion component:

  - `utrecht.accordion.margin-block-end`
  - `utrecht.accordion.margin-block-start`

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
