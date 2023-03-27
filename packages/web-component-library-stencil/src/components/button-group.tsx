/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-button-group',
  styleUrl: 'button-group.scss',
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
