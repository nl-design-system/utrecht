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
    'https://www.utrecht.nl/typo3conf/ext/alternet_sitepackage/Resources/Public/Images/svg/wapen-utrecht-rood.svg',
});
