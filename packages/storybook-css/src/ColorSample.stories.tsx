import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/color-sample-css/README.md?raw';
import tokensDefinition from '@utrecht/color-sample-css/src/tokens.json';
import { ColorSample } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Color sample',
  id: 'css-color-sample',
  component: ColorSample,
  args: {
    color: '#007DAD',
  },
  argTypes: {
    color: {
      name: 'Color',
      control: {
        type: 'color',
      },
      type: {
        name: 'string',
        required: true,
      },
      table: {
        category: 'API',
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-color-sample',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ColorSample>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const DesignTokens = designTokenStory(meta);
