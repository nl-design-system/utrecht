/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/card-css/README.md?raw';
import tokensDefinition from '@utrecht/card-css/src/tokens.json';
import { Card } from '@utrecht/card-react/dist/css';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { type ComponentProps, type CSSProperties } from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Card',
  id: 'css-card',
  component: Card,
  argTypes: {
    image: {
      control: 'object',
      description: 'Image component',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    heading: {
      control: 'text',
      description: 'Heading content - can be a string or a ReactNode',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    headingLevel: {
      control: 'number',
      description: 'Heading level',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: undefined },
      },
      required: true,
    },
    href: {
      control: 'text',
      description: 'URL for the card link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    Link: {
      control: 'object',
      description: 'Link component',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    appearance: {
      description: 'Color variant of the card',
      control: { type: 'select' },
      options: ['', 'neutral', 'warm', 'cool', 'soft', 'bright'],
    },
    aspect: {
      description: 'Aspect ratio of the image',
      control: { type: 'select' },
      options: ['', '16by9', '4by3', '1by1'],
    },
  },
  args: {
    heading: 'Waterput op de Neude',
    headingLevel: 2,
    image: (
      <img
        src="images/erfgoed-image-waterput-op-de-neude.png"
        alt="Zestiende-eeuwse stenen waterput ontdekt op de Neude in Utrecht."
      />
    ),
    body: 'Bij het opnieuw inrichten van de Neude zijn er bijzondere vondsten gedaan. De opvallendste was een waterput uit uit de 16e eeuw.',
    href: '#',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcard',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-card',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// Responsive grid style: 1 column on small screens, 2 on medium, 3 on large
const demoGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
  gap: '16px',
  maxInlineSize: '1200px',
  marginInline: 'auto',
  blockSize: '100%',
  padding: '16px',
};

const componentContainerStyle: CSSProperties = {
  inlineSize: '400px',
  padding: '24px',
};

export const Default: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={componentContainerStyle}>
      <Card {...args} />
    </div>
  ),
};

export const Hover: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={componentContainerStyle}>
      <Card {...args} className="utrecht-card--hover" />
    </div>
  ),
};

export const Focus: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={componentContainerStyle}>
      <Card {...args} className="utrecht-card--focus" />
    </div>
  ),
};

export const FocusVisible: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={componentContainerStyle}>
      <Card {...args} className="utrecht-card--focus-visible" />
    </div>
  ),
};

export const MultipleCard: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={demoGridStyle}>
      <Card aspect="16by9" {...args} />
      <Card
        headingLevel={2}
        heading="Veeartsenijroute"
        body="De Veeartsenijroute brengt u langs 9 verschillende plekken die een belangrijke rol spelen in de geschiedenis van het veterinair onderwijs."
        href="#"
        aspect="16by9"
        image={
          <img
            src="images/erfgoed-veeartsenijroute.png"
            alt="Historische paardenstallen van de Rijksveeartsenijschool met pony’s en een vrouwelijke student, circa 1910."
          />
        }
      />
      <Card
        headingLevel={2}
        heading="Merwedekanaalzone: archeologische ontdekkingen Romeins Utrecht"
        body="Bij opgravingen is bewijs gevonden van een overstroming die flinke schade toebracht aan de infrastructuur van Romeins Nederland."
        href="#"
        aspect="16by9"
        image={
          <img
            src="images/erfgoed-merwedekanaalzone-archeologische-ontdekkingen-romeins-utrecht.png"
            alt="Opgraving van een Romeinse weg met houten fundering in de Merwedekanaalzone in Utrecht."
          />
        }
      />
    </div>
  ),
};
export const WithoutImage: Story = {
  render: () => (
    <div style={componentContainerStyle}>
      <Card
        href="#"
        headingLevel={2}
        heading="Informatiekaarten"
        body="Kaarten geven een overzicht van de kennis die we hebben over een bepaald onderdeel van ons erfgoed."
      />
    </div>
  ),
};
export const WithCustomLinkComponent: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={componentContainerStyle}>
      <Card {...args} Link="a" />
    </div>
  ),
};
export const WithoutLink: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={componentContainerStyle}>
      <Card {...args} href={undefined} />
    </div>
  ),
};
export const DesignTokens = designTokenStory(meta);
