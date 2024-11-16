/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface FormFieldsetLegendDivProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean;
}

export const FormFieldsetLegendDiv = ({ className, disabled, ...restProps }: FormFieldsetLegendDivProps) => (
  <div
    className={clsx('utrecht-form-fieldset__legend', {
      'utrecht-form-fieldset__legend--disabled': disabled,
      className,
    })}
    {...restProps}
  />
);

export interface FormFieldsetDivProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  disabled?: boolean;
  invalid?: boolean;
  legend?: ReactNode;
  section?: boolean;
}

export const FormFieldsetDiv = ({
  className,
  children,
  disabled = false,
  id,
  invalid,
  legend,
  role,
  section,
  ...restProps
}: FormFieldsetDivProps) => {
  const labelId = id && `${id}-legend`;
  const content = (
    <>
      {legend && <FormFieldsetLegendDiv id={labelId}>{legend}</FormFieldsetLegendDiv>}
      {children}
    </>
  );
  return (
    <div
      className={clsx('utrecht-form-fieldset', {
        'utrecht-form-fieldset--invalid': invalid,
        'utrecht-form-fieldset--section': section,
        className,
      })}
      aria-disabled={disabled ? 'true' : undefined}
      aria-invalid={invalid ? 'true' : undefined}
      role={role || 'group'}
      aria-labelledby={labelId}
      {...restProps}
    >
      {content}
    </div>
  );
};
