---
"@utrecht/component-library-react": minor
---

Checkbox supports the `indeterminate` boolean property: `<Checkbox indeterminate />`.

- It renders the `utrecht-checkbox--indeterminate` class name.
- It renders the `aria-checked="mixed"` attribute.
- It sets the `indeterminate` property in the DOM, so the `:indeterminate` CSS pseudo selector is supported too.

Important note: you must implement behavior for removing the `indeterminate` state after `onChange` yourself.
