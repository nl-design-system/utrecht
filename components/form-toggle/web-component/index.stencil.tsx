/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-toggle',
  styleUrl: 'index.scss',
  shadow: true,
})
export class FormToggle {
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) checked: boolean = false;
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { checked, disabled } = this;

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
        class={clsx(
          'utrecht-form-toggle',
          checked && 'utrecht-form-toggle--checked',
          !checked && 'utrecht-form-toggle--not-checked',
          disabled && 'utrecht-form-toggle--disabled',
        )}
        tabIndex={disabled ? null : 0}
        role="switch"
        aria-disabled={disabled ? 'true' : null}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
      >
        <div class="utrecht-form-toggle__label utrecht-form-toggle__label--off"></div>
        <div class="utrecht-form-toggle__label utrecht-form-toggle__label--on"></div>
        <div
          class={clsx(
            'utrecht-form-toggle__track',
            checked && 'utrecht-form-toggle__track--checked',
            !checked && 'utrecht-form-toggle__track--not-checked',
            disabled && 'utrecht-form-toggle__track--disabled',
          )}
        >
          <div
            class={clsx(
              'utrecht-form-toggle__thumb',
              checked && 'utrecht-form-toggle__thumb--checked',
              !checked && 'utrecht-form-toggle__thumb--not-checked',
              disabled && 'utrecht-form-toggle__thumb--disabled',
            )}
          ></div>
        </div>
      </div>
    );
  }
}
