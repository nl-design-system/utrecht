/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { DialogHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

export type AlertDialogType = 'error' | 'info' | 'warning';

export interface AlertDialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  icon?: ReactNode;
  type?: string | AlertDialogType;
}

export const AlertDialog = forwardRef(
  (
    { children, className, icon, type, ...restProps }: PropsWithChildren<AlertDialogProps>,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog
      {...restProps}
      ref={ref}
      className={clsx('utrecht-alert-dialog', {
        'utrecht-alert-dialog--error': type === 'error',
        'utrecht-alert-dialog--info': type === 'info',
        'utrecht-alert-dialog--warning': type === 'warning',
        className,
      })}
    >
      {icon && <div className="utrecht-alert-dialog__icon">{icon}</div>}
      <div className="utrecht-alert-dialog__message">{children}</div>
    </dialog>
  ),
);

AlertDialog.displayName = 'AlertDialog';
