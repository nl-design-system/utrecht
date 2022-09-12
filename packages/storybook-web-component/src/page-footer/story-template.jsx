/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'HTML content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
};

export const exampleArgs = {
  innerHTML: 'Footer content',
};

export const PageFooter = ({ innerHTML = defaultArgs.innerHTML }) => (
  <utrecht-page-footer>{parse(innerHTML)}</utrecht-page-footer>
);

export default PageFooter;
