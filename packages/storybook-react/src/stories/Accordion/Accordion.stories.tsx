import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, defaultArgs, exampleArgs } from './args';

export default {
  title: 'React Component/Accordion',
  id: 'react-accordion',
  argTypes,
  args: defaultArgs,
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...exampleArgs,
};
