import { Meta, StoryObj } from '@storybook/react';
import { VegaVisualization } from '@utrecht/component-library-react/dist/css-module/index';
import tokensDefinition from '@utrecht/components/vega-visualization/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Vega Visualization',
  id: 'react-vega-visualization',
  component: VegaVisualization,
  argTypes: {
    'aria-label': {
      description: 'Accessible label to describe the visualization on screen readers.',
      control: {
        type: 'string',
      },
    },
    spec: {
      description: 'The specification of the visualization according to the Vega or Vega-Lite schema.',
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-vega-visualization',
    tokens,
    tokensDefinition,
  },
} satisfies Meta<typeof VegaVisualization>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BarChart: Story = {
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'A simple bar chart with embedded data.',
      data: {
        values: [
          { a: 'A', b: 28 },
          { a: 'B', b: 55 },
          { a: 'C', b: 43 },
          { a: 'D', b: 91 },
          { a: 'E', b: 81 },
          { a: 'F', b: 53 },
          { a: 'G', b: 19 },
          { a: 'H', b: 87 },
          { a: 'I', b: 52 },
        ],
      },
      title: 'Staafgrafiek',
      mark: 'bar',
      encoding: {
        x: { field: 'a', type: 'nominal', axis: { labelAngle: 0 }, title: 'x-Axis' },
        y: { field: 'b', type: 'quantitative', title: 'y-Axis' },
      },
    },
  },
};

export const GroupedBarChart: Story = {
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      data: {
        values: [
          { category: 'A', group: 'x', value: 0.1 },
          { category: 'A', group: 'y', value: 0.6 },
          { category: 'A', group: 'z', value: 0.9 },
          { category: 'B', group: 'x', value: 0.7 },
          { category: 'B', group: 'y', value: 0.2 },
          { category: 'B', group: 'z', value: 1.0 },
          { category: 'C', group: 'x', value: 0.6 },
          { category: 'C', group: 'y', value: 0.1 },
          { category: 'C', group: 'z', value: 0.2 },
        ],
      },
      mark: 'bar',
      encoding: {
        y: { field: 'value', type: 'quantitative' },
        x: { field: 'category' },
        xOffset: { field: 'group' },
        color: { field: 'group' },
      },
    },
  },
};

export const LineChart: Story = {
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'A simple line chart with embedded data.',
      data: {
        values: [
          { a: 'A', b: 28 },
          { a: 'B', b: 55 },
          { a: 'C', b: 43 },
          { a: 'D', b: 91 },
          { a: 'E', b: 81 },
          { a: 'F', b: 53 },
          { a: 'G', b: 19 },
          { a: 'H', b: 87 },
          { a: 'I', b: 52 },
        ],
      },
      title: 'Lijngrafiek',
      mark: {
        type: 'line',
        point: true,
      },
      encoding: {
        x: { field: 'a', type: 'nominal', axis: { labelAngle: 0 }, title: 'x-Axis' },
        y: { field: 'b', type: 'quantitative', title: 'y-Axis' },
      },
    },
  },
};

export const PieChart: Story = {
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'A simple pie chart with embedded data.',
      data: {
        values: [
          { category: 1, value: 4 },
          { category: 2, value: 6 },
          { category: 3, value: 10 },
          { category: 4, value: 3 },
          { category: 5, value: 7 },
          { category: 6, value: 8 },
        ],
      },
      mark: 'arc',
      encoding: {
        theta: { field: 'value', type: 'quantitative' },
        color: { field: 'category', type: 'nominal', legend: { padding: 16 } },
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
