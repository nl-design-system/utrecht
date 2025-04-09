import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-table-container',
  styleUrl: 'table-container.scss',
  shadow: false,
})
export class TableContainer {
  render() {
    return <slot></slot>;
  }
}
