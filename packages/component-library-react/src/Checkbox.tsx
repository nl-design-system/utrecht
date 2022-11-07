import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  appearance?: string;
  invalid?: boolean;
}

export const Checkbox = forwardRef(
  (
    { appearance = 'custom', disabled, invalid, required, className, ...restProps }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input
      {...restProps}
      ref={ref}
      type="checkbox"
      className={clsx(
        'utrecht-checkbox',
        'utrecht-checkbox--html-input',
        {
          'utrecht-checkbox--disabled': disabled,
          'utrecht-checkbox--custom': appearance === 'custom',
          'utrecht-checkbox--invalid': invalid,
          'utrecht-checkbox--required': required,
        },
        className,
      )}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      required={required}
    />
  ),
);

Checkbox.displayName = 'Checkbox';
