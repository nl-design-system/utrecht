import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-3',
  styleUrl: 'heading-3.scss',
  shadow: true,
})
export class Heading3 {
  render() {
    return (
      <h3>
        <slot></slot>
      </h3>
    );
  }
}
