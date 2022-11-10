/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parse from 'html-react-parser';
import React from 'react';
import { Heading1 } from '../../heading-1/css/story-template';
import { Paragraph } from '../../paragraph/css/story-template';

export const argTypes = {
  htmlContent: {
    description: 'Content of the article',
    control: 'text',
  },
};

export const defaultArgs = {
  htmlContent: '',
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
};

export const Article = ({ children, htmlContent = defaultArgs.htmlContent }) => (
  <div className="utrecht-article">
    {parse(htmlContent)}
    {children}
  </div>
);

export default Article;
