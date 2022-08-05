import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';
import { CustomRadioButton } from '@utrecht/component-library-vue';
import { argTypes, data } from './argTypes';

export default {
  component: CustomRadioButton,
  id: 'vue-custom-radio-button-with-form-binding',
  title: 'Vue.js Component/Custom Radio Button/Form Binding',
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

export const FormBinding = Template.bind({});
FormBinding.args = {
  radioButtons: data,
};

FormBinding.parameters = {
  docs: {
    source: {
      code: `
      <script>
      export default {
        data() {
          return {
            modelValue: 1
          }
        }
      }
      </script>

      <template>
      <form>
      <FormFieldset>
        <FormFieldsetLegend>Kies locatie</FormFieldsetLegend>
          ${data
            .map(
              ({ id, label, value }) => `
                <FormField>
                  <FormLabel :for="${id}">
                    <CustomRadioButton name="kiez-locatie" :id="${id}" v-model="modelValue" value="${value}"/>
                    ${label}
                  </FormLabel>
                </FormField>`,
            )
            .join('')}
      </FormFieldset>
    </form>
    <div>modelValue: {{ modelValue }}</div>
    </template>
    `,
    },
  },
};
