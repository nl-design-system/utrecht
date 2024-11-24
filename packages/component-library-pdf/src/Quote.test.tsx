/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Paragraph } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Quote', () => {
  it('renders a <Quote> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-quote',
      render: () => (
        <Paragraph>
          <q>The quick brown fox jumps over the lazy dog.</q>
        </Paragraph>
      ),
    });

    expect(sha256).toBe('010c106d03fb3d51fe37e09b54fc21a3a72149e92f8a3cf3d51f6c4836169fe2');
  });
});
