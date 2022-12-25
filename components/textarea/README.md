<!-- @license CC0-1.0 -->

# Textarea

## Terminologie

- **textarea**: van het `<textarea>` element in HTML.

## Class names

- `.utrecht-textarea`
- `.utrecht-textarea--invalid`
- `.utrecht-textarea--disabled`
- `.utrecht-textarea--read-only`

## Design tokens

- Textarea:
  - `--utrecht-textarea-border-bottom-width`
  - `--utrecht-textarea-border-color`
  - `--utrecht-textarea-border-radius`
  - `--utrecht-textarea-border-width`
  - `--utrecht-textarea-color`
  - `--utrecht-textarea-font-family`
  - `--utrecht-textarea-font-size`
  - `--utrecht-textarea-max-inline-size`
  - `--utrecht-textarea-padding-block-end`
  - `--utrecht-textarea-padding-block-start`
  - `--utrecht-textarea-padding-inline-end`
  - `--utrecht-textarea-padding-inline-start`
  - Modifier: `disabled`
    - `--utrecht-textarea-disabled-border-color`
    - `--utrecht-textarea-disabled-color`
  - Modifier: `invalid`
    - `--utrecht-textarea-invalid-border-color`
    - `--utrecht-textarea-invalid-border-width`
  - Modifier: `read-only`:
    - `--utrecht-textarea-read-only-border-color`
    - `--utrecht-textarea-read-only-color`

## Privacy

Gebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals berichten van klokkenluiders, over _responsible disclosure_ van beveiligsproblemen, berichten met medische gegevens, etcetera. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.
