import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  invalid?: boolean;
}

export const RadioButton = forwardRef(
  (
    { checked, disabled, invalid, required, className, ...restProps }: RadioButtonProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input
      {...restProps}
      ref={ref}
      type="radio"
      checked={checked}
      className={clsx(
        'utrecht-radio-button',
        'utrecht-radio-button--html-input',
        checked && 'utrecht-radio-button--checked',
        disabled && 'utrecht-radio-button--disabled',
        invalid && 'utrecht-radio-button--invalid',
        required && 'utrecht-radio-button--required',
        className,
      )}
      disabled={disabled}
      required={required}
    />
  ),
);

RadioButton.displayName = 'utrecht-radio-button';
