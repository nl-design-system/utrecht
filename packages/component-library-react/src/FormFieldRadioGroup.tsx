import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import type { FieldsetProps } from './Fieldset';
import { Fieldset } from './Fieldset';
import { FieldsetLegend } from './FieldsetLegend';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { Heading } from './Heading';

export interface FormFieldRadioGroupProps extends FieldsetProps {
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  required?: boolean;
  value?: string | number;
  defaultValue?: string;
  headingLevel?: number;
}

export const FormFieldRadioGroup = forwardRef(
  (
    {
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      status,
      children,
      headingLevel,
      ...restProps
    }: PropsWithChildren<FormFieldRadioGroupProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const groupId = useId();
    const groupDescriptionId = useId();
    const errorMessageId = useId();
    const statusId = useId();

    return (
      <Fieldset
        disabled={disabled}
        role="radiogroup"
        id={groupId}
        aria-describedby={groupDescriptionId}
        invalid={invalid}
        ref={ref}
        {...restProps}
      >
        <FieldsetLegend>{headingLevel ? <Heading level={headingLevel}>{label}</Heading> : label}</FieldsetLegend>
        {description ? <FormFieldDescription id={groupDescriptionId}>{description}</FormFieldDescription> : undefined}
        {errorMessage ? <FormFieldErrorMessage id={errorMessageId}>{errorMessage}</FormFieldErrorMessage> : undefined}
        {children}
        {status ? <div id={statusId}>{status}</div> : undefined}
      </Fieldset>
    );
  },
);

FormFieldRadioGroup.displayName = 'FormFieldRadioGroup';
