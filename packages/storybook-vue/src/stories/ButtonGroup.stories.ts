import type { Meta, StoryObj } from '@storybook/vue3';
import { Button, ButtonGroup } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/button-group/README.md?raw';
import tokens from '@utrecht/components/button-group/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-button-group',
  title: 'Vue.js Component/Button group',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      ButtonGroup,
      Button,
    },
    template: `<ButtonGroup v-bind="$props"><slot></slot></ButtonGroup>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-button-group',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Button group',
  args: {
    slot: `<Button appearance="primary-action-button">Save and continue</Button>
            <Button appearance="secondary-action-button">Back</Button>`,
  },
});
