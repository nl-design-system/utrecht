/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { Heading1 } from './Heading1';
import { Heading2 } from './Heading2';
import { Heading3 } from './Heading3';
import { Heading4 } from './Heading4';
import { Heading5 } from './Heading5';
import { Heading6 } from './Heading6';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: number;
}

export const Heading = forwardRef(
  ({ level, ...restProps }: PropsWithChildren<HeadingProps>, ref: ForwardedRef<HTMLHeadingElement>) => {
    const HeadingX =
      level === 2
        ? Heading2
        : level === 3
        ? Heading3
        : level === 4
        ? Heading4
        : level === 5
        ? Heading5
        : level === 6
        ? Heading6
        : Heading1;
    return <HeadingX {...restProps} ref={ref} />;
  },
);

Heading.displayName = 'Heading';
