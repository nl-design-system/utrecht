/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parser from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'HTML content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: 'Main content',
};

export const PageContent = ({ innerHTML = '' }) => <utrecht-page-content>{parser(innerHTML)}</utrecht-page-content>;

export default PageContent;
