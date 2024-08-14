/* @license CC0-1.0 */

import clsx from 'clsx';
import React, { PropsWithChildren, ReactNode } from 'react';

export interface AlertProps extends PropsWithChildren {
  icon?: ReactNode;
  type?: string;
}

export const Alert = ({ children, icon = null, type }: PropsWithChildren<AlertProps>) => (
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
      <div className="utrecht-alert__message" role="alert">
        {children}
      </div>
    </div>
  </div>
);
