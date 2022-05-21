import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-table-header-cell',
  styleUrl: 'table-header-cell.scss',
  shadow: true,
})
export class TableHeaderCell {
  @Prop() scope: 'col' | 'row';
  render() {
    return (
      <Host role={this.scope === 'col' ? 'columnheader' : this.scope === 'row' ? 'rowheader' : 'cell'}>
        <slot></slot>
      </Host>
    );
  }
}
