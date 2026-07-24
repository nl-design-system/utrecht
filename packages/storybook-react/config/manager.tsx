import { GridAltIcon } from '@storybook/icons';
import { theme } from '@utrecht/storybook-helpers/src/storybook-theme';
import React from 'react';
import { IconButton } from 'storybook/internal/components';
import { addons, types, useGlobals, useParameter } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  theme: create(theme),
});

function SpacingDebugTool() {
  const enabled = useParameter<boolean>('spacingDebug', false);
  const [globals, updateGlobals] = useGlobals();

  if (!enabled) return null;

  const isActive = Boolean(globals['spacingDebug'] ?? false);

  return (
    <IconButton
      title={isActive ? 'Verberg spacing debug overlay' : 'Toon spacing debug overlay'}
      onClick={() => updateGlobals({ spacingDebug: !isActive })}
      style={{ opacity: isActive ? 1 : 0.4 }}
    >
      <GridAltIcon />
    </IconButton>
  );
}

addons.add('spacing-debug/tool', {
  type: types.TOOL,
  title: 'Spacing debug',
  match: () => true,
  render: SpacingDebugTool,
});
