# @utrecht/rich-text-css

## 1.4.0

### Minor Changes

- 7fc678f: Button Group has component is now deprecated, because it has a new name: Action Group. Please migrate to the new Action Group component, which apart from the name is identical.

  The Button Group component remains available for some time to give you opportunity to migrate your code, but it will be removed in an upcoming major release.

## 1.3.1

### Patch Changes

- e20f33c: Provide `.d.mts` file for `.mjs` files in CSS components.

## 1.3.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.

## 1.2.0

### Minor Changes

- e497b08: Export CSS string as default export in `dist/index.mjs`.

## 1.1.0

### Minor Changes

- fd80a67: Added metadata for rich text tokens.

## 1.0.0

### Major Changes

- a07687b: Initial version of the rich text component. Use this component as container for rich text components, such as:

  - Accordion
  - Alert
  - Badge list
  - Blockquote
  - Button group
  - Data list
  - Figure
  - Heading 1 - Heading 6
  - Ordered list
  - Paragraph
  - Table
  - Unordered list
