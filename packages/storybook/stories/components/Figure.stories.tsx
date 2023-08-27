/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Figure, FigureCaption, Image, Link } from '@utrecht/component-library-react/dist/css-module';
import { FigureProps } from '@utrecht/component-library-react/src/Figure';
import readme from '@utrecht/components/figure/README.md?raw';
import tokensDefinition from '@utrecht/components/figure/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { ReactNode } from 'react';
import { designTokenStory } from './util';

interface FigureStoryProps extends FigureProps {
  alt?: string;
  caption?: ReactNode;
  height?: number;
  photo?: boolean;
  src?: string;
  width?: number;
}

const FigureStory = ({ alt, src, width, height, photo, caption }: FigureStoryProps) => (
  <Figure>
    {src && <Image alt={alt} src={src} width={width} height={height} photo={photo} />}
    {caption && <FigureCaption>{caption}</FigureCaption>}
  </Figure>
);

const meta = {
  title: 'CSS Component/Figure',
  id: 'css-figure',
  component: FigureStory,
  argTypes: {
    alt: {
      description: 'Text alternative',
      type: {
        name: 'text',
        required: true,
      },
    },
    caption: {
      description: 'Caption',
      control: 'text',
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
    alt: '',
    caption: '',
    src: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-figure',
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
} satisfies Meta<typeof FigureStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: (
      <>
        Fotograaf: Gemeente Utrecht
        <br />
        Titel: Nijntje Vuelta
        <br />
        Locatie: Stadsplateau
        <br />
        Geplaatst: 17 augustus 2022
        <br />
        <Link
          href="https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/"
          external
          aria-label="Bron: 'Nijntje / Vuelta' op Flickr"
        >
          Bron: Flickr
        </Link>
      </>
    ),
    src: 'example/photo-nijntje-vuelta.jpg',
    width: 2048,
    height: 1536,
    photo: true,
    alt: 'Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor',
  },
};

export const DesignTokens = designTokenStory(meta);
