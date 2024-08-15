<!-- @license CC0-1.0 -->

# Hoe het niet moet: Onnodige link naar huidige pagina

Niet goed: een link naar de homepage plaatsen op de homepage zelf. Op andere pagina's is het natuurlijk wel handig om het logo een link te maken.

```html
<header>
  <a href="/">
    <img class="utrecht-logo" src="/logo.svg" alt="Keuringsdienst van waarde" />
  </a>
</header>
<h1>Home</h1>
```

Wel goed: logo zonder link op de homepage.

```html
<header>
  <img class="utrecht-logo" src="/logo.svg" alt="Keuringsdienst van waarde" />
</header>
<h1>Home</h1>
```
