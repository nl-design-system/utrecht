/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parser from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'HTML page content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: `<header class="utrecht-page-header">Header area</header><div className="utrecht-page-content"><main className="utrecht-page-content__main">Content area</main></div><footer class="utrecht-page-footer">Footer area</footer>`,
};

export const Page = ({ innerHTML }) => (
  <div class="utrecht-page">{innerHTML && typeof innerHTML === 'string' ? parser(innerHTML) : innerHTML}</div>
);

export default Page;
