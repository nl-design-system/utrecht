import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading1, Paragraph, SpotlightSection } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Spotlight section',
  id: 'react-spotlight-section',
  component: SpotlightSection,
  argTypes,
} as ComponentMeta<typeof SpotlightSection>;

const Template: ComponentStory<typeof SpotlightSection> = (args) => <SpotlightSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Heading1>Lorem ipsum</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    </>
  ),
};
