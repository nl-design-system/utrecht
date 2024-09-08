/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import { Paragraph } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Language span', () => {
  let sha256: string;

  beforeAll(async () => {
    ({ sha256 } = await renderPdf({
      id: 'pdf-span-lang',
      render: () => (
        <Paragraph>
          Learn about <span lang="fr">joi de vivre</span>, an essential foreign phrase!
        </Paragraph>
      ),
    }));
  });

  it('renders a <Span> tag', async () => {
    expect(sha256).toBe('99db074fa02bc374efb1b74f388c93627100b0048e04dd986e003ab0ae88ea92');
  });

  it('renders a <Span> tag with the language set to French', async () => {
    expect(sha256).toBe('99db074fa02bc374efb1b74f388c93627100b0048e04dd986e003ab0ae88ea92');
  });
});
