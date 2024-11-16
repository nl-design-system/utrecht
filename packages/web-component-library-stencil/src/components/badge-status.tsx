/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-badge-status',
  styleUrl: 'badge-status.scss',
  shadow: true,
})
export class BadgeStatus {
  @Prop() status: string;

  render() {
    return (
      <div class={`utrecht-badge-status utrecht-badge-status--${this.status || 'neutral'}`}>
        <slot></slot>
      </div>
    );
  }
}
