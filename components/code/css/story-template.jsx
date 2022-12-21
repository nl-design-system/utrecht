/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { Link } from '../../link/css/story-template';
import { Paragraph } from '../../paragraph/css/story-template';

export const argTypes = {
  span: {
    description: 'Avoid the HTML code element',
    control: 'boolean',
  },
  textContent: {
    description: 'Code',
    control: 'text',
  },
};

export const defaultArgs = {
  span: false,
  textContent: '',
};
export const exampleArgs = {
  textContent: '<input type="url" value="https://example.fi/">',
};

export const Code = ({ span = defaultArgs.span, textContent = defaultArgs.textContent, className, children }) => {
  const attributes = {
    className: clsx('utrecht-code', className),
  };

  const Element = span ? 'span' : 'code';

  return (
    <Element {...attributes}>
      {children}
      {textContent}
    </Element>
  );
};

export const CodeInLink = ({ children, href, textContent }) => (
  <Link href={href}>
    <Code>
      {children}
      {textContent}
    </Code>
  </Link>
);

export const CodeInParagraph = () => (
  <Paragraph>
    {'Some input types and other attributes place limits on what values are valid for a given input. For example, '}
    <Code>{'<input type="number" min="2" max="10" step="2">'}</Code>
    {' means only the number 2, 4, 6, 8, or 10 are valid. Several errors could occur, including a '}
    <Code>{'rangeUnderflow'}</Code>
    {' error if the value is less than 2, '}
    <Code>{'rangeOverflow'}</Code>
    {' if greater than 10, '}
    <Code>{'stepMismatch'}</Code>
    {' if the value is a number between 2 and 10, but not an even integer (does not match the requirements of the '}
    <Code>{'step'}</Code>
    {' attribute), or '}
    <Code>{'typeMismatch'}</Code>
    {' if the value is not a number.'}
  </Paragraph>
);

export default Code;
