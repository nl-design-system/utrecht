---
"@utrecht/component-library-react": minor
---

For the `Paragraph` component, introduce the `appearance` property. It replaces the `lead` and `small` boolean properties, which are now deprecated.

Perform the following migration steps:

- Use `<Paragraph appearance="lead">` instead of `<Paragraph lead>`
- Use `<Paragraph appearance="small">` instead of `<Paragraph small>`
