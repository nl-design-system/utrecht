import type { Meta, StoryFn } from '@storybook/vue3';
import { CustomRadioButton } from '@utrecht/component-library-vue';
import { argTypes } from './argTypes';

export default {
  component: CustomRadioButton,
  id: 'vue-custom-radio-button-states',
  title: 'Vue.js Component/Custom Radio Button/States',
  argTypes,
} as Meta<typeof CustomRadioButton>;

const Template: StoryFn<typeof CustomRadioButton> = (args) => ({
  components: { CustomRadioButton },
  setup() {
    return { args };
  },
  template: '<CustomRadioButton v-bind="args" />',
});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
Checked.parameters = {
  docs: {
    source: {
      code: `<CustomRadioButton :checked="true" />`,
    },
  },
};

export const CheckedAndDisabled = Template.bind({});
CheckedAndDisabled.args = {
  checked: true,
  disabled: true,
};

CheckedAndDisabled.parameters = {
  docs: {
    source: {
      code: `<CustomRadioButton :checked="true" :disabled="true" />`,
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: `<CustomRadioButton :disabled="true" />`,
    },
  },
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
};

Invalid.parameters = {
  docs: {
    source: {
      code: `<CustomRadioButton :invalid="true" />`,
    },
  },
};

export const Focus = Template.bind({});

Focus.parameters = {
  pseudo: { focus: true },
  docs: {
    source: {
      code: `<CustomRadioButton />`,
    },
  },
};

export const focusVisible = Template.bind({});

focusVisible.parameters = {
  pseudo: { focusVisible: true },
  docs: {
    source: {
      code: `<CustomRadioButton  />`,
    },
  },
};
