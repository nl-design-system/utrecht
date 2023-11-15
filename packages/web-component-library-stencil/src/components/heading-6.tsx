import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-6',
  styleUrl: 'heading-6.scss',
  shadow: true,
})
export class Heading6 {
  render() {
    return (
      <h6>
        <slot></slot>
      </h6>
    );
  }
}
