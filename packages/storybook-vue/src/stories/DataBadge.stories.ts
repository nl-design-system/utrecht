import type { Meta, StoryObj } from '@storybook/vue3';
import { DataBadge } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/badge-data/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { createStory } from './util';

const meta: Meta<typeof DataBadge> = {
  id: 'vue-data-badge',
  title: 'Vue.js Component/Data Badge',
  component: DataBadge,
  tags: ['autodocs'],
  args: {
    value: 'Utrecht',
    valueSlotContent: 'Utrecht',
  },
  argTypes: {
    dateTime: {
      name: 'dateTime',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-data-badge',
    tokens,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: (args) => ({
    components: {
      DataBadge,
    },
    setup() {
      return { args };
    },
    template: `
      <DataBadge v-bind="$props">
        <template #dateTimeSlotContent>{{ args.dateTimeSlotContent }}</template>
        <template #valueSlotContent>{{ args.valueSlotContent }}</template>
      </DataBadge>
    `,
  }),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {},
});

export const Value: Story = createStory(meta, {
  args: {
    value: '50000',
    valueSlotContent: '50.000',
  },
});

export const Time: Story = createStory(meta, {
  args: {
    dateTimeSlotContent: '19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08Z',
  },
});
