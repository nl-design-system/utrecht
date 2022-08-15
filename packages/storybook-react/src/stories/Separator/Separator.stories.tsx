import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Separator',
  id: 'react-separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => <Separator {...args} />;

export const Default = Template.bind({});
