import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-marker',
  styleUrl: './index.scss',
  shadow: true,
})
export class Marker {
  render() {
    return <slot></slot>;
  }
}
