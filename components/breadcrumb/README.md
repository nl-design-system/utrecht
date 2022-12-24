<!-- @license CC0-1.0 -->

# Breadcrumb navigation

Breadcrumb navigation, ook wel "kruimelpad" genoemd, gebruik je als de pagina's van je site georganiseerd zijn in een boomstructuur. Als je site teveel pagina's heeft om naar elke pagina een link te maken op de homepage bijvoorbeeld. De eerste link is altijd naar de homepage.

Het kruimelpad moet alleen links bevatten naar hogere niveau's of eerdere stappen. De pagina zelf is niet onderdeel van het kruimelpad. Gebruik geen breadcrumb navigation op de homepage, want die heeft geen hogere niveaus.

## HTML

Gebruik een `nav` element, want het is handig dat het kruimelpad een _navigation landmark_ is. Gebruik `aria-label`, want het kruimelpad is zelden de enige _navigation landmark_ op de pagina.

Bijvoorbeeld:

```html
<nav aria-label="Kruimelpad">...kruimelpad...</nav>
```

## Related info

- [Google Search Central - Advanced SEO - Breadcrumb](https://developers.google.com/search/docs/data-types/breadcrumb)
- [Homepage Links Remain a Necessity — Nielsen Norman Group](https://www.nngroup.com/articles/homepage-links/)
- [Breadcrumbs — Adobe Spectrum Design System](https://spectrum.adobe.com/page/breadcrumbs/)

## Relevante WCAG regels

- [WCAG eis 2.4.8](https://www.w3.org/TR/WCAG21/#location): een kruimelpad is een manier om duidelijk te maken waar de gebruiker zich bevind in de context van een site met meerdere pagina's.
