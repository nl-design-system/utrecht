import { clsx } from 'clsx';
import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import './ExampleDialog.scss';

export interface ExampleDialogProps extends PropsWithChildren<HTMLAttributes<HTMLDialogElement>> {}

export const ExampleDialog = forwardRef(
  ({ children, className, ...restProps }: ExampleDialogProps, ref: ForwardedRef<HTMLDialogElement>) => (
    <dialog className={clsx('example-dialog', className)} {...restProps} ref={ref}>
      {children}
    </dialog>
  ),
);

ExampleDialog.displayName = 'ExampleDialog';
