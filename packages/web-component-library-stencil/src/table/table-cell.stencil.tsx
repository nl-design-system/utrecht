import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'utrecht-table-cell',
  styleUrl: 'table-cell.scss',
  shadow: true,
})
export class TableCell {
  render() {
    return (
      <Host role="cell">
        <slot></slot>
      </Host>
    );
  }
}
