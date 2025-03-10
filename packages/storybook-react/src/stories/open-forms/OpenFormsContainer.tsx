import { clsx } from 'clsx';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './OpenFormsContainer.scss';

export interface OpenFormsContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const OpenFormsContainer = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<OpenFormsContainerProps>) => {
  return (
    <div className={clsx('utrecht-open-forms-container', className)} {...restProps}>
      {children}
    </div>
  );
};
