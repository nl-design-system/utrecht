/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Heading 5', () => {
  it('renders a <H5> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-heading-5',
      render: () => (
        <>
          <Heading1>Heading 1: The quick brown fox jumps over the lazy dog</Heading1>
          <Heading2>Heading 2: The quick brown fox jumps over the lazy dog</Heading2>
          <Heading3>Heading 3: The quick brown fox jumps over the lazy dog</Heading3>
          <Heading4>Heading 4: The quick brown fox jumps over the lazy dog</Heading4>
          <Heading5>Heading 5: The quick brown fox jumps over the lazy dog</Heading5>
        </>
      ),
    });

    expect(sha256).toBe('0cc780670d80a4579ac73d6d61a026f9fec1d1a6e2fc0876068e6c26cce84df2');
  });
});
