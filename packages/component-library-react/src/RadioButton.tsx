import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  appearance?: string;
  invalid?: boolean;
}

export const RadioButton = forwardRef(
  (
    { appearance = 'utrecht-radio-button', invalid, className, ...restProps }: RadioButtonProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input
      {...restProps}
      ref={ref}
      type="radio"
      className={clsx(
        'utrecht-radio-button',
        'utrecht-radio-button--html-input',
        {
          'utrecht-radio-button--custom': appearance === 'utrecht-radio-button',
          'utrecht-radio-button--invalid': invalid,
        },
        className,
      )}
    />
  ),
);

RadioButton.displayName = 'RadioButton';
