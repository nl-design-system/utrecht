import { MDXProvider } from '@mdx-js/react';
import React from 'react';

const h2 = ({ children }) => <h2>{children}</h2>;
const h3 = ({ children }) => <h3>{children}</h3>;
const h4 = ({ children }) => <h4>{children}</h4>;
const h5 = ({ children }) => <h5>{children}</h5>;
const h6 = ({ children }) => <h6>{children}</h6>;

const mapHeadings = {
  1: {}, // No mapping needed
  2: { h1: h2, h2: h3, h3: h4, h4: h5, h5: h6 },
  3: { h1: h3, h2: h4, h3: h5, h4: h6, h5: h6 },
  4: { h1: h4, h2: h5, h3: h6, h4: h6, h5: h6 },
  5: { h1: h5, h2: h6, h3: h6, h4: h6, h5: h6 },
  6: { h1: h6, h2: h6, h3: h6, h4: h6, h5: h6 },
};

export const Markdown = ({ children, headingLevel = 1 }) => (
  <MDXProvider components={mapHeadings[headingLevel] || {}}>{children}</MDXProvider>
);
