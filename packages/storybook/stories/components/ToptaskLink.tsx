/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */

import clsx from 'clsx';
import React, { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface ToptaskLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  href: string;
  icon?: ReactNode;
}

export const ToptaskLink = ({
  className,
  focus,
  focusVisible,
  hover,
  href,
  icon,
  children,
  ...restProps
}: ToptaskLinkProps) => (
  <a
    href={href}
    className={clsx(
      'utrecht-toptask-link',
      {
        'utrecht-toptask-link--hover': hover,
        'utrecht-toptask-link--focus': focus,
        'utrecht-toptask-link--focus-visible': focusVisible,
      },
      className,
    )}
    {...restProps}
  >
    {icon && <span className="utrecht-toptask-link__icon">{icon}</span>}
    <span className="utrecht-toptask-link__title">{children}</span>
  </a>
);
