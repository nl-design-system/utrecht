// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import {
  FigureDetails,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/src/css-module/index';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Figure Details',
  id: 'react-Figure-Details',
  component: FigureDetails,
  argTypes: {},
  args: {
    children: [
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
      </Table>,
    ],
    openButtonText: 'open',
    closeButtonText: 'close',
  },
  parameters: {
    tokensPrefix: 'utrecht-card-list',
  },
} satisfies Meta<typeof FigureDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
