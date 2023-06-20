/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export interface DataPlaceholderProps extends HTMLAttributes<HTMLElement> {
  loading?: boolean;
}

export const DataPlaceholder = forwardRef(
  ({ loading, className, ...restProps }: DataPlaceholderProps, ref: ForwardedRef<HTMLElement>) => (
    <span
      ref={ref}
      className={clsx(
        'utrecht-data-placeholder',
        {
          'utrecht-data-placeholder--loading': loading,
        },
        className,
      )}
      {...restProps}
    />
  ),
);

DataPlaceholder.displayName = 'DataPlaceholder';
