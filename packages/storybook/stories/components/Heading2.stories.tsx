/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-2/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-2/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Heading2 } from './Heading2';
import { designTokenStory } from './util';
import '@utrecht/components/heading-2/css/index.scss';

const meta = {
  title: 'CSS Component/Heading/Heading 2',
  id: 'css-heading-2',
  component: Heading2,
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
    tokensPrefix: 'utrecht-heading-2',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading2>;

export default meta;

const Template: StoryObj<typeof meta> = ({ innerHTML, ...args }) => <Heading2 {...args}>{innerHTML}</Heading2>;

export const Default = Template.bind({});

Default.storyName = 'Heading 2';

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
