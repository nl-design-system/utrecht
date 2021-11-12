<!-- @license CC0-1.0 -->

# Vue.js Components

The `@utrecht/web-component-library-stencil` package contains the actual implementation of every web component, while the `@utrecht/web-component-library-vue` only contains wrapper Vue.js 3 components to help validate all the templates, and some supporting code to support Vue.js form bindings. The implementation of each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.

Install both packages to use Vue.js components in your project:

```shell
npm install --save-dev \
  @utrecht/web-component-library-vue \
  @utrecht/web-component-library-stencil
```

For example, in your `App.vue`:

```html
<template>
  <utrecht-heading-1>Login</utrecht-heading-1>
  <form action="/login" method="post">
    <utrecht-form-field-textbox v-model="username" autocomplete="username">Username</utrecht-form-field-textbox>
    <utrecht-form-field-textbox v-model="password" autocomplete="current-password" type="password"
      >Password</utrecht-form-field-textbox
    >
    <div>
      <utrecht-button type="submit">Login</utrecht-button>
    </div>
  </form>
</template>

<script>
  import { UtrechtButton, UtrechtFormFieldTextbox, UtrechtHeading1 } from "@utrecht/web-component-library-vue";

  export default {
    components: {
      "utrecht-button": UtrechtButton,
      "utrecht-form-field-textbox": UtrechtFormFieldTextbox,
      "utrecht-heading-1": UtrechtHeading1,
    },
    data() {
      return {
        username: "",
        password: "",
      };
    },
  };
</script>
```

Since the implementation of the web components needs to be loaded in the browser, include the following effect to import web component library from `@utrecht/web-component-library-stencil`, for example in your `main.js`:

```js
import "@utrecht/design-tokens/dist/theme/index.css";
import { defineCustomElements } from "@utrecht/web-component-library-stencil";

createApp(App).use(router).mount("#app");

defineCustomElements();
```
