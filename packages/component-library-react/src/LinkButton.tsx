/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

export interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inline?: boolean;
  icon?: ReactNode;
  label?: ReactNode;
  pressed?: boolean;
}

export const LinkButton = forwardRef(
  (
    {
      children,
      disabled,
      inline,
      icon,
      label,
      className,
      pressed,
      type,
      ...restProps
    }: PropsWithChildren<LinkButtonProps>,
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
      {icon}
      {label && <span className="utrecht-link-button__label">{label}</span>}
      {children}
    </button>
  ),
);

LinkButton.displayName = 'LinkButton';
