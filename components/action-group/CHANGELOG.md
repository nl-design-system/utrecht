# @utrecht/action-group-css

## 2.0.0

### Major Changes

- 4ddecce: Breaking changes:

  The Action Group `inline-gap` and `block-gap` tokens have been renamed to follow NL Design System naming conventions:

  - `inline-gap` to `row-gap`
  - `block-gap` to `column-gap`

  These new names are consistent with the existing design tokens.

  Previously, `--utrecht-action-group-inline-gap` was applied to the gap property by default, and `--utrecht-button-group-block-gap` was applied to the gap property when the column variant was used. This is split and replaced with `column-gap: var(--utrecht-action-group-column-gap, 1em); row-gap: var(--utrecht-action-group-row-gap, 1em);`.

## 1.1.0

### Minor Changes

- 41a5171: Add `utrecht-action-group--column-stretch` modifier class for vertically stacked buttons.

## 1.0.0

### Major Changes

- 7fc678f: Button Group component is now deprecated, because it has a new name: Action Group, which apart from the name is identical.
