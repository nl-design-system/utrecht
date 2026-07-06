# @utrecht/grid-css

## 2.1.0

### Minor Changes

- 8570971: Add `utrecht-grid--cols-{n}` modifier classes (1–12) to set equal-width column counts via CSS custom properties.

## 2.0.1

### Patch Changes

- 0f759fc: Ensure package is published with provenance

## 2.0.0

### Major Changes

- eabbf23: Publish `tokens.json` in DTCG format: `$value` instead of `value`, standard `$type`, etcetera.

## 1.0.0

### Major Changes

- 3a99ec0: Add **Grid** component (CSS and React) to NL Design Systeem.

  - Introduced `@utrecht/grid-css` with responsive grid SCSS mixins and tokens
  - Added `@utrecht/grid-react` with `<Grid>` and `<GridCell>` components
  - Added grid-related design tokens for breakpoints, spacing, and columns
  - Integrated grid styles into `@utrecht/component-library-css`
  - Added Storybook stories demonstrating responsive layouts, spacing, and alignment
