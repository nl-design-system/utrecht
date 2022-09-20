/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type ButtonGroupProps = HTMLAttributes<HTMLParagraphElement>;

export const ButtonGroup = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<ButtonGroupProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p {...restProps} ref={ref} className={clsx('utrecht-button-group', className)}>
      {children}
    </p>
  ),
);

ButtonGroup.displayName = 'ButtonGroup';
