/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Image } from '@utrecht/component-library-react';
import readme from '@utrecht/components/img/README.md?raw';
import tokensDefinition from '@utrecht/components/img/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Image',
  id: 'css-img',
  component: Image,
  argTypes: {
    alt: {
      description: 'Text alternative',
      type: {
        name: 'text',
        required: true,
      },
    },
    lang: {
      description: 'Language of text alternative',
      type: 'text',
    },
    height: {
      description: 'Height (in pixels)',
      type: {
        name: 'number',
        required: true,
      },
    },
    width: {
      description: 'Width (in pixels)',
      type: {
        name: 'number',
        required: true,
      },
    },
    src: {
      description: 'URL of image',
      type: {
        name: 'text',
        required: true,
      },
    },
    photo: {
      description: 'Image is a photo',
      type: 'boolean',
    },
  },
  args: {
    alt: undefined,
    height: undefined,
    lang: '',
    photo: false,
    src: '',
    width: undefined,
  },
  parameters: {
    tokensPrefix: 'utrecht-img',
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
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'logo.svg',
    width: 188,
    height: 101,
    alt: 'Gemeente Utrecht',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-img` class name.',
      },
    },
  },
};

export const Photo: Story = {
  args: {
    src: 'example/photo-nijntje-vuelta.jpg',
    width: 2048,
    height: 1536,
    photo: true,
    alt: 'Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor',
  },
  name: 'Photo',
  parameters: {
    docs: {
      description: {
        story: 'Photo © 2022 Gemeente Utrecht.',
      },
    },
  },
};

export const AltLang: Story = {
  args: {
    src: 'example/je-maintiendrai.svg',
    alt: 'Je maintiendrai',
    lang: 'fr',
    width: '200',
    height: '50',
  },
  name: 'Alt in another language',
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
