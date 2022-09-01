/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'HTML page content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
};

export const exampleArgs = {
  innerHTML: `<utrecht-page-header>Header content</utrecht-page-header><utrecht-page-content>Page content</utrecht-page-content><utrecht-page-footer>Footer content</utrecht-page-footer>`,
};

export const Page = ({ innerHTML = defaultArgs.innerHTML }) => <utrecht-page>{parse(innerHTML)}</utrecht-page>;
