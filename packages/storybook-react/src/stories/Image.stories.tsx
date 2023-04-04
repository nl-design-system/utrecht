import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
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
  args: {
    alt: 'Wapen van de Gemeente Utrecht',
    height: 100,
    src: 'logo.svg',
    width: 192,
    photo: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-image',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Photo: Story = {
  args: {
    alt: 'Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor',
    height: 1536,
    photo: true,
    src: 'example/photo-nijntje-vuelta.jpg',
    width: 2048,
  },
};

export const DesignTokens = designTokenStory(meta);
