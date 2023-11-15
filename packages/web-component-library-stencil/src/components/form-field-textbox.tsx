/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-field-textbox',
  styleUrl: 'form-field-textbox.scss',
  shadow: true,
})
export class FormFieldTextbox {
  @Element() hostElement!: HTMLElement;

  @Prop({ attribute: 'autocomplete', reflect: true }) autoComplete: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() label: string = '';
  @Prop() min: number | string = '';
  @Prop() max: number | string = '';
  @Prop() name: string = '';
  @Prop() pattern: string = '';
  @Prop() placeholder: string = '';
  @Prop({ attribute: 'readonly', reflect: true }) readOnly: boolean = false;
  @Prop({ reflect: true }) required: boolean = false;
  @Prop({ reflect: true }) type: string = '';
  @Prop() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const {
      autoComplete,
      disabled,
      hostElement,
      invalid,
      label,
      min,
      max,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      type,
      value,
    } = this;

    let input = hostElement.querySelector('input[type="hidden"]') as HTMLInputElement | null;

    if (input && !name) {
      input.parentNode.removeChild(input);
    }

    if (!input && name) {
      input = hostElement.ownerDocument.createElement('input');
      input.type = 'hidden';
      input.ariaHidden = 'true';
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
        {invalid && (
          <utrecht-form-field-description status="invalid" class="utrecht-form-field__error-message" id="error-message">
            <slot name="error-message"></slot>
          </utrecht-form-field-description>
        )}
        <p class="utrecht-form-field__input">
          <input
            id="input"
            class={clsx(
              'utrecht-form-field__input',
              'utrecht-textbox',
              'utrecht-textbox--html-input',
              disabled && 'utrecht-textbox--disabled',
              invalid && 'utrecht-textbox--invalid',
              readOnly && 'utrecht-textbox--readonly',
            )}
            type={type || 'text'}
            autoComplete={autoComplete ? autoComplete : null}
            aria-describedby={clsx('description', 'status', { 'error-message': invalid })}
            aria-invalid={invalid}
            dir="auto"
            disabled={disabled}
            min={typeof min === 'number' ? String(min) : typeof min === 'string' ? min : null}
            max={typeof max === 'number' ? String(max) : typeof max === 'string' ? max : null}
            pattern={pattern ? pattern : null}
            placeholder={placeholder || null}
            readonly={readOnly}
            required={required}
            value={value}
            onBlur={(evt) => this.utrechtBlur.emit(evt)}
            onChange={(evt) => this.utrechtChange.emit(evt)}
            onFocus={(evt) => this.utrechtFocus.emit(evt)}
            onInput={(evt) => {
              this.value = (evt.target as HTMLInputElement).value;
              this.utrechtInput.emit(evt);
            }}
          />
        </p>
        <div class="utrecht-form-field__status" id="status">
          <div class="utrecht-form-field-description utrecht-form-field-description--status">
            <slot name="status"></slot>
          </div>
        </div>
      </div>
    );
  }
}
