import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import theme from '@utrecht/storybook-helpers/storybook-theme.json';

addons.setConfig({
  theme: create(theme),
});
