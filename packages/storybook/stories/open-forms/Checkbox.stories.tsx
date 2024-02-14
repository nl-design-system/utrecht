import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-checkbox',
  title: 'Open Formulieren/Checkbox',
  component: SingleFormioComponent,
  args: {
    key: 'checkbox',
    type: 'checkbox',
    label: 'Ik heb de voorwaarden gelezen en ga hiermee akkoord.',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {};
