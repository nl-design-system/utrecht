import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  invalid?: boolean;
}

export const RadioButton = forwardRef(
  ({ invalid, className, ...restProps }: RadioButtonProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      ref={ref}
      type="radio"
      className={clsx(
        'utrecht-radio-button',
        'utrecht-radio-button--html-input',
        invalid && 'utrecht-radio-button--invalid',
        className,
      )}
    />
  ),
);

RadioButton.displayName = 'RadioButton';
