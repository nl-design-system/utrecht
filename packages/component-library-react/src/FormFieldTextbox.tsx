import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import type { FormFieldProps } from './FormField';
import { FormField } from './FormField';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { FormLabel } from './FormLabel';
import { Textbox } from './Textbox';
import { TextboxTypes } from './Textbox';

export type DirType = 'auto' | 'ltr' | 'rtl';

export interface FormFieldTextboxProps extends FormFieldProps {
  name?: string;
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  readOnly?: boolean;
  placeholder?: string;
  min?: number | string;
  max?: number | string;
  maxLength?: number;
  minLength?: number;
  step?: number | string;
  autoComplete?: string;
  pattern?: string;
  type?: string;
  required?: boolean;
  inputRequired?: boolean;
  inputDir?: string | DirType;
  value?: string | number;
  defaultValue?: string;
  list?: string;
  size?: number;
  inputRef?: Ref<HTMLInputElement>;
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
            min={typeof min === 'number' ? String(min) : typeof min === 'string' ? min : undefined}
            max={typeof max === 'number' ? String(max) : typeof max === 'string' ? max : undefined}
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
