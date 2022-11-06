/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { Paragraph } from '../../paragraph/css/story-template';

export const argTypes = {
  textContent: {
    description: 'Set the text content',
    control: 'text',
  },
};

export const storyArgTypes = {
  ...argTypes,
  lang: {
    description: 'Language of the text',
    control: 'text',
  },
};

export const defaultArgs = {
  lang: 'en',
  textContent: '',
};

export const exampleArgs = { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' };

export const Quote = ({ children, textContent = defaultArgs.textContent }) => (
  <q className={clsx('utrecht-quote')}>
    {children}
    {textContent}
  </q>
);

export const ParagraphWithQuote = ({ lang, ...restProps }) => (
  <Paragraph lang={lang}>
    <Quote {...restProps} />
  </Paragraph>
);

export default Quote;
