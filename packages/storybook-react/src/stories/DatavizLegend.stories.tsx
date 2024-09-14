import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import {
  DatavizLegendList,
  DatavizLegendItem,
  DatavizLegendKey,
  DatavizLegendValue,
} from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/dataviz-legend/README.md?raw';
import tokensDefinition from '@utrecht/components/dataviz-legend/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Dataviz legend',
  id: 'react-dataviz-legend',
  component: DataList,
  args: {},
  parameters: {
    tokensPrefix: 'utrecht-dataviz-legend',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof DataList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
