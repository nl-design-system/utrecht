/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

/**
 * @deprecated
 */
export type SpotlightSectionType = 'info' | 'warning' | 'error' | 'ok';

/**
 * @deprecated
 */
export interface SpotlightSectionProps extends HTMLAttributes<HTMLDivElement> {
  aside?: boolean;
  type?: string | SpotlightSectionType;
}

/**
 * @deprecated Use `Note` instead, available in `@utrecht/note-react`.
 */
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
          [`utrecht-spotlight-section--${type}`]: type,
        },
        className,
      ),
    };
    return aside ? <aside {...props}>{children}</aside> : <section {...props}>{children}</section>;
  },
);

SpotlightSection.displayName = 'SpotlightSection';
