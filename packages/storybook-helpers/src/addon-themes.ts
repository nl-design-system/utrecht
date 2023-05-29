// Configure storybook-addon-themes
export const addonThemes = {
  clearable: true,
  themes: {
    default: 'Gemeente Utrecht',
    target: 'root',
    list: [
      { name: 'No style', class: 'no-style', color: '#000000' },
      { name: 'No design tokens', class: 'no-theme', color: '#CCCCCC' },
      { name: 'Gemeente Utrecht', class: 'utrecht-theme', color: '#CC0000' },
      { name: 'Gemeente Utrecht (dark mode)', class: 'utrecht-theme--color-scheme-dark', color: '#000000' },
    ],
  },
};
