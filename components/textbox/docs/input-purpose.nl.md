<!-- @license CC0-1.0 -->

# Metadata van veelgebruikte formuliervelden

| Data type                                        | `autocomplete`                                   | `spellcheck` | `translate` | value component | input direction |
| ------------------------------------------------ | ------------------------------------------------ | ------------ | ----------- | --------------- | --------------- |
| Naam                                             | `name`                                           | `false`      | `no`        | `bdi`           | `auto`          |
| Voornaam (1 of meerdere)                         | `given-name`                                     | `false`      | `no`        | `bdi`           | leeg of `auto`  |
| Voorvoegsel                                      |                                                  | `false`      | `no`        | `bdi`           | `auto`          |
| Achternaam                                       | `family-name`                                    | `false`      | `no`        | `bdi`           | `auto`          |
| Adresregel 1                                     | `address-line1`                                  |              | `no`        | -               | -               |
| Adresregel 2                                     | `address-line2`                                  |              | `no`        | -               | -               |
| Adresregel 3                                     | `address-line3`                                  |              | `no`        | -               | -               |
| Postcode                                         | `postal-code`                                    | `false`      | `no`        | -               | -               |
| Straatnaam                                       |                                                  |              | `no`        | -               | -               |
| Huisnummer                                       |                                                  |              | `no`        | -               | -               |
| Huisletter                                       |                                                  |              | `no`        | -               | -               |
| Huisnummer toevoeging                            |                                                  | `false`      | `no`        | -               | -               |
| Woonplaats                                       |                                                  |              |             | -               | -               |
| Burgerservicenummer                              |                                                  | `false`      | `no`        | -               | -               |
| E-mailadres                                      | `email`                                          | `false`      | `no`        | `URLData`       | `ltr`           |
| Website                                          | `url`                                            | `false`      | `no`        | `URLData`       | `ltr`           |
| Bestandsnaam                                     |                                                  |              | `no`        | `URLData`       | -               |
| Wachtwoord                                       | `password` / `new-password` / `current-password` | `false`      | `no`        | `URLData`       | -               |
| Geboortedatum                                    | `bday`                                           |              |             |                 | -               |
| Telefoonnummer (Europa en internationaal)        | `tel`                                            | `false`      |             |                 | `ltr`           |
| Mobiel telefoonnummer (Europa en internationaal) | `mobile tel`                                     | `false`      |             |                 | `ltr`           |
| Telefoonnummer thuis (Europa en internationaal)  | `home tel`                                       | `false`      |             |                 | `ltr`           |
| Telefoonnummer werk (Europa en internationaal)   | `work tel`                                       | `false`      |             |                 | `ltr`           |
| Faxnummer (Europa en internationaal)             | `fax tel`                                        | `false`      |             |                 | `ltr`           |
| Telefoonnummer binnen Nederland                  | `tel-national`                                   | `false`      |             |                 | `ltr`           |
| Mobiel telefoonnummer binnen Nederland           | `mobile tel-national`                            | `false`      |             |                 | `ltr`           |
| Telefoonnummer thuis binnen Nederland            | `home tel-national`                              | `false`      |             |                 | `ltr`           |
| Telefoonnummer werk binnen Nederland             | `work tel-national`                              | `false`      |             |                 | `ltr`           |
| Faxnummer binnen Nederland                       | `fax tel-national`                               | `false`      |             |                 | `ltr`           |
| Kenteken                                         |                                                  | `false`      |             |                 | -               |

_Let op:_

- Straatnaam moet niet `autocomplete="street-address"` gebruiken, `street-address` is voor een textarea.
