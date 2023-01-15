import { Meta, StoryObj } from '@storybook/react';
import { PageContent, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/page-content/README.md?raw';
import tokensDefinition from '@utrecht/components/page-content/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page Content',
  id: 'react-page-content',
  component: PageContent,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-page-content',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof PageContent>;

export default meta;

const Template: StoryObj<typeof PageContent> = (args) => <PageContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Paragraph>Page Content Area</Paragraph>,
};

(Default as any).displayName = 'PageContent';

export const DesignTokens = designTokenStory(meta);
