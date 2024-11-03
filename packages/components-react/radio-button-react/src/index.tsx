import clsx from 'clsx';
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const RadioButton = forwardRef(
  (
    { disabled, required, className, invalid, ...restProps }: PropsWithChildren<RadioButtonProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input
      type="radio"
      aria-invalid={invalid || undefined}
      disabled={disabled}
      required={required}
      ref={ref}
      className={clsx(
        'utrecht-radio-button',
        'utrecht-radio-button--html-input',
        disabled && 'utrecht-radio-button--disabled',
        invalid && 'utrecht-radio-button--invalid',
        className,
      )}
      {...restProps}
    />
  ),
);

RadioButton.displayName = 'RadioButton';
