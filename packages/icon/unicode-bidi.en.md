<!-- @license CC0-1.0 -->

# Bidirectional icons

## Annotating SVGs

Use the `<title>` element to describe the contents of the icon. If the icon is a graphical representation of an Unicode, just use that character as the title. For example, for the [chevron](https://www.compart.com/en/unicode/U+203A):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
    <title>›</title>
    <!-- ...icon shape here... -->
</svg>
```

The build tool will recognize a title that has a character that should be mirrored in for right-to-left texts.
