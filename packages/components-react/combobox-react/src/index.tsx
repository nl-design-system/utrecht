/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type ComboboxProps = HTMLAttributes<HTMLDivElement>;

export const Combobox = forwardRef(
  ({ className, ...restProps }: PropsWithChildren<ComboboxProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div className={clsx('utrecht-combobox', className)} {...restProps} ref={ref} />
  ),
);

Combobox.displayName = 'Combobox';

export interface ComboboxPopoverProps extends HTMLAttributes<HTMLDivElement> {
  position?: string | 'block-end' | 'block-start';
}

export const ComboboxPopover = forwardRef(
  (
    { className, position, ...restProps }: PropsWithChildren<ComboboxPopoverProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      className={clsx(
        'utrecht-combobox__popover',
        {
          'utrecht-search-bar__popover--block-end': !position || position === 'block-end',
        },
        className,
      )}
      {...restProps}
      ref={ref}
    />
  ),
);

ComboboxPopover.displayName = 'ComboboxPopover';
