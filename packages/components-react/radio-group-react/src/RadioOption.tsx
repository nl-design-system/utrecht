import { FormFieldDescription } from '@utrecht/form-field-description-react';
import { FormFieldErrorMessage } from '@utrecht/form-field-error-message-react';
import { FormField, type FormFieldProps } from '@utrecht/form-field-react';
import { FormLabel } from '@utrecht/form-label-react';
import { RadioButton, type RadioButtonProps } from '@utrecht/radio-button-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, Ref, useId } from 'react';

export interface RadioOptionProps
  extends Omit<
      FormFieldProps,
      'defaultChecked' | 'defaultValue' | 'defaultValue' | 'invalid' | 'onBlur' | 'onChange' | 'onFocus' | 'onInput'
    >,
    Pick<
      RadioButtonProps,
      | 'checked'
      | 'defaultChecked'
      | 'defaultValue'
      | 'defaultValue'
      | 'disabled'
      | 'invalid'
      | 'name'
      | 'onBlur'
      | 'onChange'
      | 'onFocus'
      | 'onInput'
      | 'required'
      | 'value'
      | 'value'
    > {
  inputRef?: Ref<HTMLInputElement>;
}

export const RadioOption = forwardRef(
  (
    {
      checked,
      children,
      defaultChecked,
      defaultValue,
      description,
      disabled,
      errorMessage,
      inputRef,
      invalid,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      onInput,
      required,
      value,
      ...props
    }: PropsWithChildren<RadioOptionProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} type="radio" ref={ref} {...props}>
        <div className="utrecht-form-field__label utrecht-form-field__label--radio">
          <FormLabel type="radio" htmlFor={inputId}>
            <RadioButton
              aria-describedby={
                clsx({
                  [descriptionId]: description,
                  [errorMessageId]: invalid,
                }) || undefined
              }
              checked={checked}
              className="utrecht-form-field__input"
              defaultChecked={defaultChecked}
              defaultValue={defaultValue}
              disabled={disabled}
              id={inputId}
              ref={inputRef}
              invalid={invalid}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              onInput={onInput}
              required={required}
              value={value}
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
        {children}
      </FormField>
    );
  },
);

RadioOption.displayName = 'RadioOption';
