import{j as s}from"./jsx-runtime-c9381026.js";import{av as g,P as p}from"./index-45ce2f4e.js";import{t as h,d as y}from"./util-4b48fbee.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";const k={blockquote:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-style":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | italic | normal",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},attribution:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},content:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},b={utrecht:k},x=`<!-- @license CC0-1.0 -->

# Quote

Quotes worden gebruikt om uitspraken te accentueren. De quote bestaat uit een uitspraak en een bronvermelding. De tekstkleur van de uitspraak is rood en de tekst is iets groter (font-size: 1.125em) dan de standaard broodtekst. De tekstgrootte van de bronvermelding is iets kleiner dan de standaard broodtekst (font-size:.75em) en start met een (lang) streepje. De quote is links uitgelijnd en springt iets in naar het midden in 1.6em vanaf de linkerkantlijn.

## Terminologie

- **blockquote**: van het [HTML element \`<blockquote>\`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element). MDN noemt het ["Block Quotation element"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote), misschien zou dat nog wel beter zijn dan "Blockquote".
- **content**: experimentele naam.
- **attribution**: verwijzing naar de bron van het citaat. Experimentele naam.

## Class names

- \`utrecht-blockquote\`: container element.
- \`utrecht-blockquote__content\`: gedeelte waar het citaat word genoemd.
- \`utrecht-blockquote__attribution\`: gedeelte waar de bron van het citaat word genoemd.
- \`utrecht-blockquote--distanced\`: modifier om afstand te creëren tot omliggende tekst.

## Design tokens

- Document (parent):
  - \`--utrecht-document-font-family\`
- Blockquote:
  - \`--utrecht-blockquote-margin-inline-start\`
  - \`--utrecht-blockquote-margin-inline-end\`
  - \`--utrecht-blockquote-margin-block-start\`
  - \`--utrecht-blockquote-margin-block-end\`
  - \`--utrecht-blockquote-font-size\`
  - \`--utrecht-blockquote-font-family\`
  - Blockquote content:
    - \`--utrecht-blockquote-content-color\`

## Relevante WCAG eisen

- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): wanneer het citaat in een andere taal is geschreven dan de pagina, dan moet het \`lang\` attribuut gebruikt worden om de taal duidelijk te maken.
`,f={title:"React Component/Blockquote",id:"react-blockquote",component:g,tags:["autodocs"],args:{children:s(p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"})},argTypes:{attribution:{name:"attribution",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:!1}}}},parameters:{tokensPrefix:"utrecht-blockquote",tokens:h,tokensDefinition:b,docs:{description:{component:x}}}},e={},t={name:"Attribution",args:{children:s(p,{children:"hello, world"}),attribution:s("cite",{children:"The C Programming Language"})}},n=y(f);var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,l,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Attribution',
  args: {
    children: <Paragraph>hello, world</Paragraph>,
    attribution: <cite>The C Programming Language</cite>
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"designTokenStory(meta)",...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const B=["Default","Attribution","DesignTokens"];export{t as Attribution,e as Default,n as DesignTokens,B as __namedExportsOrder,f as default};
//# sourceMappingURL=Blockquote.stories-269fef51.js.map
