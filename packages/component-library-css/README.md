<!-- @license CC0-1.0 -->

# CSS Components

CSS components are developed using BEM class names and the stylesheets can be included in your page side-effect free. Apply the class names to your elements to make them stylable using design tokens.

```shell
npm install --save-dev --save-exact @utrecht/component-library-css

```

Theoretically you can include the components in your HTML page like so, but this is not the typical use case of this library:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Example page</title>
    <link rel="stylesheet" href="node_modules/@utrecht/component-library-css" />
  </head>
  <body>
    <h1 class="utrecht-heading-1">Home</h1>
    <p class="utrecht-paragraph">Hello, world!</p>
  </body>
</html>
```

The BEM class names can be particularly useful to include only the CSS you need using [CSS modules](https://css-tricks.com/css-modules-part-1-need/) ([in React](https://css-tricks.com/css-modules-part-3-react/)).

```js
import React from "react";
import style from "@utrecht/component-library-css";

export default class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <h1 className={btn["utrecht-heading-1"]}>Home</h1>
        <p className={btn["utrecht-paragraph"]}>Hello, world!</p>
      </>
    );
  }
}
```
