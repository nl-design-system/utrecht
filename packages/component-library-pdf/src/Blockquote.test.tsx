/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Blockquote, Paragraph } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Blockquote', () => {
  it('renders a <BlockQuote> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-blockquote',
      render: () => (
        <Blockquote>
          <Paragraph>The quick brown fox jumps over the lazy dog.</Paragraph>
        </Blockquote>
      ),
    });

    expect(sha256).toBe('1565b0f7dd9ae4121654f76836cba952321e1d3110c7a910f2563d18a664eda8');
  });
});
