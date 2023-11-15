import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-5',
  styleUrl: 'heading-5.scss',
  shadow: true,
})
export class Heading5 {
  render() {
    return (
      <h5>
        <slot></slot>
      </h5>
    );
  }
}
