import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import type { FormFieldProps } from './FormField';
import { FormField } from './FormField';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { FormLabel } from './FormLabel';
import { RadioButton } from './RadioButton';

export interface FormFieldRadioButtonProps extends FormFieldProps {
  // Making `name` required seems like a good nudge towards a working radio button group
  name: string;
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  required?: boolean;
  value?: string | number;
  defaultValue?: string;
}

export const FormFieldRadioButton = forwardRef(
  (
    {
      name,
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      status,
      required,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      children,
      ...props
    }: PropsWithChildren<FormFieldRadioButtonProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} type="radio" {...props}>
        <p>
          <FormLabel type="radio" className="utrecht-form-field__label" htmlFor={inputId}>
            <RadioButton
              ref={ref}
              id={inputId}
              name={name}
              className="utrecht-form-field__input"
              aria-describedby={
                clsx({
                  [descriptionId]: description,
                  [errorMessageId]: invalid,
                  [statusId]: status,
                }) || undefined
              }
              invalid={invalid}
              disabled={disabled}
              aria-required={required}
              value={value}
              onFocus={onFocus}
              onBlur={onBlur}
              onInput={onInput}
              onChange={onChange}
              defaultValue={defaultValue}
            />
            {label}
          </FormLabel>
        </p>
        {description && (
          <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__description" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
        {children}
      </FormField>
    );
  },
);

FormFieldRadioButton.displayName = 'FormFieldRadioButton';
