import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-form-field',
  styleUrl: 'index.scss',
  shadow: true,
})
export class FormField {
  render() {
    return (
      <div class="utrecht-form-field">
        <slot></slot>
      </div>
    );
  }
}
