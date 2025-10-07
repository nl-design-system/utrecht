# SCSS Migration: @import to @use/@forward

This document explains the migration from SCSS `@import` to the modern `@use` and `@forward` syntax in the Utrecht Design System.

## Overview

The Utrecht Design System has been migrated from the legacy `@import` syntax to the modern SCSS module system using `@use` and `@forward`. This provides better performance, namespace safety, and explicit dependencies.

## File Structure

### Component Files

Each component now follows this structure:

```shell
components/button/src/
├── index.scss        # CSS classes (uses mixins)
├── _mixin.scss       # Mixins and functions
└── _forward.scss     # Forwards mixins for external use
```

### File Purposes

- **`index.scss`** - Contains CSS classes that use mixins
- **`_mixin.scss`** - Contains reusable mixins and functions
- **`_forward.scss`** - Forwards mixins for other components to import

## Usage Patterns

### Importing CSS Classes

For CSS classes only (no mixins needed):

```scss
@use "~@utrecht/button-css/src/index";
```

### Importing Mixins

For mixins (to use in your own components):

```scss
@use "~@utrecht/button-css/src/forward" as *;

.my-custom-button {
  @include utrecht-button;
  @include utrecht-button--primary-action;
}
```

### Importing with Namespace

For mixins with explicit namespace:

```scss
@use "~@utrecht/button-css/src/forward" as button;

.my-custom-button {
  @include button.utrecht-button;
}
```

## Migration Examples

### Before (using @import)

```scss
@import "~@utrecht/button-css/src/mixin";
@import "./mixin";

.utrecht-button {
  @include utrecht-button;
}
```

### After (using @use/@forward)

**Component `index.scss`:**

```scss
@use "~@utrecht/focus-ring-css/src/forward" as focus-ring;
@use "./mixin" as *;

.utrecht-button {
  @include utrecht-button;
}

.utrecht-button:focus-visible {
  @include focus-ring.utrecht-focus-visible;
}
```

**Component `_forward.scss`:**

```scss
@forward "./mixin";
```

## Key Benefits

1. **Performance** - Modules are loaded once and cached
2. **Namespace Safety** - Prevents naming conflicts
3. **Explicit Dependencies** - Clear what each file depends on
4. **Tree Shaking** - Better optimization possibilities
5. **Future Proof** - Aligns with modern SCSS practices

## Common Patterns

### Aggregation Files

For files that collect multiple CSS outputs:

```scss
@use "~@utrecht/button-css/src/index" as *;
@use "~@utrecht/link-css/src/index" as *;
@use "~@utrecht/form-css/src/index" as *;
```

### Component Development

When creating new components:

```scss
// _mixin.scss
@use "~@utrecht/focus-ring-css/src/forward" as focus-ring;

@mixin my-component {
  // component styles
}

@mixin my-component--focus {
  @include focus-ring.utrecht-focus-visible;
}
```

```scss
// index.scss
@use "./mixin" as *;

.my-component {
  @include my-component;
}

.my-component:focus {
  @include my-component--focus;
}
```

```scss
// _forward.scss
@forward "./mixin";
```

## Troubleshooting

### Namespace Conflicts

If you get "already a module with namespace" errors:

```scss
// ❌ Wrong - creates namespace conflicts
@use "module1/index";
@use "module2/index";

// ✅ Correct - use unique namespaces or as *
@use "module1/index" as module1;
@use "module2/index" as module2;
// or
@use "module1/index" as *;
@use "module2/index" as *;
```

### Ambiguous Imports

If you get "not clear which file to import" errors:

```scss
// ❌ Wrong - ambiguous between index.scss and _index.scss
@use "~@utrecht/button-css/src";

// ✅ Correct - specify exact file
@use "~@utrecht/button-css/src/index"; // for CSS classes
@use "~@utrecht/button-css/src/forward" as *; // for mixins
```

## Best Practices

1. **Use `as *`** for local mixins to avoid namespace clutter
2. **Use explicit namespaces** for external dependencies
3. **Create `_forward.scss`** files for components that expose mixins
4. **Order imports alphabetically** to avoid merge conflicts
5. **Be explicit** about file paths to avoid ambiguity

## Related Documentation

- [Contributing CSS Guidelines](/documentation/nl-design-system/contributing-css.md)
- [SCSS Module System Documentation](https://sass-lang.com/documentation/at-rules/use)
