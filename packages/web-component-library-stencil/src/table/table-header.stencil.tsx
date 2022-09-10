import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'utrecht-table-header',
  styleUrl: 'table-header.scss',
  shadow: true,
})
export class TableHeader {
  render() {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}
