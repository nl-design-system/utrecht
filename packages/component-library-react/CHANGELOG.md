# @utrecht/component-library-react

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
