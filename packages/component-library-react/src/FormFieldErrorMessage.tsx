import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type FormFieldErrorMessageProps = HTMLAttributes<HTMLDivElement>;

export const FormFieldErrorMessage = forwardRef(
  (
    { className, children, ...restProps }: PropsWithChildren<FormFieldErrorMessageProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-form-field-error-message', className)}>
      {children}
    </div>
  ),
);

FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';
