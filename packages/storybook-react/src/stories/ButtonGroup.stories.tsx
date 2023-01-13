import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/button-group/README.md';
import tokensDefinition from '@utrecht/components/button-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Button group',
  id: 'react-button-group',
  component: ButtonGroup,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-button-group',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Button>;

export default meta;

const Template: StoryObj<typeof Button> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Button appearance="primary-action-button">Save and continue</Button>
      <Button appearance="secondary-action-button">Back</Button>
    </>
  ),
};

export const DesignTokens = designTokenStory(meta);
