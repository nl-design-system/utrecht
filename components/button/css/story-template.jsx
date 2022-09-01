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

export const ButtonTable = ({
  textContent = '',
  defaultButton = true,
  primaryActionButton = false,
  secondaryActionButton = false,
  subtleButton = false,
  icon = false,
}) => {
  const appearances = [
    defaultButton && 'button',
    primaryActionButton && 'primary-action-button',
    secondaryActionButton && 'secondary-action-button',
    subtleButton && 'subtle-button',
  ].filter(Boolean);
  return (
    <table className="utrecht-table" style={{ 'inline-size': 'auto' }}>
      <thead className="utrecht--table__header">
        <tr className="utrecht-table__row">
          <th className="utrecht-table__header-cell"></th>
          <th className="utrecht-table__header-cell">Default</th>
          <th className="utrecht-table__header-cell">Active</th>
          <th className="utrecht-table__header-cell">Hover</th>
          <th className="utrecht-table__header-cell">Focus</th>
          <th className="utrecht-table__header-cell">Focus visible</th>
          <th className="utrecht-table__header-cell">Disabled</th>
          {icon && <th className="utrecht-table__header-cell">With icon</th>}
        </tr>
      </thead>
      <tbody className="utrecht--table__body">
        {appearances.map((appearance) => (
          <tr className="utrecht-table__row" key={appearance}>
            <th className="utrecht-table__header-cell">{appearance}</th>
            <td className="utrecht-table__cell">{Button({ appearance, textContent })}</td>
            <td className="utrecht-table__cell">{Button({ appearance, textContent, active: true })}</td>
            <td className="utrecht-table__cell">{Button({ appearance, textContent, hover: true })}</td>
            <td className="utrecht-table__cell">{Button({ appearance, textContent, focus: true })}</td>
            <td className="utrecht-table__cell">
              {Button({ appearance, textContent, focus: true, focusVisible: true })}
            </td>
            <td className="utrecht-table__cell">{Button({ appearance, textContent, disabled: true })}</td>
            {icon && (
              <td className="utrecht-table__cell">
                {Button({
                  appearance,
                  textContent: [textContent, <utrecht-icon-arrow></utrecht-icon-arrow>],
                })}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Button;
