export default {
  extends: '../../stylelint.config.mjs',
  rules: {
    'comment-empty-line-before': null,
    'order/properties-alphabetical-order': null,
    'custom-property-pattern': null,
    'no-duplicate-selectors': null,
    'color-hex-length': 'long',
    // CSS keyword values (e.g. `none`) are ASCII case-insensitive in every
    // browser. Figma/Tokens Studio exports occasionally use "None" instead
    // of "none"; not worth enforcing casing here since it has no effect on
    // rendering.
    'value-keyword-case': null,
    // Figma/Tokens Studio exports colors using legacy comma syntax, e.g.
    // `hsl(43, 47%, 9%)` / `rgba(0, 0, 0, 0.5)`, instead of the modern
    // space-separated syntax. Both are valid CSS and render identically in
    // every browser; not worth enforcing the modern syntax on generated
    // output here.
    'color-function-notation': null,
    'color-function-alias-notation': null,
  },
};
