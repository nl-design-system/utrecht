import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'utrecht-table-footer',
  styleUrl: 'table-footer.scss',
  shadow: true,
})
export class TableFooter {
  render() {
    return (
      <Host role="rowgroup">
        <slot></slot>
      </Host>
    );
  }
}
