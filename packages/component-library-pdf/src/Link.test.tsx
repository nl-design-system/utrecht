/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Link, Paragraph } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Link', () => {
  it('renders a <Link> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-link',
      render: () => (
        <Paragraph>
          Go to <Link href="https://example.com/">example.com</Link>.
        </Paragraph>
      ),
    });

    expect(sha256).toBe('cfb53b1c5cdc2d5efc4b2cc2c933bfb8ef8d9fee0ec9ce7c2897f080189c9369');
  });
});
