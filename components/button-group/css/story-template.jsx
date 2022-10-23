/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  direction: {
    control: { type: 'select' },
    description: 'Direction',
    options: ['', 'horizontal', 'vertical'],
  },
  innerHTML: {
    description: 'HTML content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
  direction: '',
};

export const exampleArgs = {
  innerHTML: `<button class='utrecht-button utrecht-button--primary-action'>Save and continue</button><button class='utrecht-button utrecht-button--secondary-action'>Back</button>`,
};

export const ButtonGroup = ({ children, innerHTML = defaultArgs.innerHTML, direction }) => (
  <div
    className={clsx(
      'utrecht-button-group',
      direction === 'horizontal' && 'utrecht-button-group--horizontal',
      direction === 'vertical' && 'utrecht-button-group--vertical',
    )}
    role="group"
  >
    {children}
    {parse(innerHTML)}
  </div>
);
