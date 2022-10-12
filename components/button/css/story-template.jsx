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
  textContent: '',
  type: 'button',
  iconBefore: '',
  iconAfter: '',
};

export const exampleArgs = {
  textContent: 'Read more...',
};

export const Button = ({
  active = defaultArgs.active,
  appearance = defaultArgs.appearance,
  busy = defaultArgs.busy,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hint = defaultArgs.hint,
  hover = defaultArgs.hover,
  textContent = defaultArgs.textContent,
  type = defaultArgs.type,
  iconBefore = defaultArgs.iconBefore,
  iconAfter = defaultArgs.iconAfter,
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
        'utrecht-button--primary-action': appearance === 'primary-action-button',
        'utrecht-button--secondary-action': appearance === 'secondary-action-button',
        'utrecht-button--subtle': appearance === 'subtle-button',
        'utrecht-button--danger': hint === 'danger',
        'utrecht-button--warning': hint === 'warning',
        'utrecht-button--ready': hint === 'ready',
      })}
      aria-disabled={disabled || null}
      type={type || null}
    >
      {iconBefore && <IconBefore />}
      {textContent}
      {iconAfter && <IconAfter />}
    </button>
  );
};

const ButtonTableBody = ({ variants, textContent, icon }) => (
  <tbody className="utrecht--table__body">
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Default
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Active or Pressed
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent, active: true })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Hover
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent, hover: true })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Focus
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent, focus: true })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Focus visible
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          {Button({ ...variant, textContent, hover: true, focus: true, focusVisible: true })}
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Hover + Focus visible
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent, focus: true, focusVisible: true })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Disabled
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent, disabled: true })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Disabled + Hover
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent, disabled: true, hover: true })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Disabled + Focus
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">{Button({ ...variant, textContent, disabled: true, focus: true })}</td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell">Disabled + Focus visible</th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          {Button({ ...variant, textContent, disabled: true, focus: true, focusVisible: true })}
        </td>
      ))}
    </tr>
    {icon && (
      <tr>
        <th className="utrecht-table__header-cell">Icon</th>
        {variants.map((variant) => (
          <td className="utrecht-table__cell">
            {Button({
              ...variant,
              textContent: [textContent, <utrecht-icon-arrow></utrecht-icon-arrow>],
            })}
          </td>
        ))}
      </tr>
    )}
  </tbody>
);

export const ButtonTable = ({
  textContent = '',
  defaultButton = true,
  primaryActionButton = false,
  secondaryActionButton = false,
  subtleButton = false,
  dangerHint = false,
  warningHint = false,
  readyHint = false,
  icon = false,
}) => {
  const variants = [
    {
      appearance: '',
      enabled: defaultButton,
      title: 'Default',
    },
    {
      appearance: 'primary-action-button',
      enabled: primaryActionButton,
      title: 'Primary action',
    },
    {
      appearance: 'primary-action-button',
      hint: 'danger',
      enabled: primaryActionButton && dangerHint,
      title: 'Primary action + danger',
    },
    {
      appearance: 'primary-action-button',
      hint: 'warning',
      enabled: primaryActionButton && warningHint,
      title: 'Primary action + warning',
    },
    {
      appearance: 'primary-action-button',
      hint: 'ready',
      enabled: primaryActionButton && readyHint,
      title: 'Primary action + ready',
    },
    {
      appearance: 'secondary-action-button',
      enabled: secondaryActionButton,
      title: 'Secondary action',
    },
    {
      appearance: 'secondary-action-button',
      hint: 'danger',
      enabled: secondaryActionButton && dangerHint,
      title: 'Secondary action + danger',
    },
    {
      appearance: 'secondary-action-button',
      hint: 'warning',
      enabled: secondaryActionButton && warningHint,
      title: 'Secondary action + warning',
    },
    {
      appearance: 'secondary-action-button',
      hint: 'ready',
      enabled: secondaryActionButton && readyHint,
      title: 'Secondary action + ready',
    },
    {
      appearance: 'subtle-button',
      enabled: subtleButton,
      title: 'Subtle',
    },
    {
      appearance: 'subtle-button',
      hint: 'danger',
      enabled: subtleButton && dangerHint,
      title: 'Subtle + danger',
    },
    {
      appearance: 'subtle-button',
      hint: 'warning',
      enabled: subtleButton && warningHint,
      title: 'Subtle + warning',
    },
    {
      appearance: 'subtle-button',
      hint: 'ready',
      enabled: subtleButton && readyHint,
      title: 'Subtle + ready',
    },
  ].filter(({ enabled }) => enabled);

  return (
    <table className="utrecht-table" style={{ 'inline-size': 'auto' }}>
      <thead className="utrecht--table__header">
        <tr className="utrecht-table__row">
          <th></th>
          {variants.map(({ title }) => (
            <th className="utrecht-table__header-cell" scope="column">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <ButtonTableBody variants={variants} textContent={textContent} icon={icon} />
    </table>
  );
};

export default Button;
