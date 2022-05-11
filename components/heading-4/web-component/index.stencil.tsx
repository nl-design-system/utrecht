import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-4',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Heading4 {
  render() {
    return (
      <h4 class="utrecht-heading-4">
        <slot></slot>
      </h4>
    );
  }
}
