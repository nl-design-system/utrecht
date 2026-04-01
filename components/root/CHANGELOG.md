# @utrecht/root-css

## 3.1.0

### Minor Changes

- 3b655ff: Add system colors as fallback for Root color and background-color, to guarantee contrast.
- 9c456ab: Make `scroll-behavior: smooth` the default for Root component, except when `prefers-reduced-motion` is enabled.
- 80c3369: Root component now specifies a default background color for fullscreen elements, to avoid contrast issues.
- 9a2eeb4: Add `font-weight`, `font-size` and `line-height` tokens to Root, add `utrecht.body` tokens as fallback.

## 3.0.0

### Major Changes

- e89c1d2: Use `font-size-adjust: 0.5` as default. Add `utrecht.root.font-size-adjust` design token to make this behavior configurable.

### Minor Changes

- 4d4079c: Add default focus indicator to all focusable elements inside the Root component.

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

## 1.2.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.2.0

### Minor Changes

- f54840f: Provide `.css` file for the `:root` selector for styling vanilla HTML.

## 1.1.1

### Patch Changes

- 4c37eb9: Enable hypenation for the Root component.

## 1.1.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.0.0

### Major Changes

- 637d328: Create new `utrecht-root` CSS component.
