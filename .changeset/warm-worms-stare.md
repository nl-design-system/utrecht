---
"@utrecht/page-footer-css": major
---

`utrecht-page-footer` now requires a second element. Code that looked like this:

```html
<div class="utrecht-page-footer">...</div>
```

Must be refactored to this:

```html
<div class="utrecht-page-footer">
  <div class="utrecht-page-footer__content">...</div>
</div>
```

`utrecht-page-footer` now is `display: flex`, to center the contained element.
