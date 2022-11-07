import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, Heading1, Paragraph } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Article',
  id: 'react-article',
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />;

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
