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

export const defaultArgs = { innerHTML: '' };

export const exampleArgs = {
  innerHTML: 'Header content',
};

export const PageHeader = ({ innerHTML = defaultArgs.innerHTML }) => (
  <utrecht-page-header>{parse(innerHTML)}</utrecht-page-header>
);
