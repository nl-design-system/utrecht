/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type MultilineDataProps = HTMLAttributes<HTMLPreElement>;

export const MultilineData = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<MultilineDataProps>, ref: ForwardedRef<HTMLPreElement>) => (
    <pre
      ref={ref}
      className={clsx('utrecht-multiline-data', 'utrecht-multiline-data--html-pre', className)}
      {...restProps}
    >
      {children}
    </pre>
  ),
);

MultilineData.displayName = 'MultilineData';
