import{a as s,G as P,u as k,_ as w}from"./component-library-vue-888268d8.js";import{r as H}from"./vue.esm-bundler-4be3a786.js";import{c as R}from"./util-6b0f6c73.js";import"./chunk-HLWAVYOI-53b827d8.js";import"./iframe-d3b795d0.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";const C={id:"vue-alert-dialog",title:"Vue.js Component/Alert Dialog",component:s,tags:["autodocs"],argTypes:{buttonLabel:{control:"text"},buttonAppearance:{control:"select",options:["primary","secondary"]},buttonHint:{control:"text"},default:{control:"text"},icon:{control:"text"}},render:e=>({components:{Paragraph:P,ButtonGroup:k,Button:w,AlertDialog:s},setup(){return{args:e}},template:`
      <AlertDialog open="">
      <form method="dialog">
        <Paragraph>
          {{ args.default }}
        </Paragraph>
        <ButtonGroup>
          <Button type="submit">{{ args.buttonLabel }}</Button>
        </ButtonGroup>
      </form>
      </AlertDialog>
    `})},t=R(C,{name:"Alert Dialog Default",args:{buttonLabel:"Click me!",buttonAppearance:"primary",buttonHint:"Click to open the alert dialog",default:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
 est laborum.`,type:"info"}}),a={args:{...t.args,type:"info"}},o={args:{...t.args,type:"ok"}},r={args:{...t.args,type:"warning"}},n={args:{...t.args,type:"error"}},i={args:{...t.args,buttonLabel:"Stoppen",buttonAppearance:"secondary-action-button",buttonHint:"danger",type:"warning"},render:e=>({components:{Paragraph:P,ButtonGroup:k,Button:w,AlertDialog:s},setup(){const u=H();return{alertDialogRef:u,openDialog:()=>{var l;e.open=!0,(l=u.value)==null||l.$el.showModal()},closeDialog:()=>{e.open=!1},args:e}},template:`
      <div>
      <ButtonGroup><Button @click="openDialog" :aria-pressed="args?.open" :appearance="args?.buttonAppearance" :hint="args?.buttonHint">{{ args?.buttonLabel }}</Button></ButtonGroup>
      <AlertDialog ref="alertDialogRef" :type="args.type">
        <form method="dialog" @submit="closeDialog">
          <Paragraph>
            {{ args?.default }}
          </Paragraph>
          <ButtonGroup>
            <Button type="submit">{{ args.buttonLabel }}</Button>
          </ButtonGroup>
        </form>
      </AlertDialog>
      </div>
    `})};var p,c,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  name: 'Alert Dialog Default',
  args: {
    buttonLabel: 'Click me!',
    buttonAppearance: 'primary',
    buttonHint: 'Click to open the alert dialog',
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\n magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\\n consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\\n pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\\n est laborum.',
    type: 'info'
  }
})`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,d,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'info'
  }
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var b,D,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok'
  }
}`,...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,h,A;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning'
  }
}`,...(A=(h=r.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var G,v,x;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var L,S,q;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    buttonLabel: 'Stoppen',
    buttonAppearance: 'secondary-action-button',
    buttonHint: 'danger',
    type: 'warning'
  },
  render: (args: any) => ({
    components: {
      Paragraph,
      ButtonGroup,
      Button,
      AlertDialog
    },
    setup() {
      const alertDialogRef = ref<typeof AlertDialog>();
      const openDialog = () => {
        args.open = true;
        alertDialogRef.value?.['$el'].showModal();
      };
      const closeDialog = () => {
        args.open = false;
      };
      return {
        alertDialogRef,
        openDialog,
        closeDialog,
        args
      };
    },
    template: \`
      <div>
      <ButtonGroup><Button @click="openDialog" :aria-pressed="args?.open" :appearance="args?.buttonAppearance" :hint="args?.buttonHint">{{ args?.buttonLabel }}</Button></ButtonGroup>
      <AlertDialog ref="alertDialogRef" :type="args.type">
        <form method="dialog" @submit="closeDialog">
          <Paragraph>
            {{ args?.default }}
          </Paragraph>
          <ButtonGroup>
            <Button type="submit">{{ args.buttonLabel }}</Button>
          </ButtonGroup>
        </form>
      </AlertDialog>
      </div>
    \`
  })
}`,...(q=(S=i.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const z=["Default","Info","OK","Warning","Error","ShowModal"];export{t as Default,n as Error,a as Info,o as OK,i as ShowModal,r as Warning,z as __namedExportsOrder,C as default};
