import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
  type?: string;
}

export const FormField = forwardRef(
  (
    { className, children, invalid, type, ...restProps }: PropsWithChildren<FormFieldProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-form-field',
        {
          'utrecht-form-field--invalid': invalid,
          'utrecht-form-field--checkbox': type === 'checkbox',
          'utrecht-form-field--radio': type === 'radio',
          'utrecht-form-field--text': !type || type === 'text',
        },
        className,
      )}
    >
      {children}
    </div>
  ),
);

FormField.displayName = 'FormField';
