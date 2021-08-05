# Angular Components

The `@utrecht/web-component-library-stencil` package contains the actual implementation of every web component, while the `@utrecht/web-component-library-angular` only contains wrapper Angular components to help validate all the templates, and some supporting code to support Angular form bindings. The implementation of each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.

Install both packages to use Angular components in your project:

```shell
npm install --save-dev \
  @utrecht/web-component-library-angular \
  @utrecht/web-component-library-stencil
```

Include `UtrechtWebComponentsModule` in the root `NgModule` of your project:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UtrechtWebComponentsModule } from "@utrecht/web-component-library-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UtrechtWebComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

The components are rendered using custom elements, but since we provide a corresponding Angular component for every custom element, you don't need to configure [`CUSTOM_ELEMENTS_SCHEMA`](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) to make use of any of the components.

To make the custom elements work, you also need to call `defineCustomElements()` once in your page, immediately when it is loaded. Add this to `main.ts`:

```ts
import { defineCustomElements } from "@utrecht/web-component-library-stencil";

defineCustomElements();
```

After this you can use web components in your templates:

```html
<utrecht-heading level="1">Home</utrecht-heading>

<utrecht-paragraph>Hello world!</utrecht-paragraph>
```

To use the Utrecht theme for the components, include the design tokens CSS in your `angular.json`:

```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "styles": ["node_modules/@utrecht/design-tokens/dist/index.css", "src/styles.css"]
          }
        }
      }
    }
  }
}
```
