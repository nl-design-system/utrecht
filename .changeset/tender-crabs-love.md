---
"@utrecht/form-field-checkbox-react": patch
---

Fix types of `onBlur`, `onChange`, `onFocus` and `onInput` for `FormFieldCheckbox`. The event handler now is for `HTMLInputElement` instead of `HTMLDivElement`.
