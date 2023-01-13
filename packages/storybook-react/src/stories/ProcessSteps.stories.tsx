import { ProcessSteps } from '@gemeente-denhaag/process-steps';
import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/process-steps/README.md';
import tokensDefinition from '@utrecht/components/process-steps/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';
import '@gemeente-denhaag/process-steps/index.css';

const meta = {
  title: 'React Component/Process steps',
  id: 'react-process-steps',
  component: ProcessSteps,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'denhaag-process-steps',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof ProcessSteps>;

export default meta;

const Template: StoryObj<typeof ProcessSteps> = (args) => <ProcessSteps {...args} />;

export const Default = Template.bind({});

Default.args = {
  expandedSteps: ['deelname', 'onderzoek'],
  steps: [
    {
      key: 'deelname',
      marker: 1,
      status: 'checked',
      steps: [
        {
          status: 'checked',
          title: 'Aanmelding ontvangen',
        },
      ],
      title: 'Deelname aan geluidsonderzoek',
    },
    {
      key: 'onderzoek',
      marker: 2,
      status: 'current',
      steps: [
        {
          status: 'checked',
          title: 'Afspraak meten geluidsoverlast gemaakt',
        },
        {
          status: 'checked',
          title: 'Geluidsoverlast gemeten',
        },
        {
          status: 'checked',
          title: 'Onderzoek resultaten verwerkt',
        },
      ],
      title: 'Onderzoek naar geluidsoverlast',
    },
    {
      key: 'uitvoeren',
      marker: 3,
      title: 'Uitvoeren van maatregelen',
    },
    {
      key: 'klaar',
      marker: 4,
      title: 'Maatregelen zijn uitgevoerd',
    },
  ],
};

export const DesignTokens = designTokenStory(meta);
