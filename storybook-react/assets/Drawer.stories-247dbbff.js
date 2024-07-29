import{j as e,a as c}from"./jsx-runtime-c9381026.js";import{al as C,P as G,v as p,x as K,p as d}from"./index-da9a6da8.js";import{t as _,d as W}from"./util-ac2edae6.js";import{r as m}from"./index-8b3efc3f.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";import"./_commonjsHelpers-de833af9.js";const F=`<!-- @license CC0-1.0 -->

# Drawer component
`,J={drawer:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!0}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!0}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!0}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!0}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!0}},"max-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!0}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"z-index":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},backdrop:{"min-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},"nl.nldesignsystem.figma.supports-token":!1}}}},N={utrecht:J},Q={title:"React Component/Drawer",id:"react-drawer",component:C,decorators:[l=>e("div",{style:{minHeight:"256px",position:"relative"},children:l()})],args:{children:"",hidden:!1,open:!1,modal:!1},argTypes:{align:{control:{type:"select"},options:["","block-end","block-start","inline-end","inline-start"]},children:{description:"Content of the drawer"},hidden:{control:{type:"boolean"}},open:{control:{type:"boolean"}},modal:{control:{type:"boolean"}}},parameters:{tokensPrefix:"utrecht-drawer",tokens:_,tokensDefinition:N,docs:{description:{component:F}}}},n={args:{children:[e(G,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(p,{children:e(K,{children:"OK"})})],open:!0}},t={args:{...n.args,align:"inline-start"},name:"inline-start alignment"},s={args:{...n.args,align:"inline-end"},name:"inline-end alignment"},r={args:{...n.args,align:"block-start"},name:"block-start alignment"},o={args:{...n.args,align:"block-end"},name:"block-end alignment"},i={render:({buttonLabel:l,buttonAppearance:z,buttonHint:H,children:I,...U})=>{const u=m.createRef(),[j,R]=m.useState(!1);return c("div",{children:[e(p,{children:e(d,{onClick:()=>{u.current&&(R(!0),u.current.showModal())},"aria-pressed":j,appearance:z,hint:H,children:l})}),e(C,{...U,ref:u,children:I})]})},args:{buttonLabel:"Open menu",buttonAppearance:"subtle-button",children:c("form",{method:"dialog",children:[e(p,{children:e(d,{apperance:"subtle-button",type:"submit",children:"Sluiten"})}),e(G,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},argTypes:{buttonLabel:{type:"text"},buttonAppearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},buttonHint:{type:"select",options:[void 0,"warning","danger"]},type:{type:"select",options:["info","ok","warning","error"]}}},a=W(Q);var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,f,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-start'
  },
  name: 'inline-start alignment'
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,w,q;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-end'
  },
  name: 'inline-end alignment'
}`,...(q=(w=s.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var v,S,B;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-start'
  },
  name: 'block-start alignment'
}`,...(B=(S=r.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var D,$,P;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-end'
  },
  name: 'block-end alignment'
}`,...(P=($=o.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var E,L,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var A,O,T;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:"designTokenStory(meta)",...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const le=["Default","InlineStart","InlineEnd","BlockStart","BlockEnd","ShowModal","DesignTokens"];export{o as BlockEnd,r as BlockStart,n as Default,a as DesignTokens,s as InlineEnd,t as InlineStart,i as ShowModal,le as __namedExportsOrder,Q as default};
//# sourceMappingURL=Drawer.stories-247dbbff.js.map
