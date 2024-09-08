/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/src/index';
import React from 'react';
import { renderPdf } from './lib';

describe('Table', () => {
  it('renders a <Table> tag', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-table',
      render: () => (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ),
    });

    expect(sha256).toBe('633d92ad73af2a8a42520e0dc89cb2cf57dce5700d73ed66d599f8b175e953bb');
  });

  describe('table header', () => {
    it('renders a <THead> tag', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-table-header',
        render: () => (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>The quick brown fox jumps over the lazy dog</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      });

      expect(sha256).toBe('ab64dcafa4bb9efde9bad1756e1276dbc4169f5544be3fa6239935fb0747810e');
    });
  });

  describe('table body', () => {
    it('renders a <TBody> tag', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-table-body',
        render: () => (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      });

      expect(sha256).toBe('19143779e8962bfc81c496c4f741a878b7b86f6cb24d7cdc251e4106cfbfbedf');
    });
  });

  describe('table footer', () => {
    it('renders a <TFoot> tag', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-table-footer',
        render: () => (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        ),
      });

      expect(sha256).toBe('3082bd8a19ebccc9959e255db4d1606dd097feff3bd2942512fdf8b168180b94');
    });
  });

  describe('table caption', () => {
    it('renders a <Caption> tag', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-table-caption',
        render: () => (
          <Table>
            <TableCaption>The quick brown fox jumps over the lazy dog</TableCaption>
            <TableBody>
              <TableRow>
                <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      });

      expect(sha256).toBe('fafc2f6803f2a497b54521349377ba0dbe94a35187c250ac1cbe19f1cbd49baf');
    });
  });

  describe('data cell', () => {
    it('renders a <TD> tag', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-table-cell',
        render: () => (
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      });

      expect(sha256).toBe('3737811c7f420d180d5c79bff2420298cda6a524e8ea1e07653108f24b22094e');
    });
  });

  describe('table heading cell', () => {
    it('renders a <TH> tag', async () => {
      const { sha256 } = await renderPdf({
        id: 'pdf-table-heading-cell',
        render: () => (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>The quick brown fox jumps over the lazy dog</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>The quick brown fox jumps over the lazy dog</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      });

      expect(sha256).toBe('6603b39a7c853b1787bc88e869110120da986e7d918d9c9ea4f575cf4d8cf6da');
    });

    describe.skip('empty cells are always <TD> cells, never <TH> cells.', () => {
      it('renders a <TD> tag', async () => {
        const { sha256 } = await renderPdf({
          id: 'pdf-table-heading-cell-empty',
          render: () => (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell />
                  <TableHeaderCell>Axis 1: foo</TableHeaderCell>
                  <TableHeaderCell>Axis 1: bar</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableHeaderCell>Axis 2: baz</TableHeaderCell>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Axis 2: quux</TableHeaderCell>
                  <TableCell>3</TableCell>
                  <TableCell>4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ),
        });

        expect(sha256).toBe('');
      });
    });
  });
});
