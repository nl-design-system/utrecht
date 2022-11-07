import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageContent, Paragraph } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Page Content',
  id: 'react-page-content',
  component: PageContent,
} as ComponentMeta<typeof PageContent>;

const Template: ComponentStory<typeof PageContent> = (args) => <PageContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Paragraph>Page Content Area</Paragraph>,
};

(Default as any).displayName = 'PageContent';
