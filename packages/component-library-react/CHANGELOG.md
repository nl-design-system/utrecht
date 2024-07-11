# @utrecht/component-library-react

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
