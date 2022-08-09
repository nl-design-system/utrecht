import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#2964a3',
  colorSecondary: '#1b4050',

  // UI
  appBg: '#e6e6e6',
  appContentBg: '#ffffff',
  appBorderColor: '#666666',
  appBorderRadius: 0,

  textColor: '#1d1d1c',

  barTextColor: '#000000',
  barSelectedColor: 'green',
  barBg: 'rgb(208, 208, 208)',

  // Typography
  fontBase: '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',
  fontCode: 'monospace',
  fontSize: '100%',

  brandTitle: 'Gemeente Utrecht',
  brandUrl: 'https://www.utrecht.nl',
  brandImage: 'logo.svg',
});
