import '@utrecht/component-library-vue/dist/style.css';
import '@utrecht/design-tokens/dist/index.css';

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
