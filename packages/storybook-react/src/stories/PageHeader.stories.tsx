import { Meta, StoryObj } from '@storybook/react';
import { Heading1, PageHeader } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/page-header/README.md';
import tokensDefinition from '@utrecht/components/page-header/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page Header',
  id: 'react-page-header',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-page-header',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof PageHeader>;

export default meta;

const Template: StoryObj<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Heading1>Header Area</Heading1>,
};

(Default as any).displayName = 'PageHeader';

export const DesignTokens = designTokenStory(meta);
