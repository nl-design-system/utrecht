import { Fieldset, FieldsetLegend } from '@utrecht/fieldset-react';
import { FormFieldDescription } from '@utrecht/form-field-description-react';
import { FormFieldErrorMessage } from '@utrecht/form-field-error-message-react';
import type { FormFieldProps } from '@utrecht/form-field-react';
import type { RadioButtonProps } from '@utrecht/radio-button-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { RadioOption } from './RadioOption';

export interface RadioGroupOptionProps
  extends Pick<
      RadioButtonProps,
      | 'defaultValue'
      | 'value'
      | 'checked'
      | 'defaultChecked'
      | 'defaultValue'
      | 'disabled'
      | 'invalid'
      | 'name'
      | 'required'
      | 'value'
    >,
    Pick<FormFieldProps, 'id' | 'label' | 'description' | 'errorMessage'> {
  inputRef?: Ref<HTMLInputElement>;
}
export interface RadioGroupProps
  extends Omit<FormFieldProps, 'type' | 'invalid'>,
    Pick<RadioButtonProps, 'disabled' | 'invalid' | 'name' | 'required' | 'value'> {
  description?: ReactNode;
  errorMessage?: ReactNode;
  inputRef?: Ref<HTMLInputElement>;
  label: ReactNode;
  status?: ReactNode;
  options?: RadioGroupOptionProps[];
}

export const RadioGroup = forwardRef(
  (
    {
      children,
      className,
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
      status,
      value,
      options,
      ...props
    }: PropsWithChildren<RadioGroupProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const descriptionId = description ? useId() : undefined;
    const errorMessageId = errorMessage ? useId() : undefined;
    const statusId = status ? useId() : undefined;

    return (
      <Fieldset
        role="radiogroup"
        className={clsx('utrecht-radio-group', className)}
        invalid={invalid}
        required={required}
        aria-describedby={clsx(descriptionId, errorMessageId, statusId) || undefined}
        ref={ref}
        {...props}
      >
        <FieldsetLegend className="utrecht-radio-group__label">{label}</FieldsetLegend>
        {description && (
          <FormFieldDescription className="utrecht-radio-group__description" id={descriptionId}>
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-radio-group__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        {Array.isArray(options)
          ? options.map(({ ...props }, index) => (
              <RadioOption
                key={index}
                name={name}
                disabled={disabled}
                onChange={onChange}
                onInput={onInput}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
              />
            ))
          : null}
        {children}
        {status && (
          <div className="utrecht-radio-group__status" id={statusId}>
            {status}
          </div>
        )}
      </Fieldset>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
