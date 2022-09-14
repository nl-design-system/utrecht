/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
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
  socialMediaContent: {
    description: 'Display the social media content',
    table: {
      category: 'Demo',
    },
  },
};

export const exampleArgs = [
  {
    href: 'https://www.facebook.com/GemeenteUtrecht',
    icon: 'utrecht-icon-facebook',
    title: 'Facebook',
  },
];

export const ListSocial = ({ socialMediaContent = exampleArgs }) => (
  <ul className="utrecht-list-social">
    {socialMediaContent &&
      socialMediaContent.length > 0 &&
      socialMediaContent.map(({ icon, href, title, distanced }) => (
        <li className="utrecht-list-social__item">
          <a
            href={href}
            className={clsx('utrecht-link-social', distanced && 'utrecht-link-social--distanced')}
            title={title}
          >
            {parse(`<${icon}></${icon}>`)}
          </a>
        </li>
      ))}
  </ul>
);

export default ListSocial;
