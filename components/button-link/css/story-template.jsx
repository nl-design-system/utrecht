/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  appearance: {
    description: 'Appearance',
    control: { type: 'select' },
    options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
  },
  external: {
    description: 'External',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  keyboardSupport: {
    description: 'Supports activation using both Enter and Space',
    control: 'boolean',
  },
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  href: {
    description: 'Target URL',
    type: {
      name: 'string',
      required: true,
    },
  },
  placeholder: {
    description: 'Placeholder for a link',
    control: 'boolean',
  },
  textContent: {
    description: 'Link text',
    type: {
      name: 'string',
      required: true,
    },
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
  appearance: '',
  external: false,
  hover: false,
  href: '',
  focus: false,
  focusVisible: false,
  keyboardSupport: false,
  placeholder: false,
  textContent: '',
  iconBefore: '',
  iconAfter: '',
};
export const exampleArgs = {
  href: 'https://example.com/',
  textContent: 'Start je aanvraag',
};
export const ButtonLink = ({
  appearance = defaultArgs.appearance,
  external = defaultArgs.external,
  hover = defaultArgs.hover,
  href = defaultArgs.href,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  placeholder = defaultArgs.placeholder,
  textContent = defaultArgs.textContent,
  keyboardSupport = defaultArgs.keyboardSupport,
  iconBefore = defaultArgs.iconBefore,
  iconAfter = defaultArgs.iconAfter,
}) => {
  const IconBefore = iconBefore;
  const IconAfter = iconAfter;

  return (
    <a
      role={keyboardSupport ? 'button' : placeholder ? 'link' : undefined}
      href={placeholder ? undefined : href}
      className={clsx('utrecht-button-link', 'utrecht-button-link--html-a', {
        'utrecht-button-link--hover': hover,
        'utrecht-button-link--focus': focus,
        'utrecht-button-link--focus-visible': focusVisible,
        'utrecht-button-link--primary-action': appearance === 'primary-action-button',
        'utrecht-button-link--secondary-action': appearance === 'secondary-action-button',
        'utrecht-button-link--subtle': appearance === 'subtle-button',
        'utrecht-button-link--placeholder': placeholder,
      })}
      aria-disabled={placeholder ? 'true' : undefined}
      rel={external ? 'external noopener noreferrer' : undefined}
    >
      {iconBefore && <IconBefore />}
      {textContent}
      {iconAfter && <IconAfter />}
    </a>
  );
};
