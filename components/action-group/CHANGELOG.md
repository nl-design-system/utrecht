# @utrecht/action-group-css

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

- 4ddecce: Breaking changes:

  The Action Group `inline-gap` and `block-gap` tokens have been renamed to follow NL Design System naming conventions:

  - `inline-gap` to `row-gap`
  - `block-gap` to `column-gap`

  These new names are consistent with the existing design tokens.

  Previously, `--utrecht-action-group-inline-gap` was applied to the gap property by default, and `--utrecht-button-group-block-gap` was applied to the gap property when the column variant was used. This is split and replaced with `column-gap: var(--utrecht-action-group-column-gap, 1em); row-gap: var(--utrecht-action-group-row-gap, 1em);`.

## 1.1.0

### Minor Changes

- 41a5171: Add `utrecht-action-group--column-stretch` modifier class for vertically stacked buttons.

## 1.0.0

### Major Changes

- 7fc678f: Button Group component is now deprecated, because it has a new name: Action Group, which apart from the name is identical.
