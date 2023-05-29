import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import { theme } from '@utrecht/storybook-helpers/src/storybook-theme';

addons.setConfig({
  theme: create(theme),
});
