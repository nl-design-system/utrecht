/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'HTML page content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
};

export const exampleArgs = {
  innerHTML: `<header class="utrecht-page-header">Header area</header><div className="utrecht-page-content"><main className="utrecht-page-content__main">Content area</main></div><footer class="utrecht-page-footer">Footer area</footer>`,
};

export const Page = ({ innerHTML = defaultArgs.innerHTML }) => <div className="utrecht-page">{parse(innerHTML)}</div>;

export default Page;
