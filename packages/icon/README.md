<!-- @license CC0-1.0 -->

# Iconen in code

## Iconen gebruiken als Custom Element

Eén van de makkelijkste manieren om iconen te gebruiken is door ze te includen in de web component library, zodat je ze als custom element kan gebruiken. Elk icoon is beschikbaar als custom element. De naam van van het icoon (`utrecht-icon-...`) is ook de naam van het custom-element. Voorbeeld:

```html
<div>
  <utrecht-icon-loupe></utrecht-icon-loupe>
</div>
```

Verander de kleur van het icoon via de CSS-eigenschap `color` op een parent element of via de custom eigenschap `--utrecht-icon-color`.

### `color` van de omgevings content

Op onderstaande manier kan je het makkelijkst de kleur aanpassen. De kleur van de bestaande tekst zal ook op het icoon toegepast worden.

```html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
```

### `--utrecht-icon-color` als custom icoon kleur

Deze manier is handig als je een klein verschil wilt aanbrengen tussen de tekst kleur en de kleur van het icoon. Het gebruikt een CSS custom property `--utrecht-icon-color` als de kleur van het icoon.

```html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-color: rgb(255 255 255 / 0.75);
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
```

### Icoon grootte aanpassen

De grootte van het icoon kan aangepast worden met de `--utrecht-icon-size` CSS eigenschap:

```html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-size: 42px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
```

## Iconen gebruiken als SVG

Wil je een icoon zonder web components gebruiken, bijvoorbeeld in een React component of bij server-side rendering? Importeer dan het icoon uit `@utrecht/icon/dist/icons.mjs`. Elk icoon is een named export met de naam van het custom element in camelCase: `utrecht-icon-arrow` wordt `utrechtIconArrow`. Je bundler neemt alleen de iconen mee die je importeert.

Een icoon heeft:

- `viewBox`: de `viewBox` van het `<svg>`-element
- `body`: de inhoud van het `<svg>`-element. Ids hebben de naam van het icoon als prefix, zodat twee iconen op dezelfde pagina geen id delen.
- `unicodeBidi`: `true` als het icoon in tekst van rechts naar links gespiegeld moet worden

```jsx
import { utrechtIconArrow } from "@utrecht/icon/dist/icons.mjs";

export const ArrowIcon = () => (
  <svg
    viewBox={utrechtIconArrow.viewBox}
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    dangerouslySetInnerHTML={{ __html: utrechtIconArrow.body }}
  />
);
```

## Overzicht van icons

Wanneer het nodig is een overzicht te hebben van de beschikbare icons, gebruik dan als basis de meegeleverde JSON informatie in `dist/index.json`. Het bevat een array met onder andere de ID van elke icoon. Op dit moment is de naam van de custom element altijd gelijk aan de ID.
