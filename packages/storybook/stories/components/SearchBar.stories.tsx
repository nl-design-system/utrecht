import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/search-bar/README.md?raw';
import tokensDefinition from '@utrecht/components/search-bar/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { SearchBar } from './SearchBar';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Search Bar',
  id: 'css-search-bar',
  component: SearchBar,
  args: {
    buttonLabel: 'Zoeken',
    formLabel: 'zoeken in Utrecht.nl',
    inputLabel: 'zoektermen',
    value: '',
    isOpen: false,
    isActive: false,
    isSelected: false,
  },
  argTypes: {
    buttonLabel: {
      description: 'Label for the searchbar button',
      type: 'text',
    },
    formLabel: {
      description: 'Label for the searchbar',
      type: 'text',
    },
    inputLabel: {
      description: 'Label for the search input',
      type: 'text',
    },
    value: {
      description: 'Current search term',
      type: 'text',
    },
    isOpen: {
      type: 'boolean',
    },
    isActive: {
      type: 'boolean',
    },
    isSelected: {
      type: 'boolean',
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-search-bar',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DropdownIsOpen: Story = {
  args: {
    isOpen: true,
  },
};

export const IsSelected: Story = {
  args: {
    isOpen: true,
    isSelected: true,
  },
};

export const IsActive: Story = {
  args: {
    isOpen: true,
    isActive: true,
  },
};

export const DesignTokens = designTokenStory(meta);
