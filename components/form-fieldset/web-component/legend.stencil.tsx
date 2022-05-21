import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-form-fieldset-legend',
  styleUrl: 'index.scss',
  shadow: true,
})
export class FormFieldsetLegend {
  render() {
    return (
      <div class="utrecht-form-fieldset__legend">
        <slot></slot>
      </div>
    );
  }
}
