import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading5 } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Heading 5',
  id: 'react-heading-5',
  component: Heading5,
} as ComponentMeta<typeof Heading5>;

const Template: ComponentStory<typeof Heading5> = (args) => <Heading5 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
