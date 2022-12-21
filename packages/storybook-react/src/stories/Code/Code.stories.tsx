import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Code',
  id: 'react-code',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '<input type="url" value="https://example.fi/">',
};
