/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Textarea } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Textarea', () => {
  it('renders a <Form> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-textarea',
      render: () => <Textarea />,
    });

    expect(sha256).toBe('4528d6e7d61c6634df85202d975d6aba06904c183bcd17d46fef46b18314390c');
  });
});
