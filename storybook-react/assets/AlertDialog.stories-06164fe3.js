import{j as e,a as p}from"./jsx-runtime-29545a09.js";import{A as E,P as H,t as c,u as T,o as I}from"./index-1fa81404.js";import{t as z}from"./tokens-72779522.js";import{t as F,d as J}from"./util-4b929d67.js";import{r as d}from"./index-76fb7be0.js";import"./slicedToArray-b6353f72.js";import"./clsx.m-c1fc4751.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const N=`<!-- @license CC0-1.0 -->

# Alert Dialog

De _alert dialog component_ is er voor berichten waarbij de gebruiker een belangrijke beslissing moet maken, voordat de gebruiker verder gaat.

De design tokens van de _alert component_ en de _backdrop component_ worden gebruikt, de alert dialog component heeft daarom weinig eigen design tokens.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht.
`,Q={title:"React Component/Alert dialog",id:"react-alert-dialog",component:E,args:{children:[e(H,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(c,{children:e(T,{children:"OK"})})]},parameters:{tokensPrefix:"utrecht-alert-dialog",tokens:F,tokensDefinition:z,docs:{description:{component:N}}}},t={},o={args:{open:!0,type:"info"}},r={args:{open:!0,type:"ok"}},n={args:{open:!0,type:"warning"}},a={args:{open:!0,type:"error"}},i={render:({buttonLabel:j,buttonAppearance:C,buttonHint:G,children:K,...R})=>{const u=d.createRef(),[U,W]=d.useState(!1);return p("div",{children:[e(c,{children:e(I,{onClick:()=>{u.current&&(W(!0),u.current.showModal())},"aria-pressed":U,appearance:C,hint:G,children:j})}),e(E,{...R,ref:u,children:K})]})},args:{buttonLabel:"Stoppen",buttonAppearance:"secondary-action-button",buttonHint:"danger",type:"warning",children:p("form",{method:"dialog",children:[e(H,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(c,{children:e(T,{type:"submit",children:"OK"})})]})},argTypes:{buttonLabel:{type:"text"},buttonAppearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},buttonHint:{type:"select",options:[void 0,"warning","danger"]},type:{type:"select",options:["info","ok","warning","error"]}}},s=J(Q);var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'info'
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,k,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'ok'
  }
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,D,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'warning'
  }
}`,...(x=(D=n.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var S,q,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'error'
  }
}`,...(A=(q=a.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var P,B,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: ({
    buttonLabel,
    buttonAppearance,
    buttonHint,
    children,
    ...restProps
  }: PropsWithChildren<ShowModalProps>) => {
    const alertDialog = createRef<HTMLDialogElement>();
    const [open, setOpen] = useState(false);
    const showModal = () => {
      if (alertDialog.current) {
        setOpen(true);
        alertDialog.current.showModal();
      }
    };
    return <div>
        <ButtonGroup>
          <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
            {buttonLabel}
          </Button>
        </ButtonGroup>
        <AlertDialog {...restProps} ref={alertDialog}>
          {children}
        </AlertDialog>
      </div>;
  },
  args: {
    buttonLabel: 'Stoppen',
    buttonAppearance: 'secondary-action-button',
    buttonHint: 'danger',
    type: 'warning',
    children: <form method="dialog">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
        <ButtonGroup>
          <PrimaryActionButton type="submit">OK</PrimaryActionButton>
        </ButtonGroup>
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
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var M,_,O;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:"designTokenStory(meta)",...(O=(_=s.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const se=["Default","Info","OK","Warning","Error","ShowModal","DesignTokens"];export{t as Default,s as DesignTokens,a as Error,o as Info,r as OK,i as ShowModal,n as Warning,se as __namedExportsOrder,Q as default};
//# sourceMappingURL=AlertDialog.stories-06164fe3.js.map
