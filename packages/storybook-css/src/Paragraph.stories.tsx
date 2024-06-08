/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/paragraph-css/README.md?raw';
import leadParagraphDocs from '@utrecht/paragraph-css/_lead.md?raw';
import tokensDefinition from '@utrecht/paragraph-css/src/tokens.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Paragraph',
  id: 'css-paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      description: 'Content of the paragraph.',
      control: 'text',
    },
    lead: {
      description: 'Lead paragraph',
      control: 'boolean',
    },
    small: {
      description: 'Paragraph with small print',
      control: 'boolean',
    },
  },
  args: {
    children: '',
    lead: false,
    small: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-paragraph',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-paragraph` class name.',
      },
    },
  },
};

export const Lead: Story = {
  args: {
    ...Default.args,
    lead: true,
  },
  parameters: {
    docs: {
      description: {
        story: leadParagraphDocs,
      },
    },
  },
};

export const SmallPrint: Story = {
  args: {
    ...Default.args,
    small: true,
  },
  name: 'Small print',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-paragraph` and `.utrecht-paragraph--small` modifier class name',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
