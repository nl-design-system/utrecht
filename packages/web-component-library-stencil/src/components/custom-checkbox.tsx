/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-custom-checkbox',
  styleUrl: 'custom-checkbox.scss',
  shadow: true,
})
export class CustomCheckbox {
  @Prop() disabled?: boolean;
  @Prop() checked?: boolean;
  @Prop() indeterminate?: boolean;
  @Prop() invalid?: boolean;
  @Prop() required?: boolean;
  render() {
    const { checked, required, disabled, indeterminate, invalid } = this;
    return (
      <input
        aria-invalid={invalid ? 'true' : null}
        class={clsx(
          'utrecht-custom-checkbox',
          'utrecht-custom-checkbox--html-input',
          invalid && 'utrecht-custom-checkbox__box--invalid',
        )}
        type="checkbox"
        checked={checked}
        required={required}
        indeterminate={indeterminate}
        disabled={disabled}
      />
    );
  }
}
