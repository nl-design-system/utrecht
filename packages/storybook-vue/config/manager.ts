import { theme } from '@utrecht/storybook-helpers/dist/storybook-theme';
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  theme: create(theme),
});
