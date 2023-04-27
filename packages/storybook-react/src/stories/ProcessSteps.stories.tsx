import { Status } from '@gemeente-denhaag/process-steps';
import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/process-steps/README.md?raw';
import tokensDefinition from '@utrecht/components/process-steps/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';
import '@gemeente-denhaag/process-steps/index.css';

const meta = {
  title: 'React Component/Process steps',
  id: 'react-process-steps',
  component: Status,
  args: {
    expandedSteps: ['deelname', 'onderzoek'],
    steps: [
      {
        id: 'deelname',
        marker: 1,
        status: 'checked',
        steps: [
          {
            id: '1',
            status: 'checked',
            title: 'Aanmelding ontvangen',
          },
        ],
        title: 'Deelname aan geluidsonderzoek',
      },
      {
        id: 'onderzoek',
        marker: 2,
        status: 'current',
        steps: [
          {
            id: '2',
            status: 'checked',
            title: 'Afspraak meten geluidsoverlast gemaakt',
          },
          {
            id: '3',
            status: 'checked',
            title: 'Geluidsoverlast gemeten',
          },
          {
            id: '4',
            status: 'checked',
            title: 'Onderzoek resultaten verwerkt',
          },
        ],
        title: 'Onderzoek naar geluidsoverlast',
      },
      {
        id: 'uitvoeren',
        marker: 3,
        title: 'Uitvoeren van maatregelen',
      },
      {
        id: 'klaar',
        marker: 4,
        title: 'Maatregelen zijn uitgevoerd',
      },
    ],
  },
  parameters: {
    tokensPrefix: 'denhaag-process-steps',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
