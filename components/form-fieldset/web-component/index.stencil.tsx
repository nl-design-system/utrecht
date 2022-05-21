import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-form-fieldset',
  styleUrl: 'index.scss',
  shadow: true,
})
export class FormFieldset {
  render() {
    return (
      <div class="utrecht-form-fieldset">
        <slot></slot>
      </div>
    );
  }
}
