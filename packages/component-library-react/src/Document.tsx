/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type DocumentProps = HTMLAttributes<HTMLDivElement>;

export const Document = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DocumentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-document', className)}>
      {children}
    </div>
  ),
);

Document.displayName = 'Document';
