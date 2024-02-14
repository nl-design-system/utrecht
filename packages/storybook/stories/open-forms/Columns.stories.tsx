import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-columns',
  title: 'Open Formulieren/Columns',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'columns',
    extraComponentProperties: {
      columns: [
        {
          size: '',
          sizeMobile: '',
          components: [
            {
              key: '',
              type: 'postcode',
              label: '',
            },
          ],
        },
        {
          size: '',
          sizeMobile: '',
          components: [
            {
              key: '',
              type: 'textfield',
              label: '',
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
  args: {
    key: 'cosign',
    extraComponentProperties: {
      columns: [
        {
          size: 3,
          sizeMobile: 6,
          components: [
            {
              key: 'postcode',
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
              label: 'Huisnummer',
            },
          ],
        },
      ],
    },
  },
};
