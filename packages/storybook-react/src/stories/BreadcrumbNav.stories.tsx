import { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbLink, BreadcrumbNav } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/breadcrumb/README.md?raw';
import tokensDefinition from '@utrecht/components/breadcrumb/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Breadcrumb navigation',
  id: 'react-breadcrumb-nav',
  component: BreadcrumbNav,
  argTypes: {
    items: {
      description: 'Links',
      type: {
        name: 'array',
        required: true,
      },
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'arrows'],
    },
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-breadcrumb-nav',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof BreadcrumbNav>;

export default meta;

const Template: StoryObj<typeof BreadcrumbNav> = (args) => (
  <BreadcrumbNav appearance={args.appearance} label={args.label}>
    {args.items?.map((itemArgs) => (
      <BreadcrumbLink key={itemArgs.index} {...itemArgs} />
    ))}
  </BreadcrumbNav>
);

export const Default = Template.bind({});

Default.args = {
  appearance: 'arrows',
  label: 'Kruimelpad',
  items: [
    { href: '/', rel: 'home', index: 0, children: 'Home' },
    { href: '/a/', index: 1, children: 'Niveau 1' },
    { href: '/a/b/', rel: 'up', index: 2, children: 'Niveau 2' },
  ],
};

export const DesignTokens = designTokenStory(meta);
