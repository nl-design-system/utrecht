import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/search-bar/README.md?raw';
import tokensDefinition from '@utrecht/components/search-bar/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { SearchBarStory } from './SearchBar';

const meta = {
  title: 'CSS Component/Search bar',
  id: 'css-search-bar',
  component: SearchBarStory,
  tags: ['autodocs'],
  argTypes: {
    buttonLabel: {
      description: 'Button label',
      type: 'string',
    },
    name: {
      description: 'Name in HTTP submit',
      type: 'string',
    },
    formLabel: {
      description: 'Form label',
      type: 'string',
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
    textboxLabel: '',
    textboxPlaceholder: '',
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
} satisfies Meta<typeof SearchBarStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonLabel: 'Zoeken',
    formLabel: 'zoeken in Utrecht.nl',
    name: 'q',
  },
};
