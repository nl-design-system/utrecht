import { app } from '@storybook/vue3';
import {
  BadgeStatus,
  Button,
  Checkbox,
  FormField,
  FormFieldset,
  FormFieldsetLegend,
  FormLabel,
  Heading,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Select,
} from '@utrecht/component-library-vue';
import '@utrecht/component-library-vue/dist/style.css';
import '@utrecht/design-tokens/dist/index.css';

app.component('BadgeStatus', BadgeStatus);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('FormFieldset', FormFieldset);
app.component('FormFieldsetLegend', FormFieldsetLegend);
app.component('FormField', FormField);
app.component('FormLabel', FormLabel);
app.component('Heading', Heading);
app.component('PageContent', PageContent);
app.component('PageFooter', PageFooter);
app.component('PageHeader', PageHeader);
app.component('Paragraph', Paragraph);
app.component('Select', Select);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div class="utrecht-theme"><story /></div>',
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
