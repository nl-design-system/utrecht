# HTML Components

HTML components contain a small subset of the CSS components, for components that occur in regular HTML pages with semantic HTML. You can apply the `utrecht-html-content` class name to your page, and any semantic HTML will be styled automatically. This can be helpful to style HTML content from a CMS, for example.

```shell
npm install --save-dev @utrecht/component-library-css
```

Include the CSS in your HTML page like so:

```html
<!DOCTYPE html>
<html lang="en" class="utrecht-html-content">
  <head>
    <title>Example page</title>
    <link rel="stylesheet" href="node_modules/@utrecht/component-library-css/dist/html.css" />
  </head>
  <body>
    <h1>Home</h1>
    <p>Hello, world!</p>
  </body>
</html>
```
