import { Meta, StoryObj } from '@storybook/react';
import { PageFooter, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/page-footer/README.md';
import tokensDefinition from '@utrecht/components/page-footer/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page Footer',
  id: 'react-page-footer',
  component: PageFooter,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-page-footer',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof PageFooter>;

export default meta;

const Template: StoryObj<typeof PageFooter> = (args) => <PageFooter {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Paragraph>Page Footer Area</Paragraph>,
};

(Default as any).displayName = 'PageFooter';

export const DesignTokens = designTokenStory(meta);
