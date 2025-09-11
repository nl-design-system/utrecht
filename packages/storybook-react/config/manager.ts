import { theme } from '@utrecht/storybook-helpers/src/storybook-theme';
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  theme: create(theme),
});
