import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import { Checkbox } from './Checkbox';
import type { FormFieldProps } from './FormField';
import { FormField } from './FormField';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { FormLabel } from './FormLabel';

export interface FormFieldCheckboxProps extends FormFieldProps {
  // Making `name` required seems like a good nudge towards a working radio button group
  name: string;
  indeterminate?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  required?: boolean;
  inputRequired?: boolean;
  value?: string | number;
  defaultValue?: string;
  checked?: boolean;
  defaultChecked?: boolean;
}

export const FormFieldCheckbox = forwardRef(
  (
    {
      name,
      indeterminate,
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      status,
      required,
      inputRequired,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      defaultChecked,
      checked,
      children,
      ...props
    }: PropsWithChildren<FormFieldCheckboxProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} type="checkbox" {...props}>
        <div className="utrecht-form-field__label utrecht-form-field__label--checkbox">
          <FormLabel type="checkbox" htmlFor={inputId}>
            <Checkbox
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
              indeterminate={indeterminate}
              invalid={invalid}
              disabled={disabled}
              required={required}
              inputRequired={inputRequired}
              value={value}
              onFocus={onFocus}
              onBlur={onBlur}
              onInput={onInput}
              onChange={onChange}
              defaultValue={defaultValue}
              defaultChecked={defaultChecked}
              checked={checked}
            />
            {label}
          </FormLabel>
        </div>
        {description && (
          <FormFieldDescription className="utrecht-form-field__description" id={descriptionId}>
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
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

FormFieldCheckbox.displayName = 'FormFieldCheckbox';
