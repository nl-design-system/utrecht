import type { Meta, StoryObj } from '@storybook/vue3';
import { DataList, DataListItem, DataListKey, DataListValue } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/data-list/README.md?raw';
import tokens from '@utrecht/components/data-list/tokens.json';
import tokensDefinition from '@utrecht/components/data-list/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-data-list',
  title: 'Vue.js Component/Data List',
  component: DataList,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    appearance: {
      name: 'appearance',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition: tokensDefinition,
    tokenPrefix: 'utrecht-data-list',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<DataList v-bind="$props"><slot></slot></DataList>',
      },
    },
  },
  render: (args) => ({
    components: {
      DataList,
      DataListItem,
      DataListKey,
      DataListValue,
    },
    setup() {
      return { args };
    },
    template: `
      <DataList>
        <DataListItem>
          <DataListKey>Gereserveerde zitplaats</DataListKey>
          <DataListValue :value="42">42</DataListValue>
        </DataListItem>
      </DataList>`,
  }),
} satisfies Meta<typeof DataList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {},
});
