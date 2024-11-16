/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, LabelHTMLAttributes, PropsWithChildren } from 'react';

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  type?: 'checkbox' | 'radio';
  disabled?: boolean;
  checked?: boolean;
}

export const FormLabel = forwardRef(
  (
    { children, className, type, disabled, checked, ...restProps }: PropsWithChildren<FormLabelProps>,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => (
    <label
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-form-label',
        type && `utrecht-form-label--${type}`,
        disabled && 'utrecht-form-label--disabled',
        checked && 'utrecht-form-label--checked',
        className,
      )}
    >
      {children}
    </label>
  ),
);

FormLabel.displayName = 'FormLabel';
