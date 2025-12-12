import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { UtrechtStatusBadge } from '@utrecht/component-library-angular';

interface UtrechtStatusBadgeProps extends UtrechtStatusBadge {
  badgeStatusContent: string;
}

const meta: Meta<UtrechtStatusBadgeProps> = {
  title: 'Angular Component/Badge Status',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  id: 'angular-status-badge',
  component: UtrechtStatusBadge,
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
type Story = StoryObj<UtrechtStatusBadgeProps>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Default',
  },
};

export const Error: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Error',
    status: 'error',
  },
};

export const Neutral: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Neutral',
    status: 'neutral',
  },
};

export const Danger: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Danger',
    status: 'danger',
  },
};

export const Safe: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Safe',
    status: 'safe',
  },
};

export const Invalid: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Invalid',
    status: 'invalid',
  },
};

export const Valid: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Valid',
    status: 'valid',
  },
};

export const Warning: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Warning',
    status: 'warning',
  },
};

export const Success: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Success',
    status: 'success',
  },
};

export const Inactive: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Inactive',
    status: 'inactive',
  },
};

export const Active: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{badgeStatusContent}}</utrecht-status-badge>`,
  }),
  args: {
    badgeStatusContent: 'Active',
    status: 'active',
  },
};
