import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: string;
  busy?: boolean;
  hint?: string;
}

export const Button = forwardRef(
  (
    { appearance, busy, disabled, children, className, hint, type, ...restProps }: PropsWithChildren<ButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        className={clsx(
          'utrecht-button',
          busy && 'utrecht-button--busy',
          disabled && 'utrecht-button--disabled',
          type === 'submit' && 'utrecht-button--submit',
          appearance === 'primary-action-button' && 'utrecht-button--primary-action',
          appearance === 'secondary-action-button' && 'utrecht-button--secondary-action',
          appearance === 'subtle-button' && 'utrecht-button--subtle',
          hint === 'danger' && 'utrecht-button--primary-action',
          hint === 'warning' && 'utrecht-button--secondary-action',
          hint === 'ready' && 'utrecht-button--subtle',
          className,
        )}
        aria-busy={busy || undefined}
        disabled={disabled}
        type={type || 'button'}
      >
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
