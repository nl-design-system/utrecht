/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Code, Paragraph } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Code', () => {
  it('renders a <Code> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-code',
      render: () => (
        <Paragraph>
          Use <Code>{'/* Hello world */'}</Code> to create a code comment.
        </Paragraph>
      ),
    });

    expect(sha256).toBe('f8104c20620bcf4c4e9a63f83c88d32841fef9f6ec481fb3de238d97997d134a');
  });
});
