/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import parse from 'html-react-parser';
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
  asideHTML: '',
  innerHTML: '',
  navHTML: '',
};

export const exampleArgs = {
  innerHTML: `<h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1>`,
};

export const PageContent = ({
  asideHTML = defaultArgs.asideHTML,
  innerHTML = defaultArgs.innerHTML,
  navHTML = defaultArgs.navHTML,
}) => (
  <div className="utrecht-page-content">
    {navHTML && <nav className="utrecht-page-content__nav">{parse(navHTML)}</nav>}
    {innerHTML && <main className="utrecht-page-content__main">{parse(innerHTML)}</main>}
    {asideHTML && <aside className="utrecht-page-content__aside">{parse(asideHTML)}</aside>}
  </div>
);

export default PageContent;
