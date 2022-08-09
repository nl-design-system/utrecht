import clsx from 'clsx';
import { FieldsetHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement>;

export const Fieldset = forwardRef(
  ({ className, children, ...restProps }: PropsWithChildren<FieldsetProps>, ref: ForwardedRef<HTMLFieldSetElement>) => (
    <fieldset
      {...restProps}
      ref={ref}
      className={clsx('utrecht-form-fieldset', 'utrecht-form-fieldset--reset-fieldset', className)}
    >
      {children}
    </fieldset>
  ),
);

Fieldset.displayName = 'Fieldset';
