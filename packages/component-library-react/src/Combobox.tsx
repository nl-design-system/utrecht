/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Robbert Broersma
 */

import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

export type ComboboxProps = HTMLAttributes<HTMLDivElement>;

export const Combobox = ({ className, ...restProps }: PropsWithChildren<ComboboxProps>) => (
  <div className={clsx('utrecht-combobox', className)} {...restProps} />
);

export interface ComboboxPopoverProps extends HTMLAttributes<HTMLDivElement> {
  position?: string | 'block-end' | 'block-start';
}

export const ComboboxPopover = ({ className, position, ...restProps }: PropsWithChildren<ComboboxPopoverProps>) => (
  <div
    className={clsx(
      'utrecht-combobox__popover',
      {
        'utrecht-search-bar__popover--block-end': !position || position === 'block-end',
      },
      className,
    )}
    {...restProps}
  />
);
