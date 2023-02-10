import {
  nldesignsystemTypographyMonospaceFontFamily,
  nldesignsystemTypographySansSerifFontFamily,
} from '@nl-design-system-unstable/design-tokens/dist/index';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import theme from '../../storybook-helpers/storybook-theme.json';
addons.setConfig({
  theme: create({
    ...theme,
    fontBase: nldesignsystemTypographySansSerifFontFamily,
    fontCode: nldesignsystemTypographyMonospaceFontFamily,
    fontSize: '18px',
  }),
});
