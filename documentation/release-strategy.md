<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Release strategy

## Semantic versioning and pre-releases

| Description                                             | npm version     | release type  |
| ------------------------------------------------------- | --------------- | ------------- |
| Production: Bugfix or improvement with breaking changes | `>=2.0.0`       | major version |
| Production: Improvement with no breaking changes        | `^1.1.0`        | minor version |
| Production: Bugfix with no breaking changes             | `~1.0.1`        | patch version |
| Production: First stable release                        | `1.0.0`         | release       |
| Beta                                                    | `1.0.0-beta.0`  | pre-release   |
| Alpha                                                   | `1.0.0-alpha.0` | pre-release   |
| Work in Progress                                        | `1.0.0-alpha.0` | pre-release   |

### Production

Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases. Changes are communicated via the version number and via the changelog.

### Beta

Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.

### Alpha

Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.

### Work in Progress

Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.
