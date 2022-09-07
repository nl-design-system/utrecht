import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PreHeading } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Pre-heading',
  id: 'react-pre-heading',
  component: PreHeading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
} as ComponentMeta<typeof PreHeading>;

const Template: ComponentStory<typeof PreHeading> = (args) => <PreHeading {...args} />;

export const Default = Template.bind({});
