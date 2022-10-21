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
  children: {
    description: 'HTML content of the alert',
    control: 'text',
  },
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['', 'error', 'info', 'ok', 'warning'],
  },
};

export const defaultArgs = {
  children: '',
  variant: '',
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

export const Alert = ({ children, icon = null, type }) => (
  <div
    className={clsx('utrecht-alert', {
      'utrecht-alert--error': type === 'error',
      'utrecht-alert--info': type === 'info',
      'utrecht-alert--ok': type === 'ok',
      'utrecht-alert--warning': type === 'warning',
    })}
  >
    {icon && <div className="utrecht-alert__icon">{icon}</div>}
    <div className="utrecht-alert__message" role="alert">
      {children}
    </div>
  </div>
);

export default Alert;
