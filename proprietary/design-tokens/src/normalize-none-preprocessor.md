# Normalize Figma export preprocessor

`normalize-none-preprocessor.mjs` is a [Style Dictionary preprocessor](https://styledictionary.com/reference/hooks/preprocessors/)
that fixes up a value casing issue coming from Figma / Tokens Studio, before
any other transform runs.

## Problem

Tokens Studio sometimes exports the CSS `none` keyword with the wrong
casing, as the string `"None"`. For example, in `figma/figma.tokens.json`:

```json
"text-decoration-line": {
  "$type": "textDecoration",
  "$value": "None"
},
```

```json
"box-shadow": {
  "none": {
    "$type": "boxShadow",
    "$value": "None"
  }
}
```

In both cases `"None"` is the whole `$value`, not a nested field. Left as-is,
it reaches the generated CSS unchanged:

```css
--ams-date-input-hover-box-shadow: None;
```

`None` is not a valid CSS value. Stylelint flags it (`value-keyword-case`)
and browsers ignore the declaration, silently dropping whatever style it was
meant to apply.

## Fix

The preprocessor recursively walks the full token tree and rewrites any
string that matches `none` case-insensitively (but isn't already lowercase)
to the lowercase keyword `"none"`, which is a valid value wherever `none` is
already used in this design system: `box-shadow`, `text-decoration`,
`text-transform`, etc.

It only touches this one specific, unambiguous case. It does not:

- attempt to guess a value for anything else that looks wrong or missing,
- validate or normalize any other CSS keyword,
- touch tokens whose value is already correctly-cased.

## Usage

Registered as a Style Dictionary preprocessor and run first, before the
`tokens-studio` preprocessor, in [`style-dictionary-config.mjs`](../style-dictionary-config.mjs):

```js
preprocessors: ['utrecht/normalize-figma-export', 'tokens-studio'],
hooks: {
  preprocessors: {
    ...normalizeFigmaExportPreprocessorHooksConfig,
  },
  // ...
},
```

Running a build logs how many values were changed:

```text
[design-tokens] Normalized 33 "None" string value(s) exported from Figma to "none".
```

No log line means nothing needed fixing.

## When this file changes again

If a similar casing issue turns up for a different keyword in a future
Figma export, extend `NONE_STRING_PATTERN` and the surrounding logic rather
than adding a second, separate preprocessor — keep this as the single place
that cleans up known Figma export quirks before the rest of the build sees
them.
