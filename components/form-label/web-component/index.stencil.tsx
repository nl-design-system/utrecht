import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-form-label',
  styleUrl: 'index.scss',
  shadow: true,
})
export class FormLabel {
  @Prop() checked = false;
  @Prop() disabled = false;
  @Prop() type: 'checkbox' | 'radio' | null = null;
  render() {
    // TODO: Clicking the label should focus the associated form control.Rendering
    // Rendering `<label>` from the shadow DOM would not allow for association with
    // a form input using the `for` attribute. `<label>` has no ARIA role.
    // All in all there is no reason to use the `<label>` element.
    return (
      <span
        class={clsx(
          'utrecht-form-label',
          this.checked && 'utrecht-form-label--checked',
          this.disabled && 'utrecht-form-label--disabled',
          this.type === 'checkbox' && 'utrecht-form-label--checkbox',
          this.type === 'radio' && 'utrecht-form-label--radio',
        )}
      >
        <slot></slot>
      </span>
    );
  }
}
