<!-- @license CC0-1.0 -->

# Dialog

- Configuring `title` and `id` is required, because the `dialog` is made accessible with the `aria-describedby` attribute that uses the `id` to point to the right element in the DOM.
- Document order of elements must be:
  1. header
  2. content
  3. footer
