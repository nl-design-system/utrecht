import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { ColorSample } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/color-sample/README.md?raw';
import tokensDefinition from '@utrecht/components/color-sample/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Color sample',
  id: 'react-color-sample',
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
      type: { required: true },
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
      page: () => (
        <>
          <Description markdown={readme} />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof ColorSample>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const DesignTokens = designTokenStory(meta);
