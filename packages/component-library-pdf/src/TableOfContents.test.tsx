/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import {
  Heading1,
  Heading2,
  TableOfContents,
  TableOfContentsLink,
  TableOfContentsList,
  TableOfContentsListItem,
} from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Table of Contents', () => {
  let sha256: string;

  beforeAll(async () => {
    ({ sha256 } = await renderPdf({
      id: 'pdf-table-of-contents',
      render: () => (
        <>
          <Heading1>Document Title</Heading1>
          <TableOfContents>
            <Heading2>Table of Contents</Heading2>
            <TableOfContentsList>
              <TableOfContentsListItem>
                <TableOfContentsLink href="#chapter-1" label="1. ">
                  The quick brown fox jumps over the lazy dog
                </TableOfContentsLink>
              </TableOfContentsListItem>
            </TableOfContentsList>
          </TableOfContents>
          <Heading2 id="chapter-1">The quick brown fox jumps over the lazy dog</Heading2>
        </>
      ),
    }));
  });

  it('renders a <TOC> tag', async () => {
    expect(sha256).toBe('bd73ea7ffb47470d26b64dae2336118acc8b7448190b63c399de448bb09a14c2');
  });

  describe('list item', () => {
    it('renders a <TOCI> tag', async () => {
      expect(sha256).toBe('bd73ea7ffb47470d26b64dae2336118acc8b7448190b63c399de448bb09a14c2');
    });

    it('renders a <Reference> tag', async () => {
      expect(sha256).toBe('bd73ea7ffb47470d26b64dae2336118acc8b7448190b63c399de448bb09a14c2');
    });

    it('renders a <Link> tag', async () => {
      expect(sha256).toBe('bd73ea7ffb47470d26b64dae2336118acc8b7448190b63c399de448bb09a14c2');
    });

    it('renders a <Lbl> tag with chapter number', async () => {
      expect(sha256).toBe('bd73ea7ffb47470d26b64dae2336118acc8b7448190b63c399de448bb09a14c2');
    });

    it('renders a <Span> tag with the text content', async () => {
      expect(sha256).toBe('bd73ea7ffb47470d26b64dae2336118acc8b7448190b63c399de448bb09a14c2');
    });
  });
});
