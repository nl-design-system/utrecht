import type { CheckboxProps } from '@utrecht/checkbox-react';
import { Fieldset, FieldsetLegend } from '@utrecht/fieldset-react';
import { FormFieldCheckbox, FormFieldCheckboxProps } from '@utrecht/form-field-checkbox-react';
import { FormFieldDescription } from '@utrecht/form-field-description-react';
import { FormFieldErrorMessage } from '@utrecht/form-field-error-message-react';
import type { FormFieldProps } from '@utrecht/form-field-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';

export interface CheckboxOptionProps
  extends Pick<CheckboxProps, 'defaultValue' | 'value'>,
    Pick<FormFieldCheckboxProps, 'id' | 'label' | 'description' | 'errorMessage' | 'status'> {}

export interface CheckboxGroupProps
  extends Omit<FormFieldProps, 'type'>,
    Pick<CheckboxProps, 'disabled' | 'invalid' | 'inputRequired' | 'name' | 'required' | 'value'> {
  description?: ReactNode;
  errorMessage?: ReactNode;
  inputRef?: Ref<HTMLInputElement>;
  label: ReactNode;
  status?: ReactNode;
  options?: CheckboxOptionProps[];
}

export const CheckboxGroup = forwardRef(
  (
    {
      children,
      className,
      defaultValue,
      description,
      disabled,
      errorMessage,
      inputRef,
      inputRequired,
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
    }: PropsWithChildren<CheckboxGroupProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const descriptionId = description ? useId() : undefined;
    const errorMessageId = errorMessage ? useId() : undefined;
    const statusId = status ? useId() : undefined;

    return (
      <Fieldset
        className={clsx('utrecht-checkbox-group', className)}
        invalid={invalid}
        aria-describedby={clsx(descriptionId, errorMessageId, statusId)}
        ref={ref}
        {...props}
      >
        <FieldsetLegend className="utrecht-checkbox-group__label">{label}</FieldsetLegend>
        {description && (
          <FormFieldDescription className="utrecht-checkbox-group__description" id={descriptionId}>
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-checkbox-group__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        {Array.isArray(options)
          ? options.map(({ ...props }, index) => (
              <FormFieldCheckbox key={index} name={name} disabled={disabled} {...props}></FormFieldCheckbox>
            ))
          : null}
        {children}
        {status && (
          <div className="utrecht-checkbox-group__status" id={statusId}>
            {status}
          </div>
        )}
      </Fieldset>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
