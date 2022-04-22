import clsx from 'clsx';
import { ForwardedRef, forwardRef, LabelHTMLAttributes, PropsWithChildren } from 'react';

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
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

FormLabel.displayName = 'utrecht-form-label';
