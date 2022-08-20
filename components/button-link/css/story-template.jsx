/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

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
  textContent: {
    description: 'Link text',
    type: {
      name: 'string',
      required: true,
    },
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
  textContent: 'Start je aanvraag',
};

export const ButtonLink = ({
  appearance,
  external = false,
  hover = false,
  href = '',
  focus = false,
  focusVisible = false,
  textContent = defaultArgs.textContent,
  keyboardSupport = false,
}) => (
  <a
    role={keyboardSupport ? 'button' : undefined}
    href={href}
    className={clsx('utrecht-button-link', 'utrecht-button-link--html-a', {
      'utrecht-button-link--hover': hover,
      'utrecht-button-link--focus': focus,
      'utrecht-button-link--focus-visible': focusVisible,
      'utrecht-button-link--primary-action': appearance === 'primary-action-button',
      'utrecht-button-link--secondary-action': appearance === 'secondary-action-button',
      'utrecht-button-link--subtle': appearance === 'subtle-button',
    })}
    rel={external && 'external noopener noreferrer'}
  >
    {textContent}
  </a>
);
