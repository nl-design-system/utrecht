import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonLink } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Link that looks like a button/External link',
  id: 'react-button-link--rel-external',
  component: ButtonLink,
  argTypes,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const External = Template.bind({});

External.args = {
  children: 'Read more...',
  href: 'https://example.com/',
  external: true,
};
