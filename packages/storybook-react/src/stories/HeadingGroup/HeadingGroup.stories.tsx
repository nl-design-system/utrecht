import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading1, HeadingGroup, Paragraph, PreHeading } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Heading Group',
  id: 'react-heading-group',
  component: HeadingGroup,
} as ComponentMeta<typeof HeadingGroup>;

const Template: ComponentStory<typeof HeadingGroup> = () => (
  <HeadingGroup style={{ '--utrecht-space-around': 1 } as any}>
    <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
  </HeadingGroup>
);

export const Default = Template.bind({});

const PreHeadingTemplate: ComponentStory<typeof HeadingGroup> = () => (
  <HeadingGroup style={{ '--utrecht-space-around': 1 } as any}>
    <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    <PreHeading>The Quick Brown Fox Jumps Over The Lazy Dog</PreHeading>
  </HeadingGroup>
);

export const WithPreHeading = PreHeadingTemplate.bind({});
