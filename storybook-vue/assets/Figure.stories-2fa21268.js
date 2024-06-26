import{q as e,r as s,I as a}from"./component-library-vue-76e39afc.js";import{c as p}from"./util-8590644b.js";import"./vue.esm-bundler-4be3a786.js";import"./jsx-runtime-dd5515fa.js";import"./index-60ce4a73.js";import"./iframe-65eb4c7c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c414f01b.js";const l=`<!-- @license CC0-1.0 -->

# Figure
`,c={figure:{"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},caption:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},u={utrecht:c},m={id:"vue-figure",title:"Vue.js Component/Figure",component:e,tags:["autodocs"],argTypes:{slot:{name:"slot",control:{type:"text"},type:{required:!1},table:{defaultValue:{summary:""}}},caption:{name:"caption",control:{type:"text"},type:{required:!1},table:{defaultValue:{summary:""}}}},render:i=>({setup(){return{args:i}},components:{Figure:e,FigureCaption:s,Image:a},template:'<Figure v-bind="$props"><slot></slot><FigureCaption v-html="args.caption"></FigureCaption></Figure>'}),parameters:{status:{type:"ALPHA"},tokens:u,tokenPrefix:"utrecht-emphasis",docs:{description:{component:l}}}},t=p(m,{name:"Figure",component:e,components:{Figure:e,FigureCaption:s,Image:a},args:{slot:`<Image
        src="example/photo-nijntje-vuelta.jpg"
        width="2048"
        height="1536"
        :photo="true"
        alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
      />`,caption:`Fotograaf: Gemeente Utrecht<br />
              Titel: Nijntje Vuelta<br />
              Locatie: Stadsplateau<br />
              Geplaatst: 17 augustus 2022<br />
              <Link
                title='&apos;Nijntje / Vuelta&apos; op Flickr'
                external
                href='https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/'>
                Bron: Flickr
              </Link>`}});var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`createStory(meta, {
  name: 'Figure',
  component: Figure,
  components: {
    Figure,
    FigureCaption,
    Image
  },
  args: {
    slot: \`<Image
        src="example/photo-nijntje-vuelta.jpg"
        width="2048"
        height="1536"
        :photo="true"
        alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
      />\`,
    caption: \`Fotograaf: Gemeente Utrecht<br />
              Titel: Nijntje Vuelta<br />
              Locatie: Stadsplateau<br />
              Geplaatst: 17 augustus 2022<br />
              <Link
                title='&apos;Nijntje / Vuelta&apos; op Flickr'
                external
                href='https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/'>
                Bron: Flickr
              </Link>\`
  }
})`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,m as default};
