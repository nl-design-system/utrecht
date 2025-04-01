/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { clsx } from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

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
