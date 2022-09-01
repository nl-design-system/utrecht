/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  checked: {
    description: 'Checked',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  id: {
    description: 'id',
    control: 'text',
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
  focus: false,
  hover: false,
};

export const FormToggle = ({
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  hover = defaultArgs.hover,
  focus = defaultArgs.focus,
}) => (
  <div
    className={clsx(
      'utrecht-form-toggle',
      checked && 'utrecht-form-toggle--checked',
      !checked && 'utrecht-form-toggle--not-checked',
      disabled && 'utrecht-form-toggle--disabled',
      focus && 'utrecht-form-toggle--focus',
      hover && 'utrecht-form-toggle--hover',
    )}
    role="switch"
    tabindex="0"
    aria-checked={checked || null}
    aria-disabled={disabled || null}
  >
    <div
      className={clsx(
        'utrecht-form-toggle__track',
        checked && 'utrecht-form-toggle__track--checked',
        !checked && 'utrecht-form-toggle__track--not-checked',
        disabled && 'utrecht-form-toggle__track--disabled',
      )}
    >
      <div
        className={clsx(
          'utrecht-form-toggle__thumb',
          checked && 'utrecht-form-toggle__thumb--checked',
          !checked && 'utrecht-form-toggle__thumb--not-checked',
          disabled && 'utrecht-form-toggle__thumb--disabled',
        )}
      ></div>
    </div>
  </div>
);

export const FormToggleCheckbox = ({
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  id = defaultArgs.id,
}) => (
  <div className={clsx('utrecht-form-toggle', 'utrecht-form-toggle--html-checkbox')}>
    <input
      id={id}
      type="checkbox"
      className="utrecht-form-toggle__checkbox"
      checked={checked || null}
      disabled={disabled || null}
    />
    <label htmlFor={id} className={clsx('utrecht-form-toggle__track')}>
      <div className={clsx('utrecht-form-toggle__thumb')}></div>
    </label>
  </div>
);

export default FormToggle;
