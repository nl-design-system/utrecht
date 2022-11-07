import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Article, Document, Heading1, Paragraph } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Document',
  id: 'react-document',
  component: Document,
} as ComponentMeta<typeof Document>;

const Template: ComponentStory<typeof Document> = (args) => <Document {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <Article>
      <Heading1>Lorem ipsum</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    </Article>
  ),
};
