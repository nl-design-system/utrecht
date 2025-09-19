import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { DataSourceContent, FloDecision } from './FloDecision';
import afvalBeslisboomRegelhulpData from './FloDecision/afval-beslisboom-regelhulp.json';
import voorbeeldToelichtingenData from './FloDecision/voorbeeld-toelichtingen-data.json';
interface FloDecisionStoryProps extends React.ComponentProps<typeof FloDecision> {
  dataSource: {
    content: DataSourceContent;
    name: string;
  };
}

const meta: Meta<FloDecisionStoryProps> = {
  title: 'CSS Component/Flo Legal Decision Tree',
  id: 'css-flolegal-decision-tree',
  component: FloDecision,
  argTypes: {
    dataSource: {
      description:
        'Use this field in Storybook to test different Flo legal decision JSON files and see how the component renders various decision trees.',
      control: 'object',
    },
    checkData: {
      description: 'The content property of the selected data source JSON object.',
      control: 'object',
    },
    loadingText: {
      description: 'Text to display while the FloDecision component is loading.',
      control: 'text',
    },
    outcomesHeader: {
      description: 'Header text for the outcomes section.',
      control: 'text',
    },
    outcomesHeaderLevel: {
      description: 'The heading level for the outcomes header (2-6).',
      control: { type: 'number', min: 2, max: 6, step: 1 },
    },
    showOutcomes: {
      description: 'Whether to display the outcomes section.',
      control: 'boolean',
    },
  },
  args: {
    checkData: afvalBeslisboomRegelhulpData.content,
    outcomesHeader: afvalBeslisboomRegelhulpData.name,
    outcomesHeaderLevel: 2,
    showOutcomes: true,
    dataSource: afvalBeslisboomRegelhulpData,
  },
  parameters: {
    bugs: '<URL>',
    tokensPrefix: 'utrecht-flolegal-decision-tree',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    docs: {},
  },
};

export default meta;

type Story = StoryObj<FloDecisionStoryProps>;
export const Default: Story = {
  render: (args) => {
    return (
      <FloDecision
        checkData={args.dataSource.content}
        outcomesHeader={args.dataSource.name}
        outcomesHeaderLevel={args.outcomesHeaderLevel}
        showOutcomes={args.showOutcomes}
      />
    );
  },
  args: {
    checkData: afvalBeslisboomRegelhulpData.content,
    outcomesHeader: afvalBeslisboomRegelhulpData.name,
    outcomesHeaderLevel: 2,
    showOutcomes: true,
  },
};

export const FloDecisionWithVoorbeeldToelichtingData: Story = {
  render: (args) => {
    return (
      <FloDecision
        checkData={voorbeeldToelichtingenData.content}
        outcomesHeader={voorbeeldToelichtingenData.name}
        outcomesHeaderLevel={args.outcomesHeaderLevel}
        showOutcomes={args.showOutcomes}
      />
    );
  },
  args: {
    checkData: voorbeeldToelichtingenData.content,
    outcomesHeader: voorbeeldToelichtingenData.name,
    outcomesHeaderLevel: 2,
    showOutcomes: true,
  },
};
