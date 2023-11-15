import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-1',
  styleUrl: 'heading-1.scss',
  shadow: true,
})
export class Heading1 {
  render() {
    return (
      <h1>
        <slot></slot>
      </h1>
    );
  }
}
