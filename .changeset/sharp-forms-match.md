---
"@utrecht/open-forms-container-css": minor
---

Support the formio-renderer 1.8 of the Open Forms SDK 3.5 in `utrecht-open-forms-container`: apply the multifield layout to `.openforms-multifield__field` and the error message spacing to `.utrecht-form-field-description--openforms-errors`. Render Font Awesome icons at full size: they no longer inherit `font-size-adjust` from `utrecht-root`. Add the `utrecht-open-forms-container-form-field-description-errors` and `utrecht-open-forms-container-icon-font` mixins.

Apply the textbox sizes for Utrecht field names to forms with the formio-renderer too: it names fields `postcodePZD` instead of `data[postcodePZD]`. Size the sub-fields of the address component (`addressNL`), such as the postcode and house number, for any key.
