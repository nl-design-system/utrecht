/* @license CC0-1.0 */

import clsx from 'clsx';
import React, { PropsWithChildren, ReactNode } from 'react';

export type AlertType = 'info' | 'ok' | 'warning' | 'error';

export interface AlertProps extends PropsWithChildren {
  icon?: ReactNode;
  type?: string | AlertType;
  role?: string;
}

export const Alert = ({ children, icon = null, type, role }: PropsWithChildren<AlertProps>) => {
  let computedRole = role;
  if (!computedRole) {
    switch (type) {
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
      className={clsx('utrecht-alert', {
        'utrecht-alert--error': type === 'error',
        'utrecht-alert--info': type === 'info',
        'utrecht-alert--ok': type === 'ok',
        'utrecht-alert--warning': type === 'warning',
      })}
    >
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
