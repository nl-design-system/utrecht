# @utrecht/component-library-react

## 12.0.0

### Major Changes

- d1f8749: NavBar: Changed from div to nav element, added label prop with heading and aria-labelledby for accessibility, fixed useId hook usage.
  NavList: Added inlineSizeAuto prop, refactored to CSS-only aria-current styling for active items.

## 11.0.0

### Major Changes

- edac79f: - badge-status is no longer styled through common badge tokens but has its own set of tokens
  - badge-status has been renamed to status-badge, use @utrecht/status-badge-css instead of @utrecht/badge-status-css

### Patch Changes

- b912501: Changed the calendar navigation label to use the calendar year instead of the local week-numbering year
- Updated dependencies [edac79f]
- Updated dependencies [b912501]
- Updated dependencies [3be2632]
  - @utrecht/status-badge-css@1.0.0
  - @utrecht/calendar-react@1.0.15
  - @utrecht/rich-text-css@2.1.0

## 10.3.10

### Patch Changes

- Updated dependencies [f02b554]
  - @utrecht/breadcrumb-nav-css@2.1.0

## 10.3.9

### Patch Changes

- 9b3cb1e: Release with npm provenance.
- Updated dependencies [9b3cb1e]
  - @utrecht/accordion-css@3.0.1
  - @utrecht/alert-css@3.0.1
  - @utrecht/alert-dialog-css@2.0.1
  - @utrecht/alternate-lang-nav-css@2.0.1
  - @utrecht/article-css@2.0.1
  - @utrecht/backdrop-css@2.0.1
  - @utrecht/badge-counter-css@2.0.1
  - @utrecht/badge-list-css@3.0.1
  - @utrecht/badge-status-css@2.0.1
  - @utrecht/blockquote-css@2.0.1
  - @utrecht/breadcrumb-nav-css@2.0.1
  - @utrecht/button-link-css@2.0.1
  - @utrecht/card-css@1.0.1
  - @utrecht/code-css@2.0.1
  - @utrecht/code-block-css@2.0.1
  - @utrecht/color-sample-css@2.0.1
  - @utrecht/column-layout-css@2.0.1
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
  - @utrecht/focus-ring-css@3.0.1
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
  - @utrecht/link-button-css@2.0.1
  - @utrecht/link-list-css@3.0.1
  - @utrecht/link-social-css@2.0.1
  - @utrecht/list-social-css@2.0.1
  - @utrecht/logo-css@2.0.1
  - @utrecht/logo-button-css@1.4.2
  - @utrecht/logo-image-css@1.4.2
  - @utrecht/map-marker-css@2.0.1
  - @utrecht/map-control-button-css@3.0.1
  - @utrecht/mark-css@2.0.1
  - @utrecht/multiline-data-css@2.0.1
  - @utrecht/nav-bar-css@2.0.1
  - @utrecht/nav-list-css@1.3.2
  - @utrecht/number-badge-css@3.0.1
  - @utrecht/number-data-css@2.0.1
  - @utrecht/open-forms-container-css@2.0.1
  - @utrecht/ordered-list-css@3.0.1
  - @utrecht/page-css@2.0.1
  - @utrecht/page-content-css@2.0.1
  - @utrecht/page-footer-css@3.0.1
  - @utrecht/page-header-css@2.0.1
  - @utrecht/pagination-css@2.0.3
  - @utrecht/paragraph-css@3.0.1
  - @utrecht/pre-heading-css@2.0.1
  - @utrecht/preserve-data-css@2.0.1
  - @utrecht/rich-text-css@2.0.1
  - @utrecht/search-bar-css@3.0.1
  - @utrecht/select-css@2.0.1
  - @utrecht/separator-css@2.0.1
  - @utrecht/skip-link-css@2.0.1
  - @utrecht/spotlight-section-css@2.0.1
  - @utrecht/subscript-css@2.0.1
  - @utrecht/superscript-css@2.0.1
  - @utrecht/surface-css@2.0.1
  - @utrecht/table-css@2.0.1
  - @utrecht/table-of-contents-css@1.0.1
  - @utrecht/textarea-css@3.0.1
  - @utrecht/top-task-link-css@2.0.1
  - @utrecht/top-task-nav-css@1.3.2
  - @utrecht/unordered-list-css@2.0.1
  - @utrecht/url-data-css@2.0.1
  - @utrecht/vega-visualization-css@1.4.2
  - @utrecht/action-group-react@1.1.4
  - @utrecht/button-group-react@1.1.3
  - @utrecht/button-react@2.0.10
  - @utrecht/calendar-react@1.0.14
  - @utrecht/card-react@0.0.4
  - @utrecht/checkbox-react@1.0.11
  - @utrecht/combobox-react@0.0.11
  - @utrecht/data-badge-react@1.0.7
  - @utrecht/fieldset-react@1.0.10
  - @utrecht/form-field-checkbox-react@1.1.3
  - @utrecht/form-field-description-react@1.0.10
  - @utrecht/form-field-error-message-react@1.0.10
  - @utrecht/form-field-react@1.0.10
  - @utrecht/form-label-react@1.0.10
  - @utrecht/link-react@1.0.10
  - @utrecht/listbox-react@1.0.13
  - @utrecht/open-forms-container-react@1.0.5
  - @utrecht/radio-button-react@1.0.10
  - @utrecht/textbox-react@1.0.12

## 10.3.8

### Patch Changes

- 6a1dc0e: Updated peer dependencies for React 19 compatibility.
- Updated dependencies [6a1dc0e]
  - @utrecht/form-field-error-message-react@1.0.9
  - @utrecht/form-field-description-react@1.0.9
  - @utrecht/open-forms-container-react@1.0.4
  - @utrecht/form-field-checkbox-react@1.1.2
  - @utrecht/action-group-react@1.1.3
  - @utrecht/button-group-react@1.1.2
  - @utrecht/radio-button-react@1.0.9
  - @utrecht/data-badge-react@1.0.6
  - @utrecht/form-field-react@1.0.9
  - @utrecht/form-label-react@1.0.9
  - @utrecht/calendar-react@1.0.13
  - @utrecht/checkbox-react@1.0.10
  - @utrecht/combobox-react@0.0.10
  - @utrecht/fieldset-react@1.0.9
  - @utrecht/listbox-react@1.0.12
  - @utrecht/textbox-react@1.0.11
  - @utrecht/button-react@2.0.9
  - @utrecht/card-react@0.0.3
  - @utrecht/link-react@1.0.9

## 10.3.7

### Patch Changes

- Updated dependencies [a22338a]
  - @utrecht/pagination-css@2.0.2

## 10.3.6

### Patch Changes

- Updated dependencies [2af8480]
  - @utrecht/pagination-css@2.0.1

## 10.3.5

### Patch Changes

- Updated dependencies [77438bb]
  - @utrecht/open-forms-container-css@2.0.0
  - @utrecht/alternate-lang-nav-css@2.0.0
  - @utrecht/spotlight-section-css@2.0.0
  - @utrecht/table-of-contents-css@1.0.0
  - @utrecht/data-placeholder-css@2.0.0
  - @utrecht/map-control-button-css@3.0.0
  - @utrecht/custom-checkbox-css@2.0.0
  - @utrecht/breadcrumb-nav-css@2.0.0
  - @utrecht/index-char-nav-css@2.0.0
  - @utrecht/multiline-data-css@2.0.0
  - @utrecht/unordered-list-css@2.0.0
  - @utrecht/badge-counter-css@2.0.0
  - @utrecht/column-layout-css@2.0.0
  - @utrecht/currency-data-css@2.0.0
  - @utrecht/heading-group-css@2.0.0
  - @utrecht/preserve-data-css@2.0.0
  - @utrecht/alert-dialog-css@2.0.0
  - @utrecht/badge-status-css@2.0.0
  - @utrecht/color-sample-css@2.0.0
  - @utrecht/html-content-css@2.0.0
  - @utrecht/number-badge-css@3.0.0
  - @utrecht/ordered-list-css@3.0.0
  - @utrecht/page-content-css@2.0.0
  - @utrecht/top-task-link-css@2.0.0
  - @utrecht/button-link-css@2.0.0
  - @utrecht/form-toggle-css@2.0.0
  - @utrecht/link-button-css@2.0.0
  - @utrecht/link-social-css@2.0.0
  - @utrecht/list-social-css@2.0.0
  - @utrecht/number-data-css@2.0.0
  - @utrecht/page-footer-css@3.0.0
  - @utrecht/page-header-css@2.0.0
  - @utrecht/pre-heading-css@2.0.0
  - @utrecht/superscript-css@2.0.0
  - @utrecht/badge-list-css@3.0.0
  - @utrecht/blockquote-css@2.0.0
  - @utrecht/code-block-css@2.0.0
  - @utrecht/data-badge-css@2.0.0
  - @utrecht/focus-ring-css@3.0.0
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
  - @utrecht/paragraph-css@3.0.0
  - @utrecht/rich-text-css@2.0.0
  - @utrecht/separator-css@2.0.0
  - @utrecht/skip-link-css@2.0.0
  - @utrecht/subscript-css@2.0.0
  - @utrecht/backdrop-css@2.0.0
  - @utrecht/document-css@2.0.0
  - @utrecht/emphasis-css@2.0.0
  - @utrecht/textarea-css@3.0.0
  - @utrecht/url-data-css@2.0.0
  - @utrecht/article-css@2.0.0
  - @utrecht/nav-bar-css@2.0.0
  - @utrecht/surface-css@2.0.0
  - @utrecht/drawer-css@2.0.0
  - @utrecht/figure-css@2.0.0
  - @utrecht/select-css@2.0.0
  - @utrecht/alert-css@3.0.0
  - @utrecht/table-css@2.0.0
  - @utrecht/card-css@1.0.0
  - @utrecht/code-css@2.0.0
  - @utrecht/icon-css@3.0.0
  - @utrecht/logo-css@2.0.0
  - @utrecht/mark-css@2.0.0
  - @utrecht/page-css@2.0.0
  - @utrecht/img-css@2.0.0
  - @utrecht/form-field-error-message-react@1.0.8
  - @utrecht/form-field-description-react@1.0.8
  - @utrecht/open-forms-container-react@1.0.3
  - @utrecht/checkbox-react@1.0.9
  - @utrecht/fieldset-react@1.0.8
  - @utrecht/action-group-react@1.1.2
  - @utrecht/button-group-react@1.1.1
  - @utrecht/radio-button-react@1.0.8
  - @utrecht/data-badge-react@1.0.5
  - @utrecht/form-field-react@1.0.8
  - @utrecht/form-label-react@1.0.8
  - @utrecht/calendar-react@1.0.12
  - @utrecht/combobox-react@0.0.9
  - @utrecht/listbox-react@1.0.11
  - @utrecht/textbox-react@1.0.10
  - @utrecht/button-react@2.0.8
  - @utrecht/card-react@0.0.2
  - @utrecht/link-react@1.0.8
  - @utrecht/form-field-checkbox-react@1.1.1

## 10.3.4

### Patch Changes

- Updated dependencies [bd5ea21]
  - @utrecht/form-field-checkbox-react@1.1.0

## 10.3.3

### Patch Changes

- Updated dependencies [d0e3ca8]
  - @utrecht/figure-css@1.6.0
  - @utrecht/html-content-css@1.4.1

## 10.3.2

### Patch Changes

- @utrecht/action-group-react@1.1.1

## 10.3.1

### Patch Changes

- Updated dependencies [41a5171]
  - @utrecht/action-group-react@1.1.0

## 10.3.0

### Minor Changes

- 7fc678f: Button Group has component is now deprecated, because it has a new name: Action Group. Please migrate to the new Action Group component, which apart from the name is identical.

  The Button Group component remains available for some time to give you opportunity to migrate your code, but it will be removed in an upcoming major release.

### Patch Changes

- Updated dependencies [7fc678f]
- Updated dependencies [7fc678f]
- Updated dependencies [81cf760]
  - @utrecht/button-group-react@1.1.0
  - @utrecht/rich-text-css@1.4.0
  - @utrecht/action-group-react@1.0.0
  - @utrecht/breadcrumb-nav-css@1.5.1

## 10.2.3

### Patch Changes

- Updated dependencies [f92d1a3]
  - @utrecht/ordered-list-css@2.0.0
  - @utrecht/html-content-css@1.4.1

## 10.2.2

### Patch Changes

- @utrecht/html-content-css@1.4.1
- @utrecht/open-forms-container-css@1.0.2
- @utrecht/textbox-react@1.0.9
- @utrecht/open-forms-container-react@1.0.2

## 10.2.1

### Patch Changes

- 8921e2b: Refactor how classnames for Alert are computed
- Updated dependencies [8921e2b]
  - @utrecht/alert-css@2.4.0
  - @utrecht/alert-dialog-css@1.4.2

## 10.2.0

### Minor Changes

- cbb98e9: Add `utrecht.breadcrumb-nav.item.first.padding-inline-start` token.

  Use this token to align the content of the first link with the other content, by setting it to `0`.

### Patch Changes

- Updated dependencies [cbb98e9]
  - @utrecht/breadcrumb-nav-css@1.5.0

## 10.1.0

### Minor Changes

- 85ed6c0: - Use fallback value `info` for optional `type` property in Alert component, when `type` is not given or does not match defined types.
  - Make `role` attribute in Alert component configurable via `role` property (supports either `status` or `alert`).
  - Ensure the `role` attribute in Alert component is always rendered.

### Patch Changes

- Updated dependencies [85ed6c0]
- Updated dependencies [6b57525]
  - @utrecht/alert-css@2.3.0
  - @utrecht/card-css@0.1.0
  - @utrecht/alert-dialog-css@1.4.2
  - @utrecht/card-react@0.0.1

## 10.0.0

### Major Changes

- 5902c57: This release introduces a breaking change by removing the deprecated `appearance='utrecht'` property, which relied on the `utrecht-accordion__button--utrecht` CSS class. Applications using this property will need to update their code to ensure compatibility.
- 5902c57: Remove deprecated `utrecht-accordion__button--utrecht` class. It has been fully removed in this release.

### Patch Changes

- e28abff: Add `currentColor` to the accordion icon component
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
  - @utrecht/breadcrumb-nav-css@1.4.1
  - @utrecht/button-link-css@1.3.1
  - @utrecht/code-css@1.5.1
  - @utrecht/code-block-css@1.5.1
  - @utrecht/color-sample-css@1.4.1
  - @utrecht/column-layout-css@1.5.1
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
  - @utrecht/focus-ring-css@2.3.1
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
  - @utrecht/link-button-css@1.4.1
  - @utrecht/link-list-css@2.3.1
  - @utrecht/link-social-css@1.4.1
  - @utrecht/list-social-css@1.4.1
  - @utrecht/logo-css@1.4.1
  - @utrecht/logo-button-css@1.4.1
  - @utrecht/logo-image-css@1.4.1
  - @utrecht/map-marker-css@1.4.1
  - @utrecht/map-control-button-css@2.2.1
  - @utrecht/mark-css@1.5.1
  - @utrecht/multiline-data-css@1.3.1
  - @utrecht/nav-bar-css@1.4.1
  - @utrecht/nav-list-css@1.3.1
  - @utrecht/number-badge-css@2.3.1
  - @utrecht/number-data-css@1.4.1
  - @utrecht/open-forms-container-css@1.0.1
  - @utrecht/ordered-list-css@1.5.2
  - @utrecht/page-css@1.4.1
  - @utrecht/page-content-css@1.4.1
  - @utrecht/page-footer-css@2.1.1
  - @utrecht/page-header-css@1.5.1
  - @utrecht/pagination-css@1.4.1
  - @utrecht/paragraph-css@2.3.1
  - @utrecht/pre-heading-css@1.4.1
  - @utrecht/preserve-data-css@1.3.1
  - @utrecht/rich-text-css@1.3.1
  - @utrecht/search-bar-css@2.2.1
  - @utrecht/select-css@1.8.1
  - @utrecht/separator-css@1.5.1
  - @utrecht/skip-link-css@1.5.1
  - @utrecht/spotlight-section-css@1.6.1
  - @utrecht/subscript-css@1.3.1
  - @utrecht/superscript-css@1.3.1
  - @utrecht/surface-css@1.4.1
  - @utrecht/table-css@1.6.1
  - @utrecht/table-of-contents-css@0.3.1
  - @utrecht/textarea-css@2.3.2
  - @utrecht/top-task-link-css@1.4.1
  - @utrecht/top-task-nav-css@1.3.1
  - @utrecht/unordered-list-css@1.5.1
  - @utrecht/url-data-css@1.3.1
  - @utrecht/vega-visualization-css@1.4.1
  - @utrecht/button-react@2.0.7
  - @utrecht/button-group-react@1.0.1
  - @utrecht/calendar-react@1.0.11
  - @utrecht/checkbox-react@1.0.8
  - @utrecht/combobox-react@0.0.8
  - @utrecht/data-badge-react@1.0.4
  - @utrecht/form-field-react@1.0.7
  - @utrecht/form-field-description-react@1.0.7
  - @utrecht/form-field-error-message-react@1.0.7
  - @utrecht/fieldset-react@1.0.7
  - @utrecht/form-label-react@1.0.7
  - @utrecht/link-react@1.0.7
  - @utrecht/listbox-react@1.0.10
  - @utrecht/open-forms-container-react@1.0.1
  - @utrecht/radio-button-react@1.0.7
  - @utrecht/textbox-react@1.0.8
  - @utrecht/form-field-checkbox-react@1.0.10

## 9.0.6

### Patch Changes

- Updated dependencies [b74af00]
  - @utrecht/textarea-css@2.3.1
  - @utrecht/html-content-css@1.4.0

## 9.0.5

### Patch Changes

- Updated dependencies [94ddb19]
- Updated dependencies [94ddb19]
  - @utrecht/table-css@1.6.0
  - @utrecht/html-content-css@1.4.0

## 9.0.4

### Patch Changes

- Updated dependencies [e0edcc9]
- Updated dependencies [426f11c]
- Updated dependencies [51c9249]
  - @utrecht/open-forms-container-react@1.0.0
  - @utrecht/open-forms-container-css@1.0.0
  - @utrecht/html-content-css@1.4.0
  - @utrecht/textbox-react@1.0.7

## 9.0.3

### Patch Changes

- Updated dependencies [aaf75bf]
  - @utrecht/ordered-list-css@1.5.1
  - @utrecht/html-content-css@1.4.0

## 9.0.2

### Patch Changes

- Updated dependencies [e336858]
  - @utrecht/button-group-react@1.0.0

## 9.0.1

### Patch Changes

- c4b943b: Fix `exports` to include `.md` files and consistently support the main import.
  Note: the `.md` files are for development purposes only, they are not supported as part of the public API.
- Updated dependencies [b5deff8]
- Updated dependencies [729f698]
- Updated dependencies [c4b943b]
  - @utrecht/form-toggle-css@1.5.0
  - @utrecht/article-css@1.5.0
  - @utrecht/blockquote-css@1.6.0
  - @utrecht/code-block-css@1.5.0
  - @utrecht/code-css@1.5.0
  - @utrecht/document-css@1.5.0
  - @utrecht/emphasis-css@1.5.0
  - @utrecht/figure-css@1.5.0
  - @utrecht/heading-1-css@1.5.0
  - @utrecht/heading-2-css@1.5.0
  - @utrecht/heading-3-css@1.5.0
  - @utrecht/heading-4-css@1.5.0
  - @utrecht/heading-5-css@1.5.0
  - @utrecht/heading-6-css@1.5.0
  - @utrecht/heading-group-css@1.5.0
  - @utrecht/html-content-css@1.4.0
  - @utrecht/mark-css@1.5.0
  - @utrecht/ordered-list-css@1.5.0
  - @utrecht/paragraph-css@2.3.0
  - @utrecht/select-css@1.8.0
  - @utrecht/separator-css@1.5.0
  - @utrecht/subscript-css@1.3.0
  - @utrecht/superscript-css@1.3.0
  - @utrecht/table-css@1.5.0
  - @utrecht/textarea-css@2.3.0
  - @utrecht/unordered-list-css@1.5.0
  - @utrecht/form-field-error-message-react@1.0.6
  - @utrecht/form-field-description-react@1.0.6
  - @utrecht/form-field-checkbox-react@1.0.9
  - @utrecht/radio-button-react@1.0.6
  - @utrecht/data-badge-react@1.0.3
  - @utrecht/form-field-react@1.0.6
  - @utrecht/form-label-react@1.0.6
  - @utrecht/calendar-react@1.0.10
  - @utrecht/checkbox-react@1.0.7
  - @utrecht/combobox-react@0.0.7
  - @utrecht/fieldset-react@1.0.6
  - @utrecht/listbox-react@1.0.9
  - @utrecht/textbox-react@1.0.6
  - @utrecht/button-react@2.0.6
  - @utrecht/link-react@1.0.6
  - @utrecht/button-link-css@1.3.0
  - @utrecht/link-button-css@1.4.0

## 9.0.0

### Major Changes

- 65f3cd5: Ignore combinations of `lead` and `small` appearances for paragraph via deprecated boolean properties.
- 9796c79: Disallow any `string` as Paragraph `appearance`, require an enum. You can now use the new `isParagraphAppearance` to type cast to the enum.

### Patch Changes

- Updated dependencies [de1c443]
  - @utrecht/icon-css@2.0.0

## 8.0.5

### Patch Changes

- 25f8ba5: Make CSS and React components a dependency, instead of a devDependency. This should fix some TypeScript errors about missing types.
- Updated dependencies [25f8ba5]
  - @utrecht/form-field-error-message-react@1.0.5
  - @utrecht/form-field-description-react@1.0.5
  - @utrecht/radio-button-react@1.0.5
  - @utrecht/data-badge-react@1.0.2
  - @utrecht/form-field-react@1.0.5
  - @utrecht/form-label-react@1.0.5
  - @utrecht/checkbox-react@1.0.6
  - @utrecht/combobox-react@0.0.6
  - @utrecht/fieldset-react@1.0.5
  - @utrecht/listbox-react@1.0.8
  - @utrecht/textbox-react@1.0.5
  - @utrecht/button-react@2.0.5
  - @utrecht/link-react@1.0.5
  - @utrecht/form-field-checkbox-react@1.0.8
  - @utrecht/calendar-react@1.0.9

## 8.0.4

### Patch Changes

- 9bf9fe9: Fix `role="img"` for VegaVizualisation.
- d25537e: Scroll alert dialogs when viewport is too small for content.
- Updated dependencies [7a8910c]
  - @utrecht/listbox-react@1.0.7
  - @utrecht/radio-button-react@1.0.4

## 8.0.3

### Patch Changes

- Updated dependencies [b987a9e]
  - @utrecht/listbox-react@1.0.6

## 8.0.2

### Patch Changes

- Updated dependencies [890d7e7]
  - @utrecht/checkbox-react@1.0.5
  - @utrecht/form-field-checkbox-react@1.0.7

## 8.0.1

### Patch Changes

- 9bd83e5: Update dependencies.

## 8.0.0

### Major Changes

- f2c0a12: The `DataBadge` component now renders the `utrecht-data-badge` class name instead of the `utrecht-badge-data` class name.

  The name of the class name is now in sync with the [NL Design System "Data Badge" component](https://nldesignsystem.nl/data-badge).

  Migration: replace any `.utrecht-badge-data` selectors you might have, with `.utrecht-data-badge`.

## 7.3.8

### Patch Changes

- f564dee: Use correct `stroke-width` syntax in SVG icon of the Accordion, and avoid warning in logs.
  - @utrecht/button-react@2.0.4
  - @utrecht/calendar-react@1.0.8
  - @utrecht/checkbox-react@1.0.4
  - @utrecht/combobox-react@0.0.5
  - @utrecht/form-field-react@1.0.4
  - @utrecht/form-field-description-react@1.0.4
  - @utrecht/form-field-error-message-react@1.0.4
  - @utrecht/fieldset-react@1.0.4
  - @utrecht/form-label-react@1.0.4
  - @utrecht/link-react@1.0.4
  - @utrecht/listbox-react@1.0.5
  - @utrecht/radio-button-react@1.0.4
  - @utrecht/textbox-react@1.0.4

## 7.3.7

### Patch Changes

- 5881339: Remove `"sideEffects": true` from `package.json` to prevent tree shaking CSS injection'
- Updated dependencies [5881339]
  - @utrecht/button-react@2.0.4
  - @utrecht/calendar-react@1.0.7
  - @utrecht/checkbox-react@1.0.4
  - @utrecht/combobox-react@0.0.5
  - @utrecht/fieldset-react@1.0.4
  - @utrecht/form-field-checkbox-react@1.0.6
  - @utrecht/form-field-description-react@1.0.4
  - @utrecht/form-field-error-message-react@1.0.4
  - @utrecht/form-field-react@1.0.4
  - @utrecht/form-label-react@1.0.4
  - @utrecht/link-react@1.0.4
  - @utrecht/listbox-react@1.0.5
  - @utrecht/radio-button-react@1.0.4
  - @utrecht/textbox-react@1.0.4

## 7.3.6

### Patch Changes

- 709159c: Fix issue causing missing TypeScript `d.ts` files for React components.
- 709159c: Specify `exports` in `package.jon` for `.mjs` files in React components.
- 709159c: Remove CommonJS builds from React components, since in Developer Open Hour everyone assured me surely nobody uses `require()` anymore!
- Updated dependencies [709159c]
- Updated dependencies [709159c]
- Updated dependencies [709159c]
  - @utrecht/button-react@2.0.3
  - @utrecht/calendar-react@1.0.6
  - @utrecht/checkbox-react@1.0.3
  - @utrecht/combobox-react@0.0.4
  - @utrecht/fieldset-react@1.0.3
  - @utrecht/form-field-checkbox-react@1.0.5
  - @utrecht/form-field-description-react@1.0.3
  - @utrecht/form-field-error-message-react@1.0.3
  - @utrecht/form-field-react@1.0.3
  - @utrecht/form-label-react@1.0.3
  - @utrecht/link-react@1.0.3
  - @utrecht/listbox-react@1.0.4
  - @utrecht/radio-button-react@1.0.3
  - @utrecht/textbox-react@1.0.3

## 7.3.5

### Patch Changes

- 6343055: Remove `@babel` runtime from `.mjs` files, use modern JavaScript syntax and use our own CSS injection script.
- Updated dependencies [6343055]
  - @utrecht/form-field-error-message-react@1.0.2
  - @utrecht/form-field-description-react@1.0.2
  - @utrecht/form-field-checkbox-react@1.0.4
  - @utrecht/radio-button-react@1.0.2
  - @utrecht/form-field-react@1.0.2
  - @utrecht/form-label-react@1.0.2
  - @utrecht/calendar-react@1.0.5
  - @utrecht/checkbox-react@1.0.2
  - @utrecht/combobox-react@0.0.3
  - @utrecht/fieldset-react@1.0.2
  - @utrecht/listbox-react@1.0.3
  - @utrecht/textbox-react@1.0.2
  - @utrecht/button-react@2.0.2
  - @utrecht/link-react@1.0.2

## 7.3.4

### Patch Changes

- @utrecht/form-field-error-message-react@1.0.1
- @utrecht/form-field-description-react@1.0.1
- @utrecht/checkbox-react@1.0.1
- @utrecht/fieldset-react@1.0.1
- @utrecht/radio-button-react@1.0.1
- @utrecht/form-field-react@1.0.1
- @utrecht/form-label-react@1.0.1
- @utrecht/calendar-react@1.0.4
- @utrecht/combobox-react@0.0.2
- @utrecht/listbox-react@1.0.2
- @utrecht/textbox-react@1.0.1
- @utrecht/button-react@2.0.1
- @utrecht/link-react@1.0.1

## 7.3.3

### Patch Changes

- Updated dependencies [b1d3bd1]
  - @utrecht/form-field-checkbox-react@1.0.3

## 7.3.2

### Patch Changes

- 46e795c: Consistently use `dist/*.cjs` and `dist/*.mjs` files for React components'
- Updated dependencies [46e795c]
  - @utrecht/form-field-error-message-react@1.0.1
  - @utrecht/form-field-description-react@1.0.1
  - @utrecht/form-field-checkbox-react@1.0.2
  - @utrecht/radio-button-react@1.0.1
  - @utrecht/form-field-react@1.0.1
  - @utrecht/form-label-react@1.0.1
  - @utrecht/calendar-react@1.0.3
  - @utrecht/checkbox-react@1.0.1
  - @utrecht/combobox-react@0.0.2
  - @utrecht/fieldset-react@1.0.1
  - @utrecht/listbox-react@1.0.2
  - @utrecht/textbox-react@1.0.1
  - @utrecht/button-react@2.0.1
  - @utrecht/link-react@1.0.1

## 7.3.1

### Patch Changes

- 64d9157: Fix missing TypeScript types for React components by using `dependencies` instead of `devDependencies`.
- 8f12dce: Stack `z-index` of listbox in popover above other content.

## 7.3.0

### Minor Changes

- 5d83fc4: Add new `ScrollLink` component.

## 7.2.0

### Minor Changes

- 94840f4: For the `Paragraph` component, introduce the `appearance` property. It replaces the `lead` and `small` boolean properties, which are now deprecated.

  Perform the following migration steps:

  - Use `<Paragraph appearance="lead">` instead of `<Paragraph lead>`
  - Use `<Paragraph appearance="small">` instead of `<Paragraph small>`

## 7.1.0

### Minor Changes

- a26f139: Add `FormFieldTextarea` component to the React component library.
- b520118: Support `restProps` for React `ColumnLayout` component.
- 4c0f337: Add `inputRequired` property to React `Textarea`.
- b8b8100: Add `<FormFieldCheckbox>` component.

### Patch Changes

- ecaf6a6: Fix missing CSS when loading `Button` from `dist/css-module/`.

## 7.0.0

### Major Changes

- c3660c1: Rename design token `utrecht.button.icon.gap` to `utrecht.button.column-gap`

### Minor Changes

- 200e34b: Add `utrecht.number-badge.border-color` and `utrecht.number-badge.border-width` design tokens.
- 27f15a9: Add `required` state to the `Fieldset` component in React.'
- c09705f: Add "heading" to the accordion provider.
  Add "heading level" to the accordion provider.
- 24b4813: Add an optional `label` property to React `Button` component, to support better styling of icons.

### Patch Changes

- 27f15a9: Fix `Fieldset` component in React to only render `aria-invalid` for `role="radiogroup"`.
- 9e32a67: - Refactored Icon component: default role="presentation", conditional aria-hidden
  - Added possibility for custom roles and ARIA labels
  - edited unit tests for accessibility tree hidden or not
  - tested in React Storybook

## 6.2.1

### Patch Changes

- 8622506: Fix errors for missing TypeScript definitions in `@utrecht/component-library-react`.

## 6.2.0

### Minor Changes

- 6c0db88: Add Superscript React component.
- 1227678: Add Table of Contents component for the PDF component library.
- f3d47bb: Add `errorMessage` property to FormField.
- a6a2187: Add Subscript React component.
- a919a87: Add new `type` options to the `SpotlightSection` component: `error` and `ok`.
- 38c31c8: - Support `...restProps`, `className` and `forwardRef` for `NavList` React component.
  - Support `className` for `NavListLink` and `NavListButton` React components.

### Patch Changes

- f3d47bb: Fix FormField to render the description before the input.

## 6.1.0

### Minor Changes

- 8431fb9: Add the following design tokens to breadcrumb navigation:

  - `utrecht.breadcrumb-nav.line-height`
  - `utrecht.breadcrumb-nav.link.active.color`
  - `utrecht.breadcrumb-nav.link.active.text-decoration`

- d6bb92d: Add Number badge component as replacement for Badge counter
- 48ccd57: Support bold form controls.

  Add the following design tokens:

  - `utrecht.form-control.font-weight` (common token)
  - `utrecht.listbox.font-weight`
  - `utrecht.select.font-weight`
  - `utrecht.textarea.font-weight`
  - `utrecht.textbox.font-weight`

### Patch Changes

- 5695c6c: Improve table component CSS to explicitly fallback to `background-color: transparent` to have a valid CSS value. ([GitHub Issue nl-design-system/utrecht#2435](https://github.com/nl-design-system/utrecht/issues/2435))
- 9aa2be4: Fix regression in `utrecht.button.font-family` support.

## 6.0.0

### Major Changes

- ecf877a: Refactor the Alert component for more consistent token names and use flex instead of grid layout. Adding support for content and message sections.

  - Rename `utrecht.alert.icon.gap` to `utrecht.alert.column-gap`
  - Add `utrecht.alert.message.row-gap` token
  - Add `utrecht.alert.content.row-gap` token
  - Add `utrecht.alert.icon.size` token
  - Add `utrecht.alert.icon.inset-block-start` token
  - Add `utrecht-alert__content` class
  - Change implementation of layout from grid to flex

## 5.0.0

### Major Changes

- 886b038: Breaking change: Changed Heading to HTML Heading, so the class name 'utrecht-heading-x' is no longer used.

### Minor Changes

- 4037f4c: Add two new design tokens to "Badge counter":

  - `utrecht.badge-counter.min-block-size`
  - `utrecht.badge-counter.min-inline-size`: the primary token to configure the size.

  The following design token is now deprecated. Reason for deprecation: it does not follow naming conventions, to use existing CSS property names — "`min-size`" is a made-up property.

  - `utrecht.badge-counter.min-size`

- a045934: Add HTML Heading component to the React component library.
- 5299695: Button now support two new design tokens for each appearance: `font-size` and a matching `line-height`. These are optional, by default the button still uses `utrecht.button.font-size` and `utrecht.button.line-height`.

  These are the 6 new design tokens:

  - `utrecht.button.primary-action.font-size`
  - `utrecht.button.primary-action.line-height`
  - `utrecht.button.secondary-action.font-size`
  - `utrecht.button.secondary-action.line-height`
  - `utrecht.button.subtle.font-size`
  - `utrecht.button.subtle.line-height`

## 4.2.0

### Minor Changes

- c5a7e71: Add margin tokens to the Accordion component:

  - `utrecht.accordion.margin-block-end`
  - `utrecht.accordion.margin-block-start`

## 4.1.0

### Minor Changes

- a07687b: Add new component: RichText - a container component around components such as paragraph, table, list, accordion etcetera.

## 4.0.0

### Major Changes

- 14c8559: Replace `utrecht.link-list.item.margin-block-start` design token with `utrecht.link-list.row-gap`.
- bd0514c: Rename tokens in the Link list component, because they should be on `link` instead of on `item`. "Item" currently only exists in CSS, but is not necessary to build the Link list in Figma.

  - Rename `utrecht.link-list.item.font-weight` to `utrecht.link-list.link.font-weight`.
  - Rename `utrecht.link-list.item.column-gap` to `utrecht.link-list.link.column-gap`.

### Minor Changes

- c5c2eff: Checkbox supports the `indeterminate` boolean property: `<Checkbox indeterminate />`.

  - It renders the `utrecht-checkbox--indeterminate` class name.
  - It renders the `aria-checked="mixed"` attribute.
  - It sets the `indeterminate` property in the DOM, so the `:indeterminate` CSS pseudo selector is supported too.

  Important note: you must implement behavior for removing the `indeterminate` state after `onChange` yourself.

- 482aa36: Add `FormFieldTextbox` component, that combines `FormField`, `FormLabel`, `Textbox`, `FormFieldDescription` and `FormFieldErrorMessage` in one.
- b007c47: Allow any `string` for Textbox `type`, in addition to the existing enumeration of supported types.
- 12abd0c: Add Blockquote component for React.
- e2b188d: Add design token to Link list component: `utrecht.link-list.link.text-decoration`, so you can enable or disable the underline. By default the links have no underline.

### Patch Changes

- c401145: Use `<ul role="list">` for the `LinkList` component, so VoiceOver in Safari recognizes the list. See ["Fixing" lists (by Scott O'Hara)](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) for context.
- 0e2e4da: Fix rendering of the checkbox component in the combined indeterminate and checked state, to have an indeterminate icon instead of a checked icon.'

## 3.1.0

### Minor Changes

- f9c23c6: Add `icon` and `appearance` properties to `<AccordionProvider>` and `<AccordionSection>`.
- f9c23c6: Add `utrecht-accordion__button-icon--utrecht` mixin
- f9c23c6: Add `utrecht.accordion.button.icon.gap` design token.

## 3.0.0

### Major Changes

- af24025682: `ButtonGroup` boolean property `vertical` now is `direction="column"`'

## 1.0.1

### Patch Changes

- 0e434e0a19: fix rendering glitch in Firefox when hovering over a button

## 1.0.0

### Patch Changes

- c7cae76a0d: allow word wrap for URL data, so it is fully readable in print and on screen
- 28a3ef848a: Support rendering of `<select>` element with multiple attribute.
- b1ac291a45: Omit rendering `aria-required="false"` for `required={false}` in React `Select` component.
