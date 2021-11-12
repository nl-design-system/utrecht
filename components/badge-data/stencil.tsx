/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-badge-data',
  styleUrl: 'stencil.scss',
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
