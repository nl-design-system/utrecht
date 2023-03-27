import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-6',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Heading6 {
  render() {
    return (
      <h6 class="utrecht-heading-6">
        <slot></slot>
      </h6>
    );
  }
}
