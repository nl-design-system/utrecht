/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})
export class Textarea {
  @Prop() autocomplete: string = '';
  @Prop() spellcheck: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() placeholder: string = '';
  @Prop({ attribute: 'readonly', reflect: true }) readOnly: boolean = false;
  @Prop({ reflect: true }) required: boolean = false;
  @Prop() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { autocomplete, disabled, invalid, placeholder, readOnly, required, spellcheck, value } = this;

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
        disabled={disabled}
        placeholder={placeholder || null}
        readonly={readOnly}
        required={required}
        spellcheck={spellcheck || null}
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
