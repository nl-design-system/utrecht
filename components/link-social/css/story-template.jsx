/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  distanced: {
    description: 'Distance the element from adjacent content',
    control: 'boolean',
  },
  href: {
    description: 'Target URL',
    type: { name: 'string', required: true },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  title: {
    description: 'Icon Description',
    type: { name: 'string', required: true },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  icon: {
    description: 'Demonstrate the social media icons',
    table: {
      category: 'Demo',
    },
    control: { type: 'select' },
    options: [
      '',
      'utrecht-icon-facebook',
      'utrecht-icon-instagram',
      'utrecht-icon-linkedin',
      'utrecht-icon-twitter',
      'utrecht-icon-whatsapp',
    ],
  },
};

export const defaultArgs = {
  distanced: false,
  href: '',
  icon: '',
  title: '',
};

export const exampleArgs = {
  href: 'https://www.facebook.com/GemeenteUtrecht',
  icon: 'utrecht-icon-facebook',
  title: 'Facebook',
};

export const SocialMediaLink = ({
  href = defaultArgs.href,
  icon = defaultArgs.icon,
  title = defaultArgs.title,
  distanced = defaultArgs.distanced,
}) => (
  <a href={href} className={clsx('utrecht-link-social', distanced && 'utrecht-link-social--distanced')} title={title}>
    {parse(`<${icon}></${icon}>`)}
  </a>
);
