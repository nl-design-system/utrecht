/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export const Link = forwardRef(
  (
    { children, className, external, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    // "utrecht-link--telephone" does not have a corresponding API,
    // since it is primarily a basis for implementing input[href^="tel"].
    // Telephone number rendering in React is best achieved using composition
    // of the TelephoneValue component.
    <a
      {...restProps}
      ref={ref}
      className={clsx('utrecht-link', { 'utrecht-link--external': external }, className)}
      rel={external ? 'external noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
);

Link.displayName = 'Link';
