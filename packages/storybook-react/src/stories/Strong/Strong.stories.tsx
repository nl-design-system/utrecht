import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph, Strong } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Strong',
  id: 'react-document',
  component: Strong,
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} as ComponentMeta<typeof Strong>;

const Template: ComponentStory<typeof Strong> = (args) => <Strong {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello, World!',
};
