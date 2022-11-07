import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Table',
  id: 'react-table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => (
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
