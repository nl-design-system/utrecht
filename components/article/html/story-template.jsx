/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parser from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'Content of the article',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
};

export const exampleArgs = {
  innerHTML: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Article = ({ innerHTML = defaultArgs.innerHTML }) => (
  <div class="utrecht-html">
    <article>{parser(innerHTML)}</article>
  </div>
);

export default Article;
