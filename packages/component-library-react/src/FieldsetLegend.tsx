import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type FieldsetLegendProps = HTMLAttributes<HTMLLegendElement>;

export const FieldsetLegend = forwardRef(
  (
    { className, children, ...restProps }: PropsWithChildren<FieldsetLegendProps>,
    ref: ForwardedRef<HTMLLegendElement>,
  ) => (
    <legend
      {...restProps}
      ref={ref}
      className={clsx('utrecht-form-fieldset__legend', 'utrecht-form-fieldset__legend--html-legend', className)}
    >
      {children}
    </legend>
  ),
);

FieldsetLegend.displayName = 'FieldsetLegend';
