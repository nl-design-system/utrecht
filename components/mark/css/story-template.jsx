/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  print: {
    description: 'Appearance in print',
    control: 'boolean',
  },
  windowsHighContrast: {
    description: 'Appearance in Windows High Contrast mode',
    control: 'boolean',
  },
  span: {
    description: 'Avoid the HTML span element',
    control: 'boolean',
  },
  textContent: {
    description: 'Set the text content',
    control: 'text',
  },
};

export const defaultArgs = {
  print: false,
  textContent: '',
  windowsHighContrast: false,
};

export const exampleArgs = { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' };

export const Mark = ({
  children,
  print = defaultArgs.print,
  span = defaultArgs.span,
  textContent = defaultArgs.textContent,
  windowsHighContrast = defaultArgs.windowsHighContrast,
}) => {
  const content = (
    <>
      {textContent}
      {children}
    </>
  );

  const attributes = {
    className: clsx('utrecht-mark', {
      'utrecht-mark--print': print,
      'utrecht-mark--windows-high-contrast': windowsHighContrast,
    }),
  };

  return span ? <span {...attributes}>{content}</span> : <mark {...attributes}>{content}</mark>;
};

export default Mark;
