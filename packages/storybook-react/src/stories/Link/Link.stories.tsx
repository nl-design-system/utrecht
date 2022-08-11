import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Link',
  id: 'react-link',
  component: Link,
  argTypes,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
  href: '#',
};
