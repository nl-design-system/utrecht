import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-license-plate',
  title: 'Open Formulieren/LicensePlateField',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'licenseplate',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'licenseplate',
    label: 'Kentekennummer',
  },
};

export const Disabled: Story = {
  args: {
    key: 'licenseplate',
    label: 'Kentekennummer',
    extraComponentProperties: {
      disabled: true,
    },
  },
};
