/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

const enumGuard =
  <T extends unknown>(values: readonly T[]) =>
  (x: unknown): x is T =>
    values.includes(x as T);

const ROLES = ['status', 'alert'] as const;
type AlertRole = (typeof ROLES)[number];

const TYPES = ['error', 'warning', 'info', 'ok'] as const;
type AlertType = (typeof TYPES)[number];
const isAlertType = enumGuard(TYPES);

const typeToRole: Record<AlertType, AlertRole> = {
  info: 'status',
  ok: 'status',
  warning: 'alert',
  error: 'alert',
};

@Component({
  tag: 'utrecht-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  @Prop() type: string;

  render() {
    const computedType = isAlertType(this.type) ? this.type : 'info';
    const computedRole = typeToRole[computedType];
    return (
      <div class={clsx('utrecht-alert', `utrecht-alert--${computedType}`)}>
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
