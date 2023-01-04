import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AlertDialog } from '@utrecht/component-library-react';
import React from 'react';
import { Default } from './AlertDialog.stories';

export default {
  title: 'React Component/Alert dialog/Type',
  id: 'react-alert-dialog--type',
  component: AlertDialog,
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => <AlertDialog {...args} />;

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
