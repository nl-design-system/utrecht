/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-badge-data',
  styleUrl: 'badge-data.scss',
  shadow: true,
})
export class BadgeData {
  render() {
    return (
      <div class="utrecht-badge-data">
        <slot></slot>
      </div>
    );
  }
}
