import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading2 } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Heading 2',
  id: 'react-heading-2',
  component: Heading2,
} as ComponentMeta<typeof Heading2>;

const Template: ComponentStory<typeof Heading2> = (args) => <Heading2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
