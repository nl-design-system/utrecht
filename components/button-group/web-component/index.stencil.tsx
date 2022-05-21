import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-button-group',
  styleUrl: 'index.scss',
  shadow: true,
})
export class ButtonGroup {
  render() {
    return (
      <div class="utrecht-button-group">
        <slot></slot>
      </div>
    );
  }
}
