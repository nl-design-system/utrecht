import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Figure, FigureCaption, Image, Link } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Figure',
  id: 'react-figure',
  component: Figure,
  argTypes,
} as ComponentMeta<typeof Figure>;

const Template: ComponentStory<typeof Figure> = ({ caption, children }) => (
  <Figure>
    {children}
    <FigureCaption>{caption}</FigureCaption>
  </Figure>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <Image
      src="example/photo-nijntje-vuelta.jpg"
      width={2048}
      height={1536}
      photo
      alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
    />
  ),
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
        title="'Nijntje / Vuelta' op Flickr"
      >
        Bron: Flickr
      </Link>
    </>
  ),
};
