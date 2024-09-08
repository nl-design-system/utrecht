/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Heading1, Heading2 } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Heading 2', () => {
  it('renders a <H2> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-heading-2',
      render: () => (
        <>
          <Heading1>Heading 1: The quick brown fox jumps over the lazy dog</Heading1>
          <Heading2>Heading 2: The quick brown fox jumps over the lazy dog</Heading2>
        </>
      ),
    });

    expect(sha256).toBe('8facfd10a62f642565c95c1c69575d3cbc81f841c9a69fc230ec5d2e85410c4d');
  });
});
