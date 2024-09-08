/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Heading1 } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Heading 1', () => {
  it('renders a <H1> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-heading-1',
      render: () => <Heading1>Heading 1: The quick brown fox jumps over the lazy dog</Heading1>,
    });

    expect(sha256).toBe('f7922ee3cbbe73b7aff8b2532aedacb6a254f2b673591b360b6656154a18b6ba');
  });
});
