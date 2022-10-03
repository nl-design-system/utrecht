/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'Paragraph innerHTML',
    control: 'text',
  },
  lead: {
    description: 'Lead paragraph',
    control: 'boolean',
  },
  small: {
    description: 'Paragraph with small print',
    control: 'boolean',
  },
};

export const defaultArgs = {
  distanced: false,
  lead: false,
  innerHTML: '',
  small: false,
};

export const exampleArgs = {
  innerHTML:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export const Paragraph = ({
  distanced = defaultArgs.distanced,
  innerHTML = defaultArgs.innerHTML,
  lead = defaultArgs.lead,
  small = defaultArgs.small,
}) => {
  const content = parse(innerHTML);
  return (
    <p
      className={clsx('utrecht-paragraph', {
        'utrecht-paragraph--distanced': distanced,
        'utrecht-paragraph--lead': lead,
        'utrecht-paragraph--small': small,
      })}
    >
      {small ? <small className="utrecht-paragraph__small">{content}</small> : content}
    </p>
  );
};

export const Paragraphs = ({ items = [] }) => (
  <div>{[items.map((args, index) => <Paragraph key={index} {...args} />)]}</div>
);

export default Paragraph;
