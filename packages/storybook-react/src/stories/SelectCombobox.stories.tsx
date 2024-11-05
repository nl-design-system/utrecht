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
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
    onBlur: { action: 'onBlur' },
    onInput: { action: 'onInput' },
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

export const Expanded: Story = {
  args: {
    expanded: true,
    options,
  },
};

export const DefaultExpanded: Story = {
  args: {
    defaultExpanded: true,
    options,
  },
};

export const Value: Story = {
  args: {
    value: 'Option #2',
    options,
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: 'Option #2',
    options,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'The disabled combobox and the combobox options must not have hover effects.',
      },
    },
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Hello world',
    options,
  },
};

export const Size: Story = {
  args: {
    size: 4,
    options,
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 4,
    options,
  },
};

export const MinLength: Story = {
  args: {
    minLength: 4,
    options,
  },
};

export const Pattern: Story = {
  args: {
    pattern: '[0-9]+',
    options: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].map(
      (n) => ({
        children: String(n),
        value: String(n),
      }),
    ),
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'Option #2',
    options,
  },
};

export const ReadOnlyExpanded: Story = {
  args: {
    readOnly: true,
    expanded: true,
    value: 'Option #2',
    options,
  },
  parameters: {
    docs: {
      description: {
        story: 'The disabled combobox and the combobox options must not have hover effects.',
      },
    },
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    options,
  },
};

export const DisabledExpanded: Story = {
  args: {
    disabled: true,
    expanded: true,
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

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      description: {
        story: 'The required combobox should be announced as required by screen readers.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    options,
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'The invalid combobox should be announced as invalid by screen readers.',
      },
    },
  },
};
