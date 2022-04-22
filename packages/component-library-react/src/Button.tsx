import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  busy?: boolean;
}

export const Button = forwardRef(
  (
    { busy, disabled, children, className, type, ...restProps }: PropsWithChildren<ButtonProps>,
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

Button.displayName = 'utrecht-button';
