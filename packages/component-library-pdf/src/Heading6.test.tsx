/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Heading 6', () => {
  it('renders a <H6> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-heading-6',
      render: () => (
        <>
          <Heading1>Heading 1: The quick brown fox jumps over the lazy dog</Heading1>
          <Heading2>Heading 2: The quick brown fox jumps over the lazy dog</Heading2>
          <Heading3>Heading 3: The quick brown fox jumps over the lazy dog</Heading3>
          <Heading4>Heading 4: The quick brown fox jumps over the lazy dog</Heading4>
          <Heading5>Heading 5: The quick brown fox jumps over the lazy dog</Heading5>
          <Heading6>Heading 6: The quick brown fox jumps over the lazy dog</Heading6>
        </>
      ),
    });

    expect(sha256).toBe('518e7313d993ccc7e6b9f922aac4cc87ea31afaafe8a5740df0bdfab7196bff0');
  });
});
