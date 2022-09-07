import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Image',
  id: 'react-image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

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
