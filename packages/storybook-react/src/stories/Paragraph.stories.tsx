import readme from '@nl-design-system-unstable/documentation/componenten/_paragraph.md?raw';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import tokensDefinition from '@utrecht/paragraph-css/dist/tokens.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Paragraph',
  id: 'react-paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  args: {
    appearance: undefined,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  argTypes: {
    appearance: {
      options: [undefined, 'lead', 'small'],
      control: {
        type: 'select',
      },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    lead: {
      name: 'lead',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DEPRECATED',
        defaultValue: { summary: false },
      },
    },
    small: {
      name: 'small',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DEPRECATED',
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-paragraph',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Lead: Story = {
  name: 'Lead',
  args: {
    ...Default.args,
    appearance: 'lead',
  },
};
export const Small: Story = {
  name: 'Small',
  args: {
    ...Default.args,
    appearance: 'small',
  },
};

export const DesignTokens = designTokenStory(meta);
