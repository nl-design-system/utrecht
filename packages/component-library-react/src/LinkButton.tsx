/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inline?: boolean;
  pressed?: boolean;
}

export const LinkButton = forwardRef(
  (
    { children, disabled, inline, className, pressed, type, ...restProps }: PropsWithChildren<LinkButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
      className={clsx(
        'utrecht-link-button',
        'utrecht-link-button--html-button',
        {
          'utrecht-link-button--disabled': disabled,
          'utrecht-link-button--inline': inline,
          'utrecht-link-button--pressed': pressed,
        },
        className,
      )}
      disabled={disabled}
      type={type || 'button'}
      {...restProps}
    >
      {children}
    </button>
  ),
);

LinkButton.displayName = 'LinkButton';
