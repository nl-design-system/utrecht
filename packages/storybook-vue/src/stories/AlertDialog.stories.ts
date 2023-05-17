import { Meta, StoryObj } from '@storybook/vue3';
import { AlertDialog, Button, ButtonGroup, Paragraph } from '@utrecht/component-library-vue';
import { ref } from 'vue';
import { createStory } from './util';

const meta: Meta<typeof AlertDialog> = {
  id: 'vue-alert-dialog',
  title: 'Vue.js Component/Alert Dialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    buttonLabel: { control: 'text' },
    buttonAppearance: { control: 'select', options: ['primary', 'secondary'] },
    buttonHint: { control: 'text' },
    default: { control: 'text' },
  },
  render: (args: any) => ({
    components: { Paragraph, ButtonGroup, Button, AlertDialog },
    setup() {
      return { args };
    },
    template: `
      <AlertDialog open="">
      <form method="dialog">
        <Paragraph>
          {{ args.default }}
        </Paragraph>
        <ButtonGroup>
          <Button type="submit">{{ args.buttonLabel }}</Button>
        </ButtonGroup>
      </form>
      </AlertDialog>
    `,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Alert Dialog Default',
  args: {
    buttonLabel: 'Click me!',
    buttonAppearance: 'primary',
    buttonHint: 'Click to open the alert dialog',
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n            est laborum.',
    type: 'info',
  },
});

export const Info: Story = {
  args: {
    ...Default.args,
    type: 'info',
  },
};

export const OK: Story = {
  args: {
    ...Default.args,
    type: 'ok',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    type: 'error',
  },
};

export const ShowModal = {
  args: {
    ...Default.args,
    type: 'warning',
  },
  render: (args: any) => ({
    components: { Paragraph, ButtonGroup, Button, AlertDialog },
    setup() {
      const childComponentRef = ref<typeof AlertDialog>();

      const openChildDialog = () => {
        // childComponentRef.value?.$el.showModal(); // optie 1: obv van HTML, zonder logica van de Vue component nodig te hebben
        childComponentRef.value?.['openDialog'](); // optie 2: obv van Vue, maar afhankelijk van logica in AlertDialog.vue
      };

      return { childComponentRef, openChildDialog, args };
    },
    template: `
      <div>
      <Button @click="openChildDialog" :aria-pressed="args?.open" :appearance="args?.buttonAppearance" :hint="args?.buttonHint">{{ args?.buttonLabel }}</Button>
      <AlertDialog ref="childComponentRef" >
        <form method="dialog">
          <Paragraph>
            {{ args?.default }}
          </Paragraph>
          <ButtonGroup>
            <Button type="submit">{{ args?.buttonLabel }}</Button>
          </ButtonGroup>
        </form>
      </AlertDialog>
      </div>
    `,
  }),
};
