/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Heading1, Heading2, Heading3 } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Heading 3', () => {
  it('renders a <H3> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-heading-3',
      render: () => (
        <>
          <Heading1>Heading 1: The quick brown fox jumps over the lazy dog</Heading1>
          <Heading2>Heading 2: The quick brown fox jumps over the lazy dog</Heading2>
          <Heading3>Heading 3: The quick brown fox jumps over the lazy dog</Heading3>
        </>
      ),
    });

    expect(sha256).toBe('dce041d710cc1e2b14f842806fd198b9ace85b34b92ed439ff2b54c9843e18a9');
  });
});
