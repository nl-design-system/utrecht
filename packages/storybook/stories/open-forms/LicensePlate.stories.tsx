import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-license-plate',
  title: 'Open Formulieren/LicensePlateField',
  component: SingleFormioComponent,
  args: {
    key: 'licenseplate',
    type: 'licenseplate',
    label: 'Kentekennummer',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};
