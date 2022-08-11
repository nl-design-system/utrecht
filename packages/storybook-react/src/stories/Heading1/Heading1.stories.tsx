import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Heading 1',
  id: 'react-heading-1',
  component: Heading1,
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => <Heading1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
