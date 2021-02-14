import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#1b4050',
  colorSecondary: '#1b4050',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Helvetica", "Arial", sans-serif',
  fontCode: 'monospace',
  fontSize: '18px',

  brandTitle: 'NL Design System',
  brandUrl: 'https://designsystem.gebruikercentraal.nl',
  brandImage:
    'https://assets.gitlab-static.net/uploads/-/system/project/avatar/16983432/Screen_Shot_2020-02-18_at_13.43.53.png?width=40',
});
