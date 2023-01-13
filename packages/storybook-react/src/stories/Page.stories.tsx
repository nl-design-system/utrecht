import { Meta, StoryObj } from '@storybook/react';
import { Page } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/page/README.md';
import tokensDefinition from '@utrecht/components/page/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Default as PageContent } from './PageContent.stories';
import { Default as PageHeader } from './PageContent.stories';
import { Default as PageFooter } from './PageFooter.stories';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page',
  id: 'react-page',
  component: Page,
  subcomponents: { PageContent, PageFooter, PageHeader },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-page',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Page>;

export default meta;

const Template: StoryObj<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <PageHeader {...PageContent.args} />,
    <PageContent {...PageContent.args} />,
    <PageFooter {...PageFooter.args} />,
  ],
};

export const DesignTokens = designTokenStory(meta);
