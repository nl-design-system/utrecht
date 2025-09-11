import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil.js';

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
              type: '',
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
              type: '',
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
    label: 'columns',
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
};
