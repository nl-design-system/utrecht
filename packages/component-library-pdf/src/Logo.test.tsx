/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Logo, LogoImage } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Logo', () => {
  it('renders a <Figure> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-logo',
      render: () => (
        <Logo>
          <LogoImage role="image" aria-label="logo gemeente Utrecht" />
        </Logo>
      ),
    });

    expect(sha256).toBe('TODO');
  });

  it('renders a text alternative for `<img al="Text alternative">`', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-logo-img',
      render: () => (
        <Logo>
          <img alt="Text alternative" src="" />
        </Logo>
      ),
    });

    expect(sha256).toBe('TODO');
  });

  it('renders a text alternative for `<svg role="image" aria-label="Text alternative">`', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-logo-svg',
      render: () => (
        <Logo>
          <LogoImage role="image" aria-label="logo gemeente Utrecht" />
        </Logo>
      ),
    });

    expect(sha256).toBe('TODO');
  });

  describe('with caption', () => {
    it('renders a <Caption> tag', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-logo-caption',
        render: () => (
          <Logo caption="gemeente Utrecht">
            <LogoImage role="image" aria-label="logo gemeente Utrecht" />
          </Logo>
        ),
      });

      expect(sha256).toBe('TODO');
    });
  });
});
