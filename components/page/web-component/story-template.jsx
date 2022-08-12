/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parser from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'HTML page content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: `<utrecht-page-header>Header content</utrecht-page-header><utrecht-page-content>Page content</utrecht-page-content><utrecht-page-footer>Footer content</utrecht-page-footer>`,
};

export const Page = ({ innerHTML }) => (
  <utrecht-page>{innerHTML && typeof innerHTML === 'string' ? parser(innerHTML) : innerHTML}</utrecht-page>
);
