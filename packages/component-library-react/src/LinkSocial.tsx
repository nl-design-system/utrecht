/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  boxContent?: boolean;
  external?: boolean;
}

export const LinkSocial = forwardRef(
  (
    { children, className, external, ...restProps }: PropsWithChildren<LinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      {...restProps}
      ref={ref}
      className={clsx('utrecht-link-social', className)}
      rel={external ? 'external noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
);

LinkSocial.displayName = 'LinkSocial';
