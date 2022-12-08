/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';
import { Heading1 } from '../../heading-1/css/story-template';
import { Paragraph } from '../../paragraph/css/story-template';

export const argTypes = {
  div: {
    description: "The class name can't be used on the &lt;html> element",
    type: 'boolean',
  },
  children: {
    description: 'Content of the document',
  },
  lang: {
    description: 'Language of the document',
    control: 'text',
  },
};

export const defaultArgs = {
  div: true,
};

export const exampleArgs = {
  children: (
    <>
      <Heading1>Lorem ipsum</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    </>
  ),
  lang: 'la',
};

export const Document = ({ div = defaultArgs.div, children, lang = defaultArgs.lang }) => {
  const attributes = {
    className: 'utrecht-document',
    lang: lang || undefined,
  };

  return div ? (
    <div {...attributes}>{children}</div>
  ) : (
    <html {...attributes}>
      <head>
        <meta charset="utf-8" />
        <title>…</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Document;
