<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Text box

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
  - `--utrecht-textbox-max-width`
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
