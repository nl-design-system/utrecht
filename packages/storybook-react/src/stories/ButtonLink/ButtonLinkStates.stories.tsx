import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonLink } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Link that looks like a button/States',
  id: 'react-button-link-states',
  component: ButtonLink,
  argTypes,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Hover = Template.bind({});

Hover.args = {
  children: 'Read more...',
  href: '#',
};

Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});

Focus.args = {
  children: 'Read more...',
  href: '#',
};

Focus.parameters = {
  pseudo: { focus: true },
};

export const Active = Template.bind({});

Active.args = {
  children: 'Read more...',
  href: '#',
};

Active.parameters = {
  pseudo: { active: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.args = {
  children: 'Read more...',
  href: '#',
};

FocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
