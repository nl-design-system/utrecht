<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Icons

## Including icons as Custom Element

One of the most convenient ways to use the icons is by including the web component library, so you the custom elements for icons will work. Every icon is available as custom element. The name if icon (`utrecht-icon-...`) is also the name of the custom element for the icon. For example:

```html
<div>
  <utrecht-icon-loupe></utrecht-icon-loupe>
</div>
```

Customize the icon color via the CSS property `color` on a parent element or via the custom property `--utrecht-icon-color`.

### `color` of surrounding content

The following method is most convienent and requires no special configuration. The color of the existing text will also apply to the icon.

```html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
```

### `--utrecht-icon-color` for custom icon color

The following method is ideal if you want to have a (small) difference between the text color and the icon color. It uses a CSS custom property named `--utrecht-icon-color` for the icon color.

```html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-color: rgba(255, 255, 255, 0.75);
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
```

### Configure the icon size

The icon size can be configured with a CSS custom property named `--utrecht-icon-size`:

```html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-size: 42px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
```
