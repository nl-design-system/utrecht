/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-field-description',
  styleUrl: 'form-field-description.scss',
  shadow: true,
})
export class FormFieldDescription {
  @Prop({ attribute: 'status', reflect: true }) status?: string = null;

  render() {
    const { status } = this;

    return (
      <div
        class={clsx(
          'utrecht-form-field-description',
          status === 'valid' && 'utrecht-form-field-description--valid',
          status === 'invalid' && 'utrecht-form-field-description--invalid',
        )}
      >
        <slot></slot>
      </div>
    );
  }
}
