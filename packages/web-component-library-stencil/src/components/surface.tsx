/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-surface',
  styleUrl: 'surface.scss',
  shadow: true,
})
export class Code {
  render() {
    return (
      <div class="utrecht-surface">
        <slot></slot>
      </div>
    );
  }
}
