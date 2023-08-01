import { Meta, StoryObj } from '@storybook/react';
import { VegaVisualization } from '@utrecht/component-library-react/dist/css-module/index';

const meta = {
  title: 'React Component/Vega Visualization',
  id: 'react-vega-visualization',
  component: VegaVisualization,
  args: {
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
      mark: 'bar',
      encoding: {
        x: { field: 'a', type: 'nominal', axis: { labelAngle: 0 } },
        y: { field: 'b', type: 'quantitative' },
      },
    },
  },
  argTypes: {
    spec: {
      description: 'The specification of the visualization according to the Vega or Vega-Lite schema.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof VegaVisualization>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
