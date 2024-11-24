/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
} from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Heading with variable heading level', () => {
  it.skip('renders a <H7> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-heading',
      render: () => (
        <>
          <Heading1>Heading 1: The quick brown fox jumps over the lazy dog</Heading1>
          <Heading2>Heading 2: The quick brown fox jumps over the lazy dog</Heading2>
          <Heading3>Heading 3: The quick brown fox jumps over the lazy dog</Heading3>
          <Heading4>Heading 4: The quick brown fox jumps over the lazy dog</Heading4>
          <Heading5>Heading 5: The quick brown fox jumps over the lazy dog</Heading5>
          <Heading6>Heading 6: The quick brown fox jumps over the lazy dog</Heading6>
          <Paragraph role="heading" aria-level={7}>
            Heading 7: The quick brown fox jumps over the lazy dog
          </Paragraph>
        </>
      ),
    });

    expect(sha256).toBe('');
  });
});
