/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import tokensDefinition from '@utrecht/top-task-link-css/src/tokens.json';
import readme from '@utrecht/top-task-nav-css/README.md?raw';
import {
  UtrechtIconAfvalScheiden,
  UtrechtIconMeldingKlacht,
  UtrechtIconNummerbord,
  UtrechtIconRijbewijs,
  UtrechtIconVerhuizen,
  UtrechtIconWerken,
  UtrechtTopTaskLink,
  UtrechtTopTaskNav,
} from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Top Task Navigation',
  id: 'web-component-top-task-nav',
  component: UtrechtTopTaskNav,
  argTypes: {
    children: {
      description: 'Content of the Top Task Navigation',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-top-task-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtTopTaskNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <UtrechtTopTaskLink href="https://example.com/subject-1">
        <UtrechtIconRijbewijs slot="icon"></UtrechtIconRijbewijs>
        Paspoort of ID-kaart aanvragen
      </UtrechtTopTaskLink>,
      <UtrechtTopTaskLink href="https://example.com/subject-2">
        <UtrechtIconMeldingKlacht slot="icon"></UtrechtIconMeldingKlacht>
        Melding/klacht openbare ruimte doorgeven
      </UtrechtTopTaskLink>,
      <UtrechtTopTaskLink href="https://example.com/subject-3">
        <UtrechtIconVerhuizen slot="icon"></UtrechtIconVerhuizen>
        Verhuizing doorgeven
      </UtrechtTopTaskLink>,
      <UtrechtTopTaskLink href="https://example.nl/" target="_new" external>
        <UtrechtIconWerken slot="icon"></UtrechtIconWerken>
        Werken bij de gemeente
      </UtrechtTopTaskLink>,
      <UtrechtTopTaskLink href="https://example.com/subject-5">
        <UtrechtIconNummerbord slot="icon"></UtrechtIconNummerbord>
        Parkeren: kentekenwijziging doorgeven
      </UtrechtTopTaskLink>,
      <UtrechtTopTaskLink href="https://example.nl/">
        <UtrechtIconAfvalScheiden slot="icon"></UtrechtIconAfvalScheiden>
        Afval
      </UtrechtTopTaskLink>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);
