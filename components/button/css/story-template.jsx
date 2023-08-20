/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  active: {
    description: 'Active',
    control: 'boolean',
  },
  appearance: {
    description: 'Appearance',
    control: { type: 'select' },
    options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
  },
  busy: {
    description: 'Busy',
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
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  pressed: {
    description: 'Pressed',
    control: { type: 'select' },
    options: ['', false, true],
    type: {
      required: false,
    },
  },
  textContent: {
    description: 'Button text',
    control: 'text',
  },
  type: {
    control: { type: 'select' },
    options: ['', 'button', 'reset', 'submit'],
  },
  hint: {
    control: { type: 'select' },
    options: ['', 'danger', 'warning', 'ready'],
  },
  iconBefore: {
    description: 'Icon before textContent',
    control: { type: 'select' },
    options: ['', ...iconSet.map(({ id }) => id)],
  },
  iconAfter: {
    description: 'Icon after textContent',
    control: { type: 'select' },
    options: ['', ...iconSet.map(({ id }) => id)],
  },
};

export const defaultArgs = {
  active: false,
  appearance: '',
  busy: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hint: false,
  hover: false,
  pressed: '',
  textContent: '',
  type: 'button',
  iconBefore: '',
  iconAfter: '',
};

export const exampleArgs = {
  textContent: 'Read more...',
};

export const Alert = ({ children, icon = null, type }) => (
  <div
    className={clsx('utrecht-alert', {
      'utrecht-alert--error': type === 'error',
      'utrecht-alert--info': type === 'info',
      'utrecht-alert--ok': type === 'ok',
      'utrecht-alert--warning': type === 'warning',
    })}
  >
    {icon && <div className="utrecht-alert__icon">{icon}</div>}
    <div className="utrecht-alert__message" role="alert">
      {children}
    </div>
  </div>
);

export const Button = ({
  active = defaultArgs.active,
  appearance = defaultArgs.appearance,
  busy = defaultArgs.busy,
  children,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hint = defaultArgs.hint,
  hover = defaultArgs.hover,
  pressed = defaultArgs.pressed,
  textContent = defaultArgs.textContent,
  type = defaultArgs.type,
  iconBefore = defaultArgs.iconBefore,
  iconAfter = defaultArgs.iconAfter,
  ...restProps
}) => {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;

  return (
    <button
      className={clsx('utrecht-button', {
        'utrecht-button--active': active,
        'utrecht-button--busy': busy,
        'utrecht-button--hover': hover,
        'utrecht-button--focus': focus,
        'utrecht-button--focus-visible': focusVisible,
        'utrecht-button--disabled': disabled,
        'utrecht-button--pressed': pressed,
        'utrecht-button--primary-action': appearance === 'primary-action-button',
        'utrecht-button--secondary-action': appearance === 'secondary-action-button',
        'utrecht-button--subtle': appearance === 'subtle-button',
        'utrecht-button--danger': hint === 'danger',
        'utrecht-button--warning': hint === 'warning',
        'utrecht-button--ready': hint === 'ready',
      })}
      aria-disabled={disabled || null}
      aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
      type={type || null}
      {...restProps}
    >
      {iconBefore && <IconBefore />}
      {children}
      {textContent}
      {iconAfter && <IconAfter />}
    </button>
  );
};

export const ButtonGroup = ({ children, className, ...restProps }, ref) => (
  <p {...restProps} ref={ref} className={clsx('utrecht-button-group', className)}>
    {children}
  </p>
);

export default Button;
