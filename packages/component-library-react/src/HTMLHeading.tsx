/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Frameless
 */
import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface HTMLHeadingProps extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  level?: number;
}

export const HTMLHeading = forwardRef(
  ({ level, className, ...restProps }: PropsWithChildren<HTMLHeadingProps>, ref: ForwardedRef<HTMLHeadingElement>) => {
    const HeadingX =
      level === 1
        ? 'h1'
        : level === 2
        ? 'h2'
        : level === 3
        ? 'h3'
        : level === 4
        ? 'h4'
        : level === 5
        ? 'h5'
        : level === 6
        ? 'h6'
        : 'p';

    return <HeadingX className={clsx(className)} {...restProps} ref={ref} />;
  },
);

HTMLHeading.displayName = 'HTMLHeading';
