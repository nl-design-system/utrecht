import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Link/States',
  id: 'react-link-states',
  component: Link,
  args: {
    children: 'Read more',
    href: 'https://www.example.com',
  },
  argTypes,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Hover = Template.bind({});

Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});

Focus.parameters = {
  pseudo: { focus: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const Active = Template.bind({});

Active.parameters = {
  pseudo: { active: true },
};

export const Visited = Template.bind({});

Visited.parameters = {
  pseudo: { visited: true },
};
