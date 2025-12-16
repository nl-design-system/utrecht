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
De navigatie structuur van de website staat op dit moment nog vast. Er zijn 6 hoofdnavigatie thema's

- Design System
- Designers
- Developers
- Richtlijnen
- Componenten
- Vragen

Componenten is een uitzondering en is niet te vinden onder [pages/](docs/pages) maar onder [docs/components](./docs/components).

Elk hoofdnavigatie thema heeft een eigen map onder [docs/pages/](docs/pages). De `_index.md` bevatten de inhoud van de hoofdnavigatie pagina.
Door een nieuw markdown bestand (`.md` of `.mdx`) toe te voegen aan de map, wordt er automatisch een nieuwe subpagina aangemaakt in de navigatie structuur.

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
   1. Tip: maak een kopie van een bekend component zoals `button.mdx`
2. Voer `pnpm astro` uit om de documentatie website lokaal te draaien
   1. De component documentatie is nu te zien op de astro documentatie website onder /componenten/jouw-component
3. Voeg de component navigatie kaart toe aan src/pages/componenten/index.astro

## Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
