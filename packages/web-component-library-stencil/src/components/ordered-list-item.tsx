import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-ordered-list-item',
  styleUrl: 'ordered-list-item.scss',
  shadow: true,
})
export class OrderedListItem {
  render() {
    return (
      <li>
        <slot></slot>
      </li>
    );
  }
}
