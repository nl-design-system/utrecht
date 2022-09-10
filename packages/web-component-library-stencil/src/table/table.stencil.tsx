import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'utrecht-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  render() {
    return (
      <Host role="table">
        <slot></slot>
      </Host>
    );
  }
}
