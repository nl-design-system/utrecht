/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
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
  external: false,
  hover: false,
  href: '',
  focus: false,
  focusVisible: false,
  textContent: 'Start je aanvraag',
};

export const ButtonLink = ({
  external = false,
  hover = false,
  href = '',
  focus = false,
  focusVisible = false,
  textContent = defaultArgs.textContent,
}) => (
  <a
    role="button"
    href={href}
    className={clsx(
      'utrecht-button-link',
      hover && 'utrecht-button-link--hover',
      focus && 'utrecht-button-link--focus',
      focusVisible && 'utrecht-button-link--focus-visible',
    )}
    rel={external && 'external noopener noreferrer'}
  >
    {textContent}
  </a>
);
