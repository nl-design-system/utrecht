---
"@utrecht/action-group-css": major
"@utrecht/component-library-css": major
---

Breaking changes:

The Action Group `inline-gap` and `block-gap` tokens have been renamed to follow NL Design System naming conventions:

- `inline-gap` to `row-gap`
- `block-gap` to `column-gap`

These new names are consistent with the existing design tokens.

Previously, `--utrecht-action-group-inline-gap` was applied to the gap property by default, and `--utrecht-button-group-block-gap` was applied to the gap property when the column variant was used. This is split and replaced with `column-gap: var(--utrecht-action-group-column-gap, 1em); row-gap: var(--utrecht-action-group-row-gap, 1em);`.
