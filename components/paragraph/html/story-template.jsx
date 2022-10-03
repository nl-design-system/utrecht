/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  content: {
    description: 'Paragraph text',
    control: 'text',
  },
  lead: {
    description: 'Lead paragraph',
    control: 'boolean',
  },
  small: {
    description: 'Small print',
    control: 'boolean',
  },
};

export const defaultArgs = {
  textContent: '',
  lead: false,
  small: false,
};

export const exampleArgs = {
  textContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const Paragraph = ({
  textContent = defaultArgs.textContent,
  lead = defaultArgs.lead,
  small = defaultArgs.small,
}) => (
  <section className="utrecht-html">
    <p className={lead || null}>{small ? <small>{textContent}</small> : textContent}</p>
  </section>
);

export const Paragraphs = ({ items = [] }) => <section className="utrecht-html">{items.map(Paragraph)}</section>;

export default Paragraph;
