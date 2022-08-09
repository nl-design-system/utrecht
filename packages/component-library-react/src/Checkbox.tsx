import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  invalid?: boolean;
}

export const Checkbox = forwardRef(
  ({ disabled, invalid, required, className, ...restProps }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      ref={ref}
      type="checkbox"
      className={clsx(
        'utrecht-checkbox',
        'utrecht-checkbox--html-input',
        disabled && 'utrecht-checkbox--disabled',
        invalid && 'utrecht-checkbox--invalid',
        required && 'utrecht-checkbox--required',
        className,
      )}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      required={required}
    />
  ),
);

Checkbox.displayName = 'Checkbox';
