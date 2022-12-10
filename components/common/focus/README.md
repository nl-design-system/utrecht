<!-- @license CC0-1.0 -->

# Focus

In CSS there are two important pseudo-classes we use: `:focus` and `:focus-visible`.

Browser support for [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) unfortunately [does not include Safari 15](https://caniuse.com/css-focus-visible).

## Comparison

`:focus`:

- Not visible on disabled interactive elements.
- Only in this state for a very short time when a mouse click or touch interaction triggers activation, for components such as a button or link.
- In this state for longer for elements that cannot be activated, such as a textbox.
- Remains in this state after activation for some components, such as a checkbox.
- Visual effect can vary per component:
  - different background color
  - different border width
  - different border color
  - different text underline style

`:focus-visible`:

- Visible even on disabled interactive elements.
- Looks very similar across components, because user needs to keep track of focused element.
- Should draw attention.

## Design for `:focus`

- The design for `:focus` should be distinguishable from the `:hover` design. When a user did not configure their system to always make focus visible using for example a focus ring, the user should be able to know which component will be activated when pressing the `Enter` key. When focus and hover state look similar, it might not possible to know which element would be activated.
- When using color, use a consistent color to convey focus. Choose a color that can be combined with other states, such as combining the red color for invalid state with your color for focus state.
- When changing the `font-weight` of a component as focus state, it might cause unintended layout shifts, so it might not be the ideal option.

## Design for `:focus-visible`

- A focus ring should not obscure the content inside the focused area.
- A focus ring should not obscure surrounding content. This consideration can also affect the minimum space between focusable elements.
- A focus ring should be visible with sufficient contrast on both dark and light backgrounds.
- A focus ring should be visible on backgrounds with unknown and mixed colors, such as background images.
- When using CSS with `overflow: hidden` in your component, the `outline` rendering can become partially or completely invisible. Be careful not to break the focus indication when using `overflow: hidden`.

## CSS

- The default browser focus outline must not be removed, but it may be replaced by something better suited for the design.
- The default browser focus outline is not perceivable on certain background colors, so for many designs it is benificial to replace the default styling with a higher contrast focus ring.
- When CSS outline properties are set to a CSS variable, make sure use `revert` as fallback value: this way the default styling is not removed when the custom property is not set.

## Related reading

- [Giving users and developers more control over focus - Chromium Blog](https://blog.chromium.org/2020/09/giving-users-and-developers-more.html)
- [The Focus-Indicated Pseudo-class: `:focus-visible` - W3C Selectors specification](https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo)
- [Understanding WCAG Success Criterion 2.4.7: Focus visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
