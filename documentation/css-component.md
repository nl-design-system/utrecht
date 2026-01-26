# Making a reusable white-label CSS component

## Container queries instead of media queries

`@container` is preferred over `@media screen`. Container queries help developers to use your component in new situations.

## Set breakpoints in your theme

Breakpoints ideally are configured in your theme, not in your component. Other organisation might use different breakpoints.

Not ideal:

```css
.example-button {
  color: var(--example-button-font-size);
}

@media screen and (width > $example-breakpoint) {
  .example-button {
    font-size: var(--example-button-font-size);
  }
}
```

Better:

```css
/* button.css */
.example-button {
  color: var(--example-button-font-size);
}

/* theme.css */
@media screen and (width > $example-breakpoint) {
  .example-theme {
    --example-button-font-size: var(--example-button-large-font-size);
  }
}
```

## Fallback variables for other thems

Other organisations are more likely to use your component when it doesn't take much time to configure their theme to work with your component. Implementing fallback variables reduces initial configuration time, and reduces the risk that applications will look bad with the theme of others.

Your own theme probably configures almost every variant of your own component. Other themes likely start with configuring only the default variant.

```css
.example-button {
  color: var(--example-button-color);
}

.example-button--secondary {
  color: var(--example-button-secondary-color);
}
```

Better:

```css
.example-button {
  color: var(--example-button-color);
}

.example-button--secondary {
  color: var(--example-button-secondary-color, var(--example-button-color));
}
```

## Fallbacks for system colors

Configuring [system color](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color) as fallback color will help make your component more resilient to network issues.

When you load CSS that configures a color on a `<button>` it breaks the default styling of the button. When the component CSS has been loaded, but a network issue prevents loading of the theme CSS, the button will be unrecognizable and unusable.

```css
.example-button {
  background-color: var(--example-button-background-color, ButtonFace);
  color: var(--example-button-color, ButtonText);
}
```

## Overrides for high contrast mode

...

## `hidden` attribute should work

The `hidden` attribute is a well known and convenient way to hide parts of your HTML. Your component should not break this convention. When you configure `display`, it might override the `hidden` style of `display: none`. There is more than one way to avoid this.

```css
.example-component {
  color: var(--example-component-color);
}

.example-component:not([hidden]) {
  display: flex;
}
```

Or:

```css
.example-component {
  color: var(--example-component-color);
  display: flex;
}

.example-component[hidden] {
  display: none;
}
```
