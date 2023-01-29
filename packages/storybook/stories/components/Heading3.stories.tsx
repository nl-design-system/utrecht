/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-3/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-3/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Heading3 } from './Heading3';
import { designTokenStory } from './util';
import '@utrecht/components/heading-3/css/index.scss';

const meta = {
  title: 'CSS Component/Heading/Heading 3',
  id: 'css-heading-3',
  component: Heading3,
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
    tokensPrefix: 'utrecht-heading-3',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading3>;

export default meta;

const Template: StoryObj<typeof meta> = ({ innerHTML, ...args }) => <Heading3 {...args}>{innerHTML}</Heading3>;

export const Default = Template.bind({});

Default.storyName = 'Heading 3';

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
  chromatic: { disableSnapshot: true },
  status: {
    type: 'WORK IN PROGRESS',
  },
};

export const DesignTokens = designTokenStory(meta);
