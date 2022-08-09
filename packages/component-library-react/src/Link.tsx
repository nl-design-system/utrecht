/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  activeStyle?: boolean;
  external?: boolean;
  focusStyle?: boolean;
  focusVisibleStyle?: boolean;
  hoverStyle?: boolean;
  visitedStyle?: boolean;
}

export const Link = forwardRef(
  (
    {
      children,
      className,
      activeStyle,
      external,
      focusStyle,
      focusVisibleStyle,
      hoverStyle,
      visitedStyle,
      ...restProps
    }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    // "utrecht-link--telephone" does not have a corresponding API,
    // since it is primarily a basis for implementing input[href^="tel"].
    // Telephone number rendering in React is best achieved using composition
    // of the TelephoneValue component.
    <a
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-link',
        {
          'utrecht-link--active': activeStyle,
          'utrecht-link--external': external,
          'utrecht-link--focus': focusStyle,
          'utrecht-link--focus-visible': focusVisibleStyle,
          'utrecht-link--hover': hoverStyle,
          'utrecht-link--visited': visitedStyle,
        },
        className,
      )}
      rel={external ? 'external noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
);

Link.displayName = 'Link';
