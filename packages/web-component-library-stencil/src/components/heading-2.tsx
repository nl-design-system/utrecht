import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-2',
  styleUrl: 'heading-2.scss',
  shadow: true,
})
export class Heading2 {
  render() {
    return (
      <h2>
        <slot></slot>
      </h2>
    );
  }
}
