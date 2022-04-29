import { MDXProvider } from '@mdx-js/react'
import { Heading2 } from '@utrecht/component-library-react/Heading2'
import { Heading3 } from '@utrecht/component-library-react/Heading3'
import { Heading4 } from '@utrecht/component-library-react/Heading4'
import { Heading5 } from '@utrecht/component-library-react/Heading5'
import { Heading6 } from '@utrecht/component-library-react/Heading6'
import React from 'react'

const resolveUrl = (from, to) => {
  const resolvedUrl = new URL(to, new URL(from, 'resolve://pathname/'))
  if (resolvedUrl.protocol === 'resolve:') {
    const { pathname, search, hash } = new URL(to, new URL(from, 'http://example.com/'))
    return pathname + search + hash
  }
  return resolvedUrl.toString()
}

const mapHeadings = {
  1: {}, // No mapping needed
  2: { h1: Heading2, h2: Heading3, h3: Heading4, h4: Heading5, h5: Heading6 },
  3: { h1: Heading3, h2: Heading4, h3: Heading5, h4: Heading6, h5: Heading6 },
  4: { h1: Heading4, h2: Heading5, h3: Heading6, h4: Heading6, h5: Heading6 },
  5: { h1: Heading5, h2: Heading6, h3: Heading6, h4: Heading6, h5: Heading6 },
  6: { h1: Heading6, h2: Heading6, h3: Heading6, h4: Heading6, h5: Heading6 },
}

const addBaseUrl = baseUrl => {
  return {
    img: ({ src, ...restProps }) => <img {...restProps} src={resolveUrl(baseUrl, src)}></img>,
  }
}

export const Markdown = ({ children, headingLevel = 1, baseUrl = '' }) => (
  <MDXProvider components={{ ...mapHeadings[headingLevel], ...addBaseUrl(baseUrl) }}>{children}</MDXProvider>
)
