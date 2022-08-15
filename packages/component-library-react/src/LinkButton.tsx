/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inline?: boolean;
}

export const LinkButton = forwardRef(
  (
    { children, inline, className, ...restProps }: PropsWithChildren<LinkButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-link-button',
        'utrecht-link-button--html-button',
        {
          'utrecht-link-button--inline': inline,
        },
        className,
      )}
    >
      {children}
    </button>
  ),
);

LinkButton.displayName = 'LinkButton';
