/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
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
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  icon: {
    description: 'Icon',
    control: { type: 'select' },
    options: ['', ...iconSet.map(({ id }) => id)],
  },
  label: {
    description: 'Label',
    control: 'text',
  },
};

export const defaultArgs = {
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  icon: null,
  label: '',
};

export const exampleArgs = {
  icon: 'utrecht-icon-zoomin',
};

export const MapControlButton = ({
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hover = defaultArgs.hover,
  label = defaultArgs.label,
  icon = defaultArgs.icon,
}) => (
  <button
    type="button"
    className={clsx('utrecht-mapcontrolbutton', {
      'utrecht-mapcontrolbutton--hover': hover,
      'utrecht-mapcontrolbutton--focus': focus,
      'utrecht-mapcontrolbutton--focus-visible': focusVisible,
      'utrecht-mapcontrolbutton--disabled': disabled,
    })}
    aria-disabled={disabled || null}
  >
    {icon && parse(`<${icon} class="utrecht-mapcontrolbutton__icon"></${icon}>`)}
    {label && <span className="utrecht-mapcontrolbutton__label">{label}</span>}
  </button>
);

export default MapControlButton;
