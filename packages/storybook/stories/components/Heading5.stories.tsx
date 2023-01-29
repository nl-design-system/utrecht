/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-5/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-5/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Heading5 } from './Heading5';
import { designTokenStory } from './util';
import '@utrecht/components/heading-5/css/index.scss';

const meta = {
  title: 'CSS Component/Heading/Heading 5',
  id: 'css-heading-5',
  component: Heading5,
  argTypes: {
    distanced: {
      description: 'Zet afstand tussen de header en nabije content',
      control: 'boolean',
      defaultValue: false,
    },
    textContent: {
      description: 'De content van de header',
      control: 'text',
      defaultValue: '',
    },
  },
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-5',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading5>;

export default meta;

const Template: StoryObj<typeof meta> = ({ innerHTML, ...args }) => <Heading5 {...args}>{innerHTML}</Heading5>;

export const Default = Template.bind({});

Default.storyName = 'Heading 5';

Default.parameters = {
  status: {
    type: 'ALPHA',
  },
};

export const Distanced = Template.bind({});

Distanced.storyName = 'Distanced';

Distanced.args = {
  distanced: true,
};

Distanced.parameters = {
  status: {
    type: 'WORK IN PROGRESS',
  },
};

export const DesignTokens = designTokenStory(meta);
