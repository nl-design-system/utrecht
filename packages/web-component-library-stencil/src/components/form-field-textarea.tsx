/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-field-textarea',
  styleUrl: 'form-field-textarea.scss',
  shadow: true,
})
export class FormFieldTextarea {
  @Element() hostElement!: HTMLElement;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() label: string = '';
  @Prop() name: string = '';
  @Prop({ attribute: 'readonly', reflect: true }) readOnly: boolean = false;
  @Prop() placeholder: string = '';
  @Prop({ reflect: true }) required: boolean = false;
  @Prop() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { disabled, hostElement, invalid, label, name, placeholder, readOnly, required, value } = this;

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
      input.value = value || '';
    }

    return (
      <div
        class={clsx('utrecht-form-field', 'utrecht-form-field--textbox', {
          'utrecht-form-field--invalid': invalid,
        })}
      >
        <p class="utrecht-form-field__label">
          <label
            class={clsx('utrecht-form-label', {
              'utrecht-form-label--disabled': disabled,
            })}
            htmlFor="input"
          >
            {label}
            <slot name="label"></slot>
          </label>
        </p>
        <utrecht-form-field-description id="description">
          <slot name="description"></slot>
        </utrecht-form-field-description>
        <p class="utrecht-form-field__input">
          <textarea
            id="input"
            class={clsx(
              'utrecht-textarea',
              'utrecht-textarea--html-textarea',
              disabled && 'utrecht-textarea--disabled',
              invalid && 'utrecht-textarea--invalid',
              readOnly && 'utrecht-textarea--readonly',
            )}
            aria-invalid={invalid}
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
        </p>
        {invalid && (
          <utrecht-form-field-description status="invalid" class="utrecht-form-field__error-message" id="error-message">
            <slot name="error-message"></slot>
          </utrecht-form-field-description>
        )}
        <div class="utrecht-form-field__status" id="status">
          <div class="utrecht-form-field-description utrecht-form-field-description--status">
            <slot name="status"></slot>
          </div>
        </div>
      </div>
    );
  }
}
