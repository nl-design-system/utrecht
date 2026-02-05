/* @license CC0-1.0 */

import clsx from 'clsx';
import React, { PropsWithChildren, ReactNode } from 'react';

const enumGuard =
  <T extends unknown>(values: readonly T[]) =>
  (x: unknown): x is T =>
    values.includes(x as T);

export const ROLES = ['status', 'alert'] as const;
export type AlertRole = (typeof ROLES)[number];
export const isAlertRole = enumGuard(ROLES);

export const TYPES = ['error', 'warning', 'info', 'ok'] as const;
export type AlertType = (typeof TYPES)[number];
export const isAlertType = enumGuard(TYPES);

const typeToRole: Record<AlertType, AlertRole> = {
  info: 'status',
  ok: 'status',
  warning: 'alert',
  error: 'alert',
};

export interface AlertProps extends PropsWithChildren {
  icon?: ReactNode;
  type?: string | AlertType;
  role?: string | AlertRole;
}

export const Alert = ({ children, icon, type, role }: PropsWithChildren<AlertProps>) => {
  const computedType = isAlertType(type) ? type : 'info';
  const computedRole = role || typeToRole[computedType];
  return (
    <div className={clsx('utrecht-alert', `utrecht-alert--${computedType}`)}>
      {icon && <div className="utrecht-alert__icon">{icon}</div>}
      <div className="utrecht-alert__content">
        <div className="utrecht-alert__message" role={computedRole}>
          {children}
        </div>
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';
