/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Paragraph } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Section', () => {
  it('renders a <Sect> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-section',
      render: () => (
        <section>
          <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
        </section>
      ),
    });

    expect(sha256).toBe('7810a4401a93ea0583e6be662f363d27028fb6025c4ab830ef75dec5e6e01d77');
  });
});
