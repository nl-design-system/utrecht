/* eslint-disable react/jsx-key */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from '@utrecht/component-library-react';
import React from 'react';
import { Default as PageContent } from '../PageContent/PageContent.stories';
import { Default as PageFooter } from '../PageFooter/PageFooter.stories';
import { Default as PageHeader } from '../PageHeader/PageContent.stories';

export default {
  title: 'React Component/Page',
  id: 'react-page',
  component: Page,
  subcomponents: { PageContent, PageFooter, PageHeader },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <PageHeader {...PageContent.args} />,
    <PageContent {...PageContent.args} />,
    <PageFooter {...PageFooter.args} />,
  ],
};
