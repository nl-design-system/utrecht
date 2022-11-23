/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type SpotlightSectionType = 'info' | 'warning';

export interface SpotlightSectionProps extends HTMLAttributes<HTMLDivElement> {
  aside?: boolean;
  type?: string | SpotlightSectionType;
}

export const SpotlightSection = forwardRef(
  (
    { aside, children, className, type, ...restProps }: PropsWithChildren<SpotlightSectionProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const props = {
      ...restProps,
      ref,
      className: clsx(
        'utrecht-spotlight-section',
        {
          'utrecht-spotlight-section--info': type === 'info',
          'utrecht-spotlight-section--warning': type === 'warning',
        },
        className,
      ),
    };
    return aside ? <aside {...props}>{children}</aside> : <section {...props}>{children}</section>;
  },
);

SpotlightSection.displayName = 'SpotlightSection';
