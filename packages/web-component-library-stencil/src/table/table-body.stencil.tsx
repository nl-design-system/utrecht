import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'utrecht-table-body',
  styleUrl: 'table-body.scss',
  shadow: true,
})
export class TableBody {
  render() {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}
