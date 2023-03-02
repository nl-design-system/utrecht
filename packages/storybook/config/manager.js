import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import { utrechtTypographySansSerifFontFamily } from '@utrecht/design-tokens/dist/index.js';
import theme from '@utrecht/storybook-helpers/storybook-theme.json';

addons.setConfig({
  theme: create({
    ...theme,
    fontBase: utrechtTypographySansSerifFontFamily,
    fontCode: '"Fira Code VF", "Fira Code", monospace',
    fontSize: '120%',
  }),
});
