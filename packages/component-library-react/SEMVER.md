# Semantic versioning

## Changeset

Algemene richtlijnen:

- Changesets zijn in het Engels.
- Gebruik volledige zinnen, met juist hoofdlettergebruiken en punctuatie.
- Plaats ongerelateerde changes in losse changeset bestanden.
- Noem in de lijst met packages ook de dependencies waar de wijziging ook impact heeft.

### Component toevoegen

Een component toevoegen is een nieuwe feature, daarom een **minor** change.

### Component verwijderen

Een component verwijderen maakt projecten kapot die een dependency hebben op de component, daarom een **major** change.

### Component hernoemen

Een component hernoemen maakt projecten kapot die een dependency hebben op de huidige naam van de component, daarom een **major** change.

#### Backwards-compatibility bij hernoemen

Als je volledig backwards compatible bent, en alle APIs blijven werken voor bestaande gebruikers, dan mag het een **minor** change zijn.

Alle API's betekent ondere andere:

- De exports in de component file
  - `export type`
  - `export interface`
  - `export const`
- De exports in de `index.ts` "barrel files": `export { MyComponentName } from './MyComponentName';`
- De filenames van componenten: `@example/component-library/MyComponentName` en `@example/component-library/NewComponentName` werken allebei

## Property of method toevoegen

Een component toevoegen is een nieuwe feature, daarom een **minor** change.

## File uit de `exports` verwijderen

Een bestand uit de build verwijderen maakt projecten kapot die dat bestand importeren, daarom een **major** change.
