/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'Surface content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
};

export const exampleArgs = {
  innerHTML: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Surface = ({ innerHTML = defaultArgs.innerHTML }) => (
  <div className={clsx('utrecht-surface')}>{parse(innerHTML)}</div>
);

export default Surface;
