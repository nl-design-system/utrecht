import type { Meta, StoryObj } from '@storybook/vue3';
import readme from '@utrecht/action-group-css/README.md?raw';
import tokens from '@utrecht/action-group-css/src/tokens.json';
import { ActionGroup, Button } from '@utrecht/component-library-vue';
import { createStory } from './util';

const meta = {
  id: 'vue-action-group',
  title: 'Vue.js Component/Action group',
  component: ActionGroup,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      ActionGroup,
      Button,
    },
    template: `<ActionGroup v-bind="$props"><slot></slot></ActionGroup>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-action-group',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof ActionGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Action group',
  args: {
    slot: `<Button appearance="primary-action-button">Save and continue</Button>
            <Button appearance="secondary-action-button">Back</Button>`,
  },
});
