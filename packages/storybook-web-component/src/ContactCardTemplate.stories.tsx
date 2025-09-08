/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';

const ContactCardTemplate = () => <utrecht-contact-card-template></utrecht-contact-card-template>;

const meta = {
  title: 'Templates/Contact card',
  id: 'templates-web-component-contact-card',
  component: ContactCardTemplate,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-contact-card-template',
    tokens,
    tokensDefinition: {},
  },
} satisfies Meta<typeof ContactCardTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
