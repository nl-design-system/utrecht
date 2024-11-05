import { Meta, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import readme from '@utrecht/select-combobox-react/README.md?raw';
import { SelectCombobox } from '@utrecht/select-combobox-react/dist/css';
import React, { ReactNode } from 'react';

const spaceForPopover = (Story: PartialStoryFn): ReactNode => (
  <div style={{ minBlockSize: '42em' }}>{Story() as ReactNode}</div>
);

interface SelectOptions {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

const options: SelectOptions[] = [
  { value: '', children: 'Select an option', disabled: true },
  { value: '1', children: 'Option #1' },
  { value: '2', children: 'Option #2' },
  { value: '3', children: 'Option #3' },
  { value: '4', children: 'Option #4' },
];

const meta = {
  title: 'React Component/Select Combobox',
  id: 'react-select-combobox',
  component: SelectCombobox,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
  },
  decorators: [spaceForPopover],
} satisfies Meta<typeof SelectCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options,
  },
};

export const Required: Story = {
  args: {
    required: true,
    options,
  },
};

export const FilterFn: Story = {
  args: {
    filterFn: (inputValue, option) => !option.value.includes(inputValue),
    options,
  },
};

export const SortFn: Story = {
  args: {
    filterFn: (inputValue, option) => Math.abs(parseInt(inputValue, 10) - parseInt(option.value, 10)) <= 3,
    sortFn: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    options: [
      { value: '', children: 'Select an option', disabled: true },
      { value: '1', children: '1' },
      { value: '2', children: '2' },
      { value: '3', children: '3' },
      { value: '4', children: '4' },
      { value: '5', children: '5' },
      { value: '6', children: '6' },
      { value: '7', children: '7' },
      { value: '8', children: '8' },
      { value: '10', children: '9' },
    ],
  },
};

// export const Invalid: Story = {
//   args: {
//     invalid: true,
//     options,
//   },
// };
