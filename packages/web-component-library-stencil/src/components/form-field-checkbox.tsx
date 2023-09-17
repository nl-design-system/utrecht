/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-field-checkbox',
  styleUrl: 'form-field-checkbox.scss',
  shadow: true,
})
export class FormFieldCheckbox {
  @Element() hostElement!: HTMLElement;

  @Prop() label: string = '';
  @Prop({ attribute: 'disabled', reflect: true }) disabled: boolean = false;
  @Prop({ attribute: 'checked', reflect: true }) checked: boolean = false;
  @Prop({ attribute: 'invalid', reflect: true }) invalid: boolean = false;
  @Prop({ attribute: 'required', reflect: true }) required: boolean = false;
  @Prop() name: string = '';
  @Prop() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { checked, disabled, hostElement, label, name, invalid, required, value } = this;

    let input = hostElement.querySelector('input[type="hidden"]') as HTMLInputElement | null;

    if (input && !name) {
      input.parentNode.removeChild(input);
    }

    if (!input && name) {
      input = hostElement.ownerDocument.createElement('input');
      input.type = 'hidden';
      hostElement.appendChild(input);
    }

    if (input && name) {
      input.name = name;
      input.value = checked ? value || '' : '';
    }

    return (
      <div
        class={clsx('utrecht-form-field', 'utrecht-form-field--checkbox', {
          'utrecht-form-field--invalid': invalid,
        })}
      >
        <p class="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <label
            class={clsx('utrecht-form-label', {
              'utrecht-form-label--disabled': disabled,
            })}
            htmlFor="input"
          >
            <input
              id="input"
              type="checkbox"
              class={clsx(
                'utrecht-form-field__input',
                'utrecht-checkbox',
                'utrecht-checkbox--custom',
                'utrecht-checkbox--html-input',
                {
                  'utrecht-checkbox--disabled': disabled,
                  'utrecht-checkbox--invalid': invalid,
                  'utrecht-checkbox--required': required,
                },
              )}
              aria-invalid={invalid || undefined}
              disabled={disabled}
              required={required}
              checked={checked}
              value={value}
              onBlur={(evt) => this.utrechtBlur.emit(evt)}
              onChange={(evt) => this.utrechtChange.emit(evt)}
              onFocus={(evt) => this.utrechtFocus.emit(evt)}
              onInput={(evt) => {
                this.checked = (evt.target as HTMLInputElement).checked;
                this.utrechtInput.emit(evt);
              }}
            />{' '}
            {label}
            <slot name="label"></slot>
          </label>
          {invalid && (
            <utrecht-form-field-description
              status="invalid"
              class="utrecht-form-field__description utrecht-form-field__description--invalid"
              id="error-message"
            >
              <slot name="error-message"></slot>
            </utrecht-form-field-description>
          )}
        </p>
        <utrecht-form-field-description class="utrecht-form-field__description" id="description">
          <slot name="description"></slot>
        </utrecht-form-field-description>
        <div class="utrecht-form-field__status" id="status">
          <div class="utrecht-form-field-description utrecht-form-field-description--status">
            <slot name="status"></slot>
          </div>
        </div>
      </div>
    );
  }
}
