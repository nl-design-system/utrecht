import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '@utrecht/component-library-react';
import React from 'react';
import { Default } from './Alert.stories';

export default {
  title: 'React.js Component/Alert/Type',
  id: 'react-alert-type',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});

Info.args = {
  ...Default.args,
  type: 'info',
};

export const OK = Template.bind({});

OK.args = {
  ...Default.args,
  type: 'ok',
};

export const Warning = Template.bind({});

Warning.args = {
  ...Default.args,
  type: 'warning',
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  type: 'error',
};
