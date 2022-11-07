import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageFooter, Paragraph } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Page Footer',
  id: 'react-page-footer',
  component: PageFooter,
} as ComponentMeta<typeof PageFooter>;

const Template: ComponentStory<typeof PageFooter> = (args) => <PageFooter {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Paragraph>Page Footer Area</Paragraph>,
};

(Default as any).displayName = 'PageFooter';
