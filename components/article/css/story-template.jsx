/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parser from 'html-react-parser';
import React from 'react';

export const argTypes = {
  htmlContent: {
    description: 'Content of the article',
    control: 'text',
  },
};

export const defaultArgs = {
  htmlContent: `<h1>Lorem ipsum</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
};

export const Article = ({ htmlContent = `<h1>Hello</h1><p>World</p>` }) => (
  <div class="utrecht-article">{parser(htmlContent)}</div>
);

export default Article;
