import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-table-caption',
  styleUrl: 'table-caption.scss',
  shadow: true,
})
export class TableCaption {
  render() {
    // TODO: Associate with parent <utrecht-table> aria-labelledby attribute
    return <slot></slot>;
  }
}
