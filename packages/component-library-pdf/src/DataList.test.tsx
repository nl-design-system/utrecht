/* eslint-env jest */

import { beforeAll, describe, expect, it } from '@jest/globals';
import { DataList, DataListItem, DataListKey, DataListValue } from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Data list', () => {
  let sha256: string;

  beforeAll(async () => {
    ({ sha256 } = await renderPdf({
      id: 'pdf-data-list',
      render: () => (
        <DataList>
          <DataListItem>
            <DataListKey>Pangram</DataListKey>
            <DataListValue>The quick brown fox jumps over the lazy dog</DataListValue>
          </DataListItem>
        </DataList>
      ),
    }));
  });

  it('renders a <L> tag', async () => {
    expect(sha256).toBe('1ef37478b0c027f45c557c94ca9c4d237860baf121f02d482e45b85c43348134');
  });

  describe('list item', () => {
    it('renders a <LI> tag', async () => {
      expect(sha256).toBe('1ef37478b0c027f45c557c94ca9c4d237860baf121f02d482e45b85c43348134');
    });

    it('renders a <Lbl> tag with the key', async () => {
      expect(sha256).toBe('1ef37478b0c027f45c557c94ca9c4d237860baf121f02d482e45b85c43348134');
    });

    it('renders a <LBody> tag with the value', async () => {
      expect(sha256).toBe('1ef37478b0c027f45c557c94ca9c4d237860baf121f02d482e45b85c43348134');
    });
  });
});
