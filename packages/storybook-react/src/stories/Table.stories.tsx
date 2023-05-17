import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/src/css-module';
import readme from '@utrecht/components/table/README.md?raw';
import tokensDefinition from '@utrecht/components/table/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Table',
  id: 'react-table',
  component: Table,
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>More data</TableCell>
            <TableCell>More data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
  parameters: {
    tokensPrefix: 'utrecht-table',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SelectedRow: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow selected>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const SelectedCell: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col">Column B</TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const SelectedColumn: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column A</TableHeaderCell>
            <TableHeaderCell scope="col" selected>
              Column B
            </TableHeaderCell>
            <TableHeaderCell scope="col">Column C</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Item 1</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Item</TableHeaderCell>
            <TableCell selected>Data</TableCell>
            <TableCell>More data</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const DesignTokens = designTokenStory(meta);
