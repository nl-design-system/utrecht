import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-ordered-list',
  styleUrl: 'ordered-list.scss',
  shadow: true,
})
export class OrderedList {
  render() {
    return (
      <ol>
        <slot></slot>
      </ol>
    );
  }
}
