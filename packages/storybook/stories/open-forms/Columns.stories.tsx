import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-columns',
  title: 'Open Formulieren/Columns',
  component: SingleFormioComponent,
  args: {
    key: 'cosign',
    type: 'columns',
    extraComponentProperties: {
      columns: [
        {
          size: 3,
          sizeMobile: 6,
          components: [
            {
              key: 'postcode',
              type: 'postcode',
              label: 'Postcode',
            },
          ],
        },
        {
          size: 3,
          sizeMobile: 6,
          components: [
            {
              key: 'number',
              type: 'textfield',
              label: 'Huisnummer',
            },
          ],
        },
      ],
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
