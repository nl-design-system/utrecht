<!-- @license CC0-1.0 -->

# Tooltip component

Use the Tooltip to display an text for a short time, next to the related component.

Use tooltips only in the following situations:

- To give playful feedback after clicking a button.
- To provide a tooltip for buttons for actions that can easily be reversed, such as toggle bott. When the action is not easily reversible, the label must not be in a tooltip, it must be visible by default.

## Shortcomings

- The component does not initially support the [NL Design System Baseline](https://nldesignsystem.nl/baseline/). It depends on the `:dir()` CSS pseudo-class, which is supported in Baseline 2023, but not yet Baseline. See [Can I Use: :dir() CSS pseudo-class](https://caniuse.com/css-dir-pseudo). As time goes by, eventually this component will support the NL Design System Baseline.
- The component does not support vertical writing modes, because it depends on `translateX()`. In the future this component should be refactored to use [CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning), but browser support is limited.
