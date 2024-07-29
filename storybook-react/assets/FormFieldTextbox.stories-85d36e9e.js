import{j as pe}from"./jsx-runtime-c9381026.js";import{F as c}from"./index-da9a6da8.js";import be from"./FormField.stories-52d71bb1.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./util-ac2edae6.js";import"./index-9d475cdf.js";const ge={...be.argTypes,required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:!1}}},inputRequired:{description:"Required (HTML validation)",control:"boolean",table:{category:"API",defaultValue:{summary:!1}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:!1}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:!1}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:!1}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:""},category:"API"}},errorMessage:{name:"errorMessage",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:""},category:"API"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"API",defaultValue:{summary:""}}},autoComplete:{description:"Autocomplete",control:"select",options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},min:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},max:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},step:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},size:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},type:{description:"Type",control:"select",options:{"":null,email:"email",number:"number",password:"password",search:"search",tel:"tel",text:"text",url:"url"},table:{category:"API",defaultValue:{summary:""}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}},inputDir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"API",defaultValue:{summary:""}}}},qe={title:"React Component/Form Field with textbox",id:"react-form-field-textbox",component:c,argTypes:ge,args:{description:"",disabled:!1,invalid:!1,errorMessage:"",label:"",name:"",defaultValue:"",value:"",required:!1,inputRequired:!1,type:void 0,autoComplete:"",readOnly:!1,dir:void 0,inputDir:void 0,placeholder:"",size:void 0},render:$=>{const{description:B,disabled:G,id:J,invalid:Q,errorMessage:U,status:X,inputRequired:Y,label:Z,name:ee,required:re,defaultValue:ae,type:te,autoComplete:oe,minLength:le,maxLength:ne,readOnly:se,dir:ie,inputDir:de,placeholder:ue,value:ce,size:me}=$;return pe(c,{id:J||void 0,description:B||void 0,disabled:G,errorMessage:U||void 0,status:X||void 0,invalid:Q,label:Z||void 0,name:ee||void 0,required:re,inputRequired:Y,defaultValue:ae||void 0,value:ce||void 0,type:te||void 0,autoComplete:oe||void 0,minLength:le||void 0,maxLength:ne||void 0,readOnly:se||void 0,inputDir:de||void 0,dir:ie||void 0,placeholder:ue||void 0,size:me||void 0})}},e={args:{name:"subject",label:"Onderwerp"}},r={args:{name:"subject",label:"Onderwerp",description:"Kort maar krachtig."}},a={args:{name:"subject",label:"Onderwerp",errorMessage:"Vul een onderwerp in.",invalid:!0}},t={args:{name:"subject",label:"Onderwerp",defaultValue:"Hello, World!",status:"13 van de 50 tekens gebruikt."}},o={args:{name:"subject",label:"Wachtwoord",type:"password",autoComplete:"current-password"}},l={args:{name:"subject",label:"Onderwerp",disabled:!0,defaultValue:"Hello, world!"}},n={args:{name:"subject",label:"Onderwerp",readOnly:!0,defaultValue:"Hello, world!"}},s={args:{name:"subject",label:"Onderwerp",required:!0}},i={args:{name:"subject",label:"Onderwerp",inputRequired:!0}},d={args:{name:"subject",label:"Onderwerp",placeholder:"Type some text..."}},u={args:{dir:"rtl",label:"رقم الجوال",type:"tel",autoComplete:"mobile tel-national",inputDir:"ltr"},name:"Left-to-right input"};var m,p,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp'
  }
}`,...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Kort maar krachtig.'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,w,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,V,O;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt.'
  }
}`,...(O=(V=t.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var I,P,A;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password',
    autoComplete: 'current-password'
  }
}`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var j,q,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    defaultValue: 'Hello, world!'
  }
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var D,S,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    defaultValue: 'Hello, world!'
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var L,M,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true
  }
}`,...(C=(M=s.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var k,H,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true
  }
}`,...(z=(H=i.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var F,W,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...'
  }
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var K,_,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    dir: 'rtl',
    label: 'رقم الجوال',
    type: 'tel',
    autoComplete: 'mobile tel-national',
    inputDir: 'ltr'
  },
  name: 'Left-to-right input'
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Re=["Default","Description","ErrorMessage","Status","Password","Disabled","ReadOnly","Required","InputRequired","Placeholder","LeftToRightInput"];export{e as Default,r as Description,l as Disabled,a as ErrorMessage,i as InputRequired,u as LeftToRightInput,o as Password,d as Placeholder,n as ReadOnly,s as Required,t as Status,Re as __namedExportsOrder,qe as default};
//# sourceMappingURL=FormFieldTextbox.stories-85d36e9e.js.map
