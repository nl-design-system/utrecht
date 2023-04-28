import type { Meta, StoryObj } from '@storybook/vue3';
import { Alert, Heading1, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/alert/README.md?raw';
import tokensDefinition from '@utrecht/components/alert/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { createStory, handleNamedSlotContents } from './util';

//export type SlottedMeta<TComponent extends abstract new (...args: any) => any, TSlots extends string> = Meta<DefineComponent<InstanceType<TComponent>['$props'] & Record<TSlots, string>>>

const meta = {
  title: 'Vue.js Component/Alert',
  id: 'vue-alert',
  component: Alert,
  subcomponents: { Heading1, Paragraph },
  argTypes: {
    icon: {
      control: {
        type: 'text',
      },
      defaultValue: 'Icon',
      meta_description: 'icon slot content',
      table: {
        type: {
          summary: null,
        },
      },
    },
    message: {
      control: {
        type: 'text',
      },
      defaultValue: 'Message in an alert',
      meta_description: 'message slot content',
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-alert',
    tokens,
    tokensDefinition,
    docs: {
      component: {
        description: readme,
      },
    },
  },
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Alert, Heading1, Paragraph },
    subcomponents: { Heading1, Paragraph },
    computed: {
      slotContent() {
        return handleNamedSlotContents(args.message);
      },
    },
    template: `<Alert v-bind="$props">
    <template v-if="${'icon' in args}" v-slot:iconSlot>
      <span v-html="icon"></span>
    </template>
    <template v-if="${'message' in args}" v-slot>
      <div v-for="item in slotContent" :key="index">
        <component v-if="item.isComponent"
                  :is="item.isComponent ? item.name : null"
                  v-bind="item.props"
                  v-html="item.content"
        ></component>
        <span v-else v-html="item.content"></span>
      </div>
    </template>
    </Alert>`,
  }),
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    type: 'info',
    icon: `<i>Icon Placeholder</i>`,
    message: `plain text<Heading1>Lorem ipsum</Heading1>
        <div>html content</div>more plain text
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>third pure text <span>some extra html</span>
      4th plain text`,
  },
});

export const Info: Story = createStory(meta, {
  args: {
    ...Default.args,
    type: 'info',
  },
});

export const OK: Story = createStory(meta, {
  args: {
    ...Default.args,
    type: 'ok',
  },
});

export const Warning: Story = createStory(meta, {
  args: {
    ...Default.args,
    type: 'warning',
  },
});

export const Error: Story = createStory(meta, {
  args: {
    ...Default.args,
    type: 'error',
  },
});
