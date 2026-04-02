import { render } from '@testing-library/react';
import { type VisualizationSpec } from 'vega-embed';
import { VegaVisualization } from './index';

const simpleSpec: VisualizationSpec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {
    values: [{ category: 'A', amount: 28 }],
  },
  mark: 'bar',
  encoding: {
    x: { field: 'category', type: 'nominal' },
    y: { field: 'amount', type: 'quantitative' },
  },
};

describe('VegaVisualization', () => {
  it('renders wrapper element with role img', () => {
    const { getByRole } = render(<VegaVisualization spec={simpleSpec} label="Grafiek" />);
    expect(getByRole('img')).toBeInTheDocument();
  });
});
