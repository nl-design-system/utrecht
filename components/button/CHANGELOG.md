# @utrecht/button-css

## 2.2.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 2.1.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 2.0.0

### Major Changes

- c3660c1: Rename design token `utrecht.button.icon.gap` to `utrecht.button.column-gap`

### Minor Changes

- 24b4813: Add an optional element class `utrecht-button__label` to support other inline styling without a gap

### Patch Changes

- e177ced: Start using `:focus-visible`, Safari support has caught up.

## 1.4.0

### Minor Changes

- 9ba581f: - Added metadata for button tokens.
  - Fixed wrong design token metadata syntax for border-width.

### Patch Changes

- 9aa2be4: Fix regression in `utrecht.button.font-family` support.
- 2b97820: Changed `utrecht.button. text-transform` setting `"nl.nldesignsystem.figma.supports-token"` from `true` to `false` as it's not used for the Figma component within the 'Voorbeeld' library.

## 1.3.0

### Minor Changes

- fb371f4: Split the `README.md` for the button component into multiple Markdown documentation files.

## 1.2.0

### Minor Changes

- c0fa489: Add `utrecht-button-appearance-properties` mixin, to generate the custom properties for a button variant without the selector.
- 5299695: Button now support two new design tokens for each appearance: `font-size` and a matching `line-height`. These are optional, by default the button still uses `utrecht.button.font-size` and `utrecht.button.line-height`.

  These are the 6 new design tokens:

  - `utrecht.button.primary-action.font-size`
  - `utrecht.button.primary-action.line-height`
  - `utrecht.button.secondary-action.font-size`
  - `utrecht.button.secondary-action.line-height`
  - `utrecht.button.subtle.font-size`
  - `utrecht.button.subtle.line-height`

## 1.1.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.

## 1.0.0

### Major Changes

- 856d996: Switch from alpha releases to semantic versioning.
