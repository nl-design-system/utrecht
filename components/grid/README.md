# Grid Layout Component

A flexible, responsive grid layout component for the Utrecht Design System with configurable breakpoints and comprehensive layout options.

## Features

- 12-column responsive grid system
- Configurable breakpoints via CSS variables
- Container query support with media query fallback
- Flexible spacing options
- Alignment and ordering controls
- Design token integration

## Usage

### Basic Grid

```html
<div class="utrecht-grid__container">
  <div class="utrecht-grid__cell utrecht-grid--xs-12 utrecht-grid--sm-6">Column 1</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-12 utrecht-grid--sm-6">Column 2</div>
</div>
```

### Responsive Columns

```html
<div class="utrecht-grid__container">
  <div class="utrecht-grid__cell utrecht-grid--xs-12 utrecht-grid--sm-6 utrecht-grid--md-4 utrecht-grid--lg-3">
    Responsive column
  </div>
</div>
```

### With Spacing

```html
<div class="utrecht-grid__container utrecht-grid--spacing-md">
  <div class="utrecht-grid__cell utrecht-grid--xs-4">Column 1</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-4">Column 2</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-4">Column 3</div>
</div>
```

## CSS Classes

### Container Classes

- `utrecht-grid__container` - Grid container
- `utrecht-grid--spacing-{sm|md|lg}` - Spacing between cells
- `utrecht-grid--justify-content-{flex-start|center|flex-end|space-between}` - Horizontal alignment
- `utrecht-grid--align-items-{flex-start|center|flex-end}` - Vertical alignment
- `utrecht-grid--flex-direction-{row|column|row-reverse|column-reverse}` - Flex direction

### Cell Classes

- `utrecht-grid__cell` - Grid cell
- `utrecht-grid--xs-{1-12}` - Column width (all screen sizes)
- `utrecht-grid--sm-{1-12}` - Column width (≥600px)
- `utrecht-grid--md-{1-12}` - Column width (≥960px)
- `utrecht-grid--lg-{1-12}` - Column width (≥1280px)
- `utrecht-grid--order-{1-12}` - Visual order
- `utrecht-grid--order-sm-{1-12}` - Visual order (≥600px)
- `utrecht-grid--order-md-{1-12}` - Visual order (≥960px)
- `utrecht-grid--order-lg-{1-12}` - Visual order (≥1280px)

## Breakpoints

| Breakpoint | Default Value | CSS Variable                   |
| ---------- | ------------- | ------------------------------ |
| xs         | 0px           | -                              |
| sm         | 600px         | `--utrecht-grid-breakpoint-sm` |
| md         | 960px         | `--utrecht-grid-breakpoint-md` |
| lg         | 1280px        | `--utrecht-grid-breakpoint-lg` |

## Configuration

### CSS Variables

```css
.utrecht-grid {
  /* Breakpoints */
  --utrecht-grid-breakpoint-sm: 768px;
  --utrecht-grid-breakpoint-md: 1024px;
  --utrecht-grid-breakpoint-lg: 1440px;

  /* Spacing */
  --utrecht-grid-spacing-sm: 8px;
  --utrecht-grid-spacing-md: 16px;
  --utrecht-grid-spacing-lg: 24px;

  /* Grid configuration */
  --_utrecht-grid-columns-total: 12;
  --_utrecht-grid-columns-default: 4;
}
```

### Design Tokens

Integrate with Style Dictionary:

```json
{
  "utrecht": {
    "grid": {
      "breakpoint": {
        "sm": { "value": "768px" },
        "md": { "value": "1024px" },
        "lg": { "value": "1440px" }
      },
      "spacing": {
        "sm": { "value": "8px" },
        "md": { "value": "16px" },
        "lg": { "value": "24px" }
      }
    }
  }
}
```

## Browser Support

- **Modern browsers**: Uses container queries for truly responsive breakpoints
- **Legacy browsers**: Falls back to media queries with static breakpoint values
- **Progressive enhancement**: Ensures functionality across all browsers

## Examples

### Equal Width Columns

```html
<div class="utrecht-grid__container">
  <div class="utrecht-grid__cell utrecht-grid--xs-3">25%</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-3">25%</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-3">25%</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-3">25%</div>
</div>
```

### Centered Content

```html
<div class="utrecht-grid__container utrecht-grid--justify-content-center">
  <div class="utrecht-grid__cell utrecht-grid--xs-6">Centered</div>
</div>
```

### Column Reordering

```html
<div class="utrecht-grid__container">
  <div class="utrecht-grid__cell utrecht-grid--xs-4 utrecht-grid--order-3">Third</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-4 utrecht-grid--order-1">First</div>
  <div class="utrecht-grid__cell utrecht-grid--xs-4 utrecht-grid--order-2">Second</div>
</div>
```
