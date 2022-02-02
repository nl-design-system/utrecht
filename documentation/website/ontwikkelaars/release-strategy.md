---
title: Release strategie
hide_title: true
hide_table_of_contents: false
sidebar_label: Release strategie
sidebar_position: 1
pagination_label: Release strategie
description: Wat betekenen de verschillende statussen van de componenten?
keywords:
  - Release strategie
  - versionering
  - Productie
  - Beta
---

<!-- @license CC0-1.0 -->

# Release strategie

We gebruiken voor het Design System een status per component of groep tokens. Hieronder worden de statussen uitgelegd, met wat je kan verwachten als een document een bepaalde status heeft.

## Naamgeving en versionering

| Description                                             | npm version     | release type  |
| ------------------------------------------------------- | --------------- | ------------- |
| Productie: Bugfix of verbetering met 'breaking changes' | `>=2.0.0`       | major version |
| Productie: Verbetering zonder 'breaking changes'        | `^1.1.0`        | minor version |
| Productie: Bugfix zonder 'breaking changes'             | `~1.0.1`        | patch version |
| Productie: Eerste stabiele release                      | `1.0.0`         | release       |
| Beta                                                    | `1.0.0-beta.0`  | pre-release   |
| Alpha                                                   | `1.0.0-alpha.0` | pre-release   |
| Work in Progress                                        | `1.0.0-alpha.0` | pre-release   |

### Componenten en tokens met Productie-status

Geteste, stabiele componenten en tokens. Als er iets veranderd met deze componenten zijn dat vooral patches en minor releases. Verandering worden gecommuniceerd via het versienummer en de changelog.

### Componenten en tokens met Beta-status

Deze componenten en tokens worden gebruikt in specifieke situaties. Componenten en tokens kunnen nog veranderen op basis van feedback. Breaking changes kunnen gebeuren.

### Componenten en tokens met Alpha-status

Componenten en tokens worden gebruikt in prototypes en projecten die nog in ontwikkeling zijn. Componenten en tokens kunnen nog veranderen op basis van feedback en expert reviews. Breaking Changes zullen onaangekondigd gebeuren.

### Componenten en tokens met Work in progress-status

Gebruik deze componenten en tokens niet op een productie-omgeving. Alleen voor intern of experimenteel gebruik.

## Proces

We volgen het onderstaande proces als we kijken wanneer een component naar de volgende fase kan.

### Work in progress

- Component/ontwerp maken in Figma.
- Component maken in GitHub/Storybook.
- Definition of Done nalopen.
- Stempel Team UX zetten.

Als aan alle stappen is voldaan krijgt het component de Alpha status.

### Alpha

- Kwaliteit van ontwerp wordt nagekeken door expert (Zal vaak de Huisstijl zijn).
- Kwaliteit van code wordt nagekeken door expert (Frameless).
- Informeren Architectuur, IPM'ers, Internetadviseurs, Redacteuren en webmasters.

Als aan alle stappen is voldaan krijgt het component de Beta status.

### Beta

- Componenten worden gebruikt in de testomgeving van een applicatie.
- Componenten zijn getoetst op toegankelijkheid (WCAG).

Als aan alle stappen is voldaan krijgt het component de Productie status.

### Productie

- Componenten worden gebruikt in de productieomgeving van een applicatie.

## Commit syntax

Om overzicht te houden in onze commits en uiteindelijk automatische release notes te kunnen maken gebruiken we de volgende commit syntax:

```text
<type>(<scope>): <onderwerp>
<LEGE REGEL>
<body>
<LEGE REGEL>
<footer>
```

**Type**. **body** en **onderwerp** zijn verplicht. **Scope** en **footer** zijn optioneel.

- Type: beschrijft het soort verandering waar het om gaat.
- Scope: beschrijft op welke onderdelen van het design systeem de verandering invloed heeft.
- Onderwerp: Een korte beschrijving van de verandering in maximaal vijf woorden. De uitgebreidere beschrijving komt in body.
- Body: Uitgebreidere toelichting over de verandering.
- Footer: Referenties naar issues die hiermee opgelost zijn.

### Voorbeelden van commit syntax

Voorbeeld 1:

```text
style(kleuren): blue-30 verwijderd

--utrecht-blue-30 is vervangen door --utrecht-blue-35.

PR close #44450
```

Voorbeeld 2:

```text
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Verschillende types commits

- **docs:** Veranderingen in de documentatie.
- **style:** Veranderingen die het uiterlijk van iets veranderen.
- **feat:** Functionaliteit aangepast of toegevoegd.
- **fix:** Een bugfix.
- **perf:** Een verandering die de performance verbetert.
- **refactor:** Een verandering in code die geen bugfix en die ook geen feature toevoegt.
- **test:** Aanpassen van tests.
- **build:** Verandering in het build-system of in externe afhankelijkheden. Voorbeeldscopes: gulp, broccoli, npm.
- **ci:** Veranderingen in onze CI configuratiebestanden en scripts. Voorbeeldscopes: Travis, Circle, BrowserStack, SauceLabs.

## Bron

- <https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type>
- <https://www.conventionalcommits.org/en/v1.0.0/>
