# @utrecht/design-tokens

## 5.0.0

### Major Changes

- edac79f: - badge-status is no longer styled through common badge tokens but has its own set of tokens
  - badge-status has been renamed to status-badge, use @utrecht/status-badge-css instead of @utrecht/badge-status-css

### Patch Changes

- 0fcdfbf: Fix the mixins for link focus and focus-visible states in the navigation component to correctly reference the design tokens for background colors and text decorations.

## 4.2.0

### Minor Changes

- f02b554: Corrected several spacing token values and metadata in the Breadcrumb Navigation and Rich Text components.
- 55988ac: Add hover, focus, and active state tokens for Utrecht navigation toggle button

## 4.1.1

### Patch Changes

- e7b59b3: Color changed hr
- 951bb2c: Align the flo-legal style with Figma
- fd2db7b: Update the button `font-weight` from 700 to 600 (semibold)

## 4.1.0

### Minor Changes

- 3a99ec0: Add **Grid** component (CSS and React) to NL Design Systeem.

  - Introduced `@utrecht/grid-css` with responsive grid SCSS mixins and tokens
  - Added `@utrecht/grid-react` with `<Grid>` and `<GridCell>` components
  - Added grid-related design tokens for breakpoints, spacing, and columns
  - Integrated grid styles into `@utrecht/component-library-css`
  - Added Storybook stories demonstrating responsive layouts, spacing, and alignment

## 4.0.0

### Major Changes

- cce8496: Major update to typography:

  - Replace font family with Noto Sans Variable
  - Add font-weight: 600 (semi-bold) variant
  - Update design token documentation

### Patch Changes

- 9b3cb1e: Release with npm provenance.

## 3.4.1

### Patch Changes

- 4783080: Changed the background-color of the `link-social` component from `utrecht.color.red.40` to `utrecht.color.blue.35`

## 3.4.0

### Minor Changes

- f7e5550: Add Navigation-css component with mobile drawer support

## 3.3.0

### Minor Changes

- f877f78: Initial version of the Tooltip component.

## 3.2.0

### Minor Changes

- cbb98e9: Add `utrecht.breadcrumb-nav.item.first.padding-inline-start` token.

  Use this token to align the content of the first link with the other content, by setting it to `0`.

## 3.1.0

### Minor Changes

- c7fa442: Add the card design tokens

## 3.0.0

### Major Changes

- 5902c57: Remove deprecated `utrecht-accordion__button--utrecht` class. It has been fully removed in this release.

### Minor Changes

- 7a3b28b: Add the new Accordion style design tokens

## 2.5.1

### Patch Changes

- 965bf7d: Update Backdrop background-color value

## 2.5.0

### Minor Changes

- 882e10d: Add design tokens for `body`, `nav-bar`, `page-body`, `page-footer`, `page-header` and `root`.
- 3bc0dd6: Add some design tokens for the Signalen application.

## 2.4.0

### Minor Changes

- 6ce885b: Add design tokens for NL Design System Candidate components:

  - `nl-code-block…`
  - `nl-data-badge`
  - `nl-heading`
  - `nl-mark`
  - `nl-number-badge`
  - `nl-paragraph`
  - `nl-skip-link`

## 2.3.0

### Minor Changes

- b2cb0fa: Add `list.mjs` and `list.d.mts` to the design tokens package.

## 2.2.0

### Minor Changes

- fb0a096: Add `utrecht-theme--viewport-scale` class name to `dist/index.css` for responsive scales.

## 2.1.1

### Patch Changes

- 7fc1efc: Fix `propery.css` output. (The file was empty.)
- 7fc1efc: No longer include `::backdrop` selectors, those are no longer needed in evergreen browsers.'
- 3185cc0: Convert all `px` `font-size` design tokens to `rem`.

## 2.1.0

### Minor Changes

- 7b8ebea: Add design tokens with styling for the new `ok` and `error` variants of the Spotlight Section component.

## 2.0.0

### Major Changes

- ecf877a: Refactor the Alert component for more consistent token names and use flex instead of grid layout. Adding support for content and message sections.

  - Rename `utrecht.alert.icon.gap` to `utrecht.alert.column-gap`
  - Add `utrecht.alert.message.row-gap` token
  - Add `utrecht.alert.content.row-gap` token
  - Add `utrecht.alert.icon.size` token
  - Add `utrecht.alert.icon.inset-block-start` token
  - Add `utrecht-alert__content` class
  - Change implementation of layout from grid to flex

## 1.1.0

### Minor Changes

- 5889d80: Add CSS theme file that works with Prince XML: `dist/theme-prince-xml.css`. In the future this file will be removed when we can exclude the `::backdrop` selector from the theme selector.'

## 1.0.0

### Major Changes

- 14c8559: Replace `utrecht.link-list.item.margin-block-start` design token with `utrecht.link-list.row-gap`.
- bd0514c: Rename tokens in the Link list component, because they should be on `link` instead of on `item`. "Item" currently only exists in CSS, but is not necessary to build the Link list in Figma.

  - Rename `utrecht.link-list.item.font-weight` to `utrecht.link-list.link.font-weight`.
  - Rename `utrecht.link-list.item.column-gap` to `utrecht.link-list.link.column-gap`.

### Minor Changes

- e2b188d: Add design token to Link list component: `utrecht.link-list.link.text-decoration`, so you can enable or disable the underline. By default the links have no underline.
