import type { Meta, StoryObj } from '@storybook/react';
import comboboxDocs from '@utrecht/components/search-bar/_combobox.md?raw';
import defaultDocs from '@utrecht/components/search-bar/_default.md?raw';
import React from 'react';
import { SearchBarComboboxStory } from './SearchBar';

const spaceForPopover = (Story) => <div style={{ minBlockSize: '42em' }}>{Story()}</div>;

const exampleOptions = [
  {
    id: '1b21002d-1f33-484e-bd43-11159502c6d1',
    label: 'C',
    value: 1972,
  },
  {
    id: '9795886d-1d5a-4b8a-ac4d-fd0114c7e7f6',
    label: 'C++',
    value: 1983,
  },
  {
    id: '3b992d19-21a4-42c0-ab95-fd60b6f89011',
    label: 'Perl',
    value: 1987,
  },
];

const exampleOptionGroups = [
  {
    id: '15a6eabc-7b94-4965-8ee1-e2dc8f5a2282',
    label: '1970s',
    options: [
      {
        id: '1b21002d-1f33-484e-bd43-11159502c6d1',
        label: 'C',
        value: 1972,
      },
    ],
  },
  {
    id: 'e28e470a-f4bd-4293-a9a7-261dbc16c375',
    label: '1980s',
    options: [
      {
        id: '9795886d-1d5a-4b8a-ac4d-fd0114c7e7f6',
        label: 'C++',
        value: 1983,
      },
      {
        id: '3b992d19-21a4-42c0-ab95-fd60b6f89011',
        label: 'Perl',
        value: 1987,
      },
    ],
  },
];

const meta = {
  title: 'CSS Component/Search bar/Search bar with combobox',
  id: 'css-search-bar-combobox',
  component: SearchBarComboboxStory,
  tags: ['autodocs'],
  argTypes: {
    buttonLabel: {
      description: 'Button label',
      type: 'string',
    },
    expanded: {
      description: 'Expanded',
      type: 'boolean',
    },
    name: {
      description: 'Name in HTTP submit',
      type: 'string',
    },
    formLabel: {
      description: 'Form label',
      type: 'string',
    },
    options: {
      description: 'Options',
      control: 'select',
      options: {
        '': undefined,
        empty: [],
        '3 options': exampleOptions,
        '2 option groups': exampleOptionGroups,
      },
    },
    textboxLabel: {
      description: 'Textbox label',
      type: 'string',
    },
    textboxPlaceholder: {
      description: 'Textbox placeholder text',
      type: 'string',
    },
  },
  args: {
    buttonLabel: '',
    expanded: false,
    textboxLabel: '',
    textboxPlaceholder: '',
    options: [],
  },
  decorators: [spaceForPopover],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: comboboxDocs,
      },
    },
  },
} satisfies Meta<typeof SearchBarComboboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonLabel: 'Zoeken',
    formLabel: 'zoeken in Utrecht.nl',
    name: 'q',
    popoverId: 'ea5da879-6022-4a76-911e-0aae3813cbdb',
  },
  parameters: {
    docs: {
      description: {
        story: defaultDocs,
      },
    },
  },
};

export const Options: Story = {
  args: {
    buttonLabel: 'Zoeken',
    expanded: true,
    formLabel: 'zoeken in Utrecht.nl',
    name: 'q',
    options: exampleOptions,
    popoverId: '4e023c43-3a7f-4636-b298-4154fe02d382',
  },
};

export const OptionGroup: Story = {
  args: {
    buttonLabel: 'Zoeken',
    expanded: true,
    formLabel: 'zoeken in Utrecht.nl',
    name: 'q',
    options: exampleOptionGroups,
    popoverId: '2ca6fdf8-a216-4967-a7f2-889540619b56',
  },
};
