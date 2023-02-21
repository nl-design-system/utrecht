import type { Meta, StoryObj } from '@storybook/react';
import { ComponentTokensSection } from '@utrecht/documentation/components/ComponentTokensSection.jsx';
import React from 'react';

interface DesignToken {
  value?: string;
}

interface DesignTokenArgs {
  tokens: Array<DesignToken>;
  definition: Object;
  component: string;
}

interface DesignTokenParameters {
  parameters: {
    tokens: Array<DesignToken>;
    tokensDefinition: Object;
    tokenPrefix: string;
  };
}

export const designTokenStory = <T,>(meta: Meta<T> & DesignTokenParameters): StoryObj<T> => {
  return {
    args: {
      tokens: meta.parameters['tokens'],
      definition: meta.parameters['tokensDefinition'],
      component: meta.parameters['tokensPrefix'],
    },
    name: 'Design tokens',
    render: ({ tokens, definition, component }: DesignTokenArgs) => (
      <ComponentTokensSection tokens={tokens} definition={definition} component={component} />
    ),
    parameters: {
      chromatic: {
        disableSnapshot: true,
      },
      docs: {
        source: {
          code: '',
        },
      },
      status: null,
    },
  };
};
