/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  div: {
    description: 'Avoid the HTML pre element',
    control: 'boolean',
  },
  textContent: {
    description: 'Code',
    control: 'text',
  },
};

export const defaultArgs = {
  div: false,
  textContent: '',
};
export const exampleArgs = {
  textContent: `<!DOCTYPE html>
  <html lang="nl" dir="ltr">
    <head>
      <title>NL Design System</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <h1>NL Design System</h1>
    </body>
  </html>
  `,
};

export const CodeBlock = ({ div = defaultArgs.div, textContent = defaultArgs.textContent, className, children }) => {
  const attributes = {
    className: clsx('utrecht-code-block', className),
  };

  return div ? (
    <div {...attributes}>
      {children}
      {textContent}
    </div>
  ) : (
    <pre {...attributes}>
      <code className="utrecht-code-block__content">
        {children}
        {textContent}
      </code>
    </pre>
  );
};

export default CodeBlock;
