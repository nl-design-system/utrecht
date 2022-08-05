import type { Meta, StoryFn } from '@storybook/vue3';
import { CustomRadioButton } from '@utrecht/component-library-vue';
import { argTypes } from './argTypes';

export default {
  component: CustomRadioButton,
  id: 'vue-custom-radio-button',
  title: 'Vue.js Component/Custom Radio Button',
  argTypes: argTypes,
} as Meta<typeof CustomRadioButton>;

const Template: StoryFn<typeof CustomRadioButton> = (args) => ({
  components: { CustomRadioButton },
  setup() {
    return { args };
  },
  template: '<CustomRadioButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `<CustomRadioButton />`,
    },
  },
};
