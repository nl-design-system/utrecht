# Astro Documentatie

## Waarom Astro?

Er is gekozen om over te stappen op Astro voor de documentatie website van de Gemeente Utrecht. Dit brengt enkele voordelen met zich mee ten opzichte van de vorige Docusaurus variant.

1. Gebruik van eigen componenten is eenvoudig
2. Aansluiten bij ontwikkelingen binnen de NL Design System Community, hierdoor kunnen we bijvoorbeeld bestaande plugins gebruiken om NL Design System componeten in te zetten voor markdown rendering
3. Meer vrijheid met de navigatie structuur
4. Kleine builds, geen grote (react) javascript bundel nodig op de client
5. Framework agnostisch: we kunnen gebruik maken van React, Vue, Svelte en nog meer component frameworks voor het bouwen van de statische website.
6. Er zijn geen iframes meer nodig om componenten te tonen in de documentatie website. Hierdoor laden we niet nog een hele pagina in per component
   en ziet het er op mobiel beter uit.

## Waar kan ik de documentatie in Astro aanpassen?

De documentatie is te vinden onder [docs/pages/](docs/pages) en en [docs/components](./docs/components).

### Structuur

#### Documentatie paginas

Onder [docs/pages/](docs/pages) vind je de hoofdnavigatie pagina's van de documentatie website.
De navigatie structuur van de website staat op dit moment nog vast. Er zijn 7 hoofdnavigatie thema's

- Design System
- Designers
- Developers
- Onderzoekers
- Richtlijnen
- Componenten
- Vragen

Componenten is een uitzondering en is niet te vinden onder [pages/](docs/pages) maar onder [docs/components](./docs/components).

Elk hoofdnavigatie thema heeft een eigen map onder [docs/pages/](docs/pages). De `_index.md` bevatten de inhoud van de hoofdnavigatie pagina.
Door een nieuw markdown bestand (`.md` of `.mdx`) toe te voegen aan de map, wordt er automatisch een nieuwe subpagina aangemaakt in de navigatie structuur.

Als je een nieuw hoofdnavigatie thema wil toevoegen, kan je een bestaand hoofdnavigatie Layout.astro

Voeg de volgende front-matter toe bovenaan het markdown bestand

```markdown
---
title: Pagina titel
description: Pagina beschrijving, dit komt terug in de navigatietegel.
order: 1 # Bepaalt de volgorde in de tegelnavigatie, lager is hoger in de lijst
---
```

## Hoe voeg ik een icoon toe aan het iconen overzicht?

1. Voeg de SVG toe aan [packages/icons/svg](../icon/src/svg/)
2. Voeg de icon naam toe aan [./src/pages/componenten/iconen/icon-categories.ts](src/pages/componenten/iconen/icon-categories.ts)
3. Om de wijziging te zien:
   1. Bouw [packages/icon](../icon/)
   2. Bouw [packages/web-component-library-stencil](../web-component-library-stencil/)
   3. `pnpm astro dev`

## Hoe voeg ik documentatie voor een nieuw component toe?

1. Voeg de gewenste documentatie toe aan [./docs/components](./docs/components)
   1. Tip: maak een kopie van `accordion.mdx`, die heeft de volledige structuur
   2. De `title` in de frontmatter is de naam van het component zoals in de titels van de stories, bijvoorbeeld `Form field` voor `CSS Component/Form field`
2. Voer `pnpm astro` uit om de documentatie website lokaal te draaien
   1. De component documentatie is nu te zien op de astro documentatie website onder /componenten/jouw-component
3. Voeg de component navigatie kaart toe aan src/pages/componenten/index.astro

## Waar komen de codevoorbeelden, links en design tokens vandaan?

Uit de stories in de Storybooks. Het script [scripts/extract-storybook.ts](scripts/extract-storybook.ts) leest ze en schrijft per componentpagina de codevoorbeelden, de links naar npm, Storybook, GitHub en Figma, de design tokens en de framework-badges naar `src/generated/storybook.json`. De website leest alleen dat bestand.

- De Astro-integratie in [integrations/storybook-docs.ts](integrations/storybook-docs.ts) draait het script bij `astro dev`, `astro build` en `astro check`
- Pas je een story of een componentpagina aan terwijl `astro dev` draait? Dan draait het script vanzelf opnieuw
- Het script meldt in de terminal als het iets niet vindt, bijvoorbeeld geen stories voor een pagina of geen `tokensDefinition`. Bij `astro build` stopt de build dan, zodat er geen pagina zonder code of links online komt
- Vue en Angular draaien niet in Node: hun code komt uit de broncode van de story. Lukt dat niet, dan meldt het script dat, maar de build gaat door
- Los draaien kan met `pnpm run extract-storybook`, of met `pnpm run extract-storybook --strict` zoals bij de build

## Hoe draai ik astro lokaal?

1. Zorg dat je de dependencies hebt geïnstalleerd met `pnpm install`
2. Bouw de benodigde dependencies met `pnpm build`
3. Voer vanaf de root van het project `pnpm astro` uit
