/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

const enumGuard =
  <T extends unknown>(values: readonly T[]) =>
  (x: unknown): x is T =>
    values.includes(x as T);

const APPEARANCE = {
  'primary-action-button': 'utrecht-button--primary-action',
  'secondary-action-button': 'utrecht-button--secondary-action',
  'subtle-button': 'utrecht-button--subtle',
} as const;
const HINT = {
  danger: 'utrecht-button--danger',
  warning: 'utrecht-button--warning',
  ready: 'utrecht-button--ready',
} as const;

const appearanceKeys = Object.keys(APPEARANCE) as (keyof typeof APPEARANCE)[];
const hintKeys = Object.keys(HINT) as (keyof typeof HINT)[];

export type ButtonAppearance = keyof typeof APPEARANCE;
export type ButtonHint = keyof typeof HINT;

export const isButtonAppearance = enumGuard(appearanceKeys);
export const isButtonHint = enumGuard(hintKeys);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  busy?: boolean;
  hint?: ButtonHint;
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
          appearance && APPEARANCE[appearance],
          hint && HINT[hint],
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

export const PrimaryActionButton = ({ ...args }: Omit<ButtonProps, 'appearance'>) => {
  return <Button {...args} appearance="primary-action-button" />;
};

PrimaryActionButton.displayName = 'PrimaryActionButton';

export const SecondaryActionButton = ({ ...args }: Omit<ButtonProps, 'appearance'>) => {
  return <Button {...args} appearance="secondary-action-button" />;
};

SecondaryActionButton.displayName = 'SecondaryActionButton';

export const SubtleButton = ({ ...args }: Omit<ButtonProps, 'appearance'>) => {
  return <Button {...args} appearance="subtle-button" />;
};

SubtleButton.displayName = 'SubtleButton';
