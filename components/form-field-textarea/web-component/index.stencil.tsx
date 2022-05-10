/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-field-textarea',
  styleUrl: 'index.scss',
  shadow: true,
})
export class FormFieldTextarea {
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop({ attribute: 'readonly', reflect: true }) readOnly: boolean = false;
  @Prop() placeholder: string = '';
  @Prop({ reflect: true }) required: boolean = false;
  @Prop() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { disabled, invalid, placeholder, readOnly, required, value } = this;

    return (
      <div class="utrecht-form-field utrecht-form-field--textarea">
        <textarea
          id="input"
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
          onBlur={(evt) => this.utrechtBlur.emit(evt)}
          onChange={(evt) => this.utrechtChange.emit(evt)}
          onFocus={(evt) => this.utrechtFocus.emit(evt)}
          onInput={(evt) => {
            this.value = (evt.target as HTMLTextAreaElement).value;
            this.utrechtInput.emit(evt);
          }}
        >
          {value}
        </textarea>
        <label class="utrecht-form-field-textarea__label utrecht-form-label" htmlFor="input">
          <slot></slot>
        </label>
      </div>
    );
  }
}
