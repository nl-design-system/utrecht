<!-- @license CC0-1.0 -->

# Hoe het niet moet: Link naar huidige pagina niet opmaken

Gebruik niet _alleen_ een class name om duidelijk te maken dat de link verwijst naar de huidige pagina.

```html
<a href="/">Home</a> › <a href="/nieuws/">Nieuws</a> ›
<a href="/nieuws/burgemeester" class="current">Nieuwe burgemeester</a>
```

Gebruik altijd `aria-current` om de informatie beschikbaar te maken aan de browser en tools:

```html
<a href="/">Home</a> › <a href="/nieuws/">Nieuws</a> ›
<a href="/nieuws/burgemeester" class="current" aria-current="page">Nieuwe burgemeester</a>
```
