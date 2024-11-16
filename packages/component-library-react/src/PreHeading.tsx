/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type PreHeadingProps = HTMLAttributes<HTMLParagraphElement>;

export const PreHeading = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<PreHeadingProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p {...restProps} ref={ref} className={clsx('utrecht-pre-heading', className)}>
      {children}
    </p>
  ),
);

PreHeading.displayName = 'PreHeading';
