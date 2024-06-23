import{M as i}from"./StoryUtil-7f67a3ec.js";import"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./_baseForOwn-532e8b26.js";import"./cloneDeep-5db644cf.js";import"./isPlainObject-46fcf4ee.js";import"./toNumber-e07b566c.js";import"./index-4c9187e6.js";import"./defineProperty-84a138b7.js";import"./possibleConstructorReturn-aeaa7fd3.js";import"./getPrototypeOf-a3ec403f.js";const k={id:"open-forms-voorbeeld",title:"Open Formulieren/Voorbeeld",component:i,args:{components:[{type:"",key:"",label:""}]}},e={args:{components:[{type:"textfield",key:"textfield",label:"Required text field",description:"Text field description",validate:{required:!0,pattern:"^\\d+"}},{type:"radio",key:"radio",label:"Required radio",validate:{required:!0},values:[{value:"a",label:"Option A"},{value:"b",label:"Option B"}]},{type:"content",key:"content",label:"Content",html:"<p>Some WYSIWYG content</p>",customClass:"info"},{type:"fieldset",key:"fieldset",label:"Fieldset label",hideHeader:!0,components:[{type:"checkbox",key:"checkbox",label:"Checkbox"},{type:"textfield",key:"nestedTextfield",label:"Nested text field"}]},{type:"textfield",key:"hiddenTextfield",label:"Hidden text field",hidden:!0},{label:"Submit",showValidations:!1,key:"submit1",type:"button",input:!0}]}};var t,n,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    components: [{
      type: 'textfield',
      key: 'textfield',
      label: 'Required text field',
      description: 'Text field description',
      validate: {
        required: true,
        pattern: '^\\\\d+'
      }
    }, {
      type: 'radio',
      key: 'radio',
      label: 'Required radio',
      validate: {
        required: true
      },
      values: [{
        value: 'a',
        label: 'Option A'
      }, {
        value: 'b',
        label: 'Option B'
      }]
    }, {
      type: 'content',
      key: 'content',
      label: 'Content',
      html: '<p>Some WYSIWYG content</p>',
      customClass: 'info'
    }, {
      type: 'fieldset',
      key: 'fieldset',
      label: 'Fieldset label',
      hideHeader: true,
      components: [{
        type: 'checkbox',
        key: 'checkbox',
        label: 'Checkbox'
      }, {
        type: 'textfield',
        key: 'nestedTextfield',
        label: 'Nested text field'
      }]
    }, {
      type: 'textfield',
      key: 'hiddenTextfield',
      label: 'Hidden text field',
      hidden: true
    }, {
      label: 'Submit',
      showValidations: false,
      key: 'submit1',
      type: 'button',
      input: true
    }]
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,k as default};
//# sourceMappingURL=OpenFormsVoorbeeld.stories-8dc55bb4.js.map
