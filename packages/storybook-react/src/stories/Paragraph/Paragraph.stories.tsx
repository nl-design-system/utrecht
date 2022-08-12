import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Paragraph',
  id: 'react-paragraph',
  component: Paragraph,
  args: {
    lead: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});

export const Lead = Template.bind({});

Lead.args = {
  lead: true,
};
