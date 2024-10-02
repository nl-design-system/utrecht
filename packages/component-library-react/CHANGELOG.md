# @utrecht/component-library-react

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
