import { Meta, StoryObj } from '@storybook/react';
import { Image } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/img/README.md?raw';
import tokensDefinition from '@utrecht/components/img/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Image',
  id: 'react-image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-image',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Image>;

export default meta;

const Template: StoryObj<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  alt: 'Wapen van de Gemeente Utrecht',
  height: 100,
  src: 'logo.svg',
  width: 192,
};

export const Photo = Template.bind({});

Photo.args = {
  alt: 'Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor',
  height: 1536,
  photo: true,
  src: 'example/photo-nijntje-vuelta.jpg',
  width: 2048,
};

export const DesignTokens = designTokenStory(meta);
