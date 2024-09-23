import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  description?: ReactNode;
  input?: ReactNode; // TODO: Should this be named `control` instead of `input`?
  invalid?: boolean;
  label?: ReactNode;
  type?: string;
}

export const FormField = forwardRef(
  (
    { className, children, description, input, invalid, label, type, ...restProps }: PropsWithChildren<FormFieldProps>,
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
      {label && <div className="utrecht-form-field__label">{label}</div>}
      {input && <div className="utrecht-form-field__input">{input}</div>}
      {description && <div className="utrecht-form-field__description">{description}</div>}
      {children}
    </div>
  ),
);

FormField.displayName = 'FormField';
