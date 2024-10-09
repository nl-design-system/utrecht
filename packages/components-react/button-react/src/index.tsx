/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2025 Frameless B.V.
 * Copyright (c) 2021-2025 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: string;
  busy?: boolean;
  hint?: string;
  icon?: ReactNode;
  label?: ReactNode;
  pressed?: boolean;
}

export const Button = forwardRef(
  (
    {
      appearance,
      busy,
      disabled,
      children,
      className,
      hint,
      icon,
      label,
      pressed,
      type,
      ...restProps
    }: PropsWithChildren<ButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'utrecht-button',
          busy && 'utrecht-button--busy',
          disabled && 'utrecht-button--disabled',
          type === 'submit' && 'utrecht-button--submit',
          appearance === 'primary-action-button' && 'utrecht-button--primary-action',
          appearance === 'secondary-action-button' && 'utrecht-button--secondary-action',
          appearance === 'subtle-button' && 'utrecht-button--subtle',
          hint === 'danger' && 'utrecht-button--danger',
          hint === 'warning' && 'utrecht-button--warning',
          hint === 'ready' && 'utrecht-button--ready',
          pressed === true && 'utrecht-button--pressed',
          className,
        )}
        aria-busy={busy || undefined}
        aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
        disabled={disabled}
        type={type || 'button'}
        {...restProps}
      >
        {icon}
        {label && <span className="utrecht-button__label">{label}</span>}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export const PrimaryActionButton = ({ ...args }) => {
  return <Button {...args} appearance="primary-action-button" />;
};

PrimaryActionButton.displayName = 'PrimaryActionButton';

export const SecondaryActionButton = ({ ...args }) => {
  return <Button {...args} appearance="secondary-action-button" />;
};

SecondaryActionButton.displayName = 'SecondaryActionButton';

export const SubtleButton = ({ ...args }) => {
  return <Button {...args} appearance="subtle-button" />;
};

SubtleButton.displayName = 'SubtleButton';
