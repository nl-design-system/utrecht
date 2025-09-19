/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Figure, FigureCaption, Image, Link } from '@utrecht/component-library-react';
import type { FigureProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/figure-css/README.md?raw';
import tokensDefinition from '@utrecht/figure-css/src/tokens.json';
import React, { ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

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
        name: 'string',
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
        name: 'string',
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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ffigure',
    nldesignsystem: 'https://nldesignsystem.nl/figure',
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
