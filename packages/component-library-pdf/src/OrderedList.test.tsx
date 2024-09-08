/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Ordered list', () => {
  let sha256: string;

  beforeAll(async () => {
    ({ sha256 } = await renderPdf({
      id: 'pdf-ordered-list',
      render: () => (
        <OrderedList>
          <OrderedListItem>The quick brown fox jumps over the lazy dog</OrderedListItem>
        </OrderedList>
      ),
    }));
  });

  it('renders a <L> tag', async () => {
    expect(sha256).toBe('051ffdb077ac93f772bd55f208bcf86a9c18d8c80da2e17ebba37665d7e1bdf6');
  });

  describe('list item', () => {
    it('renders a <LI> tag', async () => {
      expect(sha256).toBe('051ffdb077ac93f772bd55f208bcf86a9c18d8c80da2e17ebba37665d7e1bdf6');
    });

    it('renders a <Lbl> tag with list item counter', async () => {
      expect(sha256).toBe('051ffdb077ac93f772bd55f208bcf86a9c18d8c80da2e17ebba37665d7e1bdf6');
    });

    it('renders a <LBody> tag with the text content', async () => {
      expect(sha256).toBe('051ffdb077ac93f772bd55f208bcf86a9c18d8c80da2e17ebba37665d7e1bdf6');
    });
  });
});
