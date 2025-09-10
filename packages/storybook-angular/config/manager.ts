import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { theme } from '@utrecht/storybook-helpers/dist/storybook-theme';

addons.setConfig({
  theme: create(theme),
});
