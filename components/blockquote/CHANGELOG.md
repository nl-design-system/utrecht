# @utrecht/blockquote-css

## 1.6.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.6.0

### Minor Changes

- 729f698: Restore vanilla HTML implementations to the npm packages of CSS components, with the following files:

  - `dist/html/index.css`
  - `dist/html/index.min.css`
  - `dist/html/index.mjs`

## 1.5.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.4.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.3.0

### Minor Changes

- 275db34: Add design tokens to Blockquote:

  - `utrecht.blockquote.border-width`
  - `utrecht.blockquote.row-gap`

- 44b3064: Introduce the following class names and mixins:

  - `utrecht-blockquote__caption` (renamed from: `utrecht-blockquote__attribution`)
  - `utrecht-blockquote__quote` (renamed from: `utrecht-blockquote__content`)

  The following class names mixins are now deprecated:

  - `utrecht-blockquote__attribution`
  - `utrecht-blockquote__content`

  Renamed the following design tokens (but the old ones)

  - `utrecht.blockquote.attribution.color` to `utrecht.blockquote.caption.color`
  - `utrecht.blockquote.attribution.font-size` to `utrecht.blockquote.caption.font-size`
  - `utrecht.blockquote.content.color` to `utrecht.blockquote.quote.color`
  - `utrecht.blockquote.content.font-size` to `utrecht.blockquote.quote.font-size`

  Deprecated the following design tokens:

  - `utrecht.blockquote.attribution.color`
  - `utrecht.blockquote.attribution.font-size`
  - `utrecht.blockquote.content.color`
  - `utrecht.blockquote.content.font size`

  The deprecated design tokens, class names and mixins still work for now, but migrate as soon as possible!

## 1.2.1

### Patch Changes

- 5eb631b: Fixes to design token metadata.

## 1.2.0

### Minor Changes

- ba76d08: Added metadata for blockquote tokens.

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
