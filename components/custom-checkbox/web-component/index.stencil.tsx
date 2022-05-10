/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-custom-checkbox',
  styleUrl: 'index.scss',
  shadow: true,
})
export class CustomCheckbox {
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) checked: boolean = false;
  @Prop({ reflect: true }) indeterminate: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop({ reflect: true }) required: boolean = false;
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { checked, disabled, indeterminate, invalid, required } = this;
    const active = false;

    const toggleInteraction = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.utrechtInput.emit(this);
        this.utrechtChange.emit(this);
      }
    };

    const handleClick = () => {
      toggleInteraction();
    };

    const handleKeyPress = (evt) => {
      if (evt.code === 'Space' || evt.key === ' ') {
        // Do not scroll the page using Space when the toggle is focussed
        evt.preventDefault();
      }
    };

    const handleKeyUp = (evt) => {
      if (evt.code === 'Space' || evt.key === ' ') {
        toggleInteraction();
      }
    };

    return (
      <div
        class="utrecht-custom-checkbox"
        role="checkbox"
        tabIndex={disabled ? null : 0}
        aria-checked={indeterminate ? 'mixed' : checked ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : null}
        aria-invalid={invalid ? 'true' : null}
        aria-required={required ? 'true' : null}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
      >
        <div
          class={clsx(
            'utrecht-custom-checkbox__box',
            active && 'utrecht-custom-checkbox__box--active',
            checked && 'utrecht-custom-checkbox__box--checked',
            !checked && 'utrecht-custom-checkbox__box--not-checked',
            disabled && 'utrecht-custom-checkbox__box--disabled',
            invalid && 'utrecht-custom-checkbox__box--invalid',
            indeterminate && 'utrecht-custom-checkbox__box--indeterminate',
          )}
        >
          {checked && <utrecht-icon-checkmark class="utrecht-custom-checkbox__icon">✔</utrecht-icon-checkmark>}
          {indeterminate && (
            <utrecht-icon-indeterminate class="utrecht-custom-checkbox__icon">■</utrecht-icon-indeterminate>
          )}
        </div>
      </div>
    );
  }
}
