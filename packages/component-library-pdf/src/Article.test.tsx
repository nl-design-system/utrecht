/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Article, Paragraph } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Article', () => {
  it('renders a <Art> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-article',
      render: () => (
        <Article>
          <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
        </Article>
      ),
    });

    expect(sha256).toBe('3a94e1e570c85d3c0d1c35589b65a6f1a690e8c581bed5a217d4713abc2d1dac');
  });
});
