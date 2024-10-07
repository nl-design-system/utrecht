---
"@utrecht/component-library-react": patch
"@utrecht/icon": patch
---

Reasoning:

added aria-hidden="true" to all SVG icons and edited the icons unit test by adding extra requierments and test with svg's insdtead of only text icons.

Changes:

- Added `aria-hidden="true"` to all SVG icons to improve accessibility for screen readers.
- Edited the icons unit test to include:
  - SVGs are not present in the accessibility tree.
  - links within SVGs are not present in the accessibility tree.
