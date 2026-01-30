# @utrecht/component-library-css

## 9.0.0

### Major Changes

- edac79f: - badge-status is no longer styled through common badge tokens but has its own set of tokens
  - badge-status has been renamed to status-badge, use @utrecht/status-badge-css instead of @utrecht/badge-status-css

### Patch Changes

- Updated dependencies [edac79f]
- Updated dependencies [3be2632]
- Updated dependencies [0fcdfbf]
  - @utrecht/status-badge-css@1.0.0
  - @utrecht/rich-text-css@2.1.0
  - @utrecht/navigation-css@1.1.1

## 8.2.1

### Patch Changes

- Updated dependencies [f02b554]
- Updated dependencies [55988ac]
  - @utrecht/breadcrumb-nav-css@2.1.0
  - @utrecht/navigation-css@1.1.0

## 8.2.0

### Minor Changes

- 3a99ec0: Add **Grid** component (CSS and React) to NL Design Systeem.

  - Introduced `@utrecht/grid-css` with responsive grid SCSS mixins and tokens
  - Added `@utrecht/grid-react` with `<Grid>` and `<GridCell>` components
  - Added grid-related design tokens for breakpoints, spacing, and columns
  - Integrated grid styles into `@utrecht/component-library-css`
  - Added Storybook stories demonstrating responsive layouts, spacing, and alignment

### Patch Changes

- Updated dependencies [3a99ec0]
  - @utrecht/grid-css@1.0.0

## 8.1.5

### Patch Changes

- 9b3cb1e: Release with npm provenance.
- Updated dependencies [9b3cb1e]
  - @utrecht/accordion-css@3.0.1
  - @utrecht/action-group-css@3.0.1
  - @utrecht/alert-css@3.0.1
  - @utrecht/alert-dialog-css@2.0.1
  - @utrecht/alternate-lang-nav-css@2.0.1
  - @utrecht/article-css@2.0.1
  - @utrecht/backdrop-css@2.0.1
  - @utrecht/badge-counter-css@2.0.1
  - @utrecht/badge-list-css@3.0.1
  - @utrecht/badge-status-css@2.0.1
  - @utrecht/blockquote-css@2.0.1
  - @utrecht/body-css@2.0.1
  - @utrecht/breadcrumb-nav-css@2.0.1
  - @utrecht/button-css@3.0.1
  - @utrecht/button-group-css@2.0.1
  - @utrecht/button-link-css@2.0.1
  - @utrecht/calendar-css@2.0.1
  - @utrecht/checkbox-css@2.0.1
  - @utrecht/code-css@2.0.1
  - @utrecht/code-block-css@2.0.1
  - @utrecht/color-sample-css@2.0.1
  - @utrecht/column-layout-css@2.0.1
  - @utrecht/combobox-css@2.0.1
  - @utrecht/currency-data-css@2.0.1
  - @utrecht/custom-checkbox-css@2.0.1
  - @utrecht/data-badge-css@2.0.1
  - @utrecht/data-list-css@2.0.1
  - @utrecht/data-placeholder-css@2.0.1
  - @utrecht/digid-button-css@1.4.2
  - @utrecht/document-css@2.0.1
  - @utrecht/drawer-css@2.0.1
  - @utrecht/emphasis-css@2.0.1
  - @utrecht/figure-css@2.0.1
  - @utrecht/form-css@2.0.1
  - @utrecht/form-field-css@2.0.1
  - @utrecht/form-field-description-css@2.0.1
  - @utrecht/form-field-error-message-css@2.0.1
  - @utrecht/form-fieldset-css@2.0.1
  - @utrecht/form-label-css@2.0.1
  - @utrecht/form-toggle-css@2.0.1
  - @utrecht/heading-1-css@2.0.1
  - @utrecht/heading-2-css@2.0.1
  - @utrecht/heading-3-css@2.0.1
  - @utrecht/heading-4-css@2.0.1
  - @utrecht/heading-5-css@2.0.1
  - @utrecht/heading-6-css@2.0.1
  - @utrecht/heading-group-css@2.0.1
  - @utrecht/html-content-css@2.0.1
  - @utrecht/iban-data-css@2.0.1
  - @utrecht/icon-css@3.0.1
  - @utrecht/img-css@2.0.1
  - @utrecht/index-char-nav-css@2.0.1
  - @utrecht/link-css@2.0.1
  - @utrecht/link-button-css@2.0.1
  - @utrecht/link-list-css@3.0.1
  - @utrecht/link-social-css@2.0.1
  - @utrecht/list-social-css@2.0.1
  - @utrecht/listbox-css@2.0.1
  - @utrecht/logo-css@2.0.1
  - @utrecht/logo-button-css@1.4.2
  - @utrecht/logo-image-css@1.4.2
  - @utrecht/map-marker-css@2.0.1
  - @utrecht/mark-css@2.0.1
  - @utrecht/multiline-data-css@2.0.1
  - @utrecht/nav-bar-css@2.0.1
  - @utrecht/nav-list-css@1.3.2
  - @utrecht/navigation-css@1.0.1
  - @utrecht/number-badge-css@3.0.1
  - @utrecht/number-data-css@2.0.1
  - @utrecht/ordered-list-css@3.0.1
  - @utrecht/page-css@2.0.1
  - @utrecht/page-content-css@2.0.1
  - @utrecht/page-footer-css@3.0.1
  - @utrecht/page-header-css@2.0.1
  - @utrecht/page-layout-css@2.0.1
  - @utrecht/pagination-css@2.0.3
  - @utrecht/paragraph-css@3.0.1
  - @utrecht/pre-heading-css@2.0.1
  - @utrecht/preserve-data-css@2.0.1
  - @utrecht/radio-button-css@2.0.1
  - @utrecht/rich-text-css@2.0.1
  - @utrecht/root-css@2.0.1
  - @utrecht/search-bar-css@3.0.1
  - @utrecht/select-css@2.0.1
  - @utrecht/separator-css@2.0.1
  - @utrecht/skip-link-css@2.0.1
  - @utrecht/spotlight-section-css@2.0.1
  - @utrecht/surface-css@2.0.1
  - @utrecht/table-css@2.0.1
  - @utrecht/table-of-contents-css@1.0.1
  - @utrecht/textarea-css@3.0.1
  - @utrecht/textbox-css@3.0.1
  - @utrecht/tooltip-css@2.0.1
  - @utrecht/top-task-link-css@2.0.1
  - @utrecht/top-task-nav-css@1.3.2
  - @utrecht/unordered-list-css@2.0.1
  - @utrecht/url-data-css@2.0.1
  - @utrecht/youtube-video-css@2.0.1
  - @utrecht/page-body-css@1.0.1

## 8.1.4

### Patch Changes

- Updated dependencies [e6211fa]
  - @utrecht/page-body-css@1.0.1

## 8.1.3

### Patch Changes

- Updated dependencies [a22338a]
  - @utrecht/pagination-css@2.0.2

## 8.1.2

### Patch Changes

- Updated dependencies [2af8480]
  - @utrecht/pagination-css@2.0.1

## 8.1.1

### Patch Changes

- Updated dependencies [77438bb]
  - @utrecht/form-field-error-message-css@2.0.0
  - @utrecht/form-field-description-css@2.0.0
  - @utrecht/alternate-lang-nav-css@2.0.0
  - @utrecht/spotlight-section-css@2.0.0
  - @utrecht/table-of-contents-css@1.0.0
  - @utrecht/data-placeholder-css@2.0.0
  - @utrecht/custom-checkbox-css@2.0.0
  - @utrecht/breadcrumb-nav-css@2.0.0
  - @utrecht/index-char-nav-css@2.0.0
  - @utrecht/multiline-data-css@2.0.0
  - @utrecht/unordered-list-css@2.0.0
  - @utrecht/badge-counter-css@2.0.0
  - @utrecht/column-layout-css@2.0.0
  - @utrecht/currency-data-css@2.0.0
  - @utrecht/form-fieldset-css@2.0.0
  - @utrecht/heading-group-css@2.0.0
  - @utrecht/preserve-data-css@2.0.0
  - @utrecht/youtube-video-css@2.0.0
  - @utrecht/action-group-css@3.0.0
  - @utrecht/alert-dialog-css@2.0.0
  - @utrecht/badge-status-css@2.0.0
  - @utrecht/button-group-css@2.0.0
  - @utrecht/color-sample-css@2.0.0
  - @utrecht/html-content-css@2.0.0
  - @utrecht/number-badge-css@3.0.0
  - @utrecht/ordered-list-css@3.0.0
  - @utrecht/page-content-css@2.0.0
  - @utrecht/radio-button-css@2.0.0
  - @utrecht/top-task-link-css@2.0.0
  - @utrecht/button-link-css@2.0.0
  - @utrecht/form-toggle-css@2.0.0
  - @utrecht/link-button-css@2.0.0
  - @utrecht/link-social-css@2.0.0
  - @utrecht/list-social-css@2.0.0
  - @utrecht/number-data-css@2.0.0
  - @utrecht/page-footer-css@3.0.0
  - @utrecht/page-header-css@2.0.0
  - @utrecht/page-layout-css@2.0.0
  - @utrecht/pre-heading-css@2.0.0
  - @utrecht/badge-list-css@3.0.0
  - @utrecht/blockquote-css@2.0.0
  - @utrecht/code-block-css@2.0.0
  - @utrecht/data-badge-css@2.0.0
  - @utrecht/form-field-css@2.0.0
  - @utrecht/form-label-css@2.0.0
  - @utrecht/map-marker-css@2.0.0
  - @utrecht/pagination-css@2.0.0
  - @utrecht/search-bar-css@3.0.0
  - @utrecht/accordion-css@3.0.0
  - @utrecht/data-list-css@2.0.0
  - @utrecht/heading-1-css@2.0.0
  - @utrecht/heading-2-css@2.0.0
  - @utrecht/heading-3-css@2.0.0
  - @utrecht/heading-4-css@2.0.0
  - @utrecht/heading-5-css@2.0.0
  - @utrecht/heading-6-css@2.0.0
  - @utrecht/iban-data-css@2.0.0
  - @utrecht/link-list-css@3.0.0
  - @utrecht/page-body-css@1.0.0
  - @utrecht/paragraph-css@3.0.0
  - @utrecht/rich-text-css@2.0.0
  - @utrecht/separator-css@2.0.0
  - @utrecht/skip-link-css@2.0.0
  - @utrecht/backdrop-css@2.0.0
  - @utrecht/calendar-css@2.0.0
  - @utrecht/checkbox-css@2.0.0
  - @utrecht/combobox-css@2.0.0
  - @utrecht/document-css@2.0.0
  - @utrecht/emphasis-css@2.0.0
  - @utrecht/textarea-css@3.0.0
  - @utrecht/url-data-css@2.0.0
  - @utrecht/article-css@2.0.0
  - @utrecht/listbox-css@2.0.0
  - @utrecht/nav-bar-css@2.0.0
  - @utrecht/surface-css@2.0.0
  - @utrecht/textbox-css@3.0.0
  - @utrecht/tooltip-css@2.0.0
  - @utrecht/button-css@3.0.0
  - @utrecht/drawer-css@2.0.0
  - @utrecht/figure-css@2.0.0
  - @utrecht/select-css@2.0.0
  - @utrecht/alert-css@3.0.0
  - @utrecht/table-css@2.0.0
  - @utrecht/body-css@2.0.0
  - @utrecht/code-css@2.0.0
  - @utrecht/form-css@2.0.0
  - @utrecht/icon-css@3.0.0
  - @utrecht/link-css@2.0.0
  - @utrecht/logo-css@2.0.0
  - @utrecht/mark-css@2.0.0
  - @utrecht/page-css@2.0.0
  - @utrecht/root-css@2.0.0
  - @utrecht/img-css@2.0.0

## 8.1.0

### Minor Changes

- f7e5550: Add Navigation-css component with mobile drawer support

### Patch Changes

- Updated dependencies [d0e3ca8]
- Updated dependencies [f7e5550]
  - @utrecht/figure-css@1.6.0
  - @utrecht/navigation-css@1.0.0
  - @utrecht/html-content-css@1.4.1

## 8.0.0

### Major Changes

- 4ddecce: Breaking changes:

  The Action Group `inline-gap` and `block-gap` tokens have been renamed to follow NL Design System naming conventions:

  - `inline-gap` to `row-gap`
  - `block-gap` to `column-gap`

  These new names are consistent with the existing design tokens.

  Previously, `--utrecht-action-group-inline-gap` was applied to the gap property by default, and `--utrecht-button-group-block-gap` was applied to the gap property when the column variant was used. This is split and replaced with `column-gap: var(--utrecht-action-group-column-gap, 1em); row-gap: var(--utrecht-action-group-row-gap, 1em);`.

### Patch Changes

- Updated dependencies [4ddecce]
  - @utrecht/action-group-css@2.0.0

## 7.5.1

### Patch Changes

- Updated dependencies [41a5171]
  - @utrecht/action-group-css@1.1.0

## 7.5.0

### Minor Changes

- 7fc678f: Button Group has component is now deprecated, because it has a new name: Action Group. Please migrate to the new Action Group component, which apart from the name is identical.

  The Button Group component remains available for some time to give you opportunity to migrate your code, but it will be removed in an upcoming major release.

### Patch Changes

- Updated dependencies [7fc678f]
- Updated dependencies [7fc678f]
- Updated dependencies [81cf760]
  - @utrecht/button-group-css@1.5.0
  - @utrecht/rich-text-css@1.4.0
  - @utrecht/action-group-css@1.0.0
  - @utrecht/breadcrumb-nav-css@1.5.1

## 7.4.2

### Patch Changes

- Updated dependencies [f92d1a3]
  - @utrecht/ordered-list-css@2.0.0
  - @utrecht/html-content-css@1.4.1

## 7.4.1

### Patch Changes

- Updated dependencies [33eaccf]
  - @utrecht/textbox-css@2.0.0
  - @utrecht/html-content-css@1.4.1

## 7.4.0

### Minor Changes

- 8921e2b: Alert text color now follows design - uses utrecht-alert-color for headings and paragraphs

### Patch Changes

- Updated dependencies [8921e2b]
  - @utrecht/alert-css@2.4.0
  - @utrecht/alert-dialog-css@1.4.2

## 7.3.0

### Minor Changes

- f877f78: Initial version of the Tooltip component.

### Patch Changes

- Updated dependencies [f877f78]
  - @utrecht/tooltip-css@1.0.0

## 7.2.2

### Patch Changes

- Updated dependencies [cbb98e9]
  - @utrecht/breadcrumb-nav-css@1.5.0

## 7.2.1

### Patch Changes

- Updated dependencies [85ed6c0]
  - @utrecht/alert-css@2.3.0
  - @utrecht/alert-dialog-css@1.4.2

## 7.2.0

### Minor Changes

- 0a6d0fc: Add YouTube video CSS component.

### Patch Changes

- Updated dependencies [b6cd5bb]
  - @utrecht/youtube-video-css@1.0.0

## 7.1.6

### Patch Changes

- Updated dependencies [5902c57]
- Updated dependencies [e20f33c]
- Updated dependencies [7274362]
  - @utrecht/accordion-css@2.0.0
  - @utrecht/alert-css@2.2.1
  - @utrecht/alert-dialog-css@1.4.2
  - @utrecht/alternate-lang-nav-css@1.3.1
  - @utrecht/article-css@1.5.1
  - @utrecht/backdrop-css@1.4.1
  - @utrecht/badge-counter-css@1.4.1
  - @utrecht/badge-list-css@2.2.1
  - @utrecht/badge-status-css@1.4.1
  - @utrecht/blockquote-css@1.6.1
  - @utrecht/body-css@1.2.1
  - @utrecht/breadcrumb-nav-css@1.4.1
  - @utrecht/button-css@2.3.1
  - @utrecht/button-group-css@1.4.1
  - @utrecht/button-link-css@1.3.1
  - @utrecht/calendar-css@1.4.1
  - @utrecht/checkbox-css@1.6.1
  - @utrecht/code-css@1.5.1
  - @utrecht/code-block-css@1.5.1
  - @utrecht/color-sample-css@1.4.1
  - @utrecht/column-layout-css@1.5.1
  - @utrecht/combobox-css@1.4.1
  - @utrecht/currency-data-css@1.3.1
  - @utrecht/custom-checkbox-css@1.3.2
  - @utrecht/data-badge-css@1.0.1
  - @utrecht/data-list-css@1.4.1
  - @utrecht/data-placeholder-css@1.4.1
  - @utrecht/digid-button-css@1.4.1
  - @utrecht/document-css@1.5.1
  - @utrecht/drawer-css@1.4.1
  - @utrecht/emphasis-css@1.5.1
  - @utrecht/figure-css@1.5.1
  - @utrecht/form-css@1.5.1
  - @utrecht/form-field-css@1.5.1
  - @utrecht/form-field-description-css@1.5.1
  - @utrecht/form-field-error-message-css@1.5.1
  - @utrecht/form-fieldset-css@1.5.1
  - @utrecht/form-label-css@1.6.1
  - @utrecht/form-toggle-css@1.5.1
  - @utrecht/heading-1-css@1.5.1
  - @utrecht/heading-2-css@1.5.1
  - @utrecht/heading-3-css@1.5.1
  - @utrecht/heading-4-css@1.5.1
  - @utrecht/heading-5-css@1.5.1
  - @utrecht/heading-6-css@1.5.1
  - @utrecht/heading-group-css@1.5.1
  - @utrecht/html-content-css@1.4.1
  - @utrecht/iban-data-css@1.3.1
  - @utrecht/icon-css@2.0.1
  - @utrecht/img-css@1.3.1
  - @utrecht/index-char-nav-css@1.4.1
  - @utrecht/link-css@1.6.1
  - @utrecht/link-button-css@1.4.1
  - @utrecht/link-list-css@2.3.1
  - @utrecht/link-social-css@1.4.1
  - @utrecht/list-social-css@1.4.1
  - @utrecht/listbox-css@1.5.2
  - @utrecht/logo-css@1.4.1
  - @utrecht/logo-button-css@1.4.1
  - @utrecht/logo-image-css@1.4.1
  - @utrecht/map-marker-css@1.4.1
  - @utrecht/mark-css@1.5.1
  - @utrecht/multiline-data-css@1.3.1
  - @utrecht/nav-bar-css@1.4.1
  - @utrecht/nav-list-css@1.3.1
  - @utrecht/number-badge-css@2.3.1
  - @utrecht/number-data-css@1.4.1
  - @utrecht/ordered-list-css@1.5.2
  - @utrecht/page-css@1.4.1
  - @utrecht/page-body-css@0.1.1
  - @utrecht/page-content-css@1.4.1
  - @utrecht/page-footer-css@2.1.1
  - @utrecht/page-header-css@1.5.1
  - @utrecht/page-layout-css@1.1.1
  - @utrecht/pagination-css@1.4.1
  - @utrecht/paragraph-css@2.3.1
  - @utrecht/pre-heading-css@1.4.1
  - @utrecht/preserve-data-css@1.3.1
  - @utrecht/radio-button-css@1.6.1
  - @utrecht/rich-text-css@1.3.1
  - @utrecht/root-css@1.2.1
  - @utrecht/search-bar-css@2.2.1
  - @utrecht/select-css@1.8.1
  - @utrecht/separator-css@1.5.1
  - @utrecht/skip-link-css@1.5.1
  - @utrecht/spotlight-section-css@1.6.1
  - @utrecht/surface-css@1.4.1
  - @utrecht/table-css@1.6.1
  - @utrecht/table-of-contents-css@0.3.1
  - @utrecht/textarea-css@2.3.2
  - @utrecht/textbox-css@1.7.1
  - @utrecht/top-task-link-css@1.4.1
  - @utrecht/top-task-nav-css@1.3.1
  - @utrecht/unordered-list-css@1.5.1
  - @utrecht/url-data-css@1.3.1

## 7.1.5

### Patch Changes

- Updated dependencies [b74af00]
  - @utrecht/textarea-css@2.3.1
  - @utrecht/html-content-css@1.4.0

## 7.1.4

### Patch Changes

- Updated dependencies [94ddb19]
- Updated dependencies [94ddb19]
  - @utrecht/table-css@1.6.0
  - @utrecht/html-content-css@1.4.0

## 7.1.3

### Patch Changes

- Updated dependencies [730e2dd]
  - @utrecht/textbox-css@1.7.0
  - @utrecht/html-content-css@1.4.0

## 7.1.2

### Patch Changes

- 6869651: Move `@utrecht/build-utils-css` to devDependencies
  - @utrecht/accordion-css@1.6.0
  - @utrecht/alert-css@2.2.0
  - @utrecht/alert-dialog-css@1.4.1
  - @utrecht/alternate-lang-nav-css@1.3.0
  - @utrecht/article-css@1.5.0
  - @utrecht/backdrop-css@1.4.0
  - @utrecht/badge-counter-css@1.4.0
  - @utrecht/badge-list-css@2.2.0
  - @utrecht/badge-status-css@1.4.0
  - @utrecht/blockquote-css@1.6.0
  - @utrecht/body-css@1.2.0
  - @utrecht/breadcrumb-nav-css@1.4.0
  - @utrecht/button-css@2.3.0
  - @utrecht/button-group-css@1.4.0
  - @utrecht/button-link-css@1.3.0
  - @utrecht/calendar-css@1.4.0
  - @utrecht/checkbox-css@1.6.0
  - @utrecht/code-css@1.5.0
  - @utrecht/code-block-css@1.5.0
  - @utrecht/color-sample-css@1.4.0
  - @utrecht/column-layout-css@1.5.0
  - @utrecht/combobox-css@1.4.0
  - @utrecht/currency-data-css@1.3.0
  - @utrecht/custom-checkbox-css@1.3.1
  - @utrecht/data-badge-css@1.0.0
  - @utrecht/data-list-css@1.4.0
  - @utrecht/data-placeholder-css@1.4.0
  - @utrecht/digid-button-css@1.4.0
  - @utrecht/document-css@1.5.0
  - @utrecht/drawer-css@1.4.0
  - @utrecht/emphasis-css@1.5.0
  - @utrecht/figure-css@1.5.0
  - @utrecht/form-css@1.5.0
  - @utrecht/form-field-css@1.5.0
  - @utrecht/form-field-description-css@1.5.0
  - @utrecht/form-field-error-message-css@1.5.0
  - @utrecht/form-fieldset-css@1.5.0
  - @utrecht/form-label-css@1.6.0
  - @utrecht/form-toggle-css@1.5.0
  - @utrecht/heading-1-css@1.5.0
  - @utrecht/heading-2-css@1.5.0
  - @utrecht/heading-3-css@1.5.0
  - @utrecht/heading-4-css@1.5.0
  - @utrecht/heading-5-css@1.5.0
  - @utrecht/heading-6-css@1.5.0
  - @utrecht/heading-group-css@1.5.0
  - @utrecht/html-content-css@1.4.0
  - @utrecht/iban-data-css@1.3.0
  - @utrecht/icon-css@2.0.0
  - @utrecht/img-css@1.3.0
  - @utrecht/index-char-nav-css@1.4.0
  - @utrecht/link-css@1.6.0
  - @utrecht/link-button-css@1.4.0
  - @utrecht/link-list-css@2.3.0
  - @utrecht/link-social-css@1.4.0
  - @utrecht/list-social-css@1.4.0
  - @utrecht/listbox-css@1.5.1
  - @utrecht/logo-css@1.4.0
  - @utrecht/logo-button-css@1.4.0
  - @utrecht/logo-image-css@1.4.0
  - @utrecht/map-marker-css@1.4.0
  - @utrecht/mark-css@1.5.0
  - @utrecht/multiline-data-css@1.3.0
  - @utrecht/nav-bar-css@1.4.0
  - @utrecht/nav-list-css@1.3.0
  - @utrecht/number-badge-css@2.3.0
  - @utrecht/number-data-css@1.4.0
  - @utrecht/ordered-list-css@1.5.1
  - @utrecht/page-css@1.4.0
  - @utrecht/page-body-css@0.1.0
  - @utrecht/page-content-css@1.4.0
  - @utrecht/page-footer-css@2.1.0
  - @utrecht/page-header-css@1.5.0
  - @utrecht/page-layout-css@1.1.0
  - @utrecht/pagination-css@1.4.0
  - @utrecht/paragraph-css@2.3.0
  - @utrecht/pre-heading-css@1.4.0
  - @utrecht/preserve-data-css@1.3.0
  - @utrecht/radio-button-css@1.6.0
  - @utrecht/rich-text-css@1.3.0
  - @utrecht/root-css@1.2.0
  - @utrecht/search-bar-css@2.2.0
  - @utrecht/select-css@1.8.0
  - @utrecht/separator-css@1.5.0
  - @utrecht/skip-link-css@1.5.0
  - @utrecht/spotlight-section-css@1.6.0
  - @utrecht/surface-css@1.4.0
  - @utrecht/table-css@1.5.0
  - @utrecht/table-of-contents-css@0.3.0
  - @utrecht/textarea-css@2.3.0
  - @utrecht/textbox-css@1.6.0
  - @utrecht/top-task-link-css@1.4.0
  - @utrecht/top-task-nav-css@1.3.0
  - @utrecht/unordered-list-css@1.5.0
  - @utrecht/url-data-css@1.3.0

## 7.1.1

### Patch Changes

- 4880767: Add `list-style-type` CSS property to `utrecht-ordered-list`

## 7.1.0

### Minor Changes

- 32b2d96: Add 4 new CSS components: `.utrecht-root`, `.utrecht-body`, `.utrecht-page-layout` and `.utrecht-page-body`.

## 7.0.0

### Major Changes

- 513cf8d: Remove the following (rarely used) components: map control button, menulijst, topnav.

## 6.1.0

### Minor Changes

- 275db34: Add design tokens to Blockquote:

  - `utrecht.blockquote.border-width`
  - `utrecht.blockquote.row-gap`

## 6.0.0

### Major Changes

- fe20468: Breaking change: Removed "lead" and "small" styling from HTML paragraph component. If "lead" or "small" are now used, there will be no styling.

  Removed "lead" and "small" stories from html paragraph.

- c3660c1: Rename design token `utrecht.button.icon.gap` to `utrecht.button.column-gap`

### Minor Changes

- 200e34b: Add `utrecht.number-badge.border-color` and `utrecht.number-badge.border-width` design tokens.
- 24b4813: Add an optional element class `utrecht-button__label` to support other inline styling without a gap

### Patch Changes

- 95901d6: Add CSS variables fallback, so disabled radio button looks like normal radio button when no design tokens are set.

## 5.2.0

### Minor Changes

- 1227678: Add Table of Contents component for the PDF component library.

## 5.1.0

### Minor Changes

- 8431fb9: Add the following design tokens to breadcrumb navigation:

  - `utrecht.breadcrumb-nav.line-height`
  - `utrecht.breadcrumb-nav.link.active.color`
  - `utrecht.breadcrumb-nav.link.active.text-decoration`

- 48ccd57: Support bold form controls.

  Add the following design tokens:

  - `utrecht.form-control.font-weight` (common token)
  - `utrecht.listbox.font-weight`
  - `utrecht.select.font-weight`
  - `utrecht.textarea.font-weight`
  - `utrecht.textbox.font-weight`

- c8520fe: Support styling of a form field `<label>` element that contains a checkbox or radio button, within `class="utrecht-html"`.

### Patch Changes

- 5695c6c: Improve table component CSS to explicitly fallback to `background-color: transparent` to have a valid CSS value. ([GitHub Issue nl-design-system/utrecht#2435](https://github.com/nl-design-system/utrecht/issues/2435))
- 9aa2be4: Fix regression in `utrecht.button.font-family` support.

## 5.0.0

### Major Changes

- ecf877a: Refactor the Alert component for more consistent token names and use flex instead of grid layout. Adding support for content and message sections.

  - Rename `utrecht.alert.icon.gap` to `utrecht.alert.column-gap`
  - Add `utrecht.alert.message.row-gap` token
  - Add `utrecht.alert.content.row-gap` token
  - Add `utrecht.alert.icon.size` token
  - Add `utrecht.alert.icon.inset-block-start` token
  - Add `utrecht-alert__content` class
  - Change implementation of layout from grid to flex

## 4.2.0

### Minor Changes

- 59c225a: Add CSS file for the component library that works with Prince XML: `dist/prince-xml.css`.
- 4037f4c: Add two new design tokens to "Badge counter":

  - `utrecht.badge-counter.min-block-size`
  - `utrecht.badge-counter.min-inline-size`: the primary token to configure the size.

  The following design token is now deprecated. Reason for deprecation: it does not follow naming conventions, to use existing CSS property names — "`min-size`" is a made-up property.

  - `utrecht.badge-counter.min-size`

- 5299695: Button now support two new design tokens for each appearance: `font-size` and a matching `line-height`. These are optional, by default the button still uses `utrecht.button.font-size` and `utrecht.button.line-height`.

  These are the 6 new design tokens:

  - `utrecht.button.primary-action.font-size`
  - `utrecht.button.primary-action.line-height`
  - `utrecht.button.secondary-action.font-size`
  - `utrecht.button.secondary-action.line-height`
  - `utrecht.button.subtle.font-size`
  - `utrecht.button.subtle.line-height`

### Patch Changes

- f50c984: Remove empty `dist/*.js` files from the CSS component library.

## 4.1.0

### Minor Changes

- c5a7e71: Add margin tokens to the Accordion component:

  - `utrecht.accordion.margin-block-end`
  - `utrecht.accordion.margin-block-start`

## 4.0.0

### Major Changes

- 14c8559: Replace `utrecht.link-list.item.margin-block-start` design token with `utrecht.link-list.row-gap`.
- bd0514c: Rename tokens in the Link list component, because they should be on `link` instead of on `item`. "Item" currently only exists in CSS, but is not necessary to build the Link list in Figma.

  - Rename `utrecht.link-list.item.font-weight` to `utrecht.link-list.link.font-weight`.
  - Rename `utrecht.link-list.item.column-gap` to `utrecht.link-list.link.column-gap`.

### Minor Changes

- e2b188d: Add design token to Link list component: `utrecht.link-list.link.text-decoration`, so you can enable or disable the underline. By default the links have no underline.

### Patch Changes

- 0e2e4da: Fix rendering of the checkbox component in the combined indeterminate and checked state, to have an indeterminate icon instead of a checked icon.'

## 3.2.0

### Minor Changes

- 8d8babe: Add 5 missing CSS components to CSS component library bundle.

  - `utrecht-combobox`
  - `utrecht-currency-data`
  - `utrecht-data-placeholder`
  - `utrecht-listbox`
  - `utrecht-logo-image`
  - `utrecht-preserve-data`

## 3.1.0

### Minor Changes

- f9c23c6: Add `utrecht-accordion__button--utrecht` class name.
  Add `utrecht-accordion__button-icon` class name.
- f9c23c6: Add `utrecht.accordion.button.icon.gap` design token.

## 3.0.0

### Major Changes

- af24025682: rename `utrecht-button-group--vertical` mixin and class name to `utrecht-button-group--column`'

### Patch Changes

- af24025682: inline button link component no longer automatically stretches to match size of button group

## 1.0.1

### Patch Changes

- 0e434e0a19: fix rendering glitch in Firefox when hovering over a button

## 1.0.0

### Patch Changes

- c7cae76a0d: allow word wrap for URL data, so it is fully readable in print and on screen
- 28a3ef848a: Support rendering of `<select>` element with multiple attribute.
