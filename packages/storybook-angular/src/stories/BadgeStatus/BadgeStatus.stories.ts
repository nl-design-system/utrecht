import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtBadgeStatus } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Badge Status',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  id: 'angular-badge-status',
  component: UtrechtBadgeStatus,
  argTypes,
} as Meta;

const Template: Story<any> = (args) => ({
  props: args,
  template: `<utrecht-badge-status [status]="status">${args.badgeStatusContent}</utrecht-badge-status>`,
  component: UtrechtBadgeStatus,
});

export const Default = Template.bind({});

Default.args = {
  badgeStatusContent: 'Default',
};

export const Error = Template.bind({});

Error.args = {
  badgeStatusContent: 'Error',
  status: 'error',
};

export const Neutral = Template.bind({});

Neutral.args = {
  badgeStatusContent: 'Neutral',
  status: 'neutral',
};

export const Danger = Template.bind({});

Danger.args = {
  badgeStatusContent: 'Danger',
  status: 'danger',
};

export const Safe = Template.bind({});

Safe.args = {
  badgeStatusContent: 'Safe',
  status: 'safe',
};

export const Invalid = Template.bind({});

Invalid.args = {
  badgeStatusContent: 'Invalid',
  status: 'invalid',
};

export const Valid = Template.bind({});

Valid.args = {
  badgeStatusContent: 'Valid',
  status: 'valid',
};

export const Warning = Template.bind({});

Warning.args = {
  badgeStatusContent: 'Warning',
  status: 'warning',
};

export const Success = Template.bind({});

Success.args = {
  badgeStatusContent: 'Success',
  status: 'success',
};

export const Inactive = Template.bind({});

Inactive.args = {
  badgeStatusContent: 'Inactive',
  status: 'Inactive',
};

export const Active = Template.bind({});

Active.args = {
  badgeStatusContent: 'Active',
  status: 'active',
};
