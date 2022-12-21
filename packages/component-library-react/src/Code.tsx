/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type CodeProps = HTMLAttributes<HTMLElement>;

export const Code = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<CodeProps>, ref: ForwardedRef<HTMLElement>) => (
    <code ref={ref} className={clsx('utrecht-code', className)} {...restProps}>
      {children}
    </code>
  ),
);

Code.displayName = 'Code';
