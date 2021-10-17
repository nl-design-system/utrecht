<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Focus

In CSS there are two important pseudo-classes we use: `:focus` and `:focus-visible`.

Browser support for [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) unfortunately [does not include Safari 15](https://caniuse.com/css-focus-visible).

## Comparison

`:focus`:

- not visible on disabled interactive elements
- only in this state for a very short time when a mouse click or touch interaction triggers activation, for components such as Button or Link
- in this state for longer for elements that cannot be activated, such as a textbox
- remains in this state after activiation for some components, such as checkbox
- visual effect can vary a bit per component:
  - different background color
  - different border width
  - different border color
  - different text underline style

`:focus-visible`:

- visible even on disabled interactive elements
- looks very similar accross components, because user needs to keep track of focused element
- should draw attention

## Design for `:focus`

- The design for `:focus` should be distinguishable from the `:hover` design. When a user did not configure their system to always make focus visible using for example a focus ring, the user should be able to know which component will be activated when pressing `Enter`. When focus and hover state look the same, it might not possible to know which element would be activated.
- When using color, use a consistent color to convey focus. Choose a color that can be combined with other states, such as combining the red color for invalid state with your color for focus state.
- When changing the `font-weight` of a component as focus state, it might cause unintended layout shifts, so it might not be the ideal option.

## Design for `:focus-visible`

- A focus ring should not obscure the content inside the focused area.
- A focus ring should not obscure surrounding content. This consideration can also affect the minimum space between focusable elements.
- A focus ring should be visible with sufficient contrast on both dark and light backgrounds.
- A focus ring should be visible on backgrounds with unknown and mixed colors, such as background images.
- When using CSS with `overflow: hidden` in your component, the `outline` rendering can become partially or completely invisible. Be careful not to break the focus indication when using `overflow: hidden`.

## Related reading

- [Giving users and developers more control over focus - Chromium Blog](https://blog.chromium.org/2020/09/giving-users-and-developers-more.html)
- [The Focus-Indicated Pseudo-class: `:focus-visible` - W3C Selectors specification](https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo)
- [Understanding WCAG Success Criterion 2.4.7: Focus visible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)
