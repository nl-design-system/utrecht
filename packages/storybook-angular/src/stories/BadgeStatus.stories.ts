import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { UtrechtBadgeStatus } from '@utrecht/component-library-angular';

interface UtrechtBadgeStatusProps extends UtrechtBadgeStatus {
  badgeStatusContent: string;
}

const meta: Meta<UtrechtBadgeStatusProps> = {
  title: 'Angular Component/Badge Status',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  id: 'angular-badge-status',
  component: UtrechtBadgeStatus,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['neutral', 'danger', 'safe', 'invalid', 'valid', 'error', 'warning', 'success', 'inactive', 'active'],
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    badgeStatusContent: {
      control: 'text',
      table: {
        category: 'DEMO Property',
        defaultValue: { summary: '' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<UtrechtBadgeStatusProps>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Default',
  },
};

export const Error: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Error',
    status: 'error',
  },
};

export const Neutral: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Neutral',
    status: 'neutral',
  },
};

export const Danger: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Danger',
    status: 'danger',
  },
};

export const Safe: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Safe',
    status: 'safe',
  },
};

export const Invalid: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Invalid',
    status: 'invalid',
  },
};

export const Valid: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Valid',
    status: 'valid',
  },
};

export const Warning: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Warning',
    status: 'warning',
  },
};

export const Success: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Success',
    status: 'success',
  },
};

export const Inactive: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Inactive',
    status: 'inactive',
  },
};

export const Active: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-badge-status [status]="status">{{badgeStatusContent}}</utrecht-badge-status>`,
  }),
  args: {
    badgeStatusContent: 'Active',
    status: 'active',
  },
};
