/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-badge-list',
  styleUrl: 'badge-list.scss',
  shadow: true,
})
export class BadgeList {
  render() {
    return (
      <div class="utrecht-badge-list">
        <slot></slot>
      </div>
    );
  }
}
