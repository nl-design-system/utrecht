import{j as e}from"./jsx-runtime-c9381026.js";import{as as z,at as n,au as l}from"./index-92b23782.js";import{t as E,d as _}from"./util-7a7e14bd.js";import{m}from"./index.esm-1355ae04.js";import{c as D}from"./clsx-aa410b3d.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";import"./inherits-f39b4992.js";import"./getPrototypeOf-5ea76000.js";import"./index-a38d0dca.js";import"./iframe-147376be.js";import"../sb-preview/runtime.js";const P=`<!-- @license CC0-1.0 -->

# Breadcrumb navigation

Breadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina's van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina's heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.

Het kruimelpad moet alleen links bevatten naar hogere niveau's of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.

## HTML

Gebruik een \`nav\` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom \`aria-label\` of \`aria-labelledby\` met een duidelijk label.

Gebruik een heading element met \`aria-labelledby\`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.

De _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met \`aria-hidden="true"\` zodat de headings uit de main content sneller te vinden zijn.

Bijvoorbeeld:

\`\`\`html
<nav aria-labelledby="breadcrumb-heading">
  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>
  ...kruimelpad...
</nav>
\`\`\`

Gebruik \`rel\` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [\`rel="home"\`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [\`rel="up"\`](https://microformats.org/wiki/rel-up) voor pagina's die één niveau hoger zijn in een hierarchie. Gebruik \`rel="first"\` voor de eerste pagina in een serie.

## Hoe het niet moet

### Navigatie in de verkeerde _landmark_

Plaats het \`<nav>\` HTML-element met de breadcrumb navigation niet binnen de _main page content_, ofwel het \`<main>\` HTML-element.

Niet:

\`\`\`html
<main>
  <nav class="breadcrumbs">
    <a href="/">Home</a> /
    <a href="/contact" aria-current="page">Contact</a>
  </nav>
  <h1>Contact</h1>
</main>
\`\`\`

Wel:

\`\`\`html
<nav class="breadcrumbs">
  <a href="/">Home</a> /
  <a href="/contact" aria-current="page">Contact</a>
</nav>
<main>
  <h1>Contact</h1>
</main>
\`\`\`

## Related info

- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)
- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)
- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)

## Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het \`<nav>\` element voor de \`navigation\` landmark role.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)
- [WCAG eis 2.4.5](https://www.w3.org/TR/WCAG21/#multiple-ways)
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de \`navigation\` landmark maakt duidelijk dat het om het broodkruimelpad gaat. Zie ook: [Using \`aria-label\` to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).
- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location):
  - gebruik \`<a aria-current="location">\` om de huidige pagina te markeren
  - een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina's.
`,M={"breadcrumb-nav":{"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | none | uppercase",inherits:!0}}},item:{"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},link:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | none | underline",inherits:!0}}}},hover:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | none | underline",inherits:!0}}}},current:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},separator:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},arrows:{link:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}}}},O={utrecht:M},c=({children:j,className:$,...W})=>e("a",{className:D("utrecht-link","utrecht-link--html-a",$),...W,children:j});c.displayName="ExampleCustomLink";const I={title:"React Component/Breadcrumb navigation",id:"react-breadcrumb-nav",component:z,args:{label:"Kruimelpad",children:[e(n,{href:"/",rel:"home",index:0,children:"Home"}),e(n,{href:"/a/",index:1,children:"Niveau 1"}),e(n,{href:"/a/b/",rel:"up",index:2,children:"Niveau 2"})]},argTypes:{appearance:{description:"Appearance",control:{type:"select"},options:["","arrows"]}},parameters:{tokensPrefix:"utrecht-breadcrumb-nav",tokens:E,tokensDefinition:O,docs:{description:{component:P}}}},r={args:{appearance:"arrows"},parameters:{docs:{description:{story:'The "arrows appearance" is specific to the Municipality of Utrecht, we recommend to avoid this appearance for other organisations.'}},status:{type:"ALPHA"}}},a={},t={args:{children:[e(n,{href:"/",rel:"home",index:0,children:"Home"}),e(n,{href:"/a/",index:1,children:"Niveau 1"}),e(n,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:'For accessibility specify the `current` property, to render `aria-current="page"`.'}},status:{type:"ALPHA"}}},i={args:{children:[e(n,{href:"/",rel:"home",index:0,children:"Home"}),e(l,{children:e(m,{})}),e(n,{href:"/a/",index:1,children:"Niveau 1"}),e(l,{children:e(m,{})}),e(n,{href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{status:{type:"WORK IN PROGRESS"}}},s={args:{children:[e(n,{href:"/",rel:"home",index:0,children:"Home"}),e(n,{href:"/a/",index:1,children:"Niveau 1"}),e(n,{href:"/a/b/",index:2,current:!0,disabled:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:`
Meer informatie over disabled links:

- [Scott O'Hara in 2019: The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
- [Scott O'Hara in 2021: Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
`}},status:{type:"ALPHA"}}},o={args:{children:[e(n,{Link:c,href:"/",rel:"home",index:0,children:"Home"}),e(n,{Link:c,href:"/a/",index:1,children:"Niveau 1"}),e(n,{Link:c,href:"/a/b/",index:2,current:!0,children:"Huidige pagina"})]},parameters:{docs:{description:{story:"The `Link` property is used to override the default link component.\nWarning: this feature is experimental.\nHelp needed: this feature "}},status:{type:"EXPERIMENTAL"}}},d=_(I);var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    appearance: 'arrows'
  },
  parameters: {
    docs: {
      description: {
        story: \`The "arrows appearance" is specific to the Municipality of Utrecht, we recommend to avoid this appearance for other organisations.\`
      }
    },
    status: {
      type: 'ALPHA'
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,v,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>]
  },
  parameters: {
    docs: {
      description: {
        story: \`For accessibility specify the \\\`current\\\` property, to render \\\`aria-current="page"\\\`.\`
      }
    },
    status: {
      type: 'ALPHA'
    }
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,w,L;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavSeparator>
        <UtrechtIconChevronRight />
      </BreadcrumbNavSeparator>, <BreadcrumbNavLink href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>]
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS'
    }
  }
}`,...(L=(w=i.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var N,C,B;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavLink href="/a/b/" index={2} current disabled>
        Huidige pagina
      </BreadcrumbNavLink>]
  },
  parameters: {
    docs: {
      description: {
        story: \`
Meer informatie over disabled links:

- [Scott O'Hara in 2019: The accessibility of placeholder links](https://www.scottohara.me/note/2019/07/17/placeholder-link.html)
- [Scott O'Hara in 2021: Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)
\`
      }
    },
    status: {
      type: 'ALPHA'
    }
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var H,A,S;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbNavLink Link={ExampleCustomLink} href="/" rel="home" index={0}>
        Home
      </BreadcrumbNavLink>, <BreadcrumbNavLink Link={ExampleCustomLink} href="/a/" index={1}>
        Niveau 1
      </BreadcrumbNavLink>, <BreadcrumbNavLink Link={ExampleCustomLink} href="/a/b/" index={2} current>
        Huidige pagina
      </BreadcrumbNavLink>]
  },
  parameters: {
    docs: {
      description: {
        story: \`The \\\`Link\\\` property is used to override the default link component.
Warning: this feature is experimental.
Help needed: this feature \`
      }
    },
    status: {
      type: 'EXPERIMENTAL'
    }
  }
}`,...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var G,T,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:"designTokenStory(meta)",...(R=(T=d.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const oe=["Arrows","Default","Current","Separator","CurrentDisabled","CustomLink","DesignTokens"];export{r as Arrows,t as Current,s as CurrentDisabled,o as CustomLink,a as Default,d as DesignTokens,i as Separator,oe as __namedExportsOrder,I as default};
//# sourceMappingURL=BreadcrumbNav.stories-34c5b130.js.map
