/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';

export type CustomRadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const CustomRadioButton = forwardRef(
  (
    { disabled, required, className, invalid, ...restProps }: PropsWithChildren<CustomRadioButtonProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input
      type="radio"
      aria-invalid={invalid || undefined}
      disabled={disabled}
      required={required}
      ref={ref}
      className={clsx(
        'utrecht-custom-radio-button',
        disabled && 'utrecht-custom-radio-button--disabled',
        invalid && 'utrecht-custom-radio-button--invalid',
        className,
      )}
      {...restProps}
    />
  ),
);

CustomRadioButton.displayName = 'utrecht-custom-radio-button';
