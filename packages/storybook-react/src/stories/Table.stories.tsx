import { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react';
import readme from '@utrecht/components/table/README.md?raw';
import tokensDefinition from '@utrecht/components/table/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Table',
  id: 'react-table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-table',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Table>;

export default meta;

const Template: StoryObj<typeof Table> = () => (
  <Table>
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
  </Table>
);

export const Default = Template.bind({});

Default.args = {};

export const DesignTokens = designTokenStory(meta);
