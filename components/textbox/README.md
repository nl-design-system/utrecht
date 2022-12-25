<!-- @license CC0-1.0 -->

# Text box

## Metadata van veelgebruikte formuliervelden

| Data type                | `autocomplete`                                   | `spellcheck` | `translate` | value component |
| ------------------------ | ------------------------------------------------ | ------------ | ----------- | --------------- |
| Naam                     | `name`                                           | `false`      | `no`        | `bdi`           |
| Voornaam (1 of meerdere) | `given-name`                                     | `false`      | `no`        | `bdi`           |
| Voorvoegsel              |                                                  | `false`      | `no`        | `bdi`           |
| Achternaam               | `family-name`                                    | `false`      | `no`        | `bdi`           |
| Adresregel 1             | `address-line1`                                  |              | `no`        | -               |
| Adresregel 2             | `address-line2`                                  |              | `no`        | -               |
| Adresregel 3             | `address-line3`                                  |              | `no`        | -               |
| Postcode                 | `postal-code`                                    | `false`      | `no`        | -               |
| Straatnaam               |                                                  |              | `no`        | -               |
| Huisnummer               |                                                  |              | `no`        | -               |
| Huisletter               |                                                  |              | `no`        | -               |
| Huisnummer toevoeging    |                                                  | `false`      | `no`        | -               |
| Woonplaats               |                                                  |              |             | -               |
| Burgerservicenummer      |                                                  | `false`      | `no`        | -               |
| E-mailadres              | `email`                                          | `false`      | `no`        | `URLValue`      |
| Website                  | `url`                                            | `false`      | `no`        | `URLValue`      |
| Bestandsnaam             |                                                  |              | `no`        | `URLValue`      |
| Wachtwoord               | `password` / `new-password` / `current-password` | `false`      | `no`        | `URLValue`      |
| Geboortedatum            | `bday`                                           |              |             |                 |
| Kenteken                 |                                                  | `false`      |             |                 |

_Let op:_

- Straatnaam moet niet `autocomplete="street-address"` gebruiken, `street-address` is voor een textarea.

## Terminologie

- **textbox**: [`role="textbox"` in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#textbox), [Text box lemma op Wikipedia](https://en.wikipedia.org/wiki/Text_box). HTML noemt het "text control" en text edit control". [MDN noemt het](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) "text field" en "text input".
- **invalid**: ...
- **disabled**: ...
- **read-only**: ...

## Class names

- `.utrecht-textbox`
- `.utrecht-textbox--invalid`
- `.utrecht-textbox--disabled`
- `.utrecht-textbox--read-only`

## Design Tokens

- Textbox:
  - `--utrecht-textbox-border-bottom-width`
  - `--utrecht-textbox-border-color`
  - `--utrecht-textbox-border-radius`
  - `--utrecht-textbox-border-width`
  - `--utrecht-textbox-color`
  - `--utrecht-textbox-font-family`
  - `--utrecht-textbox-font-size`
  - `--utrecht-textbox-max-inline-size`
  - `--utrecht-textbox-padding-block-end`
  - `--utrecht-textbox-padding-block-start`
  - `--utrecht-textbox-padding-inline-end`
  - `--utrecht-textbox-padding-inline-start`
  - Modifier: `disabled`
    - `--utrecht-textbox-disabled-border-color`
    - `--utrecht-textbox-disabled-color`
  - Modifier: `invalid`
    - `--utrecht-textbox-invalid-border-color`
    - `--utrecht-textbox-invalid-border-width`
  - Modifier: `read-only`:
    - `--utrecht-textbox-read-only-border-color`
    - `--utrecht-textbox-read-only-color`

## Privacy

Gebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.
