<!-- @license CC0-1.0 -->

# Breadcrumb navigation

Breadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina's van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina's heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.

Het kruimelpad moet alleen links bevatten naar hogere niveau's of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.

## HTML

Gebruik een `nav` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Het kruimelpad is zelden de enige _navigation landmark_ op de pagina en landmarks moeten wel duidelijk te onderscheiden zijn. Gebruik daarom `aria-label` of `aria-labelledby` met een duidelijk label.

Gebruik een heading element met `aria-labelledby`, zodat het label zichtbaar is wanneer de CSS niet geladen kan worden. Zonder stijl is het kruimelpad niet duidelijk herkenbaar, dan maakt de heading dat duidelijk.

De _breadcrumb navigation_ is niet een onderdeel dat opgezocht wordt via heading navigatie van een _screen reader_. Verberg de heading met `aria-hidden="true"` zodat de headings uit de main content sneller te vinden zijn.

Bijvoorbeeld:

```html
<nav aria-labelledby="breadcrumb-heading">
  <h2 id="breadcrumb-heading" aria-hidden="true">Kruimelpad</h2>
  ...kruimelpad...
</nav>
```

Gebruik `rel` om duidelijk te maken wat het doel is van de links. ([WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)). Gebruik [`rel="home"`](https://microformats.org/wiki/rel-home) voor de link naar de homepage (deze relatie is nog slechts een voorstel). Gebruik [`rel="up"`](https://microformats.org/wiki/rel-up) voor pagina's die één niveau hoger zijn in een hierarchie. Gebruik `rel="first"` voor de eerste pagina in een serie.

## Related info

- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)
- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)
- [Exploring Markup for Breadcrumbs — Chris Coyier](https://css-tricks.com/markup-for-breadcrumbs/)

## Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): gebruik het `<nav>` element voor de `navigation` landmark role.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de `navigation` landmark maakt duidelijk dat het om het broodkruimelpad gaat.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose)
- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location): een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina's.
