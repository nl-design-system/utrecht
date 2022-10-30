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
  div: {
    description: 'Avoid the semantic HTML element <p>',
    type: 'boolean',
  },
  innerHTML: {
    description: 'HTML content',
    control: 'text',
  },
};

export const defaultArgs = {
  div: false,
  innerHTML: '',
  direction: '',
};

export const exampleArgs = {
  innerHTML: `<button class='utrecht-button utrecht-button--primary-action'>Save and continue</button><button class='utrecht-button utrecht-button--secondary-action'>Back</button>`,
};

export const ButtonGroup = ({ children, div = defaultArgs.div, innerHTML = defaultArgs.innerHTML, direction }) => {
  const classNames = [
    'utrecht-button-group',
    direction === 'horizontal' && 'utrecht-button-group--horizontal',
    direction === 'vertical' && 'utrecht-button-group--vertical',
  ];

  const attributes = {
    className: clsx(classNames),
    role: 'group',
  };

  const content = (
    <>
      {children}
      {parse(innerHTML)}
    </>
  );

  return div ? <div {...attributes}>{content}</div> : <p {...attributes}>{content}</p>;
};

export default ButtonGroup;
