import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading6 } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Heading 6',
  id: 'react-heading-6',
  component: Heading6,
} as ComponentMeta<typeof Heading6>;

const Template: ComponentStory<typeof Heading6> = (args) => <Heading6 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
