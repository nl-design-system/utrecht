/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Paragraph text',
    control: 'text',
  },
  lead: {
    description: 'Lead paragraph',
    control: 'boolean',
  },
};

export const defaultArgs = {
  textContent: '',
  lead: false,
};

export const exampleArgs = {
  textContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const Paragraph = ({ lead = defaultArgs.lead, textContent = defaultArgs.textContent }) => (
  <utrecht-paragraph lead={lead || null}>{textContent}</utrecht-paragraph>
);

export const Paragraphs = ({ items = [] }) => <>{items.map(Paragraph)}</>;

export default Paragraph;
