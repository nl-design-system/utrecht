import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';
import { CustomRadioButton } from '@utrecht/component-library-vue';
import { argTypes, data } from './argTypes';
export default {
  component: CustomRadioButton,
  id: 'vue-custom-radio-button-with-fieldset-and-legend',
  title: 'Vue.js Component/Custom Radio Button/ Custom Radio Button With Fieldset And Legend',
  argTypes: argTypes,
} as Meta<typeof CustomRadioButton>;

const Template: StoryFn<typeof CustomRadioButton & { radioButtons: typeof data }> = (args) => ({
  components: { CustomRadioButton },
  setup() {
    return { args, options: args.radioButtons };
  },
  template: `
  <form>
  <FormFieldset>
  <FormFieldsetLegend>Kies locatie</FormFieldsetLegend>
  <FormField v-for="{id, label, value} in options" :key="id">
    <FormLabel :for="id" type="radio" :checked="args.checked" :disabled="args.disabled">
        <CustomRadioButton name="kiez-locatie" v-bind="args" :id="id" :value="value" @update:modelValue="action"/>
        {{label}}
    </FormLabel>
     </FormField>
    </FormFieldset>
  </form>`,
  methods: { action: action('modelValue') },
});

export const WithFieldsetAndLegend = Template.bind({});
WithFieldsetAndLegend.args = {
  radioButtons: data,
};

WithFieldsetAndLegend.parameters = {
  docs: {
    source: {
      code: `
      <form>
      <FormFieldset>
        <FormFieldsetLegend>Kies locatie</FormFieldsetLegend>
          ${data
            .map(
              ({ id, label, value }) => `
                <FormField>
                  <FormLabel :for="${id}">
                    <CustomRadioButton name="kiez-locatie" :id="${id}" value="${value}"/>
                    ${label}
                  </FormLabel>
                </FormField>`,
            )
            .join('')}
      </FormFieldset>
    </form>`,
    },
  },
};
