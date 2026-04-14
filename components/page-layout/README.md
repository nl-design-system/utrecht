<!-- @license CC0-1.0 -->

# Page Layout

## Stretch

To stretch the Page Layout, the best way is to add the Page Layout to a flex container and use `flex-grow: 1` on the Page Layout element.

For example:

```html
<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <!-- ... -->
    <style>
      .example-viewport {
        aspect-ratio: 16 / 10;
        max-inline-size: 1280px;
        display: block;
      }
    </style>
  </head>
  <body>
    <div class="example-viewport">
      <div class="example-viewport__content">
        <div class="utrecht-page-layout">
          <!-- ... -->
        </div>
      </div>
    </div>
  </body>
</html>
```

## Sticky Page Footer

When you want a sticky Page Footer, it is prerequisite to achieve the following in CSS: the `html` and `body` element must stretch the entire viewport, and must have no margin or padding.

By default the `html` and `body` match the size of the content, and the `body` has a `margin`.

An example implementation:

```html
<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <!-- ... -->
    <style>
      html {
        block-size: 100%;
        display: flex;
      }
      body {
        flex-grow: 1;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="utrecht-page-layout">
      <!-- ... -->
    </div>
  </body>
</html>
```

Or use the Root component, which achieves this out-of-the-box:

```html
<!DOCTYPE html>
<html lang="nl" dir="ltr" class="utrecht-root">
  <head>
    <!-- ... -->
  </head>
  <body>
    <div class="utrecht-page-layout">
      <!-- ... -->
    </div>
  </body>
</html>
```
