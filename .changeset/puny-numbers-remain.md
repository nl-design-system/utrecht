---
"@utrecht/design-tokens": minor
---

Form labels and table headers use the semibold font weight (600) instead of bold (700): `utrecht.form-label.font-weight`, `utrecht.table.header.font-weight` and `utrecht.table.header-cell.font-weight` are now `utrecht.typography.weight-scale.semibold.font-weight`. Before, `utrecht.table.header-cell.font-weight` had no value, so header cells used the `bold` fallback of the Table component.
