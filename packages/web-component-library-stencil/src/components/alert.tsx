/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  @Prop() type: string;
  @Prop() role: string;

  render() {
    let computedRole = this.role;
    if (!computedRole) {
      switch (this.type) {
        case 'info':
        case 'ok':
          computedRole = 'status';
          break;
        case 'error':
        case 'warning':
          computedRole = 'alert';
          break;
      }
    }
    return (
      <div
        class={clsx('utrecht-alert', {
          'utrecht-alert--error': this.type === 'error',
          'utrecht-alert--info': this.type === 'info',
          'utrecht-alert--ok': this.type === 'ok',
          'utrecht-alert--warning': this.type === 'warning',
        })}
      >
        <div class="utrecht-alert__icon">
          <slot name="icon"></slot>
        </div>
        <div class="utrecht-alert__content">
          <div class="utrecht-alert__message" role={computedRole}>
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
