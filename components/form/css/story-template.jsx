/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  div: {
    description: 'Avoid the semantic HTML element <form>',
    control: 'boolean',
  },
  htmlContent: {
    description: 'Content of the form',
    control: 'text',
  },
};

export const defaultArgs = {
  div: false,
  htmlContent: '',
};

export const exampleArgs = {
  children: (
    <>
      <h1>Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </>
  ),
};

export const Form = ({ children, div = defaultArgs.div, htmlContent = defaultArgs.htmlContent }) => {
  const content = (
    <>
      {children}
      {parse(htmlContent)}
    </>
  );

  return div ? (
    <div className="utrecht-form">{content}</div>
  ) : (
    <form className="utrecht-form" method="POST" action=".">
      {content}
    </form>
  );
};

export default Form;
