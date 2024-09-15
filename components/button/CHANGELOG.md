# @utrecht/button-css

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
