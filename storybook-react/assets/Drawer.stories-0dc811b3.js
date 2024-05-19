import{j as e,a as d}from"./jsx-runtime-29545a09.js";import{ai as C,P as G,t as u,u as K,o as p}from"./index-1fa81404.js";import{t as _,d as W}from"./util-4b929d67.js";import{r as m}from"./index-76fb7be0.js";import"./slicedToArray-b6353f72.js";import"./clsx.m-c1fc4751.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const F=`<!-- @license CC0-1.0 -->

# Drawer component
`,J={drawer:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"max-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"z-index":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},backdrop:{"min-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},N={utrecht:J},Q={title:"React Component/Drawer",id:"react-drawer",component:C,decorators:[l=>e("div",{style:{minHeight:"256px",position:"relative"},children:l()})],args:{children:"",hidden:!1,open:!1,modal:!1},argTypes:{align:{control:{type:"select"},options:["","block-end","block-start","inline-end","inline-start"]},children:{description:"Content of the drawer"},hidden:{control:{type:"boolean"}},open:{control:{type:"boolean"}},modal:{control:{type:"boolean"}}},parameters:{tokensPrefix:"utrecht-drawer",tokens:_,tokensDefinition:N,docs:{description:{component:F}}}},n={args:{children:[e(G,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(u,{children:e(K,{children:"OK"})})],open:!0}},t={args:{...n.args,align:"inline-start"},name:"inline-start alignment"},r={args:{...n.args,align:"inline-end"},name:"inline-end alignment"},o={args:{...n.args,align:"block-start"},name:"block-start alignment"},s={args:{...n.args,align:"block-end"},name:"block-end alignment"},i={render:({buttonLabel:l,buttonAppearance:z,buttonHint:H,children:I,...U})=>{const c=m.createRef(),[j,R]=m.useState(!1);return d("div",{children:[e(u,{children:e(p,{onClick:()=>{c.current&&(R(!0),c.current.showModal())},"aria-pressed":j,appearance:z,hint:H,children:l})}),e(C,{...U,ref:c,children:I})]})},args:{buttonLabel:"Open menu",buttonAppearance:"subtle-button",children:d("form",{method:"dialog",children:[e(u,{children:e(p,{apperance:"subtle-button",type:"submit",children:"Sluiten"})}),e(G,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},argTypes:{buttonLabel:{type:"text"},buttonAppearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},buttonHint:{type:"select",options:[void 0,"warning","danger"]},type:{type:"select",options:["info","ok","warning","error"]}}},a=W(Q);var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>, <ButtonGroup>
        <PrimaryActionButton>OK</PrimaryActionButton>
      </ButtonGroup>],
    open: true
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,x,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-start'
  },
  name: 'inline-start alignment'
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,w,q;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-end'
  },
  name: 'inline-end alignment'
}`,...(q=(w=r.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var S,v,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-start'
  },
  name: 'block-start alignment'
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var D,$,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-end'
  },
  name: 'block-end alignment'
}`,...(P=($=s.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var E,L,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    buttonLabel,
    buttonAppearance,
    buttonHint,
    children,
    ...restProps
  }: PropsWithChildren<ShowModalProps>) => {
    const drawer = createRef<HTMLDialogElement>();
    const [open, setOpen] = useState(false);
    const showModal = () => {
      if (drawer.current) {
        setOpen(true);
        drawer.current.showModal();
      }
    };
    return <div>
        <ButtonGroup>
          <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
            {buttonLabel}
          </Button>
        </ButtonGroup>
        <Drawer {...restProps} ref={drawer}>
          {children}
        </Drawer>
      </div>;
  },
  args: {
    buttonLabel: 'Open menu',
    buttonAppearance: 'subtle-button',
    children: <form method="dialog">
        <ButtonGroup>
          <Button apperance="subtle-button" type="submit">
            Sluiten
          </Button>
        </ButtonGroup>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </form>
  },
  argTypes: {
    buttonLabel: {
      type: 'text'
    },
    buttonAppearance: {
      type: 'select',
      options: [undefined, 'primary-action-button', 'secondary-action-button', 'subtle-button']
    },
    buttonHint: {
      type: 'select',
      options: [undefined, 'warning', 'danger']
    },
    type: {
      type: 'select',
      options: ['info', 'ok', 'warning', 'error']
    }
  }
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var A,O,T;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:"designTokenStory(meta)",...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const ae=["Default","InlineStart","InlineEnd","BlockStart","BlockEnd","ShowModal","DesignTokens"];export{s as BlockEnd,o as BlockStart,n as Default,a as DesignTokens,r as InlineEnd,t as InlineStart,i as ShowModal,ae as __namedExportsOrder,Q as default};
//# sourceMappingURL=Drawer.stories-0dc811b3.js.map
