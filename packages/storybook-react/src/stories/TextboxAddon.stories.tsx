import { Meta, StoryObj } from '@storybook/react-vite';
import { Textbox, TextboxAddon } from '@utrecht/component-library-react/dist/css-module/index';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/textbox-addon-css/README.md?raw';
import tokensDefinition from '@utrecht/textbox-addon-css/dist/tokens.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Textbox Addon',
  id: 'react-textbox-addon',
  component: TextboxAddon,
  argTypes: {},
  args: {
    children: <Textbox defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  parameters: {
    tokensPrefix: 'utrecht-textbox-addon',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof TextboxAddon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
