import type { Meta, StoryObj } from '@storybook/vue3';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-vue';
import readme from '@utrecht/components/table/README.md?raw';
import tokens from '@utrecht/components/table/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-table',
  title: 'Vue.js Component/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      Table,
      TableCaption,
      TableHeader,
      TableRow,
      TableHeaderCell,
      TableBody,
      TableCell,
      TableFooter,
    },
    template: `<Table v-bind="$props"><slot></slot></Table>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-table',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Table',
  args: {
    slot: `<TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
          <TableHeaderCell scope="col">Column header cell 1</TableHeaderCell>
          <TableHeaderCell scope="col">Column header cell 2</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableHeaderCell scope="row">Row header cell</TableHeaderCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
       <TableCell>Footer cell 1</TableCell>
       <TableCell>Footer cell 2</TableCell>
      </TableRow>
    </TableFooter>`,
  },
});
