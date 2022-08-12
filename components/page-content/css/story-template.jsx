/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parser from 'html-react-parser';
import React from 'react';

export const argTypes = {
  asideHTML: {
    description: 'Aside HTML content',
    control: 'text',
  },
  navHTML: {
    description: 'Navigation HTML content',
    control: 'text',
  },
  innerHTML: {
    description: 'HTML content',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: `<h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1>`,
};

export const PageContent = ({ asideHTML = null, innerHTML = '', navHTML = null }) => (
  <div className="utrecht-page-content">
    {navHTML && (
      <nav className="utrecht-page-content__nav">{typeof navHTML === 'string' ? parser(navHTML) : navHTML}</nav>
    )}
    {innerHTML && (
      <main className="utrecht-page-content__main">
        {typeof innerHTML === 'string' ? parser(innerHTML) : innerHTML}
      </main>
    )}
    {asideHTML && (
      <aside className="utrecht-page-content__aside">
        {typeof asideHTML === 'string' ? parser(asideHTML) : asideHTML}
      </aside>
    )}
  </div>
);

export default PageContent;
