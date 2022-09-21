import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Heading',
  id: 'react-heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});

Heading1.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  level: 1,
};

export const Heading2 = Template.bind({});

Heading2.args = {
  ...Heading1.args,
  level: 2,
};

export const Heading3 = Template.bind({});

Heading3.args = {
  ...Heading1.args,
  level: 3,
};

export const Heading4 = Template.bind({});

Heading4.args = {
  ...Heading1.args,
  level: 4,
};

export const Heading5 = Template.bind({});

Heading5.args = {
  ...Heading1.args,
  level: 5,
};

export const Heading6 = Template.bind({});

Heading6.args = {
  ...Heading1.args,
  level: 6,
};
