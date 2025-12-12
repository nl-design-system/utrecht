/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-status-badge',
  styleUrl: 'status-badge.scss',
  shadow: true,
})
export class StatusBadge {
  @Prop() status: string;

  render() {
    return (
      <div class={`utrecht-status-badge utrecht-status-badge--${this.status || 'neutral'}`}>
        <slot></slot>
      </div>
    );
  }
}
