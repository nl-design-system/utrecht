import type { Meta, StoryObj } from '@storybook/react';
import { ComponentTokensSection } from '@utrecht/documentation/components/ComponentTokensSection.jsx';
import React from 'react';

export const designTokenStory = (meta: Meta) => {
  const DesignTokens: StoryObj = ({ tokens, definition, component }) => (
    <ComponentTokensSection tokens={tokens} definition={definition} component={component} />
  );

  const DesignTokensStory = DesignTokens.bind({});

  DesignTokensStory.args = {
    tokens: meta.parameters.tokens,
    definition: meta.parameters.tokensDefinition,
    component: meta.parameters.tokensPrefix,
  };

  DesignTokensStory.parameters = {
    chromatic: {
      disableSnapshot: true,
    },
    docs: {
      source: {
        code: '',
      },
    },
    status: null,
  };

  return DesignTokensStory;
};
