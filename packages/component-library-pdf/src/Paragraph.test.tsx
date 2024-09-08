/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { Paragraph } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Paragraph', () => {
  it('renders a <P> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-paragraph',
      render: () => <Paragraph>The quick brown fox jumps over the lazy dog.</Paragraph>,
    });

    expect(sha256).toBe('47cf64f54c0d84db46429c50a46a25524c4e9bc3805bbe0a7d5442d1380f6776');
  });

  describe('paragraph with alternate language', () => {
    it('Language must be specifiable at tag level, in this case a paragraph with French text.', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-paragraph-lang',
        render: () => <Paragraph lang="fr">{'Portez ce vieux whisky au juge blond qui fume'}</Paragraph>,
      });

      expect(sha256).toBe('03d4ec73c4ee2d80042114abf6971f4a600f9eb75f90c822a8cbf642d1d7259f');
    });
  });

  describe('paragraph with alternate language and text direction', () => {
    it('Language and text direction must be specifiable at tag level, in this case a paragraph with Arabic text.', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-paragraph-lang-dir',
        render: () => (
          <Paragraph lang="ar" dir="rtl">
            {'نص حكيم له سر قاطع وذو شأن عظيم مكتوب على ثوب أخضر ومغلف بجلد أزرق'}
          </Paragraph>
        ),
      });

      expect(sha256).toBe('2f8ba7b0a61e97fcb3105f7ac6e6d5e2b215d40b7e33086758e570c9f4b119f5');
    });
  });

  describe('paragraph that spans multiple pages', () => {
    it('This PDF document should only contain one paragraph tag, spanning multiple pages.', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-paragraph-multiple-pages',
        render: () => <Paragraph>{'The quick brown fox jumps over the lazy dog. '.repeat(100)}</Paragraph>,
      });

      expect(sha256).toBe('29f5807ffd4cd97dc533b5f8d67ef9f349bc2e954c9330ea6c292de657696601');
    });
  });

  describe.skip('empty paragraph for visual space', () => {
    it('PDF ideally contains only two paragraph tags, but an additional tag for the empty paragraph typically is not counted as violation.', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-paragraph-empty',
        render: () => (
          <>
            <Paragraph>The quick brown fox jumps over the lazy dog.</Paragraph>
            <Paragraph>{'\u00A0'}</Paragraph>
            <Paragraph>The quick brown fox jumps over the lazy dog.</Paragraph>
          </>
        ),
      });

      expect(sha256).toBe('');
    });
  });
});
