import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading4 } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Heading 4',
  id: 'react-heading-4',
  component: Heading4,
} as ComponentMeta<typeof Heading4>;

const Template: ComponentStory<typeof Heading4> = (args) => <Heading4 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
