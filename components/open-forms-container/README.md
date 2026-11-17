<!-- @license CC0-1.0 -->

# open-forms-container

Styles forms of the [Open Forms SDK](https://www.npmjs.com/package/@open-formulieren/sdk) with the Utrecht design tokens.

## Usage

Load `@utrecht/open-forms-container-css/dist/index.css` and the Utrecht design tokens, and put the Open Forms SDK inside an element with the `utrecht-open-forms-container` class. In React, use `OpenFormsContainer` from `@utrecht/open-forms-container-react`.

## Supported versions

The CSS supports the markup of two formio-renderer versions:

| Open Forms SDK         | formio-renderer | Storybook story                        |
| ---------------------- | --------------- | -------------------------------------- |
| 3.5.x (`latest`)       | 1.8             | `Open Formulieren/voorbeelden SDK 3.5` |
| 4.1.0-alpha.2 (`next`) | 3.0.0-alpha.6   | `Open Formulieren/voorbeelden`         |

The Open Forms SDK 3.5 only uses the formio-renderer for forms with the new renderer enabled in Open Forms (`newRendererEnabled`). Other forms are rendered with formio.js, and most of this CSS does not apply to them.

Some parts have different markup in each renderer, so the CSS has a selector for each:

| Part               | formio-renderer 1.8                                 | formio-renderer 3.x                                   |
| ------------------ | --------------------------------------------------- | ----------------------------------------------------- |
| Multifield grid    | `.openforms-multifield__field`                      | `.openforms-multifield__input-container`              |
| Remove button icon | –                                                   | `.openforms-multifield__remove-button .fa-regular`    |
| Validation error   | `.utrecht-form-field-description--openforms-errors` | `.utrecht-form-field-error-message--openforms-errors` |

The textbox sizes for Utrecht field names, such as `postcodePZD`, match both formio.js (`name="data[postcodePZD]"`) and the formio-renderer (`name="postcodePZD"`). The sub-fields of the address component (`addressNL`) are sized by their name, for any key: `<key>.postcode`, `<key>.houseNumber`, etc.

## Planned removals

The formio-renderer will become the default renderer, and the Open Forms SDK 4 drops formio.js. After the migration to Open Forms SDK 4, a major version will remove:

- the `data[key]` selectors of the textbox sizes, for formio.js
- the formio-renderer 1.8 selectors, once sites use the formio-renderer of the Open Forms SDK 4
