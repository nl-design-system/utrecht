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

    expect(sha256).toBe('b85b61434a0bfd56330b142943e7d655d557d39f05136310ae301536971a17bf');
  });
});
