/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {};

export const defaultArgs = {};

export const exampleArgs = { value: 'The Quick Brown Fox Jumps Over The Lazy Dog' };

export const TextboxAddon = ({ className, ...restProps }) => (
  <span {...restProps} className={clsx('utrecht-textbox-addon', className)} />
);

export default TextboxAddon;
