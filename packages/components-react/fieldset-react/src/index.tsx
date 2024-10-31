import clsx from 'clsx';
import { FieldsetHTMLAttributes, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type { FieldsetLegendProps } from './FieldsetLegend';
export { FieldsetLegend } from './FieldsetLegend';

export interface FieldsetProps extends HTMLAttributes<HTMLDivElement> {
  'aria-describedby'?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  disabled?: boolean;
  form?: string;
  invalid?: boolean;
  required?: boolean;
  name?: string;
}

export const Fieldset = forwardRef(
  (
    {
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      className,
      children,
      disabled,
      form,
      invalid,
      name,
      required,
      role,
      ...restProps
    }: PropsWithChildren<FieldsetProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-form-fieldset',
        disabled && 'utrecht-form-fieldset--disabled',
        invalid && 'utrecht-form-fieldset--invalid',
        className,
      )}
    >
      <fieldset
        aria-describedby={ariaDescribedby}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-invalid={role === 'radiogroup' ? invalid || undefined : undefined}
        aria-required={role === 'radiogroup' ? required || undefined : undefined}
        disabled={disabled}
        form={form}
        name={name}
        role={role}
        className={clsx('utrecht-form-fieldset__fieldset', 'utrecht-form-fieldset--html-fieldset')}
      >
        {children}
      </fieldset>
    </div>
  ),
);

Fieldset.displayName = 'Fieldset';

/*
 * Life used to be so much simpler,
 * when we didn't want to put use `background-color` and `border` around the fieldset.
 */

export interface FieldsetOnlyProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  invalid?: boolean;
}

export const FieldsetOnly = forwardRef(
  (
    { className, children, disabled, invalid, ...restProps }: PropsWithChildren<FieldsetOnlyProps>,
    ref: ForwardedRef<HTMLFieldSetElement>,
  ) => (
    <fieldset
      {...restProps}
      ref={ref}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      className={clsx(
        'utrecht-form-fieldset',
        'utrecht-form-fieldset--html-fieldset',
        disabled && 'utrecht-form-fieldset--disabled',
        invalid && 'utrecht-form-fieldset--invalid',
        className,
      )}
    >
      {children}
    </fieldset>
  ),
);

FieldsetOnly.displayName = 'Fieldset';
