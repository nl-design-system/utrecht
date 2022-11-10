/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
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
  textContent: '',
};

export const exampleArgs = { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' };

export const Mark = ({ children, span = defaultArgs.span, textContent = defaultArgs.textContent }) => {
  const content = (
    <>
      {textContent}
      {children}
    </>
  );

  return span ? (
    <mark className={clsx('utrecht-mark')}>{content}</mark>
  ) : (
    <span className={clsx('utrecht-mark')}>{content}</span>
  );
};

export default Mark;
