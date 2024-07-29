import{M as s,d as i}from"./index-1347c828.js";import{j as n,a,F as p}from"./jsx-runtime-c9381026.js";import{u as l}from"./index-4811e648.js";import"./iframe-53dd97c5.js";import"../sb-preview/runtime.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./cloneDeep-5db644cf.js";import"./_baseForOwn-532e8b26.js";import"./index-a38d0dca.js";import"./index-11d98b33.js";import"./extends-4c19d496.js";import"./getPrototypeOf-5ea76000.js";import"./index-356e4a49.js";import"./index-beca0df8.js";const d=`<!-- @license CC0-1.0 -->

# Developing components

Warning: the code examples are deliberately simplified to show one concept at a time. Do not use the code snippets as-is.

For more complete examples, look at the source code of existing components.

## Develop for extensibility

### Class names

Enable front-end developers to add their own class names to the outermost HTML element of your component. Since all components have BEM class names, you must combine your BEM class names with any class names from the parameters. We typically use \`clsx\` to format the \`class\` attribute.

\`\`\`jsx
import clsx from "clsx";

export const MyComponent = ({ children, className }) => (
  <div className={clsx("my-component", className)}>{children}</div>
);
\`\`\`

### Allow rich text content

Allow \`ReactNode\` contents for text parameters, so front-end developers can use accessible and meaningful markup. Using \`PropsWithChildren\` is recommended for non-empty components, because it allows \`ReactNode\` for children.

\`\`\`tsx
import clsx from "clsx";
import type { PropsWithChildren } from "react";

export interface MyComponentProps {
  // ...
}

export const MyComponent = ({ children }: PropsWithChildren<MyComponentProps>) => <div>{children}</div>;
\`\`\`

For other parameters using \`ReactNode\` might not be as obvious, since you might feel like starting with \`string\`. For example:

\`\`\`tsx
import clsx from "clsx";
import type { PropsWithChildren } from "react";

export interface MyLandmarkComponentProps {
  label: ReactNode;
}

export const MyLandmarkComponent = ({ children, label }: PropsWithChildren<MyComponentProps>) => {
  const headingId = useId();
  return (
    <div role="region" aria-labelledby={label ? labelId : undefined}>
      {label && <div id={labelId}>{label}</div>}
      {children}
    </div>
  );
};
\`\`\`

This allows front-end developers to use any markup:

\`\`\`jsx
<MyLandmarkComponent
  label={
    <>
      <LandmarkIcon /> Landmark label
    </>
  }
>
  <p>Landmark content</p>
</MyLandmarkComponent>
\`\`\`

Allowing rich text is one more reason to use \`aria-labelledby\` instead of \`aria-label\`.

## Export interfaces and types

Export the type definitions for parameters, so other developers can easily use those to develop wrapper components.

\`\`\`tsx
export type TextboxTypes = "password" | "text";

export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: TextboxTypes;
}

export const Textbox = ({ type }: TextboxProps) => <input {...restProps} type={type} />;
\`\`\`

This way another developer could extend your component:

\`\`\`tsx
import type { TextboxProps, TextboxTypes } from "@my/textbox";

export interface AdvancedTextboxProps extends TextboxProps {
  type?: TextboxTypes | "date";
}

export const AdvancedTextbox = ({ type }: AdvancedTextboxProps) => <input {...restProps} type={type} />;
\`\`\`

## Use \`forwardRef\`

Use [\`forwardRef\`](https://react.dev/reference/react/forwardRef) to expose the DOM node with a [ref](https://react.dev/learn/manipulating-the-dom-with-refs).

\`\`\`tsx
import clsx from "clsx";
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from "react";

export interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {}

export const MyComponent = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<MyComponentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} {...restProps}>
      {children}
    </div>
  ),
);
\`\`\`

This allows front-end developers to perform actions that need access to the DOM, such as focusing an element:

\`\`\`tsx
const ref = useRef<HTMLDivElement>(null);

render(<MyComponent tabIndex={0} ref={ref} />);

ref.current?.focus();
\`\`\`

## Don't break native HTML

### Global attributes

Use \`restProps\` to allow front-end developers to global attributes as well as specific attributes to an HTML element:

\`\`\`jsx
import clsx from "clsx";

export const MyComponent = ({ children, ...restProps }) => <div {...restProps}>{children}</div>;
\`\`\`

With TypeScript you will need to extend the interface with the \`HTMLAttributes\` of the outermost element, and it will look like this:

\`\`\`tsx
import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

export interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {}

export const MyComponent = ({ children, ...restProps }) => <div {...restProps}>{children}</div>;
\`\`\`

For different elements you need to import different types \`HTMLAttributes\`, but I don't think React offers documentation on this subject. The most effective approach might be using an IDE like Visual Code with a TypeScript plugin, to find out which interface you need — or simply check existing components that use the same HTML element.

### Prevent duplicate IDs

Generate \`id\` attributes with [\`useId()\` from React](https://react.dev/reference/react/useId). Do not use hardcoded \`id\` values, because that could break accessibility.

\`\`\`jsx
export const MyLandmarkComponent = ({ children, label }) => {
  const headingId = useId();
  return (
    <div role="region" aria-labelledby={label ? labelId : undefined}>
      {label && <div id={labelId}>{label}</div>}
      {children}
    </div>
  );
};
\`\`\`
`;/*@license CC0-1.0*/function r(e){return a(p,{children:[n(s,{id:"react--contributing",title:"React Component/Developing components"}),`
`,`
`,n(i,{children:d})]})}function c(e={}){const{wrapper:o}=Object.assign({},l(),e.components);return o?n(o,{...e,children:n(r,{...e})}):r()}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"React Component/Developing components",id:"react--contributing",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:c};const D=["__page"];export{D as __namedExportsOrder,m as __page,t as default};
//# sourceMappingURL=contributing.stories-d8aef537.js.map
