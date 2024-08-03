import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import type { FormFieldProps } from './FormField';
import { FormField } from './FormField';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { FormLabel } from './FormLabel';
import { Textbox, TextboxProps } from './Textbox';
import { TextboxTypes } from './Textbox';

export interface FormFieldTextboxProps
  extends Omit<FormFieldProps, 'type'>,
    Pick<
      TextboxProps,
      | 'autoComplete'
      | 'defaultValue'
      | 'disabled'
      | 'inputRequired'
      | 'invalid'
      | 'list'
      | 'max'
      | 'maxLength'
      | 'min'
      | 'minLength'
      | 'name'
      | 'pattern'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'size'
      | 'step'
      | 'value'
      | 'type'
    > {
  description?: ReactNode;
  errorMessage?: ReactNode;
  inputDir?: TextboxProps['dir'];
  inputRef?: Ref<HTMLInputElement>;
  label: ReactNode;
  status?: ReactNode;
}

export const FormFieldTextbox = forwardRef(
  (
    {
      name,
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      readOnly,
      status,
      autoComplete,
      list,
      min,
      max,
      minLength,
      maxLength,
      step,
      placeholder,
      pattern,
      required,
      inputRequired,
      inputDir,
      type,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      size,
      children,
      inputRef,
      ...props
    }: PropsWithChildren<FormFieldTextboxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} ref={ref} {...props}>
        <div className="utrecht-form-field__label">
          <FormLabel htmlFor={inputId}>{label}</FormLabel>
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
        <div className="utrecht-form-field__input">
          <Textbox
            ref={inputRef}
            id={inputId}
            name={name}
            type={(type as TextboxTypes) || 'text'}
            autoComplete={autoComplete}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            invalid={invalid}
            dir={inputDir || 'auto'}
            disabled={disabled}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            inputRequired={inputRequired}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onInput={onInput}
            onChange={onChange}
            defaultValue={defaultValue}
            list={list}
            size={size}
            step={step}
          />
        </div>
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

FormFieldTextbox.displayName = 'FormFieldTextbox';
