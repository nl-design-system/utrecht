import{Y as n,B as r,L as o,Z as a,a0 as i,a1 as c,a2 as p,a3 as d}from"./component-library-vue-a6ae4a7f.js";import{c as y}from"./util-04fef05f.js";import"./vue.esm-bundler-4be3a786.js";import"./jsx-runtime-65477e10.js";import"./index-301a2b27.js";import"./iframe-a5b43ec7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-f3199eaf.js";const b=`<!-- @license CC0-1.0 -->

# Table

De _table_ component wordt nog aangewerkt. We doen met de NL Design System community onderzoek welke tabel varianten in omloop zijn, hoe we elke variant toegankelijk kunnen maken en wat het visueel ontwerp moet worden.

De tabellen in Storybook hier zijn allemaal **WORK IN PROGRESS**, tenzij anders aangegeven.
`,m={table:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.document.color"]}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},caption:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-align":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"left | right | start | end",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},header:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"header-cell":{"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}}},cell:{"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},row:{"border-block-end-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.table.cell.padding-inline-end"]}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.table.cell.padding-inline-start"]}},"alternate-odd":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"alternate-even":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}},g={utrecht:m},h={id:"vue-table",title:"Vue.js Component/Table",component:n,tags:["autodocs"],argTypes:{},args:{},render:()=>({components:{Table:n,TableCaption:r,TableHeader:o,TableRow:a,TableHeaderCell:i,TableBody:c,TableCell:p,TableFooter:d},template:'<Table v-bind="$props"><slot></slot></Table>'}),parameters:{status:{type:"ALPHA"},tokens:g,tokenPrefix:"utrecht-table",docs:{component:{description:b}}}},e=y(h,{name:"Table",args:{slot:`<TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
          <TableHeaderCell scope="col">Column header cell 1</TableHeaderCell>
          <TableHeaderCell scope="col">Column header cell 2</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHeaderCell scope="row">Row header cell</TableHeaderCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
       <TableCell>Footer cell 1</TableCell>
       <TableCell>Footer cell 2</TableCell>
      </TableRow>
    </TableFooter>`}});var s,t,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`createStory(meta, {
  name: 'Table',
  args: {
    slot: \`<TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
          <TableHeaderCell scope="col">Column header cell 1</TableHeaderCell>
          <TableHeaderCell scope="col">Column header cell 2</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHeaderCell scope="row">Row header cell</TableHeaderCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
       <TableCell>Footer cell 1</TableCell>
       <TableCell>Footer cell 2</TableCell>
      </TableRow>
    </TableFooter>\`
  }
})`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,h as default};
