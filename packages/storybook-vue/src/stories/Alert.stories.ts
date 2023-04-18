import type { Meta, StoryObj } from '@storybook/vue3';
import { Alert, Heading1, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/alert/README.md?raw';
import tokensDefinition from '@utrecht/components/alert/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { createStory } from './util';

const meta = {
  title: 'Vue.js Component/Alert',
  id: 'react-alert',
  component: Alert,
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
  render: () => ({
    components: {
      Alert,
      Heading1,
      Paragraph,
    },
    template: `<Alert v-bind="$props"><slot></slot></Alert>`,
  }),
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = createStory(meta, {
  args: {
    type: 'info',
    slot: `<Heading1>Lorem ipsum</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>`,
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
