/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  appearance?: string;
  level: number;
}

export const Heading = forwardRef(
  (
    { appearance, className, level, ...restProps }: PropsWithChildren<HeadingProps>,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => {
    const appearances = [
      'utrecht-heading-1',
      'utrecht-heading-2',
      'utrecht-heading-3',
      'utrecht-heading-4',
      'utrecht-heading-5',
      'utrecht-heading-6',
    ];
    const HeadingX =
      level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : level === 6 ? 'h6' : 'h1';
    const headingClassName =
      appearance && appearances.indexOf(appearance) !== -1 ? appearance : appearances[level - 1] || 'utrecht-heading-1';
    return <HeadingX className={clsx(headingClassName, className)} {...restProps} ref={ref} />;
  },
);

Heading.displayName = 'Heading';
