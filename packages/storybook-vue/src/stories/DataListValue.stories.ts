import { Meta, StoryObj } from '@storybook/vue3';
import { DataList, DataListItem, DataListValue } from '@utrecht/component-library-vue';
import { URLValue } from '@utrecht/component-library-vue';
import { createStory } from './util';

const meta = {
  title: 'Vue.js Component/Data List/Value',
  id: 'react-data-list--value',
  component: DataListValue,
  argTypes: {
    multiline: {
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    notranslate: {
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    value: {
      type: 'string',
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
  render: (args) => ({
    components: {
      DataList,
      DataListItem,
      DataListValue,
    },
    setup() {
      return { args };
    },
    template: `
      <DataList>
        <DataListItem>
          <DataListValue v-bind="$props" v-html="args.slot">
            {{ args.value }}
          </DataListValue>
        </DataListItem>
      </DataList>
    `,
  }),
} satisfies Meta<typeof DataListValue>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = createStory(meta, {
  args: {
    slot: 'Amsterdam',
    value: 'Amsterdam',
  },
});

export const NoTranslate: Story = createStory(meta, {
  args: {
    notranslate: true,
    slot: 'Mees de Vos',
    value: 'Mees de Vos',
  },
});

export const ValueWithURL: Story = createStory(meta, {
  components: {
    URLValue: URLValue,
  },
  props: {
    value: { type: String, default: 'https://example.fi/' },
  },
  args: {
    // Perhaps "voorbeeld.fi" when translated from English to Dutch
    // "fi" is used so we can test rendering of ligatures is avoided
    slot: `<URLValue>https://example.fi/</URLValue>`,
    value: `<URLValue>https://example.fi/</URLValue>`,
    notranslate: true,
  },
});

export const ValueWithEmail: Story = createStory(meta, {
  args: {
    slot: `<URLValue>mail@example.fi</URLValue>`,
    value: `<URLValue>mail@example.fi</URLValue>`,
    notranslate: true,
  },
});

export const MultilineValue: Story = createStory(meta, {
  args: {
    slot: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
    value: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
    multiline: true,
  },
});
