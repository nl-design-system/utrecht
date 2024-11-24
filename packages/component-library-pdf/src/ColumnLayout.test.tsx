/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import { ColumnLayout, Paragraph } from '@utrecht/component-library-react/dist/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Column Layout', () => {
  describe('with one paragraph spanning multiple columns and multiple pages', () => {
    describe('default configuration', () => {
      let sha256: string;

      beforeAll(async () => {
        ({ sha256 } = await renderPdf({
          id: 'pdf-column-layout',
          render: () => (
            <ColumnLayout>
              <Paragraph>{'The quick brown fox jumps over the lazy dog. '.repeat(100)}</Paragraph>
            </ColumnLayout>
          ),
        }));
      });

      it('the file must contain one `<P>` tag, containing all text spanning multiple columns', async () => {
        expect(sha256).toBe('c3e93b12aaf33634b4951c337efc4e802640e156961d69edd2875f929efa68cc');
      });

      it('renders 2 columns', async () => {
        expect(sha256).toBe('c3e93b12aaf33634b4951c337efc4e802640e156961d69edd2875f929efa68cc');
      });
    });

    describe('configured for 3 columns in print', () => {
      it('renders 3 columns', async () => {
        const { sha256 } = await renderPdf({
          id: 'pdf-column-layout-column-count-3',
          render: () => (
            <ColumnLayout
              style={
                {
                  '--utrecht-column-layout-print-column-count': 3,
                } as any
              }
            >
              <Paragraph>{'The quick brown fox jumps over the lazy dog. '.repeat(100)}</Paragraph>
            </ColumnLayout>
          ),
        });

        expect(sha256).toBe('70e639763a526bca6a335629ace1d4e1c70ed2cb58be618456448be6cc4d7b7a');
      });
    });
  });
});
