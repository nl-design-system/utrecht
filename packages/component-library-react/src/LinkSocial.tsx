/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface LinkSocialProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export const LinkSocial = forwardRef(
  (
    { children, className, external, ...restProps }: PropsWithChildren<LinkSocialProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a
      {...restProps}
      ref={ref}
      className={clsx('utrecht-link-social', className)}
      rel={external !== false ? 'external noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
);

LinkSocial.displayName = 'LinkSocial';
