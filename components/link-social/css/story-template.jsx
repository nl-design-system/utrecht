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
    control: 'text',
  },
  icon: {
    description: 'Distance the element from adjacent content',
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
};

export const exampleArgs = {
  href: 'https://www.facebook.com/GemeenteUtrecht',
  icon: 'utrecht-icon-facebook',
};

export const SocialMediaLink = ({
  href = defaultArgs.href,
  icon = defaultArgs.icon,
  distanced = defaultArgs.distanced,
}) => (
  <a href={href} className={clsx('utrecht-link-social', distanced && 'utrecht-link-social--distanced')}>
    {parse(`<${icon} class="utrecht-link-social__icon"></${icon}>`)}
  </a>
);

export const SocialMediaLinkList = ({ links }) =>
  links.map((link) => ({ ...link, distanced: true })).map(SocialMediaLink);

export default SocialMediaLink;
