/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

// Somehow `placeholder` incorrectly is a global HTML attribute in React, ignore that
export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  boxContent?: boolean;
  external?: boolean;
  placeholder?: boolean;
}

export const Link = forwardRef(
  (
    { boxContent, children, className, external, href, placeholder, role, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    // "utrecht-link--telephone" does not have a corresponding API,
    // since it is primarily a basis for implementing input[href^="tel"].
    // Telephone number rendering in React is best achieved using composition
    // of the TelephoneValue component.
    <a
      href={placeholder ? undefined : href}
      ref={ref}
      role={role || (placeholder ? 'link' : undefined)}
      className={clsx(
        'utrecht-link',
        {
          'utrecht-link--box-content': boxContent,
          'utrecht-link--external': external,
          'utrecht-link--placeholder': placeholder,
        },
        className,
      )}
      aria-disabled={placeholder ? 'true' : undefined}
      rel={external ? 'external noopener noreferrer' : undefined}
      {...restProps}
    >
      {children}
    </a>
  ),
);

Link.displayName = 'Link';
