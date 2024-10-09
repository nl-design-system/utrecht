import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-unordered-list',
  styleUrl: 'unordered-list.scss',
  shadow: true,
})
export class UnorderedList {
  render() {
    return (
      <ul role="list">
        <slot></slot>
      </ul>
    );
  }
}
