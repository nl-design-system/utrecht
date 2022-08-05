import type { Meta, StoryFn } from '@storybook/vue3';
import { CustomRadioButton } from '@utrecht/component-library-vue';
import { argTypes } from './argTypes';

export default {
  component: CustomRadioButton,
  id: 'vue-custom-radio-button-with-label',
  title: 'Vue.js Component/Custom Radio Button/ With Label',
  argTypes: argTypes,
} as Meta<typeof CustomRadioButton>;

const Template: StoryFn<typeof CustomRadioButton> = (args) => ({
  components: { CustomRadioButton },
  setup() {
    return { args };
  },
  template: `
  <FormField>
  <CustomRadioButton v-bind="args" id="form-field-with-radio-button-and-label" name="form-field-with-radio-button-and-label"/>
    <FormLabel for="form-field-with-radio-button-and-label" type="radio" :checked="args.checked" :disabled="args.disabled">
        {{args.labelText}}
    </FormLabel>
  </FormField>`,
});

export const WithLabel = Template.bind({});
WithLabel.args = {
  labelText: 'Label',
};

WithLabel.parameters = {
  docs: {
    source: {
      code: `
      <FormField>
      <CustomRadioButton id="form-field-with-radio-button-and-label" name="form-field-with-radio-button-and-label" />
        <FormLabel for="form-field-with-radio-button-and-label" type="radio" > Radio Button Label </FormLabel>
      </FormField>`,
    },
  },
};
