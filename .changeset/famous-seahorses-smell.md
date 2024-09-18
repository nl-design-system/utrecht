---
"@utrecht/link-css": minor
---

Move the Link `text-underline` effect from `focus` to `focus-visible`. The goal is to not change the `text-underline` appearance during the flow of moving the mouse over the link (`:hover`) and then clicking the link (`:focus` + `:active`).

Add new `focus-visible` tokens for Link:

- `utrecht.link.focus-visible.text-decoration`
- `utrecht.link.focus-visible.text-decoration-thickness`

The following tokens are now deprecated:

- `utrecht.link.focus.text-decoration`
- `utrecht.link.focus.text-decoration-thickness`
