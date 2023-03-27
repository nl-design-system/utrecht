import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon',
  styleUrl: './index.scss',
  shadow: true,
})
export class Icon {
  render() {
    return <slot></slot>;
  }
}
