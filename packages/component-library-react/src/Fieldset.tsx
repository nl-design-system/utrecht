import clsx from 'clsx';
import { FieldsetHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  invalid?: boolean;
}

export const Fieldset = forwardRef(
  (
    { className, children, disabled, invalid, ...restProps }: PropsWithChildren<FieldsetProps>,
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

Fieldset.displayName = 'Fieldset';
