/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

/**
 * I would prefer to set `rows` and `cols` only when the properties are actually set,
 * and explicitly configure them when they are set.
 *
 * Currently Stencil offers no way to detect of the property value is the default value.
 * `this.hasOwnProperty('cols')` does not work, for example.
 *
 * As a workaround, there is a check if `cols` and `rows` are equal to the
 * `<textarea>` defaults of `2` and `20`.
 */
const HTML_DEFAULT_COLS = 20;
const HTML_DEFAULT_ROWS = 2;

@Component({
  tag: 'utrecht-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})
export class Textarea {
  @Prop() autocomplete: string = '';
  @Prop() cols: number = HTML_DEFAULT_COLS;
  @Prop() spellcheck: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() placeholder: string = '';
  @Prop({ attribute: 'readonly', reflect: true }) readOnly: boolean = false;
  @Prop({ reflect: true }) required: boolean = false;
  @Prop() rows: number = HTML_DEFAULT_ROWS;
  @Prop() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { autocomplete, cols, disabled, invalid, placeholder, readOnly, required, rows, spellcheck, value } = this;

    return (
      <textarea
        autoComplete={autocomplete || null}
        class={clsx(
          'utrecht-textarea',
          'utrecht-textarea--html-textarea',
          disabled && 'utrecht-textarea--disabled',
          invalid && 'utrecht-textarea--invalid',
          readOnly && 'utrecht-textarea--readonly',
        )}
        cols={cols !== HTML_DEFAULT_COLS ? cols : null}
        disabled={disabled}
        dir="auto"
        placeholder={placeholder || null}
        readonly={readOnly}
        required={required}
        spellcheck={spellcheck || null}
        rows={rows !== HTML_DEFAULT_ROWS ? rows : null}
        value={value}
        onBlur={(evt) => this.utrechtBlur.emit(evt)}
        onChange={(evt) => this.utrechtChange.emit(evt)}
        onFocus={(evt) => this.utrechtFocus.emit(evt)}
        onInput={(evt) => {
          this.value = (evt.target as HTMLTextAreaElement).value;
          this.utrechtInput.emit(evt);
        }}
      >
        <slot />
      </textarea>
    );
  }
}
