<!-- @license CC0-1.0 -->

# Release strategie

We gebruiken voor het Design System een status per component. Hieronder worden de statussen uitgelegd, met wat je kan verwachten als een document een bepaalde status heeft.

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

### Componenten en tokens met Productie-status.

Geteste, stabiele componenten en tokens. Als er iets veranderd met deze componenten worden zijn dat vooral patches en minor releases. Verandering worden gecommuniceerd via het versienummer en de changelog.

### Componenten en tokens met Beta-status.

Deze componenten en tokens worden gebruikt in specifieke situaties. Componenten en tokens kunnen nog veranderen op basis van feedback. Breaking changes kunnen voorkomen.

### Componenten en tokens met Alpha-status.

Componenten en tokens worden gebruikt in prototypes en projecten die nog in ontwikkeling zijn. Componenten en tokens kunnen nog veranderen op basis van feedback. Breaking Changes zullen onaangekondigd gebeuren.

### Componenten en tokens met Work in progress-status.

Gebruik deze componenten en tokens niet op een productie-omgeving. Alleen voor intern gebruik.

## Proces

We volgen het onderstaande proces als we kijken wanneer een component naar de volgende fase kan.

| Work in Progress         | Work in Progress                    | Work in Progress           | Work in Progress       | Alpha                              | Alpha                                                      | Alpha                                                                          | Beta                                                              | Productie                                                              |
| ------------------------ | ----------------------------------- | -------------------------- | ---------------------- | ---------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Component maken in Figma | Component maken in GitHub/Storybook | Definition of Done nalopen | Stempel Team UX zetten | Huisstijl denkt mee en keurt goed. | Kwaliteit van code wordt nagekeken door expert (Frameless) | Informeren Architectuur, IPM'ers, Internetadviseurs, Redacteuren en webmasters | Componenten worden gebruikt in de testomgeving van een applicatie | Componenten worden gebruikt in de productieomgeving van een applicatie |
