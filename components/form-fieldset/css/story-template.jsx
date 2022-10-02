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
  innerHTML: {
    description: 'Set the content of the fieldset',
    control: 'text',
  },
  legend: {
    description: 'Set the content of the legend',
    control: 'text',
  },
};

export const defaultArgs = {
  disabled: false,
  innerHTML: '',
  legend: '',
};

export const exampleArgs = {
  disabled: false,
  innerHTML: '<p>Fieldset body</p>',
  legend: 'Fieldset legend',
};

export const FormFieldset = ({
  disabled = defaultArgs.disabled,
  innerHTML = defaultArgs.innerHTML,
  legend = defaultArgs.legend,
}) => (
  <fieldset className={clsx('utrecht-form-fieldset', 'utrecht-form-fieldset--html-fieldset')} disabled={disabled}>
    {legend && (
      <legend
        className={clsx('utrecht-form-fieldset__legend', 'utrecht-form-fieldset__legend--html-legend', {
          'utrecht-form-fieldset__legend--disabled': disabled,
        })}
      >
        {legend}
      </legend>
    )}
    {parse(innerHTML)}
  </fieldset>
);

export default FormFieldset;
