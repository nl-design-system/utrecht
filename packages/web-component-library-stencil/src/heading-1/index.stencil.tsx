import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-1',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Heading1 {
  render() {
    return (
      <h1 class="utrecht-heading-1">
        <slot></slot>
      </h1>
    );
  }
}
