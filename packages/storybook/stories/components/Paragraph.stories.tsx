/* @license CC0-1.0 */

import readme from '@nl-design-system-unstable/documentation/componenten/_paragraph.md';
import type { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from '@utrecht/components/paragraph/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Paragraph } from './Paragraph';
import { designTokenStory } from './util';
import '@utrecht/components/paragraph/css/index.scss';

const meta = {
  title: 'CSS Component/Paragraph',
  id: 'css-paragraph',
  component: Paragraph,
  argTypes: {
    innerHTML: {
      description: 'Paragraph innerHTML',
      control: 'text',
      defaultValue: '',
    },
    lead: {
      description: 'Lead paragraph',
      control: 'boolean',
      defaultValue: false,
    },
    small: {
      description: 'Paragraph with small print',
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    innerHTML:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-paragraph',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Paragraph>;

export default meta;

const Template: StoryObj<typeof meta> = ({ innerHTML, ...args }) => <Paragraph {...args}>{innerHTML}</Paragraph>;

const ParagraphsTemplate: StoryObj<typeof meta> = ({ items = [] }) => (
  <div>{[items.map((args) => <Paragraph {...args} />)]}</div>
);
export const Default = Template.bind({});

Default.storyName = 'Paragraph';

Default.parameters = {
  status: {
    type: 'ALPHA',
  },
};

export const LeadParagraph = Template.bind({});

LeadParagraph.storyName = 'Lead paragraph';

LeadParagraph.args = {
  lead: true,
};

LeadParagraph.parameters = {
  status: {
    type: 'ALPHA',
  },
};

export const SmallPrint = Template.bind({});

SmallPrint.storyName = 'Small print';

SmallPrint.args = {
  small: true,
};

SmallPrint.parameters = {
  status: {
    type: 'WORK IN PROGRESS',
  },
};

export const Multiple = ParagraphsTemplate.bind({});

Multiple.args = {
  items: [
    {
      innerHTML: meta.args.innerHTML,
      lead: true,
    },
    {
      innerHTML: meta.args.innerHTML,
    },
    {
      innerHTML: meta.args.innerHTML,
    },
    {
      innerHTML: meta.args.innerHTML,
      small: true,
    },
  ],
};

Multiple.decorators = [(Story) => <div style={{ '--utrecht-space-around': 1 }}>{Story()}</div>];

Multiple.storyName = 'Multiple paragraphs';

export const DesignTokens = designTokenStory(meta);
