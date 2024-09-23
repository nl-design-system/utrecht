import { FormField } from '@utrecht/form-field-react';
import type { FormFieldProps } from '@utrecht/form-field-react';
import { FormLabel } from '@utrecht/form-label-react';
import type { FormLabelProps } from '@utrecht/form-label-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface FormFieldComboboxProps extends FormFieldProps {
  labelProps?: FormLabelProps;
  label?: string;
}

export const FormFieldCombobox = forwardRef(
  (
    { children, labelProps, label, ...restProps }: PropsWithChildren<FormFieldComboboxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <FormField ref={ref} {...restProps}>
      {label && (
        <p className="utrecht-form-field__label">
          <FormLabel {...labelProps}>{label}</FormLabel>
        </p>
      )}
      {children}
    </FormField>
  ),
);
FormFieldCombobox.displayName = 'FormFieldCombobox';
