import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-unordered-list-item',
  styleUrl: 'unordered-list-item.scss',
  shadow: true,
})
export class UnorderedListItem {
  render() {
    return (
      <li>
        <slot></slot>
      </li>
    );
  }
}
