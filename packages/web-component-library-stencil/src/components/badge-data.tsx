/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
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
