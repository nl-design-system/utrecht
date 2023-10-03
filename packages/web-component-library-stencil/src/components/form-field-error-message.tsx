/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-form-field-error-message',
  styleUrl: 'form-field-error-message.scss',
  shadow: true,
})
export class FormFieldErrorMessage {
  render() {
    return <slot></slot>;
  }
}
