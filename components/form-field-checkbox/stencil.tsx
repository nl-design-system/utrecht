/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-field-checkbox',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class FormFieldCheckbox {
  @Prop() label: boolean = false;
  @Prop({ attribute: 'disabled', reflect: true }) disabled: boolean = false;
  @Prop({ attribute: 'checked', reflect: true }) checked: boolean = false;
  @Prop({ attribute: 'invalid', reflect: true }) invalid: boolean = false;
  @Prop({ attribute: 'required', reflect: true }) required: boolean = false;
  @State() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { checked, disabled, invalid, required, value } = this;

    return (
      <div class="utrecht-form-field utrecht-form-field--checkbox">
        <input
          id="input"
          class={clsx('utrecht-checkbox')}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          aria-invalid={invalid ? 'true' : null}
          required={required}
          value={value}
          onBlur={(evt) => this.utrechtBlur.emit(evt)}
          onChange={(evt) => this.utrechtChange.emit(evt)}
          onFocus={(evt) => this.utrechtFocus.emit(evt)}
          onInput={(evt) => {
            this.checked = (evt.target as HTMLInputElement).checked;
            this.utrechtInput.emit(evt);
          }}
        />
        <label
          class={clsx(
            'utrecht-form-field__label',
            'utrecht-form-field__label--checkbox',
            'utrecht-form-label',
            'utrecht-form-label--checkbox',
          )}
          htmlFor="input"
        >
          <slot></slot>
        </label>
      </div>
    );
  }
}
