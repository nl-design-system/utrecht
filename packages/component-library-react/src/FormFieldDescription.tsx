import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface FormFieldDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
  valid?: boolean;
  warning?: boolean;
}

export const FormFieldDescription = forwardRef(
  (
    { invalid, valid, warning, className, children, ...restProps }: PropsWithChildren<FormFieldDescriptionProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-form-field-description',
        invalid && 'utrecht-form-field-description--invalid',
        valid && 'utrecht-form-field-description--valid',
        warning && 'utrecht-form-field-description--warning',
        className,
      )}
    >
      {children}
    </div>
  ),
);

FormFieldDescription.displayName = 'FormFieldDescription';
