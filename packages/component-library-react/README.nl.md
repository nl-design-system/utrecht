<!-- @license CC0-1.0 -->

# Component library voor React

Je kunt de React componenten van de [`@utrecht/component-library-react` npm package](https://www.npmjs.com/package/@utrecht/component-library-react) gebruiken voor je eigen website. Het zijn "white label" componenten, dat betekent dat ze niet de Utrecht huisstijl hebben — je kunt je eigen ontwerp gebruiken met design tokens.

Je kunt deze package gebruiken in React apps, zowel client side als server side, om de juiste HTML elementen te renderen met CSS class names van het Utrecht Design System.

Documentation staat in de [Storybook voor Utrecht React componenten](http://nl-design-system.github.io/utrecht/storybook-react/).

## Aan de slag

```shell
npm install --save-dev --save-exact @utrecht/component-library-react
```

Wanneer je dit pakketje hebt geïnstalleerd, dan kun je elke component uit de React component gebruiken voor je pagina. Bijvoorbeeld:

```jsx
import { Document, Heading1 } from "@utrecht/component-library-react/dist/css-module";

export const MyPage = () => (
  <div className="voorbeeld-theme">
    <Document>
      <Heading1>Page styled with NL Design System</Heading1>
    </Document>
  </div>
);
```

Als je geen CSS injection wilt, dan kun je dezelfde componenten importeren uit een andere plek (zonder `/dist/css-module`). CSS injection levert soms problemen op bij websites met een stricte `Content-Security-Policy`.

```jsx
import { Document, Heading1 } from "@utrecht/component-library-react";

export const MyPage = () => (
  <div className="voorbeeld-theme">
    <Document>
      <Heading1>Page styled with NL Design System</Heading1>
    </Document>
  </div>
);
```

## Design toevoegen met een thema

Gebruik je eigen design met de volgende stappen:

1. [Maak een eigen thema op basis van design tokens.](https://nldesignsystem.nl/handboek/developer/thema-maken/)
2. Laad de CSS van je thema in. Daarin zitten de CSS variables voor het ontwerp van de componenten.
3. Voeg in HTML de CSS class name toe van je theme, op het niveau boven je componenten.

### Utrecht huisstijl toevoegen

Installeer de npm package met de CSS:

```shell
npm install --save-dev @utrecht/design-tokens
```

In veel React projecten is het mogelijk de CSS te importeren in JavaScript. Voeg de `import` voor de thema CSS toe, en gebruik de `utrecht-theme` class name op een niveau boven de React componenten.

```jsx
import { Document, Heading1 } from "@utrecht/component-library-react";
import "@utrecht/design-tokens/dist/index.css";

export const MyPage = () => (
  <div className="utrecht-theme">
    <Document>
      <Heading1>Page styled with NL Design System</Heading1>
    </Document>
  </div>
);
```

## TypeScript

De TypeScript declarations voor de React componenten worden standaard meegeleverd.

## Support

Stel je support-vragen in het [#nl-design-system-developers Slack-kanaal](https://codefornl.slack.com/archives/C01DAT4TRPF).
