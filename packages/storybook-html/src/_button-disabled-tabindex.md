<!-- @license CC0-1.0 -->

<!-- markdownlint-disable first-line-h1 -->

Button with `disabled` state that remains focusable.

Since the `disabled` attribute on HTML makes it impossible to focus the element, the `aria-disabled="true"` attribute is used instead. Any script handling the activation of such button must first check wether the button is disabled before executing the script, because without the `disabled` attribute the browser no longer prevents activation. For `type="reset"` and `type="submit"` additional scripting is required too, to prevent default behavior.

Considerations for the focusable disabled button:

- must display a focus ring when focused
- must not appear interactive
  - must not change appearance for the active state
  - must not change appearance for the focus state
  - must not change appearance for the hover state
