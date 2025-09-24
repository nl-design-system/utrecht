/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

const enumGuard =
  <T,>(values: readonly T[]) =>
  (x: unknown): x is T =>
    values.includes(x as never);

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

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  type?: AlertType;
  role?: AlertRole | (string & {});
}

export const Alert = forwardRef(
  (
    { children, className, icon, type, role, ...restProps }: PropsWithChildren<AlertProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const computedType = isAlertType(type) ? type : 'info';
    const computedRole = role || typeToRole[computedType];
    return (
      <div {...restProps} ref={ref} className={clsx('utrecht-alert', `utrecht-alert--${computedType}`, className)}>
        {icon && <div className="utrecht-alert__icon">{icon}</div>}
        <div className="utrecht-alert__content">
          <div className="utrecht-alert__message" role={computedRole}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';
