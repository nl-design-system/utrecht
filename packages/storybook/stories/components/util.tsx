import type { StoryObj } from '@storybook/react';
import { ComponentTokensSection } from '@utrecht/documentation/components/ComponentTokensSection.jsx';
import React from 'react';

interface DesignTokenTree {
  [index: string]: DesignToken | DesignTokenTree;
}

interface DesignToken {
  comment?: string;
  name?: string;
  path?: string[];
  value: string | number;
}

interface Props {
  component: string;
  definition: DesignTokenTree;
  tokens: DesignToken[];
}

export interface DesignTokenStoryParameters {
  tokens: DesignToken[];
  tokensPrefix: string;
  definition: DesignTokenTree;
}

export const designTokenStory = (meta: any): any => {
  const DesignTokensStory: StoryObj<Props> = {
    args: {
      tokens: meta.parameters['tokens'],
      definition: meta.parameters['tokensDefinition'],
      component: meta.parameters['tokensPrefix'],
    },
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
    // TODO: Investigate how to avoid `as any`
    render: (({ tokens, definition, component }: Props) => (
      <ComponentTokensSection tokens={tokens} definition={definition} component={component} />
    )) as any,
  };

  return DesignTokensStory;
};
