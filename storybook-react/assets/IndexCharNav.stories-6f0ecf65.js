import{j as ln}from"./jsx-runtime-29545a09.js";import{a8 as pn}from"./index-e59ff505.js";import{t as dn,d as un}from"./util-9e4b6405.js";import{r as hn}from"./index-76fb7be0.js";import"./slicedToArray-b6353f72.js";import"./defineProperty-84a138b7.js";import"./clsx.m-892aa8a5.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-9d475cdf.js";import"./_commonjsHelpers-de833af9.js";const kn=`<!-- @license CC0-1.0 -->

# Index character navigation

Navigate using sorted [index characters](https://cldr.unicode.org/development/development-process/design-proposals/index-characters). Index characters have differences between locales, because the characters or the alphabetical order can be different.
`,gn={"index-char-nav":{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},link:{current:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}}}},Cn={utrecht:gn},on="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",sn="Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω",cn="А Б В Г Ґ Д Е Є Ж З И І Ї Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ь Ю Я",C=n=>n.trim().split(/\s+/g).map(a=>({char:a,href:`./${a.toLocaleLowerCase()}/`})),e=C(on),bn=C(sn),Ln=C(cn),b=n=>n.map(({...a})=>({...a,disabled:!0})),L=n=>n.map(({...a},mn)=>({...a,disabled:mn%3===0})),xn={title:"React Component/Index character navigation",id:"react-index-char-nav",component:pn,argTypes:{onLinkClick:{control:null,description:"Function to handle character click and return the navigation URL."},currentChar:{control:"text",description:"The current character."},characters:{control:{type:"radio"},description:"The characters with data for each character.",options:{[on]:e,[sn]:bn,[cn]:Ln}},component:{options:["link","button"],control:{type:"radio"},description:"The component to use for the navigation."},Link:{control:null,description:"Custom component to use for navigation."}},args:{onLinkClick:n=>n},tags:["autodocs"],parameters:{status:{type:"ALPHA"},tokensPrefix:"utrecht-index-char-nav",tokens:dn,tokensDefinition:Cn,docs:{description:{component:kn}}}},r=hn.forwardRef((n,a)=>ln("a",{ref:a,...n}));r.displayName="DemoLinkComponent";const t={args:{characters:e,component:"link"},name:"Link"},o={args:{characters:e,component:"link",currentChar:"A"},name:"Current page"},s={args:{availability:"none",characters:b(e),component:"link"},name:"Disabled link"},i={args:{availability:"mixed",characters:L(e),component:"link"},name:"Links with mixed availability"},c={args:{characters:e,component:"button",onLinkClick:n=>n},name:"Button"},m={args:{currentChar:"A",characters:e,component:"button"},name:"Pressed button"},l={args:{availability:"mixed",characters:L(e),component:"button",onLinkClick:n=>n},name:"Buttons with mixed availability"},p={args:{availability:"none",characters:b(e),component:"button"},name:"Disabled button"},d={args:{characters:e,component:"link",Link:r},name:"Custom Link component"},u={args:{characters:e,component:"link",Link:r,currentChar:"A"},name:"Custom Link component with current char"},h={args:{characters:b(e),component:"link",Link:r},name:"Custom disabled Link component"},k={args:{characters:L(e),component:"link",Link:r},name:"Custom Link component with mixed availability"},g=un(xn);var x,y,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link'
  },
  name: 'Link'
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var D,f,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link',
    currentChar: 'A'
  },
  name: 'Current page'
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,w,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    availability: 'none',
    characters: noAvailability(latinCharacters),
    component: 'link'
  },
  name: 'Disabled link'
}`,...(B=(w=s.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var T,M,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    availability: 'mixed',
    characters: mixedAvailability(latinCharacters),
    component: 'link'
  },
  name: 'Links with mixed availability'
}`,...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var I,$,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'button',
    onLinkClick: char => char
  },
  name: 'Button'
}`,...(N=($=c.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var R,E,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    currentChar: 'A',
    characters: latinCharacters,
    component: 'button'
  },
  name: 'Pressed button'
}`,...(j=(E=m.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var F,H,O;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    availability: 'mixed',
    characters: mixedAvailability(latinCharacters),
    component: 'button',
    onLinkClick: char => char
  },
  name: 'Buttons with mixed availability'
}`,...(O=(H=l.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,_,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    availability: 'none',
    characters: noAvailability(latinCharacters),
    component: 'button'
  },
  name: 'Disabled button'
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link',
    Link: DemoLinkComponent
  },
  name: 'Custom Link component'
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,W,X;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    characters: latinCharacters,
    component: 'link',
    Link: DemoLinkComponent,
    currentChar: 'A'
  },
  name: 'Custom Link component with current char'
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,q;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    characters: noAvailability(latinCharacters),
    component: 'link',
    Link: DemoLinkComponent
  },
  name: 'Custom disabled Link component'
}`,...(q=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var z,nn,en;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    characters: mixedAvailability(latinCharacters),
    component: 'link',
    Link: DemoLinkComponent
  },
  name: 'Custom Link component with mixed availability'
}`,...(en=(nn=k.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,rn,tn;g.parameters={...g.parameters,docs:{...(an=g.parameters)==null?void 0:an.docs,source:{originalSource:"designTokenStory(meta)",...(tn=(rn=g.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};const In=["Default","LinkCurrent","LinkDisabled","LinkMixed","Button","ButtonPressed","ButtonMixed","ButtonDisabled","CustomLink","CustomLinkCurrentChar","CustomLinkDisabled","CustomLinkMixed","DesignTokens"];export{c as Button,p as ButtonDisabled,l as ButtonMixed,m as ButtonPressed,d as CustomLink,u as CustomLinkCurrentChar,h as CustomLinkDisabled,k as CustomLinkMixed,t as Default,g as DesignTokens,o as LinkCurrent,s as LinkDisabled,i as LinkMixed,In as __namedExportsOrder,xn as default};
//# sourceMappingURL=IndexCharNav.stories-6f0ecf65.js.map
