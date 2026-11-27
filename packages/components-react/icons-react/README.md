<!-- @license CC0-1.0 -->

# Icons voor React

Elk icoon uit `@utrecht/icon` als React-component, zonder web components. Het SVG staat als JSX in het component.

```tsx
import { IconArrow } from "@utrecht/icons-react";
```

Laadt je app zonder bundler, of wil je zeker weten dat je alleen dit ene icoon laadt? Importeer het icoon dan uit zijn eigen bestand:

```tsx
import { IconArrow } from "@utrecht/icons-react/arrow";
```

De naam van het component is `Icon` met de naam van het SVG-bestand in PascalCase: `afval-kalender.svg` wordt `IconAfvalKalender`. Het pad na `@utrecht/icons-react/` is de naam van het SVG-bestand.

```tsx
import { IconAfvalKalender } from "@utrecht/icons-react";
// Of alleen dit icoon: import { IconAfvalKalender } from "@utrecht/icons-react/afval-kalender";

<IconAfvalKalender />;
```

## Grootte en kleur

Een icoon is standaard `1em` groot en heeft de kleur van de tekst. Gebruik je het in het `Icon`-component van `@utrecht/component-library-react`, dan kun je de grootte en kleur aanpassen met `--utrecht-icon-size` en `--utrecht-icon-color`:

```tsx
<Icon>
  <IconArrow />
</Icon>
```

## Toegankelijkheid

Een icoon is standaard verborgen voor hulpsoftware (`aria-hidden="true"`) en krijgt geen focus. Zet de betekenis in de tekst ernaast. Is het icoon de enige inhoud, bijvoorbeeld in een knop zonder tekst? Geef het icoon dan een naam:

```tsx
<IconArrow aria-hidden={undefined} role="img" aria-label="Volgende" />
```

## Hoe de iconen gemaakt worden

De build van `@utrecht/icon` maakt de componenten uit dezelfde SVG-bestanden als de web components, in `src/generated/`. Pas die bestanden niet aan: ze worden bij elke build opnieuw gemaakt. Draai eerst `pnpm --filter @utrecht/icon run build` als je dit pakket lokaal wilt bouwen of testen.
