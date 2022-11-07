import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, exampleArgs } from './argTypes';

export default {
  title: 'React Component/Heading',
  id: 'react-heading',
  component: Heading,
  argTypes,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingLevel1 = Template.bind({});

HeadingLevel1.args = {
  ...exampleArgs,
  level: 1,
};

export const HeadingLevel2 = Template.bind({});

HeadingLevel2.args = {
  ...exampleArgs,
  level: 2,
};

export const HeadingLevel3 = Template.bind({});

HeadingLevel3.args = {
  ...exampleArgs,
  level: 3,
};

export const HeadingLevel4 = Template.bind({});

HeadingLevel4.args = {
  ...exampleArgs,
  level: 4,
};

export const HeadingLevel5 = Template.bind({});

HeadingLevel5.args = {
  ...exampleArgs,
  level: 5,
};

export const HeadingLevel6 = Template.bind({});

HeadingLevel6.args = {
  ...exampleArgs,
  level: 6,
};

export const HeadingAppearance = Template.bind({});

HeadingAppearance.args = {
  ...exampleArgs,
  appearance: 'utrecht-heading-4',
  level: 2,
};
