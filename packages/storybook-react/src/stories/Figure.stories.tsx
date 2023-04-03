import { Meta, StoryObj } from '@storybook/react';
import { Figure, Image, Link } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/figure/README.md?raw';
import tokensDefinition from '@utrecht/components/figure/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Figure',
  id: 'react-figure',
  component: Figure,
  args: {
    children: (
      <Image
        src="example/photo-nijntje-vuelta.jpg"
        width={2048}
        height={1536}
        photo
        alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
      />
    ),
    caption: [
      'Fotograaf: Gemeente Utrecht',
      <br />,
      'Titel: Nijntje Vuelta',
      <br />,
      'Locatie: Stadsplateau',
      <br />,
      'Geplaatst: 17 augustus 2022',
      <br />,
      <Link
        href="https://www.flickr.com/photos/gemeenteutrecht/52287504255/in/dateposted-public/"
        external
        title="'Nijntje / Vuelta' op Flickr"
      >
        Bron: Flickr
      </Link>,
    ],
  },
  argTypes: {
    caption: {
      type: { name: 'string', required: true },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-figure',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Figure>;

export default meta;

// const Template: StoryObj<typeof Figure> = ({ caption, children }) => (
//   <Figure>
//     {children}
//     <FigureCaption>{caption}</FigureCaption>
//   </Figure>
// );

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
