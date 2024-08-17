<!-- @license CC0-1.0 -->

# Hoe het niet moet: Verkeerde taal

Als je linkt naar een pagina waarvan de beschrijving in een andere taal is dan de context waarin de link staat, dan moet je de taal instellen op de link zelf (WCAG 3.1.2).

Niet:

```html
<a href="/nl/">Nederlands</a>
<a href="/en/">English</a>
<a href="/fr/">François</a>
```

Wel:

```html
<a href="/nl/">Nederlands</a>
<a href="/en/" lang="en">English</a>
<a href="/fr/" lang="fr">François</a>
```

Niet, zonder `lang` attribuut:

```html
<p>
  In de presentatie
  <a href="https://www.slideshare.net/stubbornella/object-oriented-css"
    >Object Oriented CSS for high performance web applications and sites</a
  >
  vertelt Nicole Sullivan over een aanpak om CSS te schrijven.
</p>
```

Wel, met `lang` attribute op het `<a>` element:

```html
<p>
  In de presentatie
  <a href="https://www.slideshare.net/stubbornella/object-oriented-css" lang="en"
    >Object Oriented CSS for high performance web applications and sites</a
  >
  vertelt Nicole Sullivan over een aanpak om CSS te schrijven.
</p>
```
