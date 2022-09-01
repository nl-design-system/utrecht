/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
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
  icon: {
    description: 'Icon',
    control: { type: 'select' },
    options: ['', ...iconSet.map(({ id }) => id)],
  },
  textContent: {
    description: 'Link text',
    control: 'text',
  },
};

export const defaultArgs = {
  focus: false,
  focusVisible: false,
  href: '',
  hover: false,
  textContent: '',
  icon: null,
};

export const exampleArgs = {
  href: '#',
  icon: 'utrecht-icon-afval',
  textContent: 'Afval',
};

export const ToptaskLink = ({
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hover = defaultArgs.hover,
  href = defaultArgs.href,
  icon = defaultArgs.icon,
  textContent = defaultArgs.textContent,
}) => (
  <a
    href={href}
    className={clsx('utrecht-toptask-link', {
      'utrecht-toptask-link--hover': hover,
      'utrecht-toptask-link--focus': focus,
      'utrecht-toptask-link--focus-visible': focusVisible,
    })}
  >
    {icon && parse(`<${icon} class="utrecht-toptask-link__icon"></${icon}>`)}
    <span className="utrecht-toptask-link__title">{textContent}</span>
  </a>
);

export default ToptaskLink;
