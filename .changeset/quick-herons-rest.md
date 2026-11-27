---
"@utrecht/html-content-css": patch
---

Remove the outer margins inside `.utrecht-html`: the top margin of the first element and the bottom margin of the last element, so they no longer add space around the content block. This also works when such an element is nested up to three levels deep, for example a table in a `<figure>`, and when the container is inside another `.utrecht-html`, for example one on `<html>`.

Nested lists in the first item of the first list lose their top margin, and nested lists in the last item of the last list lose their bottom margin. Nested lists of the same type in the other items of those lists lose that margin too. All other elements keep their margins, including elements inside a table cell or blockquote and elements nested deeper than three levels.

Content blocks placed directly below each other can lose the space between them. Add that space in the layout, for example with `gap`.

The description in the README is now in Dutch.
