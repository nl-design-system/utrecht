import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading1, PageHeader } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Page Header',
  id: 'react-page-header',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Heading1>Header Area</Heading1>,
};

(Default as any).displayName = 'PageHeader';
