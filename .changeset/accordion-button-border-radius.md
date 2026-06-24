---
"@utrecht/accordion-css": minor
"@utrecht/design-tokens": minor
---

Wire the existing `utrecht.accordion.button.border-radius` token. The token was declared in the Accordion schema (`figma-implementation: true`) but had no value and was never applied, so the accordion button's radius was locked to the global `--utrecht-button-border-radius` with no way to set it separately. In themes with a non-zero button radius, that rounding showed on the subtle button's hover and focus background across the full-width row. The token now controls the button radius and defaults to the button radius, so the default appearance is unchanged while themes can give the accordion button its own radius.
