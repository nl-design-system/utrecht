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

```
<type>(<scope>): <onderwerp>
<LEGE REGEL>
<body>
<LEGE REGEL>
<footer>
```

**Type** en **onderwerp** zijn verplicht. **Scope** is optioneel.

- Type: beschrijft het soort verandering waar het om gaat.
- Scope: beschrijft op welke onderdelen van het design systeem de verandering invloed heeft.
- Onderwerp: Een korte beschrijving van de verandering.
- Body: Uitgebreidere toelichting over de verandering.
- Footer: Referenties naar issues die hiermee opgelost zijn.

**VRAAG: Wat doen we me Body en footer?**

### Voorbeelden van commit syntax

Voorbeeld 1:

```
fix(forms): I indroduced a minor error in a previous PR: pendingValue…

… is a value not a boolean flag. (#44450)

The bug should have no effect since it's a typings-only, internal-only bug, but it's good to fix nonetheless.

PR Close #44450
```

Voorbeeld 2:

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Verschillende types commits:

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

## Bron

https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type

```

```
