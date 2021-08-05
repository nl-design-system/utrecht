# React Components

The `@utrecht/web-component-library-stencil` package contains the actual implementation of every web component, while the `@utrecht/web-component-library-react` only contains wrapper React components to provide JSX elements for every Web Component. The implementation of each component will be loaded separately and on-demand, so including the entire component library will not slow down your application.

Install both packages to use React components in your project:

```shell
npm install --save-dev \
  @utrecht/web-component-library-react \
  @utrecht/web-component-library-stencil
```

For example, using [Next.js](https://nextjs.org):

```js
import Head from "next/head";
import { UtrechtHeading, UtrechtParagraph, UtrechtDocument } from "@utrecht/component-library-react";

export default function ExamplePage() {
  return (
    <UtrechtDocument>
      <Head>
        <title>Example Page</title>
      </Head>
      <main>
        <UtrechtHeading level={1}>Home</UtrechtHeading>
        <UtrechtParagraph>Hell, world!</UtrechtParagraph>
      </main>
    </UtrechtDocument>
  );
}
```

Since the implementation of the web components needs to be loaded in the browser, include the following effect to import web component library from `@utrecht/web-component-library-stencil`, in Next.js this would be in `_app.ts`:

```js
useEffect(() => {
  import("../public/utrecht/utrecht.esm.js");
}, []);
```
