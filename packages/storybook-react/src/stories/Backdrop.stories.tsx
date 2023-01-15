import { Meta, StoryObj } from '@storybook/react';
import { AlertDialog, Backdrop, Button, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/backdrop/README.md?raw';
import tokensDefinition from '@utrecht/components/backdrop/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Backdrop',
  id: 'react-backdrop',
  component: Backdrop,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-backdrop',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Backdrop>;

export default meta;

const Template: StoryObj<typeof Backdrop> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <AlertDialog open>
      <Paragraph>Greetings, one and all!</Paragraph>
      <form method="dialog">
        <Button type="submit" appearance="primary-action-button">
          OK
        </Button>
      </form>
    </AlertDialog>
  ),
};

export const DesignTokens = designTokenStory(meta);
