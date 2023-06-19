import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'utrecht-icon',
  styleUrl: './index.scss',
  shadow: true,
})
export class Icon {
  render() {
    return (
      <Host aria-hidden="true">
        <slot></slot>
      </Host>
    );
  }
}
