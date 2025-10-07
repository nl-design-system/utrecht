---
"@utrecht/form-field-error-message-css": major
"@utrecht/flolegal-decision-tree-css": major
"@utrecht/form-field-description-css": major
"@utrecht/open-forms-container-css": major
"@utrecht/alternate-lang-nav-css": major
"@utrecht/spotlight-section-css": major
"@utrecht/table-of-contents-css": major
"@utrecht/data-placeholder-css": major
"@utrecht/map-control-button-css": major
"@utrecht/custom-checkbox-css": major
"@utrecht/breadcrumb-nav-css": major
"@utrecht/index-char-nav-css": major
"@utrecht/multiline-data-css": major
"@utrecht/unordered-list-css": major
"@utrecht/badge-counter-css": major
"@utrecht/column-layout-css": major
"@utrecht/currency-data-css": major
"@utrecht/form-fieldset-css": major
"@utrecht/heading-group-css": major
"@utrecht/preserve-data-css": major
"@utrecht/youtube-video-css": major
"@utrecht/action-group-css": major
"@utrecht/alert-dialog-css": major
"@utrecht/badge-status-css": major
"@utrecht/button-group-css": major
"@utrecht/color-sample-css": major
"@utrecht/html-content-css": major
"@utrecht/number-badge-css": major
"@utrecht/ordered-list-css": major
"@utrecht/page-content-css": major
"@utrecht/radio-button-css": major
"@utrecht/top-task-link-css": major
"@utrecht/button-link-css": major
"@utrecht/form-toggle-css": major
"@utrecht/link-button-css": major
"@utrecht/link-social-css": major
"@utrecht/list-social-css": major
"@utrecht/number-data-css": major
"@utrecht/page-footer-css": major
"@utrecht/page-header-css": major
"@utrecht/page-layout-css": major
"@utrecht/pre-heading-css": major
"@utrecht/superscript-css": major
"@utrecht/badge-list-css": major
"@utrecht/blockquote-css": major
"@utrecht/code-block-css": major
"@utrecht/data-badge-css": major
"@utrecht/focus-ring-css": major
"@utrecht/form-field-css": major
"@utrecht/form-label-css": major
"@utrecht/map-marker-css": major
"@utrecht/pagination-css": major
"@utrecht/search-bar-css": major
"@utrecht/accordion-css": major
"@utrecht/data-list-css": major
"@utrecht/heading-1-css": major
"@utrecht/heading-2-css": major
"@utrecht/heading-3-css": major
"@utrecht/heading-4-css": major
"@utrecht/heading-5-css": major
"@utrecht/heading-6-css": major
"@utrecht/iban-data-css": major
"@utrecht/link-list-css": major
"@utrecht/page-body-css": major
"@utrecht/paragraph-css": major
"@utrecht/rich-text-css": major
"@utrecht/separator-css": major
"@utrecht/skip-link-css": major
"@utrecht/subscript-css": major
"@utrecht/backdrop-css": major
"@utrecht/calendar-css": major
"@utrecht/checkbox-css": major
"@utrecht/combobox-css": major
"@utrecht/document-css": major
"@utrecht/emphasis-css": major
"@utrecht/textarea-css": major
"@utrecht/url-data-css": major
"@utrecht/article-css": major
"@utrecht/heading-css": major
"@utrecht/listbox-css": major
"@utrecht/nav-bar-css": major
"@utrecht/surface-css": major
"@utrecht/textbox-css": major
"@utrecht/tooltip-css": major
"@utrecht/button-css": major
"@utrecht/drawer-css": major
"@utrecht/figure-css": major
"@utrecht/select-css": major
"@utrecht/alert-css": major
"@utrecht/badge-css": major
"@utrecht/table-css": major
"@utrecht/body-css": major
"@utrecht/card-css": major
"@utrecht/code-css": major
"@utrecht/form-css": major
"@utrecht/icon-css": major
"@utrecht/link-css": major
"@utrecht/logo-css": major
"@utrecht/mark-css": major
"@utrecht/page-css": major
"@utrecht/root-css": major
"@utrecht/img-css": major
---

# BREAKING CHANGE: Migrate from SCSS @import to @use/@forward

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
