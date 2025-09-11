import Status from '@gemeente-denhaag/process-steps';
import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { designTokenStory } from './util.js';
import readme from '../../../../components/process-steps/README.md?raw';
import tokensDefinition from '../../../../components/process-steps/src/tokens.json';
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
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
