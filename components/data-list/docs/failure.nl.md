<!-- @license CC0-1.0 -->

# Hoe het niet moet

## Geen `dl` of `table` gebruiken

Gebruik niet alleen `div`, `span` en `p` HTML-element omdat dit niet voldoende duidelijk is (WCAG eis 1.3.1).

## Button of link tekst heeft geen context

Niet:

```html
<dl>
  <div>
    <dt>Naam</dt>
    <dd>Jos de Vos</dd>
    <dd><a href="./step-1">Wijzig</a></dd>
  </div>
  <div>
    <dt>Woonplaats</dt>
    <dd>Amsterdam</dd>
    <dd><a href="./step-2">Wijzig</a></dd>
  </div>
</dl>
```

Wel:

```html
<dl>
  <div>
    <dt>Naam</dt>
    <dd>Mees de Vos</dd>
    <dd><a href="./edit" title="Wijzig naam">Wijzig</a></dd>
  </div>
  <div>
    <dt>Woonplaats</dt>
    <dd>Amsterdam</dd>
    <dd><a href="./edit" title="Wijzig woonplaats">Wijzig</a></dd>
  </div>
</dl>
```
