/* eslint-env jest */
/* eslint-disable react/no-unescaped-entities */

import { describe, expect, it } from '@jest/globals';
import { Heading1 } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Page', () => {
  it('can be configured to English', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-page-lang-en',
      render: () => <Heading1>The quick brown fox jumps over the lazy dog</Heading1>,
      lang: 'en',
    });

    expect(sha256).toBe('31e87dc3502014e56f8b59e9b7ecc33a326906aac457e14e022023a06d222b9e');
  });

  it('can be configured to Dutch', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-page-lang-nl',
      render: () => <Heading1>Pa's wijze lynx bezag vroom het fikse aquaduct</Heading1>,
      lang: 'nl',
    });

    expect(sha256).toBe('ab1213ac7be61428181ff69098273abce52adbaf75c1f2c00619360b1a49a8d2');
  });
});
