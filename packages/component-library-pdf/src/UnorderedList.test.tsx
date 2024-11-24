/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Unordered list', () => {
  let sha256: string;

  beforeAll(async () => {
    ({ sha256 } = await renderPdf({
      id: 'pdf-unordered-list',
      render: () => (
        <UnorderedList>
          <UnorderedListItem>The quick brown fox jumps over the lazy dog</UnorderedListItem>
        </UnorderedList>
      ),
    }));
  });

  it('renders a <L> tag', async () => {
    expect(sha256).toBe('e5231e0bf1ee5a0586ac1844c507e98c992c5f913287d7d2dbca0f7f6ef9d32f');
  });

  describe('list item', () => {
    it('renders a <LI> tag', async () => {
      expect(sha256).toBe('e5231e0bf1ee5a0586ac1844c507e98c992c5f913287d7d2dbca0f7f6ef9d32f');
    });

    it('renders a <Lbl> tag with list item marker', async () => {
      expect(sha256).toBe('e5231e0bf1ee5a0586ac1844c507e98c992c5f913287d7d2dbca0f7f6ef9d32f');
    });

    it('renders a <LBody> tag with the text content', async () => {
      expect(sha256).toBe('e5231e0bf1ee5a0586ac1844c507e98c992c5f913287d7d2dbca0f7f6ef9d32f');
    });
  });
});
