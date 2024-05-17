import{a as r,j as e}from"./jsx-runtime-29545a09.js";import{f as u,g as F,L as n,h as g,l as b,B as L,P as d,i as v,j as w,S as f,F as t,a,T as o,d as E,e as H,q as P,R as s,p as U,k as y}from"./index.esm-3a3c222e.js";import{U as x,a as B,b as O,c as D,d as l}from"./index.esm-4c443893.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-c1fc4751.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./getPrototypeOf-624f05c9.js";import"./index-d3ea75b5.js";import"./iframe-d6ee91c5.js";import"../sb-preview/runtime.js";const A={title:"Template/Multistep form/Step 2",id:"template-form-pages-step-2",component:u},i={render:p=>r(u,{...p,children:[e(F,{children:e(n,{href:"/",children:e(x,{})})}),r(g,{style:{"--utrecht-space-around":1},children:[e(B,{json:JSON.stringify([{href:"https://example/",title:"Home",current:!1},{href:"https://example/",title:"Online loket",current:!0}]),variant:"arrows"}),r("aside",{children:[e(b,{children:"MIJN LOKET"}),e(O,{children:r(L,{appearance:"primary-action-button",children:["Uitloggen",e(D,{})]})}),e(d,{children:"Mevrouw Cindy"}),e("br",{}),e("br",{})]}),r(v,{children:[e(d,{lead:!0,children:"ONLINE LOKET"}),"Een verhuizing doorgeven"]}),e(w,{children:"De Verhuizing"}),e(f,{}),e("section",{children:r("form",{children:[r(t,{children:[e(a,{htmlFor:"verhuisdatum",children:"Verhuisdatum*"}),e("br",{}),e(o,{id:"verhuisdatum",type:"date",required:!0})]}),r(E,{children:[e(H,{children:"NIEUWE ADRES"}),r("div",{role:"radiogroup","aria-labelledby":"nieuwe-adres-label","data-rating-value":"",children:[e(P,{id:"nieuwe-adres-label",children:"Hoe wilt u zoeken *"}),r(t,{children:[e(s,{id:"postcode",name:"woonplaats-en-straat"}),e(a,{htmlFor:"postcode",children:"Postcode"})]}),r(t,{children:[e(s,{id:"woonplaats-en-straat",name:"woonplaats-en-straat"}),e(a,{htmlFor:"woonplaats-en-straat",children:"Woonplaats en Straat"})]})]}),r(t,{children:[e(a,{htmlFor:"postcode",children:"Postcode *"}),e("br",{}),e(o,{id:"postcode",required:!0,"aria-invalid":"true","aria-errormessage":"err-postcode"}),e(l,{id:"err-postcode",status:"invalid",children:"U moet de postcode van het nieuwe adres invullen."})]}),r(t,{children:[e(a,{htmlFor:"huisnummer",children:"Huisnummer *"}),e("br",{}),e(o,{id:"huisnummer",required:!0})]}),e(l,{children:"Vragen met een * zijn verplicht."})]}),e(n,{href:"/",children:"VORIGE"}),e(U,{type:"submit",appearance:"primary-action-button",children:"VOLGENDE"})]})})]}),e(y,{})]})};var m,c,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <Link href="/">
          <UtrechtLogo />
        </Link>
      </PageHeader>
      <PageContent style={({
      '--utrecht-space-around': 1
    } as any)}>
        <UtrechtBreadcrumbNav json={JSON.stringify([{
        href: 'https://example/',
        title: 'Home',
        current: false
      }, {
        href: 'https://example/',
        title: 'Online loket',
        current: true
      }])} variant="arrows" />

        <aside>
          <Heading3>MIJN LOKET</Heading3>
          <UtrechtDigidButton>
            <ButtonLink appearance="primary-action-button">
              Uitloggen
              <UtrechtIconArrow />
            </ButtonLink>
          </UtrechtDigidButton>
          <Paragraph>Mevrouw Cindy</Paragraph>
          <br />
          <br />
        </aside>
        <Heading1>
          <Paragraph lead>ONLINE LOKET</Paragraph>
          Een verhuizing doorgeven
        </Heading1>
        <Heading2>De Verhuizing</Heading2>
        <Separator />
        <section>
          <form>
            <FormField>
              <FormLabel htmlFor="verhuisdatum">Verhuisdatum*</FormLabel>
              <br />
              <Textbox id="verhuisdatum" type="date" required />
            </FormField>
            <Fieldset>
              <FieldsetLegend>NIEUWE ADRES</FieldsetLegend>
              <div role="radiogroup" aria-labelledby="nieuwe-adres-label" data-rating-value="">
                <Heading4 id="nieuwe-adres-label">Hoe wilt u zoeken *</Heading4>
                <FormField>
                  <RadioButton id="postcode" name="woonplaats-en-straat" />
                  <FormLabel htmlFor="postcode">Postcode</FormLabel>
                </FormField>
                <FormField>
                  <RadioButton id="woonplaats-en-straat" name="woonplaats-en-straat" />
                  <FormLabel htmlFor="woonplaats-en-straat">Woonplaats en Straat</FormLabel>
                </FormField>
              </div>
              <FormField>
                <FormLabel htmlFor="postcode">Postcode *</FormLabel>
                <br />
                <Textbox id="postcode" required aria-invalid="true" aria-errormessage="err-postcode" />
                <UtrechtFormFieldDescription id="err-postcode" status="invalid">
                  U moet de postcode van het nieuwe adres invullen.
                </UtrechtFormFieldDescription>
              </FormField>
              <FormField>
                <FormLabel htmlFor="huisnummer">Huisnummer *</FormLabel>
                <br />
                <Textbox id="huisnummer" required />
              </FormField>
              <UtrechtFormFieldDescription>Vragen met een * zijn verplicht.</UtrechtFormFieldDescription>
            </Fieldset>
            <Link href="/">VORIGE</Link>
            <Button type="submit" appearance="primary-action-button">
              VOLGENDE
            </Button>
          </form>
        </section>
      </PageContent>
      <PageFooter />
    </Page>
}`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const G=["Two"];export{i as Two,G as __namedExportsOrder,A as default};
//# sourceMappingURL=PageStep-2.stories-f1937c4d.js.map
