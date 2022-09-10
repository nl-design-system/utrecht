import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'utrecht-table-row',
  styleUrl: 'table-row.scss',
  shadow: true,
})
export class TableRow {
  render() {
    return (
      <Host role="row">
        <slot></slot>
      </Host>
    );
  }
}
