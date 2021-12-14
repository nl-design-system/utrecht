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
