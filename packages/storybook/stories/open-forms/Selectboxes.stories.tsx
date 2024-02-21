import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-selectboxes',
  title: 'Open Formulieren/Selectboxes',
  component: SingleFormioComponent,
  args: {
    type: 'selectboxes',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    extraComponentProperties: {
      values: [
        {
          label: 'Optie A',
          value: 'selectA',
        },
        {
          label: 'Optie B',
          value: 'selectB',
        },
        {
          label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          value: 'selectC',
        },
      ],
    },
  },
};

export const Checked: Story = {
  args: {
    extraComponentProperties: {
      values: [
        {
          label: 'Optie A',
          value: 'selectA',
        },
        {
          label: 'Optie B',
          value: 'selectB',
        },
        {
          label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          value: 'selectC',
        },
      ],
      defaultValue: 'selectA',
    },
  },
};
