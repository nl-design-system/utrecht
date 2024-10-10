import clsx from 'clsx';
import { ForwardedRef, forwardRef, ReactNode, Ref, useId } from 'react';
import type { FormFieldProps } from './FormField';
import { FormField } from './FormField';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { FormLabel } from './FormLabel';
import { Textarea } from './Textarea';
import type { TextareaProps } from './Textarea';

export interface FormFieldTextareaProps
  extends Omit<FormFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>,
    Pick<
      TextareaProps,
      | 'autoComplete'
      | 'cols'
      | 'defaultValue'
      | 'disabled'
      | 'invalid'
      | 'maxLength'
      | 'minLength'
      | 'name'
      | 'onBlur'
      | 'onChange'
      | 'onFocus'
      | 'onInput'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'rows'
      | 'value'
    > {
  description?: ReactNode;
  errorMessage?: ReactNode;
  inputDir?: TextareaProps['dir'];
  inputRequired?: TextareaProps['required'];
  label: ReactNode;
  status?: ReactNode;
  inputRef?: Ref<HTMLTextAreaElement>;
}

export const FormFieldTextarea = forwardRef(
  (
    {
      autoComplete,
      children,
      cols,
      defaultValue,
      description,
      disabled,
      errorMessage,
      inputDir,
      inputRequired,
      invalid,
      label,
      maxLength,
      minLength,
      name,
      onBlur,
      onChange,
      onFocus,
      onInput,
      placeholder,
      readOnly,
      required,
      rows,
      status,
      inputRef,
      value,
      ...props
    }: FormFieldTextareaProps,
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
          <Textarea
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            autoComplete={autoComplete}
            cols={cols}
            defaultValue={defaultValue}
            dir={inputDir}
            disabled={disabled}
            id={inputId}
            inputRequired={inputRequired}
            invalid={invalid}
            maxLength={maxLength}
            minLength={minLength}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onInput={onInput}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={inputRef}
            required={required}
            rows={rows}
            value={value}
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

FormFieldTextarea.displayName = 'FormFieldTextarea';
