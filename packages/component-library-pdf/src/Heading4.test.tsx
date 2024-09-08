/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Heading1, Heading2, Heading3, Heading4 } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Heading 4', () => {
  it('renders a <H4> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-heading-4',
      render: () => (
        <>
          <Heading1>Heading 1: The quick brown fox jumps over the lazy dog</Heading1>
          <Heading2>Heading 2: The quick brown fox jumps over the lazy dog</Heading2>
          <Heading3>Heading 3: The quick brown fox jumps over the lazy dog</Heading3>
          <Heading4>Heading 4: The quick brown fox jumps over the lazy dog</Heading4>
        </>
      ),
    });

    expect(sha256).toBe('16f18aaec4180ddb54c99066f125298f980dfd00fc3ef9d0113d094fd27498eb');
  });
});
