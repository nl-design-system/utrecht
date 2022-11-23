/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { Heading2 } from '../../heading-2/css/story-template';
import { Paragraph } from '../../paragraph/css/story-template';

export const argTypes = {
  aside: {
    description: 'Aside',
    control: { type: 'boolean' },
  },
  children: {
    description: 'HTML content of the spotlight',
    control: 'text',
  },
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['', 'info', 'warning'],
  },
};

export const defaultArgs = {
  aside: false,
  children: '',
  type: '',
};

export const exampleArgs = {
  children: (
    <>
      <Heading2>Lorem ipsum</Heading2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    </>
  ),
};

export const SpotlightSection = ({ aside = defaultArgs.aside, children, type = defaultArgs.type }) => {
  const attributes = {
    className: clsx('utrecht-spotlight-section', {
      'utrecht-spotlight-section--info': type === 'info',
      'utrecht-spotlight-section--warning': type === 'warning',
    }),
  };
  return aside ? <aside {...attributes}>{children}</aside> : <section {...attributes}>{children}</section>;
};

export default SpotlightSection;
