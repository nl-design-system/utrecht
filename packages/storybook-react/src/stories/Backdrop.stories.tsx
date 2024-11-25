import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/backdrop-css/README.md?raw';
import tokensDefinition from '@utrecht/backdrop-css/dist/tokens.mjs';
import { AlertDialog, Backdrop, Button, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Backdrop',
  id: 'react-backdrop',
  component: Backdrop,
  args: {
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
  },
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
} satisfies Meta<typeof Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
