import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type FormFieldProps = HTMLAttributes<HTMLDivElement>;

export const FormField = forwardRef(
  ({ className, children, ...restProps }: PropsWithChildren<FormFieldProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-form-field', className)}>
      {children}
    </div>
  ),
);

FormField.displayName = 'FormField';
