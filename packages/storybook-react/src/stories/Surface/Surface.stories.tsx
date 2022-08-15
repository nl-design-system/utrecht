import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Surface } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Surface',
  id: 'react-surface',
  component: Surface,
} as ComponentMeta<typeof Surface>;

const Template: ComponentStory<typeof Surface> = (args) => <Surface {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
