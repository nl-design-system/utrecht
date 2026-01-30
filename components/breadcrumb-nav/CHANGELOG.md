# @utrecht/breadcrumb-nav-css

## 2.1.0

### Minor Changes

- f02b554: Corrected several spacing token values and metadata in the Breadcrumb Navigation and Rich Text components.

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

## 1.5.1

### Patch Changes

- 81cf760: Add utrecht-breadcrumb-nav-link-icon-size to known tokens

## 1.5.0

### Minor Changes

- cbb98e9: Add `utrecht.breadcrumb-nav.item.first.padding-inline-start` token.

  Use this token to align the content of the first link with the other content, by setting it to `0`.

## 1.4.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.4.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.3.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.2.0

### Minor Changes

- eab2889: Added metadata for breadcrumb-nav tokens.
- 8431fb9: Add the following design tokens to breadcrumb navigation:

  - `utrecht.breadcrumb-nav.line-height`
  - `utrecht.breadcrumb-nav.link.active.color`
  - `utrecht.breadcrumb-nav.link.active.text-decoration`

### Patch Changes

- 8431fb9: Remove `utrecht.breadcrumb-nav.separator.inline-size` from design token JSON, because it is not implemented.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
