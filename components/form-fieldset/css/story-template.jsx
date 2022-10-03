/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  div: {
    description: 'Use div elements instead of semantic HTML',
    type: 'boolean',
  },
  innerHTML: {
    description: 'Set the content of the fieldset',
    control: 'text',
  },
  legend: {
    description: 'Set the content of the legend',
    control: 'text',
  },
  role: {
    control: { type: 'select' },
    options: ['', 'group', 'radiogroup'],
  },
};

export const defaultArgs = {
  div: false,
  disabled: false,
  innerHTML: '',
  invalid: false,
  legend: '',
};

export const exampleArgs = {
  disabled: false,
  id: '4f8af453-db3f-4261-b103-5086dcd01b98',
  innerHTML: '<p>Fieldset body</p>',
  legend: 'Fieldset legend',
};

export const FormFieldsetLegend = ({ children, div = defaultArgs.div, id }) =>
  div ? (
    <div
      className={clsx('utrecht-form-fieldset__legend', {
        'utrecht-form-fieldset__legend--disabled': disabled,
      })}
      id={id}
    >
      {children}
    </div>
  ) : (
    <legend
      className={clsx('utrecht-form-fieldset__legend', 'utrecht-form-fieldset__legend--html-legend', {
        'utrecht-form-fieldset__legend--disabled': disabled,
      })}
    >
      {children}
    </legend>
  );

export const FormFieldset = ({
  children,
  disabled = false,
  div = false,
  id,
  innerHTML = defaultArgs.innerHTML,
  invalid = defaultArgs.invalid,
  legend = defaultArgs.legend,
  role,
}) => {
  const labelId = id && `${id}-legend`;
  const content = (
    <>
      {legend && (
        <FormFieldsetLegend div={div} id={labelId}>
          {legend}
        </FormFieldsetLegend>
      )}
      {children}
      {parse(innerHTML)}
    </>
  );
  return div ? (
    <div
      className={clsx('utrecht-form-fieldset', {
        'utrecht-form-fieldset--invalid': invalid,
      })}
      aria-disabled={disabled ? 'true' : undefined}
      role={role || 'group'}
      aria-labelledby={labelId}
    >
      {content}
    </div>
  ) : (
    <fieldset
      className={clsx('utrecht-form-fieldset', 'utrecht-form-fieldset--html-fieldset', {
        'utrecht-form-fieldset--invalid': invalid,
      })}
      disabled={disabled}
      role={role || undefined}
    >
      {content}
    </fieldset>
  );
};

export default FormFieldset;
