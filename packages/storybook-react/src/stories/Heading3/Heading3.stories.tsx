import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading3 } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Heading 3',
  id: 'react-heading-3',
  component: Heading3,
} as ComponentMeta<typeof Heading3>;

const Template: ComponentStory<typeof Heading3> = (args) => <Heading3 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
