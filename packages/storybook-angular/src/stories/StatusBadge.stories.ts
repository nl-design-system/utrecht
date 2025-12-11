import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { UtrechtStatusBadge } from '@utrecht/component-library-angular';

interface UtrechtStatusBadgeProps extends UtrechtStatusBadge {
  statusBadgeContent: string;
}

const meta: Meta<UtrechtStatusBadgeProps> = {
  title: 'Angular Component/Status Badge',
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
    statusBadgeContent: {
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
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Default',
  },
};

export const Error: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Error',
    status: 'error',
  },
};

export const Neutral: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Neutral',
    status: 'neutral',
  },
};

export const Danger: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Danger',
    status: 'danger',
  },
};

export const Safe: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Safe',
    status: 'safe',
  },
};

export const Invalid: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Invalid',
    status: 'invalid',
  },
};

export const Valid: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Valid',
    status: 'valid',
  },
};

export const Warning: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Warning',
    status: 'warning',
  },
};

export const Success: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Success',
    status: 'success',
  },
};

export const Inactive: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Inactive',
    status: 'inactive',
  },
};

export const Active: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-status-badge [status]="status">{{statusBadgeContent}}</utrecht-status-badge>`,
  }),
  args: {
    statusBadgeContent: 'Active',
    status: 'active',
  },
};
