# Semantic versioning

## Changeset

Algemene richtlijnen:

- Changesets zijn in het Engels.
- Gebruik volledige zinnen, met juist hoofdlettergebruiken en punctuatie.
- Plaats ongerelateerde changes in losse changeset bestanden.
- Noem in de lijst met packages ook de dependencies waar de wijziging ook impact heeft.

### Nieuwe component

Maak voor een nieuwe component een `package.json` met 0.0.0 als versienummer:

```json
{
  "name": "@example/sparkle-button-css",
  "version": "0.0.0"
}
```

Voeg ook een changeset toe in `.changeset/` om de nieuwe component aan te kondigen, met een `major` release. Bij het uitbrengen van de release wordt dan een `CHANGELOG.md` met de 1.0.0 versie aangemaakt.

```md
---
"@example/new-component-css": major
---

Add the new "Sparkle button" component.
```

### Class names

Class names selectors worden ook vaak gebruikt in projecten van anderen, dus als daar iets aan verandert dan heeft dat gevolgen. Anderen gebruiken de class name bijvoorbeeld om een CSS animatie toe te voegen, of om een element te vinden in een end-to-end test.

- Een class name of mixin toevoegen is een nieuwe feature, daarom een **minor** change.
- Een class name of mixin verwijderen maakt projecten kapot die deze class name in hun HTML gebruiken, daarom een **major** change.
- Een class name of mixin hernoemen maakt projecten kapot die deze class name in hun HTML gebruiken, daarom een **major** change.

### Mixins

Als je mixins aanbied als API voor anderen, dan heeft wijzigingen doen aan de mixin effect op je gebruikers.

- Een mixin toevoegen is een nieuwe feature, daarom een **minor** change.
- Een mixin hernoemen is betekent dat anderen hun code moeten aanpassen, daarom een **major** change.
- Een mixin verwijderen betekent ook dat anderen hun code moeten aanpassen, daarom een **major** change.
- Een argument aan een mixin toevoegen is een **minor** change wanneer het een nieuw laatste argument, anders is het waarschijnlijk een **major** change.

### CSS variables

Als je CSS variables aanbied, dan zijn anderen daarvan afhankelijk.

Bijvoorbeeld, je hebt code zonder een CSS variable:

```css
.example-sparkle-button {
  color: rebeccapurple;
}
```

Dan is het een **major** change wanneer je de standaardkleur vervangt door een CSS variable.

```css
.example-sparkle-button {
  color: var(--example-sparkle-button-background-color);
}
```

Om dezelfde functionaliteit te houden, moeten anderen zelf de kleur instellen:

```css
:root {
  --example-sparkle-button-background-color: rebeccapurple;
}
```

Je kunt een CSS variable toevoegen en backwards compatible zijn met een fallback waarde. Dan is het een **minor** change:

```css
.example-sparkle-button {
  color: var(--example-sparkle-button-background-color, rebeccapurple);
}
```

Als je de fallback waarde van een CSS variable aanpast, dan is het een **major** change omdat mensen die de CSS variable niet ingesteld hebben nog de oude waarde nodig hebben:

```css
.example-sparkle-button {
  color: var(--example-sparkle-button-background-color, cornflowerblue);
}
```

Samengevat:

- Als je een CSS waarde vervangt door een CSS variable met een fallback waarde, dan is dat een **minor** change.
- Als je een CSS variable fallback waarde aanpast, dan is dat een **major** change.
- Als je een CSS variable hernoemt, dan is dat een **major** change.
- Als je een CSS variable verwijdert, dan is dat een **major** change.

### Backwards-compatibility bij hernoemen

Als je volledig backwards compatible bent, en alle APIs blijven werken voor bestaande gebruikers, dan mag het een **minor** change zijn.

Bijvoorbeeld, als je `.sparkly-button` wilt hernoemen naar `.example-sparkle-button`, kun je beide selectors implementeren:

```css
.example-sparkle-button,
.example-sparkly-button {
  /* ... */
}
```

Als je een CSS variable wilt hernoemen, dan kun je de oude naam als fallback waarde gebruiken:

```css
.example-sparkle-button,
.example-sparkly-button {
  background-color: var(--example-sparkle-button-background-color, var(--example-sparkly-button-background-color));
}
```

### Impact op dependencies

#### CSS component library

Als je een wijziging doet in de package van één CSS component, dan geldt dezelfde wijziging ook voor de package van de CSS component library. Bijvoorbeeld, het wijzigen van een CSS selector of van een CSS variable.

```md
---
"@example/new-component-css": minor
"@example/component-library-css": minor
---

- Add the `example-sparkle--disabled` class name to the disabled sparkly button.
- Add the new `example.sparke.disabled.background-color` design token.
```

De CSS component library heeft geen mixins, daarom is het toevoegen, verwijderen of hernoemen van een mixin alleen change voor de CSS component package, niet voor de CSS component library package.

#### Effect van class names in dependencies

Als je een class name toevoegt, dan gebruik je die class name misschien ook in framework componenten. Bijvoorbeeld, je voegt de `sparkle-button--disabled` class name toe, zodat je die in Angular, React en Vue.js componenten kan implementeren. Dan is de toevoeging ook een `minor` change voor die component libraries:

```md
---
"@example/new-component-css": minor
"@example/component-library-angular": minor
"@example/component-library-react": minor
"@example/component-library-vue": minor
---

Add the `example-sparkle--disabled` class name to the disabled sparkly button.
```

Class names wijzigen die zijn gebruikt in de Shadow DOM van Web Components hebben geen effect op andere projecten, daarom hoef je de `stencil-web-component-library` meestal niet in te stellen.

CSS variable wijzigingen hebben wel effect op Web Components, daarvoor moet je wel alle `web-component-library` instellen op dezelfde `minor` or `major` change.
